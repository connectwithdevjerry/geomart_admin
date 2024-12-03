import {
  AdminPage,
  ErrorPage,
  Dashboard,
  EditProduct,
  Order,
  Product,
  Payments,
  Customers,
  Sales,
  Reports,
  Settings,
} from "./components";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import {
  ADMIN_CUSTOMERS,
  ADMIN_DASHBOARD,
  ADMIN_HOME,
  ADMIN_ORDERS,
  ADMIN_PAYMENTS,
  ADMIN_PRODUCTS,
  ADMIN_REPORTS,
  ADMIN_SALES,
  ADMIN_SETTINGS,
} from "./paths";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ADMIN_HOME} element={<AdminPage />}>
        <Route index element={<Dashboard />} />
        <Route path={ADMIN_ORDERS} element={<Order />} />
        <Route path={ADMIN_PRODUCTS} element={<Product />} />
        <Route path={ADMIN_PAYMENTS} element={<Payments />} />
        <Route path={ADMIN_CUSTOMERS} element={<Customers />} />
        <Route path={ADMIN_SALES} element={<Sales />} />
        <Route path={ADMIN_REPORTS} element={<Reports />} />
        <Route path={ADMIN_SETTINGS} element={<Settings />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
