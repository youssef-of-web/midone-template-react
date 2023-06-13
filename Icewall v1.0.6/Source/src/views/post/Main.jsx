import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Litepicker,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TomSelect,
  ClassicEditor,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useState } from "react";

function Main() {
  const [categories, setCategories] = useState(["1", "2"]);
  const [tags, setTags] = useState(["1", "2"]);
  const [salesReportFilter, setSalesReportFilter] = useState();
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Add New Post</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          <Dropdown className="mr-2">
            <DropdownToggle className="btn box flex items-center">
              English <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
            </DropdownToggle>
            <DropdownMenu className="w-40">
              <DropdownContent>
                <DropdownItem>
                  <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                  <span className="truncate">English</span>
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                  <span className="truncate">Indonesian</span>
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
          <button
            type="button"
            className="btn box mr-2 flex items-center ml-auto sm:ml-0"
          >
            <Lucide icon="Eye" className="w-4 h-4 mr-2" /> Preview
          </button>
          <Dropdown>
            <DropdownToggle className="btn btn-primary shadow-md flex items-center">
              Save <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
            </DropdownToggle>
            <DropdownMenu className="w-40">
              <DropdownContent>
                <DropdownItem>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> As New
                  Post
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> As Draft
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
                  PDF
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
                  Word
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="pos intro-y grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Post Content */}
        <div className="intro-y col-span-12 lg:col-span-8">
          <input
            type="text"
            className="intro-y form-control py-3 px-4 box pr-10"
            placeholder="Title"
          />
          <TabGroup className="post intro-y overflow-hidden box mt-5">
            <TabList className="post__tabs nav-tabs flex-col sm:flex-row bg-slate-200 dark:bg-darkmode-800">
              <Tab
                fullWidth={false}
                className="w-full sm:w-40 py-0 px-0"
                tag="button"
              >
                <Tippy
                  content="Fill in the article content"
                  className="tooltip w-full flex items-center justify-center py-4"
                  aria-controls="content"
                  aria-selected="true"
                >
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Content
                </Tippy>
              </Tab>
              <Tab
                fullWidth={false}
                className="w-full sm:w-40 py-0 px-0"
                tag="button"
              >
                <Tippy
                  content="Adjust the meta title"
                  className="tooltip w-full flex items-center justify-center py-4"
                  aria-selected="false"
                >
                  <Lucide icon="Code" className="w-4 h-4 mr-2" /> Meta Title
                </Tippy>
              </Tab>
              <Tab
                fullWidth={false}
                className="w-full sm:w-40 py-0 px-0"
                tag="button"
              >
                <Tippy
                  content="Use search keywords"
                  className="tooltip w-full flex items-center justify-center py-4"
                  aria-selected="false"
                >
                  <Lucide icon="AlignLeft" className="w-4 h-4 mr-2" /> Keywords
                </Tippy>
              </Tab>
            </TabList>
            <TabPanels className="post__content">
              <TabPanel className="p-5">
                <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                  <div className="font-medium flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                    <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Text
                    Content
                  </div>
                  <div className="mt-5">
                    <ClassicEditor
                      value={editorData}
                      onChange={setEditorData}
                    />
                  </div>
                </div>
                <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5 mt-5">
                  <div className="font-medium flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                    <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" />{" "}
                    Caption & Images
                  </div>
                  <div className="mt-5">
                    <div>
                      <label htmlFor="post-form-7" className="form-label">
                        Caption
                      </label>
                      <input
                        id="post-form-7"
                        type="text"
                        className="form-control"
                        placeholder="Write caption"
                      />
                    </div>
                    <div className="mt-3">
                      <label className="form-label">Upload Image</label>
                      <div className="border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4">
                        <div className="flex flex-wrap px-4">
                          {$_.take($f(), 4).map((faker, fakerKey) => (
                            <div
                              key={fakerKey}
                              className="w-24 h-24 relative image-fit mb-5 mr-5 cursor-pointer zoom-in"
                            >
                              <img
                                className="rounded-md"
                                alt="Midone Tailwind HTML Admin Template"
                                src={faker.images[0]}
                              />
                              <Tippy
                                tag="div"
                                content="Remove this image?"
                                className="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"
                              >
                                <Lucide icon="X" className="w-4 h-4" />
                              </Tippy>
                            </div>
                          ))}
                        </div>
                        <div className="px-4 pb-4 flex items-center cursor-pointer relative">
                          <Lucide icon="Image" className="w-4 h-4 mr-2" />
                          <span className="text-primary mr-1">
                            Upload a file
                          </span>{" "}
                          or drag and drop
                          <input
                            type="file"
                            className="w-full h-full top-0 left-0 absolute opacity-0"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
        {/* END: Post Content */}
        {/* BEGIN: Post Info */}
        <div className="col-span-12 lg:col-span-4">
          <div className="intro-y box p-5">
            <div>
              <label className="form-label">Written By</label>
              <Dropdown>
                <DropdownToggle
                  tag="div"
                  className="btn w-full btn-outline-secondary dark:bg-darkmode-800 dark:border-darkmode-800 flex items-center justify-start"
                  role="button"
                >
                  <div className="w-6 h-6 image-fit mr-3">
                    <img
                      className="rounded"
                      alt="Midone Tailwind HTML Admin Template"
                      src={$f()[0].photos[0]}
                    />
                  </div>
                  <div className="truncate">{$f()[0].users[0].name}</div>
                  <Lucide icon="ChevronDown" className="w-4 h-4 ml-auto" />
                </DropdownToggle>
                <DropdownMenu className="w-full">
                  <DropdownContent>
                    {$_.take($f(), 5).map((faker, fakerKey) => (
                      <DropdownItem key={fakerKey}>
                        <div className="w-6 h-6 absolute image-fit mr-3">
                          <img
                            className="rounded"
                            alt="Midone Tailwind HTML Admin Template"
                            src={faker.photos[0]}
                          />
                        </div>
                        <div className="ml-8 pl-1">{faker.users[0].name}</div>
                      </DropdownItem>
                    ))}
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="mt-3">
              <label htmlFor="post-form-2" className="form-label">
                Post Date
              </label>
              <Litepicker
                id="post-form-2"
                value={salesReportFilter}
                onChange={setSalesReportFilter}
                options={{
                  autoApply: false,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }}
                className="form-control"
              />
            </div>
            <div className="mt-3">
              <label htmlFor="post-form-3" className="form-label">
                Categories
              </label>
              <TomSelect
                id="post-form-3"
                value={categories}
                onChange={setCategories}
                className="w-full"
                multiple
              >
                <option value="1">Horror</option>
                <option value="2">Sci-fi</option>
                <option value="3">Action</option>
                <option value="4">Drama</option>
                <option value="5">Comedy</option>
              </TomSelect>
            </div>
            <div className="mt-3">
              <label htmlFor="post-form-4" className="form-label">
                Tags
              </label>
              <TomSelect
                id="post-form-4"
                value={tags}
                onChange={setTags}
                className="w-full"
                multiple
              >
                <option value="1">Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TomSelect>
            </div>
            <div className="form-check form-switch flex flex-col items-start mt-3">
              <label
                htmlFor="post-form-5"
                className="form-check-label ml-0 mb-2"
              >
                Published
              </label>
              <input
                id="post-form-5"
                className="form-check-input"
                type="checkbox"
              />
            </div>
            <div className="form-check form-switch flex flex-col items-start mt-3">
              <label
                htmlFor="post-form-6"
                className="form-check-label ml-0 mb-2"
              >
                Show Author Name
              </label>
              <input
                id="post-form-6"
                className="form-check-input"
                type="checkbox"
              />
            </div>
          </div>
        </div>
        {/* END: Post Info */}
      </div>
    </>
  );
}

export default Main;
