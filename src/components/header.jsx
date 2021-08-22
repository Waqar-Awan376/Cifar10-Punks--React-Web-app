import React from "react";
import {NavLink} from "react-router-dom";

const Header=()=>{
    return(
        <nav className="position-sticky top-0 navbar navbar-expand-lg navbar-light bg-dark py-3">
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
                            to="/"
                            className="navigation-item mx-2 d-block d-lg-inline-block">
                            Mint
                        </NavLink>
                        <NavLink
                            to="/"
                            className="navigation-item mx-2 d-block d-lg-inline-block">
                            Collection
                        </NavLink>
                        <NavLink
                            to="/"
                            className="navigation-item mx-2 d-block d-lg-inline-block">
                            Provenance
                        </NavLink>
                        <NavLink
                            to="/"
                            className="navigation-item mx-2 d-block d-lg-inline-block">
                            Claim Rewards
                        </NavLink>
                        <button

                            className="navbar-btn mx-3 d-block d-lg-inline-block">
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
