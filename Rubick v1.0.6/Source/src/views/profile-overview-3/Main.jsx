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
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TinySlider,
} from "@/base-components";
import ReportLineChart from "@/components/report-line-chart/Main";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useRef } from "react";

function Main() {
  const announcementRef = useRef();
  const newProjectsRef = useRef();
  const todaySchedulesRef = useRef();

  const prevAnnouncement = () => {
    announcementRef.current.tns.goTo("prev");
  };
  const nextAnnouncement = () => {
    announcementRef.current.tns.goTo("next");
  };
  const prevNewProjects = () => {
    newProjectsRef.current.tns.goTo("prev");
  };
  const nextNewProjects = () => {
    newProjectsRef.current.tns.goTo("next");
  };
  const prevTodaySchedules = () => {
    todaySchedulesRef.current.tns.goTo("prev");
  };
  const nextTodaySchedules = () => {
    todaySchedulesRef.current.tns.goTo("next");
  };

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Profile Layout</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        {/* BEGIN: Profile Menu */}
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3 flex lg:block flex-col-reverse">
          <div className="intro-y box mt-5 lg:mt-0">
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
                    <DropdownHeader>Export Options</DropdownHeader>
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
          <div className="intro-y box p-5 bg-primary text-white mt-5">
            <div className="flex items-center">
              <div className="font-medium text-lg">Important Update</div>
              <div className="text-xs bg-white dark:bg-primary dark:text-white text-slate-700 px-1 rounded-md ml-auto">
                New
              </div>
            </div>
            <div className="mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
            <div className="font-medium flex mt-5">
              <button
                type="button"
                className="btn py-1 px-2 border-white text-white dark:text-slate-300 dark:bg-darkmode-400 dark:border-darkmode-400"
              >
                Take Action
              </button>
              <button
                type="button"
                className="btn py-1 px-2 border-transparent text-white dark:border-transparent ml-auto"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
        {/* END: Profile Menu */}
        <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
          <div className="grid grid-cols-12 gap-6">
            {/* BEGIN: Daily Sales */}
            <div className="intro-y box col-span-12 2xl:col-span-6">
              <div className="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="font-medium text-base mr-auto">Daily Sales</h2>
                <Dropdown className="ml-auto sm:hidden">
                  <DropdownToggle tag="a" className="w-5 h-5 block" href="#">
                    <Lucide
                      icon="MoreHorizontal"
                      className="w-5 h-5 text-slate-500"
                    />
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>
                        <Lucide icon="File" className="w-4 h-4 mr-2" /> Download
                        Excel
                      </DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <button className="btn btn-outline-secondary hidden sm:flex">
                  <Lucide icon="File" className="w-4 h-4 mr-2" /> Download Excel
                </button>
              </div>
              <div className="p-5">
                <div className="relative flex items-center">
                  <div className="w-12 h-12 flex-none image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={$f()[0].photos[0]}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <a href="" className="font-medium">
                      {$f()[0].users[0].name}
                    </a>
                    <div className="text-slate-500 mr-5 sm:mr-5">
                      Bootstrap 4 HTML Admin Template
                    </div>
                  </div>
                  <div className="font-medium text-slate-600 dark:text-slate-500">
                    +$19
                  </div>
                </div>
                <div className="relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={$f()[1].photos[0]}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <a href="" className="font-medium">
                      {$f()[1].users[0].name}
                    </a>
                    <div className="text-slate-500 mr-5 sm:mr-5">
                      Tailwind HTML Admin Template
                    </div>
                  </div>
                  <div className="font-medium text-slate-600 dark:text-slate-500">
                    +$25
                  </div>
                </div>
                <div className="relative flex items-center mt-5">
                  <div className="w-12 h-12 flex-none image-fit">
                    <img
                      alt="Midone Tailwind HTML Admin Template"
                      className="rounded-full"
                      src={$f()[2].photos[0]}
                    />
                  </div>
                  <div className="ml-4 mr-auto">
                    <a href="" className="font-medium">
                      {$f()[2].users[0].name}
                    </a>
                    <div className="text-slate-500 mr-5 sm:mr-5">
                      Vuejs HTML Admin Template
                    </div>
                  </div>
                  <div className="font-medium text-slate-600 dark:text-slate-500">
                    +$21
                  </div>
                </div>
              </div>
            </div>
            {/* END: Daily Sales */}
            {/* BEGIN: Announcement */}
            <div className="intro-y box col-span-12 2xl:col-span-6">
              <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="font-medium text-base mr-auto">Announcement</h2>
                <button
                  className="tiny-slider-navigator btn btn-outline-secondary px-2 mr-2"
                  onClick={prevAnnouncement}
                >
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </button>
                <button
                  className="tiny-slider-navigator btn btn-outline-secondary px-2"
                  onClick={nextAnnouncement}
                >
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </button>
              </div>
              <TinySlider
                getRef={(el) => {
                  announcementRef.current = el;
                }}
                className="py-5"
              >
                <div className="px-5">
                  <div className="font-medium text-lg">
                    Midone Admin Template
                  </div>
                  <div className="text-slate-600 dark:text-slate-500 mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever. <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry since the 1500s.
                  </div>
                  <div className="flex items-center mt-5">
                    <div className="px-3 py-2 text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300 rounded font-medium">
                      02 June 2021
                    </div>
                    <button className="btn btn-secondary ml-auto">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="px-5">
                  <div className="font-medium text-lg">
                    Midone Admin Template
                  </div>
                  <div className="text-slate-600 dark:text-slate-500 mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever. <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry since the 1500s.
                  </div>
                  <div className="flex items-center mt-5">
                    <div className="px-3 py-2 text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300 rounded font-medium">
                      02 June 2021
                    </div>
                    <button className="btn btn-secondary ml-auto">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="px-5">
                  <div className="font-medium text-lg">
                    Midone Admin Template
                  </div>
                  <div className="text-slate-600 dark:text-slate-500 mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever. <br />
                    <br />
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry since the 1500s.
                  </div>
                  <div className="flex items-center mt-5">
                    <div className="px-3 py-2 text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300 rounded font-medium">
                      02 June 2021
                    </div>
                    <button className="btn btn-secondary ml-auto">
                      View Details
                    </button>
                  </div>
                </div>
              </TinySlider>
            </div>
            {/* END: Announcement */}
            {/* BEGIN: Projects */}
            <div className="intro-y box col-span-12 2xl:col-span-6">
              <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="font-medium text-base mr-auto">Projects</h2>
                <button
                  className="tiny-slider-navigator btn btn-outline-secondary px-2 mr-2"
                  onClick={prevNewProjects}
                >
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </button>
                <button
                  className="tiny-slider-navigator btn btn-outline-secondary px-2"
                  onClick={nextNewProjects}
                >
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </button>
              </div>
              <TinySlider
                getRef={(el) => {
                  newProjectsRef.current = el;
                }}
                className="py-5"
              >
                <div className="px-5">
                  <div className="font-medium text-lg">
                    Midone Admin Template
                  </div>
                  <div className="text-slate-600 dark:text-slate-500 mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                  <div className="mt-5">
                    <div className="flex text-slate-500">
                      <div className="mr-auto">Pending Tasks</div>
                      <div>20%</div>
                    </div>
                    <div className="progress h-1 mt-2">
                      <div
                        className="progress-bar w-1/2 bg-primary"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="px-5">
                  <div className="font-medium text-lg">
                    Midone Admin Template
                  </div>
                  <div className="text-slate-600 dark:text-slate-500 mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                  <div className="mt-5">
                    <div className="flex text-slate-500">
                      <div className="mr-auto">Pending Tasks</div>
                      <div>20%</div>
                    </div>
                    <div className="progress h-1 mt-2">
                      <div
                        className="progress-bar w-1/2 bg-primary"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="px-5">
                  <div className="font-medium text-lg">
                    Midone Admin Template
                  </div>
                  <div className="text-slate-600 dark:text-slate-500 mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                  <div className="mt-5">
                    <div className="flex text-slate-500">
                      <div className="mr-auto">Pending Tasks</div>
                      <div>20%</div>
                    </div>
                    <div className="progress h-1 mt-2">
                      <div
                        className="progress-bar w-1/2 bg-primary"
                        role="progressbar"
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </TinySlider>
            </div>
            {/* END: Projects */}
            {/* BEGIN: Today Schedules */}
            <div className="intro-y box col-span-12 2xl:col-span-6">
              <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="font-medium text-base mr-auto">
                  Today Schedules
                </h2>
                <button
                  className="tiny-slider-navigator btn btn-outline-secondary px-2 mr-2"
                  onClick={prevTodaySchedules}
                >
                  <Lucide icon="ChevronLeft" className="w-4 h-4" />
                </button>
                <button
                  className="tiny-slider-navigator btn btn-outline-secondary px-2"
                  onClick={nextTodaySchedules}
                >
                  <Lucide icon="ChevronRight" className="w-4 h-4" />
                </button>
              </div>
              <TinySlider
                getRef={(el) => {
                  todaySchedulesRef.current = el;
                }}
                className="py-5"
              >
                <div className="px-5 text-center sm:text-left">
                  <div className="font-medium text-lg">
                    Developing rest API with Laravel 7
                  </div>
                  <div className="text-slate-600 dark:text-slate-500 mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </div>
                  <div className="mt-2">11:15AM - 12:30PM</div>
                  <div className="flex flex-col sm:flex-row items-center mt-5">
                    <div className="flex items-center text-slate-500">
                      <Lucide
                        icon="MapPin"
                        className="hidden sm:block w-4 h-4 mr-2"
                      />
                      1396 Pooh Bear Lane, New Market
                    </div>
                    <button className="btn btn-secondary py-1 px-2 sm:ml-auto mt-3 sm:mt-0sm:ml-auto mt-3 sm:mt-0">
                      View On Map
                    </button>
                  </div>
                </div>
                <div className="px-5 text-center sm:text-left">
                  <div className="font-medium text-lg">
                    Developing rest API with Laravel 7
                  </div>
                  <div className="text-slate-600 dark:text-slate-500 mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </div>
                  <div className="mt-2">11:15AM - 12:30PM</div>
                  <div className="flex flex-col sm:flex-row items-center mt-5">
                    <div className="flex items-center text-slate-500">
                      <Lucide
                        icon="MapPin"
                        className="hidden sm:block w-4 h-4 mr-2"
                      />
                      1396 Pooh Bear Lane, New Market
                    </div>
                    <button className="btn btn-secondary py-1 px-2 sm:ml-auto mt-3 sm:mt-0sm:ml-auto mt-3 sm:mt-0">
                      View On Map
                    </button>
                  </div>
                </div>
                <div className="px-5 text-center sm:text-left">
                  <div className="font-medium text-lg">
                    Developing rest API with Laravel 7
                  </div>
                  <div className="text-slate-600 dark:text-slate-500 mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry
                  </div>
                  <div className="mt-2">11:15AM - 12:30PM</div>
                  <div className="flex flex-col sm:flex-row items-center mt-5">
                    <div className="flex items-center text-slate-500">
                      <Lucide
                        icon="MapPin"
                        className="hidden sm:block w-4 h-4 mr-2"
                      />
                      1396 Pooh Bear Lane, New Market
                    </div>
                    <button className="btn btn-secondary py-1 px-2 sm:ml-auto mt-3 sm:mt-0sm:ml-auto mt-3 sm:mt-0">
                      View On Map
                    </button>
                  </div>
                </div>
              </TinySlider>
            </div>
            {/* END: Today Schedules */}
            {/* BEGIN: Top Products */}
            <TabGroup className="intro-y box col-span-12 2xl:col-span-6">
              <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="font-medium text-base mr-auto">Top Products</h2>
                <Dropdown className="ml-auto">
                  <DropdownToggle tag="a" className="w-5 h-5 block" href="#">
                    <Lucide
                      icon="MoreHorizontal"
                      className="w-5 h-5 text-slate-500"
                    />
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>
                        <Lucide icon="Edit2" className="w-4 h-4 mr-2" /> New
                        Chat
                      </DropdownItem>
                      <DropdownItem>
                        <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                      </DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="p-5">
                <TabList className="nav-boxed-tabs justify-center flex-col sm:flex-row">
                  <Tab
                    fullWidth={false}
                    className="text-center w-full sm:w-20 mb-2 sm:mb-0 sm:mx-2 py-2 px-0 cursor-pointer"
                  >
                    <Lucide icon="Box" className="block w-6 h-6 mb-2 mx-auto" />{" "}
                    Laravel
                  </Tab>
                  <Tab
                    fullWidth={false}
                    className="text-center w-full sm:w-20 mb-2 sm:mb-0 sm:mx-2 py-2 px-0 cursor-pointer"
                  >
                    <Lucide
                      icon="Inbox"
                      className="block w-6 h-6 mb-2 mx-auto"
                    />
                    Symfony
                  </Tab>
                  <Tab
                    fullWidth={false}
                    className="text-center w-full sm:w-20 mb-2 sm:mb-0 sm:mx-2 py-2 px-0 cursor-pointer"
                  >
                    <Lucide
                      icon="Activity"
                      className="block w-6 h-6 mb-2 mx-auto"
                    />
                    Bootstrap
                  </Tab>
                </TabList>
                <TabPanels className="mt-8">
                  <TabPanel>
                    <div className="flex flex-col sm:flex-row items-center">
                      <div className="mr-auto">
                        <a href="" className="font-medium">
                          Wordpress Template
                        </a>
                        <div className="text-slate-500 mt-1">
                          HTML, PHP, Mysql
                        </div>
                      </div>
                      <div className="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                        <div className="bg-success/20 text-success rounded px-2 mr-5">
                          +20%
                        </div>
                        <div className="progress h-1 mt-2 sm:w-40">
                          <div
                            className="progress-bar w-1/2 bg-primary"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center mt-5">
                      <div className="mr-auto">
                        <a href="" className="font-medium">
                          Laravel Template
                        </a>
                        <div className="text-slate-500 mt-1">PHP, Mysql</div>
                      </div>
                      <div className="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                        <div className="bg-success/20 text-success rounded px-2 mr-5">
                          +55%
                        </div>
                        <div className="progress h-1 mt-2 sm:w-40">
                          <div
                            className="progress-bar w-2/3 bg-primary"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center mt-5">
                      <div className="mr-auto">
                        <a href="" className="font-medium">
                          Tailwind HTML Template
                        </a>
                        <div className="text-slate-500 mt-1">HTML, CSS, JS</div>
                      </div>
                      <div className="w-full sm:w-auto flex items-center mt-3 sm:mt-0">
                        <div className="bg-success/20 text-success rounded px-2 mr-5">
                          +40%
                        </div>
                        <div className="progress h-1 mt-2 sm:w-40">
                          <div
                            className="progress-bar w-3/4 bg-primary"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </div>
            </TabGroup>
            {/* END: Top Products */}
            {/* BEGIN: Work In Progress */}
            <TabGroup className="intro-y box col-span-12 2xl:col-span-6">
              <div className="flex items-center px-5 py-5 sm:py-0 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="font-medium text-base mr-auto">
                  Work In Progress
                </h2>
                <Dropdown className="ml-auto sm:hidden">
                  <DropdownToggle tag="a" className="w-5 h-5 block" href="#">
                    <Lucide
                      icon="MoreHorizontal"
                      className="w-5 h-5 text-slate-500"
                    />
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent tag="div">
                      <TabList className="block">
                        <Tab
                          fullWidth={false}
                          className="dropdown-item cursor-pointer"
                        >
                          New
                        </Tab>
                        <Tab
                          fullWidth={false}
                          className="dropdown-item cursor-pointer"
                        >
                          Last Week
                        </Tab>
                      </TabList>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <TabList className="nav-link-tabs w-auto ml-auto hidden sm:flex">
                  <Tab fullWidth={false} className="py-5 cursor-pointer">
                    New
                  </Tab>
                  <Tab fullWidth={false} className="py-5 cursor-pointer">
                    Last Week
                  </Tab>
                </TabList>
              </div>
              <div className="p-5">
                <TabPanels>
                  <TabPanel>
                    <div>
                      <div className="flex">
                        <div className="mr-auto">Pending Tasks</div>
                        <div>20%</div>
                      </div>
                      <div className="progress h-1 mt-2">
                        <div
                          className="progress-bar w-1/2 bg-primary"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="flex">
                        <div className="mr-auto">Completed Tasks</div>
                        <div>2 / 20</div>
                      </div>
                      <div className="progress h-1 mt-2">
                        <div
                          className="progress-bar w-1/4 bg-primary"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="flex">
                        <div className="mr-auto">Tasks In Progress</div>
                        <div>42</div>
                      </div>
                      <div className="progress h-1 mt-2">
                        <div
                          className="progress-bar w-3/4 bg-primary"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="flex">
                        <div className="mr-auto">Tasks In Review</div>
                        <div>70%</div>
                      </div>
                      <div className="progress h-1 mt-2">
                        <div
                          className="progress-bar w-4/5 bg-primary"
                          role="progressbar"
                          aria-valuenow="0"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                    <a
                      href=""
                      className="btn btn-secondary block w-40 mx-auto mt-5"
                    >
                      View More Details
                    </a>
                  </TabPanel>
                </TabPanels>
              </div>
            </TabGroup>
            {/* END: Work In Progress */}
            {/* BEGIN: Latest Tasks */}
            <TabGroup className="intro-y box col-span-12 2xl:col-span-6">
              <div className="flex items-center px-5 py-5 sm:py-0 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="font-medium text-base mr-auto">Latest Tasks</h2>
                <Dropdown className="ml-auto sm:hidden">
                  <DropdownToggle tag="a" className="w-5 h-5 block" href="#">
                    <Lucide
                      icon="MoreHorizontal"
                      className="w-5 h-5 text-slate-500"
                    />
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent tag="div">
                      <TabList className="block">
                        <Tab
                          fullWidth={false}
                          className="dropdown-item cursor-pointer"
                        >
                          New
                        </Tab>
                        <Tab
                          fullWidth={false}
                          className="dropdown-item cursor-pointer"
                        >
                          Last Week
                        </Tab>
                      </TabList>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <TabList className="nav-link-tabs w-auto ml-auto hidden sm:flex">
                  <Tab fullWidth={false} className="py-5 cursor-pointer">
                    New
                  </Tab>
                  <Tab fullWidth={false} className="py-5 cursor-pointer">
                    Last Week
                  </Tab>
                </TabList>
              </div>
              <div className="p-5">
                <TabPanels>
                  <TabPanel>
                    <div className="flex items-center">
                      <div className="border-l-2 border-primary dark:border-primary pl-4">
                        <a href="" className="font-medium">
                          Create New Campaign
                        </a>
                        <div className="text-slate-500">10:00 AM</div>
                      </div>
                      <div className="form-check form-switch ml-auto">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </div>
                    <div className="flex items-center mt-5">
                      <div className="border-l-2 border-primary dark:border-primary pl-4">
                        <a href="" className="font-medium">
                          Meeting With Client
                        </a>
                        <div className="text-slate-500">02:00 PM</div>
                      </div>
                      <div className="form-check form-switch ml-auto">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </div>
                    <div className="flex items-center mt-5">
                      <div className="border-l-2 border-primary dark:border-primary pl-4">
                        <a href="" className="font-medium">
                          Create New Repository
                        </a>
                        <div className="text-slate-500">04:00 PM</div>
                      </div>
                      <div className="form-check form-switch ml-auto">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </div>
                    <div className="flex items-center mt-5">
                      <div className="border-l-2 border-primary dark:border-primary pl-4">
                        <a href="" className="font-medium">
                          Meeting With Client
                        </a>
                        <div className="text-slate-500">10:00 AM</div>
                      </div>
                      <div className="form-check form-switch ml-auto">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </div>
                    <div className="flex items-center mt-5">
                      <div className="border-l-2 border-primary dark:border-primary pl-4">
                        <a href="" className="font-medium">
                          Create New Repository
                        </a>
                        <div className="text-slate-500">11:00 PM</div>
                      </div>
                      <div className="form-check form-switch ml-auto">
                        <input className="form-check-input" type="checkbox" />
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </div>
            </TabGroup>
            {/* END: Latest Tasks */}
            {/* BEGIN: General Statistics */}
            <div className="intro-y box col-span-12 2xl:col-span-6">
              <div className="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                <h2 className="font-medium text-base mr-auto">
                  General Statistics
                </h2>
                <Dropdown className="ml-auto">
                  <DropdownToggle
                    tag="a"
                    className="w-5 h-5 block sm:hidden"
                    href="#"
                  >
                    <Lucide
                      icon="MoreHorizontal"
                      className="w-5 h-5 text-slate-500"
                    />
                  </DropdownToggle>
                  <DropdownToggle className="btn btn-outline-secondary font-normal hidden sm:flex">
                    Export{" "}
                    <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownHeader>Export Tools</DropdownHeader>
                      <DropdownDivider />
                      <DropdownItem>
                        <Lucide icon="Printer" className="w-4 h-4 mr-2" />
                        Print
                      </DropdownItem>
                      <DropdownItem>
                        <Lucide icon="ExternalLink" className="w-4 h-4 mr-2" />
                        Excel
                      </DropdownItem>
                      <DropdownItem>
                        <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                        CSV
                      </DropdownItem>
                      <DropdownItem>
                        <Lucide icon="Archive" className="w-4 h-4 mr-2" />
                        PDF
                      </DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="p-5">
                <div className="flex flex-col sm:flex-row items-center">
                  <div className="flex flex-wrap sm:flex-nowrap mr-auto">
                    <div className="flex items-center mr-5 mb-1 sm:mb-0">
                      <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                      <span>Author Sales</span>
                    </div>
                    <div className="flex items-center mr-5 mb-1 sm:mb-0">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>Product Profit</span>
                    </div>
                  </div>
                  <Dropdown className="mt-3 sm:mt-0 mr-auto sm:mr-0">
                    <DropdownToggle className="btn btn-outline-secondary font-normal">
                      Filter by Month
                      <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                    </DropdownToggle>
                    <DropdownMenu className="w-40">
                      <DropdownContent className="overflow-y-auto h-32">
                        <DropdownItem>January</DropdownItem>
                        <DropdownItem>February</DropdownItem>
                        <DropdownItem>March</DropdownItem>
                        <DropdownItem>June</DropdownItem>
                        <DropdownItem>July</DropdownItem>
                      </DropdownContent>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div className="report-chart mt-8">
                  <ReportLineChart height={212} />
                </div>
              </div>
            </div>
            {/* END: General Statistics */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
