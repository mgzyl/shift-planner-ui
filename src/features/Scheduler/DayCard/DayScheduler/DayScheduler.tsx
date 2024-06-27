import React from "react";
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import classes from './DayScheduler.module.css';
import PersonScheduleRow from "./PersonScheduleRow";

type Props = {
    selectedDate: Date;
}

function DayScheduler(props: Props) {
    const personel = ["Adam", "Bart", "Chris"]

    return <Card>
            <Calendar 
                value={props.selectedDate} 
                disabled 
                dateFormat={"d MM yy"}
                locale="pl">
            </Calendar>
            <div className={classes.mainGrid}>
                {personel.map((name, ind) => (<PersonScheduleRow key={ind} name={name}></PersonScheduleRow>))}
            </div>
        </Card>
}

export default DayScheduler;