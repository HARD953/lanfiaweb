import { Navigate, Outlet} from 'react-router-dom';


const ProtectedRoute = ({ isAllowed, redirectPath = '/sign_in', children,  }) => {

    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children ? children : <Outlet />;
  };

export default ProtectedRoute;