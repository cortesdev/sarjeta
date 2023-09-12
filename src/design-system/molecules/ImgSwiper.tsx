import { Stack, useMediaQuery, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useSwiper } from 'swiper/react';
import styled from '@emotion/styled';
import { theme } from '../../styles/theme';
import Typography from '../atoms/Typography';


const StyledControls = styled(Stack)`
    position: relative;
    width: 400px !important;
    height: 45px;
    border-radius: 5px;
    z-index: 999;

    @media (min-width: 900px) {
        width: 100% !important;
    }
 
    
    .swiper-button-next,
    .swiper-button-prev {
        height: 30px;        
        margin-top: -180px;
        margin-left: -20px;
        &:after {
            font-size: 21px;
            color: white;
        }
    }
`;


const modalData = [
    {
        id: 1,
        text: "sarjeta 1",
        url: "/images/capa1.jpg"
    },
    {
        id: 2,
        text: "sarjeta 2",
        url: "/images/capa2.jpg"
    },
    {
        id: 3,
        text: "sarjeta 3",
        url: "/images/capa3.jpg"
    },
]


const ImgSwiper = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    // const isMobile = useMediaQuery(theme.breakpoints.up('md'));
    // const isTablet = useMediaQuery(theme.breakpoints.up('lg'));

    const swiperControl = useSwiper();

    return (

        <Swiper
            autoplay
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper">

            {modalData.map((item, index) => (
                <div
                    key={`modal-stakeholders-${new Date().getTime() + Math.random()}`}
                >
                    <SwiperSlide data-caption={item.url} key={item.url + index}>
                        <div>
                            <img src={item.url} alt="img" style={{ maxWidth: '50%', minWidth: '200px', margin: '10% 10%' }} />

                            {/* <Typography id="modal-modal-description" color="white" sx={{ mt: 2 }}>
                                {item.text}
                            </Typography> */}
                        </div>
                    </SwiperSlide>

                </div>
            ))
            }
            <StyledControls direction="row">
                <div
                    onClick={() => swiperControl.slidePrev()}
                    className="swiper-button-prev"
                >
                </div>
                { }
                <div
                    onClick={() => swiperControl.slideNext()}
                    className="swiper-button-next"
                >
                </div>
            </StyledControls>
        </Swiper>

    )
}

export default ImgSwiper