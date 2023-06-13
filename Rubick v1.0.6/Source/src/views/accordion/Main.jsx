import {
  AccordionGroup,
  AccordionItem,
  Accordion,
  AccordionPanel,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";

function Main() {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Accordion</h2>
      </div>
      <div className="intro-y grid grid-cols-12 gap-6 mt-5">
        {/* BEGIN: Basic Accordion */}
        <div className="col-span-12 lg:col-span-6">
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Basic Accordion
                  </h2>
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
                    <AccordionGroup>
                      <AccordionItem>
                        <Accordion>
                          OpenSSL Essentials: Working with SSL Certificates,
                          Private Keys
                        </Accordion>
                        <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          Understanding IP Addresses, Subnets, and CIDR Notation
                        </Accordion>
                        <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          How To Troubleshoot Common HTTP Error Codes
                        </Accordion>
                        <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          An Introduction to Securing your Linux VPS
                        </Accordion>
                        <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </AccordionPanel>
                      </AccordionItem>
                    </AccordionGroup>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <AccordionGroup>
              <AccordionItem>
                <Accordion>
                  OpenSSL Essentials: Working with SSL Certificates,
                  Private Keys
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  Understanding IP Addresses, Subnets, and CIDR Notation
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  How To Troubleshoot Common HTTP Error Codes
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  An Introduction to Securing your Linux VPS
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.
                </AccordionPanel>
              </AccordionItem>
            </AccordionGroup>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Boxed Accordion
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
                    <AccordionGroup className="accordion-boxed">
                      <AccordionItem>
                        <Accordion>
                          OpenSSL Essentials: Working with SSL Certificates,
                          Private Keys
                        </Accordion>
                        <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          Understanding IP Addresses, Subnets, and CIDR Notation
                        </Accordion>
                        <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          How To Troubleshoot Common HTTP Error Codes
                        </Accordion>
                        <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </AccordionPanel>
                      </AccordionItem>
                      <AccordionItem>
                        <Accordion>
                          An Introduction to Securing your Linux VPS
                        </Accordion>
                        <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged.
                        </AccordionPanel>
                      </AccordionItem>
                    </AccordionGroup>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <AccordionGroup className="accordion-boxed">
              <AccordionItem>
                <Accordion>
                  OpenSSL Essentials: Working with SSL Certificates,
                  Private Keys
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  Understanding IP Addresses, Subnets, and CIDR Notation
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  How To Troubleshoot Common HTTP Error Codes
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  An Introduction to Securing your Linux VPS
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap
                  into electronic typesetting, remaining essentially
                  unchanged.
                </AccordionPanel>
              </AccordionItem>
            </AccordionGroup>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
        </div>
        {/* END: Basic Accordion */}
        {/* BEGIN: Boxed Accordion */}
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
                Accordions are built using the
                <span className="text-red-500">`AccordionGroup`</span>,
                <span className="text-red-500">`AccordionItem`</span>,
                <span className="text-red-500">`Accordion`</span> and
                <span className="text-red-500">`AccordionPanel`</span>{" "}
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
              <div className="text-base font-medium">Accordion</div>
              <div className="mt-2">The main Accordion component.</div>
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
                    <td className="align-top text-red-500">`selectedIndex`</td>
                    <td className="align-top">`index`, `null`</td>
                    <td className="align-top">`0`</td>
                    <td className="align-top">
                      <div className="font-medium mb-1">`Number`, `Object`</div>
                      Specifies the index of the selected accordion.
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
                      active accordion.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* END: Component API */}
        </div>
        {/* END: Boxed Accordion */}
      </div>
    </>
  );
}

export default Main;
