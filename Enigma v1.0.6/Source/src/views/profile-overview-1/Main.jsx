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
} from "@/base-components";
import StackedBarChart1 from "@/components/stacked-bar-chart-1/Main";
import SimpleLineChart from "@/components/simple-line-chart/Main";
import SimpleLineChart1 from "@/components/simple-line-chart-1/Main";
import SimpleLineChart2 from "@/components/simple-line-chart-2/Main";
import { faker as $f } from "@/utils";

function Main() {
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
                <div className="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-primary rounded-full p-2">
                  <Lucide icon="Camera" className="w-4 h-4 text-white" />
                </div>
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
            <div className="mt-6 lg:mt-0 flex-1 px-5 border-t lg:border-0 border-slate-200/60 dark:border-darkmode-400 pt-5 lg:pt-0">
              <div className="font-medium text-center lg:text-left lg:mt-5">
                Sales Growth
              </div>
              <div className="flex items-center justify-center lg:justify-start mt-2">
                <div className="mr-2 w-20 flex">
                  USP:{" "}
                  <span className="ml-3 font-medium text-success">+23%</span>
                </div>
                <div className="w-3/4">
                  <SimpleLineChart1 height={55} className="-mr-5" />
                </div>
              </div>
              <div className="flex items-center justify-center lg:justify-start">
                <div className="mr-2 w-20 flex">
                  STP: <span className="ml-3 font-medium text-danger">-2%</span>
                </div>
                <div className="w-3/4">
                  <SimpleLineChart2 height={55} className="-mr-5" />
                </div>
              </div>
            </div>
          </div>
          <TabList className="nav-link-tabs flex-col sm:flex-row justify-center lg:justify-start text-center">
            <Tab fullWidth={false} className="py-4 cursor-pointer">
              Dashboard
            </Tab>
            <Tab fullWidth={false} className="py-4 cursor-pointer">
              Account & Profile
            </Tab>
            <Tab fullWidth={false} className="py-4 cursor-pointer">
              Activities
            </Tab>
            <Tab fullWidth={false} className="py-4 cursor-pointer">
              Tasks
            </Tab>
          </TabList>
        </div>
        {/* END: Profile Info */}
        <TabPanels className="intro-y mt-5">
          <TabPanel>
            <div className="grid grid-cols-12 gap-6">
              {/* BEGIN: Top Categories */}
              <div className="intro-y box col-span-12 lg:col-span-6">
                <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Top Categories
                  </h2>
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
                          <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add
                          Category
                        </DropdownItem>
                        <DropdownItem>
                          <Lucide icon="Settings" className="w-4 h-4 mr-2" />
                          Settings
                        </DropdownItem>
                      </DropdownContent>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div className="p-5">
                  <div className="flex flex-col sm:flex-row">
                    <div className="mr-auto">
                      <a href="" className="font-medium">
                        Wordpress Template
                      </a>
                      <div className="text-slate-500 mt-1">
                        HTML, PHP, Mysql
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                        <SimpleLineChart height={30} />
                      </div>
                      <div className="text-center">
                        <div className="font-medium">6.5k</div>
                        <div className="bg-success/20 text-success rounded px-2 mt-1.5">
                          +150
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row mt-5">
                    <div className="mr-auto">
                      <a href="" className="font-medium">
                        Bootstrap HTML Template
                      </a>
                      <div className="text-slate-500 mt-1">
                        HTML, PHP, Mysql
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                        <SimpleLineChart height={30} />
                      </div>
                      <div className="text-center">
                        <div className="font-medium">2.5k</div>
                        <div className="bg-pending/10 text-pending rounded px-2 mt-1.5">
                          +150
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row mt-5">
                    <div className="mr-auto">
                      <a href="" className="font-medium">
                        Tailwind HTML Template
                      </a>
                      <div className="text-slate-500 mt-1">
                        HTML, PHP, Mysql
                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-32 -ml-2 sm:ml-0 mt-5 mr-auto sm:mr-5">
                        <SimpleLineChart height={30} />
                      </div>
                      <div className="text-center">
                        <div className="font-medium">3.4k</div>
                        <div className="bg-primary/10 text-primary rounded px-2 mt-1.5">
                          +150
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END: Top Categories */}
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
              {/* BEGIN: General Statistic */}
              <div className="intro-y box col-span-12">
                <div className="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    General Statistics
                  </h2>
                  <Dropdown className="ml-auto sm:hidden">
                    <DropdownToggle className="w-5 h-5 block" href="#">
                      <Lucide
                        icon="MoreHorizontal"
                        className="w-5 h-5 text-slate-500"
                      />
                    </DropdownToggle>
                    <DropdownMenu className="w-40">
                      <DropdownContent>
                        <DropdownItem>
                          <Lucide icon="File" className="w-4 h-4 mr-2" />{" "}
                          Download XML
                        </DropdownItem>
                      </DropdownContent>
                    </DropdownMenu>
                  </Dropdown>
                  <button className="btn btn-outline-secondary hidden sm:flex">
                    <Lucide icon="File" className="w-4 h-4 mr-2" /> Download XML
                  </button>
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-7 gap-6 p-5">
                  <div className="2xl:col-span-2">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="col-span-2 sm:col-span-1 2xl:col-span-2 box dark:bg-darkmode-500 p-5">
                        <div className="font-medium">Net Worth</div>
                        <div className="flex items-center mt-1 sm:mt-0">
                          <div className="mr-4 w-20 flex">
                            USP:
                            <span className="ml-3 font-medium text-success">
                              +23%
                            </span>
                          </div>
                          <div className="w-5/6 overflow-auto">
                            <SimpleLineChart height={51} />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 sm:col-span-1 2xl:col-span-2 box dark:bg-darkmode-500 p-5">
                        <div className="font-medium">Sales</div>
                        <div className="flex items-center mt-1 sm:mt-0">
                          <div className="mr-4 w-20 flex">
                            USP:
                            <span className="ml-3 font-medium text-danger">
                              -5%
                            </span>
                          </div>
                          <div className="w-5/6 overflow-auto">
                            <SimpleLineChart height={51} />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 sm:col-span-1 2xl:col-span-2 box dark:bg-darkmode-500 p-5">
                        <div className="font-medium">Profit</div>
                        <div className="flex items-center mt-1 sm:mt-0">
                          <div className="mr-4 w-20 flex">
                            USP:
                            <span className="ml-3 font-medium text-danger">
                              -10%
                            </span>
                          </div>
                          <div className="w-5/6 overflow-auto">
                            <SimpleLineChart height={51} />
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2 sm:col-span-1 2xl:col-span-2 box dark:bg-darkmode-500 p-5">
                        <div className="font-medium">Products</div>
                        <div className="flex items-center mt-1 sm:mt-0">
                          <div className="mr-4 w-20 flex">
                            USP:
                            <span className="ml-3 font-medium text-success">
                              +55%
                            </span>
                          </div>
                          <div className="w-5/6 overflow-auto">
                            <SimpleLineChart height={51} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="2xl:col-span-5 w-full">
                    <div className="flex justify-center mt-8">
                      <div className="flex items-center mr-5">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span>Product Profit</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-slate-300 rounded-full mr-3"></div>
                        <span>Author Sales</span>
                      </div>
                    </div>
                    <div className="mt-8">
                      <StackedBarChart1 height={420} />
                    </div>
                  </div>
                </div>
              </div>
              {/* END: General Statistic */}
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}

export default Main;
