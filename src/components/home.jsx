import React from "react";
import Information from "./Home Sections/information";
import Roadmap from "./Home Sections/roadmap";
import Faq from "./Home Sections/faq";
import Team from "./Home Sections/team";
const Home=()=>
{
    return(
        <div>
            &nbsp;
            <Information/>
            <Roadmap/>
            <Faq/>
            <Team/>
            &nbsp;
        </div>
    );
}
export default Home;
