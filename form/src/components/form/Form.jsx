import { useState } from 'react';
import './Form.css';

const Form = () => {
    const [inputValue, setInputValue] = useState('');  
    const [buttonDisabled, setButtonDisabled] = useState('');
    const[selected, setSelected] = useState(false);

    const isUsernameValid = inputValue.trim() != '' && inputValue.length >= 6;

    const inputHandler = (event) => {
        if (event.target.value.trim() != "" && event.target.value.length >= 5) {
            setButtonDisabled(false);
          } else setButtonDisabled(true);
          setInputValue(event.target.value);
        };

    const selecting = () => {
        if (selected == false){
            setSelected(true);
        }
    };

    let usernameInputClassName = 'usernameDefault';

    if(!isUsernameValid && selected == true){
        usernameInputClassName = 'usernameWrong';
    }else if (isUsernameValid && selected == true){
        usernameInputClassName = 'usernameGood';
    }else {
        usernameInputClassName = 'usernameDefault'
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        console.log("You've sent this Username to backend" + inputValue);
        setInputValue('');
        setSelected(false);
        setButtonDisabled(true);
    };

    return (
        <>
        <form onSubmit = {formSubmissionHandler}>
            <div className = 'div'>
                <label className = 'label' htmlFor = 'username'>
                    Username : 
                </label>
                <input 
                value = {inputValue}
                onChange = {inputHandler}
                onSelect = {selecting}
                type="text"
                name = 'username'
                className = {usernameInputClassName}
                 />
                {!isUsernameValid && selected == true && (
                    <div className = 'warning'> 
                    Username must at least be 6 characters long!
                    </div>
                )}
                {isUsernameValid && selected == true && (
                    <div className = 'correct'>
                        Username correct!
                    </div>
                )}
                <button disabled = {buttonDisabled}>
                    Send!
                </button>

            </div>
            </form>
            </>
    )
};

export { Form };