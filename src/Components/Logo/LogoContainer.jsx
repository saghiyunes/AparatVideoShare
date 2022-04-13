import React from "react";
import styled from "styled-components";


const Title = styled.h1`
  text-align  : center ;
  font-size: 1.3em;
  margin: 30px 0 30px 0 ;
`;

const Title2 = styled.h1`
  text-align  : center ;
  font-size: 1.3em;
  margin: 50px 0 30px 0 ;
`;

const Box = styled.div`
  width: 393px;
  height: 223px;
  border: 1px solid #E6E6E6;
  padding-right: 20px;
  


  
`;

const BoxContainer = styled.div`
display: flex;
justify-content: center;


  
`;

const Imgbox = styled.img`
width: 150px;
height: 54px;
margin-right: 90px;
margin-top: 50px;
  
`;

const TextBox = styled.h1`
text-align: center;
    color: #292a33;
    font-size: .9em;
    font-weight: 600;
    display: block;
    margin-top: 10px;
`;

const TextBox2 = styled.h1`
text-align: center;
    color: #f6f7fa;
    font-size: .9em;
    font-weight: 600;
    display: block;
    margin-top: 10px;

`;

const DOwnloadButton = styled.div`
border: 1px solid #292a33;
border-radius: 30px;
width: 150px;
height: 34px;
margin-right: 100px;
margin-top: 20px;

cursor: pointer;
color: black;


`;

const DOwnloadButton2 = styled.div`
border: 1px solid white;
border-radius: 30px;
width: 150px;
height: 34px;
margin-right: 100px;
margin-top: 20px;

cursor: pointer;


`;

const SvgDownload = styled.img`
width: 14px;
height: 14px;
margin-right: 45px;
margin-top: 9px;

cursor: pointer;

`;

const SvgDownload2 = styled.img`
width: 14px;
height: 14px;
margin-right: 45px;
margin-top: 9px;

cursor: pointer;
fill: #fff;

`;


const TextButton = styled.span`
color: #000;
    font-size: .85em;
    font-weight: 700;
    margin-right: 5px;
    
cursor: pointer;



`;

const TextButton2 = styled.span`
color: white;
    font-size: .85em;
    font-weight: 700;
    margin-right: 5px;
    
cursor: pointer;



`;

const GuideText = styled.p`

color: #6f7285;
font-size: .9em;
font-weight: 300;
 line-height: 2.5;
 margin-right: 120px;
 margin-top: 200px;


`;

const BoxIcon = styled.div`
float: left;
position: relative;
bottom: 290px;
left: 55px;


`;

const BoxIcon2 = styled.div`
float: left;
position: relative;
right: 235px;
bottom: 170px;



`;

const BoxIcon3 = styled.div`
float: left;
position: relative;
position: relative;
left: 55px;
bottom: 200px;




`;

const BoxIcon4 = styled.div`
float: left;
position: relative;
position: relative;
left: 55px;
bottom: 170px;




`;

const LogoBox = styled.img`
width: 280px;
height: 125px;
display: block;
padding: 5px;



`;













