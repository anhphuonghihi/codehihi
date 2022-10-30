import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  deleteProjectReducer,
  deleteReviewReducer,
  newProjectReducer,
  newReviewReducer,
  productDetailsReducer,
  productReviewsReducer,
  projectsReducer,
} from "./reducers/ProjectReducer";
import { allUsersReducer, forgotPasswordReducer, profileReducer, userDetailsReducer, userReducer } from "./reducers/userReducer";
import { favouriteReducer } from "./reducers/FavouriteReducer";


const reducer = combineReducers({
  projects: projectsReducer,
  productDetails: productDetailsReducer,
  user: userReducer,
  profile: profileReducer,
  favourite: favouriteReducer,
  newReview: newReviewReducer,
  createProject: newProjectReducer,
  deleteProject: deleteProjectReducer,
  allUsers: allUsersReducer,
  userDetails: userDetailsReducer,
  deleteReview: deleteReviewReducer,
  productReviews: productReviewsReducer,
  forgotPassword: forgotPasswordReducer,
});

let initialState = {
  favourite: {
    favouriteItems: localStorage.getItem("favouriteItems")
      ? JSON.parse(localStorage.getItem("favouriteItems"))
      : [],
  },
};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
