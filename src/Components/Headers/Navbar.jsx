// import React from 'react'
// import styled from 'styled-components'
// import ProfileImg from "../../assets/user_img.jpg"
// import LogoIcon from '../../SvgIcons/LogoIcon'
// import SearchIcon from '../../SvgIcons/SearchIcon'


// const Navbar = () => {
//   return (
//     <DIV>
//     <div className='navbar'>
//         <nav className='navoptions'>
//             <div className='logo'>
//              <HOVER>
//                <LogoIcon />
//              </HOVER>
//               <ul>
//                   <li>Explore</li>
//                   <li>FAQ's</li>
//                   <li>Pricing</li>
//               </ul>
//             </div>
//             <div className='search__icon'>
//             <HOVER>
//               <SearchIcon/>
//             </HOVER>  
//               <img src={ProfileImg} alt="" />
//             </div>
//         </nav>
//     </div>
//     </DIV>
//   )
// }

// export default Navbar

// const HOVER = styled.div`
//   cursor: pointer;
// `

// const DIV = styled.div`



//   .navoptions{
//     color: #FFFFFF;
//     z-index: 1000;
//   }
//   .navbar{
//     max-width: 1440px;
//     width: 100%;
//     height: 134px;
//     display: flex;
//     /* border: 1px solid red; */
//     margin-top: -14px;

//         @media (max-width: 768px) {
//           flex-direction: column;
//           height: auto;
//         }
    
//   }



//   nav{
//     width: 100%;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//   }

//   .logo{
//     display: flex;
//     gap: 62px;
//     margin-left: 80px;
//       @media (max-width: 768px) {
//         flex-direction: column;
//         align-items: center;
//       }
//   }



//   ul{
//     display: flex;
//     gap: 24px;
//     align-items: center;
//     font-weight: 600;
//     font-size: 18px;
//       @media (max-width: 768px) {
//         flex-wrap: wrap;
//         gap: 8px;
//       }
//   }
//   li{
//     list-style-type: none;
//     cursor: pointer;
//   } 

//   .search__icon{
//     display: flex;
//     gap: 32px;
//     margin-right: 80px;
//     align-items: center;
//       @media (max-width: 768px) {
//         justify-content: center;
//         margin-top: 10px;
//       }
//   }

//   img{
//     border-radius: 100%;
//     cursor: pointer;
//   }
// `






import React, { useState } from 'react';
import styled from 'styled-components';
import ProfileImg from "../../assets/user_img.jpg";
import LogoIcon from '../../SvgIcons/LogoIcon';
import SearchIcon from '../../SvgIcons/SearchIcon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <DIV>
      <div className='navbar'>
        <nav className='navoptions'>
          <div className='logo'>
            <HOVER>
              <LogoIcon />
            </HOVER>
            <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
              <li>Explore</li>
              <li>FAQ's</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className='search__icon'>
            <HOVER>
              <SearchIcon />
            </HOVER>
            <img src={ProfileImg} alt="" />
          </div>
          <div className='hamburger' onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </DIV>
  );
};

export default Navbar;

const HOVER = styled.div`
  cursor: pointer;
`;

const DIV = styled.div`
  .navoptions {
    color: #FFFFFF;
    z-index: 1000;
  }

  .navbar {
    max-width: 1440px;
    width: 100%;
    height: 134px;
    display: flex;
    margin-top: -14px;

    @media (max-width: 768px) {
      flex-direction: column;
      height: auto;
    }
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    display: flex;
    gap: 62px;
    margin-left: 80px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  ul {
    display: flex;
    gap: 24px;
    align-items: center;
    font-weight: 600;
    font-size: 18px;

    @media (max-width: 768px) {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 80px;
      left: 0;
      background-color: #0C0C0C; 
      width: 100%;
      padding: 20px;
      z-index: 999;
    }
  }

  .menu-items.open {
    display: flex;
  }

  li {
    list-style-type: none;
    cursor: pointer;
  }

  .search__icon {
    display: flex;
    gap: 32px;
    margin-right: 80px;
    align-items: center;

    @media (max-width: 768px) {
      justify-content: center;
      margin-top: 10px;
    }
  }

  img {
    border-radius: 100%;
    cursor: pointer;
  }

  /* Hamburger Styles */
  .hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;

    span {
      display: block;
      width: 25px;
      height: 3px;
      background-color: #FFFFFF;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      display: flex;
      margin-right: 20px;
    }
  }
`;
