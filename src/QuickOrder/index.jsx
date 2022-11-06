import React from 'react'

import './styles.css'

export const QuickOrder = () => {
    return (
        <div className="container">
            <h1 className="page__title">Доставка топлива</h1>
            <div className="quickOrder__form">
                <div className="quickOrder__form-container">
                    <h2 className="title">
                        Быстрый <span>заказ топлива</span>{' '}
                    </h2>
                    <form className="quickOrder__form-inner" action="">
                        <div className="quickOrder__form-inner__contacts">
                            <div className="quickOrder__form-inner__name">
                                <label htmlFor="quickOrderName">Ваше имя</label>
                                <input
                                    placeholder="Имя"
                                    type="text"
                                    id="quickOrderName"
                                />
                            </div>
                            <div className="quickOrder__form-inner__tel">
                                <label htmlFor="quickOrderTel">
                                    Номер телефона
                                </label>
                                <input type="tel" id="quickOrderTel" />
                            </div>
                            <button>Заказать топливо</button>
                        </div>
                        <label className="quickOrder__form-inner__checkbox">
                            <input
                                className="checkbox"
                                type="checkbox"
                                id="quickOrderCheckbox"
                            />
                            <span className="fakeCheckBox"></span>
                            <label htmlFor="quickOrderCheckbox">
                                Я согласен с условиями обработки данных
                            </label>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}
