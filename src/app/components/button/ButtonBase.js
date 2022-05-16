import MDButtonBase from "@mui/material/ButtonBase";

export default function InputButton(props) {
    const onClick = props.onClick;
    return (
        <MDButtonBase
            style={{ ...s.container, ...props.style }}
            disabled={props.disabled}
            onClick={() => onClick ? onClick() : console.log("onClick")}
        >
            {props.children}
        </MDButtonBase>
    );
}

const s = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "start",
    },
};