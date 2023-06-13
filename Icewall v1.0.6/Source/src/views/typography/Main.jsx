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
        <h2 className="text-lg font-medium mr-auto">Typography</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Heading */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Heading</h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      for="show-example-1"
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
                      <h1 className="text-4xl font-medium leading-none">
                        h1. Heading 1
                      </h1>
                      <h2 className="text-3xl font-medium leading-none mt-3">
                        h2. Heading 2
                      </h2>
                      <h3 className="text-2xl font-medium leading-none mt-3">
                        h3. Heading 3
                      </h3>
                      <h4 className="text-xl font-medium leading-none mt-3">
                        h4. Heading 4
                      </h4>
                      <h5 className="text-lg font-medium leading-none mt-3">
                        h5. Heading 5
                      </h5>
                      <h6 className="font-medium leading-none mt-3">
                        h6. Heading 6
                      </h6>
                    </div>
                    <div className="mt-5">
                      <h1 className="text-4xl text-primary font-medium leading-none">
                        h1. Heading 1
                      </h1>
                      <h2 className="text-3xl text-slate-600 dark:text-slate-500 font-medium leading-none mt-3">
                        h2. Heading 2
                      </h2>
                      <h3 className="text-2xl text-success font-medium leading-none mt-3">
                        h3. Heading 3
                      </h3>
                      <h4 className="text-xl text-warning font-medium leading-none mt-3">
                        h4. Heading 4
                      </h4>
                      <h5 className="text-lg text-danger font-medium leading-none mt-3">
                        h5. Heading 5
                      </h5>
                      <h6 className="text-slate-500 font-medium leading-none mt-3">
                        h6. Heading 6
                      </h6>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <h1 className="text-4xl font-medium leading-none">h1. Heading 1</h1>
                <h2 className="text-3xl font-medium leading-none mt-3">
                  h2. Heading 2
                </h2>
                <h3 className="text-2xl font-medium leading-none mt-3">
                  h3. Heading 3
                </h3>
                <h4 className="text-xl font-medium leading-none mt-3">
                  h4. Heading 4
                </h4>
                <h5 className="text-lg font-medium leading-none mt-3">
                  h5. Heading 5
                </h5>
                <h6 className="font-medium leading-none mt-3">h6. Heading 6</h6>
              </div>
              <div className="mt-5">
                <h1 className="text-4xl text-primary font-medium leading-none">
                  h1. Heading 1
                </h1>
                <h2
                  className="text-3xl text-slate-600 dark:text-slate-500 font-medium leading-none mt-3"
                >
                  h2. Heading 2
                </h2>
                <h3 className="text-2xl text-success font-medium leading-none mt-3">
                  h3. Heading 3
                </h3>
                <h4 className="text-xl text-warning font-medium leading-none mt-3">
                  h4. Heading 4
                </h4>
                <h5 className="text-lg text-danger font-medium leading-none mt-3">
                  h5. Heading 5
                </h5>
                <h6 className="text-slate-500 font-medium leading-none mt-3">
                  h6. Heading 6
                </h6>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Heading */}
          {/* BEGIN: Text Settings */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Text Settings
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      for="show-example-2"
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
                      <div className="font-normal">Example text</div>
                      <div className="font-medium">Example medium text</div>
                      <div className="font-semibold">Example semibold text</div>
                      <div className="font-bold">Example bolder text</div>
                      <div className="font-extrabold">Example boldest text</div>
                    </div>
                    <div className="mt-5">
                      <div className="uppercase">Example uppercase text</div>
                      <div className="lowercase">Example lowercase text</div>
                      <div className="capitalize">Example capitalized text</div>
                      <div className="normal-case">Example cursive text</div>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <div className="font-normal">Example text</div>
                <div className="font-medium">Example medium text</div>
                <div className="font-semibold">Example semibold text</div>
                <div className="font-bold">Example bolder text</div>
                <div className="font-extrabold">Example boldest text</div>
              </div>
              <div className="mt-5">
                <div className="uppercase">Example uppercase text</div>
                <div className="lowercase">Example lowercase text</div>
                <div className="capitalize">Example capitalized text</div>
                <div className="normal-case">Example cursive text</div>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Text Settings */}
          {/* BEGIN: Common Elements */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Common Elements
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      for="show-example-3"
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
                      You can use the mark tag to
                      <mark className="p-1 bg-yellow-200">highlight</mark> text.
                    </div>
                    <del className="block mt-1">
                      This line of text is meant to be treated as deleted text.
                    </del>
                    <s className="block mt-1">
                      This line of text is meant to be treated as no longer
                      accurate.
                    </s>
                    <ins className="block mt-1">
                      This line of text is meant to be treated as an addition to
                      the document.
                    </ins>
                    <u className="block mt-1">
                      This line of text will render as underlined
                    </u>
                    <small className="block mt-1">
                      This line of text is meant to be treated as fine print.
                    </small>
                    <strong className="block mt-1">
                      This line rendered as bold text.
                    </strong>
                    <em className="block mt-1">
                      This line rendered as italicized text.
                    </em>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                You can use the mark tag to
                <mark className="p-1 bg-yellow-200">highlight</mark> text.
              </div>
              <del className="block mt-1"
                >This line of text is meant to be treated as deleted text.</del
              >
              <s className="block mt-1"
                >This line of text is meant to be treated as no longer
                accurate.</s
              >
              <ins className="block mt-1"
                >This line of text is meant to be treated as an addition to the
                document.</ins
              >
              <u className="block mt-1"
                >This line of text will render as underlined</u
              >
              <small className="block mt-1"
                >This line of text is meant to be treated as fine print.</small
              >
              <strong className="block mt-1"
                >This line rendered as bold text.</strong
              >
              <em className="block mt-1">This line rendered as italicized text.</em>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Common Elements */}
        </div>
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: BADGES */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Badges</h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      for="show-example-4"
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
                    <div className="font-medium">Basic Badge</div>
                    <div className="mt-2">
                      <span className="text-xs px-1 rounded-full bg-primary text-white mr-1">
                        1
                      </span>
                      <span className="text-xs px-1 rounded-full border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300 mr-1">
                        2
                      </span>
                      <span className="text-xs px-1 rounded-full bg-success text-white mr-1">
                        3
                      </span>
                      <span className="text-xs px-1 rounded-full bg-warning text-white mr-1">
                        4
                      </span>
                      <span className="text-xs px-1 rounded-full bg-danger text-white mr-1">
                        5
                      </span>
                      <span className="text-xs px-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300 mr-1">
                        6
                      </span>
                    </div>
                    <div className="font-medium mt-6">Badge Sizes</div>
                    <div className="mt-3">
                      <span className="px-2 py-1 rounded-full bg-primary text-white mr-1">
                        1
                      </span>
                      <span className="px-2 py-1 rounded-full border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300 mr-1">
                        2
                      </span>
                      <span className="px-2 py-1 rounded-full bg-success text-white mr-1">
                        3
                      </span>
                      <span className="px-2 py-1 rounded-full bg-warning text-white mr-1">
                        4
                      </span>
                      <span className="px-2 py-1 rounded-full bg-danger text-white mr-1">
                        5
                      </span>
                      <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300 mr-1">
                        6
                      </span>
                    </div>
                    <div className="mt-4">
                      <span className="px-3 py-2 rounded-full bg-primary text-white mr-1">
                        1
                      </span>
                      <span className="px-3 py-2 rounded-full border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300 mr-1">
                        2
                      </span>
                      <span className="px-3 py-2 rounded-full bg-success text-white mr-1">
                        3
                      </span>
                      <span className="px-3 py-2 rounded-full bg-warning text-white mr-1">
                        4
                      </span>
                      <span className="px-3 py-2 rounded-full bg-danger text-white mr-1">
                        5
                      </span>
                      <span className="px-3 py-2 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300 mr-1">
                        6
                      </span>
                    </div>
                    <div className="mt-6">
                      <span className="px-4 py-3 rounded-full bg-primary text-white mr-1">
                        1
                      </span>
                      <span className="px-4 py-3 rounded-full border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300 mr-1">
                        2
                      </span>
                      <span className="px-4 py-3 rounded-full bg-success text-white mr-1">
                        3
                      </span>
                      <span className="px-4 py-3 rounded-full bg-warning text-white mr-1">
                        4
                      </span>
                      <span className="px-4 py-3 rounded-full bg-danger text-white mr-1">
                        5
                      </span>
                      <span className="px-4 py-3 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300 mr-1">
                        6
                      </span>
                    </div>
                    <div className="font-medium mt-10">Square Badge</div>
                    <div className="mt-2">
                      <span className="text-xs px-1 bg-primary text-white mr-1">
                        1
                      </span>
                      <span className="text-xs px-1 border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300 mr-1">
                        2
                      </span>
                      <span className="text-xs px-1 bg-success text-white mr-1">
                        3
                      </span>
                      <span className="text-xs px-1 bg-warning text-white mr-1">
                        4
                      </span>
                      <span className="text-xs px-1 bg-danger text-white mr-1">
                        5
                      </span>
                      <span className="text-xs px-1 bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300 mr-1">
                        6
                      </span>
                    </div>
                    <div className="font-medium mt-6">Outline Badge</div>
                    <div className="mt-4">
                      <span className="px-3 py-2 rounded-full border border-primary text-primary dark:border-primary mr-1">
                        1
                      </span>
                      <span className="px-3 py-2 rounded-full border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300 mr-1">
                        2
                      </span>
                      <span className="px-3 py-2 rounded-full border border-success text-success dark:border-success mr-1">
                        3
                      </span>
                      <span className="px-3 py-2 rounded-full border border-warning text-warning dark:border-warning mr-1">
                        4
                      </span>
                      <span className="px-3 py-2 rounded-full border border-danger text-danger dark:border-danger mr-1">
                        5
                      </span>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="font-medium">Basic Badge</div>
              <div className="mt-2">
                <span
                  className="text-xs px-1 rounded-full bg-primary text-white mr-1"
                  >1</span
                >
                <span
                  className="text-xs px-1 rounded-full border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300 mr-1"
                  >2</span
                >
                <span
                  className="text-xs px-1 rounded-full bg-success text-white mr-1"
                  >3</span
                >
                <span
                  className="text-xs px-1 rounded-full bg-warning text-white mr-1"
                  >4</span
                >
                <span
                  className="text-xs px-1 rounded-full bg-danger text-white mr-1"
                  >5</span
                >
                <span
                  className="text-xs px-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300 mr-1"
                  >6</span
                >
              </div>
              <div className="font-medium mt-6">Badge Sizes</div>
              <div className="mt-3">
                <span className="px-2 py-1 rounded-full bg-primary text-white mr-1"
                  >1</span
                >
                <span
                  className="px-2 py-1 rounded-full border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300 mr-1"
                  >2</span
                >
                <span className="px-2 py-1 rounded-full bg-success text-white mr-1"
                  >3</span
                >
                <span className="px-2 py-1 rounded-full bg-warning text-white mr-1"
                  >4</span
                >
                <span className="px-2 py-1 rounded-full bg-danger text-white mr-1"
                  >5</span
                >
                <span
                  className="px-2 py-1 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300 mr-1"
                  >6</span
                >
              </div>
              <div className="mt-4">
                <span className="px-3 py-2 rounded-full bg-primary text-white mr-1"
                  >1</span
                >
                <span
                  className="px-3 py-2 rounded-full border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300 mr-1"
                  >2</span
                >
                <span className="px-3 py-2 rounded-full bg-success text-white mr-1"
                  >3</span
                >
                <span className="px-3 py-2 rounded-full bg-warning text-white mr-1"
                  >4</span
                >
                <span className="px-3 py-2 rounded-full bg-danger text-white mr-1"
                  >5</span
                >
                <span
                  className="px-3 py-2 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300 mr-1"
                  >6</span
                >
              </div>
              <div className="mt-6">
                <span className="px-4 py-3 rounded-full bg-primary text-white mr-1"
                  >1</span
                >
                <span
                  className="px-4 py-3 rounded-full border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300 mr-1"
                  >2</span
                >
                <span className="px-4 py-3 rounded-full bg-success text-white mr-1"
                  >3</span
                >
                <span className="px-4 py-3 rounded-full bg-warning text-white mr-1"
                  >4</span
                >
                <span className="px-4 py-3 rounded-full bg-danger text-white mr-1"
                  >5</span
                >
                <span
                  className="px-4 py-3 rounded-full bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300 mr-1"
                  >6</span
                >
              </div>
              <div className="font-medium mt-10">Square Badge</div>
              <div className="mt-2">
                <span className="text-xs px-1 bg-primary text-white mr-1">1</span>
                <span
                  className="text-xs px-1 border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300 mr-1"
                  >2</span
                >
                <span className="text-xs px-1 bg-success text-white mr-1">3</span>
                <span className="text-xs px-1 bg-warning text-white mr-1">4</span>
                <span className="text-xs px-1 bg-danger text-white mr-1">5</span>
                <span
                  className="text-xs px-1 bg-slate-100 text-slate-500 dark:bg-darkmode-800 dark:text-slate-300 mr-1"
                  >6</span
                >
              </div>
              <div className="font-medium mt-6">Outline Badge</div>
              <div className="mt-4">
                <span
                  className="px-3 py-2 rounded-full border border-primary text-primary dark:border-primary mr-1"
                  >1</span
                >
                <span
                  className="px-3 py-2 rounded-full border text-slate-600 dark:border-darkmode-100/40 dark:text-slate-300 mr-1"
                  >2</span
                >
                <span
                  className="px-3 py-2 rounded-full border border-success text-success dark:border-success mr-1"
                  >3</span
                >
                <span
                  className="px-3 py-2 rounded-full border border-warning text-warning dark:border-warning mr-1"
                  >4</span
                >
                <span
                  className="px-3 py-2 rounded-full border border-danger text-danger dark:border-danger mr-1"
                  >5</span
                >
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: BADGES */}
          {/* BEGIN: SEPARATOR */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Separator</h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      for="show-example-5"
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
                    <div className="w-full border-t border-slate-200/60 dark:border-darkmode-400 border-dashed"></div>
                    <div className="w-full border-t border-slate-200/60 dark:border-darkmode-400 mt-5"></div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div
                className="w-full border-t border-slate-200/60 dark:border-darkmode-400 border-dashed"
              ></div>
              <div
                className="w-full border-t border-slate-200/60 dark:border-darkmode-400 mt-5"
              ></div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: SEPARATOR */}
          {/* BEGIN: Devider */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Devider</h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      for="show-example-6"
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
                    <div className="w-full flex justify-center border-t border-slate-200/60 dark:border-darkmode-400 mt-2">
                      <div className="bg-white dark:bg-darkmode-600 px-5 -mt-3 text-slate-500">
                        or
                      </div>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div
                className="w-full flex justify-center border-t border-slate-200/60 dark:border-darkmode-400 mt-2"
              >
                <div
                  className="bg-white dark:bg-darkmode-600 px-5 -mt-3 text-slate-500"
                >
                  or
                </div>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Devider */}
          {/* BEGIN: Links */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Links</h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      for="show-example-7"
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
                      <a href="" className="text-primary block font-normal">
                        Example text
                      </a>
                      <a href="" className="text-primary block font-medium">
                        Example medium text
                      </a>
                      <a href="" className="text-primary block font-semibold">
                        Example semibold text
                      </a>
                      <a href="" className="text-primary block font-bold">
                        Example bolder text
                      </a>
                      <a href="" className="text-primary block font-extrabold">
                        Example boldest text
                      </a>
                    </div>
                    <div className="mt-5">
                      <a href="" className="text-primary block">
                        Primary state
                      </a>
                      <a
                        href=""
                        className="text-slate-600 dark:text-slate-500 block"
                      >
                        Secondary state
                      </a>
                      <a href="" className="text-success block">
                        Success state
                      </a>
                      <a href="" className="text-warning block">
                        Warning state
                      </a>
                      <a href="" className="text-danger block">
                        Danger state
                      </a>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div>
                <a href="" className="text-primary block font-normal"
                  >Example text</a
                >
                <a href="" className="text-primary block font-medium"
                  >Example medium text</a
                >
                <a href="" className="text-primary block font-semibold"
                  >Example semibold text</a
                >
                <a href="" className="text-primary block font-bold"
                  >Example bolder text</a
                >
                <a href="" className="text-primary block font-extrabold"
                  >Example boldest text</a
                >
              </div>
              <div className="mt-5">
                <a href="" className="text-primary block">Primary state</a>
                <a href="" className="text-slate-600 dark:text-slate-500 block"
                  >Secondary state</a
                >
                <a href="" className="text-success block">Success state</a>
                <a href="" className="text-warning block">Warning state</a>
                <a href="" className="text-danger block">Danger state</a>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Links */}
        </div>
      </div>
    </>
  );
}

export default Main;
