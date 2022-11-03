import React, {useEffect, useState} from "react";
//@ts-ignore
import styles from "./Search.module.css";
import classNames from "classnames";
import SearchList from "../../Components/SearchList";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import Lottie from 'lottie-react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import postsSelectors from "../../Redux/selectors/postsSelectors";
import processingAnimation from '../../lotties/processing.json'
import { PathNames } from "../Router";
import { DEFAULT_PAGE_NUMBER, PER_PAGE } from "../../Utils";
import { searchForPosts } from "../../Redux/reducers/postsReducer";

type LocationState = {
  searchElement: string;
}

const Search = () => {
  const { theme } = useThemeContext();

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {searchElement} = location.state as LocationState;
  const searchedPosts = useSelector(postsSelectors.getSearchedPosts);
  const searchedPostsCount = useSelector(postsSelectors.getSearchedPostsCount);
  const isSearchPostsLoading = useSelector(postsSelectors.getSearchedPostsLoading);
  const [page, setPage] = useState(DEFAULT_PAGE_NUMBER);

  useEffect(() => {
    if (searchElement.length === 0) {
      navigate(PathNames.Home)
    }
  }, [searchElement]);

  useEffect(()=> {
    const offset = (page - 1) * PER_PAGE;
    dispatch(
      searchForPosts({search: searchElement, offset ,isOverwrite:false})
    );
  }, [page]);

  const onScroll = () => {
    setPage((prevPage) => prevPage + 1)
  };

  return (
    <div
      className={classNames(styles.searchPageWrapper, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      <div className={styles.searchListTitle}>
        Search results "{searchElement}"
      </div>
      {!isSearchPostsLoading ? (
        <SearchList
          searchedPosts={searchedPosts}
          count={searchedPostsCount}
          onScroll={onScroll}
        />
      ) : (
        <div className={styles.lottieContainer}>
          <Lottie
            className={styles.lottieContainerAnimation}
            animationData={processingAnimation}
            loop={true}
          />
        </div>
      )}
    </div>
  );
};


export default Search;