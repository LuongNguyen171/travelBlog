import Home from '~/pages/Home';
import About from '~/pages/About';
import Travel from '~/pages/Travel';
import Blogs from '~/pages/Blogs';
import DetailBlog from '~/pages/DetailBlog';
import Shop from '~/pages/Shop';
import NotFound from '~/pages/NotFound';
import Contact from '~/pages/Contact';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/About', component: About },
    { path: '/blogs', component: Blogs },
    { path: '/blogs/:page', component: Blogs },
    { path: '/detailblog/:id', component: DetailBlog },
    { path: '/shop', component: Shop },
    { path: '/contact', component: Contact },
    { path: '/search', component: Search },
    { path: '/search/:key', component: Search },
    { path: '*', component: NotFound },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
