import React, {useState} from "react";
import SearchedCollection from "./searchedCollection";
import {Col, Row,Toast} from "react-bootstrap";
import ErrorToast from "../toast/errorToast";

const Collection=(props)=>
{
    const [address,setAddress]= useState(undefined);
    const [isValidAddress,setIsValidAddress]=useState(true);
    const [show, setShow] = useState(false);

    const searchHandler=()=> {
        props.metaRef.current.isValidAddress(address).then((isValid)=>
        {
            if(!isValid)
            {
                setIsValidAddress(false);
                setShow(true);
                setTimeout(()=>
                {
                    setShow(false);
                },3000)
            }
            else
            {
                setIsValidAddress(true);
                props.metaRef.current.getTokensOfAddress(address).then((tokens)=>
                {

                    console.log(tokens);
                }).catch(err=>console.log(err));
            }
        }).catch(err=>console.log(err));
    }
    const addressHandler=(event)=>
    {
        props.metaRef.current.isValidAddress(event.target.value).then((isValid)=>
        {
            if(isValid)
            {
                setIsValidAddress(true);
            }
        }).catch(err=>console.log(err));
        setAddress(event.target.value);
    }
    return(
        <div>
            &nbsp;
            <ErrorToast show={show}/>
            <div className="my-5 p-3 background-overlay text-center">
                <h1 className="my-3">View Collection</h1>
                <p className="mt-5">Enter your wallet ID</p>
                <div className="mb-4">
                    <input type='text' className={"input-field-txt " + (isValidAddress ? '':'wrong-input-field')} onChange={addressHandler}/>
                </div>
                <div className="mb-5">
                    <button type='text' className="primary-btn-1 width-120px" onClick={searchHandler}>Search</button>
                </div>
                <div className="container d-flex flex-wrap justify-content-center">
                    <SearchedCollection/>
                </div>
            </div>
            &nbsp;
        </div>
    );
}
export default Collection;
