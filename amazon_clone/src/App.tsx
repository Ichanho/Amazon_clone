import React, { useEffect } from 'react';
import Header from './Header';
import Home from "./Home"
import Login from './Login';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Basket from './Basket';
import { auth, onAuthStateChanged } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  "pk_test_51MGjdxF0Zm7qZpdous4FUJm86fh8vx48lrdmhYyBh5p7ZeCLWGNwd5lY5AqjlpWviiVcSfpFNfztjkpCMT8itK1400XVtmcV9f"
)

function App() {
  const [{ }, dispath] = useStateValue();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log(authUser);
      if (authUser) {
        dispath({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispath({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/basket" element={<Basket />} />

          <Route path="/payment" element={
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
