import routerPaths from "./routerPaths";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LoginView from "./components/LoginView";
import RegisterView from "./components/RegisterView";
import HomeView from "./components/HomeView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routerPaths.login}>
          <LoginView />
        </Route>
        <Route path={routerPaths.register}>
          <RegisterView />
        </Route>
        <Route path={routerPaths.home}>
          <HomeView />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
