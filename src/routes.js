import Home from './components/home'
import AboutUs from './components/about-us/aboutUs'
import Grid from './components/table/table';

const routes = [
    { path: '/', name: 'Home', Component: Home },
    { path: '/about', name: 'About Us', Component: AboutUs },
    { path: '/contact', name: 'Grid', Component: Grid },
]
export default routes;