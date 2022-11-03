import React, {useEffect} from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import PagesWrapper from "../PagesWrapper";
import PostContent from "../PostContent";
import Search from "../Search";
import ActivateUser from "../ActivateUser";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../../Redux/selectors/authSelectors";
import { getUser } from "../../Redux/reducers/authReducers";

export enum PathNames {
  Home = "/",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  Search = "/search",
  PostContent = "/posts/:id",
  NewPost = "/add",
  MyPosts = "/my-posts",
  ActivateUser = "/activate/:uid/:token",
}


const Router = () => {

const isAuthenticated = useSelector(authSelectors.getAuthStatus);
const dispatch = useDispatch();
useEffect(() => {
  if (isAuthenticated) {
    dispatch(getUser())
  }
}, [isAuthenticated])

  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<PagesWrapper />}>
          <Route path={PathNames.SignIn} element={!isAuthenticated ? (
          <SignIn />
        ):(
          <Navigate to ={PathNames.Home} replace />
        )} />
          <Route path={PathNames.SignUp} element={<SignUp />} />
          <Route path={PathNames.Search} element={<Search />} />
          <Route path={PathNames.NewPost} element={<PostContent />} />
          <Route path={PathNames.PostContent} element={<PostContent />} />
          <Route path={PathNames.ActivateUser} element={<ActivateUser />} />
        </Route>
        <Route path={"*"} element={<Navigate to={PathNames.Home} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;