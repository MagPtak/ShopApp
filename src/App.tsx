import routerPaths from "./routerPaths";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Cart from "./components/Cart/Cart";
import Product from "./components/Product";
import Other from "./components/Other/Other";
import "./index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


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
