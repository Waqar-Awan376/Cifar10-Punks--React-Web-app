import React, {useState} from "react";
import SearchedCollection from "./searchedCollection";

const Collection=(props)=>
{
    const [address,setAddress]= useState(undefined);
    const [isValidAddress,setIsValidAddress]=useState(true);
    const searchHandler=()=> {
        let isMounted = true;
        props.metaRef.current.isValidAddress(address).then((isValid)=>
        {
            if(!isValid)
            {
                setIsValidAddress(false);
            }
            else
            {
                props.metaRef.current.getTokensOfAddress(address).then((tokens)=>
                {
                    console.log(tokens);
                }).catch(err=>console.log(err));
            }
        }).catch(err=>console.log(err));
    }
    const addressHandler=(event)=>
    {
        setAddress(event.target.value);
    }
    return(
        <div>
            &nbsp;
            <div className="my-5 p-3 background-overlay text-center">
                <h1 className="my-3">View Collection</h1>
                <p className="mt-5">Enter your wallet ID</p>
                <div className="mb-4">
                    <input type='text' className={"input-field-txt " + (isValidAddress ? '':'wrong-input-field')} onChange={addressHandler}/>
                </div>
                <div className="mb-5">
                    <button type='text' className="primary-btn-1" onClick={searchHandler}>Search</button>
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
