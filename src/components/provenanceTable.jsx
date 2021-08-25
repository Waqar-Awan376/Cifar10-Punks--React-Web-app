import React, {useEffect, useState} from "react";
import Data from '../table.json';

const ProvenanceTable=()=>
{
    const [tableData,setTableData]=useState(Data);

    return(
      <div className="mt-3">
          <p>The table below lists the initial index, assigned The Doge Pound Token ID, and SHA256 Hash output.</p>
          <div className="provenance-table-container">
              <table className="provenance-table">
                  <thead>
                  <tr>
                      <th className="ps-2">INITIAL SEQUENCE INDEX</th>
                      <th className="ps-2">ASSIGNED TOKEN ID</th>
                      <th className="ps-2">SHA-256 HASH</th>
                      <th className="ps-2">ARWEAVE TRX ID</th>
                  </tr>
                  </thead>
                  <tbody>
                  {tableData.map((row)=>(
                      <tr className="provenance-table-rows" key={row["Initial Sequence Index"]}>
                          <td className="provenance-table-cols ps-2">{row["Initial Sequence Index"]}</td>
                          <td className="provenance-table-cols ps-2">{row["Assigned Token ID"]}</td>
                          <td className="provenance-table-cols ps-2">{row["SHA-256 Hash"]}</td>
                          <td className="ps-2"><a rel="noopener noreferrer" target="_blank" href={'https://ipfs.io/ipfs/'+row["IPFS Hash"]} className="text-decoration-none" >{row["IPFS Hash"]}</a></td>
                      </tr>
                  ))}
                  </tbody>
              </table>
          </div>

      </div>
    );
}
export default ProvenanceTable;
