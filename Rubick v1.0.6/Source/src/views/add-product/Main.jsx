import {
  Lucide,
  Tippy,
  TomSelect,
  Alert,
  ClassicEditor,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useState } from "react";

function Main() {
  const [subcategory, setSubcategory] = useState([]);
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Add Product</h2>
      </div>
      <div className="grid grid-cols-11 gap-x-6 mt-5 pb-20">
        {/* BEGIN: Notification */}
        <Alert className="intro-y col-span-11 alert-primary alert-dismissible mb-6">
          {({ dismiss }) => (
            <>
              <div className="flex items-center">
                <span>
                  <Lucide icon="Info" className="w-4 h-4 mr-2" />
                </span>
                <span>
                  Starting May 10, 2021, there will be changes to the Terms &
                  Conditions regarding the number of products that may be added
                  by the Seller.
                  <a
                    href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                    className="underline ml-1"
                    target="blank"
                  >
                    Learn More
                  </a>
                </span>
                <button
                  type="button"
                  className="btn-close text-white"
                  onClick={dismiss}
                  aria-label="Close"
                >
                  <Lucide icon="X" className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </Alert>
        {/* BEGIN: Notification */}
        <div className="intro-y col-span-11 2xl:col-span-9">
          {/* BEGIN: Uplaod Product */}
          <div className="intro-y box p-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Upload
                Product
              </div>
              <div className="mt-5">
                <div className="flex items-center text-slate-500">
                  <span>
                    <Lucide icon="Lightbulb" className="w-5 h-5 text-warning" />
                  </span>
                  <div className="ml-2">
                    <span className="mr-1">
                      Avoid selling counterfeit products / violating
                      Intellectual Property Rights, so that your products are
                      not deleted.
                    </span>
                    <a
                      href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                      className="text-primary font-medium"
                      target="blank"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-10">
                  <div className="form-label w-full xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Photos</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        <div>
                          The image format is .jpg .jpeg .png and a minimum size
                          of 300 x 300 pixels (For optimal images use a minimum
                          size of 700 x 700 pixels).
                        </div>
                        <div className="mt-2">
                          Select product photos or drag and drop up to 5 photos
                          at once here. Include min. 3 attractive photos to make
                          the product more attractive to buyers.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1 border-2 border-dashed dark:border-darkmode-400 rounded-md pt-4">
                    <div className="grid grid-cols-10 gap-5 pl-4 pr-5">
                      {$_.take($f(), 5).map((faker, fakerKey) => (
                        <div
                          key={fakerKey}
                          className="col-span-5 md:col-span-2 h-28 relative image-fit cursor-pointer zoom-in"
                        >
                          <img
                            className="rounded-md"
                            alt="Midone - HTML Admin Template"
                            src={faker.photos[0]}
                          />
                          <Tippy
                            content="Remove this image?"
                            className="tooltip w-5 h-5 flex items-center justify-center absolute rounded-full text-white bg-danger right-0 top-0 -mr-2 -mt-2"
                          >
                            <Lucide icon="X" className="w-4 h-4" />
                          </Tippy>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 pb-4 mt-5 flex items-center justify-center cursor-pointer relative">
                      <Lucide icon="Image" className="w-4 h-4 mr-2" />
                      <span className="text-primary mr-1">
                        Upload a file
                      </span>{" "}
                      or drag and drop
                      <input
                        id="horizontal-form-1"
                        type="file"
                        className="w-full h-full top-0 left-0 absolute opacity-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Uplaod Product */}
          {/* BEGIN: Product Information */}
          <div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Product
                Information
              </div>
              <div className="mt-5">
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Name</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Include min. 40 characters to make it more attractive
                        and easy for buyers to find, consisting of product type,
                        brand, and information such as color, material, or type.
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="product-name"
                      type="text"
                      className="form-control"
                      placeholder="Product name"
                    />
                    <div className="form-help text-right">
                      Maximum character 0/70
                    </div>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Category</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <select id="category" className="form-select">
                      {$_.take($f(), 9).map((faker, fakerKey) => (
                        <option key={fakerKey} value={faker.categories[0].name}>
                          {faker.categories[0].name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Subcategory</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        You can add a new subcategory or choose from the
                        existing subcategory list.
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <TomSelect
                      value={subcategory}
                      onChange={setSubcategory}
                      options={{
                        placeholder: "Etalase",
                      }}
                      className="w-full"
                      multiple
                    >
                      {$_.take($f(), 2).map((faker, fakerKey) => (
                        <option key={fakerKey} value={faker.categories[0].name}>
                          {faker.categories[0].name}
                        </option>
                      ))}
                    </TomSelect>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Product Information */}
          {/* BEGIN: Product Detail */}
          <div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Product
                Detail
              </div>
              <div className="mt-5">
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Condition</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="flex flex-col sm:flex-row">
                      <div className="form-check mr-4">
                        <input
                          id="condition-new"
                          className="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-chris-evans"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="condition-new"
                        >
                          New
                        </label>
                      </div>
                      <div className="form-check mr-4 mt-2 sm:mt-0">
                        <input
                          id="condition-second"
                          className="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-liam-neeson"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="condition-second"
                        >
                          Second
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Description</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        <div>
                          Make sure the product description provides a detailed
                          explanation of your product so that it is easy to
                          understand and find your product.
                        </div>
                        <div className="mt-2">
                          It is recommended not to enter info on mobile numbers,
                          e-mails, etc. into the product description to protect
                          your personal data.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <ClassicEditor
                      value={editorData}
                      onChange={setEditorData}
                    />
                    <div className="form-help text-right">
                      Maximum character 0/2000
                    </div>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Video</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Add a video so that buyers are more interested in your
                        product.
                        <a
                          href="https://themeforest.net/item/midone-jquery-tailwindcss-html-admin-template/26366820"
                          className="text-primary font-medium"
                          target="blank"
                        >
                          Learn more.
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <button className="btn btn-outline-secondary w-40">
                      <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add Video
                      URL
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Product Detail */}
          {/* BEGIN: Product Variant */}
          <div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Product
                Variant
              </div>
              <div className="mt-5">
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label sm:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Variant</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-2">
                        Add variants such as color, size, or more. Choose a
                        maximum of 2 variant types.
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1 xl:text-right">
                    <button className="btn btn-primary w-44">
                      <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add
                      Variant
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Product Variant */}
          {/* BEGIN: Product Variant (Details) */}
          <div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Product
                Variant (Details)
              </div>
              <div className="mt-5">
                <div className="form-inline items-start flex-col xl:flex-row mt-2 pt-2 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Variant 1</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Add the types of variants and options, you can add up to
                        5 options.
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="relative pl-5 pr-5 xl:pr-10 py-10 bg-slate-50 dark:bg-transparent dark:border rounded-md">
                      <a
                        href=""
                        className="text-slate-500 absolute top-0 right-0 mr-4 mt-4"
                      >
                        <Lucide icon="X" className="w-5 h-5" />
                      </a>
                      <div>
                        <div className="form-inline mt-5 first:mt-0">
                          <label className="form-label sm:w-20">Name</label>
                          <div className="flex items-center flex-1 xl:pr-20">
                            <div className="input-group flex-1">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Size"
                              />
                              <div className="input-group-text">6/14</div>
                            </div>
                          </div>
                        </div>
                        <div className="form-inline mt-5 items-start first:mt-0">
                          <label className="form-label mt-2 sm:w-20">
                            Options
                          </label>
                          <div className="flex-1">
                            <div className="xl:flex items-center mt-5 first:mt-0">
                              <div className="input-group flex-1">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Small"
                                />
                                <div className="input-group-text">6/14</div>
                              </div>
                              <div className="w-20 flex text-slate-500 mt-3 xl:mt-0">
                                <a href="" className="xl:ml-5">
                                  <Lucide icon="Move" className="w-4 h-4" />
                                </a>
                                <a href="" className="ml-3 xl:ml-5">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                            <div className="xl:flex items-center mt-5 first:mt-0">
                              <div className="input-group flex-1">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Medium"
                                />
                                <div className="input-group-text">6/14</div>
                              </div>
                              <div className="w-20 flex text-slate-500 mt-3 xl:mt-0">
                                <a href="" className="xl:ml-5">
                                  <Lucide icon="Move" className="w-4 h-4" />
                                </a>
                                <a href="" className="ml-3 xl:ml-5">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                            <div className="xl:flex items-center mt-5 first:mt-0">
                              <div className="input-group flex-1">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Large"
                                />
                                <div className="input-group-text">6/14</div>
                              </div>
                              <div className="w-20 flex text-slate-500 mt-3 xl:mt-0">
                                <a href="" className="xl:ml-5">
                                  <Lucide icon="Move" className="w-4 h-4" />
                                </a>
                                <a href="" className="ml-3 xl:ml-5">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="xl:ml-20 xl:pl-5 xl:pr-20 mt-5 first:mt-0">
                          <button className="btn btn-outline-primary border-dashed w-full">
                            <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add
                            New Option
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-2 pt-2 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Variant 2</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Add the types of variants and options, you can add up to
                        5 options.
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="relative pl-5 pr-5 xl:pr-10 py-10 bg-slate-50 dark:bg-transparent dark:border rounded-md">
                      <a
                        href=""
                        className="text-slate-500 absolute top-0 right-0 mr-4 mt-4"
                      >
                        <Lucide icon="X" className="w-5 h-5" />
                      </a>
                      <div>
                        <div className="form-inline mt-5 first:mt-0">
                          <label className="form-label sm:w-20">Name</label>
                          <div className="flex items-center flex-1 xl:pr-20">
                            <div className="input-group flex-1">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Color"
                              />
                              <div className="input-group-text">6/14</div>
                            </div>
                          </div>
                        </div>
                        <div className="form-inline mt-5 items-start first:mt-0">
                          <label className="form-label mt-2 sm:w-20">
                            Options
                          </label>
                          <div className="flex-1">
                            <div className="xl:flex items-center mt-5 first:mt-0">
                              <div className="input-group flex-1">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Black"
                                />
                                <div className="input-group-text">6/14</div>
                              </div>
                              <div className="w-20 flex text-slate-500 mt-3 xl:mt-0">
                                <a href="" className="xl:ml-5">
                                  <Lucide icon="Move" className="w-4 h-4" />
                                </a>
                                <a href="" className="ml-3 xl:ml-5">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                            <div className="xl:flex items-center mt-5 first:mt-0">
                              <div className="input-group flex-1">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="White"
                                />
                                <div className="input-group-text">6/14</div>
                              </div>
                              <div className="w-20 flex text-slate-500 mt-3 xl:mt-0">
                                <a href="" className="xl:ml-5">
                                  <Lucide icon="Move" className="w-4 h-4" />
                                </a>
                                <a href="" className="ml-3 xl:ml-5">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                            <div className="xl:flex items-center mt-5 first:mt-0">
                              <div className="input-group flex-1">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Gray"
                                />
                                <div className="input-group-text">6/14</div>
                              </div>
                              <div className="w-20 flex text-slate-500 mt-3 xl:mt-0">
                                <a href="" className="xl:ml-5">
                                  <Lucide icon="Move" className="w-4 h-4" />
                                </a>
                                <a href="" className="ml-3 xl:ml-5">
                                  <Lucide icon="Trash2" className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="xl:ml-20 xl:pl-5 xl:pr-20 mt-5 first:mt-0">
                          <button className="btn btn-outline-primary border-dashed w-full">
                            <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add
                            New Option
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="xl:ml-64 xl:pl-10 mt-2 pt-2 first:mt-0 first:pt-0">
                  <button className="btn py-3 btn-outline-secondary border-dashed w-full">
                    <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New
                    Variant
                  </button>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Variant Information</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Apply price and stock on all variants or based on
                        certain variant codes.
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="sm:grid grid-cols-4 gap-2">
                      <div className="input-group">
                        <div className="input-group-text">$</div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Price"
                        />
                      </div>
                      <input
                        type="text"
                        className="form-control mt-2 sm:mt-0"
                        placeholder="Stock"
                      />
                      <input
                        type="text"
                        className="form-control mt-2 sm:mt-0"
                        placeholder="Variant Code"
                      />
                      <button className="btn btn-primary mt-2 sm:mt-0">
                        Apply To All
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Variant List</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Set the price and stock for each variant.
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="overflow-x-auto">
                      <table className="table border">
                        <thead>
                          <tr>
                            <th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                              Size
                            </th>
                            <th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                              <div className="flex items-center">
                                Color{" "}
                                <Lucide
                                  icon="HelpCircle"
                                  className="w-4 h-4 ml-2"
                                />
                              </div>
                            </th>
                            <th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !px-2">
                              Price
                            </th>
                            <th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !px-2">
                              <div className="flex items-center">
                                <div className="relative w-4 h-4 mr-2 -mt-0.5 before:content-[''] before:absolute before:w-4 before:h-4 before:bg-primary/20 before:rounded-full lg:before:animate-ping after:content-[''] after:absolute after:w-4 after:h-4 after:bg-primary after:rounded-full after:border-4 after:border-white/60 after:dark:border-darkmode-300"></div>
                                Stock{" "}
                                <Lucide
                                  icon="HelpCircle"
                                  className="w-4 h-4 ml-2"
                                />
                              </div>
                            </th>
                            <th className="bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap !pl-2">
                              Variant Code
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td rowSpan="3" className="border-r">
                              Small
                            </td>
                            <td>Black</td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </td>
                            <td className="!pl-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>White</td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </td>
                            <td className="!pl-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Gray</td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </td>
                            <td className="!pl-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td rowSpan="3" className="border-r">
                              Medium
                            </td>
                            <td>Black</td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </td>
                            <td className="!pl-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>White</td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </td>
                            <td className="!pl-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Gray</td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </td>
                            <td className="!pl-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td rowSpan="3" className="border-r">
                              Large
                            </td>
                            <td>Black</td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </td>
                            <td className="!pl-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>White</td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </td>
                            <td className="!pl-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>Gray</td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Stock"
                              />
                            </td>
                            <td className="!pl-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Variant Code"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Wholesale</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Add wholesale price for certain quantity purchases.
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="overflow-x-auto">
                      <table className="table border">
                        <thead>
                          <tr>
                            <th className="!pr-2 bg-slate-50 dark:bg-darkmode-800"></th>
                            <th className="bg-slate-50 dark:bg-darkmode-800"></th>
                            <th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                              Min.
                            </th>
                            <th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                              Max.
                            </th>
                            <th className="!px-2 bg-slate-50 dark:bg-darkmode-800 text-slate-500 whitespace-nowrap">
                              Unit Price
                            </th>
                            <th className="!px-2 bg-slate-50 dark:bg-darkmode-800"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="!pr-2">1.</td>
                            <td className="whitespace-nowrap">
                              Wholesale Price 1
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Min Qty"
                              />
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Max Qty"
                              />
                            </td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                            <td className="!pl-4 text-slate-500">
                              <a href="">
                                <Lucide icon="Trash2" className="w-4 h-4" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="!pr-2">2.</td>
                            <td className="whitespace-nowrap">
                              Wholesale Price 2
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Min Qty"
                              />
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Max Qty"
                              />
                            </td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                            <td className="!pl-4 text-slate-500">
                              <a href="">
                                <Lucide icon="Trash2" className="w-4 h-4" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td className="!pr-2">3.</td>
                            <td className="whitespace-nowrap">
                              Wholesale Price 3
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Min Qty"
                              />
                            </td>
                            <td className="!px-2">
                              <input
                                type="text"
                                className="form-control min-w-[6rem]"
                                placeholder="Max Qty"
                              />
                            </td>
                            <td className="!px-2">
                              <div className="input-group">
                                <div className="input-group-text">$</div>
                                <input
                                  type="text"
                                  className="form-control min-w-[6rem]"
                                  placeholder="Price"
                                />
                              </div>
                            </td>
                            <td className="!pl-4 text-slate-500">
                              <a href="">
                                <Lucide icon="Trash2" className="w-4 h-4" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <button className="btn btn-outline-primary border-dashed w-full mt-4">
                      <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New
                      Wholesale Price
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Product Variant (Details) */}
          {/* BEGIN: Product Management */}
          <div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Product
                Management
              </div>
              <div className="mt-5">
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Status</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        If the status is active, your product can be searched
                        for by potential buyers.
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="form-check form-switch">
                      <input
                        id="product-status-active"
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="product-status-active"
                      >
                        Active
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Stock</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="product-stock"
                      type="text"
                      className="form-control"
                      placeholder="Input Product Stock"
                    />
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">
                          SKU (Stock Keeping Unit)
                        </div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Use a unique SKU code if you want to mark your product.
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <input
                      id="sku"
                      type="text"
                      className="form-control"
                      placeholder="Input SKU"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Product Management */}
          {/* BEGIN: Weight & Shipping */}
          <div className="intro-y box p-5 mt-5">
            <div className="border border-slate-200/60 dark:border-darkmode-400 rounded-md p-5">
              <div className="font-medium text-base flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <Lucide icon="ChevronDown" className="w-4 h-4 mr-2" /> Weight &
                Shipping
              </div>
              <div className="mt-5">
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Weight</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Enter the weight by weighing the product after it is
                        <span className="font-medium text-slate-600 dark:text-slate-300">
                          packaged
                        </span>
                        .
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="sm:grid grid-cols-4 gap-2">
                      <select className="form-select">
                        <option value="Gram (g)">Gram (g)</option>
                        <option value="Kilogram (kg)">Kilogram (kg)</option>
                      </select>
                      <input
                        type="text"
                        id="product-weight"
                        className="form-control mt-2 sm:mt-0"
                        placeholder="Stock"
                      />
                    </div>
                    <Alert className="alert-outline-warning alert-dismissible bg-warning/20 dark:bg-darkmode-400 dark:border-darkmode-400 mt-5">
                      {({ dismiss }) => (
                        <>
                          <div className="flex items-center">
                            <span>
                              <Lucide
                                icon="AlertTriangle"
                                className="w-6 h-6 mr-3"
                              />
                            </span>
                            <span className="text-slate-800 dark:text-slate-500">
                              Pay close attention to the weight of the product
                              so that there is no difference in data with the
                              shipping courier.
                              <a className="text-primary font-medium" href="">
                                Learn More
                              </a>
                            </span>
                            <button
                              type="button"
                              className="btn-close dark:text-white"
                              onClick={dismiss}
                              aria-label="Close"
                            >
                              <Lucide icon="X" className="w-4 h-4" />
                            </button>
                          </div>
                        </>
                      )}
                    </Alert>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Product Size</div>
                        <div className="ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md">
                          Required
                        </div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Enter the product size after packing to calculate the
                        volume weight.
                        <a className="text-primary font-medium" href="">
                          Learn Volume Weight
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="sm:grid grid-cols-3 gap-2">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Width"
                        />
                        <div className="input-group-text">cm</div>
                      </div>
                      <div className="input-group mt-2 sm:mt-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Height"
                        />
                        <div className="input-group-text">cm</div>
                      </div>
                      <div className="input-group mt-2 sm:mt-0">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Length"
                        />
                        <div className="input-group-text">cm</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Shipping Insurance</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Refund product & postage for the seller and buyer in
                        case of damage / loss during shipping.
                        <a className="text-primary font-medium" href="">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="flex flex-col sm:flex-row">
                      <div className="form-check mr-4">
                        <input
                          id="shipping-insurance-required"
                          className="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-chris-evans"
                        />
                        <div className="form-check-label">
                          <div>Required</div>
                          <div className="leading-relaxed text-slate-500 text-xs mt-1 w-56">
                            You
                            <span className="font-medium text-slate-600 dark:text-slate-300">
                              require
                            </span>
                            the buyer to activate shipping insurance
                          </div>
                        </div>
                      </div>
                      <div className="form-check mr-4 mt-2 sm:mt-0">
                        <input
                          id="shipping-insurance-optional"
                          className="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-liam-neeson"
                        />
                        <div className="form-check-label">
                          <div>Optional</div>
                          <div className="leading-relaxed text-slate-500 text-xs mt-1 w-56">
                            You
                            <span className="font-medium text-slate-600 dark:text-slate-300">
                              give the buyer the option
                            </span>
                            to activate shipping insurance
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">Shipping Service</div>
                      </div>
                      <div className="leading-relaxed text-slate-500 text-xs mt-3">
                        Configure shipping services according to your product
                        type.
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="flex flex-col sm:flex-row">
                      <div className="form-check mr-4">
                        <input
                          id="shipping-service-standard"
                          className="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-chris-evans"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="shipping-service-standard"
                        >
                          Standard
                        </label>
                      </div>
                      <div className="form-check mr-4 mt-2 sm:mt-0">
                        <input
                          id="shipping-service-custom"
                          className="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="horizontal-radio-liam-neeson"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="shipping-service-custom"
                        >
                          Custom
                        </label>
                      </div>
                    </div>
                    <div className="leading-relaxed text-slate-500 text-xs mt-3">
                      The delivery service for this product will be the same as
                      in the
                      <a className="text-primary font-medium" href="">
                        Shipping Settings.
                      </a>
                    </div>
                  </div>
                </div>
                <div className="form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0">
                  <div className="form-label xl:w-64 xl:!mr-10">
                    <div className="text-left">
                      <div className="flex items-center">
                        <div className="font-medium">PreOrder</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full mt-3 xl:mt-0 flex-1">
                    <div className="form-check form-switch">
                      <input
                        id="preorder-active"
                        className="form-check-input"
                        type="checkbox"
                      />
                      <label
                        className="form-check-label leading-relaxed text-slate-500 text-xs"
                        htmlFor="preorder-active"
                      >
                        Activate PreOrder if you need a longer shipping process.
                        <a className="text-primary font-medium" href="">
                          Learn more.
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END: Weight & Shipping */}
          <div className="flex justify-end flex-col md:flex-row gap-2 mt-5">
            <button
              type="button"
              className="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn py-3 border-slate-300 dark:border-darkmode-400 text-slate-500 w-full md:w-52"
            >
              Save & Add New Product
            </button>
            <button
              type="button"
              className="btn py-3 btn-primary w-full md:w-52"
            >
              Save
            </button>
          </div>
        </div>
        <div className="intro-y col-span-2 hidden 2xl:block">
          <div className="pt-10 sticky top-0">
            <ul className="text-slate-500 relative before:content-[''] before:w-[2px] before:bg-slate-200 before:dark:bg-darkmode-600 before:h-full before:absolute before:left-0 before:z-[-1]">
              <li className="mb-4 border-l-2 pl-5 border-primary dark:border-primary text-primary font-medium">
                <a href="">Upload Product</a>
              </li>
              <li className="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent">
                <a href="">Product Information</a>
              </li>
              <li className="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent">
                <a href="">Product Detail</a>
              </li>
              <li className="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent">
                <a href="">Product Variant</a>
              </li>
              <li className="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent">
                <a href="">Product Variant (Details)</a>
              </li>
              <li className="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent">
                <a href="">Product Management</a>
              </li>
              <li className="mb-4 border-l-2 pl-5 border-transparent dark:border-transparent">
                <a href="">Weight & Shipping</a>
              </li>
            </ul>
            <div className="mt-10 bg-warning/20 dark:bg-darkmode-600 border border-warning dark:border-0 rounded-md relative p-5">
              <Lucide
                icon="Lightbulb"
                className="w-12 h-12 text-warning/80 absolute top-0 right-0 mt-5 mr-3"
              />
              <h2 className="text-lg font-medium">Tips</h2>
              <div className="mt-5 font-medium">Price</div>
              <div className="leading-relaxed text-xs mt-2 text-slate-600 dark:text-slate-500">
                <div>
                  The image format is .jpg .jpeg .png and a minimum size of 300
                  x 300 pixels (For optimal images use a minimum size of 700 x
                  700 pixels).
                </div>
                <div className="mt-2">
                  Select product photos or drag and drop up to 5 photos at once
                  here. Include min. 3 attractive photos to make the product
                  more attractive to buyers.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
