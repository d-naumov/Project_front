import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import styles from './Users.module.css'
import MyButton from '../../components/myButtom/MyButton';
import { Link } from 'react-router-dom';
import { deleteUsers, loadUsers } from './userAction';

const Users: FC = () => {
 const {users, isLoading, error} = useAppSelector((state) => state.users);
 const dispatch =useAppDispatch();

 useEffect(() => { 
    dispatch(loadUsers());
  
}, []);
 
return (
    <div>
      <h1>FRIENDS</h1>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Error:{error}</h1>}
        <ul className={styles.userList}>
          {users&& users?.map(el => (
            <li className={styles.userCard} key={el.id}>{el.first_name} {el.last_name} 
            <div >
            {el.email} 
            </div >
            <div className={styles.imgContainer}>
              <img className={styles.image} src={el.avatar} alt="" />
            </div>
           
            </li>
            
            ))}
            </ul>
    </div>
  )}

export default Users