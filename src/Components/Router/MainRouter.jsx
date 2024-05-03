import React, { startTransition } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import UserProfile from "../UserDashboard/UserProfile";

const Detail = React.lazy(() => import("../UserDashboard/Detail"));
const AdminDashboard = React.lazy(() => import("../Admin/AdminDashboard"));
const UserList = React.lazy(() => import("../Admin/Userlist"));
const Profile = React.lazy(() => import("../Admin/Profile"));
const HotProduct = React.lazy(() => import("../Admin/HotProduct"));
const DashBoard = React.lazy(() =>
  import("../UserDashboard/Dashboard/DashBoard")
);
const Sorting = React.lazy(() => import("../UserDashboard/Dashboard/Sorting"));

// Layout Routes
const UserLayout = React.lazy(() => import("../layout/Userlayout"));
const AdminLayout = React.lazy(() => import("../layout/Adminlayout"));
const AuthLayout = React.lazy(() => import("../layout/AuthLayout"));

const PageNotFound = React.lazy(() => import("../UserDashboard/PageNotFound"));

// User-Dashboard
const Information = React.lazy(() => import("../UserDashboard/Information"));
const Blog = React.lazy(() => import("../UserDashboard/Blog"));

const AboutUs = React.lazy(() => import("../UserDashboard/AboutUs"));
const ContactUs = React.lazy(() => import("../UserDashboard/ContactUs"));
const Paymentmethod = React.lazy(() =>
  import("../UserDashboard/paymentmethod")
);
const SearchProduct = React.lazy(() =>
  import("../UserDashboard/Dashboard/SearchProduct")
);

// Authentication
const Login = React.lazy(() => import("../auth/Login"));
const Signup = React.lazy(() => import("../auth/Signup"));

// User inside Dashboard
// const HotProduct = React.lazy(() => import("../UserDashboard/Dashboard/HotProduct"));

export const MainRoute = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* User Routes */}
      <Route path="/user/profile" element={<UserProfile />} />

      {/* User Layout */}
      <Route path="/" element={<UserLayout />}>
        {/* <Route index element={<DashBoard />} /> */}
        <Route index element={<Information />} />
        <Route path="/blog" element={<Blog title="User - Information" />} />
        <Route path="/aboutus" element={<AboutUs title="User - About" />} />
        <Route path="/contact" element={<ContactUs title="User - Contact" />} />
        <Route path="/payment" element={<Paymentmethod title="Payment " />} />
        <Route
          path="searchproduct/:id"
          element={<SearchProduct title="SearchProduct " />}
        />
        <Route path="/sort" element={<Sorting />} />
      </Route>

      <Route path="/detail" element={<Detail title="Detail" />} />

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="hotproduct" element={<HotProduct />} />
        
      </Route>

      {/* Auth Routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      {/* Page Not Found */}
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const App = () => {
  return startTransition(() => <MainRoute />);
};

export default App;
