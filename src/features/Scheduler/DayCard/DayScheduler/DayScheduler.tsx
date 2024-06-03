import React from "react";
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';

type Props = {
    selectedDate: Date;
}

function DayScheduler(props: Props) {


    return <Card>
            <Calendar 
                value={props.selectedDate} 
                disabled 
                dateFormat={"d MM yy"}
                locale="pl"/>
            <div >

            </div>
        </Card>
}

export default DayScheduler;