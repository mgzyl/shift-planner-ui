import { createSlice} from "@reduxjs/toolkit";

type AddShiftAction = {
    payload: AddShiftActionPayload,
    type: string,
}

type AddShiftActionPayload = {
    dayNumber: number,
    employee: string,
    startTime: any,
    endTime: any
}

export const shiftDataSlice = createSlice({
    name: "fetchEmployeeData",
    initialState: {
        calendar: {

        }
    },
    reducers: {
        // fetchData: state => {
        //
        // },
        addShift: (state, action: AddShiftAction) => {
            const {dayNumber, employee, startTime, endTime} = action.payload
            const dayDefinition = {
                "shifts": [
                    {
                        "id": employee,
                        "start": startTime,
                        "end": endTime
                    }
                ]
            }
            Object.defineProperty(state.calendar, dayNumber, dayDefinition)
        }
    }
})

export const { addShift } = shiftDataSlice.actions
export default shiftDataSlice.reducer
