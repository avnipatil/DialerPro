import React, { Suspense } from 'react';
import './App.css';
import Dialer from './Pages/Dialer/Dialer'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App(data) {
  const auth = localStorage.getItem("token", JSON.stringify(data.token));
  const Login = React.lazy(() => import('./Pages/Login/Login'));
  const Dashboard = React.lazy(() => import('./Pages/Dashboard/Dashboard'))
  const VerifyEmail = React.lazy(() => import('./Pages/Login/VerifyEmail'));
  const Changepassword = React.lazy(() => import('./Pages/Login/Changepassword'));
  const CallLogs = React.lazy(() => import('./Pages/CallLogs/CallLogs'));
  return (
    <Suspense fallback={<div className="loader1"><span></span><span></span><span></span></div>}>
      <div className="App">
        <Router>
          <Routes>
            {
              auth ?
                <>
                  <Route path='/campaign-details' element={<Dashboard />}></Route>
                  <Route path='/verifyemail/*' element={<VerifyEmail />}></Route>
                  <Route path='/changepassword' element={<Changepassword />}></Route>
                  <Route path='/dialer' element={<Dialer />}></Route>
                  <Route path='/calllogs' element={<CallLogs />}></Route>
                  <Route path='/' element={<Login />}></Route>

                </>
                :
                <>
                  <Route path='/' element={<Login />}></Route>
                  <Route exact element={<Login />}></Route>
                  <Route exact path='*' element={<Login />}></Route>
                  <Route path='/login' element={<Login />}></Route>
                </>
            }
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;