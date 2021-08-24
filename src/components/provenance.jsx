import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import ProvenanceTable from "./provenanceTable";

const Provenance=(props)=>{
    const [proofRecord,setProofRecord]= useState(undefined);
    const [concatHash,setConcatHash]= useState(undefined);
    const [staringIndex,getStaringIndex]= useState(undefined);

    useEffect(()=>
    {
        props.metaRef.current.getProvenanceHash().then((value)=>
        {
            setProofRecord(value);
        }).catch(err=>console.log(err));
        props.metaRef.current.getConcatHash().then((value)=>
        {
            setConcatHash(value);
        }).catch(err=>console.log(err));
        props.metaRef.current.getStartingIndex().then((value)=>
        {
            getStaringIndex(value);
        }).catch(err=>console.log(err));
        props.metaRef.current.getJsonFromTokenUri(1).then((value)=>
        {
            console.log(value);
        }).catch(err=>console.log(err));
    },[])
    return(
        <div>
            &nbsp;
            <div className="my-5 p-3 background-overlay">
                <h1 className="my-3 text-center">Provenance Record</h1>
                <p className="my-3">
                    This page presents the provenance record of each Doge image that will ever exist. Each Doge image is firstly hashed using SHA-256 algorithm. A combined string is obtained by concatenating SHA-256 of each Doge image in the specific order as listed below. The final proof is obtained by SHA-256 hashing this combined string. This is the final provenance record stored on the smart contract.
                </p>
                <h3>Provenance Record</h3>
                <p>Each Doge Pound token ID is assigned to an artwork image from the initial sequence with this formula:<br/>
                    (tokenId + startingIndex) % 10000 -> Initial Sequence Index.</p>
                <p>FINALIZED STARTING INDEX: {staringIndex}<br/></p>
                <p>
                    FINAL PROOF RECORD:<br/> {proofRecord}<br/></p>
                <h5>
                    CONCATENATED HASH STRING:
                </h5>
                <div className="hash-string-container text-break">
                    {concatHash}
                </div>
                <ProvenanceTable/>
            </div>
            &nbsp;
        </div>
        );
}
export default Provenance;
