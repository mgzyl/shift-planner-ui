import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type AddShiftAction = {
    payload: AddShiftActionPayload,
    type: string,
}

type AddShiftActionPayload = {
    dayNumber: number,
    employee: string,
    startTime: number,
    endTime: number
}

export interface ShiftDataType {
    calendar: {
        [key: string]: {
            shifts: {
                id: string,
                start: number,
                end: number
            }[]
        }
    },
    selectedDate: Date | undefined,
}

const initialState: ShiftDataType = {
        calendar: {
            "3": {
                "shifts": [
                    {
                        "id": "employee1",
                        "start": 9,
                        "end": 17
                    }
                ]
            }
        },
        selectedDate: undefined,
    }

export const shiftDataSlice = createSlice({
    name: "shiftDataReducer",
    initialState,
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
        },
        changeDate: (state, action: PayloadAction<Date | undefined>) => {
            state.selectedDate = action.payload
        }
    }
})

export const { addShift, changeDate } = shiftDataSlice.actions
export default shiftDataSlice.reducer
