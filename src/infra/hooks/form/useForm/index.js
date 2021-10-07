import { useState } from 'react';

export default function useForm({ initialValues, onSubmit }) {
  const [inputValue, setInputValue] = useState(initialValues);

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
  };
}
