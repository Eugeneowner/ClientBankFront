import { useDispatch, useSelector } from "react-redux";
import Title from "../assets/title/title";
import UserItem from "./userItem";
import s from "./users.module.scss";
import UsersHeader from "./usersHeader";
import { useEffect } from "react";
import { getUsers } from "../../redux/slices/users";

const Users = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.users);
  useEffect(() => {
    if (list.length === 0) {
      dispatch(getUsers());
    }
  }, [list,dispatch]);
  const tableHeader = ["ID", "name", "email", "age", "accounts"];

  return (
    <section className={s.container}>
      <Title title="Users list" />
      <table className={s.table}>
        <UsersHeader elements={tableHeader} />
        <tbody className={s.table_body}>
          {list.map((item) => (
            <UserItem key={item.id} info={item} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Users;
