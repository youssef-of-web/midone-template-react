import {
  Lucide,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Litepicker,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";
import { useState } from "react";

function Main() {
  const [date, setDate] = useState("");
  const [daterange, setDaterange] = useState("");
  const [datepickerModalPreview, setDatepickerModalPreview] = useState(false);

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Datepicker</h2>
      </div>
      <div className="intro-y grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Basic Datepicker */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Basic Date Picker
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
                    <Litepicker
                      value={date}
                      onChange={setDate}
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
                      className="form-control w-56 block mx-auto"
                    />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Litepicker
              value={date}
              onChange={setDate}
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
              className="form-control w-56 block mx-auto"
            />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Datepicker */}
          {/* BEGIN: Input Group */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Input Group</h2>
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
                    <div className="relative w-56 mx-auto">
                      <div className="absolute rounded-l w-10 h-full flex items-center justify-center bg-slate-100 border text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                        <Lucide icon="Calendar" className="w-4 h-4" />
                      </div>
                      <Litepicker
                        value={date}
                        onChange={setDate}
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
                        className="form-control pl-12"
                      />
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="relative w-56 mx-auto">
              <div className="absolute rounded-l w-10 h-full flex items-center justify-center bg-slate-100 border text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                <Lucide icon="Calendar" className="w-4 h-4" />
              </div>
              <Litepicker
                value={date}
                onChange={setDate}
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
                className="form-control pl-12"
              />
            </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Input Group */}
        </div>
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Daterange Picker */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Date Range Picker
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
                    <Litepicker
                      value={daterange}
                      onChange={setDaterange}
                      options={{
                        autoApply: false,
                        singleMode: false,
                        numberOfColumns: 2,
                        numberOfMonths: 2,
                        showWeekNumbers: true,
                        dropdowns: {
                          minYear: 1990,
                          maxYear: null,
                          months: true,
                          years: true,
                        },
                      }}
                      className="form-control w-56 block mx-auto"
                    />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Litepicker
              value={daterange}
              onChange={setDaterange}
              options={{
                autoApply: false,
                singleMode: false,
                numberOfColumns: 2,
                numberOfMonths: 2,
                showWeekNumbers: true,
                dropdowns: {
                  minYear: 1990,
                  maxYear: null,
                  months: true,
                  years: true,
                },
              }}
              className="form-control w-56 block mx-auto"
            />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Daterange Picker */}
          {/* BEGIN: Modal Datepicker */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Modal Date Picker
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
                    {/* BEGIN: Show Modal Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setDatepickerModalPreview(true);
                        }}
                        className="btn btn-primary"
                      >
                        Show Modal
                      </a>
                    </div>
                    {/* END: Show Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Modal
                      show={datepickerModalPreview}
                      onHidden={() => {
                        setDatepickerModalPreview(false);
                      }}
                    >
                      {/* BEGIN: Modal Header */}
                      <ModalHeader>
                        <h2 className="font-medium text-base mr-auto">
                          Filter by Date
                        </h2>
                        <button className="btn btn-outline-secondary hidden sm:flex">
                          <Lucide icon="File" className="w-4 h-4 mr-2" />{" "}
                          Download Docs
                        </button>
                        <Dropdown className="sm:hidden">
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
                                <Lucide icon="File" className="w-4 h-4 mr-2" />
                                Download Docs
                              </DropdownItem>
                            </DropdownContent>
                          </DropdownMenu>
                        </Dropdown>
                      </ModalHeader>
                      {/* END: Modal Header */}
                      {/* BEGIN: Modal Body */}
                      <ModalBody className="grid grid-cols-12 gap-4 gap-y-3">
                        <div className="col-span-12 sm:col-span-6">
                          <label
                            htmlFor="modal-datepicker-1"
                            className="form-label"
                          >
                            From
                          </label>
                          <Litepicker
                            id="modal-datepicker-1"
                            value={date}
                            onChange={setDate}
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
                        <div className="col-span-12 sm:col-span-6">
                          <label
                            htmlFor="modal-datepicker-2"
                            className="form-label"
                          >
                            To
                          </label>
                          <Litepicker
                            id="modal-datepicker-2"
                            value={date}
                            onChange={setDate}
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
                      </ModalBody>
                      {/* END: Modal Body */}
                      {/* BEGIN: Modal Footer */}
                      <ModalFooter className="text-right">
                        <button
                          type="button"
                          onClick={() => {
                            setDatepickerModalPreview(false);
                          }}
                          className="btn btn-outline-secondary w-20 mr-1"
                        >
                          Cancel
                        </button>
                        <button type="button" className="btn btn-primary w-20">
                          Submit
                        </button>
                      </ModalFooter>
                      {/* END: Modal Footer */}
                    </Modal>
                    {/* END: Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Show Modal Toggle */}
              <div className="text-center">
                <a
                  href="#"
                  onClick={() => {
                    setDatepickerModalPreview(true);
                  }}
                  className="btn btn-primary"
                >
                  Show Modal
                </a>
              </div>
              {/* END: Show Modal Toggle */}
              {/* BEGIN: Modal Content */}
              <Modal
                show={datepickerModalPreview}
                onHidden={() => {
                  setDatepickerModalPreview(false);
                }}
              >
                {/* BEGIN: Modal Header */}
                <ModalHeader>
                  <h2 className="font-medium text-base mr-auto">
                    Filter by Date
                  </h2>
                  <button className="btn btn-outline-secondary hidden sm:flex">
                    <Lucide icon="File" className="w-4 h-4 mr-2" />{" "}
                    Download Docs
                  </button>
                  <Dropdown className="sm:hidden">
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
                          <Lucide icon="File" className="w-4 h-4 mr-2" />
                          Download Docs
                        </DropdownItem>
                      </DropdownContent>
                    </DropdownMenu>
                  </Dropdown>
                </ModalHeader>
                {/* END: Modal Header */}
                {/* BEGIN: Modal Body */}
                <ModalBody className="grid grid-cols-12 gap-4 gap-y-3">
                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="modal-datepicker-1"
                      className="form-label"
                    >
                      From
                    </label>
                    <Litepicker
                      id="modal-datepicker-1"
                      value={date}
                      onChange={setDate}
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
                  <div className="col-span-12 sm:col-span-6">
                    <label
                      htmlFor="modal-datepicker-2"
                      className="form-label"
                    >
                      To
                    </label>
                    <Litepicker
                      id="modal-datepicker-2"
                      value={date}
                      onChange={setDate}
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
                </ModalBody>
                {/* END: Modal Body */}
                {/* BEGIN: Modal Footer */}
                <ModalFooter className="text-right">
                  <button
                    type="button"
                    onClick={() => {
                      setDatepickerModalPreview(false);
                    }}
                    className="btn btn-outline-secondary w-20 mr-1"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary w-20">
                    Submit
                  </button>
                </ModalFooter>
                {/* END: Modal Footer */}
              </Modal>
              {/* END: Modal Content */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Modal Datepicker */}
        </div>
      </div>
    </>
  );
}

export default Main;
