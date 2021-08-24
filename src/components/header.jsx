import React, { useState} from "react";
import {NavLink} from "react-router-dom";
import VerticallyCenteredModal from "../modal/modal";


const Header=(props)=>{
    const [modalShow, setModalShow] = useState(false);
    const [rewardValue,setRewardValue]=useState(0);
    function onClaimReward(){
        setModalShow(true);
        props.metaRef.current.getRewardBalance().then(value=>
        {
            setRewardValue(value);
        }).catch(err=>console.log(err));
    }
    const claimReward=()=>{
        props.metaRef.current.claimRewards().then(()=>
        {
            setModalShow(false);
        }).catch(err=>console.log(err));
    }
    return(
        <nav className="position-sticky top-0 navbar navbar-expand-lg navbar-light bg-dark py-3">
            <VerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                reward={rewardValue}
                claimReward={claimReward}
            />
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <img src="/Assets/logo_and_favicon/0.png" className="ms-2" alt="Logo"/>
                    <span className="ms-2 text-white">Cifar10 Punks</span>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <div>
                        <NavLink
                            to="/mint"
                            className="navigation-item mx-2 d-block d-lg-inline-block" activeClassName="navigation-item-active">
                            Mint
                        </NavLink>
                        <NavLink
                            to="/collection"
                            className="navigation-item mx-2 d-block d-lg-inline-block" activeClassName="navigation-item-active">
                            Collection
                        </NavLink>
                        <NavLink
                            to="/provenance"
                            className="navigation-item mx-2 d-block d-lg-inline-block" activeClassName="navigation-item-active">
                            Provenance
                        </NavLink>
                        <a
                            onClick={onClaimReward}

                            className="navigation-item mx-2 d-block d-lg-inline-block cursor-pointer">
                            Claim Rewards
                        </a>
                        <button
                            className="primary-btn-1 mx-3 d-block d-lg-inline-block">
                            Connect
                        </button
                            >
                    </div>
                </div>
            </div>
        </nav>
    );
}
export default Header;
