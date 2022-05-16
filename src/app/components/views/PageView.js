import React, { Component } from "react";
import {
    MARGIN_BOTTOM,
    MARGIN_LEFT,
    MARGIN_RIGHT
} from "../../assets/styles";
import { getPlatformSpecificHeaderMargin } from "../../logic/PlatformFuncs";
import ScrollView from "./ScrollView";
import View from "./View";

export default class PageView extends Component {
    constructor(props) {
        super(props);
        this.platformSpecificHeaderMargin = getPlatformSpecificHeaderMargin(this.props.extraHeaderMargin);
    }

    render() {
        return (
            <ScrollView style={{ ...s.container, paddingTop: this.platformSpecificHeaderMargin, ...this.props.style }}>
                <View style={s.content}>
                    <View style={{ ...s.contentMax, maxWidth: this.props.maxWidth }}>
                        {this.props.children}
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const s = {
    container: {
        flex: 1,
        paddingLeft: MARGIN_LEFT,
        paddingRight: MARGIN_RIGHT,
        paddingBottom: MARGIN_BOTTOM,
    },
    content: {
        alignItems: "center",
    },
    contentMax: {
        width: "100%",
    },
};