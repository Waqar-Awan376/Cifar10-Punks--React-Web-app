import React from "react";
import Loader from "react-loader-spinner";

const Loader1=(props)=>
{
    return(
      <React.Fragment>
          <Loader
              type="Puff"
              color={(props.stroke)?'black':'#cd8119'}
              height={props.height}
              width={props.width}
          />
      </React.Fragment>
    );
}
export default Loader1;
