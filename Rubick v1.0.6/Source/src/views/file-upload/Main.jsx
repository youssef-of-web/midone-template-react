import {
  Dropzone,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";
import { useEffect, useRef } from "react";

function Main() {
  const dropzoneSingleRef = useRef();
  const dropzoneMultipleRef = useRef();
  const dropzoneValidationRef = useRef();

  useEffect(() => {
    const elDropzoneSingleRef = dropzoneSingleRef.current;
    elDropzoneSingleRef.dropzone.on("success", () => {
      alert("Added file.");
    });
    elDropzoneSingleRef.dropzone.on("error", () => {
      alert("No more files please!");
    });

    const elDropzoneMultipleRef = dropzoneMultipleRef.current;
    elDropzoneMultipleRef.dropzone.on("success", () => {
      alert("Added file.");
    });
    elDropzoneMultipleRef.dropzone.on("error", () => {
      alert("No more files please!");
    });

    const elDropzoneValidationRef = dropzoneValidationRef.current;
    elDropzoneValidationRef.dropzone.on("success", () => {
      alert("Added file.");
    });
    elDropzoneValidationRef.dropzone.on("error", () => {
      alert("No more files please!");
    });
  }, []);

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Dropzone</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Single File Upload */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Single File Upload
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
                    <Dropzone
                      getRef={(el) => {
                        dropzoneSingleRef.current = el;
                      }}
                      options={{
                        url: "https://httpbin.org/post",
                        thumbnailWidth: 150,
                        maxFilesize: 0.5,
                        maxFiles: 1,
                        headers: { "My-Awesome-Header": "header value" },
                      }}
                      className="dropzone"
                    >
                      <div className="text-lg font-medium">
                        Drop files here or click to upload.
                      </div>
                      <div className="text-gray-600">
                        This is just a demo dropzone. Selected files are
                        <span className="font-medium">not</span> actually
                        uploaded.
                      </div>
                    </Dropzone>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
            <Dropzone
              getRef={(el) => {
                dropzoneSingleRef.current = el;
              }}
              options={{
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                maxFiles: 1,
                headers: { "My-Awesome-Header": "header value" },
              }}
              className="dropzone"
            >
              <div className="text-lg font-medium">
                Drop files here or click to upload.
              </div>
              <div className="text-gray-600">
                This is just a demo dropzone. Selected files are
                <span className="font-medium">not</span> actually
                uploaded.
              </div>
            </Dropzone>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Single File Upload */}
          {/* BEGIN: Multiple File Upload */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Multiple File Upload
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
                    <Dropzone
                      getRef={(el) => {
                        dropzoneMultipleRef.current = el;
                      }}
                      options={{
                        url: "https://httpbin.org/post",
                        thumbnailWidth: 150,
                        maxFilesize: 0.5,
                        headers: { "My-Awesome-Header": "header value" },
                      }}
                      className="dropzone"
                    >
                      <div className="text-lg font-medium">
                        Drop files here or click to upload.
                      </div>
                      <div className="text-gray-600">
                        This is just a demo dropzone. Selected files are
                        <span className="font-medium">not</span> actually
                        uploaded.
                      </div>
                    </Dropzone>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
            <Dropzone
              getRef={(el) => {
                dropzoneMultipleRef.current = el;
              }}
              options={{
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                headers: { "My-Awesome-Header": "header value" },
              }}
              className="dropzone"
            >
              <div className="text-lg font-medium">
                Drop files here or click to upload.
              </div>
              <div className="text-gray-600">
                This is just a demo dropzone. Selected files are
                <span className="font-medium">not</span> actually
                uploaded.
              </div>
            </Dropzone>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Multiple File Upload */}
        </div>
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: File Type Validation */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    File Type Validation
                  </h2>
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
                    <Dropzone
                      getRef={(el) => {
                        dropzoneValidationRef.current = el;
                      }}
                      options={{
                        url: "https://httpbin.org/post",
                        thumbnailWidth: 150,
                        maxFilesize: 0.5,
                        acceptedFiles: "image/jpeg|image/png|image/jpg",
                        headers: { "My-Awesome-Header": "header value" },
                      }}
                      className="dropzone"
                    >
                      <div className="text-lg font-medium">
                        Drop files here or click to upload.
                      </div>
                      <div className="text-gray-600">
                        This is just a demo dropzone. Selected files are
                        <span className="font-medium">not</span> actually
                        uploaded.
                      </div>
                    </Dropzone>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
            <Dropzone
              getRef={(el) => {
                dropzoneValidationRef.current = el;
              }}
              options={{
                url: "https://httpbin.org/post",
                thumbnailWidth: 150,
                maxFilesize: 0.5,
                acceptedFiles: "image/jpeg|image/png|image/jpg",
                headers: { "My-Awesome-Header": "header value" },
              }}
              className="dropzone"
            >
              <div className="text-lg font-medium">
                Drop files here or click to upload.
              </div>
              <div className="text-gray-600">
                This is just a demo dropzone. Selected files are
                <span className="font-medium">not</span> actually
                uploaded.
              </div>
            </Dropzone>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: File Type Validation */}
        </div>
      </div>
    </>
  );
}

export default Main;
