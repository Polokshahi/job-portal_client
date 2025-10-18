import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Page/Home/Home";
import Register from "../Page/Register/Register";
import SignIn from "../Page/SignIn/SignIn";
import JobDetails from "../Page/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../Page/JobApply/JobApply";
import MyApplication from "../Page/MyApplication/MyApplication";
import AddJob from "../Page/AddJob/AddJob";
import MyPostedJobs from "../Page/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../Page/ViewApplications/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
        {
            path: "/",
            element: <Home></Home>,

           
        },

         {  
                path: "register",
                element: <Register></Register>,
        },

        {

          path: "jobs/:id",
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)

        },

        {

          path: "jobApply/:id",
          element: <JobApply></JobApply>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)

        },


        {
            path: "login",
            element: <SignIn></SignIn>
        },


        {
          path: '/myApplications',
          element: <PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },

        {
          path: '/addJob',
          element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },

        {
          path: '/myPostedJobs',
          element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
        },

        {
          path: '/viewApplications/:jobId',
          element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/job-application/jobs/${params.jobId}`)
        }
















    ]
  },
]);

export default router;