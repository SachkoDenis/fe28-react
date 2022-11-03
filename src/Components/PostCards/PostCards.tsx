import React, { FC } from "react";
//@ts-ignore
import styles from './PostCards.module.css'
import { CardSize } from "../CardsList/CardsList";
import classNames from 'classnames'
import { IconBookmark, IconMoreHorizontal, IconThumbsDown, IconThumbsUp } from "../../Assets/Icons";
import { PostCardsProps } from "./types";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { useDispatch, useSelector } from "react-redux";
import {
  setFavouritePost,
  setLikeStatus,
  setSelectedPost,
  setSelectedImgPost,
  setSingleImgModalVisible,
  setSinglePostModalVisible,
} from '../../Redux/reducers/postsReducer'
import { CardsListType, LikeStatus } from "../../Utils/globalTypes";
import postsSelectors from "../../Redux/selectors/postsSelectors";
import {useNavigate} from 'react-router-dom'


const PostCard: FC<PostCardsProps> = ({ post, size }) => {
  const { id, image, text, date, title, likeStatus  } = post;
  const { theme } = useThemeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favouritePostList: CardsListType = useSelector (
    postsSelectors.getFavoritePosts
  );
  const currentPostIndex = favouritePostList.findIndex(post => post.id === id);
  const isFavourite = currentPostIndex !== -1;

  const onNavigateToPost = ( ) => {
    navigate (`/posts/${id}`)
  };

  const onAddFavourite = (e: any) => {
    e.stopPropagation();
    dispatch(setFavouritePost(post))
  };
  const onStatusClick = (status:LikeStatus) => {
    dispatch(setLikeStatus({status, id}))
  };
  const onOpenPostModal = (e:any) => {
    e.stopPropagation();
    dispatch(setSelectedPost(post));
    dispatch(setSinglePostModalVisible(true))
  };
  const onOpenImgModal = (e:any) => {
    e.stopPropagation();
    dispatch(setSelectedImgPost(post));
    dispatch(setSingleImgModalVisible(true))
  }



  return (
    <>
    <div
      className={classNames(styles.post, {
        [styles.largePost]: size === CardSize.Large,
        [styles.mediumPost]: size === CardSize.Medium,
        [styles.smallPost]: size === CardSize.Small,
        [styles.darkContainer]: theme === Theme.Dark
      })}
      onClick={onNavigateToPost}
    >
      <div className={styles.postCardContent}>
          <div className={styles.postCardContentLeft}>
            <div className={styles.postCardContentLeftTitle}>
              <div className={styles.postCardDate}> {date} </div>
              <div className={styles.postCardTitle}> {title}</div>
            </div>
          {size === CardSize.Large && (
            <div className={styles.postCardText}> {text}</div>
          )}
          </div>
          <div className={styles.postCardContentRight} onClick={onOpenImgModal}>
              <img src={image} alt="img" /> 
          </div>
      </div>
      <div className={styles.postCardIcons}>
            <div className={styles.postCardIconsLeft}>
              <div
                onClick={() => onStatusClick(LikeStatus.Like)}
                className={classNames(styles.likeStatusButton, {
                  [styles.like]: likeStatus === LikeStatus.Like && 1
                })}
                >
                  <IconThumbsUp /> {likeStatus === LikeStatus.Like && 1}
              </div>
              <div
              onClick={() => onStatusClick(LikeStatus.Dislike)}
              className={classNames(styles.likeStatusButton, {
                [styles.dislike]:likeStatus === LikeStatus.Dislike
              })}
              >
                <IconThumbsDown /> {likeStatus === LikeStatus.Dislike && 1}
              </div>
            </div>
            <div className={styles.postCardIconsRight}>
              <div
              onClick={onAddFavourite}
              className={classNames({[styles.favouritePos]: isFavourite})}
              >
              <IconBookmark/>
              </div>
              <div
              onClick={onOpenPostModal}
              >
              <IconMoreHorizontal />
              </div>
            </div>
      </div>
    </div>
  </>
  );
};


  


export default PostCard