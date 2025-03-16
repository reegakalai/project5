import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail'; // Ensure this path is correct
import { useState } from 'react';
import { ToastContainer } from 'react-toastify'; // Correct import
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';

function App() {
    const [cartItems, setCartItems] = useState([]);

    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <ToastContainer theme="dark" position='top-center' />
                    <Header cartItems={cartItems} />
                    
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/search" element={<Home />} />
                        <Route
                            path="/product/:id"
                            element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />}
                        />
                        <Route
                            path="/Cart"
                            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
                        />
                        
                    </Routes>
                   
                </div>
                
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;


redux, technicalround, virtual , domquerial ,  
       y square  company - full stack developers.  