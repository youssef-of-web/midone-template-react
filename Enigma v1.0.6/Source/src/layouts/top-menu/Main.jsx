import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { helper as $h } from "@/utils";
import { topMenu as useTopMenuStore } from "@/stores/top-menu";
import { useRecoilValue } from "recoil";
import { linkTo, nestedMenu } from "@/layouts/side-menu";
import { Lucide } from "@/base-components";
import classnames from "classnames";
import TopBar from "@/components/top-bar/Main";
import MobileMenu from "@/components/mobile-menu/Main";
import MainColorSwitcher from "@/components/main-color-switcher/Main";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main";

function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formattedMenu, setFormattedMenu] = useState([]);
  const topMenuStore = useRecoilValue(useTopMenuStore);
  const topMenu = () => nestedMenu($h.toRaw(topMenuStore.menu), location);

  useEffect(() => {
    dom("body").removeClass("error-page").removeClass("login").addClass("main");
    setFormattedMenu(topMenu());
  }, [topMenuStore, location.pathname]);

  return (
    <div className="py-5 md:py-0">
      <DarkModeSwitcher />
      <MainColorSwitcher />
      <MobileMenu />
      <TopBar className="top-bar-boxed--top-menu" />
      {/* BEGIN: Top Menu */}
      <nav className="top-nav">
        <ul>
          {formattedMenu.map((menu, menuKey) => (
            <li key={menuKey}>
              <a
                href={menu.subMenu ? "#" : menu.pathname}
                className={classnames({
                  "top-menu": true,
                  "top-menu--active": menu.active,
                })}
                onClick={(event) => {
                  event.preventDefault();
                  linkTo(menu, navigate);
                }}
              >
                <div className="top-menu__icon">
                  <Lucide icon={menu.icon} />
                </div>
                <div className="top-menu__title">
                  {menu.title}
                  {menu.subMenu && (
                    <Lucide icon="ChevronDown" className="top-menu__sub-icon" />
                  )}
                </div>
              </a>
              {/* BEGIN: Second Child */}
              {menu.subMenu && (
                <ul>
                  {menu.subMenu.map((subMenu, subMenuKey) => (
                    <li key={subMenuKey}>
                      <a
                        href={subMenu.subMenu ? "#" : subMenu.pathname}
                        className="top-menu"
                        onClick={(event) => {
                          event.preventDefault();
                          linkTo(subMenu, navigate);
                        }}
                      >
                        <div className="top-menu__icon">
                          <Lucide icon="Activity" />
                        </div>
                        <div className="top-menu__title">
                          {subMenu.title}
                          {subMenu.subMenu && (
                            <Lucide
                              icon="ChevronDown"
                              className="top-menu__sub-icon"
                            />
                          )}
                        </div>
                      </a>
                      {/* BEGIN: Third Child */}
                      {subMenu.subMenu && (
                        <ul>
                          {subMenu.subMenu.map(
                            (lastSubMenu, lastSubMenuKey) => (
                              <li key={lastSubMenuKey}>
                                <a
                                  href={
                                    lastSubMenu.subMenu
                                      ? "#"
                                      : lastSubMenu.pathname
                                  }
                                  className="top-menu"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    linkTo(lastSubMenu, navigate);
                                  }}
                                >
                                  <div className="top-menu__icon">
                                    <Lucide icon="Zap" />
                                  </div>
                                  <div className="top-menu__title">
                                    {lastSubMenu.title}
                                  </div>
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                      {/* END: Third Child */}
                    </li>
                  ))}
                </ul>
              )}
              {/* END: Second Child */}
            </li>
          ))}
        </ul>
      </nav>
      {/* END: Top Menu */}
      {/* BEGIN: Content */}
      <div className="content content--top-nav">
        <Outlet />
      </div>
      {/* END: Content */}
    </div>
  );
}

export default Main;
