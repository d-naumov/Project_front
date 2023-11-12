// import { FC, useState } from 'react'
// import cn from 'classnames'
// import styles from './Login.module.css'
// import { useAppDispatch, useAppSelector } from '../../app/hooks';
// import { Navigate, useNavigate } from 'react-router-dom';
// import MyButton from '../../components/myButtom/MyButton';
// import { login } from './authAction';


// const Login: FC = () => {
//   const { user } = useAppSelector(state => state.auth)
//   const [username, setUsername] = useState<string>('');
//   const [password, setPassword] = useState<string>('');
//   const dispatch = useAppDispatch()
 
//   const navigate = useNavigate()
//   function handleLogin() {
    
//     console.log({ username, password });
//     dispatch(login({ username, password }))
    
//     navigate('/')
//   }

//   if (user) {
//     return <Navigate to='/' />
//   }
//   return (
//     <div className={styles.login_container}>
      {/* <p>username: kminchelle</p>
      <p>password: 0lelplR</p> */}
       {/* <input
        type="text"
        placeholder='username'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        className={styles.login_input}
      />
      <input
        type="password"
        placeholder='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className={styles.login_input}
      />
      <div className={styles.buttonContainer}>
          <MyButton text="to come in" onClick={handleLogin} />
       </div>
    </div>
  );
}

export default Login  */}

import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { login } from './authAction';
import Form from '../../components/form/Form';

export default function Login(): JSX.Element {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  function handleLogin(e: FormEvent<HTMLFormElement>): void {
    // e.preventDefault();
    console.log(dispatch(login({ username, password })));
    // .then((data) => console.log(data.meta));
    navigate('/'); // переводим на другую страничку - путь которой указали в кавычках
  }

  const fields = [
    {
      name: 'username',
      label: 'login',
      type: 'text',
      value: '',
    },
    {
      name: 'password',
      label: 'password',
      type: 'password',
      value: '',
    }
  ]


  return (
    <>
      <p> Подсказка: kminchelle, 0lelplR</p>
      <Form fields={fields} onSubmit={(e) => {dispatch(login(e)); navigate('/')}} />
     
      {/* <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form> */}
      {/* <Form fields={[{
        name: 'login',
        label: 'login',
        type: 'text',
        value: ''
      },
      {
        name: 'password',
        label: 'password',
        type: 'password',
        value: ''
      }]} onSubmit={handleLogin} /> */}
    </>
  );
}