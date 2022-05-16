import { useState } from "react";
import MainInput from "./components/input/MainInput";
import InputSetOne from "./components/panel/InputSetOne";
import RootView from "./components/views/RootView";

export default function App() {
    const [input, setInput] = useState("");

    function mergeInput(value) {
        setInput(value);
    }

    return (
        <RootView>
            <MainInput
                onChange={(mainInputValue) => setInput(mainInputValue)}
                value={input}
            />
            <InputSetOne
                onClick={(value) => mergeInput(value)}
            />
        </RootView>
    );
}