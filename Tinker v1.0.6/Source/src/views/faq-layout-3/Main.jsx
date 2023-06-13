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
      <div className="grid grid-cols-12 gap-6">
        {/* BEGIN: FAQ Menu */}
        <div className="intro-y col-span-12 lg:col-span-4 xl:col-span-3">
          <div className="box mt-5">
            <div className="px-4 pb-3 pt-5">
              <a
                className="flex rounded-lg items-center px-4 py-2 bg-primary text-white font-medium"
                href=""
              >
                <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                <div className="flex-1 truncate">About Our Products</div>
              </a>
              <a className="flex items-center px-4 py-2 mt-1" href="">
                <Lucide icon="Box" className="w-4 h-4 mr-2" />
                <div className="flex-1 truncate">Related License</div>
              </a>
              <a className="flex items-center px-4 py-2 mt-1" href="">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" />
                <div className="flex-1 truncate">
                  Single Application License
                </div>
              </a>
              <a className="flex items-center px-4 py-2 mt-1" href="">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" />
                <div className="flex-1 truncate">Multi Application License</div>
              </a>
            </div>
            <div className="px-4 py-3 border-t border-slate-200/60 dark:border-darkmode-400">
              <a className="flex items-center px-4 py-2" href="">
                <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                <div className="flex-1 truncate">Trem of Use</div>
              </a>
              <a className="flex items-center px-4 py-2 mt-1" href="">
                <Lucide icon="Box" className="w-4 h-4 mr-2" />
                <div className="flex-1 truncate">Author Fees</div>
              </a>
              <a className="flex items-center px-4 py-2 mt-1" href="">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" />
                <div className="flex-1 truncate">Product Review</div>
              </a>
              <a className="flex items-center px-4 py-2 mt-1" href="">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" />
                <div className="flex-1 truncate">Privacy Policy</div>
              </a>
            </div>
            <div className="px-4 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <a className="flex items-center px-4 py-2" href="">
                <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                <div className="flex-1 truncate">About Our Products</div>
              </a>
              <a className="flex items-center px-4 py-2 mt-1" href="">
                <Lucide icon="Box" className="w-4 h-4 mr-2" />
                <div className="flex-1 truncate">Related License</div>
              </a>
              <a className="flex items-center px-4 py-2 mt-1" href="">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" />
                <div className="flex-1 truncate">
                  Single Application License
                </div>
              </a>
              <a className="flex items-center px-4 py-2 mt-1" href="">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" />
                <div className="flex-1 truncate">Multi Application License</div>
              </a>
            </div>
          </div>
        </div>
        {/* END: FAQ Menu */}
        {/* BEGIN: FAQ Content */}
        <div className="intro-y col-span-12 lg:col-span-8 xl:col-span-9">
          <div className="intro-y box lg:mt-5">
            <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">
                About Our Products
              </h2>
            </div>
            <AccordionGroup className="accordion-boxed p-5">
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
          <div className="intro-y box mt-5">
            <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">
                Single Application License
              </h2>
            </div>
            <AccordionGroup className="accordion-boxed p-5">
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
          <div className="intro-y box mt-5">
            <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">
                Multi Application License
              </h2>
            </div>
            <AccordionGroup className="accordion-boxed p-5">
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
