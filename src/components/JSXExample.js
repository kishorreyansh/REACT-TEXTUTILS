import React from "react";

const JSXExample = () => {
    // return(
    //     <div>
    //         <h1> Hello JSX Example</h1>
    //     </div>
    // )

    //Without JSX
    //return React.createElement('div',null, React.createElement('h1',null,'Hello Without JSX'));
    return React.createElement('div',
        {
            id: 'jsxexample',
            className : "dummyClass"
        }, 
        React.createElement('h1',null,'Hello Without JSX'));
}

export default JSXExample;