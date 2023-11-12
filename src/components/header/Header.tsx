// import { FC, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import cn from 'classnames';
// import styles from './Header.module.css';
// import { useAppDispatch, useAppSelector } from '../../app/hooks';
// import { login } from '../../features/authorization/authAction';

// const Header: FC = () => {
//   const { user } = useAppSelector((state) => state.auth);
//   const dispatch = useAppDispatch();
//   console.log('Отрендрился хедер!');

//   useEffect(() => {
//     dispatch(login({ username:"kminchelle", password:"0lelplR" }))

//   },[])

//   return (
//     <div className={styles.navbar}>
//       <div className={styles.logo}>
//         <img src="/images.jpg" alt="My App Logo" className={styles.logoImage} />
//       </div>
//       <div className={styles.loginButtonContainer}>
//         {user?.id ? (
//           <div className={styles.headerContent}>
//             <span className={styles.greeting}>Hello, {user?.firstName}!</span>
//             <div className={styles.loggedInLinks}>
//               <NavLink to="/" className={styles.link}>Home</NavLink>
//               <NavLink to="products" className={styles.link}>products</NavLink>
//               <NavLink to="/youtube" className={styles.link}>My music</NavLink>
//               <NavLink to="/users" className={styles.link}>My friends</NavLink>
//             </div>
//           </div>
//         ) : (
//           <button className={styles.loginButton}>
//             <NavLink to="login" className={styles.link}>Login</NavLink>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;



import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './Header.module.css';
import BurgerMenu from '../burgerMenu/BurgerMenu';
import { useAppSelector } from '../../app/hooks';

const Header: FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img src="/images.jpg" alt="My App Logo" className={styles.logoImage} />
        </div>
        <div className={styles.burgerIcon} onClick={toggleBurgerMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
      <div className={cn(styles.links, { [styles.hidden]: isBurgerMenuOpen })}>
        {user?.id ? (
          <div className={styles.headerContent}>
            <span className={styles.greeting}>Hello, {user?.firstName}!</span>
            <div className={styles.loggedInLinks}>
              <NavLink to="/" className={styles.link}>
                Home
              </NavLink>
              <NavLink to="products" className={styles.link}>
                Products
              </NavLink>
              <NavLink to="/youtube" className={styles.link}>
                My Music
              </NavLink>
              <NavLink to="/users" className={styles.link}>
                My Friends
              </NavLink>
            </div>
          </div>
        ) : (
          <button className={styles.loginButton}>
            <NavLink to="login" className={styles.link}>
              Login
            </NavLink>
          </button>
        )}
      </div>
      <BurgerMenu isOpen={isBurgerMenuOpen} toggleMenu={toggleBurgerMenu} />
    </div>
  );
};

export default Header;
