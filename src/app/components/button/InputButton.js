import Text from "../views/Text";
import ButtonBase from "./ButtonBase";

export default function InputButton(props) {
    const onClick = props.onClick;
    return (
        <ButtonBase
            style={{ ...s.container, ...props.style }}
            disabled={props.disabled}
            onClick={() => onClick ? onClick() : console.log("onClick")}
        >
            <Text style={s.lebel}>
                {props.label}
            </Text>
        </ButtonBase>
    );
}

const s = {
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    lebel: {
        fontSize: 34,
    }
};