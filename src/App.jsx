import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Results from "./components/Results";

function App() {
  const [form, setForm] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = form.duration >= 1;

  function handleChange(key, newValue) {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [key]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <Form form={form} handleChange={handleChange} />
      {!inputIsValid && <p className="center">Please Enter a duration greater than 0</p>}
      {inputIsValid && <Results form={form}/>}
    </>
  );
}

export default App;
