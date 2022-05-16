import React, { Component } from "react";
import { FONT_BODY_COLOR } from "../../assets/styles";

export default class Text extends Component {
    constructor(props) {
        super(props);
        this.type = this.props.type ? this.props.type : "default";
    }

    render() {
        const style = this.props.style;
        const selectable = this.props.selectable;
        const children = this.props.children;
        if (typeof children === "string" || typeof children === "number") {
            let notSelectable = s.notSelectable;
            if (selectable) {
                notSelectable = null;
            }
            return (
                <div
                    style={{
                        ...s.text,
                        ...notSelectable,
                        ...style
                    }}>
                    {children}
                </div>
            );
        } else {
            return (
                <div />
            );
        }
    }
}

const s = {
    text: {
        color: FONT_BODY_COLOR,
        whiteSpace: "pre-wrap",
    },
    notSelectable: {
        WebkitUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
    },
};