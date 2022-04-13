import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import styled from "styled-components";
import Collapsible from 'react-collapsible';
import { Link } from "react-router-dom";








const CatergoryIcon = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 34px;


`;

const Ul = styled.ul`
list-style-type: none;

`;

const Sochial = styled.div`
 display: flex;
 align-items: center;

`;

const CategoryContainer = styled.div`
position: relative;
top: 55px;
padding-bottom: 30px;

`;
const OtherServise = styled.div`
position: relative;
top: 55px;

`;




const CatergoryIcon1 = styled.img`
width: 20px;
height: 20px;



`;

const ToggleIcon = styled.img`
position: relative;
top: 15px;
right: 40px;
width: 20px;
height: 20px;
&:hover{
    background-color: rgb(245,245,249);
}
cursor: pointer;


`;


const CatergoryIcon2 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 62px;


`;

const CatergoryIcon3 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 51px;



`;

const CatergoryIcon4 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 52px;



`;

const CatergoryIcon5 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 57px;



`;

const CatergoryIcon6 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 47px;



`;

const CatergoryIcon7 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 50px;



`;

const CatergoryIcon8 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 55px;



`;

const CatergoryIcon9 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 50px;


`;

const CatergoryIcon10 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 55px;


`;

const CatergoryIcon11 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 54px;


`;

const CatergoryIcon12 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 32px;


`;
const CatergoryIcon13 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 54px;


`;

const CatergoryIcon14 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 46px;


`;

const CatergoryIcon15 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 52px;


`;

const CatergoryIcon16 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 54px;


`;

const CatergoryIcon17 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 54px;


`;

const CatergoryIcon18 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 58px;


`;

const CatergoryIcon19 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 57px;


`;


const CatergoryIcon22 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 48px;


`;

const CatergoryIcon23 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 47px;


`;

const CatergoryIcon24 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 47px;


`;

const CatergoryIcon25 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 50px;


`;

const CatergoryIcon26 = styled.img`
width: 20px;
height: 20px;
position: relative;
left: 54px;


`;

const Border = styled.div`
border-bottom: 1px solid #F5F5F9;





`;



const CategoryName = styled.span`
        font-size: 0.95em;
    font-weight: 549;
    line-height: 2;
    white-space: nowrap;
    position: relative;
    left: 35px;


`;

const CategorySection = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     position: relative;
     cursor: pointer;
    background-color: #F5F5F9;
    top: 5px;
    width: 250px;
    height: 42px;

    
      
     
     

`;


const CategorySection2 = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     position: relative;
     left: 0px;
     cursor: pointer;
     :hover{
       background-color: #F5F5F9;
     }
     
    

`;

const CategorySection3 = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     position: relative;
    
     cursor: pointer;
     :hover{
       background-color: #F5F5F9;
     }
     
   

`;

const CategorySection4 = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     position: relative;
 
     cursor: pointer;
     :hover{
       background-color: #F5F5F9;
     }
     


`;

const CategorySection5 = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     position: relative;
  
     cursor: pointer;
     :hover{
       background-color: #F5F5F9;
     }
   

`;

const CategoryTitle = styled.span`
   font-size: 1em;
     position: relative;
    right: 50px;
    font-weight: 700;
    color: rgb(223, 15, 80);
    

`;

const Proposallogin = styled.span`
    max-width: none;
    font-size: 0.8em;
    font-weight: 300;
    color: rgb(111, 114, 133);
    position: relative;
    top: 60px;
    right: 31px;
    line-height: 2.2;
    

   

`;


const ContainerReadMoor = styled.div`
    position: relative;
    top: 20px;
    

`;

const VertocalBorder = styled.div`
  border: 1px solid #F5F5F9;
  height: 200px;
  position: relative;
  right: 8px;
  

`;


const Card = styled.div`
 
  width: 240px;
  height: 1270px;

`;

const Samandehimg = styled.img`
 
  width: 70px;
  height: 70px;
  margin-right: 42px;

`;



