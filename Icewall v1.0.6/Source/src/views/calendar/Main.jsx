import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  FullCalendarDraggable,
} from "@/base-components";
import Calendar from "@/components/calendar/Main";
import dom from "@left4code/tw-starter/dist/js/dom";

function Main() {
  const dragableOptions = {
    itemSelector: ".event",
    eventData(eventEl) {
      return {
        title: dom(eventEl).find(".event__title").html(),
        duration: {
          days: parseInt(dom(eventEl).find(".event__days").text()),
        },
      };
    },
  };

  return (
    <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Calendar</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          <button className="btn btn-primary shadow-md mr-2">
            Print Schedule
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
                  <Lucide icon="Share2" className="w-4 h-4 mr-2" /> Share
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-5">
        {/* BEGIN: Calendar Side Menu */}
        <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
          <div className="box p-5 intro-y">
            <button type="button" className="btn btn-primary w-full mt-2">
              <Lucide icon="Edit3" className="w-4 h-4 mr-2" /> Add New Schedule
            </button>
            <FullCalendarDraggable
              id="calendar-events"
              options={dragableOptions}
              className="border-t border-b border-slate-200/60 dark:border-darkmode-400 mt-6 mb-5 py-3"
            >
              <div className="relative">
                <div className="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center">
                  <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                  <div className="pr-10">
                    <div className="event__title truncate">VueJS Amsterdam</div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      <span className="event__days">2</span> Days{" "}
                      <span className="mx-1">•</span> 10:00 AM
                    </div>
                  </div>
                </div>
                <a
                  className="flex items-center absolute top-0 bottom-0 my-auto right-0"
                  href=""
                >
                  <Lucide icon="Edit" className="w-4 h-4 text-slate-500" />
                </a>
              </div>
              <div className="relative">
                <div className="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center">
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  <div className="pr-10">
                    <div className="event__title truncate">
                      Vue Fes Japan 2019
                    </div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      <span className="event__days">3</span> Days{" "}
                      <span className="mx-1">•</span> 07:00 AM
                    </div>
                  </div>
                </div>
                <a
                  className="flex items-center absolute top-0 bottom-0 my-auto right-0"
                  href=""
                >
                  <Lucide icon="Edit" className="w-4 h-4 text-slate-500" />
                </a>
              </div>
              <div className="relative">
                <div className="event p-3 -mx-3 cursor-pointer transition duration-300 ease-in-out hover:bg-slate-100 dark:hover:bg-darkmode-400 rounded-md flex items-center">
                  <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                  <div className="pr-10">
                    <div className="event__title truncate">Laracon 2021</div>
                    <div className="text-slate-500 text-xs mt-0.5">
                      <span className="event__days">4</span> Days{" "}
                      <span className="mx-1">•</span> 11:00 AM
                    </div>
                  </div>
                </div>
                <a
                  className="flex items-center absolute top-0 bottom-0 my-auto right-0"
                  href=""
                >
                  <Lucide icon="Edit" className="w-4 h-4 text-slate-500" />
                </a>
              </div>
              <div
                className="text-slate-500 p-3 text-center hidden"
                id="calendar-no-events"
              >
                No events yet
              </div>
            </FullCalendarDraggable>
            <div className="form-check form-switch flex">
              <label className="form-check-label" htmlFor="checkbox-events">
                Remove after drop
              </label>
              <input
                className="show-code form-check-input ml-auto"
                type="checkbox"
                id="checkbox-events"
              />
            </div>
          </div>
          <div className="box p-5 intro-y mt-5">
            <div className="flex">
              <Lucide icon="ChevronLeft" className="w-5 h-5 text-slate-500" />
              <div className="font-medium text-base mx-auto">April</div>
              <Lucide icon="ChevronRight" className="w-5 h-5 text-slate-500" />
            </div>
            <div className="grid grid-cols-7 gap-4 mt-5 text-center">
              <div className="font-medium">Su</div>
              <div className="font-medium">Mo</div>
              <div className="font-medium">Tu</div>
              <div className="font-medium">We</div>
              <div className="font-medium">Th</div>
              <div className="font-medium">Fr</div>
              <div className="font-medium">Sa</div>
              <div className="py-0.5 rounded relative text-slate-500">29</div>
              <div className="py-0.5 rounded relative text-slate-500">30</div>
              <div className="py-0.5 rounded relative text-slate-500">31</div>
              <div className="py-0.5 rounded relative">1</div>
              <div className="py-0.5 rounded relative">2</div>
              <div className="py-0.5 rounded relative">3</div>
              <div className="py-0.5 rounded relative">4</div>
              <div className="py-0.5 rounded relative">5</div>
              <div className="py-0.5 bg-success/20 dark:bg-success/30 rounded relative">
                6
              </div>
              <div className="py-0.5 rounded relative">7</div>
              <div className="py-0.5 bg-primary text-white rounded relative">
                8
              </div>
              <div className="py-0.5 rounded relative">9</div>
              <div className="py-0.5 rounded relative">10</div>
              <div className="py-0.5 rounded relative">11</div>
              <div className="py-0.5 rounded relative">12</div>
              <div className="py-0.5 rounded relative">13</div>
              <div className="py-0.5 rounded relative">14</div>
              <div className="py-0.5 rounded relative">15</div>
              <div className="py-0.5 rounded relative">16</div>
              <div className="py-0.5 rounded relative">17</div>
              <div className="py-0.5 rounded relative">18</div>
              <div className="py-0.5 rounded relative">19</div>
              <div className="py-0.5 rounded relative">20</div>
              <div className="py-0.5 rounded relative">21</div>
              <div className="py-0.5 rounded relative">22</div>
              <div className="py-0.5 bg-pending/20 dark:bg-pending/30 rounded relative">
                23
              </div>
              <div className="py-0.5 rounded relative">24</div>
              <div className="py-0.5 rounded relative">25</div>
              <div className="py-0.5 rounded relative">26</div>
              <div className="py-0.5 bg-primary/10 dark:bg-primary/50 rounded relative">
                27
              </div>
              <div className="py-0.5 rounded relative">28</div>
              <div className="py-0.5 rounded relative">29</div>
              <div className="py-0.5 rounded relative">30</div>
              <div className="py-0.5 rounded relative text-slate-500">1</div>
              <div className="py-0.5 rounded relative text-slate-500">2</div>
              <div className="py-0.5 rounded relative text-slate-500">3</div>
              <div className="py-0.5 rounded relative text-slate-500">4</div>
              <div className="py-0.5 rounded relative text-slate-500">5</div>
              <div className="py-0.5 rounded relative text-slate-500">6</div>
              <div className="py-0.5 rounded relative text-slate-500">7</div>
              <div className="py-0.5 rounded relative text-slate-500">8</div>
              <div className="py-0.5 rounded relative text-slate-500">9</div>
            </div>
            <div className="border-t border-slate-200/60 dark:border-darkmode-400 pt-5 mt-5">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                <span className="truncate">Independence Day</span>
                <div className="h-px flex-1 border border-r border-dashed border-slate-200 mx-3 xl:hidden"></div>
                <span className="font-medium xl:ml-auto">23th</span>
              </div>
              <div className="flex items-center mt-4">
                <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <span className="truncate">Memorial Day</span>
                <div className="h-px flex-1 border border-r border-dashed border-slate-200 mx-3 xl:hidden"></div>
                <span className="font-medium xl:ml-auto">10th</span>
              </div>
            </div>
          </div>
        </div>
        {/* END: Calendar Side Menu */}
        {/* BEGIN: Calendar Content */}
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
          <div className="box p-5">
            <Calendar />
          </div>
        </div>
        {/* END: Calendar Content */}
      </div>
    </>
  );
}

export default Main;
