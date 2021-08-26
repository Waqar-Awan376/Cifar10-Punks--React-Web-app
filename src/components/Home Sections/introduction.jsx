import React from "react";

const Introduction=()=>
{
    const totalImages=101;
    const imageSection=[];
    imageSection.push(
        <div className="carousel-item active text-center">
            <img src="Assets/introduction/0.png" className="d-block m-auto width-200px" alt="..."/>
        </div>
    )
    for(let i=1;i<totalImages;i++)
    {
        let imageLink=`Assets/introduction/${i}.png`;
        imageSection.push(
            <div className="carousel-item text-center" key={i}>
                <img src={imageLink} className="d-block m-auto width-200px" alt="..."/>
            </div>
        )
    }
    return(
        <div className="my-5 p-3 background-overlay">
            <h1 className="mt-3 mb-5 text-center">Introduction</h1>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 my-3 text-md-start text-center">
                        <p>The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and impeccably shaped. Join us on our adventure and have a good time. Having a Doge Token grants you creative and commercial rights, as well as inclusion in the gang.</p>
                        <p>Not only do ShitPunks look cool, the 5% marketplace reflection also provides extra incentive to use and show off your ShitPunk!</p>
                        <div className="d-flex justify-content-around pt-3">
                            <button className="primary-btn-1 width-120px" type="button">Mint</button>
                            <button className="primary-btn-1 width-120px" type="button">Join us</button>
                        </div>
                    </div>
                    <div className="col-md-6 my-3">
                        <div className="text-center">
                            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false"
                                 data-bs-interval="false">
                                <div className="carousel-inner">
                                    {imageSection}
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <p className="text-center mt-4">
                            The Cifar10 Punk Collection
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Introduction;
