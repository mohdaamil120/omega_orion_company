import React from 'react'
import styled from 'styled-components'
import HeaderCover from "../../assets/header_cover2.png"
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
  
} 

.header__container>div{
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:100px;
      }
  }
.buttons {
  display: flex;
  gap: 12px;
  justify-content: end;
  margin-right: 80px;
  margin-top: 127px;
  /* border: 1px solid red; */
  margin-bottom: -27px;

@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
  margin-left: 90px;
  gap: 30px;
  z-index: 1;
}
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
  line-height: 22px;
  font-weight: 600;
  font-size: 18px;
  border: 1px solid #526600;
  background-color: #CCFF00;
  color: #000000;
  z-index: 2; 
  cursor: pointer;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 221px;
  }
}





.name{
  width: 448px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  position: relative;
  margin-left: 80px;
  bottom: 40px;

@media (max-width: 768px) {
  width: 350px;
  justify-content: center;
  align-items: center;
  margin-left: 0px;
}
}

.name >p{
  width: 448px;
  font-size:32px;
  color: #FFFFFF;
  z-index: 2;
  @media (max-width: 768px) {
    font-size:25px ;
    width: 350px;
    justify-content: center;
    align-items: center;
}
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


