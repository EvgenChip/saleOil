import React from 'react'

import cursorWorkScheme from '../assets/images/schemeWork/cursorWorkScheme.svg'
import phoneWorkScheme from '../assets/images/schemeWork/phoneWorkScheme.svg'
import oil from '../assets/images/schemeWork/oil.svg'
import rightPointer from '../assets/images/schemeWork/rightPointer.svg'
import './styles.css'

export const SchemeWork = () => {
    return (
        <div className="scheme-of-work">
            <div className="container">
                <h1>Как мы работаем</h1>
                <div className="scheme-of-work__inner">
                    <div className="scheme-of-work__item">
                        <div className="scheme-of-work__item-top">
                            <img src={cursorWorkScheme} alt="Scheme of work" />
                            <a href="#">
                                <span>1-3 мин.</span>
                                <img src={rightPointer} alt="" />
                            </a>
                        </div>
                        <h2>Оформление заказа</h2>
                        <p>
                            Заполните заявку на сайте, укажите удобное для вас
                            место приезда заправщика, сорт и количество топлива,
                            которое хотите купить
                        </p>
                    </div>
                    <div className="scheme-of-work__item">
                        <div className="scheme-of-work__item-top">
                            <img src={phoneWorkScheme} alt="" />
                            <a href="#">
                                <span>1-3 мин.</span>
                                <img src={rightPointer} alt="Scheme of work" />
                            </a>
                        </div>
                        <h2>Подтверждение заявки менеджером</h2>
                        <p>
                            Дождитесь звонка нашего менеджера для уточнения
                            условий заказа
                        </p>
                    </div>
                    <div className="scheme-of-work__item">
                        <div className="scheme-of-work__item-top">
                            <img src={oil} alt="" />
                            <a href="#">
                                <span>30-90 мин.</span>
                                <img src={rightPointer} alt="" />
                            </a>
                        </div>
                        <h2>Заправка вашего автомобиля</h2>
                        <p>
                            В назначенное время приедет заправщик и заправит
                            автомобиль топливом. Если у заказчика есть
                            действующий договор на топливные карты, то при
                            оплате можно провести транзакцию через терминал.
                            Переносное устройство есть у каждого заправщика
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
