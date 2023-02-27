import { atom } from "recoil";
import { localPersist } from ".";

export const userState = atom({
  key: "userState",
  default: {
    email: "",
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    token: "",
    isLoggedIn: false,
  },
  effects: [localPersist],
});

export const restoState = atom({
  key: "restoState",
  default: {
    email: "",
    name: "",
    longitude: "",
    latitude: "",
    description: "",
    status: "",
    category: "",
    username: "",
    images: [],
    _id: "",
    isLoggedIn: false,
  },
  effects: [localPersist],
});

export const restoTokenState = atom({
  key: "restoTokenState",
  default: {
    jwToken: "",
    refreshToken: "",
  },
  effects: [localPersist],
});
