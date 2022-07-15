import { CircularProgress } from '@mui/material';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import routes from './routes';

function App() {
  return (
    <Suspense fallback={<CircularProgress color='primary' />}>
      <div>
        <Routes>
          {
            routes.map((route, idx) => ( 
              <Route path={route.path} element={route.element} key={idx} />
              ))
            }
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
