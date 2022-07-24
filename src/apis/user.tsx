import React, { useState } from "react";
import { selector, useRecoilValue } from "recoil";
import { getAPI } from "./axios";
import { user } from "./urls";

const getUserId = selector({
  key: "getUserId",
  get: getAPI(user + "/user"),
});

const userId = useRecoilValue(getUserId);

export { userId, getUserId };
