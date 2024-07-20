import s from "./users.module.scss"

const UsersHeader = ({elements}) => { 
  return ( 
    <thead className={s.table_header}>
      {elements.map(item => (
        <th className={s.table_header_el}>
          {item}
        </th>
      ))}
    </thead>
  )
}
export default UsersHeader