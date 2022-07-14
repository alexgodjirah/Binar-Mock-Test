import React from 'react';

const LoginPage = React.lazy(() => import('../pages/LoginPage'));
const RegisterPage = React.lazy(() => import('../pages/RegisterPage'));

const Dashboard = React.lazy(() => import('../pages/Dashboard'));

const routes = [
    { path: '/', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/dashboard', element: <Dashboard /> }
];

export default routes;