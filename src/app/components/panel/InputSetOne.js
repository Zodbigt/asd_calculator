import { useMemo, useState } from "react";
import View from "../views/View";
import InputButton from "../button/InputButton";

export default function InputSetOne(props) {
    
    const row1 = useMemo(() => ([
        { 
            label: "1",
            value: "1",
        },
        { 
            label: "2",
            value: "2",
        },
        { 
            label: "3",
            value: "3",
        },
    ]));

    const row2 = useMemo(() => ([
        { 
            label: "4",
            value: "4",
        },
        { 
            label: "5",
            value: "5",
        },
        { 
            label: "6",
            value: "6",
        },
    ]));

    const row3 = useMemo(() => ([
        { 
            label: "7",
            value: "7",
        },
        { 
            label: "8",
            value: "8",
        },
        { 
            label: "9",
            value: "9",
        },
    ]));


    const handleOnClick = (value) => {
        const onClick = props.onClick;
        if (onClick) {
            onClick(value);
        }
    }

    return (
        <View style={s.container}>
            <InputRow
                onClick={handleOnClick}
                buttonInfoList={row3}
            />
            <InputRow
                onClick={handleOnClick}
                buttonInfoList={row2}
            />
            <InputRow
                onClick={handleOnClick}
                buttonInfoList={row1}
            />
        </View>
    );

    function InputRow(props) {
        return (
            <View style={s.rowContainer}>
                <ButtonList 
                    {...props}
                />
            </View>
        );
    }

    function ButtonList(props) {
        return props.buttonInfoList.map((buttonInfo) => (
            <InputButton
                key={buttonInfo.label}
                label={buttonInfo.label}
                onClick={() => props.onClick(buttonInfo.value)}
            />
        ));
    }

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