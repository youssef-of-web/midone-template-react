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
      <h2 className="intro-y text-lg font-medium mt-10">Transaction List</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap xl:flex-nowrap items-center mt-2">
          <div className="flex w-full sm:w-auto">
            <div className="w-48 relative text-slate-500">
              <input
                type="text"
                className="form-control w-48 box pr-10"
                placeholder="Search by invoice..."
              />
              <Lucide
                icon="Search"
                className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              />
            </div>
            <select className="form-select box ml-2">
              <option>Status</option>
              <option>Waiting Payment</option>
              <option>Confirmed</option>
              <option>Packing</option>
              <option>Delivered</option>
              <option>Completed</option>
            </select>
          </div>
          <div className="hidden xl:block mx-auto text-slate-500">
            Showing 1 to 10 of 150 entries
          </div>
          <div className="w-full xl:w-auto flex items-center mt-3 xl:mt-0">
            <button className="btn btn-primary shadow-md mr-2">
              <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
              Excel
            </button>
            <button className="btn btn-primary shadow-md mr-2">
              <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to PDF
            </button>
            <Dropdown>
              <DropdownToggle className="dropdown-toggle btn px-2 box">
                <span className="w-5 h-5 flex items-center justify-center">
                  <Lucide icon="Plus" className="w-4 h-4" />
                </span>
              </DropdownToggle>
              <DropdownMenu className="w-40">
                <DropdownContent>
                  <DropdownItem>
                    <Lucide icon="ArrowLeftRight" className="w-4 h-4 mr-2" />
                    Change Status
                  </DropdownItem>
                  <DropdownItem>
                    <Lucide icon="Bookmark" className="w-4 h-4 mr-2" /> Bookmark
                  </DropdownItem>
                </DropdownContent>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        {/* BEGIN: Data List */}
        <div className="intro-y col-span-12 overflow-auto 2xl:overflow-visible">
          <table className="table table-report -mt-2">
            <thead>
              <tr>
                <th className="whitespace-nowrap">
                  <input className="form-check-input" type="checkbox" />
                </th>
                <th className="whitespace-nowrap">INVOICE</th>
                <th className="whitespace-nowrap">BUYER NAME</th>
                <th className="text-center whitespace-nowrap">STATUS</th>
                <th className="whitespace-nowrap">PAYMENT</th>
                <th className="text-right whitespace-nowrap">
                  <div className="pr-16">TOTAL TRANSACTION</div>
                </th>
                <th className="text-center whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {$_.take($f(), 9).map((faker, fakerKey) => (
                <tr key={fakerKey} className="intro-x">
                  <td className="w-10">
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td className="w-40 !py-4">
                    <a
                      href=""
                      className="underline decoration-dotted whitespace-nowrap"
                    >
                      {"#INV-" + faker.totals[0] + "807556"}
                    </a>
                  </td>
                  <td className="w-40">
                    <a href="" className="font-medium whitespace-nowrap">
                      {faker.users[0].name}
                    </a>
                    {faker.trueFalse[0] ? (
                      <div
                        v-if="faker.trueFalse[0]"
                        className="text-slate-500 text-xs whitespace-nowrap mt-0.5"
                      >
                        Ohio, Ohio
                      </div>
                    ) : (
                      <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                        California, LA
                      </div>
                    )}
                  </td>
                  <td className="text-center">
                    <div
                      className={classnames({
                        "flex items-center justify-center whitespace-nowrap": true,
                        "text-success": faker.trueFalse[0],
                        "text-danger": !faker.trueFalse[0],
                      })}
                    >
                      <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                      {faker.trueFalse[0] ? "Active" : "Inactive"}
                    </div>
                  </td>
                  <td>
                    {faker.trueFalse[0] ? (
                      <>
                        <div className="whitespace-nowrap">
                          Direct bank transfer
                        </div>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          25 March, 12:55
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="whitespace-nowrap">
                          Checking payments
                        </div>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          30 March, 11:00
                        </div>
                      </>
                    )}
                  </td>
                  <td className="w-40 text-right">
                    <div className="pr-16">${faker.totals[0] + ",000,00"}</div>
                  </td>
                  <td className="table-report__action">
                    <div className="flex justify-center items-center">
                      <a
                        className="flex items-center text-primary whitespace-nowrap mr-5"
                        href="#"
                      >
                        <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" />{" "}
                        View Details
                      </a>
                      <a
                        className="flex items-center text-primary whitespace-nowrap"
                        href="#"
                        onClick={() => {
                          setDeleteConfirmationModal(true);
                        }}
                      >
                        <Lucide
                          icon="ArrowLeftRight"
                          className="w-4 h-4 mr-1"
                        />
                        Change Status
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* END: Data List */}
        {/* BEGIN: Pagination */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
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
