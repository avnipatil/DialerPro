import React, { useState } from "react";
import { Table, Badge } from "react-bootstrap";
import { CallLogsTable } from "../../assets/Data/Data";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { Form, Modal } from "react-bootstrap";
import { FaPlayCircle,FaFilter} from "react-icons/fa";
import Pagination from '../../Components/Pagination';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import KGF from '../../assets/audio/KGF.mp3';
const CallLogs = () => {
  const [show, toggleShow] = React.useState(true);//Showstatus filter option
  const [showpro, toggleShowpro] = React.useState(true);//Showprospect Status filter option
  const [smShow, setSmShow] = useState(false); //Show modal
  const [postsPerPage, setpostPerPage] = useState(10); //set show entry variable
  const [status, setStatus] = useState(""); //set variable for status
  const [prospectstatus, setProspectStatus] = useState(""); //set variable for prospect status
  //const [searchInput, setSearchInput] = useState(""); //Search data filter from table API Data
  const [All, setAllData] = useState(CallLogsTable);
  //pagination
  var dataLimit = postsPerPage;
  var pageLimit = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return All.slice(startIndex, endIndex);
  }
   //check filter
  //  status filter
   const FilterData = (event) => {
     setStatus(event)
       switch (event) {
           case "All":
               const AllData = CallLogsTable;
               setAllData(AllData)
               return AllData;
           case "Answer":
               const result = CallLogsTable.filter(word => word.status === "Answer");
               setAllData(result)
               return result;
           case "Rejected":
               const result2 = CallLogsTable.filter(word => word.status === "Rejected");
               setAllData(result2)
               return result2;
           case "Notanswer":
               const result3 = CallLogsTable.filter(word => word.status === "Notanswer");
               setAllData(result3)
               return result3;
           default:
       }
   }
  //  prospect status
   const FilterDataPro = (event) => { 
    setProspectStatus(event)
    switch (event) {
        case "All":
            const AllData = CallLogsTable;
            setAllData(AllData)
            return AllData;
            case "Connected":
              const result4 =AllData.filter(word => word.prospectstatus === "Connected");
              setAllData(result4)
              return console.log(result4);
            case "Busy":
              const result5 = CallLogsTable.filter(word => word.prospectstatus === "Busy");
              setAllData(result5)
              return result5;
            case "Callback":
              const result6 = CallLogsTable.filter(word => word.prospectstatus === "Callback");
              setAllData(result6)
              return result6;
            case "DNCL":
              const result7 = CallLogsTable.filter(word => word.prospectstatus === "DNCL");
              setAllData(result7)
                return result7;
            default:
    }
 }
