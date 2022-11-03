import React, { useState } from "react";
//@ts-ignore
import styles from './Header.module.css';
import UserName from "../UserName/UserName";
import Menu from "./Menu";
import Input from "../Input";
import { IconCancel, IconMenu, IconSearch, IconDark, IconLight, IconUser } from "../../Assets/Icons";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import authSelectors from "../../Redux/selectors/authSelectors";
import { PathNames } from "../../Pages/Router/Router";
import { searchForPosts } from "../../Redux/reducers/postsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const Header = ({onClick, isOpened }: any) => {

    const {onChangeTheme, theme}= useThemeContext()

    const dispatch= useDispatch
    const currentUser = useSelector(authSelectors.getCurrentUser)
    const [value, setValue] = useState<string>('')
    const onChange=(inputValue:string) => {
        setValue(inputValue)
    }
    const navigate= useNavigate()
    const onSignInClick = () => {
        navigate(PathNames.SignIn)
    }
    const onSearch = () => {
        if (value.length > 0) {
          dispatch(searchForPosts({ search: value, offset:0, isOverwrite: true }));
          navigate(PathNames.Search, { state: { searchElement: value } });
          setValue("");
          onClick();
        }
      };
    
    return (
        <div className={styles.headerMenu}>
         <nav className={styles.header} >
            <div className={styles.burgerButton} onClick={onClick}>
                {isOpened ? <IconCancel/> : <IconMenu/>}
            </div>
            <div className={styles.input}>
                {isOpened && (
                    <Input placeholder={'Placeholder'} onChange={onChange} value={value} />
                )}
                </div>
            <div className={styles.search}>
                {isOpened && (
                    <div className={styles.iconSearch} onClick={onSearch}>
                        <IconSearch/>
                    </div>
                )}
                <div className={styles.themeIcon} onClick={onChangeTheme}>
                    {theme === Theme.Dark ? <IconLight /> : <IconDark />}
                </div>
                {currentUser ? (
                  <UserName userName={currentUser?.username || ''} />
                ) : (
                    <div className={styles.userIcon} onClick={onSignInClick}>
                        <IconUser />
                    </div>
                )
            }
            </div>
        </nav>
        {isOpened && <Menu />}

        </div>
    )
}
export default Header