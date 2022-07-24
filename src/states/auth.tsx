import { atom } from "recoil";

const jwtToken = atom({
    key: "jwt-token", // 해당 atom의 고유 key
    default: "", // 기본값
});

const userRole = atom({
  key: "user-role", // 해당 atom의 고유 key
  default: "none", // 기본값
});

export { jwtToken, userRole };