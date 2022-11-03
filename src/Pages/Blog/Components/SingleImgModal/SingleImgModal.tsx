import React from "react";
//@ts-ignore
import styles from './SingleImgModl.module.css'
import { useDispatch, useSelector } from "react-redux";
import postsSelectors from "../../../../Redux/selectors/postsSelectors";
import { setSelectedImgPost, setSingleImgModalVisible } from "../../../../Redux/reducers/postsReducer";
import ModalWindow from "../../../../Components/ModalWindow";


const SingleImgModal = () => {
    const post = useSelector(postsSelectors.getSelectedImgPost)
    const isVisible= useSelector(postsSelectors.getIsImgVisible)
    const isImgModalVisible = useSelector(postsSelectors.getIsImgVisible)
    const dispatch = useDispatch();
    const onClose = () => {
        dispatch(setSingleImgModalVisible(isVisible));
        dispatch(setSelectedImgPost(null))
        }
        return post? (
            <ModalWindow active={isVisible} closeModal={onClose} isImgModalVisible={isImgModalVisible} >
            <img src={post.image} alt ='img' />
            </ModalWindow>
 
        ):null;
}

export default SingleImgModal