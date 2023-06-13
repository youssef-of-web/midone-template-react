import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";

function Main() {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Regular Table</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Basic Table */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60">
                  <h2 className="font-medium text-base mr-auto">Basic Table</h2>
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
                    <div className="overflow-x-auto">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="whitespace-nowrap">#</th>
                            <th className="whitespace-nowrap">First Name</th>
                            <th className="whitespace-nowrap">Last Name</th>
                            <th className="whitespace-nowrap">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Angelina</td>
                            <td>Jolie</td>
                            <td>@angelinajolie</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Brad</td>
                            <td>Pitt</td>
                            <td>@bradpitt</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Charlie</td>
                            <td>Hunnam</td>
                            <td>@charliehunnam</td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table table-dark mt-5">
                        <thead>
                          <tr>
                            <th className="whitespace-nowrap">#</th>
                            <th className="whitespace-nowrap">First Name</th>
                            <th className="whitespace-nowrap">Last Name</th>
                            <th className="whitespace-nowrap">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Angelina</td>
                            <td>Jolie</td>
                            <td>@angelinajolie</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Brad</td>
                            <td>Pitt</td>
                            <td>@bradpitt</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Charlie</td>
                            <td>Hunnam</td>
                            <td>@charliehunnam</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">#</th>
                      <th className="whitespace-nowrap">First Name</th>
                      <th className="whitespace-nowrap">Last Name</th>
                      <th className="whitespace-nowrap">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Angelina</td>
                      <td>Jolie</td>
                      <td>@angelinajolie</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Brad</td>
                      <td>Pitt</td>
                      <td>@bradpitt</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Charlie</td>
                      <td>Hunnam</td>
                      <td>@charliehunnam</td>
                    </tr>
                  </tbody>
                </table>
                <table className="table table-dark mt-5">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">#</th>
                      <th className="whitespace-nowrap">First Name</th>
                      <th className="whitespace-nowrap">Last Name</th>
                      <th className="whitespace-nowrap">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Angelina</td>
                      <td>Jolie</td>
                      <td>@angelinajolie</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Brad</td>
                      <td>Pitt</td>
                      <td>@bradpitt</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Charlie</td>
                      <td>Hunnam</td>
                      <td>@charliehunnam</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Table */}
          {/* BEGIN: Bordered Table */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60">
                  <h2 className="font-medium text-base mr-auto">
                    Bordered Table
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
                    <div className="overflow-x-auto">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th className="whitespace-nowrap">#</th>
                            <th className="whitespace-nowrap">First Name</th>
                            <th className="whitespace-nowrap">Last Name</th>
                            <th className="whitespace-nowrap">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Angelina</td>
                            <td>Jolie</td>
                            <td>@angelinajolie</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Brad</td>
                            <td>Pitt</td>
                            <td>@bradpitt</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Charlie</td>
                            <td>Hunnam</td>
                            <td>@charliehunnam</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="overflow-x-auto">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">#</th>
                      <th className="whitespace-nowrap">First Name</th>
                      <th className="whitespace-nowrap">Last Name</th>
                      <th className="whitespace-nowrap">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Angelina</td>
                      <td>Jolie</td>
                      <td>@angelinajolie</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Brad</td>
                      <td>Pitt</td>
                      <td>@bradpitt</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Charlie</td>
                      <td>Hunnam</td>
                      <td>@charliehunnam</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Bordered Table */}
          {/* BEGIN: Hoverable Table */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60">
                  <h2 className="font-medium text-base mr-auto">
                    Hoverable Table
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
                    <div className="overflow-x-auto">
                      <table className="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th className="whitespace-nowrap">#</th>
                            <th className="whitespace-nowrap">First Name</th>
                            <th className="whitespace-nowrap">Last Name</th>
                            <th className="whitespace-nowrap">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Angelina</td>
                            <td>Jolie</td>
                            <td>@angelinajolie</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Brad</td>
                            <td>Pitt</td>
                            <td>@bradpitt</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Charlie</td>
                            <td>Hunnam</td>
                            <td>@charliehunnam</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="overflow-x-auto">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">#</th>
                      <th className="whitespace-nowrap">First Name</th>
                      <th className="whitespace-nowrap">Last Name</th>
                      <th className="whitespace-nowrap">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Angelina</td>
                      <td>Jolie</td>
                      <td>@angelinajolie</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Brad</td>
                      <td>Pitt</td>
                      <td>@bradpitt</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Charlie</td>
                      <td>Hunnam</td>
                      <td>@charliehunnam</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Hoverable Table */}
          {/* BEGIN: Table Row States */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60">
                  <h2 className="font-medium text-base mr-auto">
                    Table Row States
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
                    <div className="overflow-x-auto">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="whitespace-nowrap">#</th>
                            <th className="whitespace-nowrap">First Name</th>
                            <th className="whitespace-nowrap">Last Name</th>
                            <th className="whitespace-nowrap">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-primary text-white">
                            <td>1</td>
                            <td>Angelina</td>
                            <td>Jolie</td>
                            <td>@angelinajolie</td>
                          </tr>
                          <tr className="bg-danger text-white">
                            <td>2</td>
                            <td>Brad</td>
                            <td>Pitt</td>
                            <td>@bradpitt</td>
                          </tr>
                          <tr className="bg-warning">
                            <td>3</td>
                            <td>Charlie</td>
                            <td>Hunnam</td>
                            <td>@charliehunnam</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">#</th>
                      <th className="whitespace-nowrap">First Name</th>
                      <th className="whitespace-nowrap">Last Name</th>
                      <th className="whitespace-nowrap">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-primary text-white">
                      <td>1</td>
                      <td>Angelina</td>
                      <td>Jolie</td>
                      <td>@angelinajolie</td>
                    </tr>
                    <tr className="bg-danger text-white">
                      <td>2</td>
                      <td>Brad</td>
                      <td>Pitt</td>
                      <td>@bradpitt</td>
                    </tr>
                    <tr className="bg-warning">
                      <td>3</td>
                      <td>Charlie</td>
                      <td>Hunnam</td>
                      <td>@charliehunnam</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Table Row States */}
        </div>
        <div className="intro-y col-span-12 lg:col-span-6">
          {/* BEGIN: Table Head Options */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60">
                  <h2 className="font-medium text-base mr-auto">
                    Table Head Options
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
                    <div className="overflow-x-auto">
                      <table className="table">
                        <thead className="table-dark">
                          <tr>
                            <th className="whitespace-nowrap">#</th>
                            <th className="whitespace-nowrap">First Name</th>
                            <th className="whitespace-nowrap">Last Name</th>
                            <th className="whitespace-nowrap">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Angelina</td>
                            <td>Jolie</td>
                            <td>@angelinajolie</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Brad</td>
                            <td>Pitt</td>
                            <td>@bradpitt</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Charlie</td>
                            <td>Hunnam</td>
                            <td>@charliehunnam</td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="table mt-5">
                        <thead className="table-light">
                          <tr>
                            <th className="whitespace-nowrap">#</th>
                            <th className="whitespace-nowrap">First Name</th>
                            <th className="whitespace-nowrap">Last Name</th>
                            <th className="whitespace-nowrap">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Angelina</td>
                            <td>Jolie</td>
                            <td>@angelinajolie</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Brad</td>
                            <td>Pitt</td>
                            <td>@bradpitt</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Charlie</td>
                            <td>Hunnam</td>
                            <td>@charliehunnam</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="overflow-x-auto">
                <table className="table">
                  <thead className="table-dark">
                    <tr>
                      <th className="whitespace-nowrap">#</th>
                      <th className="whitespace-nowrap">First Name</th>
                      <th className="whitespace-nowrap">Last Name</th>
                      <th className="whitespace-nowrap">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Angelina</td>
                      <td>Jolie</td>
                      <td>@angelinajolie</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Brad</td>
                      <td>Pitt</td>
                      <td>@bradpitt</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Charlie</td>
                      <td>Hunnam</td>
                      <td>@charliehunnam</td>
                    </tr>
                  </tbody>
                </table>
                <table className="table mt-5">
                  <thead className="table-light">
                    <tr>
                      <th className="whitespace-nowrap">#</th>
                      <th className="whitespace-nowrap">First Name</th>
                      <th className="whitespace-nowrap">Last Name</th>
                      <th className="whitespace-nowrap">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Angelina</td>
                      <td>Jolie</td>
                      <td>@angelinajolie</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Brad</td>
                      <td>Pitt</td>
                      <td>@bradpitt</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Charlie</td>
                      <td>Hunnam</td>
                      <td>@charliehunnam</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Table Head Options */}
          {/* BEGIN: Responsive Table */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60">
                  <h2 className="font-medium text-base mr-auto">
                    Responsive Table
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
                    <div className="overflow-x-auto">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="whitespace-nowrap">#</th>
                            <th className="whitespace-nowrap">First Name</th>
                            <th className="whitespace-nowrap">Last Name</th>
                            <th className="whitespace-nowrap">Username</th>
                            <th className="whitespace-nowrap">Email</th>
                            <th className="whitespace-nowrap">Address</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="whitespace-nowrap">1</td>
                            <td className="whitespace-nowrap">Angelina</td>
                            <td className="whitespace-nowrap">Jolie</td>
                            <td className="whitespace-nowrap">
                              @angelinajolie
                            </td>
                            <td className="whitespace-nowrap">
                              angelinajolie@gmail.com
                            </td>
                            <td className="whitespace-nowrap">
                              260 W. Storm Street New York, NY 10025.
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap">2</td>
                            <td className="whitespace-nowrap">Brad</td>
                            <td className="whitespace-nowrap">Pitt</td>
                            <td className="whitespace-nowrap">@bradpitt</td>
                            <td className="whitespace-nowrap">
                              bradpitt@gmail.com
                            </td>
                            <td className="whitespace-nowrap">
                              47 Division St. Buffalo, NY 14241.
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap">3</td>
                            <td className="whitespace-nowrap">Charlie</td>
                            <td className="whitespace-nowrap">Hunnam</td>
                            <td className="whitespace-nowrap">
                              @charliehunnam
                            </td>
                            <td className="whitespace-nowrap">
                              charliehunnam@gmail.com
                            </td>
                            <td className="whitespace-nowrap">
                              8023 Amerige Street Harriman, NY 10926.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">#</th>
                      <th className="whitespace-nowrap">First Name</th>
                      <th className="whitespace-nowrap">Last Name</th>
                      <th className="whitespace-nowrap">Username</th>
                      <th className="whitespace-nowrap">Email</th>
                      <th className="whitespace-nowrap">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="whitespace-nowrap">1</td>
                      <td className="whitespace-nowrap">Angelina</td>
                      <td className="whitespace-nowrap">Jolie</td>
                      <td className="whitespace-nowrap">@angelinajolie</td>
                      <td className="whitespace-nowrap">angelinajolie@gmail.com</td>
                      <td className="whitespace-nowrap">
                        260 W. Storm Street New York, NY 10025.
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap">2</td>
                      <td className="whitespace-nowrap">Brad</td>
                      <td className="whitespace-nowrap">Pitt</td>
                      <td className="whitespace-nowrap">@bradpitt</td>
                      <td className="whitespace-nowrap">bradpitt@gmail.com</td>
                      <td className="whitespace-nowrap">
                        47 Division St. Buffalo, NY 14241.
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap">3</td>
                      <td className="whitespace-nowrap">Charlie</td>
                      <td className="whitespace-nowrap">Hunnam</td>
                      <td className="whitespace-nowrap">@charliehunnam</td>
                      <td className="whitespace-nowrap">charliehunnam@gmail.com</td>
                      <td className="whitespace-nowrap">
                        8023 Amerige Street Harriman, NY 10926.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Responsive Table */}
          {/* BEGIN: Small Table */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60">
                  <h2 className="font-medium text-base mr-auto">Small Table</h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-7"
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
                    <div className="overflow-x-auto">
                      <table className="table table-sm">
                        <thead>
                          <tr>
                            <th className="whitespace-nowrap">#</th>
                            <th className="whitespace-nowrap">First Name</th>
                            <th className="whitespace-nowrap">Last Name</th>
                            <th className="whitespace-nowrap">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Angelina</td>
                            <td>Jolie</td>
                            <td>@angelinajolie</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Brad</td>
                            <td>Pitt</td>
                            <td>@bradpitt</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Charlie</td>
                            <td>Hunnam</td>
                            <td>@charliehunnam</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="overflow-x-auto">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">#</th>
                      <th className="whitespace-nowrap">First Name</th>
                      <th className="whitespace-nowrap">Last Name</th>
                      <th className="whitespace-nowrap">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Angelina</td>
                      <td>Jolie</td>
                      <td>@angelinajolie</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Brad</td>
                      <td>Pitt</td>
                      <td>@bradpitt</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Charlie</td>
                      <td>Hunnam</td>
                      <td>@charliehunnam</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Small Table */}
          {/* BEGIN: Striped Rows */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60">
                  <h2 className="font-medium text-base mr-auto">
                    Striped Rows
                  </h2>
                  <div className="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    <label
                      className="form-check-label ml-0"
                      htmlFor="show-example-8"
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
                    <div className="overflow-x-auto">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th className="whitespace-nowrap">#</th>
                            <th className="whitespace-nowrap">First Name</th>
                            <th className="whitespace-nowrap">Last Name</th>
                            <th className="whitespace-nowrap">Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Angelina</td>
                            <td>Jolie</td>
                            <td>@angelinajolie</td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Brad</td>
                            <td>Pitt</td>
                            <td>@bradpitt</td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Charlie</td>
                            <td>Hunnam</td>
                            <td>@charliehunnam</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
              <div className="overflow-x-auto">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th className="whitespace-nowrap">#</th>
                      <th className="whitespace-nowrap">First Name</th>
                      <th className="whitespace-nowrap">Last Name</th>
                      <th className="whitespace-nowrap">Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Angelina</td>
                      <td>Jolie</td>
                      <td>@angelinajolie</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Brad</td>
                      <td>Pitt</td>
                      <td>@bradpitt</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Charlie</td>
                      <td>Hunnam</td>
                      <td>@charliehunnam</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Striped Rows */}
        </div>
      </div>
    </>
  );
}

export default Main;
