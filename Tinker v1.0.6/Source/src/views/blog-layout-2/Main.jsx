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
        <h2 className="text-lg font-medium mr-auto">Blog Layout</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          <button className="btn btn-primary shadow-md mr-2">
            Add New Post
          </button>
          <Dropdown className="ml-auto sm:ml-0">
            <DropdownToggle className="btn px-2 box">
              <span className="w-5 h-5 flex items-center justify-center">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="w-40">
              <DropdownContent>
                <DropdownItem>
                  <Lucide icon="Share2" className="w-4 h-4 mr-2" /> Share Post
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="Download" className="w-4 h-4 mr-2" /> Download
                  Post
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="intro-y grid grid-cols-12 gap-6 mt-5">
        {/* BEGIN: Blog Layout */}
        {$_.take($f(), 6).map((faker, fakerKey) => (
          <div key={fakerKey} className="intro-y col-span-12 md:col-span-6 box">
            <div className="h-[320px] before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:bg-gradient-to-t before:from-black/90 before:to-black/10 image-fit">
              <img
                alt="Midone Tailwind HTML Admin Template"
                className="rounded-t-md"
                src={faker.images[0]}
              />
              <div className="absolute w-full flex items-center px-5 pt-6 z-10">
                <div className="w-10 h-10 flex-none image-fit">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={faker.photos[0]}
                  />
                </div>
                <div className="ml-3 text-white mr-auto">
                  <a href="" className="font-medium">
                    {faker.users[0].name}
                  </a>
                  <div className="text-xs mt-0.5">
                    {faker.formattedTimes[0]}
                  </div>
                </div>
                <Dropdown className="ml-3">
                  <DropdownToggle
                    tag="a"
                    href="#"
                    className="bg-white/20 w-8 h-8 flex items-center justify-center rounded-full"
                  >
                    <Lucide
                      icon="MoreVertical"
                      className="w-4 h-4 text-white"
                    />
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>
                        <Lucide icon="Edit2" className="w-4 h-4 mr-2" /> Edit
                        Post
                      </DropdownItem>
                      <DropdownItem>
                        <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Delete
                        Post
                      </DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="absolute bottom-0 text-white px-5 pb-6 z-10">
                <span className="bg-white/20 px-2 py-1 rounded">
                  {faker.products[0].category}
                </span>
                <a href="" className="block font-medium text-xl mt-3">
                  {faker.news[0].title}
                </a>
              </div>
            </div>
            <div className="p-5 text-slate-600 dark:text-slate-500">
              {faker.news[0].shortContent}
            </div>
            <div className="flex items-center px-5 py-3 border-t border-slate-200/60 dark:border-darkmode-400">
              <Tippy
                tag="a"
                href=""
                className="intro-x w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 dark:border-darkmode-400 dark:bg-darkmode-300 dark:text-slate-300 text-slate-500 mr-2"
                content="Bookmark"
              >
                <Lucide icon="Bookmark" className="w-3 h-3" />
              </Tippy>
              <div className="intro-x flex mr-2">
                <div className="intro-x w-8 h-8 image-fit">
                  <Tippy
                    tag="img"
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full border border-white zoom-in"
                    src={faker.photos[0]}
                    content={faker.users[0].name}
                  />
                </div>
                <div className="intro-x w-8 h-8 image-fit -ml-4">
                  <Tippy
                    tag="img"
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full border border-white zoom-in"
                    src={faker.photos[1]}
                    content={faker.users[1].name}
                  />
                </div>
                <div className="intro-x w-8 h-8 image-fit -ml-4">
                  <Tippy
                    tag="img"
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full border border-white zoom-in"
                    src={faker.photos[2]}
                    content={faker.users[2].name}
                  />
                </div>
              </div>
              <Tippy
                tag="a"
                href=""
                className="intro-x w-8 h-8 flex items-center justify-center rounded-full text-primary bg-primary/10 dark:bg-darkmode-300 dark:text-slate-300 ml-auto"
                content="Share"
              >
                <Lucide icon="Share2" className="w-3 h-3" />
              </Tippy>
              <Tippy
                tag="a"
                href=""
                className="intro-x w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white ml-2"
                content="Download PDF"
              >
                <Lucide icon="Share" className="w-3 h-3" />
              </Tippy>
            </div>
            <div className="px-5 pt-3 pb-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <div className="w-full flex text-slate-500 text-xs sm:text-sm">
                <div className="mr-2">
                  Comments:{" "}
                  <span className="font-medium">{faker.totals[0]}</span>
                </div>
                <div className="mr-2">
                  Views: <span className="font-medium">{faker.totals[1]}k</span>
                </div>
                <div className="ml-auto">
                  Likes: <span className="font-medium">{faker.totals[2]}k</span>
                </div>
              </div>
              <div className="w-full flex items-center mt-3">
                <div className="w-8 h-8 flex-none image-fit mr-3">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    className="rounded-full"
                    src={faker.photos[0]}
                  />
                </div>
                <div className="flex-1 relative text-slate-600 dark:text-slate-200">
                  <input
                    type="text"
                    className="form-control form-control-rounded border-transparent bg-slate-100 pr-10"
                    placeholder="Post a comment..."
                  />
                  <Lucide
                    icon="Smile"
                    className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* END: Blog Layout */}
        {/* BEGIN: Pagiantion */}
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
        {/* END: Pagiantion */}
      </div>
    </>
  );
}

export default Main;
