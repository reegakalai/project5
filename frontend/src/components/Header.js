import React from 'react';
import Search from './Search'; // Ensure Search component is properly imported
import {Link} from 'react-router-dom';
export default function Header({ cartItems }) {
    return (
        
        <nav className="navbar row">
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                <Link to="/"><img width="150px" src="/images/logo.png" alt="Logo" /></Link>
                    
                </div>
            </div>

            <Search />


            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <Link to={"/Cart"}>
                <span id="cart" className="ml-3">Cart</span>
                <span className="ml-1" id="cart_count">{cartItems.length}</span>
                </Link>
                
            </div>
        </nav>
    );
}
