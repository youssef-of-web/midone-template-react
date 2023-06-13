import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";

function Main() {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Regular Form</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Input */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Input</h2>
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
                    <div>
                      <label htmlFor="regular-form-1" className="form-label">
                        Input Text
                      </label>
                      <input
                        id="regular-form-1"
                        type="text"
                        className="form-control"
                        placeholder="Input text"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="regular-form-2" className="form-label">
                        Rounded
                      </label>
                      <input
                        id="regular-form-2"
                        type="text"
                        className="form-control form-control-rounded"
                        placeholder="Rounded"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="regular-form-3" className="form-label">
                        With Help
                      </label>
                      <input
                        id="regular-form-3"
                        type="text"
                        className="form-control"
                        placeholder="With help"
                      />
                      <div className="form-help">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </div>
                    </div>
                    <div className="mt-3">
                      <label htmlFor="regular-form-4" className="form-label">
                        Password
                      </label>
                      <input
                        id="regular-form-4"
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="regular-form-5" className="form-label">
                        Disabled
                      </label>
                      <input
                        id="regular-form-5"
                        type="text"
                        className="form-control"
                        placeholder="Disabled"
                        disabled
                      />
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <label htmlFor="regular-form-1" className="form-label"
                  >Input Text</label
                >
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control"
                  placeholder="Input text"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="regular-form-2" className="form-label">Rounded</label>
                <input
                  id="regular-form-2"
                  type="text"
                  className="form-control form-control-rounded"
                  placeholder="Rounded"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="regular-form-3" className="form-label">With Help</label>
                <input
                  id="regular-form-3"
                  type="text"
                  className="form-control"
                  placeholder="With help"
                />
                <div className="form-help">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="regular-form-4" className="form-label">Password</label>
                <input
                  id="regular-form-4"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="regular-form-5" className="form-label">Disabled</label>
                <input
                  id="regular-form-5"
                  type="text"
                  className="form-control"
                  placeholder="Disabled"
                  disabled
                />
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Input */}
          {/* BEGIN: Input Sizing */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Input Sizing
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
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder=".form-control-lg"
                      aria-label=".form-control-lg example"
                    />
                    <input
                      type="text"
                      className="form-control mt-2"
                      placeholder="Default input"
                      aria-label="default input example"
                    />
                    <input
                      type="text"
                      className="form-control form-control-sm mt-2"
                      placeholder=".form-control-sm"
                      aria-label=".form-control-sm example"
                    />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder=".form-control-lg"
                aria-label=".form-control-lg example"
              />
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Default input"
                aria-label="default input example"
              />
              <input
                type="text"
                className="form-control form-control-sm mt-2"
                placeholder=".form-control-sm"
                aria-label=".form-control-sm example"
              />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Input Sizing */}
          {/* BEGIN: Input Groups */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Input Groups
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
                    <div className="input-group">
                      <div id="input-group-email" className="input-group-text">
                        @
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="input-group-email"
                      />
                    </div>
                    <div className="input-group mt-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Price"
                        aria-label="Price"
                        aria-describedby="input-group-price"
                      />
                      <div id="input-group-price" className="input-group-text">
                        .00
                      </div>
                    </div>
                    <div className="input-group mt-2">
                      <div className="input-group-text">@</div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Price"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <div className="input-group-text">.00</div>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="input-group">
                <div id="input-group-email" className="input-group-text">@</div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="input-group-email"
                />
              </div>
              <div className="input-group mt-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  aria-label="Price"
                  aria-describedby="input-group-price"
                />
                <div id="input-group-price" className="input-group-text">.00</div>
              </div>
              <div className="input-group mt-2">
                <div className="input-group-text">@</div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Price"
                  aria-label="Amount (to the nearest dollar)"
                />
                <div className="input-group-text">.00</div>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Input Groups */}
          {/* BEGIN: Input State */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Input State</h2>
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
                      <label htmlFor="input-state-1" className="form-label">
                        Input Success
                      </label>
                      <input
                        id="input-state-1"
                        type="text"
                        className="form-control border-success"
                        placeholder="Input text"
                      />
                      <div className="w-full grid grid-cols-12 gap-4 h-1 mt-3">
                        <div className="col-span-3 h-full rounded bg-success"></div>
                        <div className="col-span-3 h-full rounded bg-success"></div>
                        <div className="col-span-3 h-full rounded bg-success"></div>
                        <div className="col-span-3 h-full rounded bg-slate-100 dark:bg-darkmode-800"></div>
                      </div>
                      <div className="text-success mt-2">Strong password</div>
                    </div>
                    <div className="mt-3">
                      <label htmlFor="input-state-2" className="form-label">
                        Input Warning
                      </label>
                      <input
                        id="input-state-2"
                        type="text"
                        className="form-control border-warning"
                        placeholder="Input text"
                      />
                      <div className="text-warning mt-2">
                        Attempting to reconnect to server...
                      </div>
                    </div>
                    <div className="mt-3">
                      <label htmlFor="input-state-3" className="form-label">
                        Input Error
                      </label>
                      <input
                        id="input-state-3"
                        type="text"
                        className="form-control border-danger"
                        placeholder="Input text"
                      />
                      <div className="text-danger mt-2">
                        This field is required
                      </div>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <label htmlFor="input-state-1" className="form-label"
                  >Input Success</label
                >
                <input
                  id="input-state-1"
                  type="text"
                  className="form-control border-success"
                  placeholder="Input text"
                />
                <div className="w-full grid grid-cols-12 gap-4 h-1 mt-3">
                  <div className="col-span-3 h-full rounded bg-success"></div>
                  <div className="col-span-3 h-full rounded bg-success"></div>
                  <div className="col-span-3 h-full rounded bg-success"></div>
                  <div
                    className="col-span-3 h-full rounded bg-slate-100 dark:bg-darkmode-800"
                  ></div>
                </div>
                <div className="text-success mt-2">Strong password</div>
              </div>
              <div className="mt-3">
                <label htmlFor="input-state-2" className="form-label"
                  >Input Warning</label
                >
                <input
                  id="input-state-2"
                  type="text"
                  className="form-control border-warning"
                  placeholder="Input text"
                />
                <div className="text-warning mt-2">
                  Attempting to reconnect to server...
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="input-state-3" className="form-label"
                  >Input Error</label
                >
                <input
                  id="input-state-3"
                  type="text"
                  className="form-control border-danger"
                  placeholder="Input text"
                />
                <div className="text-danger mt-2">This field is required</div>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Input State */}
          {/* BEGIN: Select Options */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Select Options
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
                    <div className="flex flex-col sm:flex-row items-center">
                      <select
                        className="form-select form-select-lg sm:mt-2 sm:mr-2"
                        aria-label=".form-select-lg example"
                      >
                        <option>Chris Evans</option>
                        <option>Liam Neeson</option>
                        <option>Daniel Craig</option>
                      </select>
                      <select
                        className="form-select mt-2 sm:mr-2"
                        aria-label="Default select example"
                      >
                        <option>Chris Evans</option>
                        <option>Liam Neeson</option>
                        <option>Daniel Craig</option>
                      </select>
                      <select
                        className="form-select form-select-sm mt-2"
                        aria-label=".form-select-sm example"
                      >
                        <option>Chris Evans</option>
                        <option>Liam Neeson</option>
                        <option>Daniel Craig</option>
                      </select>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="flex flex-col sm:flex-row items-center">
                <select
                  className="form-select form-select-lg sm:mt-2 sm:mr-2"
                  aria-label=".form-select-lg example"
                >
                  <option>Chris Evans</option>
                  <option>Liam Neeson</option>
                  <option>Daniel Craig</option>
                </select>
                <select
                  className="form-select mt-2 sm:mr-2"
                  aria-label="Default select example"
                >
                  <option>Chris Evans</option>
                  <option>Liam Neeson</option>
                  <option>Daniel Craig</option>
                </select>
                <select
                  className="form-select form-select-sm mt-2"
                  aria-label=".form-select-sm example"
                >
                  <option>Chris Evans</option>
                  <option>Liam Neeson</option>
                  <option>Daniel Craig</option>
                </select>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Select Options */}
        </div>
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Vertical Form */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Vertical Form
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
                    <div>
                      <label htmlFor="vertical-form-1" className="form-label">
                        Email
                      </label>
                      <input
                        id="vertical-form-1"
                        type="text"
                        className="form-control"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="mt-3">
                      <label htmlFor="vertical-form-2" className="form-label">
                        Password
                      </label>
                      <input
                        id="vertical-form-2"
                        type="text"
                        className="form-control"
                        placeholder="secret"
                      />
                    </div>
                    <div className="form-check mt-5">
                      <input
                        id="vertical-form-3"
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="vertical-form-3"
                      >
                        Remember me
                      </label>
                    </div>
                    <button className="btn btn-primary mt-5">Login</button>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <label htmlFor="vertical-form-1" className="form-label">Email</label>
                <input
                  id="vertical-form-1"
                  type="text"
                  className="form-control"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="vertical-form-2" className="form-label">Password</label>
                <input
                  id="vertical-form-2"
                  type="text"
                  className="form-control"
                  placeholder="secret"
                />
              </div>
              <div className="form-check mt-5">
                <input
                  id="vertical-form-3"
                  className="form-check-input"
                  type="checkbox"
                  value=""
                />
                <label className="form-check-label" htmlFor="vertical-form-3"
                  >Remember me</label
                >
              </div>
              <button className="btn btn-primary mt-5">Login</button>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Vertical Form */}
          {/* BEGIN: Horizontal Form */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Horizontal Form
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
                    <div className="form-inline">
                      <label
                        htmlFor="horizontal-form-1"
                        className="form-label sm:w-20"
                      >
                        Email
                      </label>
                      <input
                        id="horizontal-form-1"
                        type="text"
                        className="form-control"
                        placeholder="example@gmail.com"
                      />
                    </div>
                    <div className="form-inline mt-5">
                      <label
                        htmlFor="horizontal-form-2"
                        className="form-label sm:w-20"
                      >
                        Password
                      </label>
                      <input
                        id="horizontal-form-2"
                        type="password"
                        className="form-control"
                        placeholder="secret"
                      />
                    </div>
                    <div className="form-check sm:ml-20 sm:pl-5 mt-5">
                      <input
                        id="horizontal-form-3"
                        className="form-check-input"
                        type="checkbox"
                        value=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="horizontal-form-3"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="sm:ml-20 sm:pl-5 mt-5">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="form-inline">
                <label htmlFor="horizontal-form-1" className="form-label sm:w-20"
                  >Email</label
                >
                <input
                  id="horizontal-form-1"
                  type="text"
                  className="form-control"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="form-inline mt-5">
                <label htmlFor="horizontal-form-2" className="form-label sm:w-20"
                  >Password</label
                >
                <input
                  id="horizontal-form-2"
                  type="password"
                  className="form-control"
                  placeholder="secret"
                />
              </div>
              <div className="form-check sm:ml-20 sm:pl-5 mt-5">
                <input
                  id="horizontal-form-3"
                  className="form-check-input"
                  type="checkbox"
                  value=""
                />
                <label className="form-check-label" htmlFor="horizontal-form-3"
                  >Remember me</label
                >
              </div>
              <div className="sm:ml-20 sm:pl-5 mt-5">
                <button className="btn btn-primary">Login</button>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Horizontal Form */}
          {/* BEGIN: Inline Form */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Inline Form</h2>
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
                    <div className="grid grid-cols-12 gap-2">
                      <input
                        type="text"
                        className="form-control col-span-4"
                        placeholder="Input inline 1"
                        aria-label="default input inline 1"
                      />
                      <input
                        type="text"
                        className="form-control col-span-4"
                        placeholder="Input inline 2"
                        aria-label="default input inline 2"
                      />
                      <input
                        type="text"
                        className="form-control col-span-4"
                        placeholder="Input inline 3"
                        aria-label="default input inline 3"
                      />
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="grid grid-cols-12 gap-2">
                <input
                  type="text"
                  className="form-control col-span-4"
                  placeholder="Input inline 1"
                  aria-label="default input inline 1"
                />
                <input
                  type="text"
                  className="form-control col-span-4"
                  placeholder="Input inline 2"
                  aria-label="default input inline 2"
                />
                <input
                  type="text"
                  className="form-control col-span-4"
                  placeholder="Input inline 3"
                  aria-label="default input inline 3"
                />
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Inline Form */}
          {/* BEGIN: Checkbox & Switch */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Checkbox & Switch
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
                    <div>
                      <label>Vertical Checkbox</label>
                      <div className="form-check mt-2">
                        <input
                          id="checkbox-switch-1"
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox-switch-1"
                        >
                          Chris Evans
                        </label>
                      </div>
                      <div className="form-check mt-2">
                        <input
                          id="checkbox-switch-2"
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox-switch-2"
                        >
                          Liam Neeson
                        </label>
                      </div>
                      <div className="form-check mt-2">
                        <input
                          id="checkbox-switch-3"
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox-switch-3"
                        >
                          Daniel Craig
                        </label>
                      </div>
                    </div>
                    <div className="mt-3">
                      <label>Horizontal Checkbox</label>
                      <div className="flex flex-col sm:flex-row mt-2">
                        <div className="form-check mr-2">
                          <input
                            id="checkbox-switch-4"
                            className="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox-switch-4"
                          >
                            Chris Evans
                          </label>
                        </div>
                        <div className="form-check mr-2 mt-2 sm:mt-0">
                          <input
                            id="checkbox-switch-5"
                            className="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox-switch-5"
                          >
                            Liam Neeson
                          </label>
                        </div>
                        <div className="form-check mr-2 mt-2 sm:mt-0">
                          <input
                            id="checkbox-switch-6"
                            className="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox-switch-6"
                          >
                            Daniel Craig
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <label>Switch</label>
                      <div className="mt-2">
                        <div className="form-check form-switch">
                          <input
                            id="checkbox-switch-7"
                            className="form-check-input"
                            type="checkbox"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="checkbox-switch-7"
                          >
                            Default switch checkbox input
                          </label>
                        </div>
                      </div>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <label>Vertical Checkbox</label>
                <div className="form-check mt-2">
                  <input
                    id="checkbox-switch-1"
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label" htmlFor="checkbox-switch-1"
                    >Chris Evans</label
                  >
                </div>
                <div className="form-check mt-2">
                  <input
                    id="checkbox-switch-2"
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label" htmlFor="checkbox-switch-2"
                    >Liam Neeson</label
                  >
                </div>
                <div className="form-check mt-2">
                  <input
                    id="checkbox-switch-3"
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label" htmlFor="checkbox-switch-3"
                    >Daniel Craig</label
                  >
                </div>
              </div>
              <div className="mt-3">
                <label>Horizontal Checkbox</label>
                <div className="flex flex-col sm:flex-row mt-2">
                  <div className="form-check mr-2">
                    <input
                      id="checkbox-switch-4"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label" htmlFor="checkbox-switch-4"
                      >Chris Evans</label
                    >
                  </div>
                  <div className="form-check mr-2 mt-2 sm:mt-0">
                    <input
                      id="checkbox-switch-5"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label" htmlFor="checkbox-switch-5"
                      >Liam Neeson</label
                    >
                  </div>
                  <div className="form-check mr-2 mt-2 sm:mt-0">
                    <input
                      id="checkbox-switch-6"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                    <label className="form-check-label" htmlFor="checkbox-switch-6"
                      >Daniel Craig</label
                    >
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <label>Switch</label>
                <div className="mt-2">
                  <div className="form-check form-switch">
                    <input
                      id="checkbox-switch-7"
                      className="form-check-input"
                      type="checkbox"
                    />
                    <label className="form-check-label" htmlFor="checkbox-switch-7"
                      >Default switch checkbox input</label
                    >
                  </div>
                </div>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Checkbox & Switch */}
          {/* BEGIN: Radio Button */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Radio</h2>
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
                    <div>
                      <label>Vertical Radio Button</label>
                      <div className="form-check mt-2">
                        <input
                          id="radio-switch-1"
                          className="form-check-input"
                          type="radio"
                          name="vertical_radio_button"
                          value="vertical-radio-chris-evans"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="radio-switch-1"
                        >
                          Chris Evans
                        </label>
                      </div>
                      <div className="form-check mt-2">
                        <input
                          id="radio-switch-2"
                          className="form-check-input"
                          type="radio"
                          name="vertical_radio_button"
                          value="vertical-radio-liam-neeson"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="radio-switch-2"
                        >
                          Liam Neeson
                        </label>
                      </div>
                      <div className="form-check mt-2">
                        <input
                          id="radio-switch-3"
                          className="form-check-input"
                          type="radio"
                          name="vertical_radio_button"
                          value="vertical-radio-daniel-craig"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="radio-switch-3"
                        >
                          Daniel Craig
                        </label>
                      </div>
                    </div>
                    <div className="mt-3">
                      <label>Horizontal Radio Button</label>
                      <div className="flex flex-col sm:flex-row mt-2">
                        <div className="form-check mr-2">
                          <input
                            id="radio-switch-4"
                            className="form-check-input"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-chris-evans"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="radio-switch-4"
                          >
                            Chris Evans
                          </label>
                        </div>
                        <div className="form-check mr-2 mt-2 sm:mt-0">
                          <input
                            id="radio-switch-5"
                            className="form-check-input"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-liam-neeson"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="radio-switch-5"
                          >
                            Liam Neeson
                          </label>
                        </div>
                        <div className="form-check mr-2 mt-2 sm:mt-0">
                          <input
                            id="radio-switch-6"
                            className="form-check-input"
                            type="radio"
                            name="horizontal_radio_button"
                            value="horizontal-radio-daniel-craig"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="radio-switch-6"
                          >
                            Daniel Craig
                          </label>
                        </div>
                      </div>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <label>Vertical Radio Button</label>
                <div className="form-check mt-2">
                  <input
                    id="radio-switch-1"
                    className="form-check-input"
                    type="radio"
                    name="vertical_radio_button"
                    value="vertical-radio-chris-evans"
                  />
                  <label className="form-check-label" htmlFor="radio-switch-1"
                    >Chris Evans</label
                  >
                </div>
                <div className="form-check mt-2">
                  <input
                    id="radio-switch-2"
                    className="form-check-input"
                    type="radio"
                    name="vertical_radio_button"
                    value="vertical-radio-liam-neeson"
                  />
                  <label className="form-check-label" htmlFor="radio-switch-2"
                    >Liam Neeson</label
                  >
                </div>
                <div className="form-check mt-2">
                  <input
                    id="radio-switch-3"
                    className="form-check-input"
                    type="radio"
                    name="vertical_radio_button"
                    value="vertical-radio-daniel-craig"
                  />
                  <label className="form-check-label" htmlFor="radio-switch-3"
                    >Daniel Craig</label
                  >
                </div>
              </div>
              <div className="mt-3">
                <label>Horizontal Radio Button</label>
                <div className="flex flex-col sm:flex-row mt-2">
                  <div className="form-check mr-2">
                    <input
                      id="radio-switch-4"
                      className="form-check-input"
                      type="radio"
                      name="horizontal_radio_button"
                      value="horizontal-radio-chris-evans"
                    />
                    <label className="form-check-label" htmlFor="radio-switch-4"
                      >Chris Evans</label
                    >
                  </div>
                  <div className="form-check mr-2 mt-2 sm:mt-0">
                    <input
                      id="radio-switch-5"
                      className="form-check-input"
                      type="radio"
                      name="horizontal_radio_button"
                      value="horizontal-radio-liam-neeson"
                    />
                    <label className="form-check-label" htmlFor="radio-switch-5"
                      >Liam Neeson</label
                    >
                  </div>
                  <div className="form-check mr-2 mt-2 sm:mt-0">
                    <input
                      id="radio-switch-6"
                      className="form-check-input"
                      type="radio"
                      name="horizontal_radio_button"
                      value="horizontal-radio-daniel-craig"
                    />
                    <label className="form-check-label" htmlFor="radio-switch-6"
                      >Daniel Craig</label
                    >
                  </div>
                </div>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Radio Button */}
        </div>
      </div>
    </>
  );
}

export default Main;
