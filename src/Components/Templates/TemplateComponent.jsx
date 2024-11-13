import React from 'react'
import one from "../../assets/1.jpg"
import two from "../../assets/2.jpg"
import three from "../../assets/3.jpg"
import four from "../../assets/4.jpg"
import five from "../../assets/5.jpg"
import six from "../../assets/6.jpg"
import seven from "../../assets/7.jpg"
import eight from "../../assets/8.jpg"
import styled from 'styled-components'

const TemplateComponent = () => {
  return (
    <DIV>
        <div className='templates_container'>
            <div className="templates">
                <img src={one} alt="" />
                <img src={two} alt="" />
                <img src={three} alt="" />
                <img src={four} alt="" />
                <img src={five} alt="" />
                <img src={six} alt="" />
                <img src={seven} alt="" />
                <img src={eight} alt="" />
            </div>
        </div>
    </DIV>
  )
}

export default TemplateComponent


const DIV = styled.div`
    
    .templates_container {
    padding: 80px;
    width: 1440px;
    margin: auto;
    background-color: #0C0C0C;
  }

  .templates {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  .templates > img {
    width: 100%;          
    object-fit: cover;     
    border-radius: 12px;
  }

`