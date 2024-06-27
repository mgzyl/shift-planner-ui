import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";

type Props = {
    name: string;
    key: any;
}

function PersonScheduleRow(props: Props) {

    const [value, setValue] = useState();

    return <>
        <div>
            {props.name}
        </div>
        <div>
            <InputNumber 
                value={value} 
                onValueChange={(e) => setValue(e.value)} 
                mode="decimal"
                min={8} max={20}
                showButtons
                size={2}
                >
            </InputNumber>
        </div>
        <div>
            <InputNumber 
                value={value} 
                onValueChange={(e) => setValue(e.value)} 
                mode="decimal"
                min={8} max={20}
                showButtons
                size={2}
                >
            </InputNumber>
        </div>
        <div>
        <Button icon="pi pi-times" rounded outlined severity="danger" aria-label="Delete" />
        </div>
    </>
}

export default PersonScheduleRow;