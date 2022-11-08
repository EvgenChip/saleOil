import React from 'react'

import './styles.css'

export const PriceOil = () => {
    return (
        <div className="container">
            <h1 className="page__title">Стоимость топлива</h1>
            <div className="priceOil">
                <div className="table_title">
                    <div className="innerTitle">Сорт топлива</div>
                    <div className="innerTitle">Экологический класс</div>
                    <div className="innerTitle">Производитель</div>
                    <div className="innerTitle">Наличный </div>
                    <div className="innerTitle">Безналичный </div>
                </div>
                <div className="priceOil__table">
                    <div className="priceOil__table-sort">
                        <div className="inner_table-sort">ДТ</div>
                    </div>
                    <div className="priceOil__table-ecoClass">
                        <div className="inner">ЕВРО-5</div>
                        <div className="inner">ЕВРО-4</div>
                    </div>
                    <div className="priceOil__table-manufacturer">
                        <div className="inner">Газпромнефть</div>
                        <div className="inner">Лукойл</div>
                        <div className="inner">Роснефть</div>
                        <div className="inner">Газпромнефть</div>
                        <div className="inner">Лукойл</div>
                    </div>
                    <div className="priceOil__table-cashSettlement">
                        <div className="inner">45.43 р. </div>
                        <div className="inner">45.16 р. </div>
                        <div className="inner">42.34 р. </div>
                        <div className="inner">- </div>
                        <div className="inner">41.16 р. </div>
                    </div>
                    <div className="priceOil__table-cashlessPayment">
                        <div className="inner">44.43 р. </div>
                        <div className="inner">43.98 р. </div>
                        <div className="inner">41.64 р. </div>
                        <div className="inner">- </div>
                        <div className="inner">40.67 р. </div>
                    </div>
                </div>
                <div className="priceOil__table">
                    <div className="inner_aiTable-sort">АИ-95</div>
                    <div className="priceOil__table-ecoClass-ai">
                        <div className="inner">ЕВРО-5</div>
                        <div className="inner">ЕВРО-4</div>
                        <div className="inner">ЕВРО-3</div>
                    </div>
                    <div className="priceOil__table-manufacturer-ai">
                        <div className="inner">Газпромнефть</div>
                        <div className="inner">Роснефть</div>
                        <div className="inner">Лукойл</div>
                        <div className="inner">Лукойл</div>
                        <div className="inner">Газпромнефть</div>
                        <div className="inner">Роснефть</div>
                        <div className="inner">Газпромнефть</div>
                        <div className="inner">Лукойл</div>
                    </div>
                    <div className="priceOil__table-cashSettlement-ai">
                        <div className="inner">45.43 р. </div>
                        <div className="inner">42.34 р. </div>
                        <div className="inner">45.16 р. </div>
                        <div className="inner">41.16 р. </div>
                        <div className="inner">- </div>
                        <div className="inner">42.34 р. </div>
                        <div className="inner">- </div>
                        <div className="inner">45.16 р. </div>
                    </div>
                    <div className="priceOil__table-cashlessPayment-ai">
                        <div className="inner">44.43 р. </div>
                        <div className="inner">41.64 р. </div>
                        <div className="inner">43.98 р. </div>
                        <div className="inner">40.67 р. </div>
                        <div className="inner">- </div>
                        <div className="inner">41.64 р. </div>
                        <div className="inner">- </div>
                        <div className="inner">43.98 р. </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
