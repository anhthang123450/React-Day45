const config = {
    routes: {
        home: "/",

        products: "/products",
        productDetail: "/products/:id",

        contact: "/contact",
        introduce: "/introduce",

        register: "/register",
        register2: "/register2",
        login: "/login",
        login2: "/login2",

        profile: "/profile/:id",
        edit: "/profile/:id/edit",
        users: "/users",

        notFound: "*",
    },
};

export default config;
