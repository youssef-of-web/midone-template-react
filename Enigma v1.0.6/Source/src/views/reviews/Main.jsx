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
      <h2 className="intro-y text-lg font-medium mt-10">Reviews</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap xl:flex-nowrap items-center mt-2">
          <div className="flex w-full sm:w-auto">
            <div className="w-48 relative text-slate-500">
              <input
                type="text"
                className="form-control w-48 box pr-10"
                placeholder="Search by name..."
              />
              <Lucide
                icon="Search"
                className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              />
            </div>
            <select className="w-48 xl:w-auto form-select box ml-2">
              <option>Status</option>
              <option>Active</option>
              <option>Removed</option>
            </select>
          </div>
          <div className="hidden xl:block mx-auto text-slate-500">
            Showing 1 to 10 of 150 entries
          </div>
          <div className="w-full xl:w-auto flex flex-wrap xl:flex-nowrap items-center gap-y-3 mt-3 xl:mt-0">
            <button className="btn btn-primary shadow-md mr-2">
              <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to
              Excel
            </button>
            <button className="btn btn-primary shadow-md mr-2">
              <Lucide icon="FileText" className="w-4 h-4 mr-2" /> Export to PDF
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
                    <Lucide icon="ArrowLeftRight" className="w-4 h-4 mr-2" />{" "}
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
                <th className="whitespace-nowrap">PRODUCT</th>
                <th className="whitespace-nowrap">NAME</th>
                <th className="whitespace-nowrap">RATING</th>
                <th className="text-center whitespace-nowrap">POSTED TIME</th>
                <th className="text-center whitespace-nowrap">STATUS</th>
                <th className="text-center whitespace-nowrap">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {$_.take($f(), 9).map((faker, fakerKey) => (
                <tr key={fakerKey} className="intro-x">
                  <td className="w-10">
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td className="!py-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 image-fit zoom-in">
                        <Tippy
                          tag="img"
                          alt="Midone - HTML Admin Template"
                          className="rounded-lg border-1 border-white shadow-md"
                          src={faker.images[0]}
                          content={`Uploaded at ${faker.dates[0]}`}
                        />
                      </div>
                      <a href="" className="font-medium whitespace-nowrap ml-4">
                        {faker.products[0].name}
                      </a>
                    </div>
                  </td>
                  <td className="whitespace-nowrap">
                    <a
                      className="flex items-center underline decoration-dotted"
                      href="#"
                    >
                      {faker.users[0].name}
                    </a>
                  </td>
                  <td className="text-center">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <Lucide
                          icon="Star"
                          className="text-pending fill-pending/30 w-4 h-4 mr-1"
                        />
                        <Lucide
                          icon="Star"
                          className="text-pending fill-pending/30 w-4 h-4 mr-1"
                        />
                        <Lucide
                          icon="Star"
                          className="text-pending fill-pending/30 w-4 h-4 mr-1"
                        />
                        <Lucide
                          icon="Star"
                          className="text-pending fill-pending/30 w-4 h-4 mr-1"
                        />
                        <Lucide
                          icon="Star"
                          className="text-slate-400 fill-slate/30 w-4 h-4 mr-1"
                        />
                      </div>
                      <div className="text-xs text-slate-500 ml-1">(4.5+)</div>
                    </div>
                  </td>
                  <td className="text-center whitespace-nowrap">
                    {faker.formattedTimes[0]}
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
                      {faker.trueFalse[0] ? "Active" : "Removed"}
                    </div>
                  </td>
                  <td className="table-report__action w-56">
                    <div className="flex justify-center items-center">
                      <a
                        className="flex items-center text-primary whitespace-nowrap"
                        href="#"
                      >
                        <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" />{" "}
                        View Details
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
