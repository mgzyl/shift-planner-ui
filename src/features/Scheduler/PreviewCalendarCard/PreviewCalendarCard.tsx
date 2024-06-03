import { Calendar } from 'primereact/calendar';
import { Card } from 'primereact/card';
import { SelectedDateType } from '../Scheduler';

type Props = {
    setSelectedDate: (date: SelectedDateType) => void;
    filledDates: Date[];
}

function PreviewCalendarCard(props: Props) {

    return (
        <Card title={"Kalendarz"}>
            <Calendar 
                value={props.filledDates} 
                view="date" 
                dateFormat="mm/yy"
                inline
                selectionMode="multiple"
                onSelect={(e) => props.setSelectedDate(e.value)}
                locale='pl'
            />
        </Card>)
}

export default PreviewCalendarCard;