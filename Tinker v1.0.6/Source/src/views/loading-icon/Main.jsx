import { LoadingIcon } from "@/base-components";

function Main() {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">SVG Loaders</h2>
      </div>
      {/* BEGIN: Icon List */}
      <div className="intro-y grid grid-cols-12 sm:gap-6 gap-y-6 box px-5 py-8 mt-5">
        <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">
          <LoadingIcon icon="audio" className="w-8 h-8" />
          <div className="text-center text-xs mt-2">audio</div>
        </div>
        <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">
          <LoadingIcon icon="ball-triangle" className="w-8 h-8" />
          <div className="text-center text-xs mt-2">ball-triangle</div>
        </div>
        <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">
          <LoadingIcon icon="bars" className="w-8 h-8" />
          <div className="text-center text-xs mt-2">bars</div>
        </div>
        <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">
          <LoadingIcon icon="circles" className="w-8 h-8" />
          <div className="text-center text-xs mt-2">circles</div>
        </div>
        <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">
          <LoadingIcon icon="grid" className="w-8 h-8" />
          <div className="text-center text-xs mt-2">grid</div>
        </div>
        <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">
          <LoadingIcon icon="hearts" className="w-8 h-8" />
          <div className="text-center text-xs mt-2">hearts</div>
        </div>
        <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">
          <LoadingIcon icon="oval" className="w-8 h-8" />
          <div className="text-center text-xs mt-2">oval</div>
        </div>
        <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">
          <LoadingIcon icon="puff" className="w-8 h-8" />
          <div className="text-center text-xs mt-2">puff</div>
        </div>
        <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">
          <LoadingIcon icon="rings" className="w-8 h-8" />
          <div className="text-center text-xs mt-2">rings</div>
        </div>
        <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">
          <LoadingIcon icon="spinning-circles" className="w-8 h-8" />
          <div className="text-center text-xs mt-2">spinning-circles</div>
        </div>
        <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">
          <LoadingIcon icon="tail-spin" className="w-8 h-8" />
          <div className="text-center text-xs mt-2">tail-spin</div>
        </div>
        <div className="col-span-6 sm:col-span-3 xl:col-span-2 flex flex-col justify-end items-center">
          <LoadingIcon icon="three-dots" className="w-8 h-8" />
          <div className="text-center text-xs mt-2">three-dots</div>
        </div>
      </div>
      {/* END: Icon List */}
    </>
  );
}

export default Main;
