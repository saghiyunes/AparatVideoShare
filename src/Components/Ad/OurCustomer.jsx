import React from "react";
import styled from "styled-components";



const Div = styled.div`
height: 352px;

`;



const Title = styled.h1`
font-size: 25px;
color: #484b62;
text-align: center;
font-weight: 900;
position: relative;
top: 40px;

`;

const Border = styled.div`
width: 126px;
height: 100px;
background-color: #f5f5f9;
border-radius: 10px;

`;

const Ul = styled.ul`
display: flex;

list-style-type: none;
justify-content: center;
position: relative;
top: 100px;
bottom: 60px;



`;

const ImgCustomer = styled.img`

display: block;
position: relative;
right: 25px;
top: 40px;


`;

const ImgCustomer2 = styled.img`

display: block;
position: relative;
right: 35px;
top: 25px;


`;



const OurCustomer = () => {
    return (
        <Div>
            <Title>
                مشتریان بخش تبلیغات آپارات
            </Title>
            <Ul  >
                <li style={{display:"inline-block"}}>
                    <Border>
                        <ImgCustomer src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/advertisev2/svg/digikala-logo.svg"/>

                    </Border>

                </li>
                <li style={{display:"inline-block",paddingRight:"20px"}}>
                    <Border>
                    <ImgCustomer2  src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/advertisev2/svg/mellat-bank-logo.svg"/>

                    </Border>
                </li>
                <li style={{display:"inline-block",paddingRight:"20px"}}>
                    <Border>
                    <ImgCustomer src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/advertisev2/svg/sumsung-logo.svg"/>

                    </Border>
                </li>
                <li style={{display:"inline-block",paddingRight:"20px"}}>
                    <Border>
                    <ImgCustomer2 src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/advertisev2/svg/asan-pardakht-logo.svg"/>

                    </Border>
                </li>
                <li style={{display:"inline-block",paddingRight:"20px"}}>
                    <Border>
                    <ImgCustomer src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/advertisev2/svg/snapp-logo.svg"/>


                    </Border>
                </li>
                <li style={{display:"inline-block",paddingRight:"20px"}}>
                    <Border>
                    <ImgCustomer src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/advertisev2/svg/lg-logo.svg"/>

                    </Border>
                </li>
                <li style={{display:"inline-block",paddingRight:"20px"}}>
                    <Border>
                    <ImgCustomer src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/advertisev2/svg/kalleh-logo.svg"/>

                    </Border>
                </li>
                <li style={{display:"inline-block",paddingRight:"20px"}}>
                    <Border>
                    <ImgCustomer src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/advertisev2/svg/bazar-logo.svg"/>

                    </Border>
                </li>
            </Ul>
        </Div>
    );
}

export default OurCustomer;