import { useState } from "react";

export default function useFrom(inttialValues = {}) {
  const [values, setValues] = useState(inttialValues);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(
      ((prev) => ({
        ...prev,
        [name]: value,
      })),
    );
  };
  const resetFrom = () => setValues(inttialValues);
  return { values, handleChange, resetFrom, setValues };
}
