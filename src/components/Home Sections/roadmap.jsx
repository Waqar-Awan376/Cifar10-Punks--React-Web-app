import React from "react";

const Roadmap=()=>
{
    return(
        <div className="my-5 p-3 background-overlay">
            <h1 className="my-3 text-center">ROADMAP</h1>
            <div className="m-auto w-75 mt-5">
                <p>The Doge Pound is a full time project for us now and it will continue to be after the public sale. Below is what we're working towards in the short term. Each milestone unlocks when a certain % of doges have been minted. Future developments will be decided and voted upon by the community.</p>
            </div>
            <div className="m-auto w-r-75 mt-5">
                {/*THIS WILL BE REPEATED FOR EVERY BOX*/}
                <div className="row">
                    <div className="col-2 mt-4">
                        <div className="roadmap d-flex align-items-center justify-content-center fs-3">
                            10%</div>
                        <div className="text-center">
                            <div className="m-3">
                                <img src="/Assets/line.png" alt="Box"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 p-3"><p className="pb-5 border-bottom">Some of Doge NFTs will be airdropped to our early adopters and fanbase
                        We ramp up our Discord and social media management, which will include a pack of community managers and moderators to bring our Doge community to the moon</p></div>
                </div>

                <div className="row">
                    <div className="col-2 mt-4">
                        <div className="roadmap d-flex align-items-center justify-content-center fs-3">
                            20%</div>
                        <div className="text-center">
                            <div className="m-3">
                                <img src="/Assets/line.png" alt="Box"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 p-3"><p className="pb-5 border-bottom">Some of Doge NFTs will be airdropped to our early adopters and fanbase
                        We ramp up our Discord and social media management, which will include a pack of community managers and moderators to bring our Doge community to the moon</p></div>
                </div>

                <div className="row">
                    <div className="col-2 mt-4">
                        <div className="roadmap d-flex align-items-center justify-content-center fs-3">
                            30%</div>
                        <div className="text-center">
                            <div className="m-3">
                            </div>
                        </div>
                    </div>
                    <div className="col-10 p-3"><p className="pb-5">Some of Doge NFTs will be airdropped to our early adopters and fanbase
                        We ramp up our Discord and social media management, which will include a pack of community managers and moderators to bring our Doge community to the moon</p></div>
                </div>
                {/*THIS WILL BE REPEATED FOR EVERY BOX*/}
            </div>

        </div>
    );
}
export default Roadmap;
