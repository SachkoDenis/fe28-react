import React from "react";
//@ts-ignore
import styles from './PostCards.module.css'
import classNames from 'classnames'
import { IconBookmark } from "../../Assets/Icons/IconBookmark";
import { IconMoreHorizontal } from "../../Assets/Icons/IconMoreHorizontal";
import { IconThumbsDown } from "../../Assets/Icons/IconThumbsDown";
import { IconThumbsUp } from "../../Assets/Icons/IconThumbsUp";


export enum CardSize {
    Large = 'large',
    Medium = 'medium',
    Small = 'small'
}
const PostCard = ({ post, size }: any) => {
  const { id, image, text, date, title  } = post;

  return (
    <div
      className={classNames(styles.post, {
        [styles.largePost]: size === CardSize.Large,
        [styles.mediumPost]: size === CardSize.Medium,
        [styles.smallPost]: size === CardSize.Small,
      })}
    >
      <div className={styles.postCard}>
          <div className={styles.postCardContent}>
          <div className={styles.postCardContentLeft}>
            <div className={styles.postCardDate}> {date} </div>
            <div className={styles.postCardTitle}> {title}</div>
            {size === CardSize.Large && (
            <div className={styles.postCardText}> {text}</div>
            )}
          </div>
          <div className={styles.postCardContentRight}>
            <div className={styles.postCardContentImage}>
              <img src={image} alt="img" /> 
            </div>
          </div>
          </div>
          <div className={styles.postCardContentIcons}>
            <div className={styles.postCardContentIconsLeft}>
              <IconThumbsUp />
              <IconThumbsDown />
            </div>
            <div className={styles.postCardContentIconsRight}>
              <IconBookmark/>
              <IconMoreHorizontal />
            </div>
          </div>
        </div>
  </div>
  );
};


  


export default PostCard