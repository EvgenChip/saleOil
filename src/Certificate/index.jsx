import React from 'react'

import { useCertificate } from './useCertificate'
import butNext from '../assets/images/certificate/next.svg'
import butPrev from '../assets/images/certificate/butPrev.svg'
import './styles.css'

export const Certificate = () => {
    const { certificates, prev, next, isDisabledPrevBtn, isDisabledNextBtn } =
        useCertificate()

    return (
        <div className="certificate">
            <div className="container">
                <div className="certificate__top">
                    <h1>Сертификаты качества топлива</h1>
                    <div className="certificate__top_button">
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
                <div className="certificate__slider">
                    {certificates.map(({ id, url }) => {
                        return (
                            <div key={id} className="certificate__slider_item">
                                <img src={url} alt="certificate" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
