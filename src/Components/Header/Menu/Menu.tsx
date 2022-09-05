import React, { FC } from 'react';
//@ts-ignore
import styles from './Menu.module.css';
import UserName from '../../UserName';

const Menu = () => {
   return (
      <ul className={styles.list}>
         <li>
            <UserName title={'Artem Malkin'} />
         </li>
         <li>Home</li>
         <li>Add post</li>
      </ul>
   );
};

export default Menu;