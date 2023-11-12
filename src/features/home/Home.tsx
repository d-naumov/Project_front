
import React, { FC } from 'react';
import styles from './Home.module.css';

const Home: FC = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to our site</h1>
     {/* <img src="./1000_F_176984023_8I82qQPmKn8TqNAZXIYMCSiwccoUiPBg.jpg" alt="bild" /> */}
    </div>
  );
};

export default Home;
