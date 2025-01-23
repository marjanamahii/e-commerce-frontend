import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import CategoryPage from "../pages/Categories/CategoryPage";
import Search from "../pages/Search/Search";
import ShopPage from "../pages/Shop/ShopPage";
import SingleProduct from "../pages/ProductDetails/SingleProduct";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Chatbot from "../components/Chatbot/Chatbot";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoutes from "./PrivateRoutes";
import UserDashMain from "../pages/Dashboard/User/UserDashMain";
import UserOrders from "../pages/Dashboard/User/UserOrders";
import PaymentSuccess from "../components/PaymentSuccess";
import OrderDetails from "../pages/Dashboard/User/OrderDetails";
import UserPayments from "../pages/Dashboard/User/UserPayments";
import UserReviews from "../pages/Dashboard/User/UserReviews";
import UserProfile from "../pages/Dashboard/User/UserProfile";
import AdminDashMain from "../pages/Dashboard/Admin/AdminDashMain";
import AddProduct from "../pages/Dashboard/Admin/AddProduct";
import ManageProduct from "../pages/Dashboard/Admin/ManageProduct";
import UpdateProduct from "../pages/Dashboard/Admin/UpdateProduct";
import ManageUser from "../pages/Dashboard/Admin/ManageUser";
import ManageOrders from "../pages/Dashboard/Admin/ManageOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/categories/:categoryName", element: <CategoryPage /> },
      { path: "/search", element: <Search /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/shop/:id", element: <SingleProduct /> },
      {
        path: "/success",
        element: <PaymentSuccess />,
      },
      {
        path: "/orders/:orderId",
        element: <OrderDetails />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/chatbot",
    element: <Chatbot />,
  },
  // Dashboard Starts
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      // user routes
      { path: "", element: <UserDashMain /> },
      { path: "orders", element: <UserOrders /> },
      { path: "payments", element: <UserPayments /> },
      { path: "profile", element: <UserProfile /> },
      { path: "reviews", element: <UserReviews /> },

      // admin routes (only accessible by admin)
      {
        path: "admin",
        element: (
          <PrivateRoutes role="admin">
            <AdminDashMain />
          </PrivateRoutes>
        ),
      },
      {
        path: "add-product",

        element: (
          <PrivateRoutes role="admin">
            <AddProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "manage-products",
        element: (
          <PrivateRoutes role="admin">
            <ManageProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "update-product/:id",
        element: (
          <PrivateRoutes role="admin">
            <UpdateProduct />
          </PrivateRoutes>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRoutes role="admin">
            <ManageUser />
          </PrivateRoutes>
        ),
      },
      {
        path: "manage-orders",
        element: (
          <PrivateRoutes role="admin">
            <ManageOrders />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
