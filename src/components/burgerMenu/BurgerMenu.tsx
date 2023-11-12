
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import styles from './BurgerMenu.module.css';
import { useAppSelector } from '../../app/hooks';

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ isOpen, toggleMenu }) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    
    <>
      {isOpen && (
        <div className={styles.overlay} onClick={toggleMenu}></div>
      )}
      <div className={cn(styles.menu, { [styles.open]: isOpen })}>
        <div className={styles.headerContent}>
          {user?.id ? (
            <>
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
            </>
          ) : (
            <NavLink to="login" className={styles.link}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;





