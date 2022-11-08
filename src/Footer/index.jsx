import React from 'react'
import { inputPhone } from '../utilit/function'
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
                            <input placeholder="Имя" type="text" />
                            <input
                                placeholder="+7( )___-__-__"
                                onChange={inputPhone}
                                type="tel"
                            />
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
                                <li>
                                    {' '}
                                    <a href="#">Карта АЗС</a>
                                </li>
                                <li>
                                    <a href="#">АЗС по региону</a>
                                </li>
                                <li>
                                    <a href="#">АЗС по брендам</a>
                                </li>
                                <li>
                                    <a href="#">Доставка топлива</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a href="#">Контакты</a>
                                </li>
                                <li>
                                    <a href="#">О компании</a>
                                </li>
                                <li>
                                    <a href="#">Личный кабинет</a>
                                </li>
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
