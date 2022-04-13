import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Slider from "react-slick";
import Axios from 'Axios';
import Box from '@mui/material/Box';
import '../Home/slick-theme.css'
import '../Home/slick.css'
import { Link } from "react-router-dom";






const Container = styled.div`
 
`;

const ChannelProfile = styled.div`
display: flex;
align-items: center;
margin: 25px 30px 25px 0px;
cursor: pointer;


`;


const ChannelNameProfile = styled.span`
margin-right: 10px;

`;

const ChannelTickProfile = styled.img`
width: 18px;
height: 18px;
margin-right: 7px;



`;

const ChannelTickProfile2 = styled.img`
width: 18px;
height: 18px;




`;

const Video1 = styled.div`
margin: 0px 30px 0px 30px;
cursor: pointer;


`;

const Video = styled.div`

`;

const Hr = styled.div`
border-bottom: 1px solid #F5F5F9;
margin: 50px 30px 0px 30px ;


`;

const Img = styled.img`



`;

const VideoTitle = styled.span`
 display: flex;
 justify-content: end;
 position: relative;
 right: 10px;
 top: 7px;

`;

const VideoTitle2 = styled.span`
 display: flex;
 position: relative;
 direction: rtl;
 right: 10px;
 top: 7px;

`;

const Channel = styled.div`
align-items: center;



`;

const ChannelName = styled.span`
display: flex;
 justify-content: end;
 position: relative;
 right: 10px;
 top: 15px;

`;

const ChannelTick = styled.img`
width: 18px;
height: 18px;
position: relative;
left: 50px;
bottom: 2px;

`;


const ChannelTick2 = styled.img`
width: 18px;
height: 18px;
position: relative;
left: 20px;
bottom: 2px;

`;

const ChannelTick3 = styled.img`
width: 18px;
height: 18px;
position: relative;
left: 40px;
bottom: 2px;

`;

const Statistics = styled.div`

`;

const VideovisitCont = styled.span`
 display: flex;
 justify-content: end;
 position: relative;
 right: 10px;
 top: 5px;

`;

const UploadDate = styled.span`

display: flex;
 justify-content: end;
 position: relative;
 right: 5px;

`;

const ButtonArrow = styled.button`

background-color: white;
border-radius: 120px;
position: relative;
width: 46px;
height: 46px;
bottom: 100px;
border: 1px solid #EEEFF4;
cursor: pointer;


`;


const ArrowButtonImg = styled.img`
background-color: white;
width: 27px;
height: 27px;
position: relative;
top: 3px;


`;













