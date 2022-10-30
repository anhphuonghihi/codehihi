import './App.scss';
import Home from "./component/Home/Home";
import WebFont from "webfontloader";
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductDetails from './component/Products/ProductDetails';
import LoginSignup from "./component/Authentication/LoginSignup";
import UserData from './more/UserData';
import { useSelector } from 'react-redux';
import { loadUser } from './actions/userAction';
import Store from "./store";
import ProtectedRoute from './route/ProtectedRoute';
import Profile from "./component/user/Profile";
import UpdatePassword from './component/user/UpdatePassword';
import EditProfile from './component/user/EditProfile';
import About from './component/about/About';
import Products from "./component/Products/Products";
import Search from "./component/Products/Search";
import Support from "./more/Support";
import Favourites from './component/cart/Favourites';

import Rules from "./more/Rules";
import Contact from "./more/Contact";
import MoreOption from "./component/user/MoreOption"
import Dashboard from './component/Admin/Dashboard';
import CreateProduct from './component/Admin/CreateProduct';
import AllProducts from "../../frontend/src/component/Admin/AllProducts";
import EditProduct from "../../frontend/src/component/Admin/EditProduct";
import AllUsers from "../../frontend/src/component/Admin/AllUsers";
import UpdateUser from "../../frontend/src/component/Admin/UpdateUser";
import AllReviews from "../../frontend/src/component/Admin/AllReviews";
import ForgotPassword from "../../frontend/src/component/user/ForgotPassword";
import ResetPassword from "../../frontend/src/component/user/ResetPassword";
import Notfound from "../../frontend/src/more/Notfound";

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);



  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    if(isAuthenticated){
      Store.dispatch(loadUser());
    }

  }, []);
  return (

    <Router>
      {isAuthenticated && <UserData user={user} />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/login" component={LoginSignup} />
        <Route exact path="/about" component={About} />
        <Route exact path="/project" component={Products} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/projects/:keyword" component={Products} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/favourites" component={Favourites} />
        <Route exact path="/faq" component={Rules} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/more" component={MoreOption} />
        <Route exact path="/password/forgot" component={ForgotPassword} />
        <Route exact path="/password/reset/:token" component={ResetPassword} />

        <ProtectedRoute exact path="/me" component={Profile} />
        <ProtectedRoute exact path="/me/update" component={UpdatePassword} />
        <ProtectedRoute exact path="/me/update/info" component={EditProfile} />

        <ProtectedRoute isAdmin={true} exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute isAdmin={true} exact path="/admin/product" component={CreateProduct} />
        <ProtectedRoute isAdmin={true} exact path="/admin/products" component={AllProducts} />
        <ProtectedRoute isAdmin={true} exact path="/edit/product/:id" component={EditProduct} />

        <ProtectedRoute isAdmin={true} exact path="/admin/users" component={AllUsers} />
        <ProtectedRoute isAdmin={true} exact path="/admin/user/:id" component={UpdateUser} />
        <ProtectedRoute isAdmin={true} exact path="/admin/reviews" component={AllReviews} />
        <Route exact path="*" component={Notfound} />
      </Switch>
    </Router>

  );
}

export default App;
