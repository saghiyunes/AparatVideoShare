import React, { useState } from "react";
import styled from "styled-components";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import LoginComponent from './Login';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const BorderContainer = styled.div`

border: 2px solid #F5F5F5;
width: 410px;
height: 440px;
position: relative;
left: 7px;


`;

const Button = styled.button`
  width: 96px;
  height: 35px;
  border: 1px solid #BBBBBB;
  border-radius:2.5px;
  background-color: #F9F9F9;



`;

const ButtonText = styled.span`
display: flex;
position: relative;
top: 10px;
right: 25px;


`;

const ButtonText2 = styled.span`
display: flex;
position: relative;
right: 45%;
color: white;
font-size: 1rem;


`;



const RegisterText = styled.span`
display: flex;
font-size: 1.1rem;
font-weight: 500;
margin: 20px 20px 35px 0px;



`;

const EmailEnter = styled.span`
display: flex;
font-size: 1.1rem;
font-weight: 500;
margin: 20px 20px 20px 0px;



`;

const Input = styled.input`
width: 380px;
height: 36px;
position: relative;
right: 10px;
border: 1px solid #F0F0F0;
background-image: url('https://www.uplooder.net/img/image/27/565101004a48010083ade8b65bcceca6/svgexport-20.svg');
background-repeat: no-repeat;
background-position: 360px ;
::placeholder {
  color: blue;
  font-size: 1rem;
  color: black;
  padding: 30px;
  outline: none;
}

`;

const RegisterButton = styled.button`
width: 380px;
height: 37px;
background-color: rgb(234 29 93);
border: none;
border-radius: 5px;
margin: 25px 15px 20px 0px;
cursor: pointer;




`;




function Register(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("true")

    function handlesubmit(e) {
        e.preventDefault();
        localStorage.setItem("Name", JSON.stringify(name));
        localStorage.setItem("Email", JSON.stringify(email));
        localStorage.setItem("password", JSON.stringify(password));

        setLogin(!login);
        toast.success("کاربر عزیز ثبت نام شما با موفقیت انجام شد ");
        



    }







    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    


    return (
        <div>
            <div>



                <Dialog isOpen={showDialog} onDismiss={close} style={{ width: "400px", height: "541px", position: "relative", bottom: "36px" }}>
                    
               
                    <img src="https://www.uplooder.net/img/image/57/28c366dc9bfa0a1cdaf9cc3589ac540f/svgexport-9.svg" onClick={close} style={{ cursor: "pointer", position: "relative", right: "405px", bottom: "25px", width: "20px", height: "20px" }} />
                    
                    <BorderContainer>
                        <RegisterText>
                            ایجاد حساب کاربری
                        </RegisterText>
                        <form onSubmit={handlesubmit}>
                            <EmailEnter>
                                ایمیل را وارد کنید
                            </EmailEnter>

                            <Input
                                placeholder="ایمیل "
                                type='text'
                                onChange={(event) => setEmail(event.target.value)}
                            />


                            <EmailEnter>
                                نام  را وارد کنید
                            </EmailEnter>

                            <Input
                                placeholder="نام  "
                                type='text'
                                onChange={(event) => setName(event.target.value)}
                            />



                            <EmailEnter>
                                رمز عبور  را وارد کنید
                            </EmailEnter>

                            <Input
                                placeholder="رمز عبور  "
                                type='password'
                                onChange={(event) => setPassword(event.target.value)}
                            />

                            <RegisterButton >
                                <ButtonText2 >
                                    ثبت نام
                                </ButtonText2>

                            </RegisterButton>
                            <ToastContainer/>
                           






                        </form>



                    </BorderContainer>
                </Dialog>

                <button onClick={open}>open</button>
            </div>


        </div >
    );
}
export default Register;