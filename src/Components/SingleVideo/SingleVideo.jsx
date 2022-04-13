import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useEffect } from "react";
import Axios from 'Axios';
import styled from "styled-components";
import Hearticon from './Hearticon.jsx';
import Comments from "./Comments.jsx";
import './video-react.css';
import Box from '@mui/material/Box';
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { WindowsFilled } from "@ant-design/icons";
import 'react-notifications/lib/notifications.css';








const Container = styled.div`
display: grid;
grid-template-columns: auto auto;

 
`;


const SimilarVideo = styled.div`
width: 400px;
height: 1640px;


 
`;




const VideoTitle = styled.span`
font-size: 1.42857em;
    font-weight: 400;
    text-align: right;
    line-height: 1.8;
    margin: 20px 40px 30px 0px ;
 
`;

const VideoCount = styled.div`
position: relative;
right: 20px;
top: 30px;


 
`;

const VideoCountTitle = styled.span`
    font-size: 1em;
    font-weight: 400;
    display: inline-block;
    margin-left: 0.5em;
    
    

 
`;

const VideoCountImg = styled.img`
width: 14px;
height: 14px;


 
`;

const VideoDetail = styled.div`

width: 920px;
height: 939px;

 
`;

const Channel = styled.div`
position: relative;
bottom: 35px;
display: flex;
align-items: center;

 
`;

const ProfilePhoto = styled.img`
position: relative;
right: 30px;

 
`;


const ChannelName = styled.span`
    font-weight: 400;
    color: rgb(72, 75, 98);
    font-size: 0.85em;
    position: relative;
    right: 50px;


 
`;
const LikeCount = styled.span`
    font-weight: 400;
    color: rgb(72, 75, 98);
    font-size: 0.70em;
    width: 21px;
    height: 27px;
    position: relative;
    right: 5px;
    cursor: pointer;
    top: 4px;



 
`;

const PlaylistImg = styled.img`
  position: relative;
    right: 405px;
    cursor: pointer;
    background-color: white;
   

  
 
`;

const DownloadImg = styled.img`
  position: relative;
    right: 435px;
    cursor: pointer;
    background-color: white;
    &:hover{
    background-color: rgb(245,245,249);
    border-radius: 120px;



    }


  
 
`;

const ShareImg = styled.img`
  position: relative;
    right: 465px;
    cursor: pointer;
    background-color: white;
    &:hover{
    background-color: rgb(245,245,249);
    border-radius: 120px;
 


    }

  
 
`;

const ReportImg = styled.img`
  position: relative;
    right: 495px;
    cursor: pointer;
    background-color: white;
    &:hover{
    background-color: rgb(245,245,249);
    border-radius: 120px;

    }

  
 
`;

const FollowButton = styled.div`
width: 104px;
height: 36px;
border: 1px solid transparent;
    outline: none;
    border-radius: 100px;
    white-space: nowrap;
    font-size: 0.9em;
    color: rgb(255, 255, 255);
    background-color: rgb(223, 15, 80);
  
    position: relative;
    right: 515px;
    cursor: pointer;
  

  
 
`;

const FollowText = styled.span`
font-family: inherit;
    font-size: 1.1rem;
    font-weight: 500;
    display: flex;
    margin-top: 7px;
    justify-content: center;

 
`;

const Border = styled.div`

border-bottom: 1px solid  rgb(245,245,249);
position: relative;
right: 25px;
bottom: 15px;
width: 97%;



  
 
`;


const Border2 = styled.div`

border-bottom: 1px solid  rgb(245,245,249);
position: relative;
right: 25px;
top: 35px;
bottom: 45px;
width: 97%;


  
 
`;

const Border3 = styled.div`

border-bottom: 1px solid  rgb(245,245,249);
position: relative;
right: 25px;
top: 45px;
width: 97%;

  
 
`;

const Border4 = styled.div`

border-bottom: 1px solid  rgb(245,245,249);
position: relative;
right: 25px;
top: 25px;
bottom: 25px;

  
 
`;

const Title = styled.div`


display: flex;
justify-content: space-between;
position: relative;
bottom: 30px;
left: 20px;


  
 
`;

const Like = styled.button`
    border: 1px solid transparent;
    outline: none;
    border-radius: 100px;
    width: 64px;
    height: 36px;
    display: flex;
    align-items: center;
    position: relative;
    right: 385px;
    background-color: white;
    &:hover{
    background-color: rgb(245,245,249);
    border-radius: 120px;
    }
    


 
`;







const DescriptionText = styled.span`
font-size: 0.9em;
    color: rgb(111, 114, 133);
    margin: 0px;
    line-height: 2.2;
    margin: 25px 25px 25px 0px;
    direction: rtl;
    align-items: center;



 
`;

const DataImg = styled.img`

width: 11px;
height: 11px;


 
`;


