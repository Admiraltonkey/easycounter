export const INCREMENT_NUMBER="INCREMENT_NUMBER"
export const DECREMENT_NUMBER="DECREMENT_NUMBER"
export const RESET_VALUES="RESET_VALUES"
export const SHOW_COUTER="SHOW_COUTER"
export const SHOW_VALUE="SHOW_VALUE"
export const MAX_VALUE="MAX_VALUE"
export const MIN_VALUE="MIN_VALUE"
export const START_VALUE="START_VALUE"

const initialState = {
    value: 0,
    step: 1,
    buttonInfo: [
        {name: 'increment'},
        {name: 'decrement'},
        {name: 'dropp'},
        {name: 'setNewValues'}
    ],
    max: 0,
    min: 0,
    start: 0,
    buttonInfoValue: [
        {nameitem: 'Set values'}
    ],
    isShowCounter: false

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_NUMBER: {
            debugger
            return {
                ...state,
                value: state.value + 1
            }
        }
        case DECREMENT_NUMBER : {
            return {
                ...state,
                value: state.value -1
            }
        }

        case RESET_VALUES : {
            return {
                ...state,
                value: 0
            }
        }
        case SHOW_COUTER : {
            return {
                ...state,
                isShowCounter: false
            }
        }
        case SHOW_VALUE : {
            return {
                ...state,
                isShowCounter: true
            }
        }
        case MAX_VALUE : {
            return {
                ...state,
                max:action.maxValue
            }
        }
        case MIN_VALUE : {
            return {
                ...state,
                min: action.minValue
            }
        }
        case START_VALUE : {
            return {
                ...state,
                start:action.value,
                value: action.value
            }
        }

        default: return state
    }
}


export const incrementNumberAC = () => ({type: INCREMENT_NUMBER})
export const decrementNumberAC = () => ({type: DECREMENT_NUMBER})
export const resetValueAC = () => ({type: RESET_VALUES})
export const showCouterAC = () => ({type: SHOW_COUTER})
export const isShowValueAC = () => ({type: SHOW_VALUE})
export const maxValueAC = (maxValue) => ({type: MAX_VALUE,maxValue})
export const minValueAC = (minValue) => ({type: MIN_VALUE, minValue})
export const startValueAC = (value) => ({type: START_VALUE,value})



export default reducer