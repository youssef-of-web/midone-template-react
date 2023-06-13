import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
} from "@/base-components";

function Main() {
  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Invoice Layout</h2>
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
                <DropdownContent>
                  <Lucide icon="File" className="w-4 h-4 mr-2" /> Export Word
                </DropdownContent>
                <DropdownContent>
                  <Lucide icon="File" className="w-4 h-4 mr-2" /> Export PDF
                </DropdownContent>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      {/* BEGIN: Invoice */}
      <div className="intro-y box overflow-hidden mt-5">
        <div className="flex flex-col lg:flex-row pt-10 px-5 sm:px-20 sm:pt-20 lg:pb-20 text-center sm:text-left">
          <div className="font-semibold text-primary text-3xl">INVOICE</div>
          <div className="mt-20 lg:mt-0 lg:ml-auto lg:text-right">
            <div className="text-xl text-primary font-medium">Left4code</div>
            <div className="mt-1">left4code@gmail.com</div>
            <div className="mt-1">8023 Amerige Street Harriman, NY 10926.</div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row border-b px-5 sm:px-20 pt-10 pb-10 sm:pb-20 text-center sm:text-left">
          <div>
            <div className="text-base text-slate-500">Client Details</div>
            <div className="text-lg font-medium text-primary mt-2">
              Arnold Schwarzenegger
            </div>
            <div className="mt-1">arnodlschwarzenegger@gmail.com</div>
            <div className="mt-1">260 W. Storm Street New York, NY 10025.</div>
          </div>
          <div className="mt-10 lg:mt-0 lg:ml-auto lg:text-right">
            <div className="text-base text-slate-500">Receipt</div>
            <div className="text-lg text-primary font-medium mt-2">
              #1923195
            </div>
            <div className="mt-1">Jan 02, 2021</div>
          </div>
        </div>
        <div className="px-5 sm:px-16 py-10 sm:py-20">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th className="border-b-2 dark:border-darkmode-400 whitespace-nowrap">
                    DESCRIPTION
                  </th>
                  <th className="border-b-2 dark:border-darkmode-400 text-right whitespace-nowrap">
                    QTY
                  </th>
                  <th className="border-b-2 dark:border-darkmode-400 text-right whitespace-nowrap">
                    PRICE
                  </th>
                  <th className="border-b-2 dark:border-darkmode-400 text-right whitespace-nowrap">
                    SUBTOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b dark:border-darkmode-400">
                    <div className="font-medium whitespace-nowrap">
                      Midone HTML Admin Template
                    </div>
                    <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                      Regular License
                    </div>
                  </td>
                  <td className="text-right border-b dark:border-darkmode-400 w-32">
                    2
                  </td>
                  <td className="text-right border-b dark:border-darkmode-400 w-32">
                    $25
                  </td>
                  <td className="text-right border-b dark:border-darkmode-400 w-32 font-medium">
                    $50
                  </td>
                </tr>
                <tr>
                  <td className="border-b dark:border-darkmode-400">
                    <div className="font-medium whitespace-nowrap">
                      Vuejs Admin Template
                    </div>
                    <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                      Regular License
                    </div>
                  </td>
                  <td className="text-right border-b dark:border-darkmode-400 w-32">
                    1
                  </td>
                  <td className="text-right border-b dark:border-darkmode-400 w-32">
                    $25
                  </td>
                  <td className="text-right border-b dark:border-darkmode-400 w-32 font-medium">
                    $25
                  </td>
                </tr>
                <tr>
                  <td className="border-b dark:border-darkmode-400">
                    <div className="font-medium whitespace-nowrap">
                      React Admin Template
                    </div>
                    <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                      Regular License
                    </div>
                  </td>
                  <td className="text-right border-b dark:border-darkmode-400 w-32">
                    1
                  </td>
                  <td className="text-right border-b dark:border-darkmode-400 w-32">
                    $25
                  </td>
                  <td className="text-right border-b dark:border-darkmode-400 w-32 font-medium">
                    $25
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="font-medium whitespace-nowrap">
                      Laravel Admin Template
                    </div>
                    <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                      Regular License
                    </div>
                  </td>
                  <td className="text-right w-32">3</td>
                  <td className="text-right w-32">$25</td>
                  <td className="text-right w-32 font-medium">$75</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="px-5 sm:px-20 pb-10 sm:pb-20 flex flex-col-reverse sm:flex-row">
          <div className="text-center sm:text-left mt-10 sm:mt-0">
            <div className="text-base text-slate-500">Bank Transfer</div>
            <div className="text-lg text-primary font-medium mt-2">
              Elon Musk
            </div>
            <div className="mt-1">Bank Account : 098347234832</div>
            <div className="mt-1">Code : LFT133243</div>
          </div>
          <div className="text-center sm:text-right sm:ml-auto">
            <div className="text-base text-slate-500">Total Amount</div>
            <div className="text-xl text-primary font-medium mt-2">
              $20.600.00
            </div>
            <div className="mt-1">Taxes included</div>
          </div>
        </div>
      </div>
      {/* END: Invoice */}
    </>
  );
}

export default Main;
