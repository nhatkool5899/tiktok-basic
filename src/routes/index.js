import Following from "../pages/Following";
import Home from "../pages/Home";
import Upload from "../pages/Upload";
import Search from "../pages/Search";

// layouts
import { HeaderOnly } from "../components/Layout";

const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/search', component: Search, layout: null},
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}