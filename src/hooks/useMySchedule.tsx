import React, { useState, useCallback } from "react";
import { getAPI } from "../../apis/support/axios";
import {myschedule} from "../apis/urls";

export default () => {
  const [list, getListSchedule] = useState();

  const handler = useCallback(() => {
    getListSchedule({
      getAPI(myschedule);
    });
  }, [list]);
  return [ list, handler ];
};
