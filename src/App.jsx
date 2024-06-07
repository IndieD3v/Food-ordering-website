import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'

import RestaurantPage from './pages/RestaurantPage';
import HomePage from './pages/HomePage';
import CartSheet from './components/CartSheet';

import CheckoutPage from './pages/CheckoutPage';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  const [cartItems, setCartItems] = useState([])
  const [cartOpen, setCartOpen] = useState(false)

  function addFoodToCart(cartItem) {
    setCartItems([...cartItems, cartItem])
  }

  const updateQuantity = (name, amount) => {
    setCartItems((prevCartItems) => {
      return prevCartItems
        .map((item) => {
          if (item.name === name) {
            const newQuantity = item.quantity + amount;
            return newQuantity < 1 ? null : { ...item, quantity: newQuantity };
          }
          return item;
        })
        .filter((item) => item !== null);
    });
  };

  useEffect(() => {
    fetch('/dummyRestaurantData.json')
      .then(response => response.json())
      .then(data => setRestaurants(data.restaurants));
  }, []);


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage restaurants={restaurants} />} />
        <Route path="/restaurants/:id" element={<RestaurantPage restaurants={restaurants} addFoodToCart={addFoodToCart} />} />
        <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} />} />
      </Routes>


      <CartSheet cartItems={cartItems} isCartOpen={cartOpen} cartTrigger={setCartOpen} updateCartItemTrigger={updateQuantity} />

      <header className="fixed top-0 w-full px-4 lg:px-6 h-14 flex items-center border-b border-b-red-500/50 shadow-lg shadow-red-500/5 bg-white">
        <button onClick={() => navigate(-1)}></button>
        <Link className="flex items-center justify-center" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-6 w-6"
          >
            <circle cx="12.5" cy="8.5" r="2.5"></circle>
            <path d="M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"></path>
            <path d="m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"></path>
          </svg>
          <span className="sr-only">Tasty Bites</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#menu">
            Menu
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#delivery">
            Delivery
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </a>

          <button onClick={() => setCartOpen(!cartOpen)} type="button" className="relative inline-flex items-center text-sm font-medium text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>

            <div className="absolute inline-flex items-center justify-center size-2 p-2 text-[10px] font-bold text-white bg-red-500 border-2 border-white rounded-full -top-[7px] -end-[15px] dark:border-gray-900">
              {cartItems ? `${cartItems.length}` : '11'}
            </div>
          </button>
        </nav>
      </header>

      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Menu</h3>
            <Link href="#" prefetch={false}>
              Appetizers
            </Link>
            <Link href="#" prefetch={false}>
              Main Dishes
            </Link>
            <Link href="#" prefetch={false}>
              Desserts
            </Link>
            <Link href="#" prefetch={false}>
              Drinks
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Offers</h3>
            <Link href="#" prefetch={false}>
              Promotions
            </Link>
            <Link href="#" prefetch={false}>
              Discounts
            </Link>
            <Link href="#" prefetch={false}>
              Loyalty Program
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Feedback
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App