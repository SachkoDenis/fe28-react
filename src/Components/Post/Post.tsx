import React, { FC } from "react";

//@ts-ignore
import styles from "./Post.module.css";
import classNames from "classnames";
import { PostProps } from "./types";

import { IconThumbsDown, IconThumbsUp, IconBookmark } from "../../Assets/Icons";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { PathNames } from "../../Pages/Router/Router";
import { useNavigate } from "react-router-dom";



const Post: FC<PostProps> = ({ post }) => {
  const { title, image, text  } = post;

  const { theme } = useThemeContext();

  const navigate = useNavigate();

  const onBackHomeClick = () => {
    navigate (PathNames.Home)
  };

  return (
    <>
      <div
        className={classNames(styles.singlePost, {
          [styles.darkContainer]: theme === Theme.Dark
        })}
      >
        <div className={styles.postHeader}>
          <div className={styles.postHeaderNumber} onClick={onBackHomeClick}>Home 
            <span>| Post14278</span>
          </div>
        </div>
        <div className={styles.postContent}>
          <div className={styles.postTitle}>{title}</div>
          <div className={styles.postImg}>
           <img src={image} alt="img" />
          </div>
          <div className={styles.postText}>{text}</div>
          <div className={styles.postIcons}>
            <div className={styles.leftIcons}>
              <div><IconThumbsUp/></div>
              <div><IconThumbsDown/></div>
           </div>
            <div className={styles.rightIcons}>
              <div><IconBookmark/></div>
              <div>Add to favorites</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Post;
