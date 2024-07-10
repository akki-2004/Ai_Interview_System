import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Layout/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Instructions from './Components/Interviewe/Instructions'
import Login from './Components/Company/Login'
import Languages from './Components/Interviewe/Languages'
import HomeC from './Components/Company/HomeC'
import LangSelec from './Components/Company/LangSelec'
import CutSelec from './Components/Company/CutSelec'
import InterviweeLogin from './Components/Interviewe/LoginI'
import StartPage from './Components/Interviewe/StartPage'
import Dashboard from './Components/Interviewe/MainI'
import Additional from './Components/Company/Additional'
import Fourthpage from './Components/Company/Submitted'
import Result from './Components/Company/Result'


function App() {
  // const [count, setCount] = useState(0)?

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Header/>}/> */}
        <Route path="/company/main" element={<HomeC/>}/>
        <Route path="/company/cutoff" element={<CutSelec/>}/>
        <Route path="/company/languages" element={<LangSelec/>}/>
        <Route path="/company/login" element={<Login/>}/>
        <Route path="/company/additional" element={<Additional/>}/>
        <Route path="/company/submit" element={<Fourthpage/>}/>
        <Route path="/company/result" element={<Result/>}/>

        <Route path="/interviewe/languages" element={<Languages/>}/>
        <Route path="/interviewe/instructions" element={<Instructions/>}/>
        <Route path="/interviewe/login" element={<InterviweeLogin/>}/>
        <Route path="/interviewe/start" element={<StartPage/>}/>
        <Route path="/interviewe/main" element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
