import {
  Lucide,
  Notification,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";
import { faker as $f } from "@/utils";
import { useRef } from "react";

function Main() {
  // Basic non sticky notification
  const basicNonStickyNotification = useRef();
  const basicNonStickyNotificationToggle = () => {
    // Show notification
    basicNonStickyNotification.current.showToast();
  };

  // Basic sticky notification
  const basicStickyNotification = useRef();
  const basicStickyNotificationToggle = () => {
    // Show notification
    basicStickyNotification.current.showToast();
  };

  // Success notification
  const successNotification = useRef();
  const successNotificationToggle = () => {
    // Show notification
    successNotification.current.showToast();
  };

  // Notification with actions
  const notificationWithActions = useRef();
  const notificationWithActionsToggle = () => {
    // Show notification
    notificationWithActions.current.showToast();
  };

  // Notification with avatar
  const notificationWithAvatar = useRef();
  const notificationWithAvatarToggle = () => {
    // Show notification
    notificationWithAvatar.current.showToast();
  };

  // Notification with split buttons
  const notificationWithSplitButtons = useRef();
  const notificationWithSplitButtonsToggle = () => {
    // Show notification
    notificationWithSplitButtons.current.showToast();
  };

  // Notification with buttons below
  const notificationWithButtonsBelow = useRef();
  const notificationWithButtonsBelowToggle = () => {
    // Show notification
    notificationWithButtonsBelow.current.showToast();
  };

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Notification</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Basic Notification */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Basic Notification
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
                    <div className="text-center">
                      {/* BEGIN: Basic Non Sticky Notification Content */}
                      <Notification
                        getRef={(el) => {
                          basicNonStickyNotification.current = el;
                        }}
                        options={{
                          duration: 3000,
                        }}
                        className="flex flex-col sm:flex-row"
                      >
                        <div className="font-medium">
                          Yay! Updates Published!
                        </div>
                        <a
                          className="font-medium text-primary dark:text-slate-400 mt-1 sm:mt-0 sm:ml-40"
                          href=""
                        >
                          Review Changes
                        </a>
                      </Notification>
                      {/* END: Basic Non Sticky Notification Content */}
                      {/* BEGIN: Basic Sticky Notification Content */}
                      <Notification
                        getRef={(el) => {
                          basicStickyNotification.current = el;
                        }}
                        className="flex flex-col sm:flex-row"
                      >
                        <div className="font-medium">
                          Yay! Updates Published!
                        </div>
                        <a
                          className="font-medium text-primary dark:text-slate-400 mt-1 sm:mt-0 sm:ml-40"
                          href=""
                        >
                          Review Changes
                        </a>
                      </Notification>
                      {/* END: Basic Sticky Notification Content */}
                      {/* BEGIN: Notification Toggle */}
                      <button
                        className="btn btn-primary mr-1"
                        onClick={basicNonStickyNotificationToggle}
                      >
                        Show Non Sticky Notification
                      </button>
                      <button
                        className="btn btn-primary mt-2 sm:mt-0"
                        onClick={basicStickyNotificationToggle}
                      >
                        Show Sticky Notification
                      </button>
                      {/* END: Notification Toggle */}
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Basic Non Sticky Notification Content */}
              <Notification
                getRef={(el) => {
                  basicNonStickyNotification.current = el;
                }}
                options={{
                  duration: 3000,
                }}
                className="flex flex-col sm:flex-row"
              >
                <div className="font-medium">
                  Yay! Updates Published!
                </div>
                <a
                  className="font-medium text-primary dark:text-slate-400 mt-1 sm:mt-0 sm:ml-40"
                  href=""
                >
                  Review Changes
                </a>
              </Notification>
              {/* END: Basic Non Sticky Notification Content */}
              {/* BEGIN: Basic Sticky Notification Content */}
              <Notification
                getRef={(el) => {
                  basicStickyNotification.current = el;
                }}
                className="flex flex-col sm:flex-row"
              >
                <div className="font-medium">
                  Yay! Updates Published!
                </div>
                <a
                  className="font-medium text-primary dark:text-slate-400 mt-1 sm:mt-0 sm:ml-40"
                  href=""
                >
                  Review Changes
                </a>
              </Notification>
              {/* END: Basic Sticky Notification Content */}
              {/* BEGIN: Notification Toggle */}
              <button
                className="btn btn-primary mr-1"
                onClick={basicNonStickyNotificationToggle}
              >
                Show Non Sticky Notification
              </button>
              <button
                className="btn btn-primary mt-2 sm:mt-0"
                onClick={basicStickyNotificationToggle}
              >
                Show Sticky Notification
              </button>
              {/* END: Notification Toggle */}
              `}
                    </Highlight>
                    <Highlight type="javascript" className="mt-5">
                      {`
                // Basic non sticky notification
                const basicNonStickyNotification = useRef();
                const basicNonStickyNotificationToggle = () => {
                  // Show notification
                  basicNonStickyNotification.current.showToast();
                };
              
                // Basic sticky notification
                const basicStickyNotification = useRef();
                const basicStickyNotificationToggle = () => {
                  // Show notification
                  basicStickyNotification.current.showToast();
                };
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Notification */}
          {/* BEGIN: Success Notification */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Success Notification
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
                    <div className="text-center">
                      {/* BEGIN: Notification Content */}
                      <Notification
                        getRef={(el) => {
                          successNotification.current = el;
                        }}
                        className="flex"
                      >
                        <Lucide icon="CheckCircle" className="text-success" />
                        <div className="ml-4 mr-4">
                          <div className="font-medium">Message Saved!</div>
                          <div className="text-slate-500 mt-1">
                            The message will be sent in 5 minutes.
                          </div>
                        </div>
                      </Notification>
                      {/* END: Notification Content */}
                      {/* BEGIN: Notification Toggle */}
                      <button
                        className="btn btn-primary"
                        onClick={successNotificationToggle}
                      >
                        Show Notification
                      </button>
                      {/* END: Notification Toggle */}
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Notification Content */}
              <Notification
                getRef={(el) => {
                  successNotification.current = el;
                }}
                className="flex"
              >
                <Lucide icon="CheckCircle" className="text-success" />
                <div className="ml-4 mr-4">
                  <div className="font-medium">Message Saved!</div>
                  <div className="text-slate-500 mt-1">
                    The message will be sent in 5 minutes.
                  </div>
                </div>
              </Notification>
              {/* END: Notification Content */}
              {/* BEGIN: Notification Toggle */}
              <button
                className="btn btn-primary"
                onClick={successNotificationToggle}
              >
                Show Notification
              </button>
              {/* END: Notification Toggle */}
              `}
                    </Highlight>
                    <Highlight type="javascript" className="mt-5">
                      {`
                // Success notification
                const successNotification = useRef();
                const successNotificationToggle = () => {
                  // Show notification
                  successNotification.current.showToast();
                };
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Success Notification */}
          {/* BEGIN: Notification With Actions */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Notification With Actions
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
                    <div className="text-center">
                      {/* BEGIN: Notification Content */}
                      <Notification
                        getRef={(el) => {
                          notificationWithActions.current = el;
                        }}
                        className="flex"
                      >
                        <Lucide icon="HardDrive" />
                        <div className="ml-4 mr-4">
                          <div className="font-medium">Storage Removed!</div>
                          <div className="text-slate-500 mt-1">
                            The server will restart in 30 seconds, don't make
                            <br />
                            changes during the update process!
                          </div>
                          <div className="font-medium flex mt-1.5">
                            <a
                              className="text-primary dark:text-slate-400"
                              href=""
                            >
                              Restart Now
                            </a>
                            <a className="text-slate-500 ml-3" href="">
                              Cancel
                            </a>
                          </div>
                        </div>
                      </Notification>
                      {/* END: Notification Content */}
                      {/* BEGIN: Notification Toggle */}
                      <button
                        className="btn btn-primary"
                        onClick={notificationWithActionsToggle}
                      >
                        Show Notification
                      </button>
                      {/* END: Notification Toggle */}
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Notification Content */}
              <Notification
                getRef={(el) => {
                  notificationWithActions.current = el;
                }}
                className="flex"
              >
                <Lucide icon="HardDrive" />
                <div className="ml-4 mr-4">
                  <div className="font-medium">Storage Removed!</div>
                  <div className="text-slate-500 mt-1">
                    The server will restart in 30 seconds, don't make
                    <br />
                    changes during the update process!
                  </div>
                  <div className="font-medium flex mt-1.5">
                    <a
                      className="text-primary dark:text-slate-400"
                      href=""
                    >
                      Restart Now
                    </a>
                    <a className="text-slate-500 ml-3" href="">
                      Cancel
                    </a>
                  </div>
                </div>
              </Notification>
              {/* END: Notification Content */}
              {/* BEGIN: Notification Toggle */}
              <button
                className="btn btn-primary"
                onClick={notificationWithActionsToggle}
              >
                Show Notification
              </button>
              {/* END: Notification Toggle */}
              `}
                    </Highlight>
                    <Highlight type="javascript" className="mt-5">
                      {`
                // Notification with actions
                const notificationWithActions = useRef();
                const notificationWithActionsToggle = () => {
                  // Show notification
                  notificationWithActions.current.showToast();
                };
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
        </div>
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* END: Notification With Actions */}
          {/* BEGIN: Notification With Avatar */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Notification With Avatar
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
                    <div className="text-center">
                      {/* BEGIN: Notification Content */}
                      <Notification
                        getRef={(el) => {
                          notificationWithAvatar.current = el;
                        }}
                        options={{
                          close: false,
                        }}
                        className="flex"
                      >
                        <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                          <img
                            alt="Midone Tailwind HTML Admin Template"
                            src={$f()[0].photos[0]}
                          />
                        </div>
                        <div className="ml-4 sm:mr-28">
                          <div className="font-medium">
                            {$f()[0].users[0].name}
                          </div>
                          <div className="text-slate-500 mt-1">
                            See you later! 😃😃😃
                          </div>
                        </div>
                        <a
                          data-dismiss="notification"
                          className="absolute top-0 bottom-0 right-0 flex items-center px-6 border-l border-slate-200/60 dark:border-darkmode-400 font-medium text-primary dark:text-slate-400"
                          href="#"
                        >
                          Reply
                        </a>
                      </Notification>
                      {/* END: Notification Content */}
                      {/* BEGIN: Notification Toggle */}
                      <button
                        className="btn btn-primary"
                        onClick={notificationWithAvatarToggle}
                      >
                        Show Notification
                      </button>
                      {/* END: Notification Toggle */}
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Notification Content */}
              <Notification
                getRef={(el) => {
                  notificationWithAvatar.current = el;
                }}
                options={{
                  close: false,
                }}
                className="flex"
              >
                <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                  <img
                    alt="Midone Tailwind HTML Admin Template"
                    src={$f()[0].photos[0]}
                  />
                </div>
                <div className="ml-4 sm:mr-28">
                  <div className="font-medium">
                    {$f()[0].users[0].name}
                  </div>
                  <div className="text-slate-500 mt-1">
                    See you later! 😃😃😃
                  </div>
                </div>
                <a
                  data-dismiss="notification"
                  className="absolute top-0 bottom-0 right-0 flex items-center px-6 border-l border-slate-200/60 dark:border-darkmode-400 font-medium text-primary dark:text-slate-400"
                  href="#"
                >
                  Reply
                </a>
              </Notification>
              {/* END: Notification Content */}
              {/* BEGIN: Notification Toggle */}
              <button
                className="btn btn-primary"
                onClick={notificationWithAvatarToggle}
              >
                Show Notification
              </button>
              {/* END: Notification Toggle */}
              `}
                    </Highlight>
                    <Highlight type="javascript" className="mt-5">
                      {`
                // Notification with avatar
                const notificationWithAvatar = useRef();
                const notificationWithAvatarToggle = () => {
                  // Show notification
                  notificationWithAvatar.current.showToast();
                };
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Notification With Avatar */}
          {/* BEGIN: Notification With Split Buttons */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Notification With Split Buttons
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
                    <div className="text-center">
                      {/* BEGIN: Notification Content */}
                      <Notification
                        getRef={(el) => {
                          notificationWithSplitButtons.current = el;
                        }}
                        options={{
                          close: false,
                        }}
                        className="flex"
                      >
                        <div className="sm:mr-40">
                          <div className="font-medium">
                            Introducing new theme
                          </div>
                          <div className="text-slate-500 mt-1">
                            Release version 2.3.3
                          </div>
                        </div>
                        <div className="absolute top-0 bottom-0 right-0 flex flex-col border-l border-slate-200/60 dark:border-darkmode-400">
                          <a
                            className="flex-1 flex items-center justify-center px-6 font-medium text-primary dark:text-slate-400 border-b border-slate-200/60 dark:border-darkmode-400"
                            href="#"
                          >
                            View Details
                          </a>
                          <a
                            data-dismiss="notification"
                            className="flex-1 flex items-center justify-center px-6 font-medium text-slate-500"
                            href="#"
                          >
                            Dismiss
                          </a>
                        </div>
                      </Notification>
                      {/* END: Notification Content */}
                      {/* BEGIN: Notification Toggle */}
                      <button
                        className="btn btn-primary"
                        onClick={notificationWithSplitButtonsToggle}
                      >
                        Show Notification
                      </button>
                      {/* END: Notification Toggle */}
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Notification Content */}
              <Notification
                getRef={(el) => {
                  notificationWithSplitButtons.current = el;
                }}
                options={{
                  close: false,
                }}
                className="flex"
              >
                <div className="sm:mr-40">
                  <div className="font-medium">
                    Introducing new theme
                  </div>
                  <div className="text-slate-500 mt-1">
                    Release version 2.3.3
                  </div>
                </div>
                <div className="absolute top-0 bottom-0 right-0 flex flex-col border-l border-slate-200/60 dark:border-darkmode-400">
                  <a
                    className="flex-1 flex items-center justify-center px-6 font-medium text-primary dark:text-slate-400 border-b border-slate-200/60 dark:border-darkmode-400"
                    href="#"
                  >
                    View Details
                  </a>
                  <a
                    data-dismiss="notification"
                    className="flex-1 flex items-center justify-center px-6 font-medium text-slate-500"
                    href="#"
                  >
                    Dismiss
                  </a>
                </div>
              </Notification>
              {/* END: Notification Content */}
              {/* BEGIN: Notification Toggle */}
              <button
                className="btn btn-primary"
                onClick={notificationWithSplitButtonsToggle}
              >
                Show Notification
              </button>
              {/* END: Notification Toggle */}
              `}
                    </Highlight>
                    <Highlight type="javascript" className="mt-5">
                      {`
                // Notification with split buttons
                const notificationWithSplitButtons = useRef();
                const notificationWithSplitButtonsToggle = () => {
                  // Show notification
                  notificationWithSplitButtons.current.showToast();
                };
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Notification With Split Buttons */}
          {/* BEGIN: Notification With Buttons Below */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Notification With Buttons Below
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
                    <div className="text-center">
                      {/* BEGIN: Notification Content */}
                      <Notification
                        getRef={(el) => {
                          notificationWithButtonsBelow.current = el;
                        }}
                        options={{
                          close: false,
                        }}
                        className="flex"
                      >
                        <Lucide icon="FileText" />
                        <div className="ml-4 mr-5 sm:mr-20">
                          <div className="font-medium">
                            {$f()[0].users[0].name}
                          </div>
                          <div className="text-slate-500 mt-1">
                            Sent you new documents.
                          </div>
                          <div className="mt-2.5">
                            <a
                              className="btn btn-primary py-1 px-2 mr-2"
                              href=""
                            >
                              Preview
                            </a>
                            <a
                              className="btn btn-outline-secondary py-1 px-2"
                              href=""
                            >
                              Download
                            </a>
                          </div>
                        </div>
                      </Notification>
                      {/* END: Notification Content */}
                      {/* BEGIN: Notification Toggle */}
                      <button
                        className="btn btn-primary"
                        onClick={notificationWithButtonsBelowToggle}
                      >
                        Show Notification
                      </button>
                      {/* END: Notification Toggle */}
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              {/* BEGIN: Notification Content */}
              <Notification
                getRef={(el) => {
                  notificationWithButtonsBelow.current = el;
                }}
                options={{
                  close: false,
                }}
                className="flex"
              >
                <Lucide icon="FileText" />
                <div className="ml-4 mr-5 sm:mr-20">
                  <div className="font-medium">
                    {$f()[0].users[0].name}
                  </div>
                  <div className="text-slate-500 mt-1">
                    Sent you new documents.
                  </div>
                  <div className="mt-2.5">
                    <a
                      className="btn btn-primary py-1 px-2 mr-2"
                      href=""
                    >
                      Preview
                    </a>
                    <a
                      className="btn btn-outline-secondary py-1 px-2"
                      href=""
                    >
                      Download
                    </a>
                  </div>
                </div>
              </Notification>
              {/* END: Notification Content */}
              {/* BEGIN: Notification Toggle */}
              <button
                className="btn btn-primary"
                onClick={notificationWithButtonsBelowToggle}
              >
                Show Notification
              </button>
              {/* END: Notification Toggle */}
              `}
                    </Highlight>
                    <Highlight type="javascript" className="mt-5">
                      {`
                // Notification with buttons below
                const notificationWithButtonsBelow = useRef();
                const notificationWithButtonsBelowToggle = () => {
                  // Show notification
                  notificationWithButtonsBelow.current.showToast();
                };
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Notification With Buttons Below */}
        </div>
      </div>
    </>
  );
}

export default Main;
