import React, { useState } from 'react'
import './Dialer.css'
import { Tabs, Tab, TabContent, ModalFooter,Carousel, Modal, Table  } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Helmet from 'react-helmet'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { useForm } from 'react-hook-form'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { IoMdAdd } from 'react-icons/io'
import DialPad from './DialPad'
import Disposition from './Disposition'
const Dialer = () => {
  // State for Prospect model step 1
  const [show, setShow] = useState(false);
  // function for Prospect model step 1
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // State for Prospect model step 2
  const [show2, setShow2] = useState(false);
  // function for Prospect model step 2
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const SaveTonext = () => {
    if (!setdata.length === '') {
      handleShow2(true);
    }
    else {
      handleShow2(false)
    }
  }
  // Country Phone Input State
  const [formResult, setFormResult] = useState("");
  
  const [updateno,setUpdateno] = useState();//State for set Updated Phone when enabled
  // start Phone No Enabled Disabled states
  const [ansnocheck, setAnsNocheck] = useState();
  console.log(ansnocheck)
  const [setnodisable, setNodisable] = useState(true);
  const PhoneCheck = () => {
    if (ansnocheck === 'no') {
      setNodisable(true)
    } else{
      setNodisable(false)
    }
  }
  // End Phone Enabled Disabled
  //start First name Enabled Disabled states
  const [checkincorectfname, setCheckincorrectfname] = useState();
  const [setfirstinput, setFirstinput] = useState(true);
  const Firstname = () => {
    if (checkincorectfname === 'no') {
      setFirstinput(true)
    } else{
      setFirstinput(false);
    }
  }
  // End First Name Enabled disbled

  // start Last name Enabled Disabled states
  const [checkincorectlname, setCheckincorrectlname] = useState();
  const [setlastinput, setLastinput] = useState(true);
  const Lastname = () => {
    if (checkincorectlname === 'no') {
      setLastinput(true);
    } else{
      setLastinput(false);
    }
  }
  // start Last name Enabled Disabled states

  // start Email Enabled Disabled states
  const [checkincorectemail, setCheckincorrectemail] = useState();
  const [setmyemail, setmyEmail] = useState(true);
  const EmailCheck = () => {
    if (checkincorectemail === 'no') {
      setmyEmail(true)
    } else{
      setmyEmail(false)
    }
  }
  // End Email Enabled Disabled states

  // start Designation Enabled Disabled states
  const [checkincorectdesignation, setCheckincorrectdesignation] = useState();
  const [setdesignation, setDesignation] = useState(true);
  const Designtioncheck = () => {
    if (checkincorectdesignation === 'no') {
      setDesignation(true)
    } else{
      setDesignation(false)
    }
  }
  // End Designation Enabled Disabled state
  // Use the UseForm HandleSbmit declartion
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [setdata, setData] = useState({});
  const onSubmit = (data) => {
    setData(data)
    SaveTonext(); 
    handleClose();
    reset();
  }
  const prospect_arr = []  //create array variable
  prospect_arr.push(setdata.number,setdata.first_name,setdata.last_name,setdata.prospemail,setdata.prospdesi)
  console.log(prospect_arr);
  return (
    <>
      <Helmet>
        <title>Dialer | Generate Lead</title>
      </Helmet>
      <Header />
      <div className='container' style={{ marginTop: '75px' }}>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <DialPad  DiledNumber={setdata.number}/>
            {/* Dialer Status */}
            <div className='CallHis-Layout'>
              <h5 className='campg_dethead mb-0' style={{ textAlign: 'start' }}>Dialer Status</h5>
              <div>
                <p className='mb-0'>Speaker Frequency :</p>
                <div className='frequency'></div>
              </div>
              <div>
                <p className='mb-0'>Mic Frequency:</p>
                <div className='frequency'></div>
              </div>
            </div>
            {/* Call History */}
            <div className='CallHis-Layout'>
              <h5 className='campg_dethead' style={{ textAlign: 'start' }}>Call History</h5>
            </div>
          </div >
          {/*  form Start */}
          <div className='col-lg-9 col-md-6 col-sm-12  dialer_tabcontent'>
            <div className='row FormLayout'>
              <div className='col-lg-8'>
                {/* Compagain Details Box start Here */}
                <div className='dieler_detbox p-3'>
                  <h5 className='campg_dethead' style={{ textAlign: 'justify' }}>Campaign Details</h5>
                  <div className='row '>
                    <div className='col-lg-6 col-md-12 col-sm-12 campbox_Cols'>
                      <div className='row'>
                        <div className='col-lg-8'>
                          <h6 className='campg_dethead mb-1'>Campaign Name:</h6>
                        </div>
                        <div className='col-lg-4'>
                          <p className='mb-1'>XYZ</p>
                        </div>
                        <div className='col-lg-8'>
                          <h6 className='campg_dethead mb-1'>Campaign City:</h6>
                        </div>
                        <div className='col-lg-4'>
                          <p className='mb-1'>Pune</p>
                        </div>
                        <div className='col-lg-8'>
                          <h6 className='campg_dethead mb-1'>Campaign Agent:</h6>
                        </div>
                        <div className='col-lg-4'>
                          <p className='mb-1'>Ram</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 campbox_Cols'>
                      <div className='row'>
                        <div className='col-lg-8'>
                          <h6 className='campg_dethead mb-1'>Campaign ID:</h6>
                        </div>
                        <div className='col-lg-4'>
                          <p className='mb-1'>097tr4</p>
                        </div>
                        <div className='col-lg-8'>
                          <h6 className='campg_dethead mb-1'>Campaign Location:</h6>
                        </div>
                        <div className='col-lg-4'>
                          <p className='mb-1'>Kharadi</p>
                        </div>
                        <div className='col-lg-8'>
                          <h6 className='campg_dethead mb-1'>Agent Name:</h6>
                        </div>
                        <div className='col-lg-4'>
                          <p className='mb-1'>Shyam</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Prospect  Details Box start Here */}
                <div className='dieler_detbox p-3' style={{ border: "none" }}>
                  {/* Create propect model button */}
                  <div className='d-flex create_prosbtn'>
                    <h5 className='campg_dethead' >Prospect Details</h5>
                    <button className='campg_dethead ' onClick={handleShow} style={{ border: 'none', backgroundColor: '#fff', borderBottom: '1px solid darkblue' }} ><IoMdAdd />Create prospect</button>
                  </div>
                  <div className='row mt-2'>
                    <div className='col-lg-6 col-md-12 col-sm-12 campbox_Cols'>
                      <div className='row'>
                        <div className='col-lg-5'>
                          <h6 className='campg_dethead mb-0 mt-1'>Number:</h6>
                        </div>
                        <div className='col-lg-6'>
                          <input type="text" value={setnodisable ? setdata.number:updateno} name="pro_number" className='proform_bordernone mx-1'
                            disabled={setnodisable} style={{ borderBottom: setnodisable === false ? "1px solid darkblue" : "none"}}
                            onChange={(e)=>setUpdateno(e.target.value)} />
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-lg-5'>
                          <h6 className='campg_dethead mb-0'>FirstName:</h6>
                        </div>
                        <div className='col-lg-7'>
                          <input type="text" value={setdata.first_name} className='proform_bordernone'
                            disabled={setfirstinput} style={{ borderBottom: setfirstinput === false ? "1px solid darkblue" : "none" }} />
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-lg-5'>
                          <h6 className='campg_dethead mb-0'>LastName:</h6>
                        </div>
                        <div className='col-lg-7'>
                          <input type="text" value={setdata.last_name} className='proform_bordernone'
                            disabled={setlastinput} style={{ borderBottom: setlastinput === false ? "1px solid darkblue" : "none" }} />
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 campbox_Cols'>
                      <div className='row'>
                        <div className='col-lg-5'>
                          <h6 className='campg_dethead mb-1'>Email:</h6>
                        </div>
                        <div className='col-lg-7'>
                          <input type="email" value={setdata.prospemail} className='proform_bordernone'
                            disabled={setmyemail} style={{ borderBottom: setmyemail === false ? "1px solid darkblue" : "none" }} />
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-lg-5'>
                          <h6 className='campg_dethead mb-0'>Designation:</h6>
                        </div>
                        <div className='col-lg-7'>
                          <input type="text" value={setdata.prospdesi} className='proform_bordernone'
                            disabled={setdesignation} style={{ borderBottom: setdesignation === false ? "1px solid darkblue" : "none" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Disposition & Dialer Status */}
              <div className='col-lg-4 d-flex justify-content-center align-items-center'>
                 <Disposition/>
              </div>
            </div>
            {/* step 1 Model of Create Prospect*/}
            <Modal show={show} centered >
              <Modal.Header closeButton onHide={handleClose}>
                <Modal.Title className='campg_dethead'>Create Prospect</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <div className='my-3'>
                    <PhoneInput
                      className='form-control'
                      placeholder="Phone number"
                      value={formResult}
                      inputProps={{
                        name: "result",
                        required: true,
                        autoFocus: true,
                    }}
                      {...register("number", {type:"text"})} />
                  </div>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="text"
                      placeholder="First Name *"
                      {...register("first_name", { required: true, maxLength: 30 })}
                    />
                    <span className='FormError'>
                      {errors.first_name && errors.first_name.type === "required" && <span>This is required</span>}
                      {errors.first_name && errors.first_name.type === "maxLength" && <span>Max length exceeded</span>}
                    </span>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="text"
                      placeholder="Last Name *"
                      {...register("last_name", { required: true, maxLength: 30 })}
                    />
                    <span className='FormError'>
                      {errors.last_name && errors.last_name.type === "required" && <span>This is required</span>}
                      {errors.last_name && errors.last_name.type === "maxLength" && <span>Max length exceeded</span>}
                    </span>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="email"
                      placeholder="Prospect Email"
                      {...register("prospemail", {pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "invalid email address"}}  )} />
                      <span className='FormError'>
                      {errors.prospemail && <span>Please Enter Correct Email</span>}
                    </span>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control
                      type="text"
                      placeholder="Prospect Designation *" {...register("prospdesi", { required: true, maxLength: 30 })} />
                    <span className='FormError'>
                      {errors.prospdesi && errors.prospdesi.type === "required" && <span>This is required</span>}
                    </span>
                  </Form.Group>
                  <ModalFooter>
                    <button type='submit' className='SubmitBtn' >Save Prospect</button>
                  </ModalFooter>
                </Form>
              </Modal.Body>
            </Modal>
            {/* step 1 Model End */}
            {/*step 2 Model of Create Prospect  */}
            <Modal show={show2}
              size="lg"
              centered
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title">
              <Modal.Header closeButton onHide={handleClose2}>
                <Modal.Title id="example-custom-modal-styling-title" className='campg_dethead'>Details of  Prospect</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {/* Dialer code Here */}
                <div className='row'>
                  <div className='col-lg-3'>
                    {/* model Dialpad*/}
                    <DialPad DiledNumber={setdata.number}/>
                  </div>
                  <div className='col-lg-9'>
                    <div className='row'>
                      <div className='col-lg-9'>
                        {/* model Table start */}
                        <Table bordered hover responsive>
                          <thead>
                            <tr className='tbl_modelrow'>
                              <th className='campg_dethead'>Prospect No</th>
                              <th className='campg_dethead'>First Name</th>
                              <th className='campg_dethead'>Last Name</th>
                              <th className='campg_dethead'>Email</th>
                              <th className='campg_dethead'>Prospect Designation</th>
                            </tr>
                          </thead>
                          <tbody>
                            <>
                              <tr>
                                <td>{setdata.number}</td>
                                <td>{setdata.first_name}</td>
                                <td>{setdata.last_name}</td>
                                <td>{setdata.prospemail}</td>
                                <td>{setdata.prospdesi}</td>
                              </tr>
                            </>
                          </tbody>
                        </Table>
                        {/* model Table End */}
                      </div>
                      <div className='col-lg-3'>
                        {/* model disposition */}
                            <Disposition/>                  
                        {/* model disposition End */}
                      </div>
                    </div>
                  </div>
                </div>
                <ModalFooter>
                </ModalFooter>
              </Modal.Body>
            </Modal>
            {/* Step 2 model End */}
            {/* Tabs Stat Here  */}
            <div className='row mt-4 mb-5'>
              <div className='col-lg-12'>
                <Tabs
                  defaultActiveKey="Script"
                  transition={true}
                  id="noanim-tab-example"
                  className=""
                > <Tab eventKey="Script" title="Script" className='tab_contentbox '>
                    <TabContent className='txttabs  p-3'>
                      <h6 className='campg_dethead'>1.Hello, this is Jess from the Virtual Sales Academy. How are you?</h6>
                      <p>We're working on some solutions to help you recruit and train a new generation of salespeople.</p>
                      <h6 className='campg_dethead'>2.Genny Is that something you'd like to hear more about?</h6>
                      <p>There are two ways companies work with us.<br /> We can either help them find salespeople for a percentage of the base salary.</p>
                      <h6 className='campg_dethead'>3.Which one would you want to hear most about?</h6>
                      <p>(I ask them qualifying questions so I know what to present.)</p>
                    </TabContent>
                  </Tab>
                  <Tab eventKey="Questions" title="Questions" className='tab_contentbox'>
                    <TabContent className='txttabs p-3'>
                      <Carousel
                        interval={8000}>
                        <Carousel.Item style={{ textAlign: 'center' }}>
                          <Form>
                            <div className=''>
                              <h6 className='campg_dethead'>1. Are You IT Manager</h6>
                              <input className='mt-2' type="radio" value="yes" name="Answer" />
                              <label className='mx-2'>Yes</label>
                            </div>
                            <div className=''>
                              <input className='mt-2' type="radio" value="no" name="Answer" />
                              <label className='mx-2'>No</label>
                            </div>
                          </Form>
                        </Carousel.Item>
                        <Carousel.Item style={{ textAlign: 'center' }}>
                          <Form>
                            <div className=''>
                              <h6 className='campg_dethead'>2. Who are You Trying to Reach?</h6>
                              <input className='mt-2' type="radio" value="yes" name="Answer" />
                              <label className='mx-2'>who forget history are doomed to repeat it.</label>
                            </div>
                            <div className=''>
                              <input className='mt-2' type="radio" value="no" name="Answer" />
                              <label className='mx-2'>you don't have the infrastructure to support your customers</label>
                            </div>
                          </Form>
                        </Carousel.Item>
                      </Carousel>
                    </TabContent>
                  </Tab>
                  <Tab eventKey="Consents" title="Consents" className='tab_contentbox' style={{ textAlign: 'center' }}>
                    <TabContent className='txttabs p-3'>
                      <h6 className='campg_dethead'>Are you Intersted to Contineu with Us?</h6>
                      <Form>
                        <div className=''>
                          <input className='mt-2' type="radio" value="yes" name="Answer" />
                          <label className='mx-2'>Yes</label>
                          <input className='mt-2' type="radio" value="no" name="Answer" />
                          <label className='mx-2'>No</label>
                        </div>
                      </Form>
                    </TabContent>
                  </Tab>
                  <Tab eventKey="Notes" title="Notes" className='tab_contentbox'>
                    <TabContent className='txttabs p-3'>
                      <Form>
                        <div className="form-group shadow-textarea">
                          <textarea className="form-control z-depth-1" id="exampleFormControlTextarea6" rows="2" placeholder="Write something here..."></textarea>
                        </div>
                        <button className='SubmitBtn me-5 mt-4'>Submit</button>
                      </Form>
                    </TabContent>
                  </Tab>
                  {/* Data check Tab Here */}
                  <Tab eventKey="Data Check" title="Data Check" className='tab_contentbox'>
                    <TabContent className='txttabs p-3'>
                      <div className='row'>
                        <div className='col-lg-3 resdiv_hide'></div>
                        <div className='col-lg-6'>
                          <div className=''>
                            <div className='row'>
                              <div className='col-lg-5'>
                                <h6 className='campg_dethead me-3'>1.Number</h6>
                              </div>
                              <div className='col-lg-6'>
                                <input className='mt-2' type="radio" value="yes" name='phoneAnswered' onClick={PhoneCheck} onChange={(e) => setAnsNocheck(e.target.value)} />
                                <label className='mx-2'>Correct</label>
                                <input className='mt-2' type="radio" value="no" name='phoneAnswered' onClick={PhoneCheck} onChange={(e) => setAnsNocheck(e.target.value)} />
                                <label className='mx-2'>Incorrect</label>
                              </div>
                            </div>
                            <div className='row'>
                              <div className='col-lg-5'>
                                <h6 className='campg_dethead me-3'>2.First Name</h6>
                              </div>
                              <div className='col-lg-6'>
                                <input className='mt-2' type="radio" value="yes" name='firstnameAnswered' onClick={Firstname} onChange={(e) => setCheckincorrectfname(e.target.value)} />
                                <label className='mx-2'>Correct</label>
                                <input className='mt-2' type="radio" value="no" name='firstnameAnswered' onClick={Firstname} onChange={(e) => setCheckincorrectfname(e.target.value)} />
                                <label className='mx-2'>Incorrect</label>
                              </div>
                            </div>
                            <div className='row'>
                              <div className='col-lg-5'>
                                <h6 className='campg_dethead me-3'>3.Last Name</h6>
                              </div>
                              <div className='col-lg-6'>
                                <input className='mt-2' type="radio" value="yes" name='lastnameAnswered' onClick={Lastname} onChange={(e) => { setCheckincorrectlname(e.target.value) }} />
                                <label className='mx-2'>Correct</label>
                                <input className='mt-2' type="radio" value="no" name='lastnameAnswered' onClick={Lastname} onChange={(e) => { setCheckincorrectlname(e.target.value) }} />
                                <label className='mx-2'>Incorrect</label>
                              </div>
                            </div>
                            <div className='row'>
                              <div className='col-lg-5'>
                                <h6 className='campg_dethead me-3'>4.Email</h6>
                              </div>
                              <div className='col-lg-6'>
                                <input className='mt-2' type="radio" value="yes" name='emailAnswered' onClick={EmailCheck} onChange={(e) => { setCheckincorrectemail(e.target.value) }} />
                                <label className='mx-2'>Correct</label>
                                <input className='mt-2' type="radio" value="no" name='emailAnswered' onClick={EmailCheck} onChange={(e) => { setCheckincorrectemail(e.target.value) }} />
                                <label className='mx-2'>Incorrect</label>
                              </div>
                            </div>
                            <div className='row'>
                              <div className='col-lg-5'>
                                <h6 className='campg_dethead me-3'>5.Designation</h6>
                              </div>
                              <div className='col-lg-6'>
                                <input className='mt-2' type="radio" value="yes" name='designation' onClick={Designtioncheck} onChange={(e) => { setCheckincorrectdesignation(e.target.value) }} />
                                <label className='mx-2'>Correct</label>
                                <input className='mt-2' type="radio" value="no" name='designation' onClick={Designtioncheck} onChange={(e) => { setCheckincorrectdesignation(e.target.value) }} />
                                <label className='mx-2'>Incorrect</label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-lg-3 resdiv_hide'></div>
                      </div>
                    </TabContent>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div >
      </div >
      <Footer />
    </>
  )
}
export default Dialer