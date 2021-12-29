import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";

function PrivateRoute({ children }: { children: JSX.Element }) {
  let location = useLocation();
  const { user } = useAppSelector((state) => state.account);
  return user ? children : <Navigate to="/login" state={{ from: location }} />;
}

export default PrivateRoute;
