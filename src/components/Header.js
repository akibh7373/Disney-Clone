import React from 'react';
import styled from 'styled-components';

function Header() {
  // const navItem = ['home', 'search', 'watchlist', 'originals', 'movies', 'series'];
  // const imageItem = ['home-icon.svg', 'search-icon.svg', 'watchlist', 'originals', 'movies', 'series'];

  return (
    <Nav>
        <a href='/'><Logo src="./images/logo.svg" /></a>
        <NavMenu>
          <a href="/">
            <img src="/images/home-icon.svg" />
            <span>home</span>
          </a>
          <a>
            <img src="/images/search-icon.svg" />
            <span>search</span>
          </a>
          <a>
            <img src="/images/watchlist-icon.svg" />
            <span>watchlist</span>
          </a>
          <a>
            <img src="/images/original-icon.svg" />
            <span>originals</span>
          </a>
          <a>
            <img src="/images/movie-icon.svg" />
            <span>movies</span>
          </a>
          <a>
            <img src="/images/series-icon.svg" />
            <span>series</span>
          </a>
        </NavMenu>
        <UserImg src="https://scontent.fjsr6-1.fna.fbcdn.net/v/t39.30808-6/317074677_1553207108458730_7256221091778291635_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG84tw_IYKBp_FJsxVXAInBXAmtV6r9Yl5cCa1Xqv1iXgt-cemMKxafRmzI-JLa23jVcD0QNqeMnxdBF9g1-B4F&_nc_ohc=icu8r2FYf70AX-1DRHb&_nc_ht=scontent.fjsr6-1.fna&oh=00_AfC_hDRBQd4B64K4A1VjIvwWMdfMY79WQGRUb_EGuywIMQ&oe=6428E4BB" />
    </Nav>
  )
}

export default Header;

const Nav = styled.div`
  padding: 0 36px;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Logo = styled.img`
    width: 80px;
`
const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 0 12px;
    cursor: pointer
    img {
      height: 20px;
    }
    span {
      position: relative;
      margin-left: 2px;
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 1.43px;
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: white;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img `
  height: 45px;
  width: 45px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
`