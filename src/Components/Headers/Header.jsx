// import React from 'react'
// import styled from 'styled-components'
// import HeaderCover from "../assets/header_cover.jpg"
// import ProfileImg from "../assets/user_img.jpg"
// import LogoIcon from '../SvgIcons/LogoIcon'
// import SearchIcon from '../SvgIcons/SearchIcon'
// import Navbar from './Navbar'

// const Header = () => {
//   return (
//     <DIV>
//       <div className='header__container'>
//           <nav className='navbar'>
//             <div className='logo'>
//               <LogoIcon/>
//             </div>
//             <div className='menu__options'>
//                 <ul>
//                   <li>Explore</li>
//                   <li>FAQ's</li>
//                   <li>Pricing</li>
//                 </ul>
//             </div>

//             <div className='search__icon'>
//               <SearchIcon/>
//             </div>

//             <div className='user__profile__image'>
//               <img src={ProfileImg} alt="" />
//             </div>
//           </nav>
//           {/* <Navbar/> */}
//       </div>
//     </DIV>
//   )
// }

// export default Header

// const DIV = styled.div`
//   .header__container{
//     max-width: 1440px;
//     width: 100%;
//     height: 350px;
//     max-height: 350px;
//     margin: auto;
//     border: 1px solid black;
    
//     /* Background image */
//     background-image: url(${HeaderCover}); 
//     background-position: center; 
//     background-repeat: no-repeat; 
//     overflow: hidden; 
//   }

//   /* .navbar{
//     width: 1440px;
//     height: 134px;
//     display: flex;
//     border: 1px solid red;
//     position: relative;
//   }

//   .navbar > .logo{
//     width: 49px;
//     height: 56px;
//     margin-left: 80px;
//     margin-top: 32px; 
//   }

//   .menu__options{
//     width: 231px;
//     height: 22px;
//     margin-left: 62px;
//     margin-top: 48.5px;
//     font-family: 'Inter Tight', sans-serif;
//     font-weight: 600;
//     font-size: 18px;
//     color: #FFFFFF;
//   }
//    ul{
//     display: flex;
//     gap: 24px;
//   }
//   li{
//     list-style-type: none;
//     display: flex;  
//   }

//   .navbar> .user__profile__image{
//     width: 40px;
//     height: 40px;
//     margin-left: 80px;
//     margin-top: 47px;
//     position: absolute;
//     right: 80px;
//     border-radius: 100%;
//   }

//   .navbar> .user__profile__image img{
//     width: 100%;
//     border-radius: 100%;
//   }

//   .search__icon{
//     width: 26px;
//     height: 26px;
//     position: absolute;
//     right: 152px;
//     margin-top: 54px;
//   } */


// `




















// import React from 'react'
// import styled from 'styled-components'
// import HeaderCover from "../../assets/header_cover.jpg"
// import Navbar from './Navbar'
// import QuestionMarkICon from '../../SvgIcons/QuestionMarkICon'
// // import "./index.css"

// const Header = () => {
//   return (
//     <DIV>
//       <div className='header__container'>
//           <Navbar/>
//           <div>
//             <div className='buttons'>
//               <div id='firstBtn'>
//                 <div>
//                   <QuestionMarkICon/>
//                   <button>Give feedback</button>
//                 </div>
//               </div>
//               <button id='secondBtn'>Add to cart $20</button>
//             </div>
//           </div>
//       </div>
//     </DIV>
//   )
// }

// export default Header

// const DIV = styled.div`
// *{
//   font-family: 'Inter Tight', sans-serif;
// }
//   .header__container{
//     max-width: 1440px;
//     width: 100%;
//     height: 350px;
//     max-height: 350px;
//     margin: auto;
//     /* border: 1px solid black; */
    
//     /* Background image */
//     background-image: url(${HeaderCover}); 
//     background-position: center; 
//     background-repeat: no-repeat; 
//     overflow: hidden; 
//   }

