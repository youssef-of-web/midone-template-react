import { atom } from "recoil";

const simpleMenu = atom({
  key: "simpleMenu",
  default: {
    menu: [
      {
        icon: "Home",
        pathname: "/simple-menu/page-1",
        title: "Page 1",
      },
      {
        icon: "Home",
        pathname: "/simple-menu/page-2",
        title: "Page 2",
      },
    ],
  },
});

export { simpleMenu };
