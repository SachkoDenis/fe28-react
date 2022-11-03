import React, { useState } from "react";
//@ts-ignore
import styles from './PagesWrapper.module.css'
import { Outlet, useLocation } from "react-router-dom";
import classNames from "classnames";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Blog from "../Blog";
import { PathNames } from "../Router/Router";
import { Theme, useThemeContext } from "../../Context/ThemeContext/Context";
import { useSelector } from "react-redux";
import postsSelectors from "../../Redux/selectors/postsSelectors";



const PagesWrapper = () => {
  const [isOpened, setOpened] = useState(false);
  const { theme } = useThemeContext();
  const location = useLocation();
  const isVisible = useSelector(postsSelectors.getIsModalVisible);
  const imgModal = useSelector(postsSelectors.getIsImgVisible);

  return (
    <div
    className={classNames(styles.app, {
      [styles.darkContainer]:theme === Theme.Dark,
      [styles.modalActive]:isVisible || imgModal,
    })}
    >
      <Header 
      onClick={() => setOpened(!isOpened)}
      isOpened={isOpened}
      />
      {location.pathname === PathNames.Home ? <Blog /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default PagesWrapper;