import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Axios from 'Axios';
import Slider from "react-slick";
import Box from '@mui/material/Box';
import '../CategoriesVideoes/slick-theme.css';
import '../CategoriesVideoes/slick.css';
import { Link } from "react-router-dom";




const Container = styled.div`
width: 100%;
height: 108px;
background-color: #FBFBFC;
display: flex;
align-items: center;

`;

const CategoriesIcon = styled.img`
width: 56px;
height: 56px;
margin: 9px 11px ;


`;

const CategoryTitleText = styled.h1`
font-size: 1.3rem;
color: rgb(72 75 98);
margin-right: 10px;


`;


const IconContainer = styled.div`
 background-color: white;
 width: 80px;
 height: 80px;
 border-radius: 120px;
 margin: 25px 40px 20px 10px;


`;

const Border = styled.div`
width:100%;

border-bottom: 1px solid #EDEDEE;
box-shadow: 0 4px 35px -2px #EDEDEE;


`;

const Video = styled.div`
width: 214px;
height: 224px;
display: inline-block;






`;

const Img = styled.img`
width: 212px;
height: 122px;




`;

const VideoTitle = styled.span`
 display: flex;
 justify-content: end;
 position: relative;
 right: 10px;
 top: 7px;
 line-height: 1.3rem;

`;

const Channel = styled.div`
align-items: center;



`;

const ChannelName = styled.span`
display: flex;
 justify-content: start;
 position: relative;
 right: 10px;
 top: 15px;

`;


const ChannelTick = styled.img`
width: 15px;
height: 15px;
position: relative;
right: 65px;
bottom: 3px;

`;


const Statistics = styled.div`

`;

const VideovisitCont = styled.span`
 display: flex;
 justify-content: start;
 position: relative;
 right: 7px;


`;

const UploadDate = styled.span`

display: flex;
 justify-content: start;
 position: relative;
 right: 6px;
 
 


`;

const VideoContainer = styled.div`

 margin: 55px 40px 30px 20px;
 cursor: pointer;
 

`;

const BoxContainer = styled.div`
display: flex;
`;








const CartoonDetails = () => {


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,

    };



    const [Films, setFilms] = useState([])

    useEffect(() => {
        Axios.get('https://www.aparat.com/etc/api/videobyprofilecat/username/pixinema')
            .then(res => {
                console.log(res.data.videobyprofilecat)
                setFilms(res.data.videobyprofilecat)
            }).catch(err => console.log(err))


    }, [])


    return (
        <div>
            <Border>
                <Container>
                    <IconContainer>
                        <CategoriesIcon src="https://www.uplooder.net/img/image/58/1af307cd7d195813b48fee524d1ffd81/svgexport-16.svg" />
                    </IconContainer>
                    <CategoryTitleText>
                    کارتون
                    </CategoryTitleText>

                </Container>
            </Border>


            <div >
            {Films.map(film => (




                <Video   >
                    <VideoContainer>
                        <Link to={`/videos/${film.uid}`}>



                            <Box
                                sx={{
                                    width: 210,

                                    backgroundColor: 'white',





                                }}


                            >
                                <Img src={film.small_poster} style={{ width: "210px" }} />
                            </Box>



                            <VideoTitle>
                                {film.title}
                            </VideoTitle>
                        </Link>
                        <Channel>
                            <ChannelName>
                                {film.sender_name}
                            </ChannelName>
                            <ChannelTick src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                        </Channel>
                        <Statistics>
                            <VideovisitCont>
                                {film.visit_cnt}بار بازدید
                            </VideovisitCont>
                            <br />
                            <UploadDate>
                                اپلود در {film.create_date}

                            </UploadDate>

                        </Statistics>



                      
                       




                    </VideoContainer>
                    


                </Video>
               
                



            ))}
            </div>
         




        </div>
    );
}

export default CartoonDetails;