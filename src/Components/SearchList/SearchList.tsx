import React, { FC } from "react";
//@ts-ignore
import styles from "./SearchList.module.css";
import classNames from "classnames";
import InfiniteScroll from 'react-infinite-scroll-component'
import SearchCard from '../SearchCard';
import {CardsListType} from '../../Utils'


type SearchListProps = {
  searchedPosts: CardsListType;
  count: number;
  onScroll: () => void;
}
const SearchList: FC<SearchListProps> = ({
  searchedPosts,
  count,
  onScroll,
}) => {
  const hasMore = searchedPosts.length < count;
  
  return searchedPosts && searchedPosts.length > 0 ? (
    <div className={classNames(styles.searchListContent)}>
       <div className={classNames(styles.searchListCards)}>
        <InfiniteScroll
          next={onScroll}
          hasMore={hasMore}
          dataLength={searchedPosts.length}
          loader={<h1>{'Loading'}</h1>}
          scrollThreshold={0.9}
          >
            {searchedPosts.map((post) =>{
              return <SearchCard post={post} key={post.id} />
            })}
        </InfiniteScroll>
      </div>
    </div>
  ) : null;
};
export default SearchList;