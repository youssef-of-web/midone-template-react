import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";
import VerticalBarChart from "@/components/vertical-bar-chart/Main";
import StackedBarChart from "@/components/stacked-bar-chart/Main";
import HorizontalBarChart from "@/components/horizontal-bar-chart/Main";
import LineChart from "@/components/line-chart/Main";
import DonutChart from "@/components/donut-chart/Main";
import PieChart from "@/components/pie-chart/Main";

function Main() {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Chart</h2>
      </div>
      <div className="intro-y grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Vertical Bar Chart */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Vertical Bar Chart
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-1"
                    >
                      Show example code
                    </label>
                    <input
                      onClick={toggle}
                      className="form-check-input mr-0 ml-3"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <Preview>
                    <VerticalBarChart height={400} />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <VerticalBarChart height={400} />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Vertical Bar Chart */}
          {/* BEGIN: Horizontal Bar Chart */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Horizontal Bar Chart
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-2"
                    >
                      Show example code
                    </label>
                    <input
                      onClick={toggle}
                      className="form-check-input mr-0 ml-3"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <Preview>
                    <HorizontalBarChart height={400} />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <HorizontalBarChart height={400} />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Horizontal Bar Chart */}
          {/* BEGIN: Donut Chart */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Donut Chart</h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-3"
                    >
                      Show example code
                    </label>
                    <input
                      onClick={toggle}
                      className="form-check-input mr-0 ml-3"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <Preview>
                    <DonutChart height={400} />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <DonutChart height={400} />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Donut Chart */}
        </div>
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Stacked Bar Chart */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Stacked Bar Chart
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-4"
                    >
                      Show example code
                    </label>
                    <input
                      onClick={toggle}
                      className="form-check-input mr-0 ml-3"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <Preview>
                    <StackedBarChart height={400} />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <StackedBarChart height={400} />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Stacked Bar Chart */}
          {/* BEGIN: Line Chart */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Line Chart</h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-5"
                    >
                      Show example code
                    </label>
                    <input
                      onClick={toggle}
                      className="form-check-input mr-0 ml-3"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <Preview>
                    <LineChart height={400} />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <LineChart height={400} />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Line Chart */}
          {/* BEGIN: Pie Chart */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Pie Chart</h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-6"
                    >
                      Show example code
                    </label>
                    <input
                      onClick={toggle}
                      className="form-check-input mr-0 ml-3"
                      type="checkbox"
                    />
                  </div>
                </div>
                <div className="p-5">
                  <Preview>
                    <PieChart height={400} />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <PieChart height={400} />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Pie Chart */}
        </div>
      </div>
    </>
  );
}

export default Main;
