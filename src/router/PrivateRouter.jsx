import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  // const user = true;

  const {user} = useSelector((state) => state.login)
  // const user = useSelector((state) => state.login.user)


  return user?.email && user?.password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
