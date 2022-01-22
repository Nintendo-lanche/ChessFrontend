import React from "react";
import Avax from "./img/AvaxToken.png";
import Wallet from "../src/components/Wallet/Wallet";
import { useMoralis } from "react-moralis";
import Chains from "./components/Chains";
import { Link } from "react-router-dom";
const Navbar = ({ head, isSticky }) => {
  const { isAuthenticated } = useMoralis();
  return (
    <div
      className="wallFlex"
      style={
        isSticky
          ? {
              position: "fixed",
              top: "0",
              width: "100%",
              height: "15vh",
              paddingBottom: "1rem",

              backgroundColor: "rgba(25, 28, 32)",
              boxShadow: "0px 8px 15px black",
            }
          : {}
      }
    >
      <Link to="/">
        <div>
          <img alt="Avax" src={Avax} className="wallLogo" />
          <div className="wallHead" style={{ top: "0.5rem" }}>
            {head}
          </div>
        </div>
      </Link>
      <div className="flexNft">
        {isAuthenticated && <Chains />}
        <div className="imgFlex">
          <Wallet />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
