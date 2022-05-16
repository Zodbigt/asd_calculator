import React, { Component } from "react";
import { IS_STACK_MEMORY_QUALIFIED } from "../../logic/PlatformConstants";

class ScrollView extends Component {
    constructor(props) {
        super(props);
        this.directionStyle = this.setDirectionStyle();
    }

    setDirectionStyle() {
        const direction = this.props.direction;
        const directionStyle = { overflowX: "none", overflowY: "none" };
        if (typeof direction === "undefined" || direction === "vertical") {
            directionStyle.overflowY = "scroll";
        } else if (direction === "horizontal") {
            directionStyle.overflowX = "scroll";
            directionStyle.display = "flex";
            directionStyle.flexDirection = "row";
            directionStyle.overscrollBehavior = "auto";
        }
        return directionStyle;
    }

    render() {
        const id = this.props.id;
        const style = this.props.style;
        const children = this.props.children;
        return (
            <div id={id} style={{
                ...s.container,
                ...style,
                ...this.directionStyle
            }}>
                {children}
            </div>
        );
    }
}

export default ScrollView;

const s = {
    container: {
        overscrollBehavior: IS_STACK_MEMORY_QUALIFIED ? "contain" : "auto",
    },
}