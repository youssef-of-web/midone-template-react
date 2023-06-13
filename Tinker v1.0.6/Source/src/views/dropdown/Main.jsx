import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  DropdownHeader,
  DropdownFooter,
  DropdownDivider,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";
import { useState } from "react";

function Main() {
  const [programmaticDropdown, setProgrammaticDropdown] = useState(false);

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Dropdown</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Basic Dropdown */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Basic Dropdown
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-1"
                    >
                      Show example code
                    </label>
                    <input
                      onClick={toggle}
                      className="form-check-input mr-0 ml-3"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="flex justify-center">
                      <Dropdown>
                        <DropdownToggle className="btn btn-primary">
                          Show Dropdown
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>New Dropdown</DropdownItem>
                            <DropdownItem>Delete Dropdown</DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Dropdown>
                <DropdownToggle className="btn btn-primary">
                  Show Dropdown
                </DropdownToggle>
                <DropdownMenu className="w-40">
                  <DropdownContent>
                    <DropdownItem>New Dropdown</DropdownItem>
                    <DropdownItem>Delete Dropdown</DropdownItem>
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Dropdown */}
          {/* BEGIN: Header & Footer Dropdown */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Header & Footer Dropdown
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-2"
                    >
                      Show example code
                    </label>
                    <input
                      onClick={toggle}
                      className="form-check-input mr-0 ml-3"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="flex justify-center">
                      <Dropdown>
                        <DropdownToggle className="btn btn-primary">
                          Show Dropdown
                        </DropdownToggle>
                        <DropdownMenu className="w-56">
                          <DropdownContent>
                            <DropdownHeader>Export Options</DropdownHeader>
                            <DropdownDivider />
                            <DropdownItem>
                              <Lucide
                                icon="Activity"
                                className="w-4 h-4 mr-2"
                              />
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
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Dropdown>
                <DropdownToggle className="btn btn-primary">
                  Show Dropdown
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
                      <div
                        className="text-xs text-white px-1 rounded-full bg-danger ml-auto"
                      >
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
                      <button type="button" className="btn btn-primary py-1 px-2">
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
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Header & Footer Dropdown */}
          {/* BEGIN: Icon Dropdown */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Icon Dropdown
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-3"
                    >
                      Show example code
                    </label>
                    <input
                      onClick={toggle}
                      className="form-check-input mr-0 ml-3"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="flex justify-center">
                      <Dropdown>
                        <DropdownToggle className="btn btn-primary">
                          Show Dropdown
                        </DropdownToggle>
                        <DropdownMenu className="w-48">
                          <DropdownContent>
                            <DropdownItem>
                              <Lucide icon="Edit2" className="w-4 h-4 mr-2" />{" "}
                              New Dropdown
                            </DropdownItem>
                            <DropdownItem>
                              <Lucide icon="Trash" className="w-4 h-4 mr-2" />{" "}
                              Delete Dropdown
                            </DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Dropdown>
                <DropdownToggle className="btn btn-primary">
                  Show Dropdown
                </DropdownToggle>
                <DropdownMenu className="w-48">
                  <DropdownContent>
                    <DropdownItem>
                      <Lucide icon="Edit2" className="w-4 h-4 mr-2" /> New Dropdown
                    </DropdownItem>
                    <DropdownItem>
                      <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete Dropdown
                    </DropdownItem>
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Icon Dropdown */}
          {/* BEGIN: Dropdown with close button */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Dropdown with close button
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-5"
                    >
                      Show example code
                    </label>
                    <input
                      onClick={toggle}
                      className="form-check-input mr-0 ml-3"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="text-center">
                      <Dropdown
                        className="inline-block"
                        placement="bottom-start"
                      >
                        {({ dismiss }) => (
                          <>
                            <DropdownToggle className="btn btn-primary">
                              Filter Dropdown
                              <Lucide
                                icon="ChevronDown"
                                className="w-4 h-4 ml-2"
                              />
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownContent tag="div">
                                <div className="p-2">
                                  <div>
                                    <div className="text-xs">From</div>
                                    <input
                                      type="text"
                                      className="form-control mt-2 flex-1"
                                      placeholder="example@gmail.com"
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <div className="text-xs">To</div>
                                    <input
                                      type="text"
                                      className="form-control mt-2 flex-1"
                                      placeholder="example@gmail.com"
                                    />
                                  </div>
                                  <div className="flex items-center mt-3">
                                    <button
                                      onClick={dismiss}
                                      className="btn btn-secondary w-32 ml-auto"
                                    >
                                      Close
                                    </button>
                                    <button className="btn btn-primary w-32 ml-2">
                                      Search
                                    </button>
                                  </div>
                                </div>
                              </DropdownContent>
                            </DropdownMenu>
                          </>
                        )}
                      </Dropdown>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
            <div className="text-center">
              <Dropdown className="inline-block" placement="bottom-start">
                {({ dismiss }) => (
                  <>
                    <DropdownToggle className="btn btn-primary">
                      Filter Dropdown
                      <Lucide icon="ChevronDown" className="w-4 h-4 ml-2" />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownContent tag="div">
                        <div className="p-2">
                          <div>
                            <div className="text-xs">From</div>
                            <input
                              type="text"
                              className="form-control mt-2 flex-1"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="mt-3">
                            <div className="text-xs">To</div>
                            <input
                              type="text"
                              className="form-control mt-2 flex-1"
                              placeholder="example@gmail.com"
                            />
                          </div>
                          <div className="flex items-center mt-3">
                            <button
                              onClick={dismiss}
                              className="btn btn-secondary w-32 ml-auto"
                            >
                              Close
                            </button>
                            <button className="btn btn-primary w-32 ml-2">
                              Search
                            </button>
                          </div>
                        </div>
                      </DropdownContent>
                    </DropdownMenu>
                  </>
                )}
              </Dropdown>
            </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Dropdown with close button */}
          {/* BEGIN: Scrolled Dropdown */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Scrolled Dropdown
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-6"
                    >
                      Show example code
                    </label>
                    <input
                      onClick={toggle}
                      className="form-check-input mr-0 ml-3"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="flex justify-center">
                      <Dropdown>
                        <DropdownToggle className="btn btn-primary">
                          Show Dropdown
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
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Dropdown>
                <DropdownToggle className="btn btn-primary">
                  Show Dropdown
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
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Scrolled Dropdown */}
          {/* BEGIN: Header & Icon Dropdown */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Header & Icon Dropdown
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-7"
                    >
                      Show example code
                    </label>
                    <input
                      onClick={toggle}
                      className="form-check-input mr-0 ml-3"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="flex justify-center">
                      <Dropdown>
                        <DropdownToggle className="btn btn-primary">
                          Show Dropdown
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
                              <Lucide
                                icon="ExternalLink"
                                className="w-4 h-4 mr-2"
                              />
                              Excel
                            </DropdownItem>
                            <DropdownItem>
                              <Lucide
                                icon="FileText"
                                className="w-4 h-4 mr-2"
                              />
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
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Dropdown>
                <DropdownToggle className="btn btn-primary">
                  Show Dropdown
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
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Header & Icon Dropdown */}
          {/* BEGIN: Dropdown Placement */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Dropdown Placement
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-8"
                    >
                      Show example code
                    </label>
                    <input
                      onClick={toggle}
                      className="form-check-input mr-0 ml-3"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="text-center">
                      <Dropdown className="inline-block" placement="top-start">
                        <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                          Top Start
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>New Dropdown</DropdownItem>
                            <DropdownItem>Delete Dropdown</DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown className="inline-block" placement="top">
                        <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                          Top
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>New Dropdown</DropdownItem>
                            <DropdownItem>Delete Dropdown</DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown className="inline-block" placement="top-end">
                        <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                          Top End
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>New Dropdown</DropdownItem>
                            <DropdownItem>Delete Dropdown</DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown
                        className="inline-block"
                        placement="right-start"
                      >
                        <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                          Right Start
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>New Dropdown</DropdownItem>
                            <DropdownItem>Delete Dropdown</DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown className="inline-block" placement="right">
                        <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                          Right
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>New Dropdown</DropdownItem>
                            <DropdownItem>Delete Dropdown</DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown className="inline-block" placement="right-end">
                        <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                          Right End
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>New Dropdown</DropdownItem>
                            <DropdownItem>Delete Dropdown</DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown className="inline-block" placement="bottom-end">
                        <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                          Bottom End
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>New Dropdown</DropdownItem>
                            <DropdownItem>Delete Dropdown</DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown className="inline-block" placement="bottom">
                        <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                          Bottom
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>New Dropdown</DropdownItem>
                            <DropdownItem>Delete Dropdown</DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown
                        className="inline-block"
                        placement="bottom-start"
                      >
                        <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                          Bottom Start
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>New Dropdown</DropdownItem>
                            <DropdownItem>Delete Dropdown</DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown className="inline-block" placement="left-start">
                        <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                          Left Start
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>New Dropdown</DropdownItem>
                            <DropdownItem>Delete Dropdown</DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown className="inline-block" placement="left">
                        <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                          Left
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>New Dropdown</DropdownItem>
                            <DropdownItem>Delete Dropdown</DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                      <Dropdown className="inline-block" placement="left-end">
                        <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                          Left End
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>New Dropdown</DropdownItem>
                            <DropdownItem>Delete Dropdown</DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="text-center">
                <Dropdown className="inline-block" placement="top-start">
                  <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                    Top Start
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>New Dropdown</DropdownItem>
                      <DropdownItem>Delete Dropdown</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="inline-block" placement="top">
                  <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                    Top
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>New Dropdown</DropdownItem>
                      <DropdownItem>Delete Dropdown</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="inline-block" placement="top-end">
                  <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                    Top End
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>New Dropdown</DropdownItem>
                      <DropdownItem>Delete Dropdown</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="inline-block" placement="right-start">
                  <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                    Right Start
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>New Dropdown</DropdownItem>
                      <DropdownItem>Delete Dropdown</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="inline-block" placement="right">
                  <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                    Right
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>New Dropdown</DropdownItem>
                      <DropdownItem>Delete Dropdown</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="inline-block" placement="right-end">
                  <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                    Right End
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>New Dropdown</DropdownItem>
                      <DropdownItem>Delete Dropdown</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="inline-block" placement="bottom-end">
                  <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                    Bottom End
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>New Dropdown</DropdownItem>
                      <DropdownItem>Delete Dropdown</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="inline-block" placement="bottom">
                  <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                    Bottom
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>New Dropdown</DropdownItem>
                      <DropdownItem>Delete Dropdown</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="inline-block" placement="bottom-start">
                  <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                    Bottom Start
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>New Dropdown</DropdownItem>
                      <DropdownItem>Delete Dropdown</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="inline-block" placement="left-start">
                  <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                    Left Start
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>New Dropdown</DropdownItem>
                      <DropdownItem>Delete Dropdown</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="inline-block" placement="left">
                  <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                    Left
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>New Dropdown</DropdownItem>
                      <DropdownItem>Delete Dropdown</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="inline-block" placement="left-end">
                  <DropdownToggle className="btn btn-primary w-32 mr-1 mb-2">
                    Left End
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>New Dropdown</DropdownItem>
                      <DropdownItem>Delete Dropdown</DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Dropdown Placement */}
          {/* BEGIN: Programmatically Show/Hide Dropdown */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Programmatically Show/Hide Dropdown
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-4"
                    >
                      Show example code
                    </label>
                    <input
                      onClick={toggle}
                      className="form-check-input mr-0 ml-3"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="text-center">
                      {/* BEGIN: Show Dropdown Toggle */}
                      <button
                        className="btn btn-primary w-40 mr-1 mb-2"
                        onClick={() => {
                          setProgrammaticDropdown(true);
                        }}
                      >
                        Show
                      </button>
                      {/* END: Show Dropdown Toggle */}
                      {/* BEGIN: Hide Dropdown Toggle */}
                      <button
                        className="btn btn-primary w-40 mr-1 mb-2"
                        onClick={() => {
                          setProgrammaticDropdown(false);
                        }}
                      >
                        Hide
                      </button>
                      {/* END: Hide Dropdown Toggle */}
                      {/* BEGIN: Toggle Dropdown Toggle */}
                      <button
                        className="btn btn-primary w-40 mr-1 mb-2"
                        onClick={() => {
                          setProgrammaticDropdown(!programmaticDropdown);
                        }}
                      >
                        Toggle
                      </button>
                      {/* END: Toggle Dropdown Toggle */}
                      {/* BEGIN: Dropdown Content */}
                      <Dropdown
                        show={programmaticDropdown}
                        onHidden={() => {
                          setProgrammaticDropdown(false);
                        }}
                        className="inline-block"
                      >
                        <DropdownToggle className="btn btn-primary w-40 mr-1 mb-2">
                          Example Dropdown
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            <DropdownItem>New Dropdown</DropdownItem>
                            <DropdownItem>Delete Dropdown</DropdownItem>
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                      {/* END: Dropdown Content */}
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Show Dropdown Toggle */}
              <button
                className="btn btn-primary w-40 mr-1 mb-2"
                onClick={() => {
                  setProgrammaticDropdown(true);
                }}
              >
                Show
              </button>
              {/* END: Show Dropdown Toggle */}
              {/* BEGIN: Hide Dropdown Toggle */}
              <button
                className="btn btn-primary w-40 mr-1 mb-2"
                onClick={() => {
                  setProgrammaticDropdown(false);
                }}
              >
                Hide
              </button>
              {/* END: Hide Dropdown Toggle */}
              {/* BEGIN: Toggle Dropdown Toggle */}
              <button
                className="btn btn-primary w-40 mr-1 mb-2"
                onClick={() => {
                  setProgrammaticDropdown(!programmaticDropdown);
                }}
              >
                Toggle
              </button>
              {/* END: Toggle Dropdown Toggle */}
              {/* BEGIN: Dropdown Content */}
              <Dropdown
                show={programmaticDropdown}
                onHidden={() => {
                  setProgrammaticDropdown(false);
                }}
                className="inline-block"
              >
                <DropdownToggle className="btn btn-primary w-40 mr-1 mb-2">
                  Example Dropdown
                </DropdownToggle>
                <DropdownMenu className="w-40">
                  <DropdownContent>
                    <DropdownItem>New Dropdown</DropdownItem>
                    <DropdownItem>Delete Dropdown</DropdownItem>
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown>
              {/* END: Dropdown Content */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Programmatically Show/Hide Dropdown */}
        </div>
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Component Reference */}
          <div className="intro-y box">
            <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">
                Component Reference
              </h2>
            </div>
            <div className="p-5">
              <div>
                Dropdowns are built using the{" "}
                <span className="text-red-500">`Dropdown`</span>,{" "}
                <span className="text-red-500">`DropdownToggle`</span>,{" "}
                <span className="text-red-500">`DropdownMenu`</span>,{" "}
                <span className="text-red-500">`DropdownContent`</span>,{" "}
                <span className="text-red-500">`DropdownItem`</span>,{" "}
                <span className="text-red-500">`DropdownHeader`</span>,{" "}
                <span className="text-red-500">`DropdownFooter`</span> and{" "}
                <span className="text-red-500">`DropdownDivider`</span>{" "}
                components.
              </div>
            </div>
          </div>
          {/* END: Component Reference */}
          {/* BEGIN: Component API */}
          <div className="intro-y box mt-5">
            <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">Component API</h2>
            </div>
            <div className="p-5">
              <div className="text-base font-medium">Dropdown</div>
              <div className="mt-2">The main Dropdown component.</div>
              <table className="table mt-5">
                <thead>
                  <tr>
                    <th className="whitespace-nowrap w-24">Prop</th>
                    <th className="whitespace-nowrap">Values</th>
                    <th className="whitespace-nowrap">Default</th>
                    <th className="whitespace-nowrap">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-top text-red-500">`show`</td>
                    <td className="align-top">`true`, `false`</td>
                    <td className="align-top">`false`</td>
                    <td className="align-top">
                      <div className="font-medium mb-1">`Boolean`</div>
                      Whether the Dropdown is open or not.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top text-red-500">`placement`</td>
                    <td className="align-top">
                      `top-start`, `top`, `top-end`, `right-start`, `right`,
                      `right-end`, `bottom-end`, `bottom`, `bottom-start`,
                      `left-start`, `left`, `left-end`,
                    </td>
                    <td className="align-top">-</td>
                    <td className="align-top">
                      <div className="font-medium mb-1">`String`</div>
                      Dropdown position when displayed.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top text-red-500">`getRef`</td>
                    <td className="align-top">-</td>
                    <td className="align-top">-</td>
                    <td className="align-top">
                      <div className="font-medium mb-1">`Function`</div>A ref to
                      the Dropdown element.
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table mt-5">
                <thead>
                  <tr>
                    <th className="whitespace-nowrap w-24">Event Prop</th>
                    <th className="whitespace-nowrap">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-top text-red-500">`onShow`</td>
                    <td className="align-top">
                      This event fires immediately when the
                      <span className="text-red-500">show</span> instance method
                      is called.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top text-red-500">`onShown`</td>
                    <td className="align-top">
                      This event is fired when the dropdown has been made
                      visible to the user (will wait for CSS transitions to
                      complete)
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top text-red-500">`onHide`</td>
                    <td className="align-top">
                      This event is fired immediately when the
                      <span className="text-red-500">hide</span> instance method
                      has been called.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top text-red-500">`onHidden`</td>
                    <td className="align-top">
                      This event is fired when the dropdown has finished being
                      hidden from the user (will wait for CSS transitions to
                      complete).
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table mt-5">
                <thead>
                  <tr>
                    <th className="whitespace-nowrap w-24">Render Prop</th>
                    <th className="whitespace-nowrap">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="align-top text-red-500">`dismiss`</td>
                    <td className="align-top">Manually hides a dropdown.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* END: Component API */}
        </div>
      </div>
    </>
  );
}

export default Main;
