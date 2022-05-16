import { useState } from "react";
import InputButton from "./components/button/InputButton";
import MainInput from "./components/input/MainInput";
import InputSetOne from "./components/panel/InputSetOne";
import RootView from "./components/views/RootView";

export default function App() {
    const [input, setInput] = useState("");

    return (
        <RootView>
            <MainInput
                onChange={(mainInputValue) => setInput(mainInputValue)}
                value={input}
            />
            <InputSetOne />
        </RootView>
    );
}