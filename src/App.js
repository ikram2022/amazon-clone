import React,{  useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } 
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";




const promise = loadStripe("pk_test_51MG3hoGyVWpacVxdCJmd7XoqE19Ytb0G6yLgz01tO1zYQ1asdQu4M17VfB7rN873zENZAxKhMYeU8ixerrB4gOAp00F80SS8gC");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("User is >>>", authUser);

      if (authUser) {
        // The user just logged in/the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [])

  return (
    // BEM
//     <Router>
//     <div className="app">
//       <Switch>
//       <Route path="/orders">  
//         <Orders />
//         </Route>
//       <Route path="/login">  
//         <Login />
//         </Route>
//         <Route path="/checkout">  
//         <Header />
//         <Checkout />
//         </Route>
//         <Route path="/payment">  
//         <Header />
//         <Elements stripe={promise}>
//         <Payment />
//         <Elements />
//         </Route>
//         <Route path="/">  
//         <Header />
//         <Home />
//         </Route>
//       </Switch>
//     </div>
//   </Router>
//   );
// }

<Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
