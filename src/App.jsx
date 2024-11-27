import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './components/product/product';
import FullPage from './pages/full/fullPage.jsx'
import ProductPage from './pages/product/productPage.jsx'

function App() {
  return (
    <BrowserRouter>
    
                                                  

      
      <Routes>
        <Route path='/' element={<FullPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
