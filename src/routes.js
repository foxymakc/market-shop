import Shop from "./pages/Shop/Shop";
import NotFound from "./components/NotFound/NotFound";
import Basket from "./pages/Basket/Basket";
import HowMakeOrder from "./pages/HowMakeOrder/HowMakeOrder";
import PaymentMethods from "./pages/PaymentMethods/PaymentMethods";
import PurchaseReturns from "./pages/PurchaseReturns/PurchaseReturns";
import AboutUs from "./pages/AboutUs/AboutUs";
import Requisites from "./pages/Requisites/Requisites";
import OurContacts from "./pages/OurContacts/OurContacts";
import Category from "./pages/Category/Category";
import CurrentProductCard from "./components/CurrentProductCard/CurrentProductCard";

// export const authRoutes = [
//     {
//         path: "/admin",
//         Component: Admin
//     },
// ]

export const publicRoutes = [
  {
    path: "/",
    Component: <Shop />,
  },
  {
    path: "/basket",
    Component: <Basket />,
  },
  {
    path: "/how-make-order",
    Component: <HowMakeOrder />,
  },
  {
    path: "/payment-methods",
    Component: <PaymentMethods />,
  },
  {
    path: "/purchase-returns",
    Component: <PurchaseReturns />,
  },
  {
    path: "/about-us",
    Component: <AboutUs />,
  },
  {
    path: "/requisites",
    Component: <Requisites />,
  },
  {
    path: "/our-contacts",
    Component: <OurContacts />,
  },
  {
    // eslint-disable-next-line no-useless-concat
    path: "/category" + "/:id",
    Component: <Category />,
  },
  {
    // eslint-disable-next-line no-useless-concat
    path: "/category" + "/:id" + "/:search",
    Component: <Category />,
  },
  {
    // eslint-disable-next-line no-useless-concat
    path: "/product" + "/:id",
    Component: <CurrentProductCard />,
  },
  // {
  //     path: "/login",
  //     Component: <Shop/>
  // },
  // {
  //     path: "/registration",
  //     Component: Shop
  // },
  // {
  //     path: DEVICE_ROUTE + '/:id',
  //     Component: DevicePage
  // },
  {
    path: "*",
    Component: <NotFound />,
  },
];
