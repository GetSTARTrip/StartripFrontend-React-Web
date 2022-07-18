import Login from "pages/Authorization/Login";
import SignUp from "pages/Authorization/SignUp";
import Main from "pages/Main/Main";
import Place from "pages/Place/Place";
import { MySchedule } from "pages/MySchedule/MySchedule";
import { ScheduleCource } from "pages/SchduleCource/ScheduleCource";


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
  {
    url: "/myschedule",
    component: <MySchedule />
  },
  {
    url: "/schedulecource",
    component: <ScheduleCource />
  }
];

export default routerData;