const ProvenanceTable=(props)=>
{
    return(
      <div className="mt-3">
          <p>The table below lists the initial index, assigned The Doge Pound Token ID, and SHA256 Hash output.</p>
          <table className="w-100">
              <tr>
                  <th>INITIAL SEQUENCE INDEX</th>
                  <th>ASSIGNED TOKEN ID</th>
                  <th>SHA-256 HASH</th>
                  <th>ARWEAVE TRX ID</th>
              </tr>

              <tr>
                  <td>Peter</td>
                  <td>Griffin</td>
                  <td>Griffin</td>
                  <td>Griffin</td>
              </tr>
          </table>
      </div>
    );
}
export default ProvenanceTable;
