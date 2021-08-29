import React, {Component} from "react";
import CifarContract from "./contracts/Cifar.json";
import getWeb3 from "./getWeb3";


class MetaMask extends Component {
    state = { web3: null, accounts: null, contract: null };

    constructor(props) {
        super(props);
        window.metaMask = this;
    }

    componentDidMount = async () => {
        try {
            // Get network provider and web3 instance.
            const web3 = await getWeb3();

            // Use web3 to get the user's accounts.
            // TODO: get active account..
            const accounts = await web3.eth.getAccounts();

            // Get the contract instance.
            const networkId = await web3.eth.net.getId();
            const deployedNetwork = CifarContract.networks[networkId];
            const instance = new web3.eth.Contract(
                CifarContract.abi,
                deployedNetwork && deployedNetwork.address,
            );

            // Set web3, accounts, and contract to the state, and then proceed with an
            // example of interacting with the contract's methods.
            this.setState({ web3, accounts, contract: instance });
        } catch (error) {
            // Catch any errors for any of the above operations.
            alert(
                `Failed to load web3, accounts, or contract. Check console for details.`,
            );
            console.error(error);
        }


        // Testing stuff and logging to console
        console.log("Account: ", this.state.accounts.toString());
        const tokenIDs = await window.metaMask.getTokensOfOwner();
        console.log("Tokens of owner: ", tokenIDs);

        const maxNumToken = await window.metaMask.getTotalSupply();



        const accountBalance = await window.metaMask.getAccountBalance();
        console.log("Account Balance: ", accountBalance);

        const mintPrice = await window.metaMask.getMintPrice();
        console.log("Mint Price: ", mintPrice);

        const maxMintableAtOnce = await window.metaMask.getMaxMintableAtOnce();
        console.log("Max mintable at once: ", maxMintableAtOnce);

        const provenanceHash = await window.metaMask.getProvenanceHash();
        console.log("Provenance hash: ", provenanceHash);

        const concatHash = await window.metaMask.getConcatHash();
        console.log("Concat hash: ", concatHash);



        for (let i = 0; i < maxNumToken; i++) {
            var uri = await window.metaMask.getTokenUri(tokenIDs[i]);
            console.log("URI " + i + ":", uri);
        }

        for (let i = 0; i < maxNumToken; i++) {
            var json = await window.metaMask.getJsonFromTokenUri(tokenIDs[i]);
            console.log("JSON " + i + ":", json);
        }
    }
    connect=async ()=>
    {
        return true;
    }
    getTokensOfAddress = async (address) => {
        // TODO: verify address input
        const tokenIDs = await this.state.contract.methods.tokensOfOwner(address.toString()).call();
        return tokenIDs;
    }

    getTokensOfOwner = async () => {
        return window.metaMask.getTokensOfAddress(this.state.accounts.toString());
    }

    mint = async (amount) => { // TODO: Either pass total price or just amount and multiply
        var mintPrice = await window.metaMask.getMintPrice();
        var val = mintPrice * amount;
        val = this.state.web3.utils.toWei(val.toString(), "ether");
        console.log("minting...");
        return await this.state.contract.methods.mintCifar10(amount).send({ from: this.state.accounts.toString(), value: val });
    }
    isValidAddress = async (address) => {
        return this.state.web3.utils.isAddress(address);
    }

    getMintPrice = async () => {
        var mintPrice = await this.state.contract.methods.getMintPrice().call();
        mintPrice = this.state.web3.utils.fromWei(mintPrice, "ether");
        return mintPrice;
    }

    getMaxMintableAtOnce = async () => {
        const maxMintableAtOnce = await this.state.contract.methods.getMaxMintableAtOnce().call();
        return maxMintableAtOnce;
    }

    getAccountBalance = async () => {
        var balance = await this.state.web3.eth.getBalance(this.state.accounts.toString()); //Will give value in.
        balance = this.state.web3.utils.fromWei(balance, "ether"); // TODO: other currencies?
        return balance;
    }

    getRewardBalance = async () => {
        console.log("TODO: Show accumulated Rewards")
        return 17.4312;
    }

    claimRewards = async () => {
        //await this.state.contract.methods.safeMint(this.state.accounts.toString()).send({ from: this.state.accounts.toString() });
        console.log("TODO: Claim Rewards")
    }

    getProvenanceHash = async () => {
        const provenanceHash = await this.state.contract.methods.getProvenanceHash().call();
        return provenanceHash;
    }

    getConcatHash = async () => {
        const concatHashUri = await this.state.contract.methods.getConcatHashURI().call();
        var response = await (await fetch(concatHashUri));
        return response.text();
    }

    getStartingIndex = async () => {
        const startIndex = await this.state.contract.methods.getStartIndex().call();
        return startIndex;
    }
    // Current supply
    getTotalSupply = async () => {
        const totalSupply = await this.state.contract.methods.totalSupply().call();
        return totalSupply;
    }

    getMaxNumToken = async () => {
        const maxNumToken = await this.state.contract.methods.getMaxNumToken().call();
        return maxNumToken;
    }

    getTokenUri = async (tokenId) => {
        const uri = await this.state.contract.methods.tokenURI(tokenId).call();
        return uri;
    }

    getJsonFromTokenUri = async (tokenId) => {
        var metadataUri = await window.metaMask.getTokenUri(tokenId);
        var response = await (await fetch(metadataUri)).json();
        return response;
    }
    getCurAccount= async ()=>{
        return this.state.accounts.toString();
    }

    // Access metadata
    getNameFromJson = async (jsonObject) => {
        return jsonObject["name"];
    }

    getDescriptionFromJson = async (jsonObject) => {
        return jsonObject["description"];
    }

    getImageFromJson = async (jsonObject) => {
        return jsonObject["image"];
    }

    getSizeFromJson = async (jsonObject) => {
        return jsonObject["attributes"][0]["Size"];
    }

    getImageHashFromJson = async (jsonObject) => {
        return jsonObject["attributes"][0]["Image Hash"];
    }

    // Render nothing!
    render() {
        return (
            <></>
        );
    }
}

export default MetaMask;
