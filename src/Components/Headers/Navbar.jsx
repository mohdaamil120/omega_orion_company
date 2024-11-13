import React from 'react'
import styled from 'styled-components'
import ProfileImg from "../../assets/user_img.jpg"
import LogoIcon from '../../SvgIcons/LogoIcon'
import SearchIcon from '../../SvgIcons/SearchIcon'


const Navbar = () => {
  return (
    <DIV>
    <div className='navbar'>
        <nav className='navoptions'>
            <div className='logo'>
             <HOVER>
               <LogoIcon />
             </HOVER>
              <ul>
                  <li>Explore</li>
                  <li>FAQ's</li>
                  <li>Pricing</li>
              </ul>
            </div>
            <div className='search__icon'>
            <HOVER>
              <SearchIcon/>
            </HOVER>  
              <img src={ProfileImg} alt="" />
            </div>
        </nav>
    </div>
    </DIV>
  )
}

export default Navbar

const HOVER = styled.div`
  cursor: pointer;
`

const DIV = styled.div`


  .navoptions{
    color: #FFFFFF;
    z-index: 1000;
  }
  .navbar{
    width: 1440px;
    height: 134px;
    display: flex;
    /* border: 1px solid red; */
    margin-top: -14px;
    
  }

  nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo{
    display: flex;
    gap: 62px;
    margin-left: 80px;
  }
  ul{
    display: flex;
    gap: 24px;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
  }
  li{
    list-style-type: none;
    cursor: pointer;
  } 

  .search__icon{
    display: flex;
    gap: 32px;
    margin-right: 80px;
    align-items: center;
  }

  img{
    border-radius: 100%;
    cursor: pointer;
  }
`