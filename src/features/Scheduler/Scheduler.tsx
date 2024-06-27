import React, { useState } from "react";
import PreviewCalendarCard from "./PreviewCalendarCard/PreviewCalendarCard";
import DayCard from "./DayCard/DayCard";
import classes from "./Scheduler.module.css";

export type SelectedDateType = undefined | null | string | Date | Date[];

function Scheduler() {
    const [previewDate, setPreviewDate] = useState<undefined | Date>();
    const filledDates = [new Date(2024, 5, 12), new Date(2024, 5, 15)];

    const setSelectedDate = (selectedDate: SelectedDateType) => {
        if(selectedDate instanceof Date) {
            setPreviewDate(selectedDate);
        } else {
            setPreviewDate(undefined);
        }
    }

    return <div className={classes.mainContainer}>
        <PreviewCalendarCard filledDates={filledDates} setSelectedDate={setSelectedDate}/>
        <DayCard selectedDate={previewDate}/>
    </div>
}

export default Scheduler;