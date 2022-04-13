import React from "react";
import styled from "styled-components";





const Div = styled.div`
height: 1390px;

    
`; 

const TextTitle = styled.h1`
text-align: center;
position: relative;
top: 30px;

    
`;

const Title = styled.h1`

color: #EA1D5D;
font-size: 30px;
float: right;
position: relative;
right: 110px;
top: 200px;
font-weight: 900;


    
`;

const Title2 = styled.h1`

color: #EA1D5D;
font-size: 30px;

position: relative;
right: 700px;
top: 200px;
font-weight: 900;
top: 200px;


    
`;

const Description1 = styled.h1`

font-size: 1.1em;
line-height: 2;

position: relative;
left: 455px;
top: 300px;
color: #6f7285;

    
`;

const Description2 = styled.h1`

font-size: 1.1em;
line-height: 2;

position: relative;
right: 700px;
top: 200px;
color: #6f7285;

    
`;

const Imgad = styled.img`

width: 557px;
height: 697px;
position: relative;
right: 700px;
box-shadow:0 10px 10px 10px #F0F0F0;
    
`;

const Imgad2 = styled.img`
position: relative;
left: 490px;
width: 530px;
height: 400px;
top: 500px;
`;

const WhyAdInAparat = () => {
    return ( 
        <Div>
            <TextTitle>
            چرا تبلیغات آپارات؟

            </TextTitle>
            <Title>
            با مشاهده آمار دقیق، عملکرد تبلیغات خود را مدیریت کنید

            </Title>
            <Description1>
            شما می‌توانید به‌ صورت لحظه‌ای، گزارش‌ها و آمارهای مختلفی از تبلیغات خودتان  مشاهده کنید.<br/> با این‌ کار می‌توانید تنظیمات تبلیغ خود را بهینه‌سازی کنید و نتایج بهتری به‌دست آورید
            </Description1>
            <Imgad src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/advertisev2/ads-feature-statistics-v2.png"/>

            <Imgad2 src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/landing/advertisev2/ad-price-statistics-v2.png"/>
            <Title2>
            قیمت هر بار نمایش را شما پیشنهاد می‌دهید!

            </Title2>
            <Description2>
            در سیستم تبلیغات آپارات، شما فردی هستید که قیمت هر نمایش تبلیغ خود را با توجه به<br/> بودجه کلی خود تعیین می‌کنید! قیمت هر بار تماشا در بخش تبلیغات "حین پخش ویدیو" <br/>از ۲۵ تومان شروع می‌شود و قیمت هر بار تماشا در بخش تبلیغات "ویدیوهای مشابه" از ۱ تومان<br/> شروع می‌شود.           
             </Description2>


        </Div>
     );
}
 
export default WhyAdInAparat ;