const CreateData = styled.span`
position: relative;
right: 7px;
color: rgb(111, 114, 133);





 
`;


const Date = styled.div`
 display: flex;
 align-items: center;
position: relative;
right: 20px;
top: 15px;
bottom: 15px;


 
`;

const UserProfilePhoto = styled.img`
width: 47px;
height: 47px;
border-radius: 120px;




 
`;

const UserEmailTitle = styled.span`
position: relative;
bottom: 30px;
right: 10px;
font-size: 0.9em;
    font-weight: 400;
    line-height: 1.4;
    color: rgb(72, 75, 98);



 
`;

const CommentDescription = styled.h1`
display: inline-block;
    vertical-align: middle;
    line-height: 2;
    white-space: normal;
    font-weight: 300;
    font-size: 0.85em;
    color: rgb(111, 114, 133);




 
`;

const CommentSection = styled.div`

margin: 25px 30px 25px 0px;



 
`;

const Iframe = styled.iframe`

margin: 20px 20px 20px 20px;
width: 900px;
height: 500px;


 
`;

const ChannelTickProfile = styled.img`

width: 15px;
height: 15px;
position: relative;
right: 55px;
bottom: 2px;

 
`;

const Ad = styled.div`

position: relative;
top: 25px;

 
`;

const ImgSideVideo = styled.img`
width: 170px;
height: 100px;
cursor: pointer;


 
`;

const VideoSideTitle = styled.span`
position: relative;
bottom: 100px;
color: black;
text-decoration: none;


 
`;

const VideoTitleContainer = styled.div`

display: block;
white-space: normal;
overflow-wrap: break-word;
  width: 210px;
  height: 18px;

 
`;




const ChannelNameSide = styled.span`
position: relative;
display: flex;
justify-content: start;
bottom: 95px;



 
`;

const VideoInformation = styled.div`
display: flex;
flex-direction: column;
position: relative;
right: 180px;



 
`;


const SimilarTitle = styled.h1`
    font-size: 1em;
    color: rgb(72, 75, 98);
    line-height: 1.2;
    margin-bottom: 25px;


 
`;

const TimeDuration = styled.span`
   
   font-size: 0.95em;
    font-weight: 400;
    line-height: 1.5;
    margin-right: auto;
    padding: 0px 0.25em;
    border-radius: 3px;
    color: white;
    background: rgba(0, 0, 0, 0.7);
    position: relative;
    bottom: 40px;
    float: left;
    left: 5px;
 
`;

const CountVisit = styled.span`
  display :flex ;
  position: relative;
bottom: 90px;

  
`;

const UploadSince = styled.span`


  
`;
const CommmentImg = styled.img`
width: 38px;
height: 38px;
position: relative;
border-radius: 50%;
top: 60px;
right: 30px;






`;


const ShreText = styled.h1`
font-weight: 700;
font-size: 1rem;


`;

const BorderB = styled.div`
border-bottom: 1px solid #F5F5F9;


`;

const Li = styled.li`
display: inline-block;


`;

const Circle = styled.div`
width: 38px;
height: 38px;
border: 1px solid #F5F5F9;
border-radius: 50%;
background-color: #0077B5;
position: relative;
right: 35px;
cursor: pointer;



`;

const UrlCircle = styled.div`
width: 30px;
height: 30px;
background-color: rgb(111, 114, 133);
border-radius: 50%;
position: relative;
top: 5px;
right: 5px;
cursor: pointer;



`;



const Circle2 = styled.div`
width: 38px;
height: 38px;
border: 1px solid #F5F5F9;
border-radius: 50%;
background-color: #0088CC;
position: relative;
right: 27px;
cursor: pointer;




`;



const Circle3 = styled.div`
width: 38px;
height: 38px;
border: 1px solid #F5F5F9;
border-radius: 50%;
background-color: #43D854;
position: relative;
right: 20px;
cursor: pointer;




`;



const Circle4 = styled.div`
width: 38px;
height: 38px;
border: 1px solid #F5F5F9;
border-radius: 50%;
background-color: #55ACEE;
position: relative;
right: 13px;
cursor: pointer;



`;



const Circle5 = styled.div`
width: 38px;
height: 38px;
border: 1px solid #F5F5F9;
border-radius: 50%;
background-color: #3B5998;
position: relative;
right: 7px;
cursor: pointer;



`;



const Circle6 = styled.div`
width: 38px;
height: 38px;
border: 1px solid #F5F5F9;
border-radius: 50%;
background-color: #484B62;
cursor: pointer;



`;



const Svgicon = styled.img`
width: 18px;
height: 18px;
position: relative;
top: 10px;
right: 10px;




`;


const InputLink = styled.div`
width: 400px;
height: 40px;
background-color: #F5F5F9;
border: none;
margin-top: 25px;
margin-right: 10px;


`;


