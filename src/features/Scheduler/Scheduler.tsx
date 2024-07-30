import PreviewCalendarCard from "./PreviewCalendarCard/PreviewCalendarCard";
import DayCard from "./DayCard/DayCard";
import classes from "./Scheduler.module.css";
import { changeDate } from "./shiftDataSlice.ts";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
// import {useDispatch} from "react-redux";

export type SelectedDateType = undefined | null | string | Date | Date[];

function Scheduler() {
    // const [initialData, setInitialData] = useState()
    const filledDates = [new Date(2024, 5, 12), new Date(2024, 5, 15)];
    const dispatch = useAppDispatch();
    const selectedDate = useAppSelector((state) => state.shiftDataReducer.selectedDate);

    // useEffect(() => {
    //     if(initialData === null) {
    //         dispatch(fetchInitialData)
    //     }
    // });

    const setSelectedDate = (selectedDate: SelectedDateType) => {
        if(selectedDate instanceof Date) {
            dispatch(changeDate(selectedDate));
        } else {
            dispatch(changeDate(undefined));
        }
    }

    return <div className={classes.mainContainer}>
        <div className={classes.section}>
            <PreviewCalendarCard filledDates={filledDates} setSelectedDate={setSelectedDate}/>
        </div>
        <div className={classes.section}>
            <DayCard selectedDate={selectedDate}/>
        </div>
    </div>
}

export default Scheduler;
