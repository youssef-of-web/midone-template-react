import {
  Lucide,
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";
import { useForm } from "react-hook-form";
import Toastify from "toastify-js";
import dom from "@left4code/tw-starter/dist/js/dom";
import classnames from "classnames";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Main() {
  const schema = yup
    .object({
      name: yup.string().required().min(2),
      email: yup.string().required().email(),
      password: yup.string().required().min(6),
      age: yup
        .number()
        .required()
        .test(
          "len",
          "age must be less than or equal to 3",
          (val) => val.toString().length <= 3
        ),
      url: yup.string().url(),
      comment: yup.string().required().min(10),
    })
    .required();

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmit = async (event) => {
    event.preventDefault();
    const result = await trigger();
    if (!result) {
      Toastify({
        node: dom("#failed-notification-content")
          .clone()
          .removeClass("hidden")[0],
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
      }).showToast();
    } else {
      Toastify({
        node: dom("#success-notification-content")
          .clone()
          .removeClass("hidden")[0],
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
      }).showToast();
    }
  };

  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Form Validation</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Form Validation */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Implementation
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
                    {/* BEGIN: Validation Form */}
                    <form className="validate-form" onSubmit={onSubmit}>
                      <div className="input-form">
                        <label
                          htmlFor="validation-form-1"
                          className="form-label w-full flex flex-col sm:flex-row"
                        >
                          Name
                          <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                            Required, at least 2 characters
                          </span>
                        </label>
                        <input
                          {...register("name")}
                          id="validation-form-1"
                          type="text"
                          name="name"
                          className={classnames({
                            "form-control": true,
                            "border-danger": errors.name,
                          })}
                          placeholder="John Legend"
                        />
                        {errors.name && (
                          <div className="text-danger mt-2">
                            {errors.name.message}
                          </div>
                        )}
                      </div>
                      <div className="input-form mt-3">
                        <label
                          htmlFor="validation-form-2"
                          className="form-label w-full flex flex-col sm:flex-row"
                        >
                          Email
                          <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                            Required, email address format
                          </span>
                        </label>
                        <input
                          {...register("email")}
                          id="validation-form-2"
                          type="email"
                          name="email"
                          className={classnames({
                            "form-control": true,
                            "border-danger": errors.email,
                          })}
                          placeholder="example@gmail.com"
                        />
                        {errors.email && (
                          <div className="text-danger mt-2">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                      <div className="input-form mt-3">
                        <label
                          htmlFor="validation-form-3"
                          className="form-label w-full flex flex-col sm:flex-row"
                        >
                          Password
                          <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                            Required, at least 6 characters
                          </span>
                        </label>
                        <input
                          {...register("password")}
                          id="validation-form-3"
                          type="password"
                          name="password"
                          className={classnames({
                            "form-control": true,
                            "border-danger": errors.password,
                          })}
                          placeholder="secret"
                        />
                        {errors.password && (
                          <div className="text-danger mt-2">
                            {errors.password.message}
                          </div>
                        )}
                      </div>
                      <div className="input-form mt-3">
                        <label
                          htmlFor="validation-form-4"
                          className="form-label w-full flex flex-col sm:flex-row"
                        >
                          Age
                          <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                            Required, integer only & maximum 3 characters
                          </span>
                        </label>
                        <input
                          {...register("age")}
                          id="validation-form-4"
                          type="number"
                          name="age"
                          className={classnames({
                            "form-control": true,
                            "border-danger": errors.age,
                          })}
                          placeholder="21"
                        />
                        {errors.age && (
                          <div className="text-danger mt-2">
                            {errors.age.message}
                          </div>
                        )}
                      </div>
                      <div className="input-form mt-3">
                        <label
                          htmlFor="validation-form-5"
                          className="form-label w-full flex flex-col sm:flex-row"
                        >
                          Profile URL
                          <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                            Optional, URL format
                          </span>
                        </label>
                        <input
                          {...register("url")}
                          id="validation-form-5"
                          type="text"
                          name="url"
                          className={classnames({
                            "form-control": true,
                            "border-danger": errors.url,
                          })}
                          placeholder="https://google.com"
                        />
                        {errors.url && (
                          <div className="text-danger mt-2">
                            {errors.url.message}
                          </div>
                        )}
                      </div>
                      <div className="input-form mt-3">
                        <label
                          htmlFor="validation-form-6"
                          className="form-label w-full flex flex-col sm:flex-row"
                        >
                          Comment
                          <span className="sm:ml-auto mt-1 sm:mt-0 text-xs text-slate-500">
                            Required, at least 10 characters
                          </span>
                        </label>
                        <textarea
                          {...register("comment")}
                          id="validation-form-6"
                          name="comment"
                          className={classnames({
                            "form-control": true,
                            "border-danger": errors.comment,
                          })}
                          placeholder="Type your comments"
                        ></textarea>
                        {errors.comment && (
                          <div className="text-danger mt-2">
                            {errors.comment.message}
                          </div>
                        )}
                      </div>
                      <button type="submit" className="btn btn-primary mt-5">
                        Register
                      </button>
                    </form>
                    {/* END: Validation Form */}
                  </Preview>
                  <Source>
                    <Highlight type="javascript">
                      {`
                      const schema = yup
                      .object({
                        name: yup.string().required().min(2),
                        email: yup.string().required().email(),
                        password: yup.string().required().min(6),
                        age: yup
                          .number()
                          .required()
                          .test(
                            "len",
                            "age must be less than or equal to 3",
                            (val) => val.toString().length <= 3
                          ),
                        url: yup.string().url(),
                        comment: yup.string().required().min(10),
                      })
                      .required();
                  
                    const {
                      register,
                      trigger,
                      formState: { errors },
                    } = useForm({
                      mode: "onChange",
                      resolver: yupResolver(schema),
                    });
                    const onSubmit = async (event) => {
                      event.preventDefault();
                      const result = await trigger();
                      if (!result) {
                        Toastify({
                          node: dom("#failed-notification-content")
                            .clone()
                            .removeClass("hidden")[0],
                          duration: 3000,
                          newWindow: true,
                          close: true,
                          gravity: "top",
                          position: "right",
                          stopOnFocus: true,
                        }).showToast();
                      } else {
                        Toastify({
                          node: dom("#success-notification-content")
                            .clone()
                            .removeClass("hidden")[0],
                          duration: 3000,
                          newWindow: true,
                          close: true,
                          gravity: "top",
                          position: "right",
                          stopOnFocus: true,
                        }).showToast();
                      }
                    };
                      `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Form Validation */}
          {/* BEGIN: Success Notification Content */}
          <div
            id="success-notification-content"
            className="toastify-content hidden flex"
          >
            <Lucide icon="CheckCircle" className="text-success" />
            <div className="ml-4 mr-4">
              <div className="font-medium">Registration success!</div>
              <div className="text-slate-500 mt-1">
                Please check your e-mail for further info!
              </div>
            </div>
          </div>
          {/* END: Success Notification Content */}
          {/* BEGIN: Failed Notification Content */}
          <div
            id="failed-notification-content"
            className="toastify-content hidden flex"
          >
            <Lucide icon="XCircle" className="text-danger" />
            <div className="ml-4 mr-4">
              <div className="font-medium">Registration failed!</div>
              <div className="text-slate-500 mt-1">
                Please check the fileld form.
              </div>
            </div>
          </div>
          {/* END: Failed Notification Content */}
        </div>
      </div>
    </>
  );
}

export default Main;
