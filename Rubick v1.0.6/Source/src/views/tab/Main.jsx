import {
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";

function Main() {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Tab</h2>
      </div>
      <div className="intro-y grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Basic Tab */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Basic Tab</h2>
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
                    <TabGroup>
                      <TabList className="nav-tabs">
                        <Tab className="w-full py-2" tag="button">
                          Example Tab 1
                        </Tab>
                        <Tab className="w-full py-2" tag="button">
                          Example Tab 2
                        </Tab>
                      </TabList>
                      <TabPanels className="border-l border-r border-b">
                        <TabPanel className="leading-relaxed p-5">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </TabPanel>
                        <TabPanel className="leading-relaxed p-5">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like).
                        </TabPanel>
                      </TabPanels>
                    </TabGroup>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <TabGroup>
                <TabList className="nav-tabs">
                  <Tab className="w-full py-2" tag="button">Example Tab 1</Tab>
                  <Tab className="w-full py-2" tag="button">Example Tab 2</Tab>
                </TabList>
                <TabPanels className="border-l border-r border-b">
                  <TabPanel className="leading-relaxed p-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </TabPanel>
                  <TabPanel className="leading-relaxed p-5">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </TabPanel>
                </TabPanels>
              </TabGroup>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Tab */}
          {/* BEGIN: Boxed Tab */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Boxed Tab</h2>
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
                    <TabGroup>
                      <TabList className="nav-boxed-tabs">
                        <Tab className="w-full py-2" tag="button">
                          Example Tab 1
                        </Tab>
                        <Tab className="w-full py-2" tag="button">
                          Example Tab 2
                        </Tab>
                      </TabList>
                      <TabPanels className="mt-5">
                        <TabPanel className="leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </TabPanel>
                        <TabPanel className="leading-relaxed">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like).
                        </TabPanel>
                      </TabPanels>
                    </TabGroup>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <TabGroup>
                <TabList className="nav-boxed-tabs">
                  <Tab className="w-full py-2" tag="button">Example Tab 1</Tab>
                  <Tab className="w-full py-2" tag="button">Example Tab 2</Tab>
                </TabList>
                <TabPanels className="mt-5">
                  <TabPanel className="leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </TabPanel>
                  <TabPanel className="leading-relaxed">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </TabPanel>
                </TabPanels>
              </TabGroup>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Boxed Tab */}
          {/* BEGIN: Link Tab */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Link Tab</h2>
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
                    <TabGroup>
                      <TabList className="nav-link-tabs">
                        <Tab className="w-full py-2" tag="button">
                          Example Tab 1
                        </Tab>
                        <Tab className="w-full py-2" tag="button">
                          Example Tab 2
                        </Tab>
                      </TabList>
                      <TabPanels className="mt-5">
                        <TabPanel className="leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </TabPanel>
                        <TabPanel className="leading-relaxed">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. Various versions have evolved
                          over the years, sometimes by accident, sometimes on
                          purpose (injected humour and the like).
                        </TabPanel>
                      </TabPanels>
                    </TabGroup>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <TabGroup>
                <TabList className="nav-link-tabs">
                  <Tab className="w-full py-2" tag="button">Example Tab 1</Tab>
                  <Tab className="w-full py-2" tag="button">Example Tab 2</Tab>
                </TabList>
                <TabPanels className="mt-5">
                  <TabPanel className="leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </TabPanel>
                  <TabPanel className="leading-relaxed">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </TabPanel>
                </TabPanels>
              </TabGroup>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Tab */}
        </div>
        <div className="col-span-12 lg:col-span-6">
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
                  Tabs are built using the
                  <span className="text-red-500">`TabGroup`</span>,
                  <span className="text-red-500">`TabList`</span>,
                  <span className="text-red-500">`Tab`</span>,
                  <span className="text-red-500">`TabPanels`</span> and
                  <span className="text-red-500">`TabPanel`</span> components.
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
                <div className="text-base font-medium">TabGroup</div>
                <div className="mt-2">The main TabGroup component.</div>
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
                      <td className="align-top text-red-500">
                        `selectedIndex`
                      </td>
                      <td className="align-top">`index`</td>
                      <td className="align-top">`0`</td>
                      <td className="align-top">
                        <div className="font-medium mb-1">`Number`</div>
                        Specifies the index of the selected tab.
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top text-red-500">`tag`</td>
                      <td className="align-top">`div`</td>
                      <td className="align-top">`div`</td>
                      <td className="align-top">
                        <div className="font-medium mb-1">`String`</div>
                        Specifies HTML tag to use.
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
                      <td className="align-top text-red-500">`onChange`</td>
                      <td className="align-top">
                        This event fires immediately when there is a change in
                        active tab.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-base font-medium mt-5">Tab</div>
                <div className="mt-2">The main Tab component.</div>
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
                      <td className="align-top text-red-500">`fullWidth`</td>
                      <td className="align-top">`true`, `false`</td>
                      <td className="align-top">`true`</td>
                      <td className="align-top">
                        <div className="font-medium mb-1">`Boolean`</div>
                        Whether the Tab appears as full width or not.
                      </td>
                    </tr>
                    <tr>
                      <td className="align-top text-red-500">`tag`</td>
                      <td className="align-top">`a`</td>
                      <td className="align-top">`a`</td>
                      <td className="align-top">
                        <div className="font-medium mb-1">`String`</div>
                        Specifies HTML tag to use.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* END: Component API */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
