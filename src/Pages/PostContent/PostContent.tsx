import React, {useEffect} from "react";
//@ts-ignore
import styles from './PostContent.module.css'
import { useParams } from "react-router-dom";
import Post from "../../Components/Post";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost } from "../../Redux/reducers/postsReducer";
import postsSelectors from "../../Redux/selectors/postsSelectors";
import Lottie from "lottie-react";
import processingAnimation from '../../lotties/processing.json'


const PostContent = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const post = useSelector(postsSelectors.getSinglePost);
  const isLoading = useSelector(postsSelectors.getSinglePostLoading);
  const { id } = params;
  useEffect (() => {
    if (id) {
      dispatch(getSinglePost(id))
    }
  }, [id]);

  return !isLoading && post? (
    <Post post={post} />
  ) : (
    <div className={styles.lottie__container}>
      <Lottie
        className= {styles.lottie__container__animation}
        animationData={processingAnimation}
        loop={true}
        />
    </div>
  );
};

export default PostContent;