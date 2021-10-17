import * as React from "react";
import * as ReactDom from "react-dom";

let Greet = () => <h1>Hello, world! 123</h1>;
ReactDom.render(<Greet />, document.getElementById("app"));
