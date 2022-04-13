import React from "react";
import styled from "styled-components";
import Box from '@mui/material/Box';





const Div = styled.div`
 display: grid;
  grid-template-rows: auto auto auto auto ;
    

`;


const TitleBar = styled.h1`
color: #484b62;
    fill: #484b62;
    font-weight: 400;
    text-align: center;
    position: relative;
    top: 40px;
    bottom: 40px;
    

`;

const Imgad = styled.img`
width: 650px;
height: 454px;
float: left;
position: relative;
top: 130px;


`;

const Imgad2 = styled.img`
width: 650px;
height: 454px;
float: right;
position: relative;
bottom: 40px;


`;

const Imgad3 = styled.img`
float: left;
position: relative;
top: 460px;
width: 412px;
height: 410px;
left: 110px;



`;


const IntroductionText = styled.h1`
color: #6f7285;
font-size: 1.5rem;



`;

const Text = styled.div`
position: relative;
right: 80px;
bottom: 170px;


`;

const Text2 = styled.div`
position: relative;
right: 150px;
top: 70px;




`;

const SimilarSection = styled.div`
position: relative;





`;

const Title1 = styled.h1`

color: #484b62;
font-size: 30px;




`;

const Title2 = styled.h1`

color: #0ad287;
font-size: 30px;
font-weight: 900;


`;

const Title3 = styled.h1`
position: relative;
top: 520px;
right: 120px;
line-height: 2;



`;

const Description = styled.h1`
font-size: 20px;
color: #484b62;
line-height: 2;




`;

const Description2 = styled.h1`
position: relative;
top: 530px;
color: #6f7285;
font-size: 20px;
line-height: 2;
right: 150px;




`;

const AdyouSection = styled.div`

position: relative;
bottom: 420px;




`;

const Div1 = styled.div`





`;

const Div2 = styled.div`





`;

const Div3 = styled.div`





`;

const Div4 = styled.div`


background-color: #FBFBFC;
height: 487px;



`;





const TypesOfAd = () => {
    return (
        <a name="moor">
        <Div>
            <Div1>
                <TitleBar>
                    انواع تبلیغات در آپارات

                </TitleBar>
                <Imgad src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/advertisev2/ads-during-video-v4.png" />
            </Div1>
            <Div2>
                <Text>
                    <b style={{ color: "black", fontSize: "1.5rem" }}>
                        نمایش تبلیغ در
                    </b>
                    <br />
                    <span style={{ color: "#0ad287", lineHeight: "2", fontSize: "2.1rem", fontWeight: "900" }}>
                        حین پخش ویدیو
                    </span>
                    <br />
                    <br />
                    <IntroductionText>


                        این نوع تبلیغ در ابتدا یا میانه پخش ویدیوها به کاربر نمایش داده می‌شود
                        <br />
                        و برای هدایت کاربر به آدرس وبسایت مورد نظر مناسب است.
                    </IntroductionText>
                </Text>
            </Div2>
            <Div3>
                <SimilarSection>
                    <Imgad2 src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/advertisev2/ads-in-offer-v4.png" />
                    <Text2>
                        <Title1>
                            نمایش تبلیغ در قسمت


                        </Title1>
                        <Title2>
                            ویدیوهای مشابه

                        </Title2>
                        <Description>
                            در این نوع تبلیغ ویدیو شما به صورت هدفمند در قسمت ویدیوهای مشابه <br />آپارات نمایش داده می‌شود. کاربران با کلیک روی این تبلیغ به صفحه ویدیوی<br /> شما در آپارات منتقل می‌شوند.
                        </Description>
                    </Text2>



                </SimilarSection>
            </Div3>
            <Div4>
                <AdyouSection>
                    <Imgad3 src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/advertisev2/mobile-v5.png" />
                    <Title3>
                        فقط زمانی پرداخت می‌کنید که تبلیغ ویدیویی <br />شما را <span style={{ color: "#0AD287" }}>تماشا کنند!</span>
                    </Title3>


                    <Box
                        sx={{
                            width: 573,
                            height: 138,
                            backgroundColor: 'white'
                        }}
                    >

                        <Description2>
                            فقط زمانی از بودجه کلی به ازای هر بار نمایش کم می‌شود که مخاطبان <br />۶ ثانیه و یا بیشتر از ویدیو شما را ببینند.
                        </Description2>
                    </Box>



                </AdyouSection>
            </Div4>

        </Div>
        </a>
    );
}

export default TypesOfAd;