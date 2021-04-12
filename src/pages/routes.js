import HomePage from './Home';
import AccountPage from './Account';
import AboutPage from './About';
import BookingPage from './Booking';
import ContactPage from './Contact';
import NotFoundPage from './NotFound';
import WhatWeOfferPage from './WhatWeOffer';
import ShopPage from './Shop';
import BlogListPage from './BlogList';
import ProductDetailPage from './ProductDetail';
import ViewCartPage from './ViewCart';
import CheckoutPage from './Checkout';
import SignUpPage from './SignUp';

const routes =  [
    {
        path: "/my-account/:accountTab?/:invoiceId?",
        exact: true,
        component: AccountPage
    },
    {
        path: "/about",
        exact: true,
        component: AboutPage
    },
    {
        path: "/booking",
        exact: true,
        component: BookingPage
    },
    {
        path: "/contact",
        exact: true,
        component: ContactPage
    },
    {
        path: "/not-found",
        exact: true,
        component: NotFoundPage
    },
    {
        path: "/what-we-offer",
        exact: true,
        component: WhatWeOfferPage
    },
    {
        path: "/shop/:prodCateAlias?",
        exact: true,
        component: ShopPage
    },
    {
        path: "/product-detail/:prodAlias",
        exact: true,
        component: ProductDetailPage
    },
    {
        path: "/blog-list",
        exact: true,
        component: BlogListPage
    },
    {
        path: "/view-cart",
        exact: true,
        component: ViewCartPage
    },
    {
        path: "/checkout",
        exact: true,
        component: CheckoutPage
    },
    {
        path: "/signup",
        exact: true,
        component: SignUpPage
    },
    {
        path: "/",
        exact: true,
        component: HomePage
    }
    
]

export default routes;