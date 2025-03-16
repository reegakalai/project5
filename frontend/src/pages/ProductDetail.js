import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductDetails({ cartItems, setCartItems }) {
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const { id } = useParams();

    // Fetch product details from API
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/product/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data.product))
            .catch((err) => console.error("Error fetching product:", err));
    }, [id]);

    // Add product to the cart
    function addToCart() {
        const itemExists = cartItems.find((item) => item.product._id === product._id);
        if (!itemExists) {
            const newItem = { product, qty };
            setCartItems((prevState) => [...prevState, newItem]);
            toast.success("Item added to cart successfully!");
        } else {
            toast.info("Item already in the cart!");
        }
    }

    // Increase quantity
    function increaseQty() {
        if (product.stock > qty) {
            setQty((prevQty) => prevQty + 1);
        }
    }

    // Decrease quantity
    function decreaseQty() {
        if (qty > 1) {
            setQty((prevQty) => prevQty - 1);
        }
    }

    return product && (
        <div className="container container-fluid">
            <div className="row f-flex justify-content-around">
                <div className="col-12 col-lg-5 img-fluid" id="product_image">
                    <img src={product.images[0]?.image} alt={product.name} height="500" width="500" />
                </div>

                <div className="col-12 col-lg-5 mt-5">
                    <h3>{product.name}</h3>
                    <p id="product_id">Product # {product._id}</p>

                    <hr />

                    <div className="rating-outer">
                        <div
                            className="rating-inner"
                            style={{ width: `${(product.ratings / 5) * 100}%` }}
                        ></div>
                    </div>

                    <hr />

                    <p id="product_price">${product.price}</p>
                    <div className="stockCounter d-inline">
                        <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
                        <input
                            type="number"
                            className="form-control count d-inline"
                            value={qty}
                            readOnly
                        />
                        <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                    </div>

                    <button
                        type="button"
                        onClick={addToCart}
                        disabled={product.stock == 0}
                        id="cart_btn"
                        className="btn btn-primary d-inline ml-4"
                    >
                        Add to Cart
                    </button>

                    <hr />

                    <p>
                        Status:{" "}
                        <span
                            id="stock_status"
                            className={product.stock > 0 ? "text-success" : "text-danger"}
                        >
                            {product.stock > 0 ? "In stock" : "Out of stock"}
                        </span>
                    </p>

                    <hr />

                    <h4 className="mt-2">Description:</h4>
                    <p>{product.description}</p>
                    <hr />
                    <p id="product_seller mb-3">
                        Sold by: <strong>{product.seller}</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

