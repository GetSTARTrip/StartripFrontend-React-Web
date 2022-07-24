import React, { useState } from "react";
import { selector, useRecoilValue } from "recoil";
import { getAPI } from "./axios";
import { dashboard } from "./urls";

const getDashboardList = selector({
  key: "dashboardlist",
  get: getAPI(dashboard),
});

const dashboardList = useRecoilValue(getDashboardList);

export { dashboardList, getDashboardList };
