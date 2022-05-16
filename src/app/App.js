import InputButton from "./components/button/InputButton";
import MainInput from "./components/input/MainInput";
import RootView from "./components/views/RootView";

export default function App() {
    return (
        <RootView>
            <MainInput />
            <InputButton />
        </RootView>
    );
}