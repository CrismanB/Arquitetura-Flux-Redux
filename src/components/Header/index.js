import React from "react";
import { Container, Cart } from "./styles";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "./../../assets/Logo.svg";
import { MdShoppingBasket } from "react-icons/md";

function Header({ cartQtd }) {
  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartQtd} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartQtd: state.cart.length
}))(Header);
