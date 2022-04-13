import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ToggleMenu from "./ToggleMenu";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import Test from './Test';
import Login from './Login';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { display } from "@mui/system";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';








const Header = styled.div`
width:100%;
height: 65px;
border-bottom: 1px solid #F5F5F9;
box-shadow: 0 4px 2px -2px #F5F5F9;

`;


const LogoAparat = styled.img`
width: 70px;
height: 30px;
position: relative;
right: 65px;
top: 15px;
cursor: pointer;


`;

const Nav = styled.div`
display: flex;
align-items: center;
`;


const ButtonLive = styled.button`
  width: 68px;
  height: 36px;
  border: 1px solid transparent;
  outline: none;
  border-radius: 100px;
      cursor: pointer;
      position: relative;
      top: 12px;
      right: 80px;
      background-color: white;
      &:hover{
    background-color: rgb(245,245,249);
}

      

`;

const SVGLIVE = styled.img`
  fill: rgb(111, 114, 133);
  width: 20px;
  height: 20px;
  position: relative;
  top: 2px;
 


`;

const TextLiveButton = styled.span`
  fill: rgb(111, 114, 133);
 font-size: 0.7rem;
 margin-right: 3px;

`;

const ContainerLive = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 
`;

const InputSearch = styled.input`
width: 580px;
height: 38px;
background-color: rgb(245,245,249);
outline: none;
border: none;
position: relative;
right: 235px;
 border-radius: 100px;
 display: flex;
 align-items: center;
  top: 11px;
 background-image: url('https://www.uplooder.net/img/image/35/95f5b4b127fdb0bdf3a22c06c3a5bbbf/svgexport-7.svg');
  background-repeat: no-repeat;
  background-position: 10px ;
  ::placeholder {
  color: blue;
  font-size: 0.9rem;
  color: #D8E0E9;
  padding: 20px;
}
  
  
  
`;

const UploadVideoButton = styled.button`
width: 120px;
  height: 35px;
  background-color:white;
  border: 1px solid #72CBF2;
  outline: none;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  top: 13px;
  right: 350px;
  

  
  
  
`;


const SpanUploadButton = styled.span`
 font-size: 1rem;
 color: #71CBF2;
 align-items: center;
 position: relative;
 bottom: 2px;
 font-weight: 700;

  
`;

const LoginButton = styled.button`
width: 120px;
height: 36px;
outline: none;
border-radius: 120px;
position: relative;
right: 400px;
border: none;
background-color:white ;
cursor: pointer;
&:hover{
    background-color: rgb(245,245,249);
}
top: 13px;
right: 360px;

  
`;

const LoginButton2 = styled.button`
width: 120px;
height: 45px;
outline: none;
border-radius: 120px;
position: relative;
right: 400px;
border: none;
background-color:white ;
cursor: pointer;
&:hover{
    background-color: rgb(245,245,249);
}
top: 13px;
right: 360px;

  
`;



const LoginIcon = styled.img`

width: 18px;
height: 18px;
  
`;


const LoginText = styled.span`

font-size: 0.9rem;
 color: #868999;
 position: relative;
 font-weight: 700;

  
`;



const Logincontainer = styled.div`

display: flex;
justify-content: center;
align-items: center;
  
`;




const ToggleIcon = styled.img`
position: relative;
top: 12px;
right: 40px;
width: 20px;
height: 20px;
&:hover{
    background-color: rgb(245,245,249);
}
cursor: pointer;


`;


const BorderContainer = styled.div`

border: 2px solid #F5F5F5;
width: 410px;
height: 356px;
position: relative;
left: 7px;


`;


const LoginPageText = styled.span`
line-height: 2;
color: rgb(41, 42, 51);
font-size: 1.1rem;
display: flex;
margin: 20px 15px 15px 0px;

`;

const RegisterButton = styled.button`
width: 373px;
height: 40px;
cursor: pointer;
background-color: #EA1D5D;
border: none;
border-radius:  5px;
position: relative;
right: 18px;

`;

const ButtonText = styled.span`
font-size: 1.1rem;
color: white;

`;

const Hr = styled.div`
border: 1px solid #F5F5F5;
position: relative;
top: 20%;


`;

const LoginContainer = styled.div`
position: relative;
top: 80px;

`;



const WelcomeText = styled.span`
display: block;
font-size: 1rem;
font-weight: 700;
position: relative;
top: 5px;
color: #ED145B;
`;






const Navbar = (props) => {



    let navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open2 = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handlelogout = () => {
        window.localStorage.clear();
    };
    


    
    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    let lastname = localStorage.getItem("Name");

    



    return (
        <div  >
            <div>
                <div>
                    
                    <Menu
                        sx={{
                            marginTop:"7px",
                            marginRight:"37px",
                            cursor: "pointer"
                          
                          }}
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open2}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem
                        sx={{
                            fontWeight:800,
                            color: "#ED145B",
                          
                          }}
                         onClick={handleClose}><span  onClick={handlelogout} >خروج از حساب کاربری </span></MenuItem>
                    </Menu>

                    <Dialog isOpen={showDialog} onDismiss={close} style={{ width: "400px", height: "541px", position: "relative", bottom: "36px" }}>
                        <img src="https://www.uplooder.net/img/image/57/28c366dc9bfa0a1cdaf9cc3589ac540f/svgexport-9.svg" onClick={close} style={{ cursor: "pointer", position: "relative", right: "405px", bottom: "25px", width: "20px", height: "20px" }} />
                        <BorderContainer>
                            <LoginPageText >
                                اگر در آپارات حساب کاربری ندارید، ثبت نام کنید:
                            </LoginPageText>




                            <Test />



                            <Hr />
                            <LoginContainer>
                                <LoginPageText>
                                    اگر در آپارات حساب کاربری دارید، وارد شوید:
                                </LoginPageText>
                                <Login />
                            </LoginContainer>

                        </BorderContainer>
                    </Dialog>
                </div>
            </div>


            <Header>


                <Nav>
                    <ToggleMenu />
                    <Link to={"/"}>
                        <LogoAparat src="https://www.uplooder.net/img/image/96/00be0fcf6a11bf1edccd5dec2ec32029/svgexport-3.svg" />
                    </Link>
                    <ButtonLive>
                        <ContainerLive>
                            <Link to={"/"}>
                                <SVGLIVE src="https://www.uplooder.net/img/image/89/8e34d7f559a4a283c5cb408cc88ddade/svgexport-4.svg" />
                            </Link>
                            <TextLiveButton>
                                121
                            </TextLiveButton>

                        </ContainerLive>



                    </ButtonLive>
                    <InputSearch placeholder="جستجوی ویدیوهای رویدادها، شخصیت‌ها و" />
                    <UploadVideoButton>
                        <SpanUploadButton>
                            + بارگذاری ویدیو
                        </SpanUploadButton>
                    </UploadVideoButton>


                    {lastname ?
                        <LoginButton2 onClick={handleClick}>
                            <Logincontainer>
                                <WelcomeText>
                                    {lastname}عزیز خوش آمدی
                                </WelcomeText>
                            </Logincontainer>


                        </LoginButton2>
                        :
                        <LoginButton>
                            <Logincontainer>
                                <LoginIcon src="https://www.uplooder.net/img/image/9/a315839d41dd98141c9ea9bfb6ce847e/svgexport-6.svg" />
                                <LoginText onClick={open}>ورود و ثبت نام </LoginText>
                            </Logincontainer>

                        </LoginButton>
                    }









                </Nav>


            </Header>

        </div>
    );
}

export default Navbar;


