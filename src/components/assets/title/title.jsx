import s from "./title.module.scss"

const Title = ({title}) => { 
  return ( 
    <h2 className={s.title}>
      {title}
    </h2>
  )
}

export default Title