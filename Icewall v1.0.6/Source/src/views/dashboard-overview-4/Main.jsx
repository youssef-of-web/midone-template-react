import {
  Lucide,
  Tippy,
  TinySlider,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";
import ReportDonutChart from "@/components/report-donut-chart/Main";
import ReportMap from "@/components/report-map/Main";
import { useRef } from "react";

function Main() {
  const importantNotesRef = useRef();
  const prevImportantNotes = () => {
    importantNotesRef.current.tns.goTo("prev");
  };
  const nextImportantNotes = () => {
    importantNotesRef.current.tns.goTo("next");
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 2xl:col-span-9">
          <div className="grid grid-cols-12 gap-6">
            {/* BEGIN: General Report */}
            <div className="col-span-12 xl:col-span-9 mt-8">
              <div className="intro-y flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  General Report
                </h2>
                <a href="" className="ml-auto text-primary truncate">
                  Show More
                </a>
              </div>
              <div className="report-box-2 intro-y mt-5">
                <div className="box grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-4 px-8 py-12 flex flex-col justify-center">
                    <Lucide
                      icon="PieChart"
                      className="w-10 h-10 text-pending"
                    />
                    <div className="justify-start flex items-center text-slate-600 dark:text-slate-300 mt-12">
                      My Total Assets
                      <Lucide
                        icon="AlertCircle"
                        className="tooltip w-4 h-4 ml-1.5"
                        title="Total value of your sales: $158.409.416"
                      />
                    </div>
                    <div className="flex items-center justify-start mt-4">
                      <div className="relative text-2xl font-medium pl-3 ml-0.5">
                        <span className="absolute text-xl font-medium top-0 left-0 -ml-0.5">
                          $
                        </span>
                        1,413,102.02
                      </div>
                      <a className="text-slate-500 ml-4" href="">
                        <Lucide icon="RefreshCcw" className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="mt-4 text-slate-500 text-xs">
                      Last updated 1 hour ago
                    </div>
                    <button className="btn btn-outline-secondary relative justify-start rounded-full mt-12">
                      Download Reports
                      <span className="w-8 h-8 absolute flex justify-center items-center bg-primary text-white rounded-full right-0 top-0 bottom-0 my-auto ml-auto mr-0.5">
                        <Lucide icon="ArrowRight" className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                  <div className="col-span-12 lg:col-span-8 p-8 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-darkmode-300 border-dashed">
                    <TabGroup>
                      <TabList
                        className="nav-pills w-60 border border-slate-300 dark:border-darkmode-300 border-dashed rounded-md mx-auto p-1 mb-8"
                        role="tablist"
                      >
                        <Tab className="w-full py-1.5 px-2" tag="button">
                          Weekly
                        </Tab>
                        <Tab className="w-full py-1.5 px-2" tag="button">
                          Monthly
                        </Tab>
                      </TabList>
                      <TabPanels className="px-5 pb-5">
                        <TabPanel className="grid grid-cols-12 gap-y-8 gap-x-10">
                          <div className="col-span-6 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">Unpaid Loan</div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">4.501</div>
                              <div
                                className="text-danger flex text-xs font-medium tooltip cursor-pointer ml-2"
                                title="2% Lower than last month"
                              >
                                2%
                                <Lucide
                                  icon="ChevronDown"
                                  className="w-4 h-4 ml-0.5"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">Active Partner</div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">2</div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">
                              Paid Installment
                            </div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">$72.000</div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">Disbursement</div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">$54.000</div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">
                              Success Payment
                            </div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">2.500</div>
                              <div
                                className="text-success flex text-xs font-medium tooltip cursor-pointer ml-2"
                                title="52% Higher than last month"
                              >
                                52%
                                <Lucide
                                  icon="ChevronUp"
                                  className="w-4 h-4 ml-0.5"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">Unpaid Loan</div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">$72.000</div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">
                              Posted Campaign
                            </div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">4.501</div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">Social Media</div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">2</div>
                            </div>
                          </div>
                          <div className="col-span-12 sm:col-span-6 md:col-span-4">
                            <div className="text-slate-500">Net Margin</div>
                            <div className="mt-1.5 flex items-center">
                              <div className="text-base">$72.000</div>
                              <div
                                className="text-success flex text-xs font-medium tooltip cursor-pointer ml-2"
                                title="49% Higher than last month"
                              >
                                49%
                                <Lucide
                                  icon="ChevronUp"
                                  className="w-4 h-4 ml-0.5"
                                />
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                      </TabPanels>
                    </TabGroup>
                  </div>
                </div>
              </div>
            </div>
            {/* END: General Report */}
            {/* BEGIN: Sales Report */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 row-start-4 lg:row-start-3 xl:row-start-auto mt-6 xl:mt-8">
              <div className="intro-y flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Sales Report
                </h2>
                <a href="" className="ml-auto text-primary truncate">
                  Show More
                </a>
              </div>
              <div className="report-box-2 before:hidden xl:before:block intro-y mt-5">
                <div className="box p-5">
                  <div className="mt-3">
                    <ReportDonutChart height={196} />
                  </div>
                  <div className="w-52 sm:w-auto mx-auto mt-8">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="truncate">17 - 30 Years old</span>
                      <span className="font-medium ml-auto">62%</span>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                      <span className="truncate">31 - 50 Years old</span>
                      <span className="font-medium ml-auto">33%</span>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                      <span className="truncate">&gt;= 50 Years old</span>
                      <span className="font-medium ml-auto">10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Sales Report */}
            {/* BEGIN: Official Store */}
            <div className="col-span-12 xl:col-span-8 mt-6">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Official Store
                </h2>
                <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                  <Lucide
                    icon="MapPin"
                    className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                  />
                  <input
                    type="text"
                    className="form-control sm:w-56 box pl-10"
                    placeholder="Filter by city"
                  />
                </div>
              </div>
              <div className="intro-y box p-5 mt-12 sm:mt-5">
                <div>
                  250 Official stores in 21 countries, click the marker to see
                  location details.
                </div>
                <ReportMap className="report-maps mt-5 bg-slate-200 rounded-md" />
              </div>
            </div>
            {/* END: Official Store */}
            {/* BEGIN: Weekly Best Sellers */}
            <div className="col-span-12 lg:col-span-8 xl:col-span-4 mt-6">
              <div className="intro-y flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Weekly Best Sellers
                </h2>
              </div>
              <div className="mt-5">
                {$_.take($f(), 4).map((faker, fakerKey) => (
                  <div key={fakerKey} className="intro-y">
                    <div className="box px-4 py-4 mb-3 flex items-center zoom-in">
                      <div className="w-10 h-10 flex-none image-fit rounded-md overflow-hidden">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          src={faker.photos[0]}
                        />
                      </div>
                      <div className="ml-4 mr-auto">
                        <div className="font-medium">{faker.users[0].name}</div>
                        <div className="text-slate-500 text-xs mt-0.5">
                          {faker.dates[0]}
                        </div>
                      </div>
                      <div className="py-1 px-2 rounded-full text-xs bg-success text-white cursor-pointer font-medium">
                        137 Sales
                      </div>
                    </div>
                  </div>
                ))}
                <a
                  href=""
                  className="intro-y w-full block text-center rounded-md py-4 border border-dotted border-slate-400 dark:border-darkmode-300 text-slate-500"
                >
                  View More
                </a>
              </div>
            </div>
            {/* END: Weekly Best Sellers */}
            {/* BEGIN: Visitors */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 mt-6">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">Visitors</h2>
                <select className="sm:ml-auto mt-3 sm:mt-0 sm:w-auto form-select box">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="custom-date">Custom Date</option>
                </select>
              </div>
              <div className="intro-y box p-5 mt-12 sm:mt-5">
                <div className="flex text-slate-500 border-b border-slate-200 dark:border-darkmode-300 border-dashed pb-3 mb-3">
                  <div>Parameters</div>
                  <div className="ml-auto">Report Values</div>
                </div>
                <div className="flex items-center mb-5">
                  <div className="flex items-center">
                    <div>Site Visits</div>
                    <div
                      className="text-danger flex text-xs font-medium tooltip cursor-pointer ml-2"
                      title="49% Higher than last month"
                    >
                      -2%{" "}
                      <Lucide icon="ChevronDown" className="w-4 h-4 ml-0.5" />
                    </div>
                  </div>
                  <div className="ml-auto">4.500</div>
                </div>
                <div className="flex items-center mb-5">
                  <div className="flex items-center">
                    <div>Unique Visitors</div>
                  </div>
                  <div className="ml-auto">21</div>
                </div>
                <div className="flex items-center mb-5">
                  <div className="flex items-center">
                    <div>Page Views</div>
                    <div
                      className="text-success flex text-xs font-medium tooltip cursor-pointer ml-2"
                      title="49% Higher than last month"
                    >
                      5% <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                    </div>
                  </div>
                  <div className="ml-auto">500</div>
                </div>
                <div className="flex items-center mb-5">
                  <div className="flex items-center">
                    <div>Bounce Rate</div>
                  </div>
                  <div className="ml-auto">3.420</div>
                </div>
                <div className="flex items-center mb-5">
                  <div className="flex items-center">
                    <div>% New Visits</div>
                    <div
                      className="text-danger flex text-xs font-medium tooltip cursor-pointer ml-2"
                      title="49% Higher than last month"
                    >
                      -9%{" "}
                      <Lucide icon="ChevronDown" className="w-4 h-4 ml-0.5" />
                    </div>
                  </div>
                  <div className="ml-auto">32%</div>
                </div>
                <div className="flex items-center mb-5">
                  <div className="flex items-center">
                    <div>Average Tim On Site</div>
                  </div>
                  <div className="ml-auto">1.5M</div>
                </div>
                <button className="btn btn-outline-secondary w-full border-slate-300 dark:border-darkmode-300 border-dashed relative justify-start mb-2">
                  <span className="truncate mr-5">View Full Report</span>
                  <span className="w-8 h-8 absolute flex justify-center items-center right-0 top-0 bottom-0 my-auto ml-auto mr-0.5">
                    <Lucide icon="ArrowRight" className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
            {/* END: Visitors */}
            {/* BEGIN: Most Viewed Pages */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 mt-6">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Most Viewed Pages
                </h2>
                <select className="sm:ml-auto mt-3 sm:mt-0 sm:w-auto form-select box">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="custom-date">Custom Date</option>
                </select>
              </div>
              <div className="intro-y box p-5 mt-12 sm:mt-5">
                <div className="flex text-slate-500 border-b border-slate-200 dark:border-darkmode-300 border-dashed pb-3 mb-3">
                  <div>Page Names</div>
                  <div className="ml-auto">Page Views</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>/letz-lara…review/2653</div>
                  <div className="ml-auto">472</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>/midone…review/1674</div>
                  <div className="ml-auto">294</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>/profile…review/46789</div>
                  <div className="ml-auto">500</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>/profile…review/24357</div>
                  <div className="ml-auto">3.420</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>/letz-lara…review/2653</div>
                  <div className="ml-auto">83</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>/icewall…review/1674</div>
                  <div className="ml-auto">21</div>
                </div>
                <button className="btn btn-outline-secondary w-full border-slate-300 dark:border-darkmode-300 border-dashed relative justify-start mb-2">
                  <span className="truncate mr-5">View Full Report</span>
                  <span className="w-8 h-8 absolute flex justify-center items-center right-0 top-0 bottom-0 my-auto ml-auto mr-0.5">
                    <Lucide icon="ArrowRight" className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
            {/* END: Most Viewed Pages */}
            {/* BEGIN: Top Search Items */}
            <div className="col-span-12 md:col-span-6 lg:col-span-4 mt-6">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Top Search Items
                </h2>
                <select className="sm:ml-auto mt-3 sm:mt-0 sm:w-auto form-select box">
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                  <option value="custom-date">Custom Date</option>
                </select>
              </div>
              <div className="intro-y box p-5 mt-12 sm:mt-5">
                <div className="flex text-slate-500 border-b border-slate-200 dark:border-darkmode-300 border-dashed pb-3 mb-3">
                  <div>Keywords</div>
                  <div className="ml-auto">Searched</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>Laravel 8</div>
                  <div className="ml-auto">200</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>Eloquent</div>
                  <div className="ml-auto">50</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>CKEditor Source Build</div>
                  <div className="ml-auto">31</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>Midone Docs</div>
                  <div className="ml-auto">405</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>Vue 3 Release Date</div>
                  <div className="ml-auto">201</div>
                </div>
                <div className="flex items-center mb-5">
                  <div>Install Vite Vue</div>
                  <div className="ml-auto">42</div>
                </div>
                <button className="btn btn-outline-secondary w-full border-slate-300 dark:border-darkmode-300 border-dashed relative justify-start mb-2">
                  <span className="truncate mr-5">View Full Report</span>
                  <span className="w-8 h-8 absolute flex justify-center items-center right-0 top-0 bottom-0 my-auto ml-auto mr-0.5">
                    <Lucide icon="ArrowRight" className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </div>
            {/* END: Top Search Items */}
            {/* BEGIN: Weekly Top Products */}
            <div className="col-span-12 mt-6">
              <div className="intro-y block sm:flex items-center h-10">
                <h2 className="text-lg font-medium truncate mr-5">
                  Weekly Top Products
                </h2>
                <div className="flex items-center sm:ml-auto mt-3 sm:mt-0">
                  <button className="btn box flex items-center text-slate-600 dark:text-slate-300">
                    <Lucide
                      icon="FileText"
                      className="hidden sm:block w-4 h-4 mr-2"
                    />
                    Export to Excel
                  </button>
                  <button className="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300">
                    <Lucide
                      icon="FileText"
                      className="hidden sm:block w-4 h-4 mr-2"
                    />
                    Export to PDF
                  </button>
                </div>
              </div>
              <div className="intro-y overflow-auto lg:overflow-visible mt-8 sm:mt-0">
                <table className="table table-report sm:mt-2">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">IMAGES</th>
                      <th className="whitespace-nowrap">PRODUCT NAME</th>
                      <th className="text-center whitespace-nowrap">STOCK</th>
                      <th className="text-center whitespace-nowrap">STATUS</th>
                      <th className="text-center whitespace-nowrap">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {$_.take($f(), 4).map((faker, fakerKey) => (
                      <tr key={fakerKey} className="intro-x">
                        <td className="w-40">
                          <div className="flex">
                            <div className="w-10 h-10 image-fit zoom-in">
                              <Tippy
                                tag="img"
                                alt="Midone Tailwind HTML Admin Template"
                                className="rounded-full"
                                src={faker.images[0]}
                                content={`Uploaded at ${faker.dates[0]}`}
                              />
                            </div>
                            <div className="w-10 h-10 image-fit zoom-in -ml-5">
                              <Tippy
                                tag="img"
                                alt="Midone Tailwind HTML Admin Template"
                                className="rounded-full"
                                src={faker.images[1]}
                                content={`Uploaded at ${faker.dates[1]}`}
                              />
                            </div>
                            <div className="w-10 h-10 image-fit zoom-in -ml-5">
                              <Tippy
                                tag="img"
                                alt="Midone Tailwind HTML Admin Template"
                                className="rounded-full"
                                src={faker.images[2]}
                                content={`Uploaded at ${faker.dates[2]}`}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <a href="" className="font-medium whitespace-nowrap">
                            {faker.products[0].name}
                          </a>
                          <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                            {faker.products[0].category}
                          </div>
                        </td>
                        <td className="text-center">{faker.stocks[0]}</td>
                        <td className="w-40">
                          <div
                            className={classnames({
                              "flex items-center justify-center": true,
                              "text-success": faker.trueFalse[0],
                              "text-danger": !faker.trueFalse[0],
                            })}
                          >
                            <Lucide
                              icon="CheckSquare"
                              className="w-4 h-4 mr-2"
                            />
                            {faker.trueFalse[0] ? "Active" : "Inactive"}
                          </div>
                        </td>
                        <td className="table-report__action w-56">
                          <div className="flex justify-center items-center">
                            <a className="flex items-center mr-3" href="">
                              <Lucide
                                icon="CheckSquare"
                                className="w-4 h-4 mr-1"
                              />
                              Edit
                            </a>
                            <a
                              className="flex items-center text-danger"
                              href=""
                            >
                              <Lucide icon="Trash2" className="w-4 h-4 mr-1" />{" "}
                              Delete
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-3">
                <nav className="w-full sm:w-auto sm:mr-auto">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <Lucide icon="ChevronLeft" className="w-4 h-4" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <Lucide icon="ChevronRight" className="w-4 h-4" />
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <Lucide icon="ChevronsRight" className="w-4 h-4" />
                      </a>
                    </li>
                  </ul>
                </nav>
                <select className="w-20 form-select box mt-3 sm:mt-0">
                  <option>10</option>
                  <option>25</option>
                  <option>35</option>
                  <option>50</option>
                </select>
              </div>
            </div>
            {/* END: Weekly Top Products */}
          </div>
        </div>
        <div className="col-span-12 2xl:col-span-3">
          <div className="2xl:border-l -mb-10 pb-10">
            <div className="2xl:pl-6 grid grid-cols-12 gap-x-6 2xl:gap-x-0 gap-y-6">
              {/* BEGIN: Important Notes */}
              <div className="col-span-12 md:col-span-6 xl:col-span-12 mt-3 2xl:mt-8">
                <div className="intro-x flex items-center h-10">
                  <h2 className="text-lg font-medium truncate mr-auto">
                    Important Notes
                  </h2>
                  <button
                    data-carousel="important-notes"
                    data-target="prev"
                    className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"
                    onClick={prevImportantNotes}
                  >
                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                  </button>
                  <button
                    data-carousel="important-notes"
                    data-target="next"
                    className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"
                    onClick={nextImportantNotes}
                  >
                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-5 intro-x">
                  <div className="box zoom-in">
                    <TinySlider
                      getRef={(el) => {
                        importantNotesRef.current = el;
                      }}
                    >
                      <div className="p-5">
                        <div className="text-base font-medium truncate">
                          Lorem Ipsum is simply dummy text
                        </div>
                        <div className="text-slate-400 mt-1">20 Hours ago</div>
                        <div className="text-slate-500 text-justify mt-1">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </div>
                        <div className="font-medium flex mt-5">
                          <button
                            type="button"
                            className="btn btn-secondary py-1 px-2"
                          >
                            View Notes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="text-base font-medium truncate">
                          Lorem Ipsum is simply dummy text
                        </div>
                        <div className="text-slate-400 mt-1">20 Hours ago</div>
                        <div className="text-slate-500 text-justify mt-1">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </div>
                        <div className="font-medium flex mt-5">
                          <button
                            type="button"
                            className="btn btn-secondary py-1 px-2"
                          >
                            View Notes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="text-base font-medium truncate">
                          Lorem Ipsum is simply dummy text
                        </div>
                        <div className="text-slate-400 mt-1">20 Hours ago</div>
                        <div className="text-slate-500 text-justify mt-1">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </div>
                        <div className="font-medium flex mt-5">
                          <button
                            type="button"
                            className="btn btn-secondary py-1 px-2"
                          >
                            View Notes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary py-1 px-2 ml-auto ml-auto"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </TinySlider>
                  </div>
                </div>
              </div>
              {/* END: Important Notes */}
              {/* BEGIN: Recent Activities */}
              <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3">
                <div className="intro-x flex items-center h-10">
                  <h2 className="text-lg font-medium truncate mr-5">
                    Recent Activities
                  </h2>
                  <a href="" className="ml-auto text-primary truncate">
                    Show More
                  </a>
                </div>
                <div className="mt-5 relative before:block before:absolute before:w-px before:h-[85%] before:bg-slate-200 before:dark:bg-darkmode-400 before:ml-5 before:mt-5">
                  <div className="intro-x relative flex items-center mb-3">
                    <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                      <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          src={$f()[9].photos[0]}
                        />
                      </div>
                    </div>
                    <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                      <div className="flex items-center">
                        <div className="font-medium">
                          {$f()[9].users[0].name}
                        </div>
                        <div className="text-xs text-slate-500 ml-auto">
                          07:00 PM
                        </div>
                      </div>
                      <div className="text-slate-500 mt-1">
                        Has joined the team
                      </div>
                    </div>
                  </div>
                  <div className="intro-x relative flex items-center mb-3">
                    <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                      <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          src={$f()[8].photos[0]}
                        />
                      </div>
                    </div>
                    <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                      <div className="flex items-center">
                        <div className="font-medium">
                          {$f()[8].users[0].name}
                        </div>
                        <div className="text-xs text-slate-500 ml-auto">
                          07:00 PM
                        </div>
                      </div>
                      <div className="text-slate-500">
                        <div className="mt-1">Added 3 new photos</div>
                        <div className="flex mt-2">
                          <Tippy
                            tag="div"
                            className="w-8 h-8 image-fit mr-1 zoom-in"
                            content={$f()[0].products[0].name}
                          >
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              className="rounded-md border border-white"
                              src={$f()[8].images[0]}
                            />
                          </Tippy>
                          <Tippy
                            tag="div"
                            className="w-8 h-8 image-fit mr-1 zoom-in"
                            content={$f()[1].products[0].name}
                          >
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              className="rounded-md border border-white"
                              src={$f()[8].images[1]}
                            />
                          </Tippy>
                          <Tippy
                            tag="div"
                            className="w-8 h-8 image-fit mr-1 zoom-in"
                            content={$f()[2].products[0].name}
                          >
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              className="rounded-md border border-white"
                              src={$f()[8].images[2]}
                            />
                          </Tippy>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="intro-x text-slate-500 text-xs text-center my-4">
                    12 November
                  </div>
                  <div className="intro-x relative flex items-center mb-3">
                    <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                      <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          src={$f()[7].photos[0]}
                        />
                      </div>
                    </div>
                    <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                      <div className="flex items-center">
                        <div className="font-medium">
                          {$f()[7].users[0].name}
                        </div>
                        <div className="text-xs text-slate-500 ml-auto">
                          07:00 PM
                        </div>
                      </div>
                      <div className="text-slate-500 mt-1">
                        Has changed{" "}
                        <a className="text-primary" href="">
                          {$f()[7].products[0].name}
                        </a>{" "}
                        price and description
                      </div>
                    </div>
                  </div>
                  <div className="intro-x relative flex items-center mb-3">
                    <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                      <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                        <img
                          alt="Midone Tailwind HTML Admin Template"
                          src={$f()[6].photos[0]}
                        />
                      </div>
                    </div>
                    <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                      <div className="flex items-center">
                        <div className="font-medium">
                          {$f()[6].users[0].name}
                        </div>
                        <div className="text-xs text-slate-500 ml-auto">
                          07:00 PM
                        </div>
                      </div>
                      <div className="text-slate-500 mt-1">
                        Has changed{" "}
                        <a className="text-primary" href="">
                          {$f()[6].products[0].name}
                        </a>{" "}
                        description
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END: Recent Activities */}
              {/* BEGIN: Transactions */}
              <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 mt-3">
                <div className="intro-x flex items-center h-10">
                  <h2 className="text-lg font-medium truncate mr-5">
                    Transactions
                  </h2>
                </div>
                <div className="mt-5">
                  {$_.take($f(), 5).map((faker, fakerKey) => (
                    <div key={fakerKey} className="intro-x">
                      <div className="box px-5 py-3 mb-3 flex items-center zoom-in">
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={faker.photos[0]}
                          />
                        </div>
                        <div className="ml-4 mr-auto">
                          <div className="font-medium">
                            {faker.users[0].name}
                          </div>
                          <div className="text-slate-500 text-xs mt-0.5">
                            {faker.dates[0]}
                          </div>
                        </div>
                        <div
                          className={classnames({
                            "text-success": faker.trueFalse[0],
                            "text-danger": !faker.trueFalse[0],
                          })}
                        >
                          {faker.trueFalse[0] ? "+" : "-"}${faker.totals[0]}
                        </div>
                      </div>
                    </div>
                  ))}
                  <a
                    href=""
                    className="intro-x w-full block text-center rounded-md py-3 border border-dotted border-slate-400 dark:border-darkmode-300 text-slate-500"
                  >
                    View More
                  </a>
                </div>
              </div>
              {/* END: Transactions */}
              {/* BEGIN: Schedules */}
              <div className="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12 xl:col-start-1 xl:row-start-2 2xl:col-start-auto 2xl:row-start-auto mt-3">
                <div className="intro-x flex items-center h-10">
                  <h2 className="text-lg font-medium truncate mr-5">
                    Schedules
                  </h2>
                  <a
                    href=""
                    className="ml-auto text-primary truncate flex items-center"
                  >
                    <Lucide icon="Plus" className="w-4 h-4 mr-1" /> Add New
                    Schedules
                  </a>
                </div>
                <div className="mt-5">
                  <div className="intro-x box">
                    <div className="p-5">
                      <div className="flex">
                        <Lucide
                          icon="ChevronLeft"
                          className="w-5 h-5 text-slate-500"
                        />
                        <div className="font-medium text-base mx-auto">
                          April
                        </div>
                        <Lucide
                          icon="ChevronRight"
                          className="w-5 h-5 text-slate-500"
                        />
                      </div>
                      <div className="grid grid-cols-7 gap-4 mt-5 text-center">
                        <div className="font-medium">Su</div>
                        <div className="font-medium">Mo</div>
                        <div className="font-medium">Tu</div>
                        <div className="font-medium">We</div>
                        <div className="font-medium">Th</div>
                        <div className="font-medium">Fr</div>
                        <div className="font-medium">Sa</div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          29
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          30
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          31
                        </div>
                        <div className="py-0.5 rounded relative">1</div>
                        <div className="py-0.5 rounded relative">2</div>
                        <div className="py-0.5 rounded relative">3</div>
                        <div className="py-0.5 rounded relative">4</div>
                        <div className="py-0.5 rounded relative">5</div>
                        <div className="py-0.5 bg-success/20 dark:bg-success/30 rounded relative">
                          6
                        </div>
                        <div className="py-0.5 rounded relative">7</div>
                        <div className="py-0.5 bg-primary text-white rounded relative">
                          8
                        </div>
                        <div className="py-0.5 rounded relative">9</div>
                        <div className="py-0.5 rounded relative">10</div>
                        <div className="py-0.5 rounded relative">11</div>
                        <div className="py-0.5 rounded relative">12</div>
                        <div className="py-0.5 rounded relative">13</div>
                        <div className="py-0.5 rounded relative">14</div>
                        <div className="py-0.5 rounded relative">15</div>
                        <div className="py-0.5 rounded relative">16</div>
                        <div className="py-0.5 rounded relative">17</div>
                        <div className="py-0.5 rounded relative">18</div>
                        <div className="py-0.5 rounded relative">19</div>
                        <div className="py-0.5 rounded relative">20</div>
                        <div className="py-0.5 rounded relative">21</div>
                        <div className="py-0.5 rounded relative">22</div>
                        <div className="py-0.5 bg-pending/20 dark:bg-pending/30 rounded relative">
                          23
                        </div>
                        <div className="py-0.5 rounded relative">24</div>
                        <div className="py-0.5 rounded relative">25</div>
                        <div className="py-0.5 rounded relative">26</div>
                        <div className="py-0.5 bg-primary/10 dark:bg-primary/50 rounded relative">
                          27
                        </div>
                        <div className="py-0.5 rounded relative">28</div>
                        <div className="py-0.5 rounded relative">29</div>
                        <div className="py-0.5 rounded relative">30</div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          1
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          2
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          3
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          4
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          5
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          6
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          7
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          8
                        </div>
                        <div className="py-0.5 rounded relative text-slate-500">
                          9
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-slate-200/60 p-5">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                        <span className="truncate">UI/UX Workshop</span>
                        <span className="font-medium xl:ml-auto">23th</span>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="truncate">
                          VueJs Frontend Development
                        </span>
                        <span className="font-medium xl:ml-auto">10th</span>
                      </div>
                      <div className="flex items-center mt-4">
                        <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                        <span className="truncate">Laravel Rest API</span>
                        <span className="font-medium xl:ml-auto">31th</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END: Schedules */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
