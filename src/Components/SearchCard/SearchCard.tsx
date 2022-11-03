import React, { FC, useState, useEffect } from "react";
//@ts-ignore
import styles from './SearchCard.module.css'
import classNames from "classnames";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";

import {
    IconThumbsDown,
    IconThumbsUp,
    IconMoreHorizontal,
    IconBookmark
} from "../../Assets/Icons";
import { SearchCardProps } from "./types";



const SearchCard: FC<SearchCardProps> = ({ post }) => {
  const { image, title, date } = post;
  const { theme } = useThemeContext();

  return (
    <div className={classNames(styles.searchCard, {
      [styles.darkContainer]: theme === Theme.Dark
    })}>
      <div className={classNames(styles.searchCardContent)}>
        <div className={classNames(styles.searchCardImg)}>
          <img src={image} alt="img" />
        </div>
        <div className={styles.searchCardText}>
          <div className={styles.searchCardDate}>{date}</div>
          <div className={styles.searchCardTitle}>{title}</div>
        </div>
      </div>
      <div className={classNames(styles.searchCardIcons)}>
        <div className={styles.searchCardIconsLeft}>
          <IconThumbsUp />
          <IconThumbsDown />
        </div>
        <div className={styles.searchCardIconsRight}>
          <IconBookmark />
          <IconMoreHorizontal />
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
