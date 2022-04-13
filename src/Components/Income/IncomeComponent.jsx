import React from "react";
import styled from "styled-components";



const Header = styled.div`
height: 537px;
background-image: url("https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/incomev2/income-hero-bg.jpg");
background-size: cover;
background-repeat: no-repeat;
position: relative;
bottom: 20px;
`;

const TitleHeader = styled.h1`
color: white;
position: relative;
top: 120px;
right: 70px;

`;

const Descriptopnheader = styled.p`
color: #a8a9b4;
font-size: 1rem;
line-height: 2;
position: relative;
top: 130px;
right: 70px;

`;


const RegisterButton = styled.button`
width: 160px;
height: 46px;
color: white;
background-color: transparent;
border: 1px solid #fbfbfc;
border-radius: 50px;
cursor: pointer;
font-size: 1.1rem;
font-weight: 400;
margin-right: 70px;
:hover{
    color: #BBBBBF;
}

`;


const VideoBox = styled.iframe`
width: 500px;
height: 285px;
float: left;
position: relative;
top: 60px;
left: 70px;
border: none;
cursor: pointer;
`;

const Contentproducer = styled.div`
height: 463px;
background-color: #F5F5F9;
position: relative;
bottom: 20px;
display: flex;
align-items: center;


`;

const ImgContent = styled.img`
width: 45px;
height: 45px;
margin: 90px 50px 0px 0px ;

`;

const ContentTitle = styled.h1`
margin-right: 55px;
font-size: 1.8rem;

`;

const ContentTitle2 = styled.h1`
margin-right: 200px;
font-size: 1.8rem;

`;

const ContentTitle3 = styled.h1`
position: relative;
right: 70px;
bottom: 90px;
font-size: 1.8rem;

`;



const ContentDescription = styled.p`
color: #484b62;
font-weight: 700;
font-size: .9em;
line-height: 2.2;
margin-right: 50px;

`;

const ContentDescription2 = styled.p`
color: #484b62;
font-weight: 700;
font-size: .9em;
line-height: 2.2;
margin-right: 200px;

`;

const ContentDescription3 = styled.p`
color: #484b62;
font-weight: 700;
font-size: .9em;
line-height: 2.2;
right: 50px;
position: relative;
bottom: 70px;


`;


const ContentMoorButton = styled.button`
width: 175px;
height: 46px;
color: #6f7285;
border: 1px solid #d3d6e0;
font-size: 1.2em;
border-radius: 50px;
background-color: transparent;
cursor: pointer;
margin-right: 50px;
`;

const Rightside = styled.div`

`;

const Leftside = styled.div`

`;

const ImgContentLeft = styled.img`
width: 500px;
height: 332px;
position: relative;
right: 340px;

`;

const ImgContentLeft2 = styled.img`
width: 500px;
height: 332px;
position: relative;
right: 310px;


`;

const ImgContentRight = styled.img`
width: 500px;
height: 332px;
position: relative;
right: 70px;
top: 50px;
`;


const Producerincome = styled.div`
display: flex;
align-items: center;


`;

const Imgincome = styled.img`
width: 60px;
height: 60px;
position: relative;
right: 215px;

`;

const ReportIncome = styled.div`
 height: 487px;
 background-color: #F5F5F9;
 display: flex;
 align-items: center;

`;


const Footer = styled.div`
 height: 407px;
 background-color: white;

`;

const FooterTitle = styled.h1`
     color: #484b62;
     font-size: 1.4rem;
     font-weight: 800;
    text-align: center;
    position: relative;
    top: 50px;



`;

const FooterDescription = styled.p`
    color: #484b62;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 2.2;
    text-align: center;
    position: relative;
   top: 55px;

`;

const FooterButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
top: 100px;


`;



const ButtonContactUs = styled.button`
width: 107px;
height: 46px;
font-size: 1.2rem;
border: 1px solid #6f7285;
cursor: pointer;
border-radius: 50px;
background-color: white;
:hover{
    background-color: #F8F8FB;
    
}

`;




const SendRequestButton = styled.button`
width: 200px;
height: 44px;
cursor: pointer;
font-size: 1.2rem;
border-radius: 50px;
background-color: #df0f50;
color: #FFFFF4;
border: none;
position: relative;
right: 20px;


