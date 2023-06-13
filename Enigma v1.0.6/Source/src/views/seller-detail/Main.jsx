import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Modal,
  ModalBody,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";
import { useState } from "react";

function Main() {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Seller Details</h2>
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
                  <Lucide icon="File" className="w-4 h-4 mr-2" /> Export PDF
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      {/* BEGIN: Seller Details */}
      <div className="intro-y grid grid-cols-11 gap-5 mt-5">
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3">
          <div className="box p-5 rounded-md">
            <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
              <div className="font-medium text-base truncate">User Details</div>
              <a href="" className="flex items-center ml-auto text-primary">
                <Lucide icon="Edit" className="w-4 h-4 mr-2" /> More Details
              </a>
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Unique ID:
              <a href="" className="underline decoration-dotted ml-1">
                SLR-20220217-2053411933
              </a>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="User" className="w-4 h-4 text-slate-500 mr-2" />{" "}
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
            <div className="flex items-center border-t border-slate-200/60 dark:border-darkmode-400 pt-5 mt-5 font-medium">
              <button
                type="button"
                className="btn btn-outline-secondary w-full py-1 px-2"
              >
                Message User
              </button>
            </div>
          </div>
          <div className="box p-5 rounded-md mt-5">
            <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
              <div className="font-medium text-base truncate">
                Store Details
              </div>
              <a href="" className="flex items-center ml-auto text-primary">
                <Lucide icon="Edit" className="w-4 h-4 mr-2" /> More Details
              </a>
            </div>
            <div className="flex items-center">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Unique ID:
              <a href="" className="underline decoration-dotted ml-1">
                STR-2053411933-20220217
              </a>
            </div>
            <div className="flex items-center mt-3">
              <Lucide
                icon="ShoppingBag"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Name:
              <a href="" className="underline decoration-dotted ml-1">
                Themeforest
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
            <div className="flex items-center mt-3">
              <Lucide icon="Calendar" className="w-4 h-4 text-slate-500 mr-2" />
              Status:
              <span className="bg-success/20 text-success rounded px-2 ml-1">
                Active
              </span>
            </div>
            <div className="flex items-center border-t border-slate-200/60 dark:border-darkmode-400 pt-5 mt-5 font-medium">
              <button
                type="button"
                className="btn btn-outline-secondary w-full py-1 px-2"
              >
                Change Status
              </button>
            </div>
          </div>
          <div className="box p-5 rounded-md mt-5">
            <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
              <div className="font-medium text-base truncate">
                Transaction Reports
              </div>
              <a href="" className="flex items-center ml-auto text-primary">
                <Lucide icon="Edit" className="w-4 h-4 mr-2" /> More Details
              </a>
            </div>
            <div className="flex items-center mt-3">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Avg. Daily Transactions:
              <div className="ml-auto">$1,500.00</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Avg. Monthly Transactions:
              <div className="ml-auto">$42,500.00</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide
                icon="Clipboard"
                className="w-4 h-4 text-slate-500 mr-2"
              />
              Avg. Annually Transactions:
              <div className="ml-auto">$1,012,500.00</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Star" className="w-4 h-4 text-slate-500 mr-2" />{" "}
              Average Rating:
              <div className="ml-auto">4.9+</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Album" className="w-4 h-4 text-slate-500 mr-2" />{" "}
              Total Products:
              <div className="ml-auto">7,120</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Archive" className="w-4 h-4 text-slate-500 mr-2" />
              Total Transactions:
              <div className="ml-auto">1.512.001</div>
            </div>
            <div className="flex items-center mt-3">
              <Lucide icon="Monitor" className="w-4 h-4 text-slate-500 mr-2" />
              Active Disputes:
              <div className="ml-auto">1</div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 2xl:col-span-8">
          <div className="grid grid-cols-12 gap-5">
            {$_.take($f(), 9).map((faker, fakerKey) => (
              <div
                key={fakerKey}
                className="intro-y col-span-12 sm:col-span-6 2xl:col-span-4"
              >
                <div className="box">
                  <div className="p-5">
                    <div className="h-40 2xl:h-56 image-fit rounded-md overflow-hidden before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black before:to-black/10">
                      <img
                        alt="Midone - HTML Admin Template"
                        className="rounded-md"
                        src={faker.images[0]}
                      />
                      <template v-if="faker.trueFalse[0]">
                        <span className="absolute top-0 bg-pending/80 text-white text-xs m-5 px-2 py-1 rounded z-10">
                          Featured
                        </span>
                      </template>
                      <div className="absolute bottom-0 text-white px-5 pb-6 z-10">
                        <a href="" className="block font-medium text-base">
                          {faker.products[0].name}
                        </a>
                        <span className="text-white/90 text-xs mt-3">
                          {faker.products[0].category}
                        </span>
                      </div>
                    </div>
                    <div className="text-slate-600 dark:text-slate-500 mt-5">
                      <div className="flex items-center">
                        <Lucide icon="Link" className="w-4 h-4 mr-2" /> Price: $
                        {faker.totals[0]}
                      </div>
                      <div className="flex items-center mt-2">
                        <Lucide icon="Layers" className="w-4 h-4 mr-2" />{" "}
                        Remaining Stock:
                        {faker.stocks[0]}
                      </div>
                      <div className="flex items-center mt-2">
                        <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                        Status: {faker.trueFalse[0] ? "Active" : "Inactive"}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center lg:justify-end items-center p-5 border-t border-slate-200/60 dark:border-darkmode-400">
                    <a
                      className="flex items-center text-primary mr-auto"
                      href="#"
                    >
                      <Lucide icon="Eye" className="w-4 h-4 mr-1" /> Preview
                    </a>
                    <a className="flex items-center mr-3" href="#">
                      <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" />{" "}
                      Edit
                    </a>
                    <a
                      className="flex items-center text-danger"
                      href="#"
                      onClick={() => {
                        setDeleteConfirmationModal(true);
                      }}
                    >
                      <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Delete
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* BEGIN: Pagination */}
          <div className="intro-y col-span-11 flex flex-wrap sm:flex-row sm:flex-nowrap items-center mt-6">
            <nav className="w-full sm:w-auto sm:mr-auto">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#">
                    <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    <Lucide icon="ChevronsRight" className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </nav>
            <select className="w-20 form-select box mt-3 sm:mt-0">
              <option>10</option>
              <option>25</option>
              <option>35</option>
              <option>50</option>
            </select>
          </div>
          {/* END: Pagination */}
        </div>
      </div>
      {/* END: Seller Details */}
      {/* BEGIN: Delete Confirmation Modal */}
      <Modal
        show={deleteConfirmationModal}
        onHidden={() => {
          setDeleteConfirmationModal(false);
        }}
      >
        <ModalBody className="p-0">
          <div className="p-5 text-center">
            <Lucide
              icon="XCircle"
              className="w-16 h-16 text-danger mx-auto mt-3"
            />
            <div className="text-3xl mt-5">Are you sure?</div>
            <div className="text-slate-500 mt-2">
              Do you really want to delete these records? <br />
              This process cannot be undone.
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <button
              type="button"
              onClick={() => {
                setDeleteConfirmationModal(false);
              }}
              className="btn btn-outline-secondary w-24 mr-1"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-danger w-24">
              Delete
            </button>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Delete Confirmation Modal */}
    </>
  );
}

export default Main;
