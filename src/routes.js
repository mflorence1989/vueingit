import Home from './components/Home.vue';
import Header from './components/Header.vue';
import Portfolio from './components/Portfolio.vue';
import Experience from './components/Experience.vue';
const About = resolve => {
    require.ensure(['./components/about/About.vue'], () => {
        resolve(require('./components/about/About.vue'));
    }, 'about');
};

export const routes = [
    {
        path: '', name: 'home', components: {
        default: Home,
        'header-top': Header
    }
    },
    {
        path: '/about', components: {
        default: About
    }
    },
    {
        path: '/portfolio', name:'portfolio',components: {
        default: Portfolio
    }
    },
    {
        path: '/experience', components: {
        default: Experience
    }
    },
    {path: '/redirect-me', redirect: {name: 'home'}},
    {path: '*', redirect: '/'}
];
