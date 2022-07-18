import Login from "pages/Authorization/Login";
import SignUp from "pages/Authorization/SignUp";
import Main from "pages/Main/Main";
import Place from "pages/Place/Place";

const routerData = [
  {
    url: "/",
    component: <Main />,
  },
  {
    url: "/login",
    component: <Login />,
  },
  {
    url: "/signup",
    component: <SignUp />,
  },
  {
    url: "/place",
    component: <Place />,
  },
];

export default routerData;