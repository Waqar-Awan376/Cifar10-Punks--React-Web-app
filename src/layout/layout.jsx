import React from "react";
const sectionStyle = {
    backgroundImage: `url("Assets/bg-image.png")`,
    minHeight:'85vh',
    backgroundPosition: 'center',
    backgroundRepeat:'repeat'
};
const Layout = (props) => {
    return <div style={ sectionStyle }>{props.children}</div>;
};

export default Layout;