//   .buttons{
//     display: flex;
//     gap: 12px;
//     justify-content: end;
//     margin-right: 80px;
//     margin-top: 127px;
//     /* margin-bottom: 51px; */
//   }

//   .buttons > #firstBtn{
//     width: 221px;
//     padding-top: 15px;
//     padding-bottom: 15px;
//     border-radius: 14px;
//     color: #FFFFFF;
//     /* background-color: #3D3D3D; */
//     border: 1px solid #3D3D3D;
//   }

//   #firstBtn>div{
//     display: flex;
//     gap: 12px;
//     /* border: 1px solid #3D3D3D; */
//     margin-left: 34px;
//     margin-right: 34px;
//   }

//   #firstBtn>div>button{
//     width: 117px;
//     font-size: 18px;
//     border: none;
//     color: #FFFFFF;
//     background: none;
//   }

//   #secondBtn{
//     width: 200px;
//     padding-top:15px;
//     padding-bottom:15px;
//     border-radius: 14px;
//     border: 1px solid #526600;
//     background-color: #CCFF00;
//     color: #000000;
//   }

// `




import React from 'react'
import styled from 'styled-components'
import HeaderCover from "../../assets/header_cover.jpg"
import Navbar from './Navbar'
import QuestionMarkICon from '../../SvgIcons/QuestionMarkICon'
import FigmaIcon from '../../SvgIcons/FigmaIcon'

const Header = () => {
  return (
    <DIV>
      <div className='header__container'>
          <Navbar/>
          <div>
            <div className='buttons'>
              <div id='firstBtn'>
                <div>
                  <QuestionMarkICon/>
                  <button>Give feedback</button>
                </div>
              </div>
              <button id='secondBtn'>Add to cart $20</button>
            </div>

            <div className='name'> 
              <p>Pixel Bloom: AI website agency</p>
              <div>
                <p>Habit Tracker App Figma IOS UI Kit</p>
                <FigmaIcon/>
              </div>
            </div>
          </div>
      </div>
    </DIV>
  )
}

export default Header

const DIV = styled.div`
* {
  font-family: 'Inter Tight', sans-serif;
}

.header__container {
  max-width: 1440px;
  width: 100%;
  /* height: 350px; */
  /* max-height: 350px; */
  margin: auto;
  position: relative;
  
  /* Background image */
  background-image: url(${HeaderCover});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #000000;  /* rgba(0, 0, 0, 0.3); */
    z-index: 1;  
    opacity: 0.8;
  }
  
  .navbar, .buttons {
    position: relative;
    z-index: 2;
  }
}

.buttons {
  display: flex;
  gap: 12px;
  justify-content: end;
  margin-right: 80px;
  margin-top: 127px;
}

.buttons > #firstBtn {
  width: 221px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 14px;
  color: #FFFFFF;
  border: 1px solid #3D3D3D;
  z-index: 2;
}

#firstBtn > div {
  display: flex;
  gap: 12px;
  margin-left: 34px;
  margin-right: 34px;
}

#firstBtn > div > button {
  width: 117px;
  font-size: 18px;
  border: none;
  color: #FFFFFF;
  background: none;
  cursor: pointer;
}
#secondBtn{
  width: 200px;
  padding-top:15px;
  padding-bottom:15px;
  border-radius: 14px;
  font-family: 'Inter Tight', sans-serif;
  font-size: 18px;
  border: 1px solid #526600;
  background-color: #CCFF00;
  color: #000000;
  z-index: 2; 
  cursor: pointer;
}

.name{
  width: 448px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  position: relative;
  margin-left: 80px;
  bottom: 40px;
}

.name >p{
  width: 448px;
  font-size:32px;
  color: #FFFFFF;
  z-index: 2;
  
}

.name > div{
  width: 281px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  z-index: 2;
  align-items: center;
}

.name > div>p{
  font-size: 14px;
  letter-spacing: 8%;
  color: #8A8A8A;
}

`


