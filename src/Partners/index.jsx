import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState } from 'react'

import lukoil from '../assets/images/partners/lukoil.svg'
import gazprom from '../assets/images/partners/gazprom.svg'
import rosneft from '../assets/images/partners/rosneft.svg'
import tatneft from '../assets/images/partners/tatneft.svg'
import './styles.css'

export const Partners = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const mobileScreen = width <= 320
    const mobileScreenPl = width <= 760

    return (
        <div className="partners">
            <div className="container">
                <h1>Наши партнеры</h1>
                <div className="partners__slider">
                    <Swiper
                        slidesPerView={
                            mobileScreen ? 1 : mobileScreenPl ? 3 : 4
                        }
                        spaceBetween={30}
                        slidesPerGroup={
                            mobileScreen ? 1 : mobileScreenPl ? 3 : 4
                        }
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={false}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <div className="partner__slider-wrapper">
                            <SwiperSlide>
                                {' '}
                                <div className="partner__slider-inner">
                                    {' '}
                                    <img src={lukoil} alt="lukoil" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {' '}
                                <div className="partner__slider-inner">
                                    {' '}
                                    <img src={gazprom} alt="gazprom" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-inner">
                                    <img src={rosneft} alt="rosneft" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-inner">
                                    <img src={tatneft} alt="tatneft" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {' '}
                                <div className="partner__slider-inner">
                                    {' '}
                                    <img src={lukoil} alt="lukoil" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {' '}
                                <div className="partner__slider-inner">
                                    {' '}
                                    <img src={gazprom} alt="gazprom" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-inner">
                                    <img src={rosneft} alt="rosneft" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-inner">
                                    <img src={tatneft} alt="tatneft" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {' '}
                                <div className="partner__slider-inner">
                                    {' '}
                                    <img src={lukoil} alt="lukoil" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {' '}
                                <div className="partner__slider-inner">
                                    {' '}
                                    <img src={gazprom} alt="gazprom" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-inner">
                                    <img src={rosneft} alt="rosneft" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-inner">
                                    <img src={tatneft} alt="tatneft" />
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
