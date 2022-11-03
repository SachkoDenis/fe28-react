import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardSize } from "../../../../Components/CardsList/CardsList";
import PostCards from "../../../../Components/PostCards";
import ModalWindow from "../../../../Components/ModalWindow/ModalWindow";  
import { setSelectedPost, setSinglePostModalVisible } from "../../../../Redux/reducers/postsReducer";
import postsSelectors from "../../../../Redux/selectors/postsSelectors";

const SinglePostModal= () => {
    const post= useSelector(postsSelectors.getSelectedPost)
    const isVisible= useSelector(postsSelectors.getIsModalVisible)
    const isPostModalVisible= useSelector(postsSelectors.getIsModalVisible)
    const dispatch= useDispatch()
    const onClose= (e:any) => {
        e.stopPropagation();
        dispatch(setSinglePostModalVisible(isVisible));
        dispatch(setSelectedPost(null))
    }
    return post?(
        <ModalWindow active={isVisible} closeModal={onClose} isPostModalVisible={isPostModalVisible}>
            <PostCards size={CardSize.Large} post={post} />
        </ModalWindow>
    ):null;
}

export default SinglePostModal