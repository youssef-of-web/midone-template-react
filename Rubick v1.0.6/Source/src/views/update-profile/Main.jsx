import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownHeader,
  DropdownDivider,
  DropdownFooter,
  DropdownItem,
  TomSelect,
} from "@/base-components";
import { faker as $f } from "@/utils";
import { useState } from "react";

function Main() {
  const [select, setSelect] = useState("1");

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Update Profile</h2>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {/* BEGIN: Profile Menu */}
        <div className="col-span-12 lg:col-span-4 2xl:col-span-3 flex lg:block flex-col-reverse">
          <div className="intro-y box mt-5">
            <div className="relative flex items-center p-5">
              <div className="w-12 h-12 image-fit">
                <img
                  alt="Midone Tailwind HTML Admin Template"
                  className="rounded-full"
                  src={$f()[0].photos[0]}
                />
              </div>
              <div className="ml-4 mr-auto">
                <div className="font-medium text-base">
                  {$f()[0].users[0].name}
                </div>
                <div className="text-slate-500">{$f()[0].jobs[0]}</div>
              </div>
              <Dropdown>
                <DropdownToggle tag="a" className="w-5 h-5 block" href="#">
                  <Lucide
                    icon="MoreHorizontal"
                    className="w-5 h-5 text-slate-500"
                  />
                </DropdownToggle>
                <DropdownMenu className="w-56">
                  <DropdownContent>
                    <DropdownHeader> Export Options</DropdownHeader>
                    <DropdownDivider />
                    <DropdownItem>
                      <Lucide icon="Activity" className="w-4 h-4 mr-2" />
                      English
                    </DropdownItem>
                    <DropdownItem>
                      <Lucide icon="Box" className="w-4 h-4 mr-2" />
                      Indonesia
                      <div className="text-xs text-white px-1 rounded-full bg-danger ml-auto">
                        10
                      </div>
                    </DropdownItem>
                    <DropdownItem>
                      <Lucide icon="Layout" className="w-4 h-4 mr-2" />
                      English
                    </DropdownItem>
                    <DropdownItem>
                      <Lucide icon="Sidebar" className="w-4 h-4 mr-2" />
                      Indonesia
                    </DropdownItem>
                    <DropdownDivider />
                    <DropdownFooter>
                      <button
                        type="button"
                        className="btn btn-primary py-1 px-2"
                      >
                        Settings
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary py-1 px-2 ml-auto"
                      >
                        View Profile
                      </button>
                    </DropdownFooter>
                  </DropdownContent>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <a className="flex items-center text-primary font-medium" href="">
                <Lucide icon="Activity" className="w-4 h-4 mr-2" /> Personal
                Information
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Box" className="w-4 h-4 mr-2" /> Account Settings
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Change Password
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" /> User
                Settings
              </a>
            </div>
            <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400">
              <a className="flex items-center" href="">
                <Lucide icon="Activity" className="w-4 h-4 mr-2" /> Email
                Settings
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Box" className="w-4 h-4 mr-2" /> Saved Credit
                Cards
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Social Networks
              </a>
              <a className="flex items-center mt-5" href="">
                <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Tax
                Information
              </a>
            </div>
            <div className="p-5 border-t border-slate-200/60 dark:border-darkmode-400 flex">
              <button type="button" className="btn btn-primary py-1 px-2">
                New Group
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary py-1 px-2 ml-auto"
              >
                New Quick Link
              </button>
            </div>
          </div>
        </div>
        {/* END: Profile Menu */}
        <div className="col-span-12 lg:col-span-8 2xl:col-span-9">
          {/* BEGIN: Display Information */}
          <div className="intro-y box lg:mt-5">
            <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">
                Display Information
              </h2>
            </div>
            <div className="p-5">
              <div className="flex flex-col-reverse xl:flex-row flex-col">
                <div className="flex-1 mt-6 xl:mt-0">
                  <div className="grid grid-cols-12 gap-x-5">
                    <div className="col-span-12 2xl:col-span-6">
                      <div>
                        <label
                          htmlFor="update-profile-form-1"
                          className="form-label"
                        >
                          Display Name
                        </label>
                        <input
                          id="update-profile-form-1"
                          type="text"
                          className="form-control"
                          placeholder="Input text"
                          value={$f()[0].users[0].name}
                          onChange={() => {}}
                          disabled
                        />
                      </div>
                      <div className="mt-3">
                        <label
                          htmlFor="update-profile-form-2"
                          className="form-label"
                        >
                          Nearest MRT Station
                        </label>
                        <TomSelect
                          id="update-profile-form-2"
                          value={select}
                          onChange={setSelect}
                          className="w-full"
                        >
                          <option value="1">Admiralty</option>
                          <option value="2">Aljunied</option>
                          <option value="3">Ang Mo Kio</option>
                          <option value="4">Bartley</option>
                          <option value="5">Beauty World</option>
                        </TomSelect>
                      </div>
                    </div>
                    <div className="col-span-12 2xl:col-span-6">
                      <div className="mt-3 2xl:mt-0">
                        <label
                          htmlFor="update-profile-form-3"
                          className="form-label"
                        >
                          Postal Code
                        </label>
                        <TomSelect
                          id="update-profile-form-3"
                          value={select}
                          onChange={setSelect}
                          className="w-full"
                        >
                          <option value="1">
                            018906 - 1 STRAITS BOULEVARD SINGA...
                          </option>
                          <option value="2">
                            018910 - 5A MARINA GARDENS DRIVE...
                          </option>
                          <option value="3">
                            018915 - 100A CENTRAL BOULEVARD...
                          </option>
                          <option value="4">
                            018925 - 21 PARK STREET MARINA...
                          </option>
                          <option value="5">
                            018926 - 23 PARK STREET MARINA...
                          </option>
                        </TomSelect>
                      </div>
                      <div className="mt-3">
                        <label
                          htmlFor="update-profile-form-4"
                          className="form-label"
                        >
                          Phone Number
                        </label>
                        <input
                          id="update-profile-form-4"
                          type="text"
                          className="form-control"
                          placeholder="Input text"
                          value="65570828"
                          onChange={() => {}}
                        />
                      </div>
                    </div>
                    <div className="col-span-12">
                      <div className="mt-3">
                        <label
                          htmlFor="update-profile-form-5"
                          className="form-label"
                        >
                          Address
                        </label>
                        <textarea
                          id="update-profile-form-5"
                          className="form-control"
                          placeholder="Adress"
                          value="10 Anson Road, International Plaza, #10-11, 079903
                          Singapore, Singapore"
                          onChange={() => {}}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary w-20 mt-3">
                    Save
                  </button>
                </div>
                <div className="w-52 mx-auto xl:mr-0 xl:ml-6">
                  <div className="border-2 border-dashed shadow-sm border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
                    <div className="h-40 relative image-fit cursor-pointer zoom-in mx-auto">
                      <img
                        className="rounded-md"
                        alt="Midone Tailwind HTML Admin Template"
                        src={$f()[0].photos[0]}
                      />
                      <Tippy
                        tag="div"
                        content="Remove this profile photo?"
                        className="w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"
                      >
                        <Lucide icon="X" className="w-4 h-4" />
                      </Tippy>
                    </div>
                    <div className="mx-auto cursor-pointer relative mt-5">
                      <button type="button" className="btn btn-primary w-full">
                        Change Photo
                      </button>
                      <input
                        type="file"
                        className="w-full h-full top-0 left-0 absolute opacity-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Display Information */}
          {/* BEGIN: Personal Information */}
          <div className="intro-y box mt-5">
            <div className="flex items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
              <h2 className="font-medium text-base mr-auto">
                Personal Information
              </h2>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-12 gap-x-5">
                <div className="col-span-12 xl:col-span-6">
                  <div>
                    <label
                      htmlFor="update-profile-form-6"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      id="update-profile-form-6"
                      type="text"
                      className="form-control"
                      placeholder="Input text"
                      value={$f()[0].users[0].email}
                      onChange={() => {}}
                      disabled
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-7"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      id="update-profile-form-7"
                      type="text"
                      className="form-control"
                      placeholder="Input text"
                      value={$f()[0].users[0].name}
                      onChange={() => {}}
                      disabled
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-8"
                      className="form-label"
                    >
                      ID Type
                    </label>
                    <select id="update-profile-form-8" className="form-select">
                      <option>IC</option>
                      <option>FIN</option>
                      <option>Passport</option>
                    </select>
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-9"
                      className="form-label"
                    >
                      ID Number
                    </label>
                    <input
                      id="update-profile-form-9"
                      type="text"
                      className="form-control"
                      placeholder="Input text"
                      value="357821204950001"
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="col-span-12 xl:col-span-6">
                  <div className="mt-3 xl:mt-0">
                    <label
                      htmlFor="update-profile-form-10"
                      className="form-label"
                    >
                      Phone Number
                    </label>
                    <input
                      id="update-profile-form-10"
                      type="text"
                      className="form-control"
                      placeholder="Input text"
                      value="65570828"
                      onChange={() => {}}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-11"
                      className="form-label"
                    >
                      Address
                    </label>
                    <input
                      id="update-profile-form-11"
                      type="text"
                      className="form-control"
                      placeholder="Input text"
                      value="10 Anson Road, International Plaza, #10-11, 079903 Singapore, Singapore"
                      onChange={() => {}}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-12"
                      className="form-label"
                    >
                      Bank Name
                    </label>
                    <TomSelect
                      id="update-profile-form-12"
                      value={select}
                      onChange={setSelect}
                      className="w-full"
                    >
                      <option value="1">SBI - STATE BANK OF INDIA</option>
                      <option value="2">CITI BANK - CITI BANK</option>
                    </TomSelect>
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="update-profile-form-13"
                      className="form-label"
                    >
                      Bank Account
                    </label>
                    <input
                      id="update-profile-form-13"
                      type="text"
                      className="form-control"
                      placeholder="Input text"
                      value="DBS Current 011-903573-0"
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button type="button" className="btn btn-primary w-20 mr-auto">
                  Save
                </button>
                <a href="" className="text-danger flex items-center">
                  <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Delete
                  Account
                </a>
              </div>
            </div>
          </div>
          {/* END: Personal Information */}
        </div>
      </div>
    </>
  );
}

export default Main;
