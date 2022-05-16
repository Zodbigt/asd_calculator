import React, { Component } from "react";

export default class RootView extends Component {

    render() {
        const id = this.props.id;
        const style = this.props.style;
        const children = this.props.children;
        return (
            <div id={id} style={{ ...s.container, ...style }}>
                {children}
            </div>
        );
    }
}

const s = {
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
    },
};