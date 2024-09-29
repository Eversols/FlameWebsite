import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const Layout = lazy(() => import('./Layouts/Layout'));
const Authenticate = lazy(() => import('./Pages/Authenticate'));
const Mood = lazy(() => import('./Pages/Mood'));
const Region = lazy(() => import('./Pages/Region'));
const Orientation = lazy(() => import('./Pages/Orientation'));
const Gender = lazy(() => import('./Pages/Gender'));
const Home = lazy(() => import('./Pages/Home'));
const Profile = lazy(() => import('./Pages/Profile'));
const Papyout = lazy(() => import('./Pages/Payout'));
const Recharge = lazy(() => import('./Pages/Recharge'));
const Payment = lazy(() => import('./Pages/Payment'));
const Completion = lazy(() => import('./Pages/Payment/Completion'));
const LandingPages = lazy(() => import('./Pages/LandingPages'));
const Dashboard = lazy(() => import('./Pages/Dashboard'));

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    fontFamily: 'Rubik, Helvetica, Arial, sans-serif', // Default font family
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontFamily: 'Inter, Helvetica, Arial, sans-serif',
    },
    body1: {
      fontFamily: 'Inter, Helvetica, Arial, sans-serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'Helvetica, Arial, sans-serif',
      textTransform: 'none', // Optional: to keep button text case as it is
      fontWeight: 400,
    },
  },
});

function App() {
  return (
    <Routes>
      {/* Apply theme only to the LandingPages route */}
      <Route
        path="/"
        element={
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <LandingPages />
          </ThemeProvider>
        }
      />
      {/* Other routes without theme */}
      <Route path='/partner' element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
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
        <Route path="payout" element={<Papyout />} />
        <Route path="recharge" element={<Recharge />} />
        <Route path="payment/:planId" element={<Payment />} />
        <Route path="completion" element={<Completion />} />
      </Route>
    </Routes>
  );
}

export default App;
