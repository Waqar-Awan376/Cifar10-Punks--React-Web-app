import React from "react";

const SearchedCollection=(props)=>
{
    return(
        <React.Fragment>
            {props.collection!==[]?(props.collection.map((item,index)=>(<div className="m-3" key={index}>
                    <a rel="noopener noreferrer" target="_blank" href={item.image}><img src={item.image} alt="myImage" width='100'/></a>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                </div>
            ))):''}
        </React.Fragment>
    );
}

export default SearchedCollection;
