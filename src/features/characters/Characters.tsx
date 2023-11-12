import { FC, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { loadCharacters } from './characterAction';
import styles from './Characters.module.css'
import MyButton from '../../components/myButtom/MyButton';
import { Link } from 'react-router-dom';

const Characters: FC = () => {
 const {characters, isLoading, error} = useAppSelector((state) => state.characters);
 const dispatch =useAppDispatch();

 useEffect(() => { 
    dispatch(loadCharacters());
  
}, []);
return (
    <div>
      <h1>Персонажи</h1>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Ошибка:{error}</h1>}
        <ul className={styles.characterList}>
          {characters&& characters?.map(el => (
            <li className={styles.characterCard} key={el.id}>{el.name} 
            <div>
              <img className={styles.image} src={el.image} alt="" />
            </div>
            {/* <MyButton onClick={() => dispatch(deleteProducts(el.id))} text='delete' /> */}
            <Link to={String(el.id)}><MyButton text="To character" /></Link>
            </li>
            
            ))}
            </ul>
    </div>
  )}

export default Characters