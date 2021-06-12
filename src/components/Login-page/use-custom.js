import { useReducer } from 'react'

const initialValue = {
    value: '',
    isTouched: false,
}

const valueReducer = (state, action) => {
    if (action.type === 'INPUT_VALUE') {
        return {
            value: action.value,
            isTouched: state.isTouched
        }
    };
    if (action.type === 'BLUR') {
        return {
            value: state.value,
            isTouched: true
        }
    };
    if (action.type === 'RESET'){
        return {
            value: '',
            isTouched: false
        }
    };
        return initialValue;
};

const useCustom = (validateFn) => {

    const [valueState, dispatchValue] = useReducer(valueReducer, initialValue);

    const valueIsValid = validateFn(valueState.value);
    const valueIsInvalid = !valueIsValid && valueState.isTouched ;

    const valueChangeHandler = (event) => {
        dispatchValue({ type: 'INPUT_VALUE', value: event.target.value });
    };

    const valueBlurHandler = () => {
        dispatchValue({ type: 'BLUR' });
    }

    const reset = () => {
       dispatchValue({type:'RESET', value:''})
    }
    return (
        {
            value: valueState.value,
            isValid: valueIsValid,
            isInvalid: valueIsInvalid,
            valueChangeHandler,
            valueBlurHandler,
            reset
        }

    )
}

export default useCustom;
