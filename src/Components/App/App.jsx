import React from "react";
import styled from "styled-components";



const Title = styled.h1`
text-align: center;
font-size: 1.3rem;
margin: 30px 0px 30px 0px ;

`;

const Android = styled.div`
position: relative;






`;

const Ios = styled.div`


`;

const WindowsPhone = styled.div`


`;

const Img = styled.img`
width: 186px;
height: 388px;


`;


const SVGicon = styled.img`
width: 15px;
height: 15px;


`;

const TextDownload = styled.span`
    font-size: .9em;
    position: relative;
    right: 5px;
    bottom: 3px;


`;

const Container = styled.a`

border: 1px solid #e6e7ef;
border-radius: 100px;
width: 90px;
height: 20px;
padding: 10px 40px 10px 40px;
a { color: inherit; } 
position: relative;
top: 20px;
align-items: center;
right: 5px;


`;

const Section = styled.div`

display: flex;
flex-direction: column;

`;

const AppContainer = styled.div`

display: flex;
justify-content: space-evenly;


`;

const Br = styled.div`

border-bottom 1px solid #DADADA;
margin: 130px 150px 80px 150px  ;


`;




const TvImg = styled.img`

margin: 10px 290px 40px 0px ;


`;

const TvSectionText = styled.h1`
font-size: 01.5rem;
line-height: 1.5;
margin: 35px 10px 0px 0px;



`;

const Span = styled.span`

background: #df0f50;
margin: 0px 5px 0px 5px ;
color: white;

`;

const Tv = styled.div`

display: flex;
`;





const App = () => {
    return (
        <div>
            <Title>
                آپارات در موبایل
            </Title>
          <AppContainer>
            <Android>
                <Section>
                    <Img src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/app/1.png" />
                    <Container href="https://static.cdn.asset.aparat.com/flmt/Aparat-Android-5.1.0-w-1.apk">
                        <SVGicon src="https://www.uplooder.net/img/image/32/fe5cfa20f7c902e890d79d640f7a3b0e/svgexport-50.svg" />
                        <TextDownload>
                            نسخه اندروید
                        </TextDownload>
                    </Container>
                </Section>


            </Android>

            <Ios>
                <Section>
                    <Img src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/app/2.jpg" />
                    <Container href="#">
                        <SVGicon src="https://www.uplooder.net/img/image/69/2b2a45b96b4c3eaa709309bdf3929a8b/svgexport-51.svg" />
                        <TextDownload>
                            نسخه آی او اس
                        </TextDownload>
                    </Container>
                </Section>


            </Ios>

            <WindowsPhone>
                <Section>
                    <Img src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/app/3.png" />
                    <Container href="http://www.windowsphone.com/en-us/store/app/%D8%A2%D9%BE%D8%A7%D8%B1%D8%A7%D8%AA/491a633a-c90a-4b78-861c-0b21b8cc90f3">
                        <SVGicon src="https://www.uplooder.net/img/image/62/5509aad73cbb6c6f9c0238b2346420f2/svgexport-52.svg" />
                        <TextDownload>
                             نسخه فون
                        </TextDownload>
                    </Container>
                </Section>

            </WindowsPhone>
            </AppContainer>
            <Br/>
            <Title>
                آپارات در تلوزیون 
            </Title>
            <Tv>
            <TvImg src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/app/tv2.png"/>
            <TvSectionText>
            نسخه تلویزیون آپارات برای همه اسکرین‌های بزرگ در آدرس <Span><a href="http://tv.aparat.com/"> TV.APARAT.COM </a></Span>قابل دسترس است.
            </TvSectionText>
            </Tv>

        </div>
    );
}

export default App;