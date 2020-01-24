import Products from '~/pages/Products';
import Product from '~/pages/Product';
import Cart from '~/pages/Cart';
import Result from '~/pages/Result';
import Test from '~/pages/Test';
import Error404 from '~/components/errors/404';

const routes = [
    {
        name: 'products',
        to: '/products',
        component: Products,
        exact: true
    },
    {
        name: 'product',
        to: '/products/:id',
        component: Product,
        exact: true
    },
    {
        name: 'cart',
        to: '/cart',
        component: Cart,
        exact: true
    },
    {
        name: 'result',
        to: '/result',
        component: Result,
        exact: true
    },
    {
        name: 'test',
        to: '/test',
        component: Test,
        exact: true
    },
    {
        to: '**',
        component: Error404
    }
];

let routesMap = {};

routes.forEach(e => {
    if (e.hasOwnProperty('name')) {
        routesMap[e.name] = e.to;
    }
});

export default routes;
export {routesMap};
