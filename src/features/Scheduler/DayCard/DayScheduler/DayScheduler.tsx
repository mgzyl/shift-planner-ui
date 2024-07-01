import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import classes from './DayScheduler.module.css';
import PersonScheduleRow from "./PersonScheduleRow/PersonScheduleRow";
import { Button } from 'primereact/button';

type Props = {
    selectedDate: Date;
    personel: string[];
}

function DayScheduler(props: Props) {
    const previousDay = () => {
        submit();
    }

    const nextDay = () => {
        submit();
    }

    const submit = () => {

    }

    return <Card>
            <div className={classes.dateContainer}>
                <Button
                    icon="pi pi-angle-left"
                    outlined
                    onClick={previousDay}
                />
                <div className={classes.dateField}>
                    <Calendar 
                        value={props.selectedDate} 
                        disabled 
                        dateFormat={"d MM yy"}
                        locale="pl">
                    </Calendar>
                </div>
                <Button
                    icon="pi pi-angle-right"
                    outlined
                    onClick={nextDay}
                />
            </div>
            <div className={classes.mainGrid}>
                {props.personel.map((name, ind) => (<PersonScheduleRow key={ind} name={name}></PersonScheduleRow>))}
            </div>
        </Card>
}

export default DayScheduler;