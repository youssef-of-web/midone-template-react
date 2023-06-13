import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TinySlider,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useRef } from "react";

function Main() {
  const newProductsRef = useRef();
  const newAuthorsRef = useRef();

  const prevNewProducts = () => {
    newProductsRef.current.tns.goTo("prev");
  };
  const nextNewProducts = () => {
    newProductsRef.current.tns.goTo("next");
  };
  const prevNewAuthors = () => {
    newAuthorsRef.current.tns.goTo("prev");
  };
  const nextNewAuthors = () => {
    newAuthorsRef.current.tns.goTo("next");
  };

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Profile Layout</h2>
      </div>
      <TabGroup>
        {/* BEGIN: Profile Info */}
        <div className="intro-y box px-5 pt-5 mt-5">
          <div className="flex flex-col lg:flex-row border-b border-slate-200/60 dark:border-darkmode-400 pb-5 -mx-5">
            <div className="flex flex-1 px-5 items-center justify-center lg:justify-start">
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src={$f()[0].photos[0]}
                />
              </div>
              <div className="ml-5">
                <div className="w-24 sm:w-40 truncate sm:whitespace-normal font-medium text-lg">
                  {$f()[0].users[0].name}
                </div>
                <div className="text-slate-500">{$f()[0].jobs[0]}</div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 flex-1 px-5 border-l border-r border-slate-200/60 dark:border-darkmode-400 border-t lg:border-t-0 pt-5 lg:pt-0">
              <div className="font-medium text-center lg:text-left lg:mt-3">
                Contact Details
              </div>
              <div className="flex flex-col justify-center items-center lg:items-start mt-4">
                <div className="truncate sm:whitespace-normal flex items-center">
                  <Lucide icon="Mail" className="w-4 h-4 mr-2" />
                  {$f()[0].users[0].email}
                </div>
                <div className="truncate sm:whitespace-normal flex items-center mt-3">
                  <Lucide icon="Instagram" className="w-4 h-4 mr-2" /> Instagram
                  {$f()[0].users[0].name}
                </div>
                <div className="truncate sm:whitespace-normal flex items-center mt-3">
                  <Lucide icon="Twitter" className="w-4 h-4 mr-2" /> Twitter
                  {$f()[0].users[0].name}
                </div>
              </div>
            </div>
            <div className="mt-6 lg:mt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-5 lg:pt-0">
              <div className="text-center rounded-md w-20 py-3">
                <div className="font-medium text-primary text-xl">201</div>
                <div className="text-slate-500">Orders</div>
              </div>
              <div className="text-center rounded-md w-20 py-3">
                <div className="font-medium text-primary text-xl">1k</div>
                <div className="text-slate-500">Purchases</div>
              </div>
              <div className="text-center rounded-md w-20 py-3">
                <div className="font-medium text-primary text-xl">492</div>
                <div className="text-slate-500">Reviews</div>
              </div>
            </div>
          </div>
          <TabList className="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center">
            <Tab
              fullWidth={false}
              className="py-4 flex items-center cursor-pointer"
            >
              <Lucide icon="User" className="w-4 h-4 mr-2" /> Profile
            </Tab>
            <Tab
              fullWidth={false}
              className="py-4 flex items-center cursor-pointer"
            >
              <Lucide icon="Shield" className="w-4 h-4 mr-2" /> Account
            </Tab>
            <Tab
              fullWidth={false}
              className="py-4 flex items-center cursor-pointer"
            >
              <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Change Password
            </Tab>
            <Tab
              fullWidth={false}
              className="py-4 flex items-center cursor-pointer"
            >
              <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
            </Tab>
          </TabList>
        </div>
        {/* END: Profile Info */}
        <TabPanels className="mt-5">
          <TabPanel>
            <div className="grid grid-cols-12 gap-6">
              {/* BEGIN: Latest Uploads */}
              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Latest Uploads
                  </h2>
                  <Dropdown className="ml-auto sm:hidden">
                    <DropdownToggle tag="a" className="w-5 h-5 block" href="#">
                      <Lucide
                        icon="MoreHorizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </DropdownToggle>
                    <DropdownMenu className="w-40">
                      <DropdownContent>
                        <DropdownItem>All Files</DropdownItem>
                      </DropdownContent>
                    </DropdownMenu>
                  </Dropdown>
                  <button className="btn btn-outline-secondary hidden sm:flex">
                    All Files
                  </button>
                </div>
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="file">
                      <a
                        href=""
                        className="w-12 file__icon file__icon--directory"
                      ></a>
                    </div>
                    <div className="ml-4">
                      <a className="font-medium" href="">
                        Documentation
                      </a>
                      <div className="text-slate-500 text-xs mt-0.5">40 KB</div>
                    </div>
                    <Dropdown className="ml-auto">
                      <DropdownToggle
                        tag="a"
                        className="w-5 h-5 block"
                        href="#"
                      >
                        <Lucide
                          icon="MoreHorizontal"
                          className="w-5 h-5 text-slate-500"
                        />
                      </DropdownToggle>
                      <DropdownMenu className="w-40">
                        <DropdownContent>
                          <DropdownItem>
                            <Lucide icon="Users" className="w-4 h-4 mr-2" />{" "}
                            Share File
                          </DropdownItem>
                          <DropdownItem>
                            <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                            Delete
                          </DropdownItem>
                        </DropdownContent>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="flex items-center mt-5">
                    <div className="file">
                      <a href="" className="w-12 file__icon file__icon--file">
                        <div className="file__icon__file-name text-xs">MP3</div>
                      </a>
                    </div>
                    <div className="ml-4">
                      <a className="font-medium" href="">
                        Celine Dion - Ashes
                      </a>
                      <div className="text-slate-500 text-xs mt-0.5">40 KB</div>
                    </div>
                    <Dropdown className="ml-auto">
                      <DropdownToggle
                        tag="a"
                        className="w-5 h-5 block"
                        href="#"
                      >
                        <Lucide
                          icon="MoreHorizontal"
                          className="w-5 h-5 text-slate-500"
                        />
                      </DropdownToggle>
                      <DropdownMenu className="w-40">
                        <DropdownContent>
                          <DropdownItem>
                            <Lucide icon="Users" className="w-4 h-4 mr-2" />{" "}
                            Share File
                          </DropdownItem>
                          <DropdownItem>
                            <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                            Delete
                          </DropdownItem>
                        </DropdownContent>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                  <div className="flex items-center mt-5">
                    <div className="file">
                      <a
                        href=""
                        className="w-12 file__icon file__icon--empty-directory"
                      ></a>
                    </div>
                    <div className="ml-4">
                      <a className="font-medium" href="">
                        Resources
                      </a>
                      <div className="text-slate-500 text-xs mt-0.5">0 KB</div>
                    </div>
                    <Dropdown className="ml-auto">
                      <DropdownToggle
                        tag="a"
                        className="w-5 h-5 block"
                        href="#"
                      >
                        <Lucide
                          icon="MoreHorizontal"
                          className="w-5 h-5 text-slate-500"
                        />
                      </DropdownToggle>
                      <DropdownMenu className="w-40">
                        <DropdownContent>
                          <DropdownItem>
                            <Lucide icon="Users" className="w-4 h-4 mr-2" />{" "}
                            Share File
                          </DropdownItem>
                          <DropdownItem>
                            <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                            Delete
                          </DropdownItem>
                        </DropdownContent>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </div>
              {/* END: Latest Uploads */}
              {/* BEGIN: Work In Progress */}
              <TabGroup className="intro-y box col-span-12 lg:col-span-6">
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
              {/* BEGIN: Daily Sales */}
              <div className="intro-y box col-span-12 lg:col-span-6">
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
                          <Lucide icon="File" className="w-4 h-4 mr-2" />{" "}
                          Download Excel
                        </DropdownItem>
                      </DropdownContent>
                    </DropdownMenu>
                  </Dropdown>
                  <button className="btn btn-outline-secondary hidden sm:flex">
                    <Lucide icon="File" className="w-4 h-4 mr-2" /> Download
                    Excel
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
              {/* BEGIN: Latest Tasks */}
              <TabGroup className="intro-y box col-span-12 lg:col-span-6">
                <div className="flex items-center px-5 py-5 sm:py-0 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Latest Tasks
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
                    </TabPanel>
                  </TabPanels>
                </div>
              </TabGroup>
              {/* END: Latest Tasks */}
              {/* BEGIN: New Products */}
              <div className="intro-y box col-span-12">
                <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    New Products
                  </h2>
                  <button
                    className="tiny-slider-navigator btn btn-outline-secondary px-2 mr-2"
                    onClick={prevNewProducts}
                  >
                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                  </button>
                  <button
                    className="tiny-slider-navigator btn btn-outline-secondary px-2"
                    onClick={nextNewProducts}
                  >
                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                  </button>
                </div>
                <div id="new-products" className="tiny-slider py-5">
                  <TinySlider
                    getRef={(el) => {
                      newProductsRef.current = el;
                    }}
                  >
                    {$_.take($f(), 5).map((faker, fakerKey) => (
                      <div key={fakerKey} className="px-5">
                        <div className="flex flex-col lg:flex-row items-center pb-5">
                          <div className="flex flex-col sm:flex-row items-center pr-5 lg:border-r border-slate-200/60 dark:border-darkmode-400">
                            <div className="sm:mr-5">
                              <div className="w-20 h-20 image-fit">
                                <img
                                  alt="Midone Tailwind HTML Admin Template"
                                  className="rounded-full"
                                  src={faker.images[0]}
                                />
                              </div>
                            </div>
                            <div className="mr-auto text-center sm:text-left mt-3 sm:mt-0">
                              <a href="" className="font-medium text-lg">
                                {faker.products[0].name}
                              </a>
                              <div className="text-slate-500 mt-1 sm:mt-0">
                                {faker.news[0].shortContent}
                              </div>
                            </div>
                          </div>
                          <div className="w-full lg:w-auto mt-6 lg:mt-0 pt-4 lg:pt-0 flex-1 flex items-center justify-center px-5 border-t lg:border-t-0 border-slate-200/60 dark:border-darkmode-400">
                            <div className="text-center rounded-md w-20 py-3">
                              <div className="font-medium text-primary text-xl">
                                {faker.totals[0]}
                              </div>
                              <div className="text-slate-500">Orders</div>
                            </div>
                            <div className="text-center rounded-md w-20 py-3">
                              <div className="font-medium text-primary text-xl">
                                {faker.totals[1]}k
                              </div>
                              <div className="text-slate-500">Purchases</div>
                            </div>
                            <div className="text-center rounded-md w-20 py-3">
                              <div className="font-medium text-primary text-xl">
                                {faker.totals[0]}
                              </div>
                              <div className="text-slate-500">Reviews</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center border-t border-slate-200/60 dark:border-darkmode-400 pt-5">
                          <div className="w-full sm:w-auto flex justify-center sm:justify-start items-center border-b sm:border-b-0 border-slate-200/60 dark:border-darkmode-400 pb-5 sm:pb-0">
                            <div className="px-3 py-2 text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300 rounded font-medium mr-3">
                              {faker.dates[0]}
                            </div>
                            <div className="text-slate-500">
                              Date of Release
                            </div>
                          </div>
                          <div className="flex sm:ml-auto mt-5 sm:mt-0">
                            <button className="btn btn-secondary w-20 ml-auto">
                              Preview
                            </button>
                            <button className="btn btn-secondary w-20 ml-2">
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TinySlider>
                </div>
              </div>
              {/* END: New Products */}
              {/* BEGIN: New Authors */}
              <div className="intro-y box col-span-12">
                <div className="flex items-center px-5 py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">New Authors</h2>
                  <button
                    className="tiny-slider-navigator btn btn-outline-secondary px-2 mr-2"
                    onClick={prevNewAuthors}
                  >
                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                  </button>
                  <button
                    className="tiny-slider-navigator btn btn-outline-secondary px-2"
                    onClick={nextNewAuthors}
                  >
                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                  </button>
                </div>
                <div id="new-authors" className="tiny-slider py-5">
                  <TinySlider
                    getRef={(el) => {
                      newAuthorsRef.current = el;
                    }}
                  >
                    {$_.take($f(), 5).map((faker, fakerKey) => (
                      <div key={fakerKey} className="px-5">
                        <div className="flex flex-col lg:flex-row items-center pb-5">
                          <div className="flex-1 flex flex-col sm:flex-row items-center pr-5 lg:border-r border-slate-200/60 dark:border-darkmode-400">
                            <div className="sm:mr-5">
                              <div className="w-20 h-20 image-fit">
                                <img
                                  alt="Midone Tailwind HTML Admin Template"
                                  className="rounded-full"
                                  src={faker.photos[0]}
                                />
                              </div>
                            </div>
                            <div className="mr-auto text-center sm:text-left mt-3 sm:mt-0">
                              <a href="" className="font-medium text-lg">
                                {faker.users[0].name}
                              </a>
                              <div className="text-slate-500 mt-1 sm:mt-0">
                                {faker.jobs[0]}
                              </div>
                            </div>
                          </div>
                          <div className="w-full lg:w-auto mt-6 lg:mt-0 pt-4 lg:pt-0 flex-1 flex flex-col justify-center items-center lg:items-start px-5 border-t lg:border-t-0 border-slate-200/60 dark:border-darkmode-400">
                            <div className="flex items-center">
                              <a
                                href=""
                                className="w-8 h-8 rounded-full flex items-center justify-center border mr-2 text-slate-400"
                              >
                                <Lucide
                                  icon="Facebook"
                                  className="w-3 h-3 fill-current"
                                />
                              </a>
                              {faker.users[0].email}
                            </div>
                            <div className="flex items-center mt-2">
                              <a
                                href=""
                                className="w-8 h-8 rounded-full flex items-center justify-center border mr-2 text-slate-400"
                              >
                                <Lucide
                                  icon="Twitter"
                                  className="w-3 h-3 fill-current"
                                />
                              </a>
                              {faker.users[0].name}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center border-t border-slate-200/60 dark:border-darkmode-400 pt-5">
                          <div className="w-full sm:w-auto flex justify-center sm:justify-start items-center border-b sm:border-b-0 border-slate-200/60 dark:border-darkmode-400 pb-5 sm:pb-0">
                            <div className="px-3 py-2 text-primary bg-primary/10 dark:bg-darkmode-400 dark:text-slate-300 rounded font-medium mr-3">
                              {faker.dates[0]}
                            </div>
                            <div className="text-slate-500">Joined Date</div>
                          </div>
                          <div className="flex sm:ml-auto mt-5 sm:mt-0">
                            <button className="btn btn-secondary w-20 ml-auto">
                              Message
                            </button>
                            <button className="btn btn-secondary w-20 ml-2">
                              Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </TinySlider>
                </div>
              </div>
              {/* END: New Authors */}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}

export default Main;
