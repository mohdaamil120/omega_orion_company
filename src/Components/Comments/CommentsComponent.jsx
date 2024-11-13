import React from 'react'
import styled from 'styled-components'
import UserImg from "../../assets/commented_user_img.jpg"

const CommentsComponent = () => {
  return (
    <DIV>
        <div className='container'>
            <div className='comments__container'>
                <p>Comments</p>
                <div className='Commented__user__details'>
                    <div className='image__container'>
                        <img src={UserImg} alt="" />
                    </div>
                    <div className='user__details'>
                        <h3>Kristie Robson</h3>
                        <p>Gave Feedback on 17th Sept 2024</p>
                    </div>
                </div>
                <p>The template I bought looked great in the preview, but the actual file was poorly designed and hard to customize. Definitly not worth the price</p>
                <div className='comment__input__container'>
                    <input type="text" placeholder='Drop a Comment, be helpful' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </DIV>
  )
}

export default CommentsComponent

const DIV = styled.div`
    *{
        font-family: 'Inter Tight', sans-serif;
    }

    .container{
        width: 1440px;
        background-color: #0C0C0C;
        margin: auto;
    }
    .comments__container{
        max-width: 1280px;
        margin: auto;
        border-radius: 14px;
        background-color: #141414;
    }

    .comments__container>p:nth-child(1){
        color: #FFFFFF;
        margin-left: 40px;
        padding-top: 40px;
        margin-bottom: 40px;
        font-size: 24px;
    }

    .comments__container>p:nth-child(3){
        width: 434px;
        font-size: 14px;
        line-height: auto;
        color: #A1A1A1;
        margin-left: 40px;
        margin-bottom: 40px;
    }

    .Commented__user__details{
        display: flex;
        gap: 12px;
        align-items: center;
        margin-left: 40px;
        margin-bottom: 16px;
    }
    .Commented__user__details> .image__container{
        width: 60px;
        height: 60px;
        border-radius: 100px;
    }
    .Commented__user__details> .image__container>img{
        border-radius: 100px;
        width: 100%;
    }
    .Commented__user__details> .user__details{
        /* width: 237px; */
        display: flex;
        flex-direction: column;
        gap: 6px;
        margin-top: 8px;
        margin-bottom: 8px;
    }
    .Commented__user__details> .user__details >h3{
       /* width: 104px; */
       height: 22px;
       line-height: 22px;
       font-size: 16px;
       color: #FFFFFF;
    }
    .Commented__user__details> .user__details >p{
        width: 237px;
       height: 16px;
       line-height: 16px;
       letter-spacing: 8%;
       font-size: 14px;
       color: #898989;
    }

    .comment__input__container{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* gap: 902; */
        background-color: #1B1B1B;
    }

    .comment__input__container> input{
        width: 190px;
        border: none;
        background: none;
        line-height: 24px;
        font-size: 16px;
        margin-top: 38px;
        margin-bottom: 38px;
        margin-left: 38px;
        color: #FFFFFF;
    }
   
    .comment__input__container > input::placeholder {
        color: #8D8D8D; 
        opacity: 1; 
    }

    .comment__input__container> button{
        width: 126px;
        border: none;
        background: none;
        padding: 15px;
        border-radius: 14px;
        border: 1px solid #526600;
        background-color: #CCFF00;
        color: #000000;
        font-size: 18px;
        line-height: 22px;
        font-weight: 600;
        margin-top: 38px;
        margin-bottom: 38px;
        margin-right: 38px;
    }
`