import React from 'react'
//@ts-ignore
import { useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css'
import { useThemeContext, Theme } from '../../../Context/ThemeContext/Context';
import { PathNames } from '../../../Pages/Router/Router';
import { logoutUser } from '../../../Redux/reducers/authReducers';
import authSelectors from '../../../Redux/selectors/authSelectors';
import UserName from '../../UserName';



const Menu = () => {

   const {theme} = useThemeContext();
   const location = useLocation();
   const dispatch = useDispatch();
   const isAuthenticated = useSelector(authSelectors.getAuthStatus);
   const currentUser = useSelector(authSelectors.getCurrentUser);
   const onLogOut = () => {
      dispatch(logoutUser());
   };
   const MENU_LINK = [
      {
         key:'Home',
         title:'Home',
         path:PathNames.Home,
      },
      {
         key:'Add post',
         title:'Add post',
         path:PathNames.PostContent
      }
   ]
  return (
    <ul
      className={classNames(styles.listMenu, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      {isAuthenticated && currentUser && (
        <li className={styles.currentUser}>
          <UserName userName={currentUser?.username || ""} />
        </li>
      )}
      {MENU_LINK.map(({ key, title, path }) => {
        return (
          <li key={key}>
            <NavLink
              to={path}
              className={classNames({
                [styles.activeLink]: location.pathname === path,
                [styles.inactiveLink]: location.pathname !== path,
              })}
            >
              {title}
            </NavLink>
          </li>
        );
      })}
      {isAuthenticated && (
        <li className={styles.logOut}>
          <div
            className={classNames({
              [styles.activeLink]: location.pathname === PathNames.Search,
            })}
            onClick={onLogOut}
          >
            Log out
          </div>
        </li>
      )}
    </ul>
  );
};
export default Menu;
