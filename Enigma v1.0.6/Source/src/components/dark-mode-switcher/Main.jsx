import { useRecoilValue, useSetRecoilState } from "recoil";
import { darkModeValue, darkMode as darkModeStore } from "@/stores/dark-mode";
import dom from "@left4code/tw-starter/dist/js/dom";
import classnames from "classnames";

function Main(props) {
  const darkMode = useRecoilValue(darkModeStore);
  const setDarkModeValue = useSetRecoilState(darkModeValue);

  const setDarkModeClass = () => {
    darkMode ? dom("html").addClass("dark") : dom("html").removeClass("dark");
  };

  const switchMode = () => {
    setDarkModeValue(() => !darkMode);
    localStorage.setItem("darkMode", !darkMode);
    setDarkModeClass();
  };

  setDarkModeClass();

  return (
    <>
      {/* BEGIN: Dark Mode Switcher */}
      <div
        className="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10"
        onClick={switchMode}
      >
        <div className="mr-4 text-slate-600 dark:text-slate-200">Dark Mode</div>
        <div
          className={classnames({
            "dark-mode-switcher__toggle border": true,
            "dark-mode-switcher__toggle--active": darkMode,
          })}
        ></div>
      </div>
      {/* END: Dark Mode Switcher */}
    </>
  );
}

export default Main;
