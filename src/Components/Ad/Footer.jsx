import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const Container = styled.div`
position: relative;
  height  :98px ;
  background-color: #484B62;
  display: flex;
`;

const AparatLogo = styled.img`
width: 100px;
height: 100px;
position: relative;
right: 110px;
cursor: pointer;


`;

const Rules = styled.div`
position: relative;
right: 170px;
top: 38px;
display: flex;
cursor: pointer;


`;

const RulesLogo = styled.img`
width: 25px;
height: 25px;
`;

const RulesText = styled.span`
color: white;
display: flex;
position: relative;
top: 3px;
right: 5px;
font-weight: 700;

`;

const SendTicket = styled.div`
position: relative;
top: 37px;
right: 220px;
display: flex;
cursor: pointer;



`;


const TicketLogo = styled.img`
width: 25px;
height: 25px;

`;


const TicketText = styled.span`
color: white;
display: flex;
position: relative;
right: 7px;
top: 5px;
font-weight: 700;


`;

const Artcle = styled.div`
display: flex;
position: relative;
right: 270px;
top: 37px;
cursor: pointer;


`;


const ArticleLogo = styled.img`
width: 25px;
height: 25px;

`;

const ArticleText = styled.span`
color: white;
display: flex;
position: relative;
top: 3px;
right: 5px;
font-weight: 700;

`;
const ContactUs = styled.div`
cursor: pointer;




`;

const Span1 = styled.span`
font-weight: 700;
color: white;
position: relative;
display: flex;
top: 40px;
right: 460px;
font-size: 18px;




`;

const Span2 = styled.span`
font-weight: 700;
color: white;
position: relative;
display: flex;
top: 16px;
right: 630px;
font-size: 18px;





`;





const Footer = () => {
    return (
        <div>
            <Container>
                <Link to={`/`}>
                <AparatLogo src="https://www.uplooder.net/img/image/10/15842d68f4ea6c369db9024514426b0b/لوگوی-آپارات-1.svg" />
                </Link>
                <a href="https://www.aparat.com/adspolicy">
                <Rules>

                    <RulesLogo src="https://www.uplooder.net/img/image/83/06a20e8aaab1c0473c6985773935d355/svgexport-6.svg" />
                    <RulesText>
                        قوانین و مقررات
                    </RulesText>
                </Rules>
                </a>
                <a target="_blank" href="https://www.aparat.com/advertise">
                <SendTicket>
                    <TicketLogo src="https://www.uplooder.net/img/image/39/675ff4c9204245e8b815c84c67c44a1b/svgexport-7.svg" />
                    <TicketText>
                        ارسال تیکت
                    </TicketText>
                </SendTicket>
                </a> 
                <a target="_blank" href="https://support.aparat.com/kb/article-23">
                <Artcle>
                    <ArticleLogo src="https://www.uplooder.net/img/image/24/39738c3119605bd99bb9355a17454c28/svgexport-8-(2).svg" />
                    <ArticleText>
                        مقالات آموزشی
                    </ArticleText>
                </Artcle>
                </a>
                <a href = "mailto: Ads@aparat.com" style={{textDecoration:"none"}}>
                <ContactUs>
                    <Span1>
                        ارتباط با ما از طریق ایمیل
                    </Span1>
                    
                    <Span2>
                   [at] aparat [dot] com &nbsp;<span style={{color:"#DBC23F"}}>Ads</span> 
                    </Span2>
                </ContactUs>
                </a>

            </Container>
        </div>
    );
}

export default Footer;