import React, { useCallback } from "react";


//хук управления формой и валидации формы
export function useFormWithValidation(defaultValues ={}, defaultErrors={}) {
    const [values, setValues] = React.useState(defaultValues);
    const [errors, setErrors] = React.useState(defaultErrors);
    const [isValid, setIsValid] = React.useState(true);
  
    const handleChange = (event) => {
      const target = event.target;
      const name = target.name;
      const value = target.value;
      const checked = target.checked;
      if(target.type === 'checkbox'){
        setValues({...values, [name]: checked});
      }
      else{
        setValues({...values, [name]: value});
      }
     
      setErrors({...errors, [name]: target.validationMessage });
      setIsValid(target.closest("form").checkValidity());
    };
  
    const resetForm = useCallback(
      (newValues = {}, newErrors = {}, newIsValid = false) => {
        setValues(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
      },
      [setValues, setErrors, setIsValid]
    );
  
    return { values, handleChange, errors, isValid, resetForm, setIsValid  };
  }