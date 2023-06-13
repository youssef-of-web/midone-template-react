import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";

function Main() {
  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Transaction Details</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          <button className="btn btn-primary shadow-md mr-2">Print</button>
          <Dropdown className="ml-auto sm:ml-0">
            <DropdownToggle className="btn px-2 box">
              <span className="w-5 h-5 flex items-center justify-center">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="w-40">
              <DropdownContent>
                <DropdownItem>
                  <Lucide icon="File" className="w-4 h-4 mr-2" /> Export Word
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="File" className="w-4 h-4 mr-2" /> Export to PDF
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      {/* BEGIN: Transaction Details */}
      <div className="intro-y grid grid-cols-11 gap-5 mt-5">
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
          <div className="box p-5 rounded-md">
            <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
              <div className="font-medium text-base truncate">
                Transaction Details
              </div>
              <a href="" className="flex items-center ml-auto text-primary">
                <Lucide icon="Edit" className="w-4 h-4 mr-2" /> Change Status
              </a>
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Invoice:
              <a href="" className="underline decoration-dotted ml-1">
                INV/20220217/MPL/2053411933
              </a>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Calendar" className="w-4 h-4 text-slate-500 mr-2" />
              Purchase Date: 24 March 2022
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Clock" className="w-4 h-4 text-slate-500 mr-2" />
              Transaction Status:
              <span className="bg-success/20 text-success rounded px-2 ml-1">
                Completed
              </span>
            </div>
          </div>
          <div className="box p-5 rounded-md mt-5">
            <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
              <div className="font-medium text-base truncate">
                Buyer Details
              </div>
              <a href="" className="flex items-center ml-auto text-primary">
                <Lucide icon="Edit" className="w-4 h-4 mr-2" /> View Details
              </a>
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Name:
              <a href="" className="underline decoration-dotted ml-1">
                {$f()[0].users[0].name}
              </a>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Calendar" className="w-4 h-4 text-slate-500 mr-2" />
              Phone Number: +71828273732
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="MapPin" className="w-4 h-4 text-slate-500 mr-2" />
              Address: 260 W. Storm Street New York, NY 10025.
            </div>
          </div>
          <div className="box p-5 rounded-md mt-5">
            <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
              <div className="font-medium text-base truncate">
                Payment Details
              </div>
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Payment Method:
              <div className="ml-auto">Direct bank transfer</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide
                icon="CreditCard"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Total Price (2 items):
              <div className="ml-auto">$12,500.00</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide
                icon="CreditCard"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Total Shipping Cost (800 gr):
              <div className="ml-auto">$1,500.00</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide
                icon="CreditCard"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Shipping Insurance:
              <div className="ml-auto">$600.00</div>
            </div>
            <div className="flex items-center border-t border-slate-200/60 dark:border-darkmode-400 pt-5 mt-5 font-medium">
              <Lucide
                icon="CreditCard"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Grand Total:
              <div className="ml-auto">$15,000.00</div>
            </div>
          </div>
          <div className="box p-5 rounded-md mt-5">
            <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
              <div className="font-medium text-base truncate">
                Shipping Information
              </div>
              <a href="" className="flex items-center ml-auto text-primary">
                <Lucide icon="MapPin" className="w-4 h-4 mr-2" /> Tracking Info
              </a>
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Courier: Left4code Express
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Calendar" className="w-4 h-4 text-slate-500 mr-2" />
              Tracking Number: 003005580322
              <Lucide icon="Copy" className="w-4 h-4 text-slate-500 ml-2" />
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="MapPin" className="w-4 h-4 text-slate-500 mr-2" />
              Address: 260 W. Storm Street New York, NY 10025.
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 2xl:col-span-8">
          <div className="box p-5 rounded-md">
            <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
              <div className="font-medium text-base truncate">
                Order Details
              </div>
              <a href="" className="flex items-center ml-auto text-primary">
                <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add Notes
              </a>
            </div>
            <div className="overflow-auto lg:overflow-visible -mt-3">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="whitespace-nowrap !py-5">Product</th>
                    <th className="whitespace-nowrap text-right">Unit Price</th>
                    <th className="whitespace-nowrap text-right">Qty</th>
                    <th className="whitespace-nowrap text-right">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {$_.take($f(), 8).map((faker, fakerKey) => (
                    <tr key={fakerKey}>
                      <td className="!py-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 image-fit zoom-in">
                            <Tippy
                              tag="img"
                              alt="Midone - HTML Admin Template"
                              className="rounded-lg border-2 border-white shadow-md tooltip"
                              src={faker.images[0]}
                              content={`Uploaded at ${faker.dates[0]}`}
                            />
                          </div>
                          <a
                            href=""
                            className="font-medium whitespace-nowrap ml-4"
                          >
                            {faker.products[0].name}
                          </a>
                        </div>
                      </td>
                      <td className="text-right">
                        ${faker.totals[0] + ",000.00"}
                      </td>
                      <td className="text-right">2</td>
                      <td className="text-right">
                        ${faker.totals[0] * 2 + ",000.00"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* END: Transaction Details */}
    </>
  );
}

export default Main;
