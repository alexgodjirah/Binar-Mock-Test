import React from 'react';

const LoginPage = React.lazy(() => import('../pages/LoginPage'))
const RegisterPage = React.lazy(() => import('../pages/RegisterPage'))

const routes = [
    { path: '/', element: <LoginPage /> },
    { path: '/register', element: <RegisterPage /> }
];

export default routes;