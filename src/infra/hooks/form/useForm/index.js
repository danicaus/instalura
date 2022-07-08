import { useEffect, useState } from 'react';

export default function useForm({
  initialValues,
  onSubmit,
  validateSchema,
}) {
  const [inputValue, setInputValue] = useState(initialValues);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  useEffect(() => {
    validateSchema(inputValue)
      .then(() => {
        setErrors({});
        setIsFormDisabled(false);
      })
      .catch((error) => {
        const formErrors = error.inner.reduce((errorObjectAcc, currentError) => {
          const fieldName = currentError.path;
          const errorMessage = currentError.message;
          return {
            ...errorObjectAcc,
            [fieldName]: errorMessage,
          };
        }, {});
        setErrors(formErrors);
        setIsFormDisabled(true);
      });
  }, [inputValue]);

  return {
    inputValue,
    handleSubmit(event) {
      event.preventDefault();
      onSubmit(inputValue);
    },
    handleChange(event) {
      const fieldName = event.target.getAttribute('name');
      const { value } = event.target;
      setInputValue((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
    // Validação do form
    isFormDisabled,
    errors,
    touchedFields,
    handleBlur(event) {
      const fieldName = event.target.getAttribute('name');
      setTouchedFields({
        ...touchedFields,
        [fieldName]: true,
      });
    },
  };
}
