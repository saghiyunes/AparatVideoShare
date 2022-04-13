import React from "react";
import styled from "styled-components";

const Container = styled.div`
height: 330px;
background-color: #0AD287;
    
`;

const Texttitle1 = styled.h1`
    color: #fff;
    fill: #fff;
    font-size: 20px;
    text-align: center;
    position: relative;
    top: 30px;
    
`;


const Texttitle2 = styled.h1`
  color: #fff;
    fill: #fff;
    text-align: center;
    position: relative;
    top: 30px;
    font-weight: 700;


    
`;

const StartAdButton = styled.button`
width: 170px;
height: 55px;
background-color: white;
border: none;
border-radius: 50px;
color: #12D38A;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;


    
`;

const DivButoon = styled.div`
display: flex;
justify-content: center;
position: relative;
top: 50px;


    
`;

const StartAd = () => {
    return (
        <div>
            <Container>
                <Texttitle1>
                    برای بیشتر دیده شدن


                </Texttitle1>
                <Texttitle2>

                    تبلیغات خود را در آپارات شروع کنید
                </Texttitle2>
                <DivButoon>
                <StartAdButton>
                    <a href="https://www.aparat.com/user/dspads/create_ad" style={{textDecoration:"none",color:"#12D38A"}}>
                    <span style={{fontWeight:"700"}}>
                    ایجاد تبلیغ 
                    </span>
                    <img src="https://www.uplooder.net/img/image/17/2e5322acc0603fc9c74b76929f56749f/svgexport-5.svg" style={{position:"relative",top:"3px"}}/>
                    </a>
                </StartAdButton>
                </DivButoon>


            </Container>
        </div>
    );
}

export default StartAd;