import {
  TomSelect,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";
import { useState } from "react";

function Main() {
  const [select, setSelect] = useState("1");
  const [selectMultiple, setSelectMultiple] = useState(["1", "3"]);
  const [selectHeader, setSelectHeader] = useState(["2", "3", "5"]);

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Tom Select</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Basic Select */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Basic Select
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
                    {/* BEGIN: Basic Select */}
                    <div>
                      <label>Basic</label>
                      <div className="mt-2">
                        <TomSelect
                          value={select}
                          onChange={setSelect}
                          options={{
                            placeholder: "Select your favorite actors",
                          }}
                          className="w-full"
                        >
                          <option value="1">Leonardo DiCaprio</option>
                          <option value="2">Johnny Deep</option>
                          <option value="3">Robert Downey, Jr</option>
                          <option value="4">Samuel L. Jackson</option>
                          <option value="5">Morgan Freeman</option>
                        </TomSelect>
                      </div>
                    </div>
                    {/* END: Basic Select */}
                    {/* BEGIN: Nested Select */}
                    <div className="mt-3">
                      <label>Nested</label>
                      <div className="mt-2">
                        <TomSelect
                          value={select}
                          onChange={setSelect}
                          options={{
                            placeholder: "Select your favorite actors",
                          }}
                          className="w-full"
                        >
                          <optgroup label="American Actors">
                            <option value="1">Leonardo DiCaprio</option>
                            <option value="2">Johnny Deep</option>
                            <option value="3">Robert Downey, Jr</option>
                            <option value="4">Samuel L. Jackson</option>
                            <option value="5">Morgan Freeman</option>
                          </optgroup>
                          <optgroup label="American Actresses">
                            <option value="6">Scarlett Johansson</option>
                            <option value="7">Jessica Alba</option>
                            <option value="8">Jennifer Lawrence</option>
                            <option value="9">Emma Stone</option>
                            <option value="10">Angelina Jolie</option>
                          </optgroup>
                        </TomSelect>
                      </div>
                    </div>
                    {/* END: Nested Select */}
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Basic Select */}
              <div>
                <label>Basic</label>
                <div className="mt-2">
                  <TomSelect
                    value={select}
                    onChange={setSelect}
                    options={{
                      placeholder: "Select your favorite actors",
                    }}
                    className="w-full"
                  >
                    <option value="1">Leonardo DiCaprio</option>
                    <option value="2">Johnny Deep</option>
                    <option value="3">Robert Downey, Jr</option>
                    <option value="4">Samuel L. Jackson</option>
                    <option value="5">Morgan Freeman</option>
                  </TomSelect>
                </div>
              </div>
              {/* END: Basic Select */}
              {/* BEGIN: Nested Select */}
              <div className="mt-3">
                <label>Nested</label>
                <div className="mt-2">
                  <TomSelect
                    value={select}
                    onChange={setSelect}
                    options={{
                      placeholder: "Select your favorite actors",
                    }}
                    className="w-full"
                  >
                    <optgroup label="American Actors">
                      <option value="1">Leonardo DiCaprio</option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4">Samuel L. Jackson</option>
                      <option value="5">Morgan Freeman</option>
                    </optgroup>
                    <optgroup label="American Actresses">
                      <option value="6">Scarlett Johansson</option>
                      <option value="7">Jessica Alba</option>
                      <option value="8">Jennifer Lawrence</option>
                      <option value="9">Emma Stone</option>
                      <option value="10">Angelina Jolie</option>
                    </optgroup>
                  </TomSelect>
                </div>
              </div>
              {/* END: Nested Select */}
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Select */}
          {/* BEGIN: Multiple Select */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Multiple Select
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
                    <TomSelect
                      value={selectMultiple}
                      onChange={setSelectMultiple}
                      options={{
                        placeholder: "Select your favorite actors",
                      }}
                      className="w-full"
                      multiple
                    >
                      <option value="1">Leonardo DiCaprio</option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4">Samuel L. Jackson</option>
                      <option value="5">Morgan Freeman</option>
                    </TomSelect>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <TomSelect
                value={selectMultiple}
                onChange={setSelectMultiple}
                options={{
                  placeholder: "Select your favorite actors",
                }}
                className="w-full"
                multiple
              >
                <option value="1">Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TomSelect>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Multiple Select */}
          {/* BEGIN: Header */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Header</h2>
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
                    <TomSelect
                      value={selectHeader}
                      onChange={setSelectHeader}
                      options={{
                        placeholder: "Select your favorite actors",
                        plugins: {
                          dropdown_header: {
                            title: "Actors",
                          },
                        },
                      }}
                      className="w-full"
                      multiple
                    >
                      <option value="1">Leonardo DiCaprio</option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4">Samuel L. Jackson</option>
                      <option value="5">Morgan Freeman</option>
                    </TomSelect>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <TomSelect
                value={selectHeader}
                onChange={setSelectHeader}
                options={{
                  placeholder: "Select your favorite actors",
                  plugins: {
                    dropdown_header: {
                      title: "Actors",
                    },
                  },
                }}
                className="w-full"
                multiple
              >
                <option value="1">Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TomSelect>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Header */}
        </div>
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Input Group */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Input Group</h2>
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
                    <div className="flex">
                      <div className="z-30 rounded-l w-10 flex items-center justify-center bg-gray-100 border text-gray-600 dark:bg-dark-1 dark:border-dark-4 -mr-1">
                        @
                      </div>
                      <TomSelect
                        value={select}
                        onChange={setSelect}
                        className="w-full"
                      >
                        <option value="1">Leonardo DiCaprio</option>
                        <option value="2">Johnny Deep</option>
                        <option value="3">Robert Downey, Jr</option>
                        <option value="4">Samuel L. Jackson</option>
                        <option value="5">Morgan Freeman</option>
                      </TomSelect>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="flex">
                <div className="flex">
                  <div
                    className="z-30 rounded-l w-10 flex items-center justify-center bg-gray-100 border text-gray-600 dark:bg-dark-1 dark:border-dark-4 -mr-1"
                  >
                    @
                  </div>
                  <TomSelect
                    value={select}
                    onChange={setSelect}
                    className="w-full"
                  >
                    <option value="1">Leonardo DiCaprio</option>
                    <option value="2">Johnny Deep</option>
                    <option value="3">Robert Downey, Jr</option>
                    <option value="4">Samuel L. Jackson</option>
                    <option value="5">Morgan Freeman</option>
                  </TomSelect>
                </div>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Input Group */}
          {/* BEGIN: Disabled */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Disabled</h2>
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
                    <TomSelect
                      value={select}
                      onChange={setSelect}
                      className="w-full"
                      disabled
                    >
                      <option value="1">Leonardo DiCaprio</option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4">Samuel L. Jackson</option>
                      <option value="5">Morgan Freeman</option>
                    </TomSelect>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <TomSelect
                value={select}
                onChange={setSelect}
                className="w-full"
                disabled
              >
                <option value="1">Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4">Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TomSelect>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Disabled */}
          {/* BEGIN: Disabled Option */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Disabled Option
                  </h2>
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
                    <TomSelect
                      value={select}
                      onChange={setSelect}
                      className="w-full"
                    >
                      <option value="1" disabled>
                        Leonardo DiCaprio
                      </option>
                      <option value="2">Johnny Deep</option>
                      <option value="3">Robert Downey, Jr</option>
                      <option value="4" disabled>
                        Samuel L. Jackson
                      </option>
                      <option value="5">Morgan Freeman</option>
                    </TomSelect>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <TomSelect
                value={select}
                onChange={setSelect}
                className="w-full"
              >
                <option value="1" disabled>Leonardo DiCaprio</option>
                <option value="2">Johnny Deep</option>
                <option value="3">Robert Downey, Jr</option>
                <option value="4" disabled>Samuel L. Jackson</option>
                <option value="5">Morgan Freeman</option>
              </TomSelect>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Disabled Option */}
        </div>
      </div>
    </>
  );
}

export default Main;
