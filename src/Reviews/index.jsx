import React from 'react'

import { useReviews } from './useReviews'
import butNext from '../assets/images/certificate/next.svg'
import butPrev from '../assets/images/certificate/butPrev.svg'
import './styles.css'

export const Reviews = () => {
    const { review, prev, next, isDisabledPrevBtn, isDisabledNextBtn } =
        useReviews()

    return (
        <div className="reviews">
            <div className="container">
                <div className="reviews__top">
                    <h1>Отзывы</h1>
                    <div className="reviews__top_button">
                        <button
                            className="but-click"
                            disabled={isDisabledPrevBtn}
                            onClick={prev}
                        >
                            <img src={butPrev} alt="prev" />
                        </button>
                        <button
                            className="but-click"
                            disabled={isDisabledNextBtn}
                            onClick={next}
                        >
                            <img src={butNext} alt="next" />
                        </button>
                    </div>
                </div>
                <div className="reviews__slider">
                    {review.map(({ id, name, position, content }) => {
                        return (
                            <div key={id} className="reviews__slider_item">
                                <div className="reviews__slider_inner">
                                    <h3>{name}</h3>
                                    <span>{position}</span>
                                    <p>{content}</p>
                                    <a href="#"> Подробнее</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="review_button-wrapper">
                    <button className="review_button ">Читать отзывы</button>
                </div>
            </div>
        </div>
    )
}
