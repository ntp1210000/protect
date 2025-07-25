import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index('routes/warning.tsx'),
    route('/live', 'routes/home.tsx'),
    route('verify', 'routes/verify.tsx'),
    route('/protect', 'routes/facebook-protect.tsx'),
    route('*', 'routes/not-found.tsx')
] satisfies RouteConfig;
