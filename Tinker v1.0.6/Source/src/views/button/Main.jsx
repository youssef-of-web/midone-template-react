import {
  Lucide,
  LoadingIcon,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";

function Main() {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Buttons</h2>
      </div>
      <div className="intro-y grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Basic Button */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Basic Buttons
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
                    <button className="btn btn-primary w-24 mr-1 mb-2">
                      Primary
                    </button>
                    <button className="btn btn-secondary w-24 mr-1 mb-2">
                      Secondary
                    </button>
                    <button className="btn btn-success w-24 mr-1 mb-2">
                      Success
                    </button>
                    <button className="btn btn-warning w-24 mr-1 mb-2">
                      Warning
                    </button>
                    <button className="btn btn-pending w-24 mr-1 mb-2">
                      Pending
                    </button>
                    <button className="btn btn-danger w-24 mr-1 mb-2">
                      Danger
                    </button>
                    <button className="btn btn-dark w-24 mr-1 mb-2">
                      Dark
                    </button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <button className="btn btn-primary w-24 mr-1 mb-2">Primary</button>
              <button className="btn btn-secondary w-24 mr-1 mb-2">
                Secondary
              </button>
              <button className="btn btn-success w-24 mr-1 mb-2">Success</button>
              <button className="btn btn-warning w-24 mr-1 mb-2">Warning</button>
              <button className="btn btn-pending w-24 mr-1 mb-2">Pending</button>
              <button className="btn btn-danger w-24 mr-1 mb-2">Danger</button>
              <button className="btn btn-dark w-24 mr-1 mb-2">Dark</button>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Button */}
          {/* BEGIN: Button Size */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Button Sizes
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
                    <div>
                      <button className="btn btn-sm btn-primary w-24 mr-1 mb-2">
                        Small
                      </button>
                      <button className="btn btn-primary w-24 mr-1 mb-2">
                        Medium
                      </button>
                      <button className="btn btn-lg btn-primary w-24 mr-1 mb-2">
                        Large
                      </button>
                    </div>
                    <div className="mt-5">
                      <button className="btn btn-sm btn-secondary w-24 mr-1 mb-2">
                        Small
                      </button>
                      <button className="btn btn-secondary w-24 mr-1 mb-2">
                        Medium
                      </button>
                      <button className="btn btn-lg btn-secondary w-24 mr-1 mb-2">
                        Large
                      </button>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <button className="btn btn-sm btn-primary w-24 mr-1 mb-2">
                  Small
                </button>
                <button className="btn btn-primary w-24 mr-1 mb-2">Medium</button>
                <button className="btn btn-lg btn-primary w-24 mr-1 mb-2">
                  Large
                </button>
              </div>
              <div className="mt-5">
                <button className="btn btn-sm btn-secondary w-24 mr-1 mb-2">
                  Small
                </button>
                <button className="btn btn-secondary w-24 mr-1 mb-2">Medium</button>
                <button className="btn btn-lg btn-secondary w-24 mr-1 mb-2">
                  Large
                </button>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Button Size */}
          {/* BEGIN: Button Link */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Working with Links
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
                    <a
                      href=""
                      className="btn btn-primary w-24 inline-block mr-1 mb-2"
                    >
                      Link
                    </a>
                    <a
                      href=""
                      className="btn btn-secondary w-24 inline-block mr-1 mb-2"
                    >
                      Button
                    </a>
                    <a
                      href=""
                      className="btn btn-success w-24 inline-block mr-1 mb-2"
                    >
                      Input
                    </a>
                    <a
                      href=""
                      className="btn btn-warning w-24 inline-block mr-1 mb-2"
                    >
                      Submit
                    </a>
                    <a
                      href=""
                      className="btn btn-pending w-24 inline-block mr-1 mb-2"
                    >
                      Pending
                    </a>
                    <a
                      href=""
                      className="btn btn-danger w-24 inline-block mr-1 mb-2"
                    >
                      Reset
                    </a>
                    <a
                      href=""
                      className="btn btn-dark w-24 inline-block mr-1 mb-2"
                    >
                      Metal
                    </a>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <a href="" className="btn btn-primary w-24 inline-block mr-1 mb-2"
                >Link</a
              >
              <a href="" className="btn btn-secondary w-24 inline-block mr-1 mb-2"
                >Button</a
              >
              <a href="" className="btn btn-success w-24 inline-block mr-1 mb-2"
                >Input</a
              >
              <a href="" className="btn btn-warning w-24 inline-block mr-1 mb-2"
                >Submit</a
              >
              <a href="" className="btn btn-pending w-24 inline-block mr-1 mb-2"
                >Pending</a
              >
              <a href="" className="btn btn-danger w-24 inline-block mr-1 mb-2"
                >Reset</a
              >
              <a href="" className="btn btn-dark w-24 inline-block mr-1 mb-2"
                >Metal</a
              >
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Button Link */}
          {/* BEGIN: Elevated Button */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Elevated Buttons
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
                    <div>
                      <button className="btn btn-elevated-primary w-24 mr-1 mb-2">
                        Primary
                      </button>
                      <button className="btn btn-elevated-secondary w-24 mr-1 mb-2">
                        Secondary
                      </button>
                      <button className="btn btn-elevated-success w-24 mr-1 mb-2">
                        Success
                      </button>
                      <button className="btn btn-elevated-warning w-24 mr-1 mb-2">
                        Warning
                      </button>
                      <button className="btn btn-elevated-pending w-24 mr-1 mb-2">
                        Pending
                      </button>
                      <button className="btn btn-elevated-danger w-24 mr-1 mb-2">
                        Danger
                      </button>
                      <button className="btn btn-elevated-dark w-24 mr-1 mb-2">
                        Dark
                      </button>
                    </div>
                    <div className="mt-5">
                      <button className="btn btn-elevated-rounded-primary w-24 mr-1 mb-2">
                        Primary
                      </button>
                      <button className="btn btn-elevated-rounded-secondary w-24 mr-1 mb-2">
                        Secondary
                      </button>
                      <button className="btn btn-elevated-rounded-success w-24 mr-1 mb-2">
                        Success
                      </button>
                      <button className="btn btn-elevated-rounded-warning w-24 mr-1 mb-2">
                        Warning
                      </button>
                      <button className="btn btn-elevated-rounded-pending w-24 mr-1 mb-2">
                        Pending
                      </button>
                      <button className="btn btn-elevated-rounded-danger w-24 mr-1 mb-2">
                        Danger
                      </button>
                      <button className="btn btn-elevated-rounded-dark w-24 mr-1 mb-2">
                        Dark
                      </button>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <button className="btn btn-elevated-primary w-24 mr-1 mb-2">
                  Primary
                </button>
                <button className="btn btn-elevated-secondary w-24 mr-1 mb-2">
                  Secondary
                </button>
                <button className="btn btn-elevated-success w-24 mr-1 mb-2">
                  Success
                </button>
                <button className="btn btn-elevated-warning w-24 mr-1 mb-2">
                  Warning
                </button>
                <button className="btn btn-elevated-pending w-24 mr-1 mb-2">
                  Pending
                </button>
                <button className="btn btn-elevated-danger w-24 mr-1 mb-2">
                  Danger
                </button>
                <button className="btn btn-elevated-dark w-24 mr-1 mb-2">
                  Dark
                </button>
              </div>
              <div className="mt-5">
                <button className="btn btn-elevated-rounded-primary w-24 mr-1 mb-2">
                  Primary
                </button>
                <button
                  className="btn btn-elevated-rounded-secondary w-24 mr-1 mb-2"
                >
                  Secondary
                </button>
                <button className="btn btn-elevated-rounded-success w-24 mr-1 mb-2">
                  Success
                </button>
                <button className="btn btn-elevated-rounded-warning w-24 mr-1 mb-2">
                  Warning
                </button>
                <button className="btn btn-elevated-rounded-pending w-24 mr-1 mb-2">
                  Pending
                </button>
                <button className="btn btn-elevated-rounded-danger w-24 mr-1 mb-2">
                  Danger
                </button>
                <button className="btn btn-elevated-rounded-dark w-24 mr-1 mb-2">
                  Dark
                </button>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Elevated Button */}
          {/* BEGIN: Social Media Button */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Social Media Buttons
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
                    <div className="flex flex-wrap">
                      <button className="btn btn-facebook w-32 mr-2 mb-2">
                        <Lucide icon="Facebook" className="w-4 h-4 mr-2" />{" "}
                        Facebook
                      </button>
                      <button className="btn btn-twitter w-32 mr-2 mb-2">
                        <Lucide icon="Twitter" className="w-4 h-4 mr-2" />{" "}
                        Twitter
                      </button>
                      <button className="btn btn-instagram w-32 mr-2 mb-2">
                        <Lucide icon="Instagram" className="w-4 h-4 mr-2" />{" "}
                        Instagram
                      </button>
                      <button className="btn btn-linkedin w-32 mr-2 mb-2">
                        <Lucide icon="Linkedin" className="w-4 h-4 mr-2" />{" "}
                        Linkedin
                      </button>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <button className="btn btn-facebook w-32 mr-2 mb-2">
                <Lucide icon="Facebook" className="w-4 h-4 mr-2" /> Facebook
              </button>
              <button className="btn btn-twitter w-32 mr-2 mb-2">
                <Lucide icon="Twitter" className="w-4 h-4 mr-2" /> Twitter
              </button>
              <button className="btn btn-instagram w-32 mr-2 mb-2">
                <Lucide icon="Instagram" className="w-4 h-4 mr-2" /> Instagram
              </button>
              <button className="btn btn-linkedin w-32 mr-2 mb-2">
                <Lucide icon="Linkedin" className="w-4 h-4 mr-2" /> Linkedin
              </button>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Social Media Button */}
        </div>
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Outline Button */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Outline Buttons
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
                    <button className="btn btn-outline-primary w-24 inline-block mr-1 mb-2">
                      Primary
                    </button>
                    <button className="btn btn-outline-secondary w-24 inline-block mr-1 mb-2">
                      Secondary
                    </button>
                    <button className="btn btn-outline-success w-24 inline-block mr-1 mb-2">
                      Success
                    </button>
                    <button className="btn btn-outline-warning w-24 inline-block mr-1 mb-2">
                      Warning
                    </button>
                    <button className="btn btn-outline-pending w-24 inline-block mr-1 mb-2">
                      Pending
                    </button>
                    <button className="btn btn-outline-danger w-24 inline-block mr-1 mb-2">
                      Danger
                    </button>
                    <button className="btn btn-outline-dark w-24 inline-block mr-1 mb-2">
                      Dark
                    </button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <button
                className="btn btn-outline-primary w-24 inline-block mr-1 mb-2"
              >
                Primary
              </button>
              <button
                className="btn btn-outline-secondary w-24 inline-block mr-1 mb-2"
              >
                Secondary
              </button>
              <button
                className="btn btn-outline-success w-24 inline-block mr-1 mb-2"
              >
                Success
              </button>
              <button
                className="btn btn-outline-warning w-24 inline-block mr-1 mb-2"
              >
                Warning
              </button>
              <button
                className="btn btn-outline-pending w-24 inline-block mr-1 mb-2"
              >
                Pending
              </button>
              <button
                className="btn btn-outline-danger w-24 inline-block mr-1 mb-2"
              >
                Danger
              </button>
              <button className="btn btn-outline-dark w-24 inline-block mr-1 mb-2">
                Dark
              </button>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Outline Button */}
          {/* BEGIN: Loading Button */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Loading State Buttons
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
                    <button className="btn btn-primary mr-1 mb-2">
                      Saving
                      <LoadingIcon
                        icon="oval"
                        color="white"
                        className="w-4 h-4 ml-2"
                      />
                    </button>
                    <button className="btn btn-success mr-1 mb-2">
                      Adding
                      <LoadingIcon
                        icon="spinning-circles"
                        color="white"
                        className="w-4 h-4 ml-2"
                      />
                    </button>
                    <button className="btn btn-warning mr-1 mb-2">
                      Loading
                      <LoadingIcon
                        icon="three-dots"
                        color="1a202c"
                        className="w-4 h-4 ml-2"
                      />
                    </button>
                    <button className="btn btn-danger mr-1 mb-2">
                      Deleting
                      <LoadingIcon
                        icon="puff"
                        color="white"
                        className="w-4 h-4 ml-2"
                      />
                    </button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <button className="btn btn-primary mr-1 mb-2">
                Saving
                <LoadingIcon icon="oval" color="white" className="w-4 h-4 ml-2" />
              </button>
              <button className="btn btn-success mr-1 mb-2">
                Adding
                <LoadingIcon
                  icon="spinning-circles"
                  color="white"
                  className="w-4 h-4 ml-2"
                />
              </button>
              <button className="btn btn-warning mr-1 mb-2">
                Loading
                <LoadingIcon
                  icon="three-dots"
                  color="1a202c"
                  className="w-4 h-4 ml-2"
                />
              </button>
              <button className="btn btn-danger mr-1 mb-2">
                Deleting
                <LoadingIcon icon="puff" color="white" className="w-4 h-4 ml-2" />
              </button>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Loading Button */}
          {/* BEGIN: Rounded Button */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Rounded Buttons
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
                    <button className="btn btn-rounded-primary w-24 mr-1 mb-2">
                      Primary
                    </button>
                    <button className="btn btn-rounded-secondary w-24 mr-1 mb-2">
                      Secondary
                    </button>
                    <button className="btn btn-rounded-success w-24 mr-1 mb-2">
                      Success
                    </button>
                    <button className="btn btn-rounded-warning w-24 mr-1 mb-2">
                      Warning
                    </button>
                    <button className="btn btn-rounded-pending w-24 mr-1 mb-2">
                      Pending
                    </button>
                    <button className="btn btn-rounded-danger w-24 mr-1 mb-2">
                      Danger
                    </button>
                    <button className="btn btn-rounded-dark w-24 mr-1 mb-2">
                      Dark
                    </button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <button className="btn btn-rounded-primary w-24 mr-1 mb-2">
                Primary
              </button>
              <button className="btn btn-rounded-secondary w-24 mr-1 mb-2">
                Secondary
              </button>
              <button className="btn btn-rounded-success w-24 mr-1 mb-2">
                Success
              </button>
              <button className="btn btn-rounded-warning w-24 mr-1 mb-2">
                Warning
              </button>
              <button className="btn btn-rounded-pending w-24 mr-1 mb-2">
                Pending
              </button>
              <button className="btn btn-rounded-danger w-24 mr-1 mb-2">
                Danger
              </button>
              <button className="btn btn-rounded-dark w-24 mr-1 mb-2">Dark</button>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Rounded Button */}
          {/* BEGIN: Soft Color Button */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Soft Color Buttons
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
                    <button className="btn btn-rounded btn-primary-soft w-24 mr-1 mb-2">
                      Primary
                    </button>
                    <button className="btn btn-rounded btn-secondary-soft w-24 mr-1 mb-2">
                      Secondary
                    </button>
                    <button className="btn btn-rounded btn-success-soft w-24 mr-1 mb-2">
                      Success
                    </button>
                    <button className="btn btn-rounded btn-warning-soft w-24 mr-1 mb-2">
                      Warning
                    </button>
                    <button className="btn btn-rounded btn-pending-soft w-24 mr-1 mb-2">
                      Pending
                    </button>
                    <button className="btn btn-rounded btn-danger-soft w-24 mr-1 mb-2">
                      Danger
                    </button>
                    <button className="btn btn-rounded btn-dark-soft w-24 mr-1 mb-2">
                      Dark
                    </button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <button className="btn btn-rounded btn-primary-soft w-24 mr-1 mb-2">
                Primary
              </button>
              <button className="btn btn-rounded btn-secondary-soft w-24 mr-1 mb-2">
                Secondary
              </button>
              <button className="btn btn-rounded btn-success-soft w-24 mr-1 mb-2">
                Success
              </button>
              <button className="btn btn-rounded btn-warning-soft w-24 mr-1 mb-2">
                Warning
              </button>
              <button className="btn btn-rounded btn-pending-soft w-24 mr-1 mb-2">
                Pending
              </button>
              <button className="btn btn-rounded btn-danger-soft w-24 mr-1 mb-2">
                Danger
              </button>
              <button className="btn btn-rounded btn-dark-soft w-24 mr-1 mb-2">
                Dark
              </button>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Soft Color Button */}
          {/* BEGIN: Icon Button */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Icon Buttons
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
                    <div className="flex flex-wrap">
                      <button className="btn btn-primary w-32 mr-2 mb-2">
                        <Lucide icon="Activity" className="w-4 h-4 mr-2" />{" "}
                        Activity
                      </button>
                      <button className="btn btn-secondary w-32 mr-2 mb-2">
                        <Lucide icon="HardDrive" className="w-4 h-4 mr-2" />{" "}
                        Hard Drive
                      </button>
                      <button className="btn btn-success w-32 mr-2 mb-2">
                        <Lucide icon="Calendar" className="w-4 h-4 mr-2" />{" "}
                        Calendar
                      </button>
                      <button className="btn btn-warning w-32 mr-2 mb-2">
                        <Lucide icon="Share2" className="w-4 h-4 mr-2" /> Share
                      </button>
                      <button className="btn btn-pending w-32 mr-2 mb-2">
                        <Lucide icon="Download" className="w-4 h-4 mr-2" />{" "}
                        Pending
                      </button>
                      <button className="btn btn-danger w-32 mr-2 mb-2">
                        <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Trash
                      </button>
                      <button className="btn btn-dark w-32 mr-2 mb-2">
                        <Lucide icon="Image" className="w-4 h-4 mr-2" /> Image
                      </button>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <button className="btn btn-primary w-32 mr-2 mb-2">
                <Lucide icon="Activity" className="w-4 h-4 mr-2" /> Activity
              </button>
              <button className="btn btn-secondary w-32 mr-2 mb-2">
                <Lucide icon="HardDrive" className="w-4 h-4 mr-2" /> Hard Drive
              </button>
              <button className="btn btn-success w-32 mr-2 mb-2">
                <Lucide icon="Calendar" className="w-4 h-4 mr-2" /> Calendar
              </button>
              <button className="btn btn-warning w-32 mr-2 mb-2">
                <Lucide icon="Share2" className="w-4 h-4 mr-2" /> Share
              </button>
              <button className="btn btn-pending w-32 mr-2 mb-2">
                <Lucide icon="Download" className="w-4 h-4 mr-2" /> Pending
              </button>
              <button className="btn btn-danger w-32 mr-2 mb-2">
                <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Trash
              </button>
              <button className="btn btn-dark w-32 mr-2 mb-2">
                <Lucide icon="Image" className="w-4 h-4 mr-2" /> Image
              </button>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Icon Button */}
          {/* BEGIN: Icon Only Button */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Icon Only Buttons
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
                    <button className="btn btn-primary mr-1 mb-2">
                      <Lucide icon="Activity" className="w-5 h-5" />
                    </button>
                    <button className="btn btn-secondary mr-1 mb-2">
                      <Lucide icon="HardDrive" className="w-5 h-5" />
                    </button>
                    <button className="btn btn-success mr-1 mb-2">
                      <Lucide icon="Calendar" className="w-5 h-5" />
                    </button>
                    <button className="btn btn-warning mr-1 mb-2">
                      <Lucide icon="Share2" className="w-5 h-5" />
                    </button>
                    <button className="btn btn-pending mr-1 mb-2">
                      <Lucide icon="Download" className="w-5 h-5" />
                    </button>
                    <button className="btn btn-danger mr-1 mb-2">
                      <Lucide icon="Trash" className="w-5 h-5" />
                    </button>
                    <button className="btn btn-dark mr-1 mb-2">
                      <Lucide icon="Image" className="w-5 h-5" />
                    </button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <button className="btn btn-primary mr-1 mb-2">
                <Lucide icon="Activity" className="w-5 h-5" />
              </button>
              <button className="btn btn-secondary mr-1 mb-2">
                <Lucide icon="HardDrive" className="w-5 h-5" />
              </button>
              <button className="btn btn-success mr-1 mb-2">
                <Lucide icon="Calendar" className="w-5 h-5" />
              </button>
              <button className="btn btn-warning mr-1 mb-2">
                <Lucide icon="Share2" className="w-5 h-5" />
              </button>
              <button className="btn btn-pending mr-1 mb-2">
                <Lucide icon="Download" className="w-5 h-5" />
              </button>
              <button className="btn btn-danger mr-1 mb-2">
                <Lucide icon="Trash" className="w-5 h-5" />
              </button>
              <button className="btn btn-dark mr-1 mb-2">
                <Lucide icon="Image" className="w-5 h-5" />
              </button>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Icon Only Button */}
        </div>
      </div>
    </>
  );
}

export default Main;
