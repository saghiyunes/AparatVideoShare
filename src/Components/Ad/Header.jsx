import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const HeaderContainer = styled.div`
height: 548px;
background-image: url("https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/advertisev2/hero-desk-img-v2.png");
background-repeat: no-repeat;
background-size: cover;

    

`;

const Logo = styled.img`
fill:#6F7285 ;
margin: 35px 120px  ;
cursor: pointer;
    

`;

const Border = styled.div`
border-left: 1px solid #484B62;
height: 30px;
width: 1px;
position: relative;
left: 102px;
   

`;

const TitleLogo = styled.h1`

color: #515883;

font-size: 1rem;
font-weight: 700;
 line-height: 2.2;
 position: relative;
 left: 90px;


`;

const Logobar = styled.div`

display: flex;
align-items: center;
`;

const TitleHeaderbar = styled.div`



`;

const TitleText = styled.h1`
color: #6f7285;
line-height: 2;
    fill: #6f7285;
    font-size: 1.6rem;
    position: relative;
    right: 125px;
    top: 35px;

`;
const MoorInformationButton = styled.button`
width: 160px;
height: 48px;
background-color: white;
border-radius: 50px;
border: none;

cursor: pointer;
`;

const CreateAdButton = styled.button`

width: 160px;
height: 48px;
background-color: #0ad287;
border-radius: 50px;
cursor: pointer;
border: none;
position: relative;
right: 25px;





`;

const TextButton = styled.span`
    font-size: 1.1rem;
    font-weight: 700;




`;
const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;




`;

const Button = styled.div`
position: relative;
right: 125px;
top: 55px;



`;

const Bold = styled.span`
font-size: 2.6rem;
font-weight: 1000;
color: #484B62;



`;











const Header = () => {
    return (
        <div>
            <HeaderContainer>
                <Logobar>
                    <Link to={`/`}>
                    <Logo src="https://www.uplooder.net/img/image/73/df4f253aa858db6c275a5b5a02d2a496/لوگو-آپارات.svg" />
                    </Link>
                    <Border />
                    <TitleLogo>
                        سرویس تبلیغات در آپارات
                    </TitleLogo>
                </Logobar>
                <TitleHeaderbar>
                    <TitleText>
                        رشد کسب‌وکار خود
                        <br />
                        <Bold>
                            با تبلیـغ در آپارات
                        </Bold>
                        <br />
                        تبلیغات در پرمخاطب‌ترین وبسایت ویدیویی ایران
                    </TitleText>
                    <Button>
                        <a href="#moor">
                        <MoorInformationButton>
                            <Container>
                                <TextButton style={{ color: "#6f7285" }}>
                                    اطلاعات بیشتر
                                </TextButton>

                                <img src="https://www.uplooder.net/img/image/58/d020f5b2cf8871d667c852289717b4fe/svgexport-4.svg" />
                            </Container>

                        </MoorInformationButton>
                        </a>
                        <a href="https://www.aparat.com/user/dspads/create_ad" style={{ textDecoration: "none", color: "#12D38A" }}>

                            <CreateAdButton>
                                <Container>
                                    <TextButton style={{ color: "#FCFBFB" }}>
                                        ایجاد تبلیغ
                                    </TextButton>

                                    <img src="https://www.uplooder.net/img/image/1/6ddaf30d3cfd029ef435b090b807e38c/svgexport-3.svg" />
                                </Container>
                            </CreateAdButton>
                        </a>

                    </Button>
                </TitleHeaderbar>


            </HeaderContainer>


        </div>
    );
}

export default Header;