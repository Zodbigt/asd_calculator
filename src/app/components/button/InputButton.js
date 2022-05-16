import ButtonBase from "./ButtonBase";

export default function InputButton(props) {
    const onClick = props.onClick;
    return (
        <ButtonBase
            style={{ ...s.container, ...props.style }}
            disabled={props.disabled}
            onClick={() => onClick ? onClick() : console.log("onClick")}
        >
            {props.label}
        </ButtonBase>
    );
}

const s = {
    container: {
        height: 40,
    },
};