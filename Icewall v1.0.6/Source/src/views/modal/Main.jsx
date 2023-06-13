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
  TinySlider,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";
import { faker as $f } from "@/utils";
import { useState } from "react";

function Main() {
  const [basicModalPreview, setBasicModalPreview] = useState(false);
  const [smallModalSizePreview, setSmallModalSizePreview] = useState(false);
  const [mediumModalSizePreview, setMediumModalSizePreview] = useState(false);
  const [largeModalSizePreview, setLargeModalSizePreview] = useState(false);
  const [superlargeModalSizePreview, setSuperlargeModalSizePreview] =
    useState(false);
  const [programmaticallyModal, setProgrammaticallyModal] = useState(false);
  const [warningModalPreview, setWarningModalPreview] = useState(false);
  const [buttonModalPreview, setButtonModalPreview] = useState(false);
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false);
  const [overlappingModalPreview, setOverlappingModalPreview] = useState(false);
  const [nextOverlappingModalPreview, setNextOverlappingModalPreview] =
    useState(false);
  const [headerFooterModalPreview, setHeaderFooterModalPreview] =
    useState(false);
  const [deleteModalPreview, setDeleteModalPreview] = useState(false);
  const [successModalPreview, setSuccessModalPreview] = useState(false);
  const [tinySliderModalPreview, setTinySliderModalPreview] = useState(false);

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Modal</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Blank Modal */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Blank Modal</h2>
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setBasicModalPreview(true);
                        }}
                        className="btn btn-primary"
                      >
                        Show Modal
                      </a>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Modal
                      show={basicModalPreview}
                      onHidden={() => {
                        setBasicModalPreview(false);
                      }}
                    >
                      <ModalBody className="p-10 text-center">
                        This is totally awesome blank modal!
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
                    setBasicModalPreview(true);
                  }}
                  className="btn btn-primary"
                >
                  Show Modal
                </a>
              </div>
              {/* END: Modal Toggle */}
              {/* BEGIN: Modal Content */}
              <Modal
                show={basicModalPreview}
                onHidden={() => {
                  setBasicModalPreview(false);
                }}
              >
                <ModalBody className="p-10 text-center">
                  This is totally awesome blank modal!
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
          {/* END: Blank Modal */}
          {/* BEGIN: Modal Size */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Modal Size</h2>
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
                    <div className="text-center">
                      {/* BEGIN: Small Modal Toggle */}
                      <a
                        href="#"
                        onClick={() => {
                          setSmallModalSizePreview(true);
                        }}
                        className="btn btn-primary mr-1 mb-2"
                      >
                        Show Small Modal
                      </a>
                      {/* END: Small Modal Toggle */}
                      {/* BEGIN: Medium Modal Toggle */}
                      <a
                        href="#"
                        onClick={() => {
                          setMediumModalSizePreview(true);
                        }}
                        className="btn btn-primary mr-1 mb-2"
                      >
                        Show Medium Modal
                      </a>
                      {/* END: Medium Modal Toggle */}
                      {/* BEGIN: Large Modal Toggle */}
                      <a
                        href="#"
                        onClick={() => {
                          setLargeModalSizePreview(true);
                        }}
                        className="btn btn-primary mr-1 mb-2"
                      >
                        Show Large Modal
                      </a>
                      {/* END: Large Modal Toggle */}
                      {/* BEGIN: Super Large Modal Toggle */}
                      <a
                        href="#"
                        onClick={() => {
                          setSuperlargeModalSizePreview(true);
                        }}
                        className="btn btn-primary mr-1 mb-2"
                      >
                        Show Superlarge Modal
                      </a>
                      {/* END: Super Large Modal Toggle */}
                    </div>
                    {/* BEGIN: Small Modal Content */}
                    <Modal
                      size="modal-sm"
                      show={smallModalSizePreview}
                      onHidden={() => {
                        setSmallModalSizePreview(false);
                      }}
                    >
                      <ModalBody className="p-10 text-center">
                        This is totally awesome small modal!
                      </ModalBody>
                    </Modal>
                    {/* END: Small Modal Content */}
                    {/* BEGIN: Medium Modal Content */}
                    <Modal
                      show={mediumModalSizePreview}
                      onHidden={() => {
                        setMediumModalSizePreview(false);
                      }}
                    >
                      <ModalBody className="p-10 text-center">
                        This is totally awesome medium modal!
                      </ModalBody>
                    </Modal>
                    {/* END: Medium Modal Content */}
                    {/* BEGIN: Large Modal Content */}
                    <Modal
                      size="modal-lg"
                      show={largeModalSizePreview}
                      onHidden={() => {
                        setLargeModalSizePreview(false);
                      }}
                    >
                      <ModalBody className="p-10 text-center">
                        This is totally awesome large modal!
                      </ModalBody>
                    </Modal>
                    {/* END: Large Modal Content */}
                    {/* BEGIN: Super Large Modal Content */}
                    <Modal
                      size="modal-xl"
                      show={superlargeModalSizePreview}
                      onHidden={() => {
                        setSuperlargeModalSizePreview(false);
                      }}
                    >
                      <ModalBody className="p-10 text-center">
                        This is totally awesome superlarge modal!
                      </ModalBody>
                    </Modal>
                    {/* END: Super Large Modal Content */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="text-center">
              {/* BEGIN: Small Modal Toggle */}
              <a
                href="#"
                onClick={() => {
                  setSmallModalSizePreview(true);
                }}
                className="btn btn-primary mr-1 mb-2"
              >
                Show Small Modal
              </a>
              {/* END: Small Modal Toggle */}
              {/* BEGIN: Medium Modal Toggle */}
              <a
                href="#"
                onClick={() => {
                  setMediumModalSizePreview(true);
                }}
                className="btn btn-primary mr-1 mb-2"
              >
                Show Medium Modal
              </a>
              {/* END: Medium Modal Toggle */}
              {/* BEGIN: Large Modal Toggle */}
              <a
                href="#"
                onClick={() => {
                  setLargeModalSizePreview(true);
                }}
                className="btn btn-primary mr-1 mb-2"
              >
                Show Large Modal
              </a>
              {/* END: Large Modal Toggle */}
              {/* BEGIN: Super Large Modal Toggle */}
              <a
                href="#"
                onClick={() => {
                  setSuperlargeModalSizePreview(true);
                }}
                className="btn btn-primary mr-1 mb-2"
              >
                Show Superlarge Modal
              </a>
              {/* END: Super Large Modal Toggle */}
            </div>
            {/* BEGIN: Small Modal Content */}
            <Modal
              size="modal-sm"
              show={smallModalSizePreview}
              onHidden={() => {
                setSmallModalSizePreview(false);
              }}
            >
              <ModalBody className="p-10 text-center">
                This is totally awesome small modal!
              </ModalBody>
            </Modal>
            {/* END: Small Modal Content */}
            {/* BEGIN: Medium Modal Content */}
            <Modal
              show={mediumModalSizePreview}
              onHidden={() => {
                setMediumModalSizePreview(false);
              }}
            >
              <ModalBody className="p-10 text-center">
                This is totally awesome medium modal!
              </ModalBody>
            </Modal>
            {/* END: Medium Modal Content */}
            {/* BEGIN: Large Modal Content */}
            <Modal
              size="modal-lg"
              show={largeModalSizePreview}
              onHidden={() => {
                setLargeModalSizePreview(false);
              }}
            >
              <ModalBody className="p-10 text-center">
                This is totally awesome large modal!
              </ModalBody>
            </Modal>
            {/* END: Large Modal Content */}
            {/* BEGIN: Super Large Modal Content */}
            <Modal
              size="modal-xl"
              show={superlargeModalSizePreview}
              onHidden={() => {
                setSuperlargeModalSizePreview(false);
              }}
            >
              <ModalBody className="p-10 text-center">
                This is totally awesome superlarge modal!
              </ModalBody>
            </Modal>
            {/* END: Super Large Modal Content */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Modal Size */}
          {/* BEGIN: Warning Modal */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Warning Modal
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        className="btn btn-primary"
                        onClick={() => {
                          setWarningModalPreview(true);
                        }}
                      >
                        Show Modal
                      </a>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Modal
                      show={warningModalPreview}
                      onHidden={() => {
                        setWarningModalPreview(false);
                      }}
                    >
                      <ModalBody className="p-0">
                        <div className="p-5 text-center">
                          <Lucide
                            icon="XCircle"
                            className="w-16 h-16 text-warning mx-auto mt-3"
                          />
                          <div className="text-3xl mt-5">Oops...</div>
                          <div className="text-slate-500 mt-2">
                            Something went wrong!
                          </div>
                        </div>
                        <div className="px-5 pb-8 text-center">
                          <button
                            type="button"
                            onClick={() => {
                              setWarningModalPreview(false);
                            }}
                            className="btn w-24 btn-primary"
                          >
                            Ok
                          </button>
                        </div>
                        <div className="p-5 text-center border-t border-slate-200/60 dark:border-darkmode-400">
                          <a href="" className="text-primary">
                            Why do I have this issue?
                          </a>
                        </div>
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
                  className="btn btn-primary"
                  onClick={() => {
                    setWarningModalPreview(true);
                  }}
                >
                  Show Modal
                </a>
              </div>
              {/* END: Modal Toggle */}
              {/* BEGIN: Modal Content */}
              <Modal
                show={warningModalPreview}
                onHidden={() => {
                  setWarningModalPreview(false);
                }}
              >
                <ModalBody className="p-0">
                  <div className="p-5 text-center">
                    <Lucide
                      icon="XCircle"
                      className="w-16 h-16 text-warning mx-auto mt-3"
                    />
                    <div className="text-3xl mt-5">Oops...</div>
                    <div className="text-slate-500 mt-2">
                      Something went wrong!
                    </div>
                  </div>
                  <div className="px-5 pb-8 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setWarningModalPreview(false);
                      }}
                      className="btn w-24 btn-primary"
                    >
                      Ok
                    </button>
                  </div>
                  <div className="p-5 text-center border-t border-slate-200/60 dark:border-darkmode-400">
                    <a href="" className="text-primary">
                      Why do I have this issue?
                    </a>
                  </div>
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
          {/* END: Warning Modal */}
          {/* BEGIN: Modal With Close Button */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Modal With Close Button
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setButtonModalPreview(true);
                        }}
                        className="btn btn-primary"
                      >
                        Show Modal
                      </a>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Modal
                      show={buttonModalPreview}
                      onHidden={() => {
                        setButtonModalPreview(false);
                      }}
                    >
                      <a
                        onClick={() => {
                          setButtonModalPreview(false);
                        }}
                        className="absolute right-0 top-0 mt-3 mr-3"
                        href="#"
                      >
                        <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                      </a>
                      <ModalBody className="p-0">
                        <div className="p-5 text-center">
                          <Lucide
                            icon="CheckCircle"
                            className="w-16 h-16 text-success mx-auto mt-3"
                          />
                          <div className="text-3xl mt-5">Modal Example</div>
                          <div className="text-slate-500 mt-2">
                            Modal with close button
                          </div>
                        </div>
                        <div className="px-5 pb-8 text-center">
                          <button
                            type="button"
                            onClick={() => {
                              setButtonModalPreview(false);
                            }}
                            className="btn btn-primary w-24"
                          >
                            Ok
                          </button>
                        </div>
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
                    setButtonModalPreview(true);
                  }}
                  className="btn btn-primary"
                >
                  Show Modal
                </a>
              </div>
              {/* END: Modal Toggle */}
              {/* BEGIN: Modal Content */}
              <Modal
                show={buttonModalPreview}
                onHidden={() => {
                  setButtonModalPreview(false);
                }}
              >
                <a
                  onClick={() => {
                    setButtonModalPreview(false);
                  }}
                  className="absolute right-0 top-0 mt-3 mr-3"
                  href="#"
                >
                  <Lucide icon="X" className="w-8 h-8 text-slate-400" />
                </a>
                <ModalBody className="p-0">
                  <div className="p-5 text-center">
                    <Lucide
                      icon="CheckCircle"
                      className="w-16 h-16 text-success mx-auto mt-3"
                    />
                    <div className="text-3xl mt-5">Modal Example</div>
                    <div className="text-slate-500 mt-2">
                      Modal with close button
                    </div>
                  </div>
                  <div className="px-5 pb-8 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setButtonModalPreview(false);
                      }}
                      className="btn btn-primary w-24"
                    >
                      Ok
                    </button>
                  </div>
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
          {/* END: Modal With Close Button */}
          {/* BEGIN: Static Backdrop Modal */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Static Backdrop Modal
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-11"
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setStaticBackdropModalPreview(true);
                        }}
                        className="btn btn-primary"
                      >
                        Show Modal
                      </a>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Modal
                      backdrop="static"
                      show={staticBackdropModalPreview}
                      onHidden={() => {
                        setStaticBackdropModalPreview(false);
                      }}
                    >
                      <ModalBody className="px-5 py-10">
                        <div className="text-center">
                          <div className="mb-5">
                            I will not close if you click outside me. Don't even
                            try to press escape key.
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              setStaticBackdropModalPreview(false);
                            }}
                            className="btn btn-primary w-24"
                          >
                            Ok
                          </button>
                        </div>
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
                    setStaticBackdropModalPreview(true);
                  }}
                  className="btn btn-primary"
                >
                  Show Modal
                </a>
              </div>
              {/* END: Modal Toggle */}
              {/* BEGIN: Modal Content */}
              <Modal
                backdrop="static"
                show={staticBackdropModalPreview}
                onHidden={() => {
                  setStaticBackdropModalPreview(false);
                }}
              >
                <ModalBody className="px-5 py-10">
                  <div className="text-center">
                    <div className="mb-5">
                      I will not close if you click outside me. Don't even
                      try to press escape key.
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setStaticBackdropModalPreview(false);
                      }}
                      className="btn btn-primary w-24"
                    >
                      Ok
                    </button>
                  </div>
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
          {/* END: Static Backdrop Modal */}
          {/* BEGIN: Overlapping Modal */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Overlapping Modal
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setOverlappingModalPreview(true);
                        }}
                        className="btn btn-primary"
                      >
                        Show Modal
                      </a>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Modal
                      show={overlappingModalPreview}
                      onHidden={() => {
                        setOverlappingModalPreview(false);
                      }}
                    >
                      <ModalBody className="px-5 py-10">
                        <div className="text-center">
                          <div className="mb-5">
                            Click button bellow to show overlapping modal!
                          </div>
                          {/* BEGIN: Overlapping Modal Toggle */}
                          <a
                            href="#"
                            onClick={() => {
                              setNextOverlappingModalPreview(true);
                            }}
                            className="btn btn-primary"
                          >
                            Show Overlapping Modal
                          </a>
                          {/* END: Overlapping Modal Toggle */}
                        </div>
                        {/* BEGIN: Overlapping Modal Content */}
                        <Modal
                          show={nextOverlappingModalPreview}
                          onHidden={() => {
                            setNextOverlappingModalPreview(false);
                          }}
                        >
                          <ModalBody className="text-center">
                            This is totally awesome overlapping modal!
                          </ModalBody>
                        </Modal>
                        {/* END: Overlapping Modal Content */}
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
                    setOverlappingModalPreview(true);
                  }}
                  className="btn btn-primary"
                >
                  Show Modal
                </a>
              </div>
              {/* END: Modal Toggle */}
              {/* BEGIN: Modal Content */}
              <Modal
                show={overlappingModalPreview}
                onHidden={() => {
                  setOverlappingModalPreview(false);
                }}
              >
                <ModalBody className="px-5 py-10">
                  <div className="text-center">
                    <div className="mb-5">
                      Click button bellow to show overlapping modal!
                    </div>
                    {/* BEGIN: Overlapping Modal Toggle */}
                    <a
                      href="#"
                      onClick={() => {
                        setNextOverlappingModalPreview(true);
                      }}
                      className="btn btn-primary"
                    >
                      Show Overlapping Modal
                    </a>
                    {/* END: Overlapping Modal Toggle */}
                  </div>
                  {/* BEGIN: Overlapping Modal Content */}
                  <Modal
                    show={nextOverlappingModalPreview}
                    onHidden={() => {
                      setNextOverlappingModalPreview(false);
                    }}
                  >
                    <ModalBody className="text-center">
                      This is totally awesome overlapping modal!
                    </ModalBody>
                  </Modal>
                  {/* END: Overlapping Modal Content */}
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
          {/* END: Overlapping Modal */}
          {/* BEGIN: Header & Footer Modal */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Header & Footer Modal
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setHeaderFooterModalPreview(true);
                        }}
                        className="btn btn-primary"
                      >
                        Show Modal
                      </a>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Modal
                      show={headerFooterModalPreview}
                      onHidden={() => {
                        setHeaderFooterModalPreview(false);
                      }}
                    >
                      <ModalHeader>
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
                      <ModalBody className="grid grid-cols-12 gap-4 gap-y-3">
                        <div className="col-span-12 sm:col-span-6">
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
                        <div className="col-span-12 sm:col-span-6">
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
                        <div className="col-span-12 sm:col-span-6">
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
                        <div className="col-span-12 sm:col-span-6">
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
                        <div className="col-span-12 sm:col-span-6">
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
                        <div className="col-span-12 sm:col-span-6">
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
                      <ModalFooter>
                        <button
                          type="button"
                          onClick={() => {
                            setHeaderFooterModalPreview(false);
                          }}
                          className="btn btn-outline-secondary w-20 mr-1"
                        >
                          Cancel
                        </button>
                        <button type="button" className="btn btn-primary w-20">
                          Send
                        </button>
                      </ModalFooter>
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
                    setHeaderFooterModalPreview(true);
                  }}
                  className="btn btn-primary"
                >
                  Show Modal
                </a>
              </div>
              {/* END: Modal Toggle */}
              {/* BEGIN: Modal Content */}
              <Modal
                show={headerFooterModalPreview}
                onHidden={() => {
                  setHeaderFooterModalPreview(false);
                }}
              >
                <ModalHeader>
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
                <ModalBody className="grid grid-cols-12 gap-4 gap-y-3">
                  <div className="col-span-12 sm:col-span-6">
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
                  <div className="col-span-12 sm:col-span-6">
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
                  <div className="col-span-12 sm:col-span-6">
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
                  <div className="col-span-12 sm:col-span-6">
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
                  <div className="col-span-12 sm:col-span-6">
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
                  <div className="col-span-12 sm:col-span-6">
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
                <ModalFooter>
                  <button
                    type="button"
                    onClick={() => {
                      setHeaderFooterModalPreview(false);
                    }}
                    className="btn btn-outline-secondary w-20 mr-1"
                  >
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary w-20">
                    Send
                  </button>
                </ModalFooter>
              </Modal>
              {/* END: Modal Content */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Header & Footer Modal */}
          {/* BEGIN: Delete Modal */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Delete Modal
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setDeleteModalPreview(true);
                        }}
                        className="btn btn-primary"
                      >
                        Show Modal
                      </a>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Modal
                      show={deleteModalPreview}
                      onHidden={() => {
                        setDeleteModalPreview(false);
                      }}
                    >
                      <ModalBody className="p-0">
                        <div className="p-5 text-center">
                          <Lucide
                            icon="XCircle"
                            className="w-16 h-16 text-danger mx-auto mt-3"
                          />
                          <div className="text-3xl mt-5">Are you sure?</div>
                          <div className="text-slate-500 mt-2">
                            Do you really want to delete these records? <br />
                            This process cannot be undone.
                          </div>
                        </div>
                        <div className="px-5 pb-8 text-center">
                          <button
                            type="button"
                            onClick={() => {
                              setDeleteModalPreview(false);
                            }}
                            className="btn btn-outline-secondary w-24 mr-1"
                          >
                            Cancel
                          </button>
                          <button type="button" className="btn btn-danger w-24">
                            Delete
                          </button>
                        </div>
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
                    setDeleteModalPreview(true);
                  }}
                  className="btn btn-primary"
                >
                  Show Modal
                </a>
              </div>
              {/* END: Modal Toggle */}
              {/* BEGIN: Modal Content */}
              <Modal
                show={deleteModalPreview}
                onHidden={() => {
                  setDeleteModalPreview(false);
                }}
              >
                <ModalBody className="p-0">
                  <div className="p-5 text-center">
                    <Lucide
                      icon="XCircle"
                      className="w-16 h-16 text-danger mx-auto mt-3"
                    />
                    <div className="text-3xl mt-5">Are you sure?</div>
                    <div className="text-slate-500 mt-2">
                      Do you really want to delete these records? <br />
                      This process cannot be undone.
                    </div>
                  </div>
                  <div className="px-5 pb-8 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setDeleteModalPreview(false);
                      }}
                      className="btn btn-outline-secondary w-24 mr-1"
                    >
                      Cancel
                    </button>
                    <button type="button" className="btn btn-danger w-24">
                      Delete
                    </button>
                  </div>
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
          {/* END: Delete Modal */}
          {/* BEGIN: Success Modal */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Success Modal
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-9"
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setSuccessModalPreview(true);
                        }}
                        className="btn btn-primary"
                      >
                        Show Modal
                      </a>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Modal
                      show={successModalPreview}
                      onHidden={() => {
                        setSuccessModalPreview(false);
                      }}
                    >
                      <ModalBody className="p-0">
                        <div className="p-5 text-center">
                          <Lucide
                            icon="CheckCircle"
                            className="w-16 h-16 text-success mx-auto mt-3"
                          />
                          <div className="text-3xl mt-5">Good job!</div>
                          <div className="text-slate-500 mt-2">
                            You clicked the button!
                          </div>
                        </div>
                        <div className="px-5 pb-8 text-center">
                          <button
                            type="button"
                            onClick={() => {
                              setSuccessModalPreview(false);
                            }}
                            className="btn btn-primary w-24"
                          >
                            Ok
                          </button>
                        </div>
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
                    setSuccessModalPreview(true);
                  }}
                  className="btn btn-primary"
                >
                  Show Modal
                </a>
              </div>
              {/* END: Modal Toggle */}
              {/* BEGIN: Modal Content */}
              <Modal
                show={successModalPreview}
                onHidden={() => {
                  setSuccessModalPreview(false);
                }}
              >
                <ModalBody className="p-0">
                  <div className="p-5 text-center">
                    <Lucide
                      icon="CheckCircle"
                      className="w-16 h-16 text-success mx-auto mt-3"
                    />
                    <div className="text-3xl mt-5">Good job!</div>
                    <div className="text-slate-500 mt-2">
                      You clicked the button!
                    </div>
                  </div>
                  <div className="px-5 pb-8 text-center">
                    <button
                      type="button"
                      onClick={() => {
                        setSuccessModalPreview(false);
                      }}
                      className="btn btn-primary w-24"
                    >
                      Ok
                    </button>
                  </div>
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
          {/* END: Success Modal */}
          {/* BEGIN: Tiny Slider Modal */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Tiny Slider Modal
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-10"
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
                    {/* BEGIN: Modal Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        onClick={() => {
                          setTinySliderModalPreview(true);
                        }}
                        className="btn btn-primary"
                      >
                        Show Modal
                      </a>
                    </div>
                    {/* END: Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Modal
                      show={tinySliderModalPreview}
                      onHidden={() => {
                        setTinySliderModalPreview(false);
                      }}
                    >
                      <ModalBody>
                        <div className="mx-6">
                          <TinySlider
                            options={{
                              mouseDrag: true,
                              autoplay: false,
                              controls: true,
                              center: true,
                              items: 1,
                              nav: false,
                              speed: 500,
                              responsive: {
                                600: {
                                  items: 2,
                                },
                              },
                            }}
                          >
                            <div className="h-56 px-2">
                              <div className="h-full image-fit rounded-md overflow-hidden">
                                <img
                                  alt="Midone Tailwind HTML Admin Template"
                                  src={$f()[0].images[0]}
                                />
                              </div>
                            </div>
                            <div className="h-56 px-2">
                              <div className="h-full image-fit rounded-md overflow-hidden">
                                <img
                                  alt="Midone Tailwind HTML Admin Template"
                                  src={$f()[0].images[1]}
                                />
                              </div>
                            </div>
                            <div className="h-56 px-2">
                              <div className="h-full image-fit rounded-md overflow-hidden">
                                <img
                                  alt="Midone Tailwind HTML Admin Template"
                                  src={$f()[0].images[2]}
                                />
                              </div>
                            </div>
                            <div className="h-56 px-2">
                              <div className="h-full image-fit rounded-md overflow-hidden">
                                <img
                                  alt="Midone Tailwind HTML Admin Template"
                                  src={$f()[0].images[3]}
                                />
                              </div>
                            </div>
                          </TinySlider>
                        </div>
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
                    setTinySliderModalPreview(true);
                  }}
                  className="btn btn-primary"
                >
                  Show Modal
                </a>
              </div>
              {/* END: Modal Toggle */}
              {/* BEGIN: Modal Content */}
              <Modal
                show={tinySliderModalPreview}
                onHidden={() => {
                  setTinySliderModalPreview(false);
                }}
              >
                <ModalBody>
                  <div className="mx-6">
                    <TinySlider
                      options={{
                        mouseDrag: true,
                        autoplay: false,
                        controls: true,
                        center: true,
                        items: 1,
                        nav: false,
                        speed: 500,
                        responsive: {
                          600: {
                            items: 2,
                          },
                        },
                      }}
                    >
                      <div className="h-56 px-2">
                        <div className="h-full image-fit rounded-md overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={$f()[0].images[0]}
                          />
                        </div>
                      </div>
                      <div className="h-56 px-2">
                        <div className="h-full image-fit rounded-md overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={$f()[0].images[1]}
                          />
                        </div>
                      </div>
                      <div className="h-56 px-2">
                        <div className="h-full image-fit rounded-md overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={$f()[0].images[2]}
                          />
                        </div>
                      </div>
                      <div className="h-56 px-2">
                        <div className="h-full image-fit rounded-md overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={$f()[0].images[3]}
                          />
                        </div>
                      </div>
                    </TinySlider>
                  </div>
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
          {/* END: Tiny Slider Modal */}
          {/* BEGIN: Programmatically Show/Hide Modal */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Programmatically Show/Hide Modal
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
                    {/* BEGIN: Show Modal Toggle */}
                    <div className="text-center">
                      <a
                        href="#"
                        className="btn btn-primary mr-1 mb-2"
                        onClick={() => {
                          setProgrammaticallyModal(true);
                        }}
                      >
                        Show Modal
                      </a>
                    </div>
                    {/* END: Show Modal Toggle */}
                    {/* BEGIN: Modal Content */}
                    <Modal
                      show={programmaticallyModal}
                      onHidden={() => {
                        setProgrammaticallyModal(false);
                      }}
                    >
                      <ModalBody className="p-10 text-center">
                        {/* BEGIN: Hide Modal Toggle */}
                        <a
                          href="#"
                          className="btn btn-primary mr-1"
                          onClick={() => {
                            setProgrammaticallyModal(false);
                          }}
                        >
                          Hide Modal
                        </a>
                        {/* END: Hide Modal Toggle */}
                        {/* BEGIN: Toggle Modal Toggle */}
                        <a
                          href="#"
                          className="btn btn-primary mr-1"
                          onClick={() => {
                            setProgrammaticallyModal(!programmaticallyModal);
                          }}
                        >
                          Toggle Modal
                        </a>
                        {/* END: Toggle Modal Toggle */}
                      </ModalBody>
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
                  className="btn btn-primary mr-1 mb-2"
                  onClick={() => {
                    setProgrammaticallyModal(true);
                  }}
                >
                  Show Modal
                </a>
              </div>
              {/* END: Show Modal Toggle */}
              {/* BEGIN: Modal Content */}
              <Modal
                show={programmaticallyModal}
                onHidden={() => {
                  setProgrammaticallyModal(false);
                }}
              >
                <ModalBody className="p-10 text-center">
                  {/* BEGIN: Hide Modal Toggle */}
                  <a
                    href="#"
                    className="btn btn-primary mr-1"
                    onClick={() => {
                      setProgrammaticallyModal(false);
                    }}
                  >
                    Hide Modal
                  </a>
                  {/* END: Hide Modal Toggle */}
                  {/* BEGIN: Toggle Modal Toggle */}
                  <a
                    href="#"
                    className="btn btn-primary mr-1"
                    onClick={() => {
                      setProgrammaticallyModal(!programmaticallyModal);
                    }}
                  >
                    Toggle Modal
                  </a>
                  {/* END: Toggle Modal Toggle */}
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
          {/* END: Programmatically Show/Hide Modal */}
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
                Modals are built using the
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
