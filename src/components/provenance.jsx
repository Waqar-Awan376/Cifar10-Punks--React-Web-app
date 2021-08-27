import React, {useEffect, useState} from "react";
import ProvenanceTable from "./provenanceTable";
import ConcatString from '../ConcatString.json';

const Provenance=(props)=>{
    const [proofRecord,setProofRecord]= useState();
    const [concatHash,setConcatHash]= useState(ConcatString[0]);
    const [staringIndex,setStaringIndex]= useState();

    useEffect(()=>
    {
        props.metaRef.current.getProvenanceHash().then((value)=>
        {
            setProofRecord(value);
        }).catch(err=>console.log(err));
        props.metaRef.current.getStartingIndex().then((value)=>
        {
            setStaringIndex(value);
        }).catch(err=>console.log(err));
        console.log(concatHash);
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
                    {concatHash["concatString"]}
                </div>
                <ProvenanceTable/>
            </div>
            &nbsp;
        </div>
        );
}
export default Provenance;
