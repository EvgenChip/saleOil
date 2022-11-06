import React from 'react'

import { useFuelCalculation } from './useFuelCalculation'
import './styles.css'

export const FuelCalculation = () => {
    const { rangeValue, rangeSlide } = useFuelCalculation()

    return (
        <div className="fuel-calculation">
            <div className="container">
                <h1 className="page__title">Топливо с доставкой</h1>
                <form className="fuel-calculation__form">
                    <div className="fuel-calculation__input-items">
                        <div className="fuel-calculation__input-wrap">
                            <label htmlFor="fuelType">Вид топлива</label>
                            <select
                                className="fuel-calculation_input fuel-calculation__input_sort"
                                placeholder="Имя"
                                type="select"
                                id="fuelType"
                            >
                                <option value="">ДТ</option>
                                <option value="">АИ-95</option>
                            </select>
                        </div>
                        <div className="fuel-calculation__input-wrap">
                            <label htmlFor="fuelVolume">Обьем топлива</label>
                            <span
                                className="fuel-calculation_input"
                                id="rangeValue"
                            >
                                {rangeValue} литров
                            </span>
                            <input
                                className="vol"
                                type="range"
                                value={rangeValue}
                                name=""
                                min="0"
                                max="3000"
                                onChange={rangeSlide}
                                id="fuelVolume"
                            />
                        </div>
                        <div className="fuel-calculation__input-wrap">
                            <label htmlFor="place">Место доставки</label>
                            <input
                                className="fuel-calculation_input fuel-calculation__input_place"
                                placeholder="Укожите место"
                                type="text"
                                id="place"
                            />
                        </div>
                        <div className="fuel-calculation__input-wrap">
                            <label htmlFor="fuelName">Ваше имя</label>
                            <input
                                className="fuel-calculation_input fuel-calculation__input_name"
                                placeholder="Имя"
                                type="text"
                                id="fuelName"
                            />
                        </div>
                        <div className="fuel-calculation__input-wrap">
                            <label htmlFor="fuelTelNumber">
                                Номер телефона
                            </label>
                            <input
                                className="fuel-calculation_input fuel-calculation__input_tel"
                                placeholder="Имя"
                                type="tel"
                                id="fuelTelNumber"
                            />
                        </div>
                    </div>
                    <div className="fuel-calculation__preview">
                        <h2>Итого</h2>
                        <div className="fuel-calculation__preview_cost-calculation">
                            <span>Стоимость топлива</span>
                            <span>77 350.00 ₽</span>
                        </div>
                        <div className="fuel-calculation__preview_cost-calculation">
                            <div>
                                <span>Цена за литр:</span>
                                <p>
                                    Цена и стоимость указаны ориентировочно.{' '}
                                    <br />
                                    Точные цену и стоимость собщит наш менеджер
                                    при <br />
                                    подтверждении заявки.
                                </p>
                            </div>
                            <span>45.50 ₽</span>
                        </div>
                        <div className="fuel-calculation__preview_cost-calculation">
                            <div>
                                <span>Выгода: </span>
                                <p>
                                    При цене на АЗС 49.59 ₽ за литр, цены
                                    актуальны на 23.11.2020 г.
                                </p>
                            </div>
                            <span>6 953.00 ₽</span>
                        </div>
                        <button className="fuel-calculation__preview_button">
                            Заказать топливо
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
