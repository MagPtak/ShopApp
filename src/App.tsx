import routerPaths from "./routerPaths";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/pages/Home/Home";
import Category from "./components/pages/Category/Category";
import Cart from "./components/pages/Cart/Cart";
import Product from "./components/Product";
import Other from "./components/pages/Other/Other";
import "./index.css";
import Header from "./components/pages/Header/Header";
import Footer from "./components/pages/Footer/Footer";


function App() {
  return (
    <div className="appWrapper">
      <Router>
        <Header />
        <div className="contentWrapper">
          <Routes>
            <Route path={routerPaths.home} element={<Home />} />
            <Route path={routerPaths.signin} element={<SignIn />}/>
            <Route path={routerPaths.signup} element={<SignUp />}/>
            <Route path={routerPaths.categories} element={<Category />}/>
            <Route path={routerPaths.category} element={<Category />} />
            <Route path={routerPaths.product} element={<Product />}/>
            <Route path={routerPaths.cart} element={<Cart />} />
            <Route path={routerPaths.other} element={<Other />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
