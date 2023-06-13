import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownHeader,
  DropdownDivider,
  DropdownFooter,
  DropdownItem,
} from "@/base-components";
import { faker as $f } from "@/utils";

function Main() {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Change Password</h2>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {/* BEGIN: Profile Menu */}
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3 flex lg:block flex-col-reverse">
          <div className="intro-y box mt-5">
            <div className="relative flex items-center p-5">
              <div className="w-12 h-12 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src={$f()[0].photos[0]}
                />
              </div>
              <div className="ml-4 mr-auto">
                <div className="font-medium text-base">
                  {$f()[0].users[0].name}
                </div>
                <div className="text-slate-500">{$f()[0].jobs[0]}</div>
              </div>
              <Dropdown>
                <DropdownToggle tag="a" className="w-5 h-5 block" href="#">
                  <Lucide
                    icon="MoreHorizontal"
                    className="w-5 h-5 text-slate-500"
                  />
                </DropdownToggle>
                <DropdownMenu className="w-56">
                  <DropdownContent>
                    <DropdownHeader> Export Options</DropdownHeader>
                    <DropdownDivider />
                    <DropdownItem>
                      <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                      English
                    </DropdownItem>
                    <DropdownItem>
                      <Lucide icon="Box" className="w-4 h-4 mr-2" />
                      Indonesia
                      <div className="text-xs text-white px-1 rounded-full bg-danger ml-auto">
                        10
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <Lucide icon="Layout" className="w-4 h-4 mr-2" />
                      English
                    </DropdownItem>
                    <DropdownItem>
                      <Lucide icon="Sidebar" className="w-4 h-4 mr-2" />
                      Indonesia
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownFooter>
                      <button
                        type="button"
                        className="btn btn-primary py-1 px-2"
                      >
                        Settings
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary py-1 px-2 ml-auto"
                      >
                        View Profile
                      </button>
                    </DropdownFooter>
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <a className="flex items-center text-primary font-medium" href="">
                <Lucide icon="Activity" className="w-4 h-4 mr-2" /> Personal
                Information
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Box" className="w-4 h-4 mr-2" /> Account Settings
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Change Password
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" /> User
                Settings
              </a>
            </div>
            <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <a className="flex items-center" href="">
                <Lucide icon="Activity" className="w-4 h-4 mr-2" /> Email
                Settings
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Box" className="w-4 h-4 mr-2" /> Saved Credit
                Cards
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Social Networks
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Tax
                Information
              </a>
            </div>
            <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400 flex">
              <button type="button" className="btn btn-primary py-1 px-2">
                New Group
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary py-1 px-2 ml-auto"
              >
                New Quick Link
              </button>
            </div>
          </div>
        </div>
        {/* END: Profile Menu */}
        <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
          {/* BEGIN: Change Password */}
          <div className="intro-y box lg:mt-5">
            <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">Change Password</h2>
            </div>
            <div className="p-5">
              <div>
                <label htmlFor="change-password-form-1" className="form-label">
                  Old Password
                </label>
                <input
                  id="change-password-form-1"
                  type="password"
                  className="form-control"
                  placeholder="Input text"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="change-password-form-2" className="form-label">
                  New Password
                </label>
                <input
                  id="change-password-form-2"
                  type="password"
                  className="form-control"
                  placeholder="Input text"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="change-password-form-3" className="form-label">
                  Confirm New Password
                </label>
                <input
                  id="change-password-form-3"
                  type="password"
                  className="form-control"
                  placeholder="Input text"
                />
              </div>
              <button type="button" className="btn btn-primary mt-4">
                Change Password
              </button>
            </div>
          </div>
          {/* END: Change Password */}
        </div>
      </div>
    </>
  );
}

export default Main;
