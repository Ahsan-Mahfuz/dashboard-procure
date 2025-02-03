import { createBrowserRouter } from 'react-router-dom'

import Login from '../Pages/auth/Login'
import ForgetPassword from '../Pages/auth/ForgetPassword'
import ResetPassword from '../Pages/auth/ResetPassword'

import AdminRoute from '../ProtectedRoute/AdminRoute'
import Dashboard from '../Pages/layout/Dashboard'
import DashboardHome from '../Pages/dashboardHome/DashboardHome'
import ProUserRequests from '../Pages/proUserRequests/ProUserRequests'
import ProUserRequestDetails from '../Pages/proUserRequests/ProUserRequestDetails'
import CategoryManage from '../Pages/CategoryManage/CategoryManage'
import ProUserManage from '../Pages/proUserManage/ProUserManage'
import ProUserDetails from '../Pages/proUserManage/ProUserDetails'
import UserManagement from '../Pages/userManagement/UserManagement'
import UserDetails from '../Pages/userManagement/UserDetails'
import RatingApprove from '../Pages/ratingApprove/RatingApprove'
import AboutUs from '../Pages/aboutUs/AboutUs'
import ContactUs from '../Pages/contactUs/ContactUs'
import PrivacyPolicy from '../Pages/privacyPolicy/PrivacyPolicy'
import TermsAndConditions from '../Pages/termsAndConditions/TermsAndConditions'
import Profile from '../Pages/profile/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AdminRoute>
        <Dashboard />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: '/job-request',
        element: <ProUserRequests />,
      },
      {
        path: '/job-request/:id',
        element: <ProUserRequestDetails />,
      },
      {
        path: '/category-manage',
        element: <CategoryManage />,
      },
      {
        path: '/pro-user-manage',
        element: <ProUserManage />,
      },
      {
        path: '/pro-user-manage/:id',
        element: <ProUserDetails />,
      },
      {
        path: '/user-management',
        element: <UserManagement />,
      },
      {
        path: '/user-management/:id',
        element: <UserDetails />,
      },
      {
        path: '/rating-approve',
        element: <RatingApprove />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: '/terms-and-condition',
        element: <TermsAndConditions />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/forget-password',
    element: <ForgetPassword />,
  },
  {
    path: '/reset-password',
    element: <ResetPassword />,
  },
])
export default router
