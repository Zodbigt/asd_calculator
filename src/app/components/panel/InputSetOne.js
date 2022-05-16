import { useState } from "react";
import View from "../views/View";
import InputButton from "../button/InputButton";

export default function InputSetOne() {


    return (
        <View style={s.container}>
            {renderInputRow()}
            {renderInputRow()}
            {renderInputRow()}
        </View>
    );
}

function renderInputRow() {
    return (
        <View style={s.rowContainer}>
            <InputButton
                label={"1"}
            //onClick={() => setInput(input + "1")}
            />
            <InputButton
                label={"2"}
            //onClick={() => setInput(input + "2")}
            />
            <InputButton
                label={"3"}
            //onClick={() => setInput(input + "2")}
            />
        </View>
    );
}

const s = {
    container: {
        flex: 0.7,
    },
    rowContainer: {
        flex: 1,
        flexDirection: "row",
    },
}