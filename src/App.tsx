import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./components/pages/SignIn/SignIn";
import SignUp from "./components/pages/SignUp/SignUp";
import Profile from "./components/pages/Profile/Profile";
import Home from "./components/pages/Home/Home";
import Categories from "./components/pages/Categories/Categories";
import Category from "./components/pages/Category/Category";
import Cart from "./components/pages/Cart/Cart";
import Product from "./components/pages/Product/Product";
import Other from "./components/pages/Other/Other";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./index.css";
import routerPaths from "./routerPaths";

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
            <Route path={routerPaths.categories} element={<Categories />} />
            <Route path={routerPaths.category} element={<Category />} />
            <Route
              path={routerPaths.product}
            />
            <Route path={routerPaths.cart} element={<Cart />} />
            <Route path={routerPaths.other} element={<Other />} />
            <Route path={routerPaths.profile} element={<Profile />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
