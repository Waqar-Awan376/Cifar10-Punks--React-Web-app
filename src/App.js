import React from "react";
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import {Route} from "react-router-dom";
import Layout from "./layout/layout";
import Terms from "./components/terms";

function App() {
  return (
      <React.Fragment>
          <Header/>
          <Layout>
            <Route path="/" exact>


            </Route>
              <Route path="/terms" exact>
                <Terms/>

              </Route>
          </Layout>
          <Footer/>
      </React.Fragment>
  );
}

export default App;
