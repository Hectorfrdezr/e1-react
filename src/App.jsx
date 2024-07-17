import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Paginas/Home';
import ProductList from './components/Paginas/ProductList';
import Registro from './components/Paginas/Registro';
import Layaot from './components/Paginas/Layaot';

function App() {
  
  return (
   <BrowserRouter>
   <Routes>
  //        <Route path='/' element={<Layaot/>}>
              <Route index element={<Home/>}/>
  //          <Route path='ProductList' element={<ProductList/>}/>
  //          <Route path='Registro' element={<Registro/>}/>
  //       </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
