import React from 'react'
import styled from 'styled-components'
import FigmaIcon from "../../SvgIcons/FigmaIcon"
import TickIcon from '../../SvgIcons/TickIcon'
import DownloadIcon from '../../SvgIcons/DownloadIcon'

const FeaturesComponent = () => {
  return (
    <DIV>
        <div className='main__container'>
            <div className='featured__container'>
                <div className='description'>
                    <h3>Description</h3>
                    <p>
                        Hello Friends👋🏻
                        <br />
                        <br />
                        Achieving your goals is now simpler than ever with Beetroot. Take control of your habits by setting personalized goals, receiving timely reminders, and effortlessly tracking your progress. The app records your journey and provides insights to help you build a healthier, more organized life. It addresses several challenges, from maintaining consistency to monitoring your overall progress. Your path to a better you has never been this straightforward!
                        <br />
                        <br />
                        I also want to share my exploration of our app's features. You can set specific quitting goals, find tips for overcoming cravings, and access support resources whenever you need them. I hope you guys find it useful. Feel free to comment!
                        <br />
                        <br />
                        🔥Checkout our other product - https://ui8.net/omega-orion/products/forgo---quit-smoking-app✉️ 
                    </p>
                </div>
                <div className='features'>
                    <h3>Features</h3>
                    <div className='features__options'>
                        <div>
                            <TickIcon/>
                            <p>120+ Screens</p>
                        </div>
                        <div>
                            <TickIcon/>
                            <p>Fully customisable designs</p>
                        </div>
                        <div>
                            <TickIcon/>
                            <p>Organised Design system</p>
                        </div>
                        <div>
                            <TickIcon/>
                            <p>Light & Dark mode</p>
                        </div>
                        <div>
                            <TickIcon/>
                            <p>Customised Illustration</p>
                        </div>
                        <div>
                            <TickIcon/>
                            <p>Neatly Organised layer</p>
                        </div>
                    </div>
                    <div className='format'>
                        <h3>Format</h3>
                        <div className='format__icons'>
                            <FigmaIcon/>
                            <div>
                                <DownloadIcon/>
                                <p>15.2mb</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </DIV>
  )
}

export default FeaturesComponent


const DIV=styled.div`
 *{
    font-family: 'Inter Tight', sans-serif;
  }
  .main__container{
        max-width: 1440px;
        width: 100%;
        margin: auto;
        background-color: #0C0C0C;
     
  }


  .featured__container{
    display: flex;
    gap: 100px;

    @media (max-width: 768px) {
        flex-direction: column;
        padding-left: 20px;
        gap: 0px;
    }
  }


  .description{
    margin-top: 50px;
    margin-left: 100px;
    padding-bottom: 76px;    
    width : 597px;
    @media (max-width: 768px) {
        text-align:left;
        margin-left: 0px;
    }
  }

  .description h3 {
    width: 125px;
    font-size: 24px;
    color: #FFFFFF;
    line-height: 28px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  .description p {
      white-space: pre-wrap;
      font-size: 15.9px;
      line-height: 24px;
      color: #FFFFFF;
      font-weight: 400; 

      @media (max-width: 768px) {
        font-size: 13px;
        width: 340px;
    }
    }

    .features{
        display: flex;
        flex-direction: column;
        gap: 40px;
        @media (max-width: 768px) {
            margin-bottom: 50px;
        }
    }
    .features h3 {
      width: 95px;
      font-size: 24px;
      color: #FFFFFF;
      line-height: 28px;
      font-weight: 600;
    }

    .features__options{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .features__options > div{
        display:flex;
        gap: 8px;
    }
    .features__options > div p{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -2%;
        color: #F2F2F2;
    }

    .format{
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .format__icons{
        display: flex;
        gap: 12px;
        cursor: pointer;
    }
    .format__icons > div{
        display: flex;
        gap: 8px;
        align-items: center;
       
    }
    .format__icons > div >p{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #3D3D3D;
    }

`