const UrlText = styled.span`
font-size: 1rem;
color: #8A8A8B;
position: relative;
right: 157px;
bottom: 20px;



`;


const SvgUrlCircle = styled.img`
width: 17px;
height: 17px;
position: relative;
top: 8px;
right: 5px;
cursor: pointer;


`;

const CloseButton = styled.img`

cursor: pointer;
float: left;
position: relative;
bottom: 30px;
right: 30px;


`;

const SpanHover = styled.span`




`;

const Playlist = styled.div`

 
    



`;

const Share = styled.div`




`;

const Download = styled.div`




`;














const SingleVideo = () => {


    const params = useParams();

    const [dirins, setDirins] = useState([])
    const [mostvideos, setMostvideos] = useState([])
   













    useEffect(() => {
        const SingleVideoApiUrl = `https://www.aparat.com/etc/api/video/videohash/${params.videoid}`
        Axios.get(SingleVideoApiUrl)
            .then(res => {
                console.log(res.data.video)
                setDirins(res.data.video)
            }).catch(err => console.log(err))


    }, [params])







    useEffect(() => {
        const SingleVideoApiUrl = `https://www.aparat.com/etc/api/mostviewedvideos`
        Axios.get(SingleVideoApiUrl)
            .then(res3 => {
                console.log("category", res3.data.categoryvideos)
                setMostvideos(res3.data.mostviewedvideos)
            }).catch(err => console.log(err))


    }, [params])

    function secondsToHms(d) {
        d = Number(d);

        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);
    }


    const [showDialog, setShowDialog] = React.useState(false);
    const open = () => setShowDialog(true);
    const close = () => setShowDialog(false);

    function CopyLink() {
        navigator.clipboard.writeText(window.location.href);

    }

  
   

    const Pageurl = location.href
    const Whatsappapi = `https://wa.me/?text=${Pageurl}`;
    const TelegramApi = `https://t.me/share/url?url=${Pageurl}`;
    const Twitterapi   = `https://twitter.com/intent/tweet?text=${Pageurl}`;
   const  FacebookApi   = `https://www.facebook.com/share.php?u=${Pageurl}`;
   const  LinkedinApi   = `https://www.linkedin.com/shareArticle?mini=true&url=${Pageurl}`;

    
   function handlesubmit(e) {
    e.preventDefault();
    localStorage.setItem("Video", JSON.stringify(dirins));



    
 

 
    



}

    return (
        <div key={dirins.id} >
            <Container>


                <VideoDetail>
                    <Iframe src={dirins.frame} >
                    </Iframe>



                    <Title>
                        <VideoTitle>{dirins.title}</VideoTitle>
                        <VideoCount>
                            <VideoCountTitle>{dirins.visit_cnt}</VideoCountTitle>
                            <VideoCountImg src="https://www.uplooder.net/img/image/9/bc924795649abcc744ae936fefe5e4cc/svgexport-29.svg" />
                        </VideoCount>
                    </Title>

                    <Channel>
                        <ProfilePhoto src={dirins.profilePhoto} />
                        <ChannelName>{dirins.sender_name}</ChannelName>
                        <ChannelTickProfile src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />
                        <Like>
                            <Hearticon />
                            <LikeCount>{dirins.like_cnt}</LikeCount>
                        </Like>
                        <Playlist>
                            <PlaylistImg onClick={handlesubmit} className="container" src="https://www.uplooder.net/img/image/87/fa5ea4dfb3aabce418ca2ebf9a3bf098/svgexport-37.svg" />
                            <SpanHover className="change ">
                                افزودن به لیست پخش
                            </SpanHover>
                        </Playlist>


                        <Download>
                            <DownloadImg className="container2" src="https://www.uplooder.net/img/image/83/49e69f10e84673c5abd6bec5591e045f/svgexport-38.svg" />
                            <SpanHover className="change2 ">
                                دانلود ویدیو
                            </SpanHover>
                        </Download>


                        <Share>
                        <ShareImg className="container3" onClick={open} src="https://www.uplooder.net/img/image/4/01a912b1eb4704408b9c5bbf908497e3/svgexport-39.svg" />

                        <SpanHover className=" change3">
                            اشتراک گذاری
                        </SpanHover>
                        </Share>

                        <ReportImg src="https://www.uplooder.net/img/image/72/fe4dbc48d72f91bdfa3fe9a7022784a8/svgexport-40.svg" />
                        <FollowButton>
                            <FollowText>
                                + دنبال کردن
                            </FollowText>

                        </FollowButton>
                    </Channel>
                    <Border />
                    <DescriptionText>
                        {dirins.description}
                    </DescriptionText>
                    <br />
                    <Date>
                        <DataImg src="https://www.uplooder.net/img/image/73/ee4eae19f582896ed70584ff52f2ff0d/svgexport-41.svg" />
                        <CreateData>
                            اپلود شده در تاریخ  {dirins.create_date}
                        </CreateData>
                    </Date>
                    <Border2 />
                    <CommmentImg src="https://www.aparat.com/public/public/aparat/img/global/avatar-is-channel.png" />
                    <Comments />


                    <Border3 />
                    <Dialog style={{ width: "420px", height: "263px" }} isOpen={showDialog} onDismiss={close}>

                        <CloseButton onClick={close} src="https://www.uplooder.net/img/image/48/eb703e03ad540c977423cba29246a6e2/svgexport-9-(3).svg" />



                        <ShreText>
                            اشتراک در شبکه های اجتماعی
                        </ShreText>
                        <BorderB>

                        </BorderB>
                        <ul>


                            <Li>

                                <Circle6>
                                    <Svgicon src="https://www.uplooder.net/img/image/47/50a041c5b951bfdbdf4541c9cbf01e30/svgexport-40.svg" />

                                </Circle6>
                            </Li>
                            <a target={"_blank"} >


                                <Li>
                                <a target={"_blank"} href={FacebookApi}>
                                    <Circle5>
                                        <Svgicon src="https://www.uplooder.net/img/image/30/fca9410e099f41781c489b7af26a3be3/svgexport-41.svg" />

                                    </Circle5>
                                    </a>
                                </Li>
                            </a>
                            <Li>
                            <a target={"_blank"} href={Twitterapi}>
                                <Circle4>
                                    <Svgicon src="https://www.uplooder.net/img/image/29/d4e47f643a894cd4236ea3ed97efeab0/svgexport-42.svg" />

                                </Circle4>
                                </a>
                            </Li>
                            <Li>
                                <a target={"_blank"} href={Whatsappapi}>
                                <Circle3 >
                                    <Svgicon  src="https://www.uplooder.net/img/image/42/61a7a3c40207ef105414cd2a060d8261/svgexport-43.svg" />

                                </Circle3>
                                </a>
                            </Li>
                            <Li>
                            <a target={"_blank"} href={TelegramApi}>
                                <Circle2>
                                    <Svgicon src="https://www.uplooder.net/img/image/48/80ebf53eecbedd1f09593e1f256c39fc/svgexport-44.svg" />

                                </Circle2>
                                </a>
                            </Li>
                            <Li>
                            <a target={"_blank"} href={LinkedinApi}>
                                <Circle>
                                    
                                    <Svgicon src="https://www.uplooder.net/img/image/87/a08d82ba18e1502612cccdffbf88ab26/svgexport-45.svg" />

                                </Circle>
                                </a>
                            </Li>
                            

                        </ul>

                        <InputLink>
                            <UrlCircle>
                                <SvgUrlCircle onClick={CopyLink} src="https://www.uplooder.net/img/image/19/c08f1996af3675641c4bc5b1ff20864b/svgexport-48.svg" />

                            </UrlCircle>
                            <UrlText>{window.location.href}</UrlText>
                        </InputLink>

                    </Dialog>












                </VideoDetail>
                <SimilarVideo>
                    <Ad>
                        <img src="https://static.cdn.asset.filimo.com/vision-file/a6162c1a-37d3-43a6-bb8b-a2466860108a-banner_ad.gif" />
                        <img src="https://static.cdn.asset.filimo.com/vision-file/02a44523-6ce2-4109-8f0c-f543008861b0-banner_ad.gif" />
                        <img src="https://static.cdn.asset.filimo.com/vision-file/2615f350-82a7-4d6e-9257-cea62fef8a7d-banner_ad.gif" />
                    </Ad>
                    <br />
                    <br />
                    <br />
                    <br />

                    <SimilarTitle >
                        ویدیوهای مشابه
                    </SimilarTitle>

                    {mostvideos.map(mostvideo => (

                        <Box
                            sx={{
                                width: 170,
                                height: 100,
                                marginTop: "5px",


                            }}

                        >
                            <Link to={`/videos/${mostvideo.uid}`}>
                                <ImgSideVideo src={mostvideo.small_poster} />
                            </Link>
                            <TimeDuration>{secondsToHms(mostvideo.duration)}</TimeDuration>
                            <VideoInformation>
                                <VideoTitleContainer>
                                    <Link to={`/videos/${mostvideo.uid}`}>
                                        <VideoSideTitle> {mostvideo.title}</VideoSideTitle>
                                    </Link>

                                    <ChannelNameSide>{mostvideo.username}</ChannelNameSide>
                                    <CountVisit>{(mostvideo.visit_cnt).toLocaleString()} هزار بازدید</CountVisit>

                                </VideoTitleContainer>

                            </VideoInformation>
                        </Box>



                    ))}




                </SimilarVideo>

            </Container>





        </div>

    );
}

export default SingleVideo;

