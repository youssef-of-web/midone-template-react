import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
} from "@/base-components";
import { faker as $f } from "@/utils";

function Main() {
  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Users Layout</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <button className="btn btn-primary shadow-md mr-2">
            Add New User
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
                  <Lucide icon="Users" className="w-4 h-4 mr-2" /> Add Group
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="MessageCircle" className="w-4 h-4 mr-2" /> Send
                  Message
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
          <div className="hidden md:block mx-auto text-slate-500">
            Showing 1 to 10 of 150 entries
          </div>
          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
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
          </div>
        </div>
        {/* BEGIN: Users Layout */}
        {$f().map((faker, fakerKey) => (
          <div key={fakerKey} className="intro-y col-span-12 md:col-span-6">
            <div className="box">
              <div className="flex flex-col lg:flex-row items-center p-5">
                <div className="w-24 h-24 lg:w-12 lg:h-12 image-fit lg:mr-1">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={faker.photos[0]}
                  />
                </div>
                <div className="lg:ml-2 lg:mr-auto text-center lg:text-left mt-3 lg:mt-0">
                  <a href="" className="font-medium">
                    {faker.users[0].name}
                  </a>
                  <div className="text-slate-500 text-xs mt-0.5">
                    {faker.jobs[0]}
                  </div>
                </div>
                <div className="flex mt-4 lg:mt-0">
                  <button className="btn btn-primary py-1 px-2 mr-2">
                    Message
                  </button>
                  <button className="btn btn-outline-secondary py-1 px-2">
                    Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* BEGIN: Users Layout */}
        {/* END: Pagination */}
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
    </>
  );
}

export default Main;
