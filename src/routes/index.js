import config from "@/config";
import AdminLayout from "@/layouts/AdminLayout";
import NoFooterLayout from "@/layouts/NoFooterLayout";
import NoHeaderLayout from "@/layouts/NoHeaderLayout";
import NoLayout from "@/layouts/NoLayout";
import Edit from "@/pages/Edit";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Login2 from "@/pages/Login2";
import NotFound from "@/pages/NotFound";
import ProductDetail from "@/pages/ProductDetail";
import Products from "@/pages/Products";
import Profile from "@/pages/Profile";
import Register from "@/pages/Register";
import Register2 from "@/pages/Register2";
import User from "@/pages/User";

const routes = [
    {
        path: config.routes.home,
        component: Home,
        // DefaultLayout: undefined
    },
    {
        path: config.routes.products,
        component: Products,
        // protected: true,
        // AdminLayout
    },
    {
        path: config.routes.productDetail,
        component: ProductDetail,
        layout: NoLayout,
        // NoLayout: null
    },
    {
        path: config.routes.contact,
        component: NoHeaderLayout,
    },
    {
        path: config.routes.introduce,
        component: NoFooterLayout,
    },

    {
        path: config.routes.users,
        component: User,
        // protected: true,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.edit,
        component: Edit,
    },

    // Auth
    {
        path: config.routes.register,
        component: Register,
    },

    {
        path: config.routes.register2,
        component: Register2,
    },
    {
        path: config.routes.login,
        component: Login,
    },

    {
        path: config.routes.login2,
        component: Login2,
    },

    {
        path: config.routes.notFound,
        component: NotFound,
        // DefaultLayout: undefined
    },
];

export default routes;
