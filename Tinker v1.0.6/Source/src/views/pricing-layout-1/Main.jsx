import { Lucide } from "@/base-components";

function Main() {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Pricing Layout</h2>
      </div>
      {/* BEGIN: Pricing Layout */}
      <div className="intro-y box flex flex-col lg:flex-row mt-5">
        <div className="intro-y flex-1 px-5 py-16">
          <Lucide
            icon="CreditCard"
            className="block w-12 h-12 text-primary mx-auto"
          />
          <div className="text-xl font-medium text-center mt-10">
            Basic Plan
          </div>
          <div className="text-slate-600 dark:text-slate-500 text-center mt-5">
            1 Domain <span className="mx-1">•</span> 10 Users
            <span className="mx-1">•</span> 20 Copies
          </div>
          <div className="text-slate-500 px-10 text-center mx-auto mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-center">
            <div className="relative text-5xl font-semibold mt-8 mx-auto">
              <span className="absolute text-2xl top-0 left-0 -ml-4">$</span> 35
            </div>
          </div>
          <button
            type="button"
            className="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
          >
            PURCHASE NOW
          </button>
        </div>
        <div className="intro-y border-b border-t lg:border-b-0 lg:border-t-0 flex-1 p-5 lg:border-l lg:border-r border-slate-200/60 dark:border-darkmode-400 py-16">
          <Lucide
            icon="Briefcase"
            className="block w-12 h-12 text-primary mx-auto"
          />
          <div className="text-xl font-medium text-center mt-10">Business</div>
          <div className="text-slate-600 dark:text-slate-500 text-center mt-5">
            1 Domain <span className="mx-1">•</span> 10 Users
            <span className="mx-1">•</span> 20 Copies
          </div>
          <div className="text-slate-500 px-10 text-center mx-auto mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-center">
            <div className="relative text-5xl font-semibold mt-8 mx-auto">
              <span className="absolute text-2xl top-0 left-0 -ml-4">$</span> 60
            </div>
          </div>
          <button
            type="button"
            className="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
          >
            PURCHASE NOW
          </button>
        </div>
        <div className="intro-y flex-1 px-5 py-16">
          <Lucide
            icon="ShoppingBag"
            className="block w-12 h-12 text-primary mx-auto"
          />
          <div className="text-xl font-medium text-center mt-10">
            Enterprise
          </div>
          <div className="text-slate-600 dark:text-slate-500 text-center mt-5">
            1 Domain <span className="mx-1">•</span> 10 Users
            <span className="mx-1">•</span> 20 Copies
          </div>
          <div className="text-slate-500 px-10 text-center mx-auto mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-center">
            <div className="relative text-5xl font-semibold mt-8 mx-auto">
              <span className="absolute text-2xl top-0 left-0 -ml-4">$</span>{" "}
              120
            </div>
          </div>
          <button
            type="button"
            className="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
          >
            PURCHASE NOW
          </button>
        </div>
      </div>
      {/* END: Pricing Layout */}
      {/* BEGIN: Pricing Layout */}
      <div className="intro-y box flex flex-col lg:flex-row mt-5">
        <div className="intro-y flex-1 px-5 py-16">
          <Lucide
            icon="Activity"
            className="block w-12 h-12 text-primary mx-auto"
          />
          <div className="text-xl font-medium text-center mt-10">
            Basic Plan
          </div>
          <div className="text-slate-600 dark:text-slate-500 text-center mt-5">
            1 Domain <span className="mx-1">•</span> 10 Users
            <span className="mx-1">•</span> 20 Copies
          </div>
          <div className="text-slate-500 px-10 text-center mx-auto mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-center">
            <div className="relative text-5xl font-semibold mt-8 mx-auto">
              <span className="absolute text-2xl top-0 left-0 -ml-4">$</span> 35
            </div>
          </div>
          <button
            type="button"
            className="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
          >
            PURCHASE NOW
          </button>
        </div>
        <div className="intro-y border-b border-t lg:border-b-0 lg:border-t-0 flex-1 px-5 lg:border-l lg:border-r border-slate-200/60 dark:border-darkmode-400 py-16">
          <Lucide icon="Box" className="block w-12 h-12 text-primary mx-auto" />
          <div className="text-xl font-medium text-center mt-10">Business</div>
          <div className="text-slate-600 dark:text-slate-500 text-center mt-5">
            1 Domain <span className="mx-1">•</span> 10 Users
            <span className="mx-1">•</span> 20 Copies
          </div>
          <div className="text-slate-500 px-10 text-center mx-auto mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-center">
            <div className="relative text-5xl font-semibold mt-8 mx-auto">
              <span className="absolute text-2xl top-0 left-0 -ml-4">$</span> 60
            </div>
          </div>
          <button
            type="button"
            className="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
          >
            PURCHASE NOW
          </button>
        </div>
        <div className="intro-y flex-1 px-5 py-16">
          <Lucide
            icon="Send"
            className="block w-12 h-12 text-primary mx-auto"
          />
          <div className="text-xl font-medium text-center mt-10">
            Enterprise
          </div>
          <div className="text-slate-600 dark:text-slate-500 text-center mt-5">
            1 Domain <span className="mx-1">•</span> 10 Users
            <span className="mx-1">•</span> 20 Copies
          </div>
          <div className="text-slate-500 px-10 text-center mx-auto mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className="flex justify-center">
            <div className="relative text-5xl font-semibold mt-8 mx-auto">
              <span className="absolute text-2xl top-0 left-0 -ml-4">$</span>{" "}
              120
            </div>
          </div>
          <button
            type="button"
            className="btn btn-rounded-primary py-3 px-4 block mx-auto mt-8"
          >
            PURCHASE NOW
          </button>
        </div>
      </div>
      {/* END: Pricing Layout */}
    </>
  );
}

export default Main;
