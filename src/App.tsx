import routerPaths from "./routerPaths";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/SignUp/SignUp";
import Profile from "./components/pages/Profile/Profile";
import Home from "./components/pages/Home/Home";
import Category from "./components/pages/Category/Category";
import Cart from "./components/pages/Cart/Cart";
import Product from "./components/pages/Product/Product";
import Other from "./components/pages/Other/Other";
import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="appWrapper">
      <Router>
        <Header />
        <div className="contentWrapper">
          <Routes>
            <Route path={routerPaths.home} element={<Home />} />
            <Route path={routerPaths.signin} element={<SignIn />} />
            <Route path={routerPaths.signup} element={<SignUp />} />
            <Route path={routerPaths.categories} element={<Category />} />
            <Route path={routerPaths.category} element={<Category />} />
            <Route path={routerPaths.product} element={<Product />} />
            <Route path={routerPaths.cart} element={<Cart />} />
            <Route path={routerPaths.other} element={<Other />} />
            <Route path={routerPaths.profile} element={<Profile />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
