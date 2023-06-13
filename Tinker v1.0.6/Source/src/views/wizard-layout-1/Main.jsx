function Main() {
  return (
    <>
      <div className="flex items-center mt-8">
        <h2 className="intro-y text-lg font-medium mr-auto">Wizard Layout</h2>
      </div>
      {/* BEGIN: Wizard Layout */}
      <div className="intro-y box py-10 sm:py-20 mt-5">
        <div className="flex justify-center">
          <button className="intro-y w-10 h-10 rounded-full btn btn-primary mx-2">
            1
          </button>
          <button className="intro-y w-10 h-10 rounded-full btn bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400 text-slate-500 mx-2">
            2
          </button>
          <button className="intro-y w-10 h-10 rounded-full btn bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400 text-slate-500 mx-2">
            3
          </button>
        </div>
        <div className="px-5 mt-10">
          <div className="font-medium text-center text-lg">
            Setup Your Account
          </div>
          <div className="text-slate-500 text-center mt-2">
            To start off, please enter your username, email address and
            password.
          </div>
        </div>
        <div className="px-5 sm:px-20 mt-10 pt-10 border-t border-slate-200/60 dark:border-darkmode-400">
          <div className="font-medium text-base">Profile Settings</div>
          <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5">
            <div className="intro-y col-span-12 sm:col-span-6">
              <label htmlFor="input-wizard-1" className="form-label">
                From
              </label>
              <input
                id="input-wizard-1"
                type="text"
                className="form-control"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6">
              <label htmlFor="input-wizard-2" className="form-label">
                To
              </label>
              <input
                id="input-wizard-2"
                type="text"
                className="form-control"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6">
              <label htmlFor="input-wizard-3" className="form-label">
                Subject
              </label>
              <input
                id="input-wizard-3"
                type="text"
                className="form-control"
                placeholder="Important Meeting"
              />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6">
              <label htmlFor="input-wizard-4" className="form-label">
                Has the Words
              </label>
              <input
                id="input-wizard-4"
                type="text"
                className="form-control"
                placeholder="Job, Work, Documentation"
              />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6">
              <label htmlFor="input-wizard-5" className="form-label">
                Doesn't Have
              </label>
              <input
                id="input-wizard-5"
                type="text"
                className="form-control"
                placeholder="Job, Work, Documentation"
              />
            </div>
            <div className="intro-y col-span-12 sm:col-span-6">
              <label htmlFor="input-wizard-6" className="form-label">
                Size
              </label>
              <select id="input-wizard-6" className="form-select">
                <option>10</option>
                <option>25</option>
                <option>35</option>
                <option>50</option>
              </select>
            </div>
            <div className="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
              <button className="btn btn-secondary w-24">Previous</button>
              <button className="btn btn-primary w-24 ml-2">Next</button>
            </div>
          </div>
        </div>
      </div>
      {/* END: Wizard Layout */}
    </>
  );
}

export default Main;
