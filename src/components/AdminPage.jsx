import SalesChart from "./SalesChart";
import Dashboard from "./Dashboard";
import Order from "./Order";
import Product from "./Product";
import { useLocation, Outlet } from "react-router-dom";
import { ADMIN_DASHBOARD } from "../paths";
import SideBar from "./SideBar";

const AdminPage = () => {
  const location = useLocation();
  console.log({ location });

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      {/* <!-- Wrapper --> */}
      <div className="flex h-screen relative">
        {/* <!-- Sidebar --> */}
        <SideBar />

        {/* <!-- Main Content --> */}

        <Outlet />
      </div>
    </div>
  );
};

export default AdminPage;