const Main = () => {

    const [dirins, setDirins] = useState([])
    const [zoomits, setZoomits] = useState([])
    const [zoomgs, setZoomgs] = useState([])
    const [sports, setSports] = useState([])
    const [Gamians, setGamians] = useState([])
    const [mobonews, setMobonews] = useState([])
    const [jjtvns, setJjtvns] = useState([])
    const [khodrobanks, setKhodrobanks] = useState([])
    const [noviniranas, setNoviniranas] = useState([])








    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, }}
                onClick={onClick}

            >

                <ButtonArrow>
                    <ArrowButtonImg src='https://www.uplooder.net/img/image/41/7d6ef100de47fa4ce334b38c403342a9/svgexport-30-(1).svg' />
                </ButtonArrow>
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", backgroundColor: "rgb(255 255 255)" }}
                onClick={onClick}
            />
        );
    }



    useEffect(() => {
        Axios.get('https://www.aparat.com/etc/api/videoByUser/username/dirindirin/perpage/10')
            .then(res => {
                console.log(res.data.videobyuser)
                setDirins(res.data.videobyuser)
            }).catch(err => console.log(err))


    }, [])

    useEffect(() => {
        Axios.get('https://www.aparat.com/etc/api/videoByUser/username/zoomit/perpage/10')
            .then(res => {
                console.log(res.data.videobyuser)
                setZoomits(res.data.videobyuser)
            }).catch(err => console.log(err))


    }, [])

    useEffect(() => {
        Axios.get('https://www.aparat.com/etc/api/videoByUser/username/zoomg/perpage/10')
            .then(res => {
                console.log(res.data.videobyuser)
                setZoomgs(res.data.videobyuser)
            }).catch(err => console.log(err))


    }, [])

    useEffect(() => {
        Axios.get('https://www.aparat.com/etc/api/videoByUser/username/AparatSport/perpage/10')
            .then(res => {
                console.log(res.data.videobyuser)
                setSports(res.data.videobyuser)
            }).catch(err => console.log(err))


    }, [])

    useEffect(() => {
        Axios.get('https://www.aparat.com/etc/api/videoByUser/username/TheGamian/perpage/10')
            .then(res => {
                console.log(res.data.videobyuser)
                setGamians(res.data.videobyuser)
            }).catch(err => console.log(err))


    }, [])

    useEffect(() => {
        Axios.get('https://www.aparat.com/etc/api/videoByUser/username/mobonews/perpage/10')
            .then(res => {
                console.log(res.data.videobyuser)
                setMobonews(res.data.videobyuser)
            }).catch(err => console.log(err))


    }, [])

    useEffect(() => {
        Axios.get('https://www.aparat.com/etc/api/videoByUser/username/jjtvn.ir/perpage/10')
            .then(res => {
                console.log(res.data.videobyuser)
                setJjtvns(res.data.videobyuser)
            }).catch(err => console.log(err))


    }, [])

    useEffect(() => {
        Axios.get('https://www.aparat.com/etc/api/videoByUser/username/novinirana/perpage/10')
            .then(res => {
                console.log(res.data.videobyuser)
                setNoviniranas(res.data.videobyuser)
            }).catch(err => console.log(err))


    }, [])


    useEffect(() => {
        Axios.get('https://www.aparat.com/etc/api/videoByUser/username/khodrobank/perpage/10')
            .then(res => {
                console.log(res.data.videobyuser)
                setKhodrobanks(res.data.videobyuser)
            }).catch(err => console.log(err))


    }, [])










    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };





    return (

        <Container>

            <div1 >
                <ChannelProfile>
                    <Stack direction="row" spacing={2}>
                        <Avatar

                            src="https://static.cdn.asset.aparat.com/profile-photo/443066-m.jpg"
                            sx={{ width: 40, height: 40, position: "relative", }}
                        />


                    </Stack>
                    <ChannelNameProfile>
                        دیرین دیرین
                    </ChannelNameProfile>
                    <ChannelTickProfile src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                </ChannelProfile>




                <Video1 >
                    <Slider {...settings}>

                        {dirins.map(dirin => (



                            <Video  >

                                <Link to={`/videos/${dirin.uid}`}>

                                    <Box
                                        sx={{
                                            width: 178,

                                            backgroundColor: 'white'




                                        }}


                                    >
                                        <Img src={dirin.small_poster} style={{ width: "210px" }} />
                                    </Box>


                                    <VideoTitle>
                                        {dirin.title}
                                    </VideoTitle>
                                </Link>
                                <Channel>
                                    <ChannelName>
                                        {dirin.sender_name}
                                    </ChannelName>
                                    <ChannelTick src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                                </Channel>
                                <Statistics>
                                    <VideovisitCont>
                                        {dirin.visit_cnt}بار بازدید
                                    </VideovisitCont>
                                    <br />
                                    <UploadDate>
                                        {dirin.create_date}اپلود در

                                    </UploadDate>

                                </Statistics>















                            </Video>


                        ))}

                    </Slider>

                </Video1>
            </div1>
            <Hr />

            <div2 >
                <ChannelProfile>
                    <Stack direction="row" spacing={2}>
                        <Avatar

                            src="https://static.cdn.asset.aparat.com/profile-photo/11673-m.jpg"
                            sx={{ width: 40, height: 40, position: "relative", }}
                        />


                    </Stack>
                    <ChannelNameProfile>
                        زومیت - دنیای فناوری
                    </ChannelNameProfile>
                    <ChannelTickProfile src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                </ChannelProfile>




                <Video1 >
                    <Slider {...settings}>

                        {zoomits.map(zoomit => (


                            <Video  >


                                <Link to={`/videos/${zoomit.uid}`}>
                                    <Box
                                        sx={{
                                            width: 178,

                                            backgroundColor: 'white'




                                        }}


                                    >
                                        <Img src={zoomit.small_poster} style={{ width: "210px" }} />
                                    </Box>


                                    <VideoTitle2>
                                        {zoomit.title}
                                    </VideoTitle2>
                                </Link>
                                <Channel>
                                    <ChannelName>
                                        {zoomit.sender_name}
                                    </ChannelName>
                                    <ChannelTick style={{ position: "relative", left: "60px" }} src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                                </Channel>
                                <Statistics>
                                    <VideovisitCont>
                                        {zoomit.visit_cnt}بار بازدید
                                    </VideovisitCont>
                                    <br />
                                    <UploadDate>
                                        {zoomit.create_date}اپلود در

                                    </UploadDate>

                                </Statistics>















                            </Video>


                        ))}

                    </Slider>

                </Video1>
            </div2>
            <Hr />

            <div3 >
                <ChannelProfile>
                    <Stack direction="row" spacing={2}>
                        <Avatar

                            src="https://static.cdn.asset.aparat.com/profile-photo/456905-m.jpg"
                            sx={{ width: 40, height: 40, position: "relative", }}
                        />


                    </Stack>
                    <ChannelNameProfile>
                        زومجی - سرگرمی زیر ذره بین
                    </ChannelNameProfile>
                    <ChannelTickProfile src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                </ChannelProfile>




                <Video1 >
                    <Slider {...settings}>

                        {zoomgs.map(zoomg => (


                            <Video  >


                                <Link to={`/videos/${zoomgs.uid}`}>
                                    <Box
                                        sx={{
                                            width: 178,

                                            backgroundColor: 'white'




                                        }}


                                    >
                                        <Img src={zoomg.small_poster} style={{ width: "210px", height: "120px" }} />
                                    </Box>


                                    <VideoTitle2>
                                        {zoomg.title}
                                    </VideoTitle2>
                                </Link>
                                <Channel>
                                    <ChannelName>
                                        {zoomg.sender_name}
                                    </ChannelName>
                                    <ChannelTick2 style={{ position: "relative", right: "90px" }} src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                                </Channel>
                                <Statistics>
                                    <VideovisitCont>
                                        {zoomg.visit_cnt}بار بازدید
                                    </VideovisitCont>
                                    <br />
                                    <UploadDate>
                                        {zoomg.create_date}اپلود در

                                    </UploadDate>

                                </Statistics>















                            </Video>


                        ))}

                    </Slider>

                </Video1>
            </div3>
            <Hr />

            <div4 >
                <ChannelProfile>
                    <Stack direction="row" spacing={2}>
                        <Avatar

                            src="https://static.cdn.asset.aparat.com/profile-photo/9990286-995424-m.jpg"
                            sx={{ width: 40, height: 40, position: "relative", }}
                        />


                    </Stack>
                    <ChannelNameProfile>
                        اپارات اسپرت
                    </ChannelNameProfile>
                    <ChannelTickProfile src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                </ChannelProfile>




                <Video1 >
                    <Slider {...settings}>

                        {sports.map(sport => (


                            <Video  >


                                <Link to={`/videos/${sport.uid}`}>
                                    <Box
                                        sx={{
                                            width: 178,

                                            backgroundColor: 'white'




                                        }}


                                    >
                                        <Img src={sport.small_poster} style={{ width: "210px" }} />
                                    </Box>


                                    <VideoTitle2>
                                        {sport.title}
                                    </VideoTitle2>
                                </Link>
                                <Channel>
                                    <ChannelName>
                                        {sport.sender_name}
                                    </ChannelName>
                                    <ChannelTick style={{ position: "relative", left: "110px" }} src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                                </Channel>
                                <Statistics>
                                    <VideovisitCont>
                                        {sport.visit_cnt}بار بازدید
                                    </VideovisitCont>
                                    <br />
                                    <UploadDate>
                                        {sport.create_date}اپلود در

                                    </UploadDate>

                                </Statistics>















                            </Video>


                        ))}

                    </Slider>

                </Video1>
            </div4>
            <Hr />

            <div5 >
                <ChannelProfile>
                    <Stack direction="row" spacing={2}>
                        <Avatar

                            src="https://static.cdn.asset.aparat.com/profile-photo/8699839-456099-m.jpg"
                            sx={{ width: 40, height: 40, position: "relative", }}
                        />


                    </Stack>
                    <ChannelNameProfile>
                        گیمین | Gamian
                    </ChannelNameProfile>
                    <ChannelTickProfile src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                </ChannelProfile>




                <Video1 >
                    <Slider {...settings}>

                        {Gamians.map(Gamian => (


                            <Video  >


                                <Link to={`/videos/${Gamian.uid}`}>
                                    <Box
                                        sx={{
                                            width: 178,

                                            backgroundColor: 'white'




                                        }}


                                    >
                                        <Img src={Gamian.small_poster} style={{ width: "210px" }} />
                                    </Box>


                                    <VideoTitle2>
                                        {Gamian.title}
                                    </VideoTitle2>
                                </Link>
                                <Channel>
                                    <ChannelName>
                                        {Gamian.sender_name}
                                    </ChannelName>
                                    <ChannelTick style={{ position: "relative", left: "90px" }} src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                                </Channel>
                                <Statistics>
                                    <VideovisitCont>
                                        {Gamian.visit_cnt}بار بازدید
                                    </VideovisitCont>
                                    <br />
                                    <UploadDate>
                                        {Gamian.create_date}اپلود در

                                    </UploadDate>

                                </Statistics>















                            </Video>


                        ))}

                    </Slider>

                </Video1>
            </div5>
            <Hr />

            <div6 >
                <ChannelProfile>
                    <Stack direction="row" spacing={2}>
                        <Avatar

                            src="https://static.cdn.asset.aparat.com/profile-photo/802491-m.jpg"
                            sx={{ width: 40, height: 40, position: "relative", }}
                        />


                    </Stack>
                    <ChannelNameProfile>
                        موبونیوز
                    </ChannelNameProfile>
                    <ChannelTickProfile src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                </ChannelProfile>




                <Video1 >
                    <Slider {...settings}>

                        {mobonews.map(mobonew => (


                            <Video  >


                                <Link to={`/videos/${mobonew.uid}`}>
                                    <Box
                                        sx={{
                                            width: 178,

                                            backgroundColor: 'white'




                                        }}


                                    >
                                        <Img src={mobonew.small_poster} style={{ width: "210px" }} />
                                    </Box>


                                    <VideoTitle2>
                                        {mobonew.title}
                                    </VideoTitle2>
                                </Link>
                                <Channel>
                                    <ChannelName>
                                        {mobonew.sender_name}
                                    </ChannelName>
                                    <ChannelTick src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                                </Channel>
                                <Statistics>
                                    <VideovisitCont>
                                        {mobonew.visit_cnt}بار بازدید
                                    </VideovisitCont>
                                    <br />
                                    <UploadDate>
                                        {mobonew.create_date}اپلود در

                                    </UploadDate>

                                </Statistics>















                            </Video>


                        ))}

                    </Slider>

                </Video1>
            </div6>
            <Hr />

            <div7 >
                <ChannelProfile>
                    <Stack direction="row" spacing={2}>
                        <Avatar

                            src="https://static.cdn.asset.aparat.com/profile-photo/860573-m.jpg"
                            sx={{ width: 40, height: 40, position: "relative", }}
                        />


                    </Stack>
                    <ChannelNameProfile>
                        کانال ایرانیان و فارسی زبانان سراسر دنیا
                    </ChannelNameProfile>
                    <ChannelTickProfile src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                </ChannelProfile>




                <Video1 >
                    <Slider {...settings}>

                        {jjtvns.map(jjtvn => (


                            <Video  >


                                <Link to={`/videos/${jjtvn.uid}`}>
                                    <Box
                                        sx={{
                                            width: 178,

                                            backgroundColor: 'white'




                                        }}


                                    >
                                        <Img src={jjtvn.small_poster} style={{ width: "210px" }} />
                                    </Box>


                                    <VideoTitle2>
                                        {jjtvn.title}
                                    </VideoTitle2>
                                </Link>
                                <Channel style={{ textOverflow: "ellipsis" }}>
                                    <ChannelName>
                                        کانال شبکه جام جم
                                    </ChannelName>
                                    <ChannelTick style={{ position: "relative", left: "90px" }} src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                                </Channel>
                                <Statistics>
                                    <VideovisitCont>
                                        {jjtvn.visit_cnt}بار بازدید
                                    </VideovisitCont>
                                    <br />
                                    <UploadDate>
                                        {jjtvn.create_date}اپلود در

                                    </UploadDate>

                                </Statistics>















                            </Video>


                        ))}

                    </Slider>

                </Video1>
            </div7>
            <Hr />

            <div8 >
                <ChannelProfile>
                    <Stack direction="row" spacing={2}>
                        <Avatar

                            src="https://static.cdn.asset.aparat.com/profile-photo/2782499-m.jpg"
                            sx={{ width: 40, height: 40, position: "relative", }}
                        />


                    </Stack>
                    <ChannelNameProfile>
                        کلینیک تخصصی پوست و مو نوین ایرانا
                    </ChannelNameProfile>
                    <ChannelTickProfile src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                </ChannelProfile>




                <Video1 >
                    <Slider {...settings}>

                        {noviniranas.map(novinirana => (


                            <Video  >

                                <Link to={`/videos/${novinirana.uid}`}>

                                    <Box
                                        sx={{
                                            width: 178,

                                            backgroundColor: 'white'




                                        }}


                                    >
                                        <Img src={novinirana.small_poster} style={{ width: "210px", height: "120px" }} />
                                    </Box>


                                    <VideoTitle2>
                                        {novinirana.title}
                                    </VideoTitle2>
                                </Link>
                                <Channel >
                                    <ChannelName>
                                        کلینیک پوست و مو ایرانیان
                                    </ChannelName>
                                    <ChannelTick3 src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                                </Channel>
                                <Statistics>
                                    <VideovisitCont>
                                        {novinirana.visit_cnt}بار بازدید
                                    </VideovisitCont>
                                    <br />
                                    <UploadDate>
                                        {novinirana.create_date}اپلود در

                                    </UploadDate>

                                </Statistics>















                            </Video>


                        ))}

                    </Slider>

                </Video1>
            </div8>
            <Hr />
            <div9 >
                <ChannelProfile>
                    <Stack direction="row" spacing={2}>
                        <Avatar

                            src="https://static.cdn.asset.aparat.com/profile-photo/232595-m.jpg"
                            sx={{ width: 40, height: 40, position: "relative", }}
                        />


                    </Stack>
                    <ChannelNameProfile>
                        خودرو بانک
                    </ChannelNameProfile>
                    <ChannelTickProfile src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                </ChannelProfile>




                <Video1 >
                    <Slider {...settings}>

                        {khodrobanks.map(khodrobank => (


                            <Video  >


                                <Link to={`/videos/${khodrobank.uid}`}>
                                    <Box
                                        sx={{
                                            width: 178,

                                            backgroundColor: 'white'




                                        }}


                                    >
                                        <Img src={khodrobank.small_poster} style={{ width: "210px", height: "120px" }} />
                                    </Box>


                                    <VideoTitle2>
                                        {khodrobank.title}
                                    </VideoTitle2>
                                </Link>
                                <Channel >
                                    <ChannelName>
                                        {khodrobank.sender_name}
                                    </ChannelName>
                                    <ChannelTick style={{ position: "relative", left: "120px" }} src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Eo_circle_green_white_checkmark.svg" />

                                </Channel>
                                <Statistics>
                                    <VideovisitCont>
                                        {khodrobank.visit_cnt}بار بازدید
                                    </VideovisitCont>
                                    <br />
                                    <UploadDate>
                                        {khodrobank.create_date}اپلود در

                                    </UploadDate>

                                </Statistics>















                            </Video>


                        ))}

                    </Slider>

                </Video1>
            </div9>
            <Hr />











        </Container >
    );
}

export default Main;