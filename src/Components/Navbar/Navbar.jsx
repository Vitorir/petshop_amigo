import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/melhor-amigo-logo.png";

function Navbar() {
  return (
    <>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img 
              className="logo"
              src={logo}
              width="75"
              height="150"
            />
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link to={"/"} class="navbar-item">
              Home
            </Link>

            <Link to={"/produtos"} class="navbar-item">
              Produtos
            </Link>

            <Link to={"/galeria"} class="navbar-item">
              Galeria
            </Link>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Mais</a>

              <div class="navbar-dropdown">
                <Link to={"/contato"} class="navbar-item">
                  Contato
                </Link>
                <a class="navbar-item">Sobre</a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link to={"/cadastro"} class="button is-primary">
                  <strong>Sign up</strong>
                </Link>
                <Link to={"/login"} class="button is-light">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
