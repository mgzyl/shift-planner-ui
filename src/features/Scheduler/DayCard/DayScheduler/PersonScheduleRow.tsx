import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import classes from "./PersonScheduleRow.module.css";
import { Dropdown } from "primereact/dropdown";

type Props = {
    name: string;
    key: any;
}

function PersonScheduleRow(props: Props) {

    const [isAdded, setIsAdded] = useState(false);
    const [start, setStart] = useState();
    const [end, setEnd] = useState();

    const predefinedStart = [8,9,12,14];
    const predefinedEnd = [12,14,16,20];

    const deleteRow = () => {
        setIsAdded(false);
        setStart(undefined);
        setEnd(undefined);
    }

    return <>
        <div className={classes.cell}>
            <span className={classes.personLabel}>{props.name}</span>
        </div>
        <div className={classes.cell}>
            {isAdded ?
                <Dropdown 
                    value={start} 
                    onChange={(e) => setStart(e.value)} 
                    options={predefinedStart} 
                    editable
                    className={classes.hourInput}/>
            : <Button 
                icon="pi pi-plus" 
                rounded 
                outlined
                aria-label="Add" 
                onClick={() => setIsAdded(true)}/>}
        </div>
        <div className={classes.cell}>
            {isAdded ?
                <Dropdown 
                    value={end} 
                    onChange={(e) => setEnd(e.value)} 
                    options={predefinedEnd} 
                    editable 
                    className={classes.hourInput}/>
            : <div/>}
        </div>
        <div className={classes.cell}>
            {isAdded ?
                <Button 
                    icon="pi pi-times" 
                    rounded 
                    outlined 
                    severity="danger" 
                    aria-label="Delete" 
                    onClick={deleteRow}
                />
            : <div/>}
        </div>
    </>
}

export default PersonScheduleRow;