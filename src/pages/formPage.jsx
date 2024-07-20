import { useSelector } from "react-redux"
import Title from "../components/assets/title/title"
import Form from "../components/form/form"

const FormPage = ({type}) => { 
  const {title, list} = useSelector((state) => state.form[type])
  return (
    <section>
      <Title title={title}/>
      <Form type={type} list={list}/>
    </section>
  )
}

export default FormPage