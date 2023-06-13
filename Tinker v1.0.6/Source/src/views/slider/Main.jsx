import {
  TinySlider,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";
import { faker as $f } from "@/utils";

function Main() {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Slider</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Single Item */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Single Item</h2>
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
                    <div className="mx-6">
                      <TinySlider
                        options={{
                          controls: true,
                        }}
                      >
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              1
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              2
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              3
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              4
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              5
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              6
                            </h3>
                          </div>
                        </div>
                      </TinySlider>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="mx-6">
                <TinySlider
                  options={{
                    controls: true,
                  }}
                >
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Single Item */}
          {/* BEGIN: Multiple Item */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Multiple Item
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
                    <div className="mx-6">
                      <TinySlider
                        options={{
                          autoplay: false,
                          controls: true,
                          items: 1,
                          responsive: {
                            600: {
                              items: 3,
                            },
                            480: {
                              items: 2,
                            },
                          },
                        }}
                      >
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              1
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              2
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              3
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              4
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              5
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              6
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              7
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              8
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              9
                            </h3>
                          </div>
                        </div>
                      </TinySlider>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="mx-6">
                <TinySlider
                  options={{
                    autoplay: false,
                    controls: true,
                    items: 1,
                    responsive: {
                      600: {
                        items: 3,
                      },
                      480: {
                        items: 2,
                      },
                    },
                  }}
                >
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        7
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        8
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        9
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Multiple Item */}
          {/* BEGIN: Responsive Display */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Responsive Display
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
                    <div className="mx-6 pb-8">
                      <TinySlider
                        options={{
                          autoplay: false,
                          controls: true,
                          items: 1,
                          nav: true,
                          responsive: {
                            600: {
                              items: 3,
                            },
                            480: {
                              items: 2,
                            },
                          },
                        }}
                      >
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              1
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              2
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              3
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              4
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              5
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              6
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              7
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              8
                            </h3>
                          </div>
                        </div>
                      </TinySlider>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="mx-6 pb-8">
                <TinySlider
                  options={{
                    autoplay: false,
                    controls: true,
                    items: 1,
                    nav: true,
                    responsive: {
                      600: {
                        items: 3,
                      },
                      480: {
                        items: 2,
                      },
                    },
                  }}
                >
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        7
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        8
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Responsive Display */}
        </div>
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Center Mode */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Center Mode</h2>
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
                    <div className="mx-6">
                      <TinySlider
                        options={{
                          autoplay: false,
                          controls: true,
                          center: true,
                          items: 1,
                          responsive: {
                            600: {
                              items: 2,
                            },
                          },
                        }}
                      >
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              1
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              2
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              3
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              4
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              5
                            </h3>
                          </div>
                        </div>
                        <div className="h-32 px-2">
                          <div className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md">
                            <h3 className="h-full font-medium flex items-center justify-center text-2xl">
                              6
                            </h3>
                          </div>
                        </div>
                      </TinySlider>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="mx-6">
                <TinySlider
                  options={{
                    autoplay: false,
                    controls: true,
                    center: true,
                    items: 1,
                    responsive: {
                      600: {
                        items: 2,
                      },
                    },
                  }}
                >
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        1
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        2
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        3
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        4
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        5
                      </h3>
                    </div>
                  </div>
                  <div className="h-32 px-2">
                    <div
                      className="h-full bg-slate-100 dark:bg-darkmode-400 rounded-md"
                    >
                      <h3
                        className="h-full font-medium flex items-center justify-center text-2xl"
                      >
                        6
                      </h3>
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Center Mode */}
          {/* BEGIN: Fade Animation */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Fade Animation
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
                    <div className="mx-6 pb-8">
                      <TinySlider
                        options={{
                          mode: "gallery",
                          controls: true,
                          nav: true,
                          speed: 500,
                        }}
                      >
                        <div className="h-64 px-2">
                          <div className="h-full image-fit rounded-md overflow-hidden">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              src={$f()[0].images[0]}
                            />
                          </div>
                        </div>
                        <div className="h-64 px-2">
                          <div className="h-full image-fit rounded-md overflow-hidden">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              src={$f()[1].images[1]}
                            />
                          </div>
                        </div>
                        <div className="h-64 px-2">
                          <div className="h-full image-fit rounded-md overflow-hidden">
                            <img
                              alt="Midone Tailwind HTML Admin Template"
                              src={$f()[2].images[2]}
                            />
                          </div>
                        </div>
                      </TinySlider>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="mx-6 pb-8">
                <TinySlider
                  options={{
                    mode: 'gallery',
                    controls: true,
                    nav: true,
                    speed: 500,
                  }}
                >
                  <div className="h-64 px-2">
                    <div className="h-full image-fit rounded-md overflow-hidden">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={$f()[0].images[0]}
                      />
                    </div>
                  </div>
                  <div className="h-64 px-2">
                    <div className="h-full image-fit rounded-md overflow-hidden">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={$f()[1].images[1]}
                      />
                    </div>
                  </div>
                  <div className="h-64 px-2">
                    <div className="h-full image-fit rounded-md overflow-hidden">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={$f()[2].images[2]}
                      />
                    </div>
                  </div>
                </TinySlider>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Fade Animation */}
        </div>
      </div>
    </>
  );
}

export default Main;
