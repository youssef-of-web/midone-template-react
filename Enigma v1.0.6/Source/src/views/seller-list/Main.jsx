import {
  Lucide,
  Tippy,
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
      <h2 className="intro-y text-lg font-medium mt-10">Seller List</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap xl:flex-nowrap items-center mt-2">
          <button className="btn btn-primary shadow-md mr-2">
            Add New Seller
          </button>
          <Dropdown>
            <DropdownToggle className="btn px-2 box">
              <span className="w-5 h-5 flex items-center justify-center">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="w-40">
              <DropdownContent>
                <DropdownItem>
                  <Lucide icon="Printer" className="w-4 h-4 mr-2" /> Print
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
                  Excel
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
                  PDF
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
          <div className="hidden xl:block mx-auto text-slate-500">
            Showing 1 to 10 of 150 entries
          </div>
          <div className="w-full xl:w-auto flex items-center mt-3 xl:mt-0">
            <div className="w-56 relative text-slate-500">
              <input
                type="text"
                className="form-control w-56 box pr-10"
                placeholder="Search..."
              />
              <Lucide
                icon="Search"
                className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              />
            </div>
            <select className="w-56 xl:w-auto form-select box ml-2">
              <option>Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
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
                <th className="whitespace-nowrap">SELLER</th>
                <th className="text-center whitespace-nowrap">STORE</th>
                <th className="text-center whitespace-nowrap">GENDER</th>
                <th className="text-center whitespace-nowrap">STATUS</th>
                <th className="text-center whitespace-nowrap">
                  TOTAL PRODUCTS
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
                  <td className="!py-3.5">
                    <div className="flex items-center">
                      <div className="w-9 h-9 image-fit zoom-in">
                        <Tippy
                          tag="img"
                          alt="Midone - HTML Admin Template"
                          className="rounded-lg border-white shadow-md"
                          src={faker.images[0]}
                          content={`Uploaded at ${faker.dates[0]}`}
                        />
                      </div>
                      <div className="ml-4">
                        <a href="" className="font-medium whitespace-nowrap">
                          {faker.users[0].name}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker.users[0].email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <a
                      className="flex items-center justify-center underline decoration-dotted"
                      href="#"
                    >
                      {
                        ["Themeforest", "Codecanyon", "Graphicriver"][
                          $_.random(0, 2)
                        ]
                      }
                    </a>
                  </td>
                  <td className="text-center capitalize">
                    {faker.users[0].gender}
                  </td>
                  <td className="w-40">
                    <div
                      className={classnames({
                        "flex items-center justify-center": true,
                        "text-success": faker.trueFalse[0],
                        "text-danger": !faker.trueFalse[0],
                      })}
                    >
                      <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                      {faker.trueFalse[0] ? "Active" : "Inactive"}
                    </div>
                  </td>
                  <td className="text-center">{faker.totals[0]} Items</td>
                  <td className="table-report__action w-56">
                    <div className="flex justify-center items-center">
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
