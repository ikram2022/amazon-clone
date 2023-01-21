// import React from "react"
// import "./Header.css";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
// import { Link } from "react-router-dom";
// import { useStateValue } from "./StateProvider";
// import { auth } from "./firebase";



// function Header() {
//   const [{ basket }, dispatch] = useStateValue();

//   const handleAuthentication = () => {
//     if (user) {
//       auth.signOut();
//     }
//   };

//   return (
//     <div className="header">
//       <div className="header__containerOne">
//           <Link to="/">
//           <img
//             className="header__logo"
//             src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
//             alt=""
//           />
//         </Link>
//         {/* <img className="header__logo" 
//         src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""
//         />
//      */}
//         <div className="header__search">
//           <input className="header__searchInput" />
//           <SearchIcon className="header__searchIcon" />    
//         </div>
//         </div>

//       <div className="header__containerTwo">
//         <div className="header__nav">
//         <Link to={!user && "/login"}>
//         {/* <Link to="/login"> */}
//         <div onClick={handleAuthentication} className="header__option">
//         {/* <div className="header__option"> */}
//             <span className="header__optionLineOne">
//                 Hello, {!user ? "Guest" : user.email}</span>
//             <span className="header__optionLineTwo">
//             {user ? "Sign Out" : "Sign In"}</span>    
//         </div>
//       </Link>


//         <div className="header__option">
//         <span className="header__optionLineOne">
//                 Returns</span>
//             <span className="header__optionLineTwo">
//                 & Orders</span>  
            
//         </div>

//         <div className="header__option">
//         <span className="header__optionLineOne">
//                 Your</span>
//             <span className="header__optionLineTwo">
//                 Prime</span>  
//         </div>

//         <Link to="/checkout">
//             <div className="header__optionBasket">
//               <ShoppingBasketIcon />
//               <span className="header__optionLineTwo header__basketCount">
//                 {basket?.length}</span>
//             </div>
//           </Link>
//        </div>
//     </div>
//     </div>
//   );
// }
import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="header__containerOne">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        <div className="header__search">
          <input className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
      </div>

      <div className="header__containerTwo">
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello, {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Return</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Header;


// import React from "react";
// import "./Header.css";
// import SearchIcon from "@mui/icons/Search";
// import ShoppingBasketIcon from "@mui/icons/ShoppingBasket";
// import { Link } from "react-router-dom";
// import { useStateValue } from "./StateProvider";
// import { auth } from "./firebase";

// function Header() {
//   const [{ basket, user }, dispatch] = useStateValue();

//   const handleAuthentication = () => {
//     if (user) {
//       auth.signOut();
//     }
//   };

//   return (
//     <div className="header">
//       <div className="header__containerOne">
//         <Link to="/">
//           <img
//             className="header__logo"
//             src="https://th.bing.com/th/id/OIP.A6SiUVkQleXyUomjAy5LsgHaF0?pid=ImgDet&rs=1"
//             alt=""
//           />
//         </Link>

//         <div className="header__search">
//           <input className="header__searchInput" />
//           <SearchIcon className="header__searchIcon" />
//         </div>
//       </div>

//       <div className="header__containerTwo">
//         <div className="header__nav">
//           <Link to={!user && "/login"}>
//             <div onClick={handleAuthentication} className="header__option">
//               <span className="header__optionLineOne">
//                 Hello, {!user ? "Guest" : user.email}
//               </span>
//               <span className="header__optionLineTwo">
//                 {user ? "Sign Out" : "Sign In"}
//               </span>
//             </div>
//           </Link>
//           <Link to="/orders">
//             <div className="header__option">
//               <span className="header__optionLineOne">Return</span>
//               <span className="header__optionLineTwo">& Orders</span>
//             </div>
//           </Link>
//           {/* <div className="header__option">
//             <span className="header__optionLineOne">Wedding</span>
//             <span className="header__optionLineTwo"></span>
//           </div> */}

//           <Link to="/checkout">
//             <div className="header__optionBasket">
//               <ShoppingBasketIcon />
//               <span className="header__optionLineTwo header__basketCount">
//                 {basket?.length}
//               </span>
//             </div>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
