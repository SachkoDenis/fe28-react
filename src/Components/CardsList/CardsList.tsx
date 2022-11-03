import React, { FC } from "react";
//@ts-ignore
import styles from './CardsList.module.css'
import PostCard from "../PostCards";
import classNames from 'classnames'
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { CardsListType } from "../../Utils/globalTypes";

export enum CardSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

type CardsListProps = {
  cardsList: CardsListType;
}

const CardsList:FC <CardsListProps> = ({cardsList}) => {
  const { theme } = useThemeContext();
  
    return cardsList && cardsList.length > 0 ? (
    
      <div className={classNames(styles.listContainer, {
        [styles.darkContainer]: theme === Theme.Dark
      })}>

        <div className={styles.listContainerLeft}>
          <div className={styles.listContainerLeftUp}>
            <PostCard post={cardsList[0]} size={CardSize.Large} />
          </div>

          <div className={styles.listContainerLeftDown}>
            {cardsList.map((post, id) => {
               if (id > 0 && id < 5) {
                return (
                  <PostCard post={post} key={post.id} size={CardSize.Medium}/>
                )
              }
            })}
          </div>       
        </div>
        <div className={styles.listContainerRight}>
            {cardsList.map((post, id) => {
              if (id > 5) {
                return <PostCard post={post} key={post.id} size={CardSize.Small}/>;
               }
            })}
        </div>

      </div>
    ) : null;
  };

  export default CardsList