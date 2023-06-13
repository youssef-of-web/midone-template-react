import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  TabGroup,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useState } from "react";

function Main() {
  const [newOrderModal, setNewOrderModal] = useState(false);
  const [addItemModal, setAddItemModal] = useState(false);

  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Point of Sale</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          <a
            href="#"
            onClick={() => {
              setNewOrderModal(true);
            }}
            className="btn btn-primary shadow-md mr-2"
          >
            New Order
          </a>
          <Dropdown className="pos-dropdown ml-auto sm:ml-0">
            <DropdownToggle className="btn px-2 box">
              <span className="w-5 h-5 flex items-center justify-center">
                <Lucide icon="ChevronDown" className="w-4 h-4" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="pos-dropdown__dropdown-menu">
              <DropdownContent>
                <DropdownItem>
                  <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                  <span className="truncate">
                    INV-0206020 - {$f()[3].users[0].name}
                  </span>
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                  <span className="truncate">
                    INV-0206022 - {$f()[4].users[0].name}
                  </span>
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                  <span className="truncate">
                    INV-0206021 - {$f()[5].users[0].name}
                  </span>
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="intro-y grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Item List */}
        <div className="intro-y col-span-12 lg:col-span-8">
          <div className="lg:flex intro-y">
            <div className="relative">
              <input
                type="text"
                className="form-control py-3 px-4 w-full lg:w-64 box pr-10"
                placeholder="Search item..."
              />
              <Lucide
                icon="Search"
                className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0 text-slate-500"
              />
            </div>
            <select className="form-select py-3 px-4 box w-full lg:w-auto mt-3 lg:mt-0 ml-auto">
              <option>Sort By</option>
              <option>A to Z</option>
              <option>Z to A</option>
              <option>Lowest Price</option>
              <option>Highest Price</option>
            </select>
          </div>
          <div className="grid grid-cols-12 gap-5 mt-5">
            <div className="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
              <div className="font-medium text-base">Soup</div>
              <div className="text-slate-500">5 Items</div>
            </div>
            <div className="col-span-12 sm:col-span-4 2xl:col-span-3 box bg-primary p-5 cursor-pointer zoom-in">
              <div className="font-medium text-base text-white">
                Pancake & Toast
              </div>
              <div className="text-white text-opacity-80 dark:text-slate-500">
                8 Items
              </div>
            </div>
            <div className="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
              <div className="font-medium text-base">Pasta</div>
              <div className="text-slate-500">4 Items</div>
            </div>
            <div className="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
              <div className="font-medium text-base">Waffle</div>
              <div className="text-slate-500">3 Items</div>
            </div>
            <div className="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
              <div className="font-medium text-base">Snacks</div>
              <div className="text-slate-500">8 Items</div>
            </div>
            <div className="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
              <div className="font-medium text-base">Deserts</div>
              <div className="text-slate-500">8 Items</div>
            </div>
            <div className="col-span-12 sm:col-span-4 2xl:col-span-3 box p-5 cursor-pointer zoom-in">
              <div className="font-medium text-base">Beverage</div>
              <div className="text-slate-500">9 Items</div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-5 mt-5 pt-5 border-t">
            {$_.take($f(), 8).map((faker, fakerKey) => (
              <a
                key={fakerKey}
                href="#"
                onClick={() => {
                  setAddItemModal(true);
                }}
                className="intro-y block col-span-12 sm:col-span-4 2xl:col-span-3"
              >
                <div className="box rounded-md p-3 relative zoom-in">
                  <div className="flex-none relative block before:block before:w-full before:pt-[100%]">
                    <div className="absolute top-0 left-0 w-full h-full image-fit">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        className="rounded-md"
                        src={faker.foods[0].image}
                      />
                    </div>
                  </div>
                  <div className="block font-medium text-center truncate mt-3">
                    {faker.foods[0].name}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        {/* END: Item List */}
        {/* BEGIN: Ticket */}
        <TabGroup className="col-span-12 lg:col-span-4">
          <div className="intro-y pr-1">
            <div className="box p-2">
              <TabList className="nav-pills">
                <Tab className="w-full py-2" tag="button">
                  Ticket
                </Tab>
                <Tab className="w-full py-2" tag="button">
                  Details
                </Tab>
              </TabList>
            </div>
          </div>
          <TabPanels>
            <TabPanel>
              <div className="box p-2 mt-5">
                {$_.take($f(), 5).map((faker, fakerKey) => (
                  <a
                    key={fakerKey}
                    onClick={() => {
                      setAddItemModal(true);
                    }}
                    className="flex items-center p-3 cursor-pointer transition duration-300 ease-in-out bg-white dark:bg-darkmode-600 hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md"
                  >
                    <div className="max-w-[50%] truncate mr-1">
                      {faker.foods[0].name}
                    </div>
                    <div className="text-slate-500">x 1</div>
                    <Lucide
                      icon="Edit"
                      className="w-4 h-4 text-slate-500 ml-2"
                    />
                    <div className="ml-auto font-medium">
                      ${faker.totals[0]}
                    </div>
                  </a>
                ))}
              </div>
              <div className="box flex p-5 mt-5">
                <input
                  type="text"
                  className="form-control py-3 px-4 w-full bg-slate-100 border-slate-200/60 pr-10"
                  placeholder="Use coupon code..."
                />
                <button className="btn btn-primary ml-2">Apply</button>
              </div>
              <div className="box p-5 mt-5">
                <div className="flex">
                  <div className="mr-auto">Subtotal</div>
                  <div className="font-medium">$250</div>
                </div>
                <div className="flex mt-4">
                  <div className="mr-auto">Discount</div>
                  <div className="font-medium text-danger">-$20</div>
                </div>
                <div className="flex mt-4">
                  <div className="mr-auto">Tax</div>
                  <div className="font-medium">15%</div>
                </div>
                <div className="flex mt-4 pt-4 border-t border-slate-200/60 dark:border-darkmode-400">
                  <div className="mr-auto font-medium text-base">
                    Total Charge
                  </div>
                  <div className="font-medium text-base">$220</div>
                </div>
              </div>
              <div className="flex mt-5">
                <button className="btn w-32 border-slate-300 dark:border-darkmode-400 text-slate-500">
                  Clear Items
                </button>
                <button className="btn btn-primary w-32 shadow-md ml-auto">
                  Charge
                </button>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="box p-5 mt-5">
                <div className="flex items-center border-b border-slate-200 dark:border-darkmode-400 pb-5">
                  <div>
                    <div className="text-slate-500">Time</div>
                    <div className="mt-1">02/06/20 02:10 PM</div>
                  </div>
                  <Lucide
                    icon="Clock"
                    className="w-4 h-4 text-slate-500 ml-auto"
                  />
                </div>
                <div className="flex items-center border-b border-slate-200 dark:border-darkmode-400 py-5">
                  <div>
                    <div className="text-slate-500">Customer</div>
                    <div className="mt-1">{$f()[0].users[0].name}</div>
                  </div>
                  <Lucide
                    icon="User"
                    className="w-4 h-4 text-slate-500 ml-auto"
                  />
                </div>
                <div className="flex items-center border-b border-slate-200 dark:border-darkmode-400 py-5">
                  <div>
                    <div className="text-slate-500">People</div>
                    <div className="mt-1">3</div>
                  </div>
                  <Lucide
                    icon="Users"
                    className="w-4 h-4 text-slate-500 ml-auto"
                  />
                </div>
                <div className="flex items-center pt-5">
                  <div>
                    <div className="text-slate-500">Table</div>
                    <div className="mt-1">21</div>
                  </div>
                  <Lucide
                    icon="Mic"
                    className="w-4 h-4 text-slate-500 ml-auto"
                  />
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
        {/* END: Ticket */}
      </div>
      {/* BEGIN: New Order Modal */}
      <Modal
        show={newOrderModal}
        onHidden={() => {
          setNewOrderModal(false);
        }}
      >
        <ModalHeader>
          <h2 className="font-medium text-base mr-auto">New Order</h2>
        </ModalHeader>
        <ModalBody className="grid grid-cols-12 gap-4 gap-y-3">
          <div className="col-span-12">
            <label htmlFor="pos-form-1" className="form-label">
              Name
            </label>
            <input
              id="pos-form-1"
              type="text"
              className="form-control flex-1"
              placeholder="Customer name"
            />
          </div>
          <div className="col-span-12">
            <label htmlFor="pos-form-2" className="form-label">
              Table
            </label>
            <input
              id="pos-form-2"
              type="text"
              className="form-control flex-1"
              placeholder="Customer table"
            />
          </div>
          <div className="col-span-12">
            <label htmlFor="pos-form-3" className="form-label">
              Number of People
            </label>
            <input
              id="pos-form-3"
              type="text"
              className="form-control flex-1"
              placeholder="People"
            />
          </div>
        </ModalBody>
        <ModalFooter className="text-right">
          <button
            type="button"
            onClick={() => {
              setNewOrderModal(false);
            }}
            className="btn btn-outline-secondary w-32 mr-1"
          >
            Cancel
          </button>
          <button type="button" className="btn btn-primary w-32">
            Create Ticket
          </button>
        </ModalFooter>
      </Modal>
      {/* END: New Order Modal */}
      {/* BEGIN: Add Item Modal */}
      <Modal
        show={addItemModal}
        onHidden={() => {
          setAddItemModal(false);
        }}
      >
        <ModalHeader>
          <h2 className="font-medium text-base mr-auto">
            {$f()[0].foods[0].name}
          </h2>
        </ModalHeader>
        <ModalBody className="grid grid-cols-12 gap-4 gap-y-3">
          <div className="col-span-12">
            <label htmlFor="pos-form-4" className="form-label">
              Quantity
            </label>
            <div className="flex flex-1">
              <button
                type="button"
                className="btn w-12 border-slate-200 bg-slate-100 dark:bg-darkmode-700 dark:border-darkmode-500 text-slate-500 mr-1"
              >
                -
              </button>
              <input
                id="pos-form-4"
                type="text"
                className="form-control w-24 text-center"
                placeholder="Item quantity"
                value="2"
                onChange={() => {}}
              />
              <button
                type="button"
                className="btn w-12 border-slate-200 bg-slate-100 dark:bg-darkmode-700 dark:border-darkmode-500 text-slate-500 ml-1"
              >
                +
              </button>
            </div>
          </div>
          <div className="col-span-12">
            <label htmlFor="pos-form-5" className="form-label">
              Notes
            </label>
            <textarea
              id="pos-form-5"
              className="form-control"
              placeholder="Item notes"
            ></textarea>
          </div>
        </ModalBody>
        <ModalFooter className="text-right">
          <button
            type="button"
            onClick={() => {
              setAddItemModal(false);
            }}
            className="btn btn-outline-secondary w-24 mr-1"
          >
            Cancel
          </button>
          <button type="button" className="btn btn-primary w-24">
            Add Item
          </button>
        </ModalFooter>
      </Modal>
      {/* END: Add Item Modal */}
    </>
  );
}

export default Main;
