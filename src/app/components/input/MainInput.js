import React, { useState } from "react";
import MdInputBase from "@mui/material/InputBase";
import View from "../views/View";
import {
    CARET_COLOR,
    FONT_BODY_COLOR,
    MAIN_INPUT_BACKGROUND_COLOR,
} from "../../assets/styles";

export default function MainInput(props) {
    const onChange = props.onChange;
    return (
        <View style={s.container} >
            <MdInputBase
                style={{ ...s.input, ...props.style }}
                onChange={(event) => onChange ? props.onChange(event.target.value): console.log(event.target.value)}
                value={props.value}
                inputProps={{ style: { textAlign: "end" } }}
            />
        </View>
    );
}

const s = {
    container: {
        flex: 0.3,
        justifyContent: "center",
    },
    input: {
        height: "100%",
        fontSize: 50,
        color: FONT_BODY_COLOR,
        caretColor: CARET_COLOR,
        backgroundColor: MAIN_INPUT_BACKGROUND_COLOR,
    },
};