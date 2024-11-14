import React from 'react'
import FooterLogoIcon from "../../SvgIcons/FooterLogoIcon"
import styled from 'styled-components'
import RightArrowIcon from '../../SvgIcons/RightArrowIcon'
import MailIcon from '../../SvgIcons/MailIcon'
import BehanceIcon from '../../SvgIcons/BehanceIcon'
import InstagramIcon from '../../SvgIcons/InstagramIcon'
import DribbleIcon from '../../SvgIcons/DribbleIcon'
import Uiwiki_img_svg from '../../SvgIcons/Uiwiki_img_svg'

const Footer = () => {
  return (
    <DIV>
        <div className='main__container'>
            <div className='footer__container'>
                <FooterLogoIcon/>
                <div className='first__optins'>
                    <p>Explore</p>
                    <p><span>FAQ</span></p>
                    <p>Pricing</p>
                </div>
                <div className='second__optins'>
                    <p>Licensing</p>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                </div>
                <div className='third__optins'>
                    <p>Join our monthly newsletter🙌</p>
                    <div className='email__container'>
                        <input type="email" placeholder='designer@example.com'/>
                        <button> <RightArrowIcon/> </button>
                    </div>
                    <div className='contact__container'>
                        <p>Connect with us🤝</p>
                        <div>
                            <button><DribbleIcon/></button>
                            <button><InstagramIcon/></button>
                            <button><BehanceIcon/></button>
                            <button><MailIcon/></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='uiwiki__image__container'>
              <p>© 2024, Omega Orion Pvt. Ltd.</p>
              {/* <img src={uiwiki} alt="" /> */}
              <div className='uiwiki'>
               <Uiwiki_img_svg/>
              </div>
            </div>
        </div>
    </DIV>
  )
}

export default Footer

const DIV=styled.div`
    *{
        font-family: 'Inter Tight', sans-serif;
  }
  .main__container{
        width: 1440px;
        height: 524px;
        margin: auto;
        background-color: #0C0C0C;
        /* border: 1px solid red; */
        overflow: hidden;
        position: relative;
  }

  .footer__container{
    background-color: #1B1B1B;
    padding-top: 40px;
    padding-left: 80px;
    display: flex;
  }

  .first__optins {
    width: 152px;
    display: flex;
    flex-direction: column;
    gap: 26px;
    margin-left: 110px;
  }
  .second__optins
  {
    width: 152px;
    display: flex;
    flex-direction: column;
    gap: 26px;
    margin-left: 44px;
  }
  .first__optins >p , .second__optins>p{
    font-size: 18px;
    font-weight: 600;
    line-height: 25.1px;
    letter-spacing: 0px;
    color: #767676;
  }
  .first__optins >p>span{
    color: #FFFFFF;
  }

  .third__optins {
    margin-left: 415px;
  }

  .third__optins > p{
    color: #FFFFFF;
    width: 253px;
    font-size: 18px;
    font-weight: 600;
    line-height: 25.1px;
    letter-spacing: 0px;
  }

  .third__optins > .email__container{
    width: 308px;
    border-radius: 12px;
    border: 1px solid #3D3D3D;
    background-color: #1F1F1F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
    margin-bottom: 32px;
  }
  .third__optins > .email__container>input{
    width: 187px;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    border: none;
    background: none;
    color: #FFFFFF;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 15px;
  }
  .third__optins > .email__container>button{
    width: 36px;
    height: 36px;
    border-radius: 9px;
    background-color: #CCFF00;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-right: 8px;
    margin-left: 62px;
    cursor: pointer;
  }

  .third__optins > .email__container>input::placeholder {
        color: #828282; 
        opacity: 1; 
    }

    .contact__container{
        width: 266px;
        display: flex;
        flex-direction: column;
        gap: 16px;
       
    }

    .contact__container>p{
        color: #FFFFFF;
        width: 154px;
        width: 160px;
        font-size: 18px;
        font-weight: 600;
        line-height: 25.1px;
        letter-spacing: 0px;
    }
    .contact__container>div{
        width: 264px;
        display: flex;
        gap: 16px;
    }
    .contact__container>div>button{
        width: 54px;
        padding: 15px;
        border-radius: 82px;
        border: 1px solid #3D3D3D;
        background-color: #1F1F1F;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .uiwiki__image__container{
      /* max-width: 1280px; */
      /* width: 100%; */
      padding-left: 80px;
      padding-right: 80px;
      height: 586px;
      margin: auto;
      background-color: #1B1B1B;
      margin-top: -34px;

    }
    .uiwiki__image__container>p{
      margin-left: 164px;
      margin-top: 6px;
      /* width: 186px; */
      /* height: 26px; */
      font-size: 14px;
      font-weight: 400;
      line-height: 25.1px;
      color: #494949;
      font-family: 'Inter Tight', sans-serif;
    }

    .uiwiki{
      margin-top: 85px;
    }
`