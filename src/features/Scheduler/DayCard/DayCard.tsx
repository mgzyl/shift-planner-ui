import DayScheduler from "./DayScheduler/DayScheduler";

type Props = {
    selectedDate: Date | undefined;
}

function DayCard(props: Props) {

    return <div>
        {props.selectedDate ? <DayScheduler personel={["Adam", "Bart", "Christopher"]} selectedDate={props.selectedDate} /> : null}
    </div>
}

export default DayCard;