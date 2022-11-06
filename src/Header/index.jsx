import React from 'react'

import iconArrow from '../assets/images/header/iconsArrow.svg'
import logo from '../assets/images/logo.svg'
import phone from '../assets/images/header/phoneIcon.svg'
import iconLogin from '../assets/images/header/iconLogin.svg'
import './styles.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__top">
                    <div className="header__top-inner">
                        <div className="logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="header__contact-bar">
                            <div className="phone">
                                <img src={phone} alt="phone" />
                                <span>
                                    <a href="tel:+380441234567">
                                        +38 (044) 123-45-67
                                    </a>
                                </span>
                            </div>
                            <button>
                                <a href="">Напишите нам</a>{' '}
                            </button>
                            <button>
                                <img src={iconLogin} alt="login" />
                                <span>
                                    {' '}
                                    <a href="">Личный кабинет</a>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="header__nav">
                <div className="container">
                    <ul className="header__nav-inner">
                        <li>
                            <a href="">Доставка топлива</a>
                        </li>
                        <li>
                            <a href="">
                                Топливные карты
                                <img src={iconArrow} alt="Топливные карты" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                АЗС
                                <img src={iconArrow} alt="АЗС" />
                            </a>
                        </li>
                        <li>
                            <a href="">Цены на топливо</a>
                        </li>
                        <li>
                            <a href="">
                                О компании
                                <img src={iconArrow} alt="О компании" />
                            </a>
                        </li>
                        <li>
                            <a href="">Контакты</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}
