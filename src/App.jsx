import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";



function App() {
  const [form, setForm] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(key,newValue){
    setForm(prevForm=>{
      return{
        ...prevForm,
        [key]:newValue,
      }
    })

  }
  console.log(form)

  return (
    <>
      <Header />
      <Form form={form} handleChange={handleChange}/>
    </>
  );
}

export default App;
