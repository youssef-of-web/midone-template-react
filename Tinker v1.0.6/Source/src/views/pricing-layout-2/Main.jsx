import {
  Lucide,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@/base-components";

function Main() {
  return (
    <>
      <h2 className="intro-y text-2xl font-medium mt-10 text-center mr-auto">
        Best Price & Services
      </h2>
      <TabGroup>
        {/* BEGIN: Pricing Tab */}
        <div className="intro-y flex justify-center mt-6">
          <TabList className="pricing-tabs nav-pills w-auto box rounded-full mx-auto overflow-hidden">
            <Tab className="w-32 lg:w-40 py-2 lg:py-3" tag="button">
              Monthly Fees
            </Tab>
            <Tab className="w-32 lg:w-40 py-2 lg:py-3" tag="button">
              Annual Fees
            </Tab>
          </TabList>
        </div>
        {/* END: Pricing Tab */}
        {/* BEGIN: Pricing Content */}
        <div className="flex mt-10">
          <TabPanels>
            <TabPanel className="flex flex-col lg:flex-row">
              <div className="intro-y flex justify-center flex-col flex-1 text-center sm:px-10 lg:px-5 pb-10 lg:pb-0">
                <div className="font-medium text-lg">
                  Monthly Product Pricing
                </div>
                <div className="mt-3 lg:text-justify text-slate-600 dark:text-slate-500">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
                  </p>
                  <p className="mt-2">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
              <div className="intro-y flex-1 box py-16 lg:ml-5 mb-5 lg:mb-0">
                <Lucide
                  icon="Briefcase"
                  className="block w-12 h-12 text-primary mx-auto"
                />
                <div className="text-xl font-medium text-center mt-10">
                  Business
                </div>
                <div className="text-slate-600 dark:text-slate-500 text-center mt-5">
                  1 Domain <span className="mx-1">•</span> 10 Users
                  <span className="mx-1">•</span> 20 Copies
                </div>
                <div className="text-slate-500 px-10 text-center mx-auto mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="flex justify-center">
                  <div className="relative text-5xl font-semibold mt-8 mx-auto">
                    <span className="absolute text-2xl top-0 left-0 -ml-4">
                      $
                    </span>{" "}
                    60
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
                >
                  PURCHASE NOW
                </button>
              </div>
              <div className="intro-y flex-1 box py-16 lg:ml-5">
                <Lucide
                  icon="ShoppingBag"
                  className="block w-12 h-12 text-primary mx-auto"
                />
                <div className="text-xl font-medium text-center mt-10">
                  Enterprise
                </div>
                <div className="text-slate-600 dark:text-slate-500 text-center mt-5">
                  1 Domain <span className="mx-1">•</span> 10 Users
                  <span className="mx-1">•</span> 20 Copies
                </div>
                <div className="text-slate-500 px-10 text-center mx-auto mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="flex justify-center">
                  <div className="relative text-5xl font-semibold mt-8 mx-auto">
                    <span className="absolute text-2xl top-0 left-0 -ml-4">
                      $
                    </span>{" "}
                    120
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
                >
                  PURCHASE NOW
                </button>
              </div>
            </TabPanel>
            <TabPanel className="flex flex-col lg:flex-row">
              <div className="intro-y flex justify-center flex-col flex-1 text-center sm:px-10 lg:px-5 pb-10 lg:pb-0">
                <div className="font-medium text-lg">
                  Annual Product Pricing
                </div>
                <div className="mt-3 lg:text-justify text-slate-600 dark:text-slate-500">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever.
                  </p>
                  <p className="mt-2">
                    When an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.
                  </p>
                </div>
              </div>
              <div className="intro-y flex-1 box py-16 lg:ml-5 mb-5 lg:mb-0">
                <Lucide
                  icon="Briefcase"
                  className="block w-12 h-12 text-primary mx-auto"
                />
                <div className="text-xl font-medium text-center mt-10">
                  Business
                </div>
                <div className="text-slate-600 dark:text-slate-500 text-center mt-5">
                  1 Domain <span className="mx-1">•</span> 10 Users
                  <span className="mx-1">•</span> 20 Copies
                </div>
                <div className="text-slate-500 px-10 text-center mx-auto mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="flex justify-center">
                  <div className="relative text-5xl font-semibold mt-8 mx-auto">
                    <span className="absolute text-2xl top-0 left-0 -ml-4">
                      $
                    </span>{" "}
                    40
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
                >
                  PURCHASE NOW
                </button>
              </div>
              <div className="intro-y flex-1 box py-16 lg:ml-5">
                <Lucide
                  icon="ShoppingBag"
                  className="block w-12 h-12 text-primary mx-auto"
                />
                <div className="text-xl font-medium text-center mt-10">
                  Enterprise
                </div>
                <div className="text-slate-600 dark:text-slate-500 text-center mt-5">
                  1 Domain <span className="mx-1">•</span> 10 Users
                  <span className="mx-1">•</span> 20 Copies
                </div>
                <div className="text-slate-500 px-10 text-center mx-auto mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="flex justify-center">
                  <div className="relative text-5xl font-semibold mt-8 mx-auto">
                    <span className="absolute text-2xl top-0 left-0 -ml-4">
                      $
                    </span>{" "}
                    90
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
                >
                  PURCHASE NOW
                </button>
              </div>
            </TabPanel>
          </TabPanels>
        </div>
      </TabGroup>
      {/* END: Pricing Content */}
      <div className="intro-y box mt-20 px-8 py-12">
        <h2 className="intro-y text-2xl font-medium text-center mr-auto">
          Best Price & Services
        </h2>
        <TabGroup>
          {/* BEGIN: Pricing Tab */}
          <div className="intro-y flex justify-center mt-6">
            <TabList className="pricing-tabs nav-pills w-auto box rounded-full mx-auto overflow-hidden">
              <Tab className="w-32 lg:w-40 py-2 lg:py-3" tag="button">
                Monthly Fees
              </Tab>
              <Tab className="w-32 lg:w-40 py-2 lg:py-3" tag="button">
                Annual Fees
              </Tab>
            </TabList>
          </div>
          {/* END: Pricing Tab */}
          {/* BEGIN: Pricing Content */}
          <div className="flex mt-10">
            <TabPanels>
              <TabPanel className="flex flex-col lg:flex-row">
                <div className="intro-y flex justify-center flex-col flex-1 text-center sm:px-10 lg:px-5 pb-10 lg:pb-0">
                  <div className="font-medium text-lg">
                    Monthly Product Pricing
                  </div>
                  <div className="mt-3 lg:text-justify text-slate-600 dark:text-slate-500">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever.
                    </p>
                    <p className="mt-2">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                  </div>
                </div>
                <div className="intro-y flex-1 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-slate-200/60 dark:border-darkmode-400 py-16 lg:ml-8">
                  <Lucide
                    icon="Briefcase"
                    className="block w-12 h-12 text-primary mx-auto"
                  />
                  <div className="text-xl font-medium text-center mt-10">
                    Business
                  </div>
                  <div className="text-slate-600 dark:text-slate-500 text-center mt-5">
                    1 Domain <span className="mx-1">•</span> 10 Users
                    <span className="mx-1">•</span> 20 Copies
                  </div>
                  <div className="text-slate-500 px-10 text-center mx-auto mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                  <div className="flex justify-center">
                    <div className="relative text-5xl font-semibold mt-8 mx-auto">
                      <span className="absolute text-2xl top-0 left-0 -ml-4">
                        $
                      </span>{" "}
                      60
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
                  >
                    PURCHASE NOW
                  </button>
                </div>
                <div className="intro-y flex-1 py-16">
                  <Lucide
                    icon="ShoppingBag"
                    className="block w-12 h-12 text-primary mx-auto"
                  />
                  <div className="text-xl font-medium text-center mt-10">
                    Enterprise
                  </div>
                  <div className="text-slate-600 dark:text-slate-500 text-center mt-5">
                    1 Domain <span className="mx-1">•</span> 10 Users
                    <span className="mx-1">•</span> 20 Copies
                  </div>
                  <div className="text-slate-500 px-10 text-center mx-auto mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                  <div className="flex justify-center">
                    <div className="relative text-5xl font-semibold mt-8 mx-auto">
                      <span className="absolute text-2xl top-0 left-0 -ml-4">
                        $
                      </span>
                      120
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
                  >
                    PURCHASE NOW
                  </button>
                </div>
              </TabPanel>
              <TabPanel className="flex flex-col lg:flex-row">
                <div className="intro-y flex justify-center flex-col flex-1 text-center sm:px-10 lg:px-5 pb-10 lg:pb-0">
                  <div className="font-medium text-lg">
                    Annual Product Pricing
                  </div>
                  <div className="mt-3 lg:text-justify text-slate-600">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever.
                    </p>
                    <p className="mt-2">
                      When an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                  </div>
                </div>
                <div className="intro-y flex-1 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-slate-200/60 dark:border-darkmode-400 py-16 lg:ml-8">
                  <Lucide
                    icon="Briefcase"
                    className="block w-12 h-12 text-primary mx-auto"
                  />
                  <div className="text-xl font-medium text-center mt-10">
                    Business
                  </div>
                  <div className="text-slate-600 dark:text-slate-500 text-center mt-5">
                    1 Domain <span className="mx-1">•</span> 10 Users
                    <span className="mx-1">•</span> 20 Copies
                  </div>
                  <div className="text-slate-500 px-10 text-center mx-auto mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                  <div className="flex justify-center">
                    <div className="relative text-5xl font-semibold mt-8 mx-auto">
                      <span className="absolute text-2xl top-0 left-0 -ml-4">
                        $
                      </span>
                      120
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
                  >
                    PURCHASE NOW
                  </button>
                </div>
                <div className="intro-y flex-1 py-16">
                  <Lucide
                    icon="ShoppingBag"
                    className="block w-12 h-12 text-primary mx-auto"
                  />
                  <div className="text-xl font-medium text-center mt-10">
                    Enterprise
                  </div>
                  <div className="text-slate-600 dark:text-slate-500 text-center mt-5">
                    1 Domain <span className="mx-1">•</span> 10 Users
                    <span className="mx-1">•</span> 20 Copies
                  </div>
                  <div className="text-slate-500 px-10 text-center mx-auto mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                  <div className="flex justify-center">
                    <div className="relative text-5xl font-semibold mt-8 mx-auto">
                      <span className="absolute text-2xl top-0 left-0 -ml-4">
                        $
                      </span>
                      210
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
                  >
                    PURCHASE NOW
                  </button>
                </div>
              </TabPanel>
            </TabPanels>
          </div>
          {/* END: Pricing Content */}
        </TabGroup>
      </div>
    </>
  );
}

export default Main;
