import React, { Component } from "react";

class View extends Component {

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

export default View;

const s = {
    container: {
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
    },
};