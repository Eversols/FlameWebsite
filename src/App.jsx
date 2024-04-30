import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./Layouts/Layout'));

const ModelLandingPage = lazy(() =>
  import('./Pages/LandingPages/LandingPageModel')
);
const UserLandingPage = lazy(() =>
  import('./Pages/LandingPages/LandingPageUser')
);
const Authenticate = lazy(() => import('./Pages/Authenticate'));
const Mood = lazy(() => import('./Pages/Mood'));
const Region = lazy(() => import('./Pages/Region'));
const Orientation = lazy(() => import('./Pages/Orientation'));
const Gender = lazy(() => import('./Pages/Gender'));
const Home = lazy(() => import('./Pages/Home'));
const Profile = lazy(() => import('./Pages/Profile'));
const Recharge = lazy(() => import('./Pages/Recharge'));
const Payment = lazy(() => import('./Pages/Payment'));
const Completion = lazy(() => import('./Pages/Payment/Completion'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLandingPage />} />
      <Route path="/model" element={<ModelLandingPage />} />
      <Route path="/:role" element={<Layout />}>
        <Route path="authentication" element={<Authenticate />} />
        <Route path="forgetpassword" element={<Authenticate />} />
        <Route path="mood" element={<Mood />} />
        <Route path="region" element={<Region />} />
        <Route path="orientation" element={<Orientation />} />
        <Route path="gender" element={<Gender />} />
        <Route path="home" element={<Home />} />
        <Route path="profile/:id" element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="recharge" element={<Recharge />} />
        <Route path="payment/:planId" element={<Payment />} />
        <Route path="completion" element={<Completion />} />
      </Route>
    </Routes>
  );
}

export default App;
