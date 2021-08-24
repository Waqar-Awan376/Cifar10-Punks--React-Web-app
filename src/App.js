import React, {useRef} from "react";
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import {Route, Switch} from "react-router-dom";
import Layout from "./layout/layout";
import Terms from "./components/terms";
import Collection from "./components/collection";
import MetaMask from "./MetaMask";
import Mint from "./components/mint";
import Provenance from "./components/provenance";
import Home from "./components/home";

function App() {
    const metaMaskRef=useRef(null);
  return (
      <React.Fragment>
          <MetaMask ref={metaMaskRef}/>
          <Header metaRef={metaMaskRef}/>
          <Layout>
              <Switch>
                  <Route path="/terms">
                      <Terms/>
                  </Route>
                  <Route path="/collection">
                      <Collection/>
                  </Route>
                  <Route path="/mint">
                      <Mint metaRef={metaMaskRef}/>
                  </Route>
                  <Route path="/provenance">
                      <Provenance metaRef={metaMaskRef}/>
                  </Route>
                  <Route path="" exact>
                      <Home/>
                  </Route>
              </Switch>
          </Layout>
          <Footer/>
      </React.Fragment>
  );
}

export default App;
