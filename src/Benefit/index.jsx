import React from 'react'

import quality from '../assets/images/benefit/quality.svg'
import clock from '../assets/images/benefit/clock.svg'
import ruble from '../assets/images/benefit/ruble.svg'
import place from '../assets/images/benefit/place.svg'
import shield from '../assets/images/benefit/shield.svg'
import way from '../assets/images/benefit/way.svg'
import './styles.css'

export const Benefit = () => {
    return (
        <div className="benefits">
            <div className="container">
                <h1>Преимущества сервиса</h1>
                <div className="benefits__inner">
                    <div className="benefits__item">
                        <img src={quality} alt="quality" />
                        <div className="benefits__item-content">
                            <h2>Качество топлива</h2>
                            <span>
                                Aliquam rhoncus et massa adipiscing risus leo
                                nec lacus, sagittis. Eu, purus ac nisi sit eget
                                sed et, adipiscing felis.
                            </span>
                        </div>
                    </div>
                    <div className="benefits__item">
                        <img src={clock} alt="clock" />
                        <div className="benefits__item-content">
                            <h2>Бережем ваше время и нервы</h2>
                            <p>
                                Aliquam rhoncus et massa adipiscing risus leo
                                nec lacus, sagittis. Eu, purus ac nisi sit eget
                                sed et, adipiscing felis.
                            </p>
                        </div>
                    </div>
                    <div className="benefits__item">
                        <img src={ruble} alt="ruble" />
                        <div className="benefits__item-content">
                            <h2>Цена</h2>
                            <p>
                                Aliquam rhoncus et massa adipiscing risus leo
                                nec lacus, sagittis. Eu, purus ac nisi sit eget
                                sed et, adipiscing felis.
                            </p>
                        </div>
                    </div>
                    <div className="benefits__item">
                        <img src={place} alt="place" />
                        <div className="benefits__item-content">
                            <h2>Ваш комфорт—наша забота</h2>
                            <p>
                                Aliquam rhoncus et massa adipiscing risus leo
                                nec lacus, sagittis. Eu, purus ac nisi sit eget
                                sed et, adipiscing felis.
                            </p>
                        </div>
                    </div>
                    <div className="benefits__item">
                        <img src={shield} alt="shield" />
                        <div className="benefits__item-content">
                            <h2>Безопасность процесса</h2>
                            <p>
                                Aliquam rhoncus et massa adipiscing risus leo
                                nec lacus, sagittis. Eu, purus ac nisi sit eget
                                sed et, adipiscing felis.
                            </p>
                        </div>
                    </div>
                    <div className="benefits__item">
                        <img src={way} alt="way" />
                        <div className="benefits__item-content">
                            <h2>Несколько ТС в одном месте?</h2>
                            <p>
                                Aliquam rhoncus et massa adipiscing risus leo
                                nec lacus, sagittis. Eu, purus ac nisi sit eget
                                sed et, adipiscing felis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
