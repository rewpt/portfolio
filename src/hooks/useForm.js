import {useState} from "react";

export default function useForm(value) {
  const [formValue, setFormValue] = useState(value)
  const handleChange = (e) => {
    setFormValue(e.target.value);
    
  }
  const resetForm = () => {
    setFormValue("")
  }
  return [formValue, handleChange, resetForm]
}
