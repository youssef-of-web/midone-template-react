import { useState } from "react";
import {
  ClassicEditor,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";

function Main() {
  const [editorData, setEditorData] = useState("<p>Content of the editor.</p>");

  return (
    <>
      <div className="flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">CKEditor</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        {/* BEGIN: Classic Editor */}
        <div className="col-span-12">
          <PreviewComponent className="box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Classic Editor
                  </h2>
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
                    <ClassicEditor
                      value={editorData}
                      onChange={setEditorData}
                    />
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <ClassicEditor
                value={editorData}
                onChange={setEditorData}
              />
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
        </div>
        {/* END: Classic Editor */}
      </div>
    </>
  );
}

export default Main;
