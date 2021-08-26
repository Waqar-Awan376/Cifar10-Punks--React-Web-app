import React, {useEffect, useState} from "react";
import {Dash,Plus} from "react-bootstrap-icons";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Loader1 from "./loaders/loader1";

const Mint=(props)=>
{
    const [amount,setAmount]=useState(1);
    const [balance,setBalance]=useState(0.0);
    const [totalPrice,setTotalPrice]=useState(0);
    const [totalSupply,setTotalSupply]=useState(0);
    const [mintingLoader,setMintingLoader]=useState(false);
    const [progress,setProgress]=useState(0);

    useEffect(()=>
    {
       props.metaRef.current.getAccountBalance().then((curBalance)=>
       {
           setBalance(parseFloat(curBalance).toFixed(3));
       }).catch(err=>console.log(err));
        props.metaRef.current.getMintPrice().then((mintPrice)=>
        {
            setTotalPrice((amount*parseFloat(mintPrice)).toFixed(5));
        }).catch(err=>console.log(err));
        props.metaRef.current.getTotalSupply().then((supply)=>
        {
            setTotalSupply(parseInt(supply));
        }).catch(err=>console.log(err));
        props.metaRef.current.getTotalSupply().then((supply)=>
        {
            props.metaRef.current.getMaxNumToken().then((maxToken)=>
            {
                console.log(parseFloat(supply));
                console.log(parseFloat(maxToken));
                console.log(parseFloat(supply)/parseFloat(maxToken));
                setProgress((parseFloat(supply)/parseFloat(maxToken))*100);
            })
        }).catch(err=>console.log(err));
    },[amount]);

    const increaseAmount=(event)=>
    {
        props.metaRef.current.getMaxMintableAtOnce().then((maxAmount)=>
        {
            if(maxAmount>=(amount+1))
            {
                setAmount(parseInt(amount)+1);
            }
        }).catch(err=>console.log(err));
    }
    const decreaseAmount=()=>
    {
        if((amount-1)>0)
        {
            setAmount(parseInt(amount)-1);
        }
    }
    const setMintToMax=()=>
    {
        props.metaRef.current.getMaxMintableAtOnce().then((maxAmount)=>
        {
            setAmount(parseInt(maxAmount));
        }).catch(err=>console.log(err));
    }
    const executeMint=()=>
    {
        setMintingLoader(true);
        props.metaRef.current.mint(amount.toString()).then((data)=>
        {
            console.log(data);
            setMintingLoader(false);
        }).catch(err=>console.log(err));
    }
    return(
        <div>
            &nbsp;
            <div className="my-5 p-3 background-overlay text-center">
                <h1 className="my-3">Buy Cifar10 Punks</h1>

                <p className="mt-5">{totalSupply} NFT's</p>
                <div className="my-4 container row">
                    <div className="col-md-3"></div>
                    <div className="col-md-2">ETH Balance</div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2 light-brown-clr">{balance} ETH</div>
                    <div className="col-md-3"></div>
                </div>
                <div className="my-4 container row">
                    <div className="col-md-3"></div>
                    <div className="col-md-2">Amount</div>
                    <div className="col-md-2"><span
                        className="badge bg-light text-dark cursor-pointer" onClick={decreaseAmount}><Dash/></span> &nbsp;<span>{amount}</span> &nbsp;<span className="badge bg-light text-dark cursor-pointer" onClick={increaseAmount}><Plus/></span></div>
                    <div className="col-md-2"><button className="primary-btn-1 m-2 m-md-0" onClick={setMintToMax}>Max</button></div>
                    <div className="col-md-3"></div>
                </div>
                <div className="my-4 container row">
                    <div className="col-md-3"></div>
                    <div className="col-md-2">Total Price</div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2 light-brown-clr">{totalPrice} ETH</div>
                    <div className="col-md-3"></div>
                </div>
                <div>
                    {mintingLoader===true ? <Loader1 width='100' height='100'/> :<button className="primary-btn-1 fs-5 width-200px" onClick={executeMint}>Mint</button>}
                </div>
                <div className="my-4 container row justify-content-center">
                    <div className="col-md-4"></div>
                    <div className="col-md-4"><div className="mt-4">
                        <ProgressBar now={progress} label={`${progress}%`} variant={'light-brown'} />
                    </div></div>
                    <div className="col-md-4"></div>
                </div>
            </div>
            &nbsp;
        </div>
    );
}

export default Mint;