export default function ToggleMenu() {

  const [state, setState] = React.useState({

    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "240px", backgroundColor: "#FBFBFC"}}
      role="presentation"

      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Card>
        <Link to={"/"}>
        <CategorySection >
          <CatergoryIcon src="https://www.uplooder.net/img/image/15/0f1e217d24a54d82b2e1f5b9f39b9558/svgexport-8.svg" />
          <CategoryName style={{ position: "relative", right: "1pix" }} > صفحه نخست </CategoryName>
        </CategorySection>
        </Link>



        <CategoryTitle style={{ position: "relative", top: "40px" }}>
       
          دسته بندی ها
        </CategoryTitle>
        <Border style={{ marginRight: "20px", marginLeft: "20px" }} />


        <CategoryContainer>
          <Link to={"/movies"}>
          <CategorySection2 >
            <CatergoryIcon1 src="https://www.uplooder.net/img/image/5/3243c4dbf563c3dfcfc23b1038529a9f/svgexport-9.svg" />
            <CategoryName style={{ position: "relative", right: "15px" }}> سریال ها و فیلم های سینمایی </CategoryName>
          </CategorySection2>
          </Link>
          <br />

          <Link to={"/game"}>   
          <CategorySection3>
            <CatergoryIcon2 src="https://www.uplooder.net/img/image/62/a289cf001ddb9b8dd7a1c80a136b200a/svgexport-10.svg" />
            <CategoryName> گیم  </CategoryName>
          </CategorySection3>
          </Link>
          <br />

          <Link to={"/sport"}>   
          <CategorySection4>
            <CatergoryIcon3 src="https://www.uplooder.net/img/image/84/8478416d1eb09b9a665586e50ff4d5ba/svgexport-11.svg" />
            <CategoryName> ورزشی  </CategoryName>
          </CategorySection4>
          </Link>
          <br />

          <Link to={"/cartoon"}>  
          <CategorySection5>
            <CatergoryIcon4 src="https://www.uplooder.net/img/image/40/53fb6cd5faf32ff98ce53066c5d433eb/svgexport-12.svg" />
            <CategoryName>کارتون  </CategoryName>
          </CategorySection5>
          </Link>
          <br />

          <Collapsible height={"1000px"} trigger="نمایش بیشتر" triggerStyle={{ position: "relative", right: "70px", cursor: "pointer" }} >

            <ContainerReadMoor >
              <CategorySection5>
                <CatergoryIcon5 src="https://www.uplooder.net/img/image/65/51b608ea2117b0e59c977236bdbd9124/svgexport-13.svg" />
                <CategoryName>طنز  </CategoryName>
              </CategorySection5>
              <br />



              <CategorySection5>
                <CatergoryIcon6 src="https://www.uplooder.net/img/image/51/a20b713300653eba67475ccd5908f076/svgexport-14.svg" />
                <CategoryName>آموزشی  </CategoryName>
              </CategorySection5>
              <br />



              <CategorySection5>
                <CatergoryIcon7 src="https://www.uplooder.net/img/image/100/fc4e59b56a309c67d5fe790a6a65bffb/svgexport-15.svg" />
                <CategoryName>تفریحی  </CategoryName>
              </CategorySection5>
              <br />



              <CategorySection5>
                <CatergoryIcon8 src="https://www.uplooder.net/img/image/28/8592b44c0878d6af006eda1213c8bc6a/svgexport-16.svg" />
                <CategoryName>مذهبی  </CategoryName>
              </CategorySection5>
              <br />



              <CategorySection5>
                <CatergoryIcon9 src="https://www.uplooder.net/img/image/21/e961e2d59bbb6555e393e0b739cabbcb/svgexport-17.svg" />
                <CategoryName>موسیقی  </CategoryName>
              </CategorySection5>
              <br />





              <CategorySection5>
                <CatergoryIcon10 src="https://www.uplooder.net/img/image/62/75df22f24206d6b2801d10fc6f835a26/svgexport-18.svg" />
                <CategoryName>خبری  </CategoryName>
              </CategorySection5>
              <br />



              <CategorySection5>
                <CatergoryIcon11 src="https://www.uplooder.net/img/image/61/e6669a8525e4805d9103c26dd3db854a/svgexport-19.svg" />
                <CategoryName>سیاسی  </CategoryName>
              </CategorySection5>
              <br />



              <CategorySection5>
                <CatergoryIcon12 src="https://www.uplooder.net/img/image/39/1a5a30745dc570b69ce6f3a7f0fc14ee/svgexport-20.svg" />
                <CategoryName style={{ position: "relative", paddingRight: "5px" }}>علم و تکنولوژی   </CategoryName>
              </CategorySection5>
              <br />



              <CategorySection5>
                <CatergoryIcon13 src="https://www.uplooder.net/img/image/16/8ec402c5aca22226619c2adede4b0dcf/svgexport-21.svg" />
                <CategoryName>حوادث   </CategoryName>
              </CategorySection5>
              <br />



              <CategorySection5>
                <CatergoryIcon14 src="https://www.uplooder.net/img/image/37/c796f3db9f092bb2449073bcb69df06e/svgexport-22.svg" />
                <CategoryName>گردشگری   </CategoryName>
              </CategorySection5>
              <br />



              <CategorySection5>
                <CatergoryIcon15 src="https://www.uplooder.net/img/image/43/d354f46eb543a82f2daf70d358f43386/svgexport-23.svg" />
                <CategoryName>حیوانات  </CategoryName>
              </CategorySection5>
              <br />



              <CategorySection5>
                <CatergoryIcon16 src="https://www.uplooder.net/img/image/31/28968a61e8b7bb2dfb062cc222918440/svgexport-24.svg" />
                <CategoryName>متفرقه  </CategoryName>
              </CategorySection5>
              <br />



              <CategorySection5>
                <CatergoryIcon17 src="https://www.uplooder.net/img/image/63/a65573391a36e49955347228aa680db0/svgexport-25.svg" />
                <CategoryName>تبلیغات  </CategoryName>
              </CategorySection5>
              <br />



              <CategorySection5>
                <CatergoryIcon18 src="https://www.uplooder.net/img/image/3/d158b72f0cf61a802259e7303cd05e82/svgexport-26.svg" />
                <CategoryName>هنری  </CategoryName>
              </CategorySection5>
              <br />



              <CategorySection5>
                <CatergoryIcon19 src="https://www.uplooder.net/img/image/21/dd79acddde2fb292a3351520796838d9/svgexport-27.svg" />
                <CategoryName>بانوان  </CategoryName>
              </CategorySection5>
              <br />






            </ContainerReadMoor>

          </Collapsible>



          <CategoryTitle style={{ position: "relative", top: "40px" }}>
            دیگر سرویس ها
          </CategoryTitle>

          <OtherServise>

            <CategorySection5>
              <CatergoryIcon22 src="https://www.uplooder.net/img/image/11/25b4e070713dd03724b63a21f72f4863/svgexport-31.svg" />
              <CategoryName> لایو پلاس    </CategoryName>
            </CategorySection5>
            <br />

            <CategorySection5>
              <CatergoryIcon23 src="https://www.uplooder.net/img/image/57/ca4fc148e7beae6aa221f31703da4826/svgexport-32.svg" />
              <CategoryName>آپارات گیم    </CategoryName>
            </CategorySection5>
            <br />


            <CategorySection5>
              <CatergoryIcon24 src="https://www.uplooder.net/img/image/31/4d735b3f792753e21d6802fa2b8998aa/svgexport-4.svg" />
              <CategoryName>پخش زنده    </CategoryName>
            </CategorySection5>
            <br />


            <CategorySection5>
              <CatergoryIcon25 src="https://www.uplooder.net/img/image/88/77c5fbe38f6f52978fbd278a8ab33447/svgexport-33.svg" />
              <CategoryName>رویدادها    </CategoryName>
            </CategorySection5>
            <br />

            <Border style={{ margin: "20px" }} />

          </OtherServise>


          <Proposallogin>در آپارات وارد شوید تا ویدیوهای و کانال‌های بهتری<br /> بر اساس سلیقه شما پیشنهاد شود
          </Proposallogin>
          <br />
          <Proposallogin style={{ color: "rgb(5 163 232)" }}>
            وارد شوید
            <Border style={{ margin: "20px" }} />

          </Proposallogin>
          
          <Link to={"/app"}>
          <CategorySection5 style={{ position: "relative", top: "70px", right: "25px" }}>

            <CatergoryIcon26 src="https://www.uplooder.net/img/image/58/613938213ab89c240308835c2bfbfe61/svgexport-35.svg" />
            <CategoryName style={{ position: "relative", left: "40px" }} >آپارات در موبایل    </CategoryName>



          </CategorySection5>
          </Link>



          <CategoryTitle style={{ position: "relative", top: "120px" }}>
            دیگر صفحات آپارات
          </CategoryTitle>


          <Ul >
            <div style={{ display: "flex", position: "relative", top: "140px", alignItems: "center" }}>

              <div1 style={{ position: "relative", right: "20px" }}>
                <li>
                  <Link to={`/ad`}>
                  <CategorySection5>
                    <CategoryName>تبلیغات     </CategoryName>
                  </CategorySection5>
                  </Link>
                </li>
                <br />
                <li>
                <Link to={`/logo`}>
                  <CategorySection5>
                    <CategoryName>لوگو    </CategoryName>
                  </CategorySection5>
                  </Link>

                </li>
                <br />

                <li>
                <Link to={`/income`}>
                  <CategorySection5>
                    <CategoryName>درآمد زایی   </CategoryName>
                  </CategorySection5>
                  </Link>
                </li>
                <br />


                <li>
                  <a href="https://support.aparat.com/kb">
                  <CategorySection5>
                    <CategoryName>پشتیبانی   </CategoryName>
                  </CategorySection5>
                  </a>
                </li>
                <br />

              </div1>

              <VertocalBorder />




              <div2 style={{ position: "relative", right: "65px" }}>
                <li>
                  <Link to={`/contactus`}>
                  <CategorySection5>
                    <CategoryName>تماس با ما    </CategoryName>
                  </CategorySection5>
                  </Link>
                </li>
                <br />


                <li>

                  <CategorySection5>
                    <CategoryName>کانال های رسمی    </CategoryName>
                  </CategorySection5>
                </li>
                <br />


                <li>
                <Link to={`/policy`}>

                  <CategorySection5>
                    <CategoryName>قوانین    </CategoryName>
                  </CategorySection5>
                  </Link>
                </li>
                <br />

                <li>
                  <a href="https://job.sabaidea.com/">
                  <CategorySection5>
                    <CategoryName>به ما بپیوندید   </CategoryName>
                  </CategorySection5>
                  </a>

                </li>
                <br />

              </div2>

            </div>


          </Ul>



          <Sochial>
            <CategorySection5 style={{ position: "relative", top: "150px", right: "100px" }}>
            <a href="https://www.twitter.com/aparatcom">
              <CatergoryIcon src="https://www.uplooder.net/img/image/29/9f2dcbec056e1d8269de44fb6b00d2b5/svgexport-36.svg" />
              </a>

            </CategorySection5>

            <CategorySection5 style={{ position: "relative", top: "150px", right: "150px" }}>
              <a href="https://www.instagram.com/aparatcom.official">
              <CatergoryIcon src="https://www.uplooder.net/img/image/49/5b9b60cca42619b71b7323217745a12a/svgexport-37.svg" />
              </a>

            </CategorySection5>

          </Sochial>


        </CategoryContainer>




        <Samandehimg src="https://www.uplooder.net/img/image/66/e59320034a39f40ac5018b662abbf112/logo.png" style={{ position: "relative", top: "200px", right: "30px" }} />



      </Card>








    </Box>
  );

  return (
    <div  >
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <ToggleIcon  src="https://www.uplooder.net/img/image/82/0cc8284ebfb4ead65537512c3b986a9d/svgexport-2.svg" onClick={toggleDrawer(anchor, true)} />

          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}