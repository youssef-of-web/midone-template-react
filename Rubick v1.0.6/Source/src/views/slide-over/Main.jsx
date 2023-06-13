import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";
import { useState } from "react";

function Main() {
  const [basicSlideOverPreview, setBasicSlideOverPreview] = useState(false);
  const [smallSlideOverSizePreview, setSmallSlideOverSizePreview] =
    useState(false);
  const [mediumSlideOverSizePreview, setMediumSlideOverSizePreview] =
    useState(false);
  const [largeSlideOverSizePreview, setLargeSlideOverSizePreview] =
    useState(false);
  const [superlargeSlideOverSizePreview, setSuperlargeSlideOverSizePreview] =
    useState(false);
  const [programmaticallySlideOver, setProgrammaticallySlideOver] =
    useState(false);
  const [buttonSlideOverPreview, setButtonSlideOverPreview] = useState(false);
  const [overlappingSlideOverPreview, setOverlappingSlideOverPreview] =
    useState(false);
  const [nextOverlappingSlideOverPreview, setNextOverlappingSlideOverPreview] =
    useState(false);
  const [headerFooterSlideOverPreview, setHeaderFooterSlideOverPreview] =
    useState(false);

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Slide Over</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Blank Slide Over */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Blank Slide Over
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
                <div id="blank-slide-over" className="p-5">
                  <Preview>
                    {/* BEGIN: Slide Over Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setBasicSlideOverPreview(true);
                        }}
                        className="btn btn-primary"
                      >
                        Show Slide Over
                      </a>
                    </div>
                    {/* END: Slide Over Toggle */}
                    {/* BEGIN: Slide Over Content */}
                    <Modal
                      slideOver={true}
                      show={basicSlideOverPreview}
                      onHidden={() => {
                        setBasicSlideOverPreview(false);
                      }}
                    >
                      <ModalHeader className="p-5">
                        <h2 className="font-medium text-base mr-auto">
                          Blank Slide Over
                        </h2>
                      </ModalHeader>
                      <ModalBody>
                        {" "}
                        This is totally awesome blank slide over!{" "}
                      </ModalBody>
                    </Modal>
                    {/* END: Slide Over Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Slide Over Toggle */}
              <div className="text-center">
                <a
                  href="#"
                  onClick={() => {
                    setBasicSlideOverPreview(true);
                  }}
                  className="btn btn-primary"
                >
                  Show Slide Over
                </a>
              </div>
              {/* END: Slide Over Toggle */}
              {/* BEGIN: Slide Over Content */}
              <Modal
                slideOver={true}
                show={basicSlideOverPreview}
                onHidden={() => {
                  setBasicSlideOverPreview(false);
                }}
              >
                <ModalHeader className="p-5">
                  <h2 className="font-medium text-base mr-auto">
                    Blank Slide Over
                  </h2>
                </ModalHeader>
                <ModalBody>
                  {" "}
                  This is totally awesome blank slide over!{" "}
                </ModalBody>
              </Modal>
              {/* END: Slide Over Content */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Blank Slide Over */}
          {/* BEGIN: Slide Over Size */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Slide Over Size
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
                <div id="slide-over-size" className="p-5">
                  <Preview>
                    <div className="text-center">
                      {/* BEGIN: Small Slide Over Toggle */}
                      <a
                        href="#"
                        onClick={() => {
                          setSmallSlideOverSizePreview(true);
                        }}
                        className="btn btn-primary mr-1 mb-2"
                      >
                        Show Small Slide Over
                      </a>
                      {/* END: Small Slide Over Toggle */}
                      {/* BEGIN: Medium Slide Over Toggle */}
                      <a
                        href="#"
                        onClick={() => {
                          setMediumSlideOverSizePreview(true);
                        }}
                        className="btn btn-primary mr-1 mb-2"
                      >
                        Show Medium Slide Over
                      </a>
                      {/* END: Medium Slide Over Toggle */}
                      {/* BEGIN: Large Slide Over Toggle */}
                      <a
                        href="#"
                        onClick={() => {
                          setLargeSlideOverSizePreview(true);
                        }}
                        className="btn btn-primary mr-1 mb-2"
                      >
                        Show Large Slide Over
                      </a>
                      {/* END: Large Slide Over Toggle */}
                      {/* BEGIN: Super Large Slide Over Toggle */}
                      <a
                        href="#"
                        onClick={() => {
                          setSuperlargeSlideOverSizePreview(true);
                        }}
                        className="btn btn-primary mr-1 mb-2"
                      >
                        Show Superlarge Slide Over
                      </a>
                      {/* END: Super Large Slide Over Toggle */}
                    </div>
                    {/* BEGIN: Small Slide Over Content */}
                    <Modal
                      size="modal-sm"
                      slideOver={true}
                      show={smallSlideOverSizePreview}
                      onHidden={() => {
                        setSmallSlideOverSizePreview(false);
                      }}
                    >
                      <ModalHeader className="p-5">
                        <h2 className="font-medium text-base mr-auto">
                          Small Slide Over
                        </h2>
                      </ModalHeader>
                      <ModalBody>
                        This is totally awesome small slide over!
                      </ModalBody>
                    </Modal>
                    {/* END: Small Slide Over Content */}
                    {/* BEGIN: Medium Slide Over Content */}
                    <Modal
                      slideOver={true}
                      show={mediumSlideOverSizePreview}
                      onHidden={() => {
                        setMediumSlideOverSizePreview(false);
                      }}
                    >
                      <ModalHeader className="p-5">
                        <h2 className="font-medium text-base mr-auto">
                          Medium Slide Over
                        </h2>
                      </ModalHeader>
                      <ModalBody>
                        This is totally awesome medium slide over!
                      </ModalBody>
                    </Modal>
                    {/* END: Medium Slide Over Content */}
                    {/* BEGIN: Large Slide Over Content */}
                    <Modal
                      size="modal-lg"
                      slideOver={true}
                      show={largeSlideOverSizePreview}
                      onHidden={() => {
                        setLargeSlideOverSizePreview(false);
                      }}
                    >
                      <ModalHeader className="p-5">
                        <h2 className="font-medium text-base mr-auto">
                          Large Slide Over
                        </h2>
                      </ModalHeader>
                      <ModalBody>
                        This is totally awesome large slide over!
                      </ModalBody>
                    </Modal>
                    {/* END: Large Slide Over Content */}
                    {/* BEGIN: Super Large Slide Over Content */}
                    <Modal
                      size="modal-xl"
                      slideOver={true}
                      show={superlargeSlideOverSizePreview}
                      onHidden={() => {
                        setSuperlargeSlideOverSizePreview(false);
                      }}
                    >
                      <ModalHeader className="p-5">
                        <h2 className="font-medium text-base mr-auto">
                          Superlarge Slide Over
                        </h2>
                      </ModalHeader>
                      <ModalBody>
                        This is totally awesome superlarge slide over!
                      </ModalBody>
                    </Modal>
                    {/* END: Super Large Slide Over Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="text-center">
              {/* BEGIN: Small Slide Over Toggle */}
              <a
                href="#"
                onClick={() => {
                  setSmallSlideOverSizePreview(true);
                }}
                className="btn btn-primary mr-1 mb-2"
              >
                Show Small Slide Over
              </a>
              {/* END: Small Slide Over Toggle */}
              {/* BEGIN: Medium Slide Over Toggle */}
              <a
                href="#"
                onClick={() => {
                  setMediumSlideOverSizePreview(true);
                }}
                className="btn btn-primary mr-1 mb-2"
              >
                Show Medium Slide Over
              </a>
              {/* END: Medium Slide Over Toggle */}
              {/* BEGIN: Large Slide Over Toggle */}
              <a
                href="#"
                onClick={() => {
                  setLargeSlideOverSizePreview(true);
                }}
                className="btn btn-primary mr-1 mb-2"
              >
                Show Large Slide Over
              </a>
              {/* END: Large Slide Over Toggle */}
              {/* BEGIN: Super Large Slide Over Toggle */}
              <a
                href="#"
                onClick={() => {
                  setSuperlargeSlideOverSizePreview(true);
                }}
                className="btn btn-primary mr-1 mb-2"
              >
                Show Superlarge Slide Over
              </a>
              {/* END: Super Large Slide Over Toggle */}
            </div>
            {/* BEGIN: Small Slide Over Content */}
            <Modal
              size="modal-sm"
              slideOver={true}
              show={smallSlideOverSizePreview}
              onHidden={() => {
                setSmallSlideOverSizePreview(false);
              }}
            >
              <ModalHeader className="p-5">
                <h2 className="font-medium text-base mr-auto">
                  Small Slide Over
                </h2>
              </ModalHeader>
              <ModalBody>
                This is totally awesome small slide over!
              </ModalBody>
            </Modal>
            {/* END: Small Slide Over Content */}
            {/* BEGIN: Medium Slide Over Content */}
            <Modal
              slideOver={true}
              show={mediumSlideOverSizePreview}
              onHidden={() => {
                setMediumSlideOverSizePreview(false);
              }}
            >
              <ModalHeader className="p-5">
                <h2 className="font-medium text-base mr-auto">
                  Medium Slide Over
                </h2>
              </ModalHeader>
              <ModalBody>
                This is totally awesome medium slide over!
              </ModalBody>
            </Modal>
            {/* END: Medium Slide Over Content */}
            {/* BEGIN: Large Slide Over Content */}
            <Modal
              size="modal-lg"
              slideOver={true}
              show={largeSlideOverSizePreview}
              onHidden={() => {
                setLargeSlideOverSizePreview(false);
              }}
            >
              <ModalHeader className="p-5">
                <h2 className="font-medium text-base mr-auto">
                  Large Slide Over
                </h2>
              </ModalHeader>
              <ModalBody>
                This is totally awesome large slide over!
              </ModalBody>
            </Modal>
            {/* END: Large Slide Over Content */}
            {/* BEGIN: Super Large Slide Over Content */}
            <Modal
              size="modal-xl"
              slideOver={true}
              show={superlargeSlideOverSizePreview}
              onHidden={() => {
                setSuperlargeSlideOverSizePreview(false);
              }}
            >
              <ModalHeader className="p-5">
                <h2 className="font-medium text-base mr-auto">
                  Superlarge Slide Over
                </h2>
              </ModalHeader>
              <ModalBody>
                This is totally awesome superlarge slide over!
              </ModalBody>
            </Modal>
            {/* END: Super Large Slide Over Content */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Slide Over Size */}
          {/* BEGIN: Slide Over With Close Button */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Slide Over With Close Button
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
                <div id="button-slide-over" className="p-5">
                  <Preview>
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setButtonSlideOverPreview(true);
                        }}
                        className="btn btn-primary"
                      >
                        Show Slide Over
                      </a>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Modal
                      backdrop="static"
                      slideOver={true}
                      show={buttonSlideOverPreview}
                      onHidden={() => {
                        setButtonSlideOverPreview(false);
                      }}
                    >
                      <a
                        onClick={() => {
                          setButtonSlideOverPreview(false);
                        }}
                        className="absolute top-0 left-0 right-auto mt-4 -ml-12"
                        href="#"
                      >
                        <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                      </a>
                      <ModalHeader className="p-5">
                        <h2 className="font-medium text-base mr-auto">
                          Slide Over With Close Button
                        </h2>
                      </ModalHeader>
                      <ModalBody>
                        This is totally awesome slide over with close button!
                      </ModalBody>
                    </Modal>
                    {/* END: Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Modal Toggle */}
              <div className="text-center">
                <a
                  href="#"
                  onClick={() => {
                    setButtonSlideOverPreview(true);
                  }}
                  className="btn btn-primary"
                >
                  Show Slide Over
                </a>
              </div>
              {/* END: Modal Toggle */}
              {/* BEGIN: Modal Content */}
              <Modal
                backdrop="static"
                slideOver={true}
                show={buttonSlideOverPreview}
                onHidden={() => {
                  setButtonSlideOverPreview(false);
                }}
              >
                <a
                  onClick={() => {
                    setButtonSlideOverPreview(false);
                  }}
                  className="absolute top-0 left-0 right-auto mt-4 -ml-12"
                  href="#"
                >
                  <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                </a>
                <ModalHeader className="p-5">
                  <h2 className="font-medium text-base mr-auto">
                    Slide Over With Close Button
                  </h2>
                </ModalHeader>
                <ModalBody>
                  This is totally awesome slide over with close button!
                </ModalBody>
              </Modal>
              {/* END: Modal Content */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Slide Over With Close Button */}
          {/* BEGIN: Overlapping Slide Over */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Overlapping Slide Over
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
                <div id="overlapping-slide-over" className="p-5">
                  <Preview>
                    {/* BEGIN: Slide Over Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setOverlappingSlideOverPreview(true);
                        }}
                        className="btn btn-primary"
                      >
                        Show Slide Over
                      </a>
                    </div>
                    {/* END: Slide Over Toggle */}
                    {/* BEGIN: Slide Over Content */}
                    <Modal
                      slideOver={true}
                      show={overlappingSlideOverPreview}
                      onHidden={() => {
                        setOverlappingSlideOverPreview(false);
                      }}
                    >
                      <ModalHeader className="p-5">
                        <h2 className="font-medium text-base mr-auto">
                          Overlapping Slide Over
                        </h2>
                      </ModalHeader>
                      <ModalBody className="px-5 py-10">
                        <div className="text-center">
                          <div className="mb-5">
                            Click button bellow to show overlapping slide over!
                          </div>
                          {/* BEGIN: Overlapping Slide Over Toggle */}
                          <a
                            href="#"
                            onClick={() => {
                              setNextOverlappingSlideOverPreview(true);
                            }}
                            className="btn btn-primary"
                          >
                            Show Overlapping Slide Over
                          </a>
                          {/* END: Overlapping Slide Over Toggle */}
                          {/* BEGIN: Overlapping Slide Over Content */}
                          <Modal
                            slideOver={true}
                            show={nextOverlappingSlideOverPreview}
                            onHidden={() => {
                              setNextOverlappingSlideOverPreview(false);
                            }}
                          >
                            <ModalHeader className="p-5">
                              <h2 className="font-medium text-base mr-auto">
                                Overlapping Slide Over
                              </h2>
                            </ModalHeader>
                            <ModalBody className="text-center">
                              This is totally awesome overlapping slide over!
                            </ModalBody>
                          </Modal>
                          {/* END: Overlapping Slide Over Content */}
                        </div>
                      </ModalBody>
                    </Modal>
                    {/* END: Slide Over Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Slide Over Toggle */}
              <div className="text-center">
                <a
                  href="#"
                  onClick={() => {
                    setOverlappingSlideOverPreview(true);
                  }}
                  className="btn btn-primary"
                >
                  Show Slide Over
                </a>
              </div>
              {/* END: Slide Over Toggle */}
              {/* BEGIN: Slide Over Content */}
              <Modal
                slideOver={true}
                show={overlappingSlideOverPreview}
                onHidden={() => {
                  setOverlappingSlideOverPreview(false);
                }}
              >
                <ModalHeader className="p-5">
                  <h2 className="font-medium text-base mr-auto">
                    Overlapping Slide Over
                  </h2>
                </ModalHeader>
                <ModalBody className="px-5 py-10">
                  <div className="text-center">
                    <div className="mb-5">
                      Click button bellow to show overlapping slide over!
                    </div>
                    {/* BEGIN: Overlapping Slide Over Toggle */}
                    <a
                      href="#"
                      onClick={() => {
                        setNextOverlappingSlideOverPreview(true);
                      }}
                      className="btn btn-primary"
                    >
                      Show Overlapping Slide Over
                    </a>
                    {/* END: Overlapping Slide Over Toggle */}
                    {/* BEGIN: Overlapping Slide Over Content */}
                    <Modal
                      slideOver={true}
                      show={nextOverlappingSlideOverPreview}
                      onHidden={() => {
                        setNextOverlappingSlideOverPreview(false);
                      }}
                    >
                      <ModalHeader className="p-5">
                        <h2 className="font-medium text-base mr-auto">
                          Overlapping Slide Over
                        </h2>
                      </ModalHeader>
                      <ModalBody className="text-center">
                        This is totally awesome overlapping slide over!
                      </ModalBody>
                    </Modal>
                    {/* END: Overlapping Slide Over Content */}
                  </div>
                </ModalBody>
              </Modal>
              {/* END: Slide Over Content */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Overlapping Slide Over */}
          {/* BEGIN: Header & Footer Slide Over */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Header & Footer Slide Over
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
                <div id="header-footer-slide-over" className="p-5">
                  <Preview>
                    {/* BEGIN: Slide Over Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setHeaderFooterSlideOverPreview(true);
                        }}
                        className="btn btn-primary"
                      >
                        Show Slide Over
                      </a>
                    </div>
                    {/* END: Slide Over Toggle */}
                    {/* BEGIN: Slide Over Content */}
                    <Modal
                      backdrop="static"
                      slideOver={true}
                      show={headerFooterSlideOverPreview}
                      onHidden={() => {
                        setHeaderFooterSlideOverPreview(false);
                      }}
                    >
                      <a
                        onClick={() => {
                          setHeaderFooterSlideOverPreview(false);
                        }}
                        className="absolute top-0 left-0 right-auto mt-4 -ml-12"
                        href="#"
                      >
                        <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                      </a>
                      {/* BEGIN: Slide Over Header */}
                      <ModalHeader className="p-5">
                        <h2 className="font-medium text-base mr-auto">
                          Broadcast Message
                        </h2>
                        <button className="btn btn-outline-secondary hidden sm:flex">
                          <Lucide icon="File" className="w-4 h-4 mr-2" />{" "}
                          Download Docs
                        </button>
                        <Dropdown className="sm:hidden">
                          <DropdownToggle className="w-5 h-5 block" href="#">
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
                      {/* END: Slide Over Header */}
                      {/* BEGIN: Slide Over Body */}
                      <ModalBody>
                        <div>
                          <label htmlFor="modal-form-1" className="form-label">
                            From
                          </label>
                          <input
                            id="modal-form-1"
                            type="text"
                            className="form-control"
                            placeholder="example@gmail.com"
                          />
                        </div>
                        <div className="mt-3">
                          <label htmlFor="modal-form-2" className="form-label">
                            To
                          </label>
                          <input
                            id="modal-form-2"
                            type="text"
                            className="form-control"
                            placeholder="example@gmail.com"
                          />
                        </div>
                        <div className="mt-3">
                          <label htmlFor="modal-form-3" className="form-label">
                            Subject
                          </label>
                          <input
                            id="modal-form-3"
                            type="text"
                            className="form-control"
                            placeholder="Important Meeting"
                          />
                        </div>
                        <div className="mt-3">
                          <label htmlFor="modal-form-4" className="form-label">
                            Has the Words
                          </label>
                          <input
                            id="modal-form-4"
                            type="text"
                            className="form-control"
                            placeholder="Job, Work, Documentation"
                          />
                        </div>
                        <div className="mt-3">
                          <label htmlFor="modal-form-5" className="form-label">
                            Doesn't Have
                          </label>
                          <input
                            id="modal-form-5"
                            type="text"
                            className="form-control"
                            placeholder="Job, Work, Documentation"
                          />
                        </div>
                        <div className="mt-3">
                          <label htmlFor="modal-form-6" className="form-label">
                            Size
                          </label>
                          <select id="modal-form-6" className="form-select">
                            <option>10</option>
                            <option>25</option>
                            <option>35</option>
                            <option>50</option>
                          </select>
                        </div>
                      </ModalBody>
                      {/* END: Slide Over Body */}
                      {/* BEGIN: Slide Over Footer */}
                      <ModalFooter className="w-full absolute bottom-0">
                        <button
                          type="button"
                          onClick={() => {
                            setHeaderFooterSlideOverPreview(false);
                          }}
                          className="btn btn-outline-secondary w-20 mr-1"
                        >
                          Cancel
                        </button>
                        <button type="button" className="btn btn-primary w-20">
                          Send
                        </button>
                      </ModalFooter>
                      {/* END: Slide Over Footer */}
                    </Modal>
                    {/* END: Slide Over Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Slide Over Toggle */}
              <div className="text-center">
                <a
                  href="#"
                  onClick={() => {
                    setHeaderFooterSlideOverPreview(true);
                  }}
                  className="btn btn-primary"
                >
                  Show Slide Over
                </a>
              </div>
              {/* END: Slide Over Toggle */}
              {/* BEGIN: Slide Over Content */}
              <Modal
                backdrop="static"
                slideOver={true}
                show={headerFooterSlideOverPreview}
                onHidden={() => {
                  setHeaderFooterSlideOverPreview(false);
                }}
              >
                <a
                  onClick={() => {
                    setHeaderFooterSlideOverPreview(false);
                  }}
                  className="absolute top-0 left-0 right-auto mt-4 -ml-12"
                  href="#"
                >
                  <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                </a>
                {/* BEGIN: Slide Over Header */}
                <ModalHeader className="p-5">
                  <h2 className="font-medium text-base mr-auto">
                    Broadcast Message
                  </h2>
                  <button className="btn btn-outline-secondary hidden sm:flex">
                    <Lucide icon="File" className="w-4 h-4 mr-2" />{" "}
                    Download Docs
                  </button>
                  <Dropdown className="sm:hidden">
                    <DropdownToggle className="w-5 h-5 block" href="#">
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
                {/* END: Slide Over Header */}
                {/* BEGIN: Slide Over Body */}
                <ModalBody>
                  <div>
                    <label htmlFor="modal-form-1" className="form-label">
                      From
                    </label>
                    <input
                      id="modal-form-1"
                      type="text"
                      className="form-control"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="modal-form-2" className="form-label">
                      To
                    </label>
                    <input
                      id="modal-form-2"
                      type="text"
                      className="form-control"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="modal-form-3" className="form-label">
                      Subject
                    </label>
                    <input
                      id="modal-form-3"
                      type="text"
                      className="form-control"
                      placeholder="Important Meeting"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="modal-form-4" className="form-label">
                      Has the Words
                    </label>
                    <input
                      id="modal-form-4"
                      type="text"
                      className="form-control"
                      placeholder="Job, Work, Documentation"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="modal-form-5" className="form-label">
                      Doesn't Have
                    </label>
                    <input
                      id="modal-form-5"
                      type="text"
                      className="form-control"
                      placeholder="Job, Work, Documentation"
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="modal-form-6" className="form-label">
                      Size
                    </label>
                    <select id="modal-form-6" className="form-select">
                      <option>10</option>
                      <option>25</option>
                      <option>35</option>
                      <option>50</option>
                    </select>
                  </div>
                </ModalBody>
                {/* END: Slide Over Body */}
                {/* BEGIN: Slide Over Footer */}
                <ModalFooter className="w-full absolute bottom-0">
                  <button
                    type="button"
                    onClick={() => {
                      setHeaderFooterSlideOverPreview(false);
                    }}
                    className="btn btn-outline-secondary w-20 mr-1"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary w-20">
                    Send
                  </button>
                </ModalFooter>
                {/* END: Slide Over Footer */}
              </Modal>
              {/* END: Slide Over Content */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Header & Footer Slide Over */}
          {/* BEGIN: Programmatically Show/Hide Slide Over */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Programmatically Show/Hide Slide Over
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
                <div id="programmatically-show-hide-slide-over" className="p-5">
                  <Preview>
                    {/* BEGIN: Show Slide Over Toggle */}
                    <div className="text-center">
                      <a
                        id="programmatically-show-slide-over"
                        href="#"
                        className="btn btn-primary mr-1 mb-2"
                        onClick={() => {
                          setProgrammaticallySlideOver(true);
                        }}
                      >
                        Show Slide Over
                      </a>
                    </div>
                    {/* END: Show Slide Over Toggle */}
                    {/* BEGIN: Slide Over Content */}
                    <Modal
                      slideOver={true}
                      show={programmaticallySlideOver}
                      onHidden={() => {
                        setProgrammaticallySlideOver(false);
                      }}
                    >
                      <ModalHeader className="p-5">
                        <h2 className="font-medium text-base mr-auto">
                          Programmatically Show/Hide Slide Over
                        </h2>
                      </ModalHeader>
                      <ModalBody className="p-10 text-center">
                        {/* BEGIN: Hide Slide Over Toggle */}
                        <a
                          id="programmatically-hide-slide-over"
                          href="#"
                          className="btn btn-primary mr-1"
                          onClick={() => {
                            setProgrammaticallySlideOver(false);
                          }}
                        >
                          Hide Slide Over
                        </a>
                        {/* END: Hide Slide Over Toggle */}
                        {/* BEGIN: Toggle Slide Over Toggle */}
                        <a
                          id="programmatically-toggle-slide-over"
                          href="#"
                          className="btn btn-primary mr-1 mt-2 sm:mt-0"
                          onClick={() => {
                            setProgrammaticallySlideOver(
                              !programmaticallySlideOver
                            );
                          }}
                        >
                          Toggle Slide Over
                        </a>
                        {/* END: Toggle Slide Over Toggle */}
                      </ModalBody>
                    </Modal>
                    {/* END: Slide Over Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Show Slide Over Toggle */}
              <div className="text-center">
                <a
                  id="programmatically-show-slide-over"
                  href="#"
                  className="btn btn-primary mr-1 mb-2"
                  onClick={() => {
                    setProgrammaticallySlideOver(true);
                  }}
                >
                  Show Slide Over
                </a>
              </div>
              {/* END: Show Slide Over Toggle */}
              {/* BEGIN: Slide Over Content */}
              <Modal
                slideOver={true}
                show={programmaticallySlideOver}
                onHidden={() => {
                  setProgrammaticallySlideOver(false);
                }}
              >
                <ModalHeader className="p-5">
                  <h2 className="font-medium text-base mr-auto">
                    Programmatically Show/Hide Slide Over
                  </h2>
                </ModalHeader>
                <ModalBody className="p-10 text-center">
                  {/* BEGIN: Hide Slide Over Toggle */}
                  <a
                    id="programmatically-hide-slide-over"
                    href="#"
                    className="btn btn-primary mr-1"
                    onClick={() => {
                      setProgrammaticallySlideOver(false);
                    }}
                  >
                    Hide Slide Over
                  </a>
                  {/* END: Hide Slide Over Toggle */}
                  {/* BEGIN: Toggle Slide Over Toggle */}
                  <a
                    id="programmatically-toggle-slide-over"
                    href="#"
                    className="btn btn-primary mr-1 mt-2 sm:mt-0"
                    onClick={() => {
                      setProgrammaticallySlideOver(
                        !programmaticallySlideOver
                      );
                    }}
                  >
                    Toggle Slide Over
                  </a>
                  {/* END: Toggle Slide Over Toggle */}
                </ModalBody>
              </Modal>
              {/* END: Slide Over Content */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Programmatically Show/Hide Slide Over */}
        </div>
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Component Reference */}
          <div className="intro-y box">
            <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">
                Component Reference
              </h2>
            </div>
            <div className="p-5">
              <div>
                Slide overs are built using the
                <span className="text-red-500">`Modal`</span>,
                <span className="text-red-500">`ModalHeader`</span>,
                <span className="text-red-500">`ModalBody`</span> and
                <span className="text-red-500">`ModalFooter`</span> components.
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
              <div className="text-base font-medium">Modal</div>
              <div className="mt-2">The main Modal component.</div>
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
                      Whether the Modal is open or not.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top text-red-500">`size`</td>
                    <td className="align-top">
                      `modal-sm`, `modal-lg`, `modal-xl`
                    </td>
                    <td className="align-top">-</td>
                    <td className="align-top">
                      <div className="font-medium mb-1">`String`</div>
                      Size of Modal wrapper/content.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top text-red-500">`backdrop`</td>
                    <td className="align-top">`static`</td>
                    <td className="align-top">-</td>
                    <td className="align-top">
                      <div className="font-medium mb-1">`String`</div>
                      Whether the Modal backdrop is static or not. When backdrop
                      is set to static, the Modal will not close when clicking
                      outside it.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top text-red-500">`slideOver`</td>
                    <td className="align-top">`true`, `false`</td>
                    <td className="align-top">`false`</td>
                    <td className="align-top">
                      <div className="font-medium mb-1">`Boolean`</div>
                      Whether the Modal appears as a slideover or not.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top text-red-500">`getRef`</td>
                    <td className="align-top">-</td>
                    <td className="align-top">-</td>
                    <td className="align-top">
                      <div className="font-medium mb-1">`Function`</div>A ref to
                      the Modal element.
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
                      This event fires immediately when the{" "}
                      <span className="text-red-500">show</span> instance method
                      is called.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top text-red-500">`onShown`</td>
                    <td className="align-top">
                      This event is fired when the modal has been made visible
                      to the user (will wait for CSS transitions to complete)
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top text-red-500">`onHide`</td>
                    <td className="align-top">
                      This event is fired immediately when the{" "}
                      <span className="text-red-500">hide</span> instance method
                      has been called.
                    </td>
                  </tr>
                  <tr>
                    <td className="align-top text-red-500">`onHidden`</td>
                    <td className="align-top">
                      This event is fired when the modal has finished being
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
                    <td className="align-top">Manually hides a modal.</td>
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
