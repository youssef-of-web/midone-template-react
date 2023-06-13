import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

function Main() {
  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-8">
        <div className="col-span-12 lg:col-span-3 2xl:col-span-2">
          <h2 className="intro-y text-lg font-medium mr-auto mt-2">
            File Manager
          </h2>
          {/* BEGIN: File Manager Menu */}
          <div className="intro-y box p-5 mt-6">
            <div className="mt-1">
              <a
                href=""
                className="flex items-center px-3 py-2 rounded-md bg-primary text-white font-medium"
              >
                <Lucide icon="Image" className="w-4 h-4 mr-2" /> Images
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <Lucide icon="Video" className="w-4 h-4 mr-2" /> Videos
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <Lucide icon="File" className="w-4 h-4 mr-2" /> Documents
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <Lucide icon="Users" className="w-4 h-4 mr-2" /> Shared
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Trash
              </a>
            </div>
            <div className="border-t border-slate-200 dark:border-darkmode-400 mt-4 pt-4">
              <a href="" className="flex items-center px-3 py-2 rounded-md">
                <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                Custom Work
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                Important Meetings
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                Work
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                Design
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <div className="w-2 h-2 bg-danger rounded-full mr-3"></div>
                Next Week
              </a>
              <a
                href=""
                className="flex items-center px-3 py-2 mt-2 rounded-md"
              >
                <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New Label
              </a>
            </div>
          </div>
          {/* END: File Manager Menu */}
        </div>
        <div className="col-span-12 lg:col-span-9 2xl:col-span-10">
          {/* BEGIN: File Manager Filter */}
          <div className="intro-y flex flex-col-reverse sm:flex-row items-center">
            <div className="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0">
              <Lucide
                icon="Search"
                className="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0 z-10 text-slate-500"
              />
              <input
                type="text"
                className="form-control w-full sm:w-64 box px-10"
                placeholder="Search files"
              />
              <Dropdown
                className="inbox-filter absolute inset-y-0 mr-3 right-0 flex items-center"
                placement="bottom-start"
              >
                <DropdownToggle
                  tag="a"
                  role="button"
                  className="w-4 h-4 block"
                  href="#"
                >
                  <Lucide
                    icon="ChevronDown"
                    className="w-4 h-4 cursor-pointer text-slate-500"
                  />
                </DropdownToggle>
                <DropdownMenu className="inbox-filter__dropdown-menu pt-2">
                  <DropdownContent tag="div">
                    <div className="grid grid-cols-12 gap-4 gap-y-3 p-3">
                      <div className="col-span-6">
                        <label
                          htmlFor="input-filter-1"
                          className="form-label text-xs"
                        >
                          File Name
                        </label>
                        <input
                          id="input-filter-1"
                          type="text"
                          className="form-control flex-1"
                          placeholder="Type the file name"
                        />
                      </div>
                      <div className="col-span-6">
                        <label
                          htmlFor="input-filter-2"
                          className="form-label text-xs"
                        >
                          Shared With
                        </label>
                        <input
                          id="input-filter-2"
                          type="text"
                          className="form-control flex-1"
                          placeholder="example@gmail.com"
                        />
                      </div>
                      <div className="col-span-6">
                        <label
                          htmlFor="input-filter-3"
                          className="form-label text-xs"
                        >
                          Created At
                        </label>
                        <input
                          id="input-filter-3"
                          type="text"
                          className="form-control flex-1"
                          placeholder="Important Meeting"
                        />
                      </div>
                      <div className="col-span-6">
                        <label
                          htmlFor="input-filter-4"
                          className="form-label text-xs"
                        >
                          Size
                        </label>
                        <select
                          id="input-filter-4"
                          className="form-select flex-1"
                        >
                          <option>10</option>
                          <option>25</option>
                          <option>35</option>
                          <option>50</option>
                        </select>
                      </div>
                      <div className="col-span-12 flex items-center mt-3">
                        <button className="btn btn-secondary w-32 ml-auto">
                          Create Filter
                        </button>
                        <button className="btn btn-primary w-32 ml-2">
                          Search
                        </button>
                      </div>
                    </div>
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="w-full sm:w-auto flex">
              <button className="btn btn-primary shadow-md mr-2">
                Upload New Files
              </button>
              <Dropdown>
                <DropdownToggle className="btn px-2 box">
                  <span className="w-5 h-5 flex items-center justify-center">
                    <Lucide icon="Plus" className="w-4 h-4" />
                  </span>
                </DropdownToggle>
                <DropdownMenu className="w-40">
                  <DropdownContent>
                    <DropdownItem>
                      <Lucide icon="File" className="w-4 h-4 mr-2" /> Share
                      Files
                    </DropdownItem>
                    <DropdownItem>
                      <Lucide icon="Settings" className="w-4 h-4 mr-2" />{" "}
                      Settings
                    </DropdownItem>
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          {/* END: File Manager Filter */}
          {/* BEGIN: Directory & Files */}
          <div className="intro-y grid grid-cols-12 gap-3 sm:gap-6 mt-5">
            {$f().map((faker, fakerKey) => (
              <div
                key={fakerKey}
                className="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2"
              >
                <div className="file box rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in">
                  <div className="absolute left-0 top-0 mt-3 ml-3">
                    <input
                      className="form-check-input border border-slate-500"
                      type="checkbox"
                      checked={faker.trueFalse[0]}
                      onChange={() => {}}
                    />
                  </div>
                  {(() => {
                    if (faker.files[0].type == "Empty Folder")
                      return (
                        <a
                          href=""
                          className="w-3/5 file__icon file__icon--empty-directory mx-auto"
                        ></a>
                      );
                    else if (faker.files[0].type == "Folder")
                      return (
                        <a
                          href=""
                          className="w-3/5 file__icon file__icon--directory mx-auto"
                        ></a>
                      );
                    else if (faker.files[0].type == "Image")
                      return (
                        <a
                          href=""
                          className="w-3/5 file__icon file__icon--image mx-auto"
                        >
                          <div className="file__icon--image__preview image-fit">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              src={$_.toLower(faker.files[0]["fileName"])}
                            />
                          </div>
                        </a>
                      );
                    else
                      return (
                        <a
                          href=""
                          className="w-3/5 file__icon file__icon--file mx-auto"
                        >
                          <div className="file__icon__file-name">
                            {faker.files[0].type}
                          </div>
                        </a>
                      );
                  })()}
                  <a
                    href=""
                    className="block font-medium mt-4 text-center truncate"
                  >
                    {
                      faker.files[0].fileName.split("/")[
                        faker.files[0].fileName.split("/").length - 1
                      ]
                    }
                  </a>
                  <div className="text-slate-500 text-xs text-center mt-0.5">
                    {faker.files[0].size}
                  </div>
                  <Dropdown className="absolute top-0 right-0 mr-2 mt-3 ml-auto">
                    <DropdownToggle tag="a" className="w-5 h-5 block" href="#">
                      <Lucide
                        icon="MoreVertical"
                        className="w-5 h-5 text-slate-500"
                      />
                    </DropdownToggle>
                    <DropdownMenu className="w-40">
                      <DropdownContent>
                        <DropdownItem>
                          <Lucide icon="Users" className="w-4 h-4 mr-2" /> Share
                          File
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
            ))}
          </div>
          {/* END: Directory & Files */}
          {/* BEGIN: Pagination */}
          <div className="intro-y flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-6">
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
          {/* END: Pagination */}
        </div>
      </div>
    </>
  );
}

export default Main;
