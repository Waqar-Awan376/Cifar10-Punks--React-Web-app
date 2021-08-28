import React, {useEffect, useState} from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Loader1 from "./loaders/loader1";
import ErrorToast from "../toast/errorToast";
import SuccessToast from "../toast/successToast";
import Timer from "../Timer/timer";

const Mint=(props)=>
{
    const [amount,setAmount]=useState(1);
    const [balance,setBalance]=useState(0.0);
    const [totalPrice,setTotalPrice]=useState(0);
    const [totalSupply,setTotalSupply]=useState(0);
    const [show, setShow] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [errorMessage,setErrorMessage]=useState("");
    const [successMessage,setSuccessMessage]=useState("");
    const [mintingLoader,setMintingLoader]=useState(false);
    const [currentTime,setCurrentTime]=useState((new Date().getTime())/1000);
    const [progress,setProgress]=useState(0);
    const [remainingTime,setRemainingTime]=useState((new Date("8/31/2021 02:22:00").getTime())/1000);

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
                setProgress( parseFloat((parseFloat(supply)/parseFloat(maxToken))*100).toFixed(2));
            })
        }).catch(err=>console.log(err));
    });

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
        props.metaRef.current.mint(amount).then((data)=>
        {
            setSuccessMessage("You have successfully minted");
            setShowSuccess(true);
            setTimeout(()=>
            {
                setShowSuccess(false);
            },3000)
            setMintingLoader(false);
        }).catch((err)=>{
            if(err.code===4001)
            {
                setErrorMessage(err.message);
                setShow(true);
                setTimeout(()=>
                {
                    setShow(false);
                },3000)
            }
            setMintingLoader(false);
        });
}
    return(
        <div>
            &nbsp;
            <ErrorToast show={show} msg={errorMessage}/>
            <SuccessToast show={showSuccess} msg={successMessage}/>
            <div className="my-5 p-3 background-overlay text-center">
                <h1 className="my-3">Buy Cifar10 Punks</h1>
                {remainingTime>currentTime?( <div>
                    <Timer remainingTimeInSeconds={remainingTime}/>
                </div>):''}
                <p className="mt-5">{totalSupply} NFT's</p>
                <div className="my-4 row">
                    <div className="col-md-3"></div>
                    <div className="col-md-2">ETH Balance</div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2 light-brown-clr">{balance} ETH</div>
                    <div className="col-md-3"></div>
                </div>
                <div className="my-4 row">
                    <div className="col-md-3"></div>
                    <div className="col-md-2">Amount</div>
                    <div className="col-md-2"><span
                        className="badge bg-light text-dark cursor-pointer border-radius-50per me-2" onClick={decreaseAmount}>-</span> &nbsp;<span>{amount}</span> &nbsp;<span className="badge bg-light text-dark cursor-pointer border-radius-50per ms-2" onClick={increaseAmount}>+</span></div>
                    <div className="col-md-2"><button className="primary-btn-1 m-2 m-md-0" onClick={setMintToMax}>Max</button></div>
                    <div className="col-md-3"></div>
                </div>
                <div className="my-4 row">
                    <div className="col-md-3"></div>
                    <div className="col-md-2">Total Price</div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2 light-brown-clr">{totalPrice} ETH</div>
                    <div className="col-md-3"></div>
                </div>
                <div>
                    {mintingLoader===true ? <Loader1 width='100' height='100'/> :totalSupply===0?<div><h4>We Are Officially Sold Out!</h4><a rel="noopener noreferrer" target="_blank" href={'https://opensea.io/'} className="text-decoration-none light-brown-clr">Visit OpenSea Collection</a></div>: <button className="primary-btn-1 fs-5 width-200px" onClick={executeMint} disabled={remainingTime > currentTime} >Mint</button>}
                </div>
                <div className="my-4 row justify-content-center">
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
