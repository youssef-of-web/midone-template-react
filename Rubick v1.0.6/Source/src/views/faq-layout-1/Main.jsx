import {
  Lucide,
  AccordionGroup,
  AccordionItem,
  Accordion,
  AccordionPanel,
} from "@/base-components";

function Main() {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">FAQ Layout</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        {/* BEGIN: FAQ Menu */}
        <a
          href=""
          className="intro-y col-span-12 lg:col-span-4 box py-10 border-2 border-primary dark:border-primary"
        >
          <Lucide
            icon="Shield"
            className="block w-12 h-12 text-primary mx-auto"
          />
          <div className="font-medium text-center text-base mt-3">
            Single Application
          </div>
          <div className="text-slate-500 mt-2 w-3/4 text-center mx-auto">
            Lorem Ipsum is simply dummy text of the printing
          </div>
        </a>
        <a href="" className="intro-y col-span-12 lg:col-span-4 box py-10">
          <Lucide
            icon="Send"
            className="block w-12 h-12 text-primary mx-auto"
          />
          <div className="font-medium text-center text-base mt-3">
            Multi Application
          </div>
          <div className="text-slate-500 mt-2 w-3/4 text-center mx-auto">
            Lorem Ipsum is simply dummy text of the printing
          </div>
        </a>
        <a href="" className="intro-y col-span-12 lg:col-span-4 box py-10">
          <Lucide
            icon="TrendingUp"
            className="block w-12 h-12 text-primary mx-auto"
          />
          <div className="font-medium text-center text-base mt-3">
            Custom License
          </div>
          <div className="text-slate-500 mt-2 w-3/4 text-center mx-auto">
            Lorem Ipsum is simply dummy text of the printing
          </div>
        </a>
        {/* END: FAQ Menu */}
        {/* BEGIN: FAQ Content */}
        <div className="intro-y col-span-12 lg:col-span-6">
          <div className="box">
            <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">
                Working with Dropplets
              </h2>
            </div>
            <AccordionGroup className="p-5">
              <AccordionItem>
                <Accordion>
                  OpenSSL Essentials: Working with SSL Certificates, Private
                  Keys
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  Understanding IP Addresses, Subnets, and CIDR Notation
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  {" "}
                  How To Troubleshoot Common HTTP Error Codes{" "}
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  {" "}
                  An Introduction to Securing your Linux VPS{" "}
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
            </AccordionGroup>
          </div>
          <div className="box mt-6">
            <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">
                Working with Dropplets
              </h2>
            </div>
            <AccordionGroup className="p-5">
              <AccordionItem>
                <Accordion>
                  OpenSSL Essentials: Working with SSL Certificates, Private
                  Keys
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  Understanding IP Addresses, Subnets, and CIDR Notation
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  {" "}
                  How To Troubleshoot Common HTTP Error Codes{" "}
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  {" "}
                  An Introduction to Securing your Linux VPS{" "}
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
            </AccordionGroup>
          </div>
        </div>
        <div className="intro-y col-span-12 lg:col-span-6">
          <div className="box">
            <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">
                Working with Dropplets
              </h2>
            </div>
            <AccordionGroup className="p-5">
              <AccordionItem>
                <Accordion>
                  OpenSSL Essentials: Working with SSL Certificates, Private
                  Keys
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  Understanding IP Addresses, Subnets, and CIDR Notation
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  {" "}
                  How To Troubleshoot Common HTTP Error Codes{" "}
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  {" "}
                  An Introduction to Securing your Linux VPS{" "}
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
            </AccordionGroup>
          </div>
          <div className="box mt-6">
            <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">
                Working with Dropplets
              </h2>
            </div>
            <AccordionGroup className="p-5">
              <AccordionItem>
                <Accordion>
                  OpenSSL Essentials: Working with SSL Certificates, Private
                  Keys
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  Understanding IP Addresses, Subnets, and CIDR Notation
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  {" "}
                  How To Troubleshoot Common HTTP Error Codes{" "}
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <Accordion>
                  {" "}
                  An Introduction to Securing your Linux VPS{" "}
                </Accordion>
                <AccordionPanel className="text-slate-600 dark:text-slate-500 leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </AccordionPanel>
              </AccordionItem>
            </AccordionGroup>
          </div>
        </div>
        {/* END: FAQ Content */}
      </div>
    </>
  );
}

export default Main;
