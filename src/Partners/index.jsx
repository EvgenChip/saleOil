import React from 'react'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import lukoil from '../assets/images/partners/lukoil.svg'
import gazprom from '../assets/images/partners/gazprom.svg'
import rosneft from '../assets/images/partners/rosneft.svg'
import tatneft from '../assets/images/partners/tatneft.svg'
import './styles.css'

export const Partners = () => {
    return (
        <div className="partners">
            <div className="container">
                <h1>Наши партнеры</h1>
                <div className="partners__slider">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        slidesPerGroup={4}
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
