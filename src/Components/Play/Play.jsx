import React,{useState} from "react";
import styled from "styled-components";


const TitlePlaylistText = styled.span`
    color: rgb(72, 75, 98);
    font-weight: 700;
    font-size: 1.1rem;
    position: relative;
    top: 40px;
    right: 70px;

   
    
`;
const Play = () => {
  
    const video = localStorage.getItem("Video");



    
  

    return (
        <div>
            <TitlePlaylistText>
                لیست های پخش 
            </TitlePlaylistText>

          
           {video}
          


        </div>
      );
}
 
export default Play;