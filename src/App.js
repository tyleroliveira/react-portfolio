import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" element={<Home/>}>
        </Route>
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
