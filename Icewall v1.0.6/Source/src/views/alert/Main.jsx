import {
  Lucide,
  Alert,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";

function Main() {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Alert</h2>
      </div>
      <div className="intro-y grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Basic Alert */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Basic Alerts
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
                    <Alert className="alert-primary mb-2">
                      Awesome simple alert
                    </Alert>
                    <Alert className="alert-secondary mb-2">
                      Awesome simple alert
                    </Alert>
                    <Alert className="alert-success mb-2">
                      Awesome simple alert
                    </Alert>
                    <Alert className="alert-warning mb-2">
                      Awesome simple alert
                    </Alert>
                    <Alert className="alert-pending mb-2">
                      Awesome simple alert
                    </Alert>
                    <Alert className="alert-danger mb-2">
                      Awesome simple alert
                    </Alert>
                    <Alert className="alert-dark mb-2">
                      Awesome simple alert
                    </Alert>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Alert className="alert-primary mb-2"> Awesome simple alert </Alert>
              <Alert className="alert-secondary mb-2"> Awesome simple alert </Alert>
              <Alert className="alert-success mb-2"> Awesome simple alert </Alert>
              <Alert className="alert-warning mb-2"> Awesome simple alert </Alert>
              <Alert className="alert-pending mb-2"> Awesome simple alert </Alert>
              <Alert className="alert-danger mb-2"> Awesome simple alert </Alert>
              <Alert className="alert-dark mb-2"> Awesome simple alert </Alert>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Alert */}
          {/* BEGIN: Icon's Alert */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Icon Alerts</h2>
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
                    <Alert className="alert-primary flex items-center mb-2">
                      <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert className="alert-secondary flex items-center mb-2">
                      <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert className="alert-success flex items-center mb-2">
                      <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert className="alert-warning flex items-center mb-2">
                      <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert className="alert-pending flex items-center mb-2">
                      <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert className="alert-danger flex items-center mb-2">
                      <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert className="alert-dark flex items-center mb-2">
                      <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Alert className="alert-primary flex items-center mb-2">
                <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" /> Awesome alert with icon
              </Alert>
              <Alert className="alert-secondary flex items-center mb-2">
                <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" /> Awesome alert with
                icon
              </Alert>
              <Alert className="alert-success flex items-center mb-2">
                <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" /> Awesome alert with
                icon
              </Alert>
              <Alert className="alert-warning flex items-center mb-2">
                <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" /> Awesome alert with icon
              </Alert>
              <Alert className="alert-pending flex items-center mb-2">
                <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" /> Awesome alert with
                icon
              </Alert>
              <Alert className="alert-danger flex items-center mb-2">
                <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" /> Awesome alert with
                icon
              </Alert>
              <Alert className="alert-dark flex items-center mb-2">
                <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" /> Awesome alert with
                icon
              </Alert>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Icon's Alert */}
          {/* BEGIN: Additional Content Alert */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Additional Content Alerts
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
                    <Alert className="alert-primary mb-2">
                      <div className="flex items-center">
                        <div className="font-medium text-lg">
                          Awesome alert with additional info
                        </div>
                        <div className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto">
                          New
                        </div>
                      </div>
                      <div className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </Alert>
                    <Alert className="alert-secondary mb-2">
                      <div className="flex items-center">
                        <div className="font-medium text-lg">
                          Awesome alert with additional info
                        </div>
                        <div className="text-xs bg-slate-500 px-1 rounded-md text-white ml-auto">
                          New
                        </div>
                      </div>
                      <div className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </Alert>
                    <Alert className="alert-success mb-2">
                      <div className="flex items-center">
                        <div className="font-medium text-lg">
                          Awesome alert with additional info
                        </div>
                        <div className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto">
                          New
                        </div>
                      </div>
                      <div className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </Alert>
                    <Alert className="alert-warning mb-2">
                      <div className="flex items-center">
                        <div className="font-medium text-lg">
                          Awesome alert with additional info
                        </div>
                        <div className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto">
                          New
                        </div>
                      </div>
                      <div className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </Alert>
                    <Alert className="alert-pending mb-2">
                      <div className="flex items-center">
                        <div className="font-medium text-lg">
                          Awesome alert with additional info
                        </div>
                        <div className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto">
                          New
                        </div>
                      </div>
                      <div className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </Alert>
                    <Alert className="alert-danger mb-2">
                      <div className="flex items-center">
                        <div className="font-medium text-lg">
                          Awesome alert with additional info
                        </div>
                        <div className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto">
                          New
                        </div>
                      </div>
                      <div className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </Alert>
                    <Alert className="alert-dark mb-2">
                      <div className="flex items-center">
                        <div className="font-medium text-lg">
                          Awesome alert with additional info
                        </div>
                        <div className="text-xs bg-slate-500 px-1 rounded-md text-white ml-auto">
                          New
                        </div>
                      </div>
                      <div className="mt-3">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                      </div>
                    </Alert>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Alert className="alert-primary mb-2">
                <div className="flex items-center">
                  <div className="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto"
                  >
                    New
                  </div>
                </div>
                <div className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </Alert>
              <Alert className="alert-secondary mb-2">
                <div className="flex items-center">
                  <div className="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    className="text-xs bg-slate-500 px-1 rounded-md text-white ml-auto"
                  >
                    New
                  </div>
                </div>
                <div className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </Alert>
              <Alert className="alert-success mb-2">
                <div className="flex items-center">
                  <div className="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto"
                  >
                    New
                  </div>
                </div>
                <div className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </Alert>
              <Alert className="alert-warning mb-2">
                <div className="flex items-center">
                  <div className="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto"
                  >
                    New
                  </div>
                </div>
                <div className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </Alert>
              <Alert className="alert-pending mb-2">
                <div className="flex items-center">
                  <div className="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto"
                  >
                    New
                  </div>
                </div>
                <div className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </Alert>
              <Alert className="alert-danger mb-2">
                <div className="flex items-center">
                  <div className="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    className="text-xs bg-white px-1 rounded-md text-slate-700 ml-auto"
                  >
                    New
                  </div>
                </div>
                <div className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </Alert>
              <Alert className="alert-dark mb-2">
                <div className="flex items-center">
                  <div className="font-medium text-lg">
                    Awesome alert with additional info
                  </div>
                  <div
                    className="text-xs bg-slate-500 px-1 rounded-md text-white ml-auto"
                  >
                    New
                  </div>
                </div>
                <div className="mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </div>
              </Alert>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Additional Content Alert */}
          {/* BEGIN: Icon & Dismiss Alert */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Icon & Dismiss Alerts
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
                    <Alert className="alert-primary flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                          Awesome alert with icon
                          <button
                            type="button"
                            className="btn-close text-white"
                            aria-label="Close"
                            onClick={dismiss}
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </Alert>
                    <Alert className="alert-secondary flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertOctagon"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={dismiss}
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </Alert>
                    <Alert className="alert-success flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertTriangle"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={dismiss}
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </Alert>
                    <Alert className="alert-warning flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                          Awesome alert with icon
                          <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={dismiss}
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </Alert>
                    <Alert className="alert-pending flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertTriangle"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={dismiss}
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </Alert>
                    <Alert className="alert-danger flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertOctagon"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <button
                            type="button"
                            className="btn-close text-white"
                            aria-label="Close"
                            onClick={dismiss}
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </Alert>
                    <Alert className="alert-dark flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertTriangle"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <button
                            type="button"
                            className="btn-close text-white"
                            aria-label="Close"
                            onClick={dismiss}
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </Alert>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Alert className="alert-primary flex items-center mb-2">
              {({ dismiss }) => (
                <>
                  <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" /> Awesome
                  alert with icon
                  <button
                    type="button"
                    className="btn-close text-white"
                    aria-label="Close"
                    onClick={dismiss}
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </button>
                </>
              )}
            </Alert>
            <Alert className="alert-secondary flex items-center mb-2">
              {({ dismiss }) => (
                <>
                  <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" /> Awesome
                  alert with icon
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={dismiss}
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </button>
                </>
              )}
            </Alert>
            <Alert className="alert-success flex items-center mb-2">
              {({ dismiss }) => (
                <>
                  <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" /> Awesome
                  alert with icon
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={dismiss}
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </button>
                </>
              )}
            </Alert>
            <Alert className="alert-warning flex items-center mb-2">
              {({ dismiss }) => (
                <>
                  <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" /> Awesome
                  alert with icon
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={dismiss}
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </button>
                </>
              )}
            </Alert>
            <Alert className="alert-pending flex items-center mb-2">
              {({ dismiss }) => (
                <>
                  <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" /> Awesome
                  alert with icon
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={dismiss}
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </button>
                </>
              )}
            </Alert>
            <Alert className="alert-danger flex items-center mb-2">
              {({ dismiss }) => (
                <>
                  <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" /> Awesome
                  alert with icon
                  <button
                    type="button"
                    className="btn-close text-white"
                    aria-label="Close"
                    onClick={dismiss}
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </button>
                </>
              )}
            </Alert>
            <Alert className="alert-dark flex items-center mb-2">
              {({ dismiss }) => (
                <>
                  <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" /> Awesome
                  alert with icon
                  <button
                    type="button"
                    className="btn-close text-white"
                    aria-label="Close"
                    onClick={dismiss}
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </button>
                </>
              )}
            </Alert>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Icon & Dismiss Alert */}
          {/* BEGIN: Outline Alert */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Outline Alerts
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
                    <Alert className="alert-outline-primary flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                          Awesome alert with icon
                          <button
                            type="button"
                            className="btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </Alert>
                    <Alert className="alert-outline-secondary flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertOctagon"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <button
                            type="button"
                            className="btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </Alert>
                    <Alert className="alert-outline-success flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertTriangle"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <button
                            type="button"
                            className="btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </Alert>
                    <Alert className="alert-outline-warning flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                          Awesome alert with icon
                          <button
                            type="button"
                            className="btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </Alert>
                    <Alert className="alert-outline-pending flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                          Awesome alert with icon
                          <button
                            type="button"
                            className="btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </Alert>
                    <Alert className="alert-outline-danger flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertOctagon"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <button
                            type="button"
                            className="btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </Alert>
                    <Alert className="alert-outline-dark flex items-center mb-2">
                      {({ dismiss }) => (
                        <>
                          <Lucide
                            icon="AlertTriangle"
                            className="w-6 h-6 mr-2"
                          />{" "}
                          Awesome alert with icon
                          <button
                            type="button"
                            className="btn-close"
                            onClick={dismiss}
                            aria-label="Close"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </Alert>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Alert className="alert-outline-primary flex items-center mb-2">
              {({ dismiss }) => (
                <>
                  <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" /> Awesome
                  alert with icon
                  <button
                    type="button"
                    className="btn-close"
                    onClick={dismiss}
                    aria-label="Close"
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </button>
                </>
              )}
            </Alert>
            <Alert className="alert-outline-secondary flex items-center mb-2">
              {({ dismiss }) => (
                <>
                  <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" /> Awesome
                  alert with icon
                  <button
                    type="button"
                    className="btn-close"
                    onClick={dismiss}
                    aria-label="Close"
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </button>
                </>
              )}
            </Alert>
            <Alert className="alert-outline-success flex items-center mb-2">
              {({ dismiss }) => (
                <>
                  <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" /> Awesome
                  alert with icon
                  <button
                    type="button"
                    className="btn-close"
                    onClick={dismiss}
                    aria-label="Close"
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </button>
                </>
              )}
            </Alert>
            <Alert className="alert-outline-warning flex items-center mb-2">
              {({ dismiss }) => (
                <>
                  <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" /> Awesome
                  alert with icon
                  <button
                    type="button"
                    className="btn-close"
                    onClick={dismiss}
                    aria-label="Close"
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </button>
                </>
              )}
            </Alert>
            <Alert className="alert-outline-pending flex items-center mb-2">
              {({ dismiss }) => (
                <>
                  <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" /> Awesome
                  alert with icon
                  <button
                    type="button"
                    className="btn-close"
                    onClick={dismiss}
                    aria-label="Close"
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </button>
                </>
              )}
            </Alert>
            <Alert className="alert-outline-danger flex items-center mb-2">
              {({ dismiss }) => (
                <>
                  <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" /> Awesome
                  alert with icon
                  <button
                    type="button"
                    className="btn-close"
                    onClick={dismiss}
                    aria-label="Close"
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </button>
                </>
              )}
            </Alert>
            <Alert className="alert-outline-dark flex items-center mb-2">
              {({ dismiss }) => (
                <>
                  <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" /> Awesome
                  alert with icon
                  <button
                    type="button"
                    className="btn-close"
                    onClick={dismiss}
                    aria-label="Close"
                  >
                    <Lucide icon="X" className="w-4 h-4" />
                  </button>
                </>
              )}
            </Alert>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Outline Alert */}
          {/* BEGIN: Soft Color Alert */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Soft Color Alerts
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
                    <Alert className="alert-primary-soft flex items-center mb-2">
                      <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert className="alert-secondary-soft flex items-center mb-2">
                      <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert className="alert-success-soft flex items-center mb-2">
                      <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert className="alert-warning-soft flex items-center mb-2">
                      <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert className="alert-pending-soft flex items-center mb-2">
                      <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert className="alert-danger-soft flex items-center mb-2">
                      <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                    <Alert className="alert-dark-soft flex items-center mb-2">
                      <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" />{" "}
                      Awesome alert with icon
                    </Alert>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <Alert className="alert-primary-soft flex items-center mb-2">
                <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" /> Awesome alert with icon
              </Alert>
              <Alert className="alert-secondary-soft flex items-center mb-2">
                <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" /> Awesome alert with
                icon
              </Alert>
              <Alert className="alert-success-soft flex items-center mb-2">
                <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" /> Awesome alert with
                icon
              </Alert>
              <Alert className="alert-warning-soft flex items-center mb-2">
                <Lucide icon="AlertCircle" className="w-6 h-6 mr-2" /> Awesome alert with icon
              </Alert>
              <Alert className="alert-pending-soft flex items-center mb-2">
                <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" /> Awesome alert with
                icon
              </Alert>
              <Alert className="alert-danger-soft flex items-center mb-2">
                <Lucide icon="AlertOctagon" className="w-6 h-6 mr-2" /> Awesome alert with
                icon
              </Alert>
              <Alert className="alert-dark-soft flex items-center mb-2">
                <Lucide icon="AlertTriangle" className="w-6 h-6 mr-2" /> Awesome alert with
                icon
              </Alert>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Soft Color Alert */}
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
                Alert are built using the
                <span className="text-red-500">`Alert`</span> components.
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
              <div className="text-base font-medium">Alert</div>
              <div className="mt-2">The main Alert component.</div>
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
                      Whether the Alert is open or not.
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
                      This event is fired when the alert has been made visible
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
                      This event is fired when the alert has finished being
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
                    <td className="align-top">Manually hides an alert.</td>
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
