import React from 'react'

import logo from '../assets/images/logo.svg'
import './styles.css'

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__top_inner">
                        <h2>Остались вопросы?</h2>
                        <span>
                            Готовы ответить на любой Ваш вопрос. Оставьте свой
                            номер телефона и мы свяжемся с вами в ближайшее
                            время
                        </span>
                        <form action="">
                            <input type="text" />
                            <input type="text" />
                            <button className="footer__top_button">
                                {' '}
                                Перезвонить мне{' '}
                            </button>
                        </form>
                        <p>
                            Нажимая на кнопку {`"Перезвоните мне"`} я соглашаюсь
                            с <a href="#">политикой конфиденциальности</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom_inner">
                        <div className="footer__bottom_logo">
                            <img src={logo} alt="logo" />
                            <span>2019 OOO {`"Процессинг 24"`}</span>
                        </div>
                        <div className="footer__bottom_info">
                            <ul>
                                <li>Карта АЗС</li>
                                <li>АЗС по региону</li>
                                <li>АЗС по брендам</li>
                                <li>Доставка топлива</li>
                            </ul>
                            <ul>
                                <li>Контакты</li>
                                <li>О компании</li>
                                <li>Личный кабинет</li>
                            </ul>
                        </div>
                        <div className="footer__bottom_contacts">
                            <span>Отдел продаж</span>
                            <a href="+74951278170">8 (495) 127-81-70</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
