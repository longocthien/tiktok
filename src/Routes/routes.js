import config from '~/config';
// Public Routes
import Home from '~/pages/Home';

// Pages
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Explore from '~/pages/Explore';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/Components/Layout';
import Live from '~/pages/Profile';

// Public Routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.search,
        component: Search,
        layout: null,
    },
    {
        path: config.routes.explore,
        component: Explore,
    },
    {
        path: config.routes.live,
        component: Live,
    },
];

// Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