//  search
const searchItemsText = (event) => {
  const searchText = CallLogsTable.filter((item) => {
    if (event !== "") {
      return Object.values(item)
        .join("")
        .toLowerCase()
        .includes(event.toLowerCase());
    } else {
      return item;
    }
  });  
  setAllData(searchText)
};
  return (
    <>
      <Header />
      <div className="container">    
        <div className="row">
          <Table striped bordered hover responsive id="table-to-xls">
            <thead className="" style={{ backgroundColor: "#f0f8ff" }}>
              <tr>
                <th className="bordhide" colSpan={9}>
                  <h3 className="headText" style={{ marginTop: "80px" }}>
                    Call Logs 
                  </h3>
                </th>
              </tr>
              <tr>
                <th>
                  <label>Show Entries</label>
                  <Form.Select
                    className="Table-entry"
                    value={postsPerPage}
                    onChange={(e) => {
                      setpostPerPage(Number(e.target.value));
                    }}
                  >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        {pageSize}
                      </option>
                    ))}
                  </Form.Select>
                </th>
                <th colSpan={1} className="bordhide">
                    <ReactHTMLTableToExcel
                      id="xlsExportbtn"
                      className="SubmitBtn"
                      table="table-to-xls"
                      filename="Call Data"
                      sheet="tablexls"
                      buttonText="Export"
                    >
                    </ReactHTMLTableToExcel>
                </th>
                <th colSpan={2} className="bordhide">
                  <div className="d-flex justify-content-start">
                    <span className="SubmitBtn" style={{borderRadius:"10px"}}>
                      FilterData
                    </span>   
                    <span className="mx-3 mt-2"> <Badge bg="dark">{status}</Badge></span>
                    <span className="mx-1 mt-2"> <Badge bg="dark">{prospectstatus}</Badge></span>
                 </div>
                </th>
                <th colSpan={2} className="bordhide">
                </th>
                <th colSpan={2} className="sarchboxInput bordhide">
                <div>
                    <form>
                      <div className="d-flex justify-content-center align-items-center">
                        <input
                          type="search"
                          placeholder="Search"
                          className="form-control mx-2 searchbox"
                          aria-label="Search"
                          onChange={(e)=>searchItemsText(e.target.value)}
                          style={{ verticalAlign: "none", padding: "5px 5px" }}
                        />
                      </div>
                    </form>
                  </div>
                </th>
              </tr>
              <tr>
                <th rowSpan={2}>Sr. No</th>
                <th>Prospect Name</th>
                <th>
                  Call Type
                  <i className="fa fa-outgoing-call"></i>
                </th>
                <th>Duration</th>
                <th>Date/Time</th>
                <th>
                Status
                  <FaFilter onClick={() => toggleShow(!show)} >{show ? 'hide' : 'show'}</FaFilter>
                    <form>
                    {!show && 
                    <div className="position-absolute" style={{fontSize:"12px"}}>
                    <select
                        id="order-sort"
                        onChange={(e) => FilterData(e.target.value)}
                      > 
                        <option value={"All"}>All</option>
                        <option value={"Answer"}>Answer</option>
                        <option value={"Rejected"}>Rejected</option>
                        <option value={"Notanswer"}>Notanswer</option>
                      </select>
                      </div>
                      }
                    </form>
                </th>
                <th>
                  Prospect Status
                  <FaFilter onClick={() => toggleShowpro(!showpro)} >{showpro ? 'hide' : 'show'}</FaFilter>
                    <form>
                    {!showpro &&  
                    <div className="position-absolute" style={{fontSize:"12px",width:"145px"}}>
                    <select
                        className=""
                        id="order-sort"
                        onChange={(e) => FilterDataPro(e.target.value)}
                      >
                        <option value={"All"}>All</option>
                        <option value={"Connected"}>Connected</option>
                        <option value={"Busy"}>Busy</option>
                        <option value={"Callback"}>Callback</option>
                        <option value={"DNCL"}>DNCL</option>
                      </select>
                      </div>
                    }
                    </form>
                </th>
                <th>Recording</th>
              </tr>
            </thead>
            <tbody
              className="calllogsTable"
              style={{
                backgroundImage:
                  "linear-gradient(to right top, #d46fd133, #b575d842, #937ad952, #717dd552, #4e7ecd4a)",
              }}
            >
              {/* Table lenght empty condition loader */}
              {CallLogsTable.length === 0 ? (
                     <div class="center">
                        <p>Data Not Found</p>
                     </div>
                    ) : <>
              {getPaginatedData().map((item) => {
                return (
                  <>
                    <tr>
                      <td className="fw-bold">{item.sr}</td>
                      <td>{item.prospect_name}</td>
                      <td>{item.type}</td>
                      <td>
                        <Badge pill bg="info">
                          {item.duration}
                        </Badge>
                      </td>
                      <td>{item.datetime}</td>
                      <td>
                        <span
                          className="badge bg-opacity-60 bg-lighten-xl"
                          style={{ backgroundColor: item.bgColor }}
                        >
                          {item.status}
                        </span>
                      </td>
                      <td>{item.prospectstatus}</td>
                      <td>
                        <span
                          className="font-weight-light px-2"
                          style={{ fontSize: "12px" }}
                        >
                          {item.recordingtime}
                        </span>
                        <button
                          type="button Submitbtn"
                          style={{
                            backgroundColor: "aliceblue",
                            borderRadius: "15px",
                          }}
                          onClick={() => setSmShow(true)}
                        >
                          <FaPlayCircle style={{ fontSize: "20px" }} />
                        </button>
                        <div>
                          <Modal className="opacity-modal-calllogs" centered
                            size="sm"
                            show={smShow}
                            onHide={() => setSmShow(false)}
                          >
                            <Modal.Header closeButton></Modal.Header>
                            <Modal.Body>
                              <audio controls className="audiocontrol">
                                <source
                                  src={KGF}
                                  type="audio/mpeg"
                                ></source>
                              </audio>
                            </Modal.Body>
                          </Modal>
                        </div>
                      </td>
                    </tr>
                  </>
                );
              })}
              </>}
            </tbody>
          </Table>
        </div>
        <div className="container tablepagerow" style={{marginTop: "-15px"}}>
          <div className="row mb-4" style={{backgroundColor:"aliceblue"}}>
            <div className="col-lg-6 col-md-6 col-sm-12">
                <div
                  className="dataTables_info d-flex"
                  id="DataTables_Table_0_info"
                  role="status"
                  aria-live="polite"
                >
                  Showing 1 to {postsPerPage} of {CallLogsTable.length} entries
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="Pagination-div">
                    {/* Pagination */}
                    {CallLogsTable.length < 10 ? (
                      <Pagination 
                      setCurrentPage={setCurrentPage}
                      dataLimit={dataLimit}
                      currentPage={currentPage}
                      pageLimit={pageLimit}
                      length={CallLogsTable.length}
                    />
                    ) : (
                      ""
                    )}
                  </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CallLogs;
