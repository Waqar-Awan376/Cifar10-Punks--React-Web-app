import React from "react";
import SearchedCollection from "./searchedCollection";

const Collection=()=>
{
    return(
        <div>
            &nbsp;
            <div className="my-5 p-3 background-overlay text-center">
                <h1 className="my-3">View Collection</h1>
                <p className="mt-5">Enter your wallet ID</p>
                <div className="mb-4">
                    <input type='text' className="input-field-txt bg-dark"/>
                </div>
                <div className="mb-5">
                    <button type='text' className="primary-btn-1">Search</button>
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
