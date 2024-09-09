import React from "react";
import Logo from "./logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/selectors/cartSelectors";

const Header = () => {
  const totalCarts = useSelector(selectCartItems);

  return (<>
    <header className="flex items-center justify-between py-6 border-b sticky top-0 bg-green-400 px-8">
      <Logo />
      
      <Link to={`/cart`}>
        <div className="relative">
          <span className="text-2xl text-white">
            <i className="fa-solid fa-cart-shopping"></i>
          </span>
          {totalCarts.length !== 0 && (
            <span
              className="absolute right-0 -top-4 bg-green-900 min-w-7 h-7 
    flex items-center justify-center rounded-full text-white -z-10"
            >
              {totalCarts.length}
            </span>
          )}
        </div>
      </Link>
      
    </header>
    

    </>
  );
};

export default Header;
