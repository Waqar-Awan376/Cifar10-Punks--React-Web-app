import React from "react";

const SearchedCollection=(props)=>
{
    return(
        <React.Fragment>
            {props.collection!==[]?(props.collection.map((item,index)=>(<div className="m-3" key={index}>
                    <img src={item.image} alt="myImage" width='100'/>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                </div>
            ))):''}
        </React.Fragment>
    );
}

export default SearchedCollection;
