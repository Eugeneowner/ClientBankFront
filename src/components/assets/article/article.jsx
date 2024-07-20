import Title from "../title/title"
import s from "./article.module.scss"

const Article = ({title, text}) => { 
  return ( 
    <article className={s.article}>
      <Title title={title}/>
      <p className={s.article_text}>{text}</p>
    </article>
  )
}

export default Article