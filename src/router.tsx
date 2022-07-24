import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Place from "./pages/Place/Place";
import { MySchedule } from "./pages/MySchedule/MySchedule";
import { ScheduleCource } from "./pages/SchduleCource/component/ScheduleCource";


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