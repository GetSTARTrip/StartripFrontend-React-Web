import React, { useState, useCallback } from "react";
import { getAPI } from "../api/support/axios";
import {myschedule} from "../api/support/urls";

export default () => {
  const [list, getListSchedule] = useState();

  const handler = useCallback(() => {
    getListSchedule({
      getAPI(myschedule);
    });
  }, [list]);
  return [ list, handler ];
};