`;














const IncomeComponent = () => {
    return (
        <div>
            <Header>
                <TitleHeader>
                    کسب درآمد در آپارات


                </TitleHeader>
                <VideoBox src="https://www.aparat.com/video/video/embed/videohash/0kymr/vt/frame">


                </VideoBox>
                <Descriptopnheader>
                    سیستم کسب درآمد در آپارات برای حمایت مالی از تولیدکنندگانِ محتوای ویدیویی طراحی ‌<br />شده است که بر اساس آن تولید‌کنندگان، به کمک امکانات و ترافیک آپارات محتوای خود را<br /> به نمایش می‌گذارند و در کمترین حالت 50 درصد از سود حاصل از نمایش موفق تبلیغات را <br />با آپارات شریک می‌شوند.
                </Descriptopnheader>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <a target={"_blank"} href="https://www.aparat.com/income/request">
                    <RegisterButton>
                        درخواست عضویت
                    </RegisterButton>
                </a>

            </Header>
            <Contentproducer>
                <Rightside>
                    <ImgContent src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/incomev2/icon-play-video.png" />
                    <ContentTitle>
                        توليد کننده محتوا کیست؟


                    </ContentTitle>
                    <ContentDescription>
                        تولید‌کننده محتوا فردی است که از صفر تا صد یک ویدیو را خودش بسازد و تولید<br /> کند، توجه داشته‌ باشید:<br />
                        - گیمر‌ها تنها در صورتی تولید‌کننده محسوب می‌شوند که از وبکم استفاده کنند.<br />
                        - صرفا ویرایش و تدوین (Edit & Mix) در ویدیوها یک کار تولیدی محسوب نمی‌شود.

                    </ContentDescription>


                    <a target={"_blank"} href="https://www.aparat.com/incomepolicy">
                        <ContentMoorButton>
                            جزییات بیشتر قوانین
                        </ContentMoorButton>
                    </a>
                </Rightside>
                <Leftside>
                    <ImgContentLeft src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/incomev2/producer-content.png" />

                </Leftside>

            </Contentproducer>
            <Producerincome>
                <Rightside>
                    <ImgContentRight src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/incomev2/income-percent.png" />



                </Rightside>
                <Leftside>
                    <Imgincome src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/incomev2/icon-letter.png" />
                    <ContentTitle2>
                        نحوه محاسبه درآمد تولید‌کننده‌ها


                    </ContentTitle2>

                    <ContentDescription2>
                        درآمد شما به عنوان تولید‌کننده براساس نمایش موفق تبلیغات در کانالتان محاسبه می‌شود. یعنی<br /> کافیست مخاطبانتان حداقل 4 ثانیه از هر تبلیغی را در کانالتان ببینند تا آن تبلیغ به عنوان یک نمایش<br /> موفق شمارش شود؛ در این حالت سود حاصل بصورت نصف،نصف! و یا بیشتر به نفع شمای تولیدکننده<br /> تقسیم می‌شود.<br />

                        برای عضویت در سیستم درآمد‌زایی به عنوان تولیدکننده باید شرایط زیر را داشته‌ باشید:<br />

                        حداقل 200 دنبال کننده <br />
                        حداقل 3 هزار ساعت نمایش در 3 ماه اخیر
                    </ContentDescription2>

                </Leftside>
            </Producerincome>
            <ReportIncome>
                <Rightside>
                    <ContentTitle3>
                        دسترسی به گزارشات درآمدی


                    </ContentTitle3>
                    <ContentDescription3>
                        بعد از عضویت در سیستم درآمدزایی، به شما یک پنل گزارش به صورت اختصاصی تعلق می‌گیرد که در آن<br /> به ریز اطلاعات مربوط به درآمد خود، دسترسی دارید.

                    </ContentDescription3>
                </Rightside>
                <Leftside>
                    <ImgContentLeft2 src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/incomev2/icome-chart.png" />


                </Leftside>

            </ReportIncome>
            <Footer>
                <FooterTitle>
                    در سرویس کسب درآمد آپارات عضو شوید

                </FooterTitle>
                <FooterDescription>
                    تولیدات ویدیویی خود را به اشتراک بگذارید و کسب درآمد کنید.


                </FooterDescription>
                <FooterButton>
                    <a href="mailto:income@aparat.com">
                        <ButtonContactUs>
                            تماس با ما
                        </ButtonContactUs>
                    </a>
                    <a target={"_blank"} href="https://www.aparat.com/income/request">
                        <SendRequestButton>
                            ارسال درخواست عضویت
                        </SendRequestButton>
                    </a>
                </FooterButton>

            </Footer>


        </div>
    );
}

export default IncomeComponent;