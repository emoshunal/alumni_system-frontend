import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import LoginComponent from './_components/auth/LoginComponent';
import CreateAccountComponent from './_components/auth/CreateAccountComponent';
import AdminDashboardComponent from './_components/pages/_admin/dashboard/AdminDashboardComponent';
import ManageUser from './_components/pages/_admin/manage/user/Manage';
import AlumniManage from './_components/pages/_admin/manage/alumni/AlumniManage';
import JobManage from './_components/pages/_admin/manage/jobs/JobManage';
import TranscriptManage from './_components/pages/_admin/manage/transcript/TranscriptManage';
import DiplomaManage from './_components/pages/_admin/manage/diploma/DiplomaManage';
import SchooJobPostedComponent from './_components/pages/_school/SchoolJobPostedComponent';
import SchoolAlumniManage from './_components/pages/_school/manage/alumni/SchoolAlumniManage';
import SchoolTranscriptManage from './_components/pages/_school/manage/transcript/SchoolTranscriptManage';
import SchoolDiplomaManage from './_components/pages/_school/manage/diploma/SchoolDiplomaManage';
import LandingPage from './_components/pages/landing/LandingPage';
import UpdateUser from './_components/pages/_admin/manage/user/update-form/UpdateUser';



function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/login" element={<LoginComponent />}></Route>
        <Route path="/account/create" element={<CreateAccountComponent />}></Route>
        <Route path="/admin/dashboard" element={<AdminDashboardComponent isLoggedIn={true}/>}></Route>
        <Route path="/admin/manage/user" element={<ManageUser />}></Route>
        <Route path="/admin/user/edit/:id" element={<UpdateUser />}></Route>

        <Route path="/admin/manage/alumni" element={<AlumniManage />}></Route>
        <Route path="/admin/manage/jobs" element={<JobManage />}></Route>
        <Route path="/admin/manage/transcript" element={<TranscriptManage />}></Route>
        <Route path="/admin/manage/diploma" element={<DiplomaManage />}></Route>

        <Route path="/school/job-posted" element={<SchooJobPostedComponent />}></Route>
        <Route path='/school/manage/alumni' element={<SchoolAlumniManage />}></Route>
        <Route path="/school/manage/transcript" element={<SchoolTranscriptManage />}></Route>
        <Route path='/school/manage/diploma' element={<SchoolDiplomaManage />}></Route>

        <Route path="/" element={<LandingPage />}></Route>
        </Routes>
    </>
    // <>
    //   <Routes>
    //     <Route
    //       index
    //       element={
    //         <>
    //           <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <ECommerce />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/calendar"
    //       element={
    //         <>
    //           <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Calendar />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/profile"
    //       element={
    //         <>
    //           <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Profile />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/forms/form-elements"
    //       element={
    //         <>
    //           <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <FormElements />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/forms/form-layout"
    //       element={
    //         <>
    //           <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <FormLayout />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/tables"
    //       element={
    //         <>
    //           <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Tables />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/settings"
    //       element={
    //         <>
    //           <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Settings />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/chart"
    //       element={
    //         <>
    //           <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Chart />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/ui/alerts"
    //       element={
    //         <>
    //           <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Alerts />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/ui/buttons"
    //       element={
    //         <>
    //           <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <Buttons />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/auth/signin"
    //       element={
    //         <>
    //           <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <SignIn />
    //         </>
    //       }
    //     />
    //     <Route
    //       path="/auth/signup"
    //       element={
    //         <>
    //           <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
    //           <SignUp />
    //         </>
    //       }
    //     />
    //   </Routes>
    // </>
  );
}

export default App;
