import React from "react";
import DayScheduler from "./DayScheduler/DayScheduler";

type Props = {
    selectedDate: Date | undefined;
}

function DayCard(props: Props) {

    return <div>
        {props.selectedDate ? <DayScheduler selectedDate={props.selectedDate} /> : null}
    </div>
}

export default DayCard;