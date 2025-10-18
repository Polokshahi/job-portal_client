import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { form } from "motion/react-client";

const PrivateRoute = ({children}) => {
      const {user, Loading} = useContext(AuthContext);
      const location = useLocation();
      if(Loading){
            return <span className="loading loading-spinner loading-md"></span>
      }
      if(user){
            return children;
      }

      return <Navigate to={'/login'} state={location?.pathname}></Navigate>

       
    
};

export default PrivateRoute;