
import useCustom from './use-custom';
import { useHistory } from 'react-router-dom';
import classes from './Login.module.css';


const BasicForm = (props) => {

  const {
    value: name,
    isValid: nameIsValid,
    isInvalid: nameIsInvalid,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetName
  } = useCustom(value => value.trim() !== '');

  const {
    value: lastName,
    isValid: lastNameIsValid,
    isInvalid: lastNameIsInvalid,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurHandler: lastNameBlurHandler,
    reset: resetLastName
  } = useCustom(value => value.trim() !== '');

  const {
    value: email,
    isValid: emailIsValid,
    isInvalid: emailIsInvalid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useCustom(value => value.trim() !== '' || value.includes('@'));




  const validateNameClass = nameIsInvalid ? 'formControl invalid' : 'formControl';

  const validateLastNameClass = lastNameIsInvalid ? 'formControl invalid' : 'formControl';

  const validateEmailClass = emailIsInvalid ? 'formControl invalid' : 'formControl';

  let isFormValid = false;

  if (nameIsValid && emailIsValid && lastNameIsValid) {
    isFormValid = true;
  };

  const history = useHistory()

  const submitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid || !emailIsValid || !lastNameIsValid) {
      return;
    }
    const userData = {
      name,
      lastName,
      email
    }
    console.log(userData);

    resetName();
    resetLastName();
    resetEmail();
    history.push("/appStarted");
  };



  return (
    <form onSubmit={submitHandler} className={classes.formControl}>
      <div >
        <div className={validateNameClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            onChange={nameChangeHandler}
            value={name}
            onBlur={nameBlurHandler}
          />
          {nameIsInvalid && <p className={classes.errorText}>Please enter valid Name.</p>}
        </div>
        <div className={validateLastNameClass}>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            id='last-name'
            onChange={lastNameChangeHandler}
            value={lastName}
            onBlur={lastNameBlurHandler}
          />
          {lastNameIsInvalid && <p className={classes.errorText}>Please enter valid Last Name.</p>}
        </div>
      </div>
      <div className={validateEmailClass}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailIsInvalid && <p className={classes.errorText}>Please enter valid Email.</p>}
      </div>
      <div className={classes.formActions}>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