const LogoContainer = () => {
    return (
        <div>
            <Title>
                دانلود لوگو و آیکون آپارات

            </Title>
            <BoxContainer>
                <Box >
                    <Imgbox src="https://www.uplooder.net/img/image/92/89d89e2491a4107038f46ce782590090/svgexport-3.svg" />
                    <TextBox>
                        لوگو و آیکون با تایپوگرافی مشکی
                    </TextBox>
                    <a style={{ textDecoration: "none" }} href="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/logo/aparat-logo--color-black.zip">
                        <DOwnloadButton>
                            <SvgDownload2 src="https://www.uplooder.net/img/image/36/8fe23ac2bf0c4090c6cbd059c8d5bd64/svgexport-50-(1).svg" />
                            <TextButton>
                                دانلود فایل

                            </TextButton>

                        </DOwnloadButton>
                    </a>
                </Box>

                <Box style={{ backgroundColor: "#292A33" }}>
                    <Imgbox src="https://www.uplooder.net/img/image/57/a0113b5b90cb123a0e01d40e4648c6e0/Aparat-logo-1.svg" />
                    <TextBox2>
                        لوگو و آیکون با تایپوگرافی سفید
                    </TextBox2>
                    <a style={{ textDecoration: "none" }} href="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/logo/aparat-logo--color-white.zip">
                        <DOwnloadButton2>
                            <SvgDownload src="https://www.uplooder.net/img/image/36/8fe23ac2bf0c4090c6cbd059c8d5bd64/svgexport-50-(1).svg" />
                            <TextButton2>
                                دانلود فایل

                            </TextButton2>

                        </DOwnloadButton2>
                    </a>

                </Box>

                <Box>
                    <Imgbox src="https://www.uplooder.net/img/image/41/142b0a3fd6ea5603d7010a854cf527e0/Aparat-logo-2.svg" />
                    <TextBox>
                        لوگو و آیکون تایپوگرافیِ تک رنگ
                    </TextBox>
                    <a style={{ textDecoration: "none" }} href="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/logo/aparat-logo--black-white.zip">
                        <DOwnloadButton>
                            <SvgDownload src="https://www.uplooder.net/img/image/36/8fe23ac2bf0c4090c6cbd059c8d5bd64/svgexport-50-(1).svg" />
                            <TextButton>
                                دانلود فایل

                            </TextButton>

                        </DOwnloadButton>
                    </a>

                </Box>



            </BoxContainer>
            <Title2>
                راهنمای استفاده از لوگوی آپارات
            </Title2>
            <GuideText>
                <span style={{ color: "#605162", fontWeight: "600", fontSize: "1rem" }}>لوگو روی پس‌زمینه‌هایی با طیف خاکستری<br /></span>
                اگر پس‌زمینه در طیف خاکستری، به سمت مشکی و خاکستری آن بیشتر از ۵۰ درصد ‌باشد، باید از لوگوی سفید استفاده کنید.<br />

                اگر پس‌زمینه در طیف خاکستری، به سمت سفید و خاکستری‌ آن کم‌تر از ۵۰ درصد و روشن باشد، باید از لوگوی مشکی استفاده کنید.


            </GuideText>
            <BoxIcon>
                <LogoBox src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/branding/img1.png"/>
                <LogoBox src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/branding/img2.png"/>
                <LogoBox src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/branding/img3.png"/>


            </BoxIcon>

            <GuideText>
                <span style={{ color: "#605162", fontWeight: "600", fontSize: "1rem" }}>لوگو روی پس‌زمینه‌های تصویری<br /></span>
                به طور کلی برای نمایش لوگو روی تصاویر رنگی از دو حالت لوگو با رنگ اصلی و نوشته‌های سفید یا مشکی استفاده‌کنید. به‌ این ‌ترتیب که، لوگوی اصلی<br /> با نوشته سفید روی تصاویر تیره و لوگوی اصلی با نوشته مشکی روی تصاویر روشن، به‌کار برده‌شود.<br />



            </GuideText>
            <BoxIcon2>
                <LogoBox src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/branding/img4.png?4"/>
                <LogoBox src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/branding/img5.png"/>
            


            </BoxIcon2>


            <GuideText>
                <span style={{ color: "#605162", fontWeight: "600", fontSize: "1rem" }}>استفاده از لوگو تک‌رنگ<br /></span>
                گر لوگو با رنگ‌های اصلی روی پس‌زمینه رنگی به سختی دیده میشود می‌بایست از لوگو تک رنگ سفید یا مشکی استفاده کرد.<br />

                روی پس‌زمینه با تصویر رنگی روشن‌تر از لوگو تمام سفید (#FFFFFF) و روی پس‌زمینه با تصویر رنگی تیره‌ از لوگو تمام مشکی (#000000) استفاده کنید.



            </GuideText>
            <BoxIcon3>
                <LogoBox src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/branding/img6.png?4"/>
                <LogoBox src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/branding/img7.png"/>
            


            </BoxIcon3>


            <GuideText>
                <span style={{ color: "#605162", fontWeight: "600", fontSize: "1rem" }}>سایزهای مختلف لوگو<br /></span>
                رای استفاده لوگو در سایز بزرگ، لوگویی را که در آن متن "اشتراک ویدیو" دارد، به‌کار ببرید.<br />

                برای استفاده لوگو در سایز کوچک (جاهایی مانند هدر و فوتر) لوگویی را که در آن متن "اشتراک ویدیو" ندارد، به‌کار ببرید..<br />




            </GuideText>
            <BoxIcon4>
                <LogoBox src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/branding/img8.png"/>
                <LogoBox src="https://www.aparat.com/assets/web/ui/img-Ctw5E5mRMDuBPQnZlJA/branding/img9.png"/>
            


            </BoxIcon4>


        </div>
    );
}

export default LogoContainer;