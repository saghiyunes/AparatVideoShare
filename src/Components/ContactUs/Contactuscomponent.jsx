import React from "react";
import styled from "styled-components";


const Text = styled.p`
    color: #6f7285;
    font-size: 1em;
    font-weight: 700;
    line-height: 2.2;
    margin: 30px 90px 0px 0px;
}

    
`;
const Contactuscomponent = () => {
    return (  
        <div>
            <Text>
            برای تماس با پشتیبانی آپارات تنها از طریق ارسال تیکت در آدرس <a style={{textDecoration:"none"}} target={"_blank"} href="https://support.aparat.com/kb"><span style={{color:"#05a3e8"}}>support.aparat.com</span> </a>استفاده کنید. برای ارسال تیکت، دسته‌بندی مناسب موضوع خود را انتخاب کرده و فرم‌های مربوطه را با دقت پر کنید. با تشکر از شما
            </Text>

        </div>
    );
}
 
export default Contactuscomponent ;