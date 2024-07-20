import s from "./users.module.scss";

const UserItem = ({ info }) => {
  return (
    <tr className={s.table_row}>
      {Object.entries(info).map(([key, value]) => (
        <td key={key} className={s.table_row_el}>
          {value}
        </td>
      ))}
    </tr>
  );
};

export default UserItem;
