import React from "react";
import Information from "./Home Sections/information";
import Roadmap from "./Home Sections/roadmap";
import Faq from "./Home Sections/faq";
import Team from "./Home Sections/team";
import Introduction from "./Home Sections/introduction";
const Home=(props)=>
{
    return(
        <div>
            &nbsp;
            <Introduction metaRef={props.metaRef}/>
            <Information/>
            <Roadmap/>
            <Faq/>
            <Team/>
            &nbsp;
        </div>
    );
}
export default Home;
