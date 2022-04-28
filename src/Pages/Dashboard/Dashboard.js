import React, { Suspense } from 'react'
import './Dashboard.css'
import { Tabs, Tab } from 'react-bootstrap'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { CampaignData } from '../../assets/Data/Data';

const Dashboard = () => {
    const Header = React.lazy(() => import('../../Components/Header'))
    const Footer = React.lazy(() => import('../../Components/Footer'))
    return (
        <Suspense fallback={<div className="loader1"><span></span><span></span><span></span></div>}>
            <Helmet>
                <title>Dialer | Campaign Details</title>
            </Helmet>
            <Header />
            {/* Campaign Details */}
            <div>
                <div className='camp-box container'>
                    {CampaignData.map((value) => {
                        return (
                            <div className='row' key={value.UserId}>
                                <div className='col-lg-5'>
                                    <div className="inner-content p-2">
                                        <h3 className='headText'>Campaign Information</h3>
                                        <div className='d-flex mb-2'><div className='detail-heading'>Campaign Name :</div><div>&nbsp;{value.CampaignName}</div></div>
                                        <div className='d-flex mb-2'><div className='detail-heading'>Campaign Type :</div><div>&nbsp;{value.CampaignType}</div></div>
                                        <div className='d-flex mb-2'><div className='detail-heading'>Dialer Mode :</div><div>&nbsp;{value.DialerMode}</div></div>
                                        <div className='d-flex mb-2'><div className='detail-heading'>Agent Mode :</div><div>&nbsp;{value.AgentMode}</div></div>
                                        <div className='py-3'>
                                            <Link to="/dialer" className='SubmitBtn me-5'>Desktop</Link>
                                            <Link to="" className='SubmitBtn'>Mobile</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-7'>
                                    <div className="inner-content p-2">
                                        <Tabs
                                            defaultActiveKey="Script"
                                            transition={false}
                                            id="noanim-tab-example">
                                            <Tab eventKey="Script" title="Script" className='p-3 Tabs-inner'>
                                                <div style={{ lineHeight: "30px" }}>
                                                    {value.Script.map((i, index) => {
                                                        return (
                                                            <div key={index}>
                                                                <b>{i.Question}</b>
                                                                <p>{i.Answer}</p>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </Tab>
                                            <Tab eventKey="Questions" title="Questions" className='p-3 Tabs-inner'>
                                                <div style={{ lineHeight: "30px", display: "grid" }}>
                                                    {value.Questions.map((item, i) => {
                                                        return (
                                                            <p key={i}><b>{item.Question}</b></p>
                                                        )
                                                    })}<br />
                                                </div>
                                            </Tab>
                                            <Tab eventKey="Consents" title="Consents" className='p-3 Tabs-inner' >
                                                <div style={{ lineHeight: "30px" }}>
                                                    {value.Concents.map((item, i) => {
                                                        return (
                                                            <div key={i}>
                                                                <b>{item.Instruction}</b>
                                                                <p>{item.Description}</p>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </Suspense>
    )
}
export default Dashboard