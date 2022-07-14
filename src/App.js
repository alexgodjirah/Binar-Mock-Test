import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import routes from './routes';

function App() {
  return (
    <div>
      <Routes>
        {
          routes.map((route, idx) => ( 
            <Route path={route.path} element={route.element} key={idx} />
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
