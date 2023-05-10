import React from "react";
import styled from "styled-components";
import HeroTitle from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Searchbar } from "./SearchBar";

export const Navbar = () => {
  const links = [
    { to: "/", title: "Home", icon: "" },
    { to: "/favorite", title: "Favorite", icon: "" },
    { to: "/create", title: "Create Character", icon: "" },
    { to: "/about", title: "About Page", icon: "" },
  ];
  return (
    <Container>
      <div className="topbar">
        <picture>
          <img src={HeroTitle} alt="logo de rick and morty" />
        </picture>
        <nav className="navigation">
          <ul>
            {links.map(({ to, title }) => (
              <li key={title}>
                <Link to={to}>{title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="buttonbar">
        <Searchbar />
      </div>
    </Container>
  );
};

const Container = styled.header`
  width: 100vw;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .topbar {
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    picture {
      width: 300px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        cursor: pointer;
      }
    }
    .navigation {
      width: 600px;
      height: auto;
      ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        list-style: none;
        margin-right: 30px;
        li {
          font-size: 1.1rem;
          font-weight: 500;
          letter-spacing: 1px;
          a {
            display: block;
            text-decoration: none;
            color: rgb(32, 233, 5);
            transition: 0.5s;
            &:hover {
              padding: 5px 10px;
              border: 1px solid rgb(32, 233, 5);
              border-radius: 10px;
            }
          }
        }
      }
    }
  }
  .buttonbar {
    margin: 10px 0;
    border: 1px solid rgb(32, 233, 5);
    width: 1000px;
    height: 40px;
    border-radius: 35px;
  }
`;
