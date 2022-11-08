import React, { useState, useRef, useEffect } from 'react'

import cer1 from '../assets/images/certificate/image1.jpg'
import cer2 from '../assets/images/certificate/image2.jpg'
import cer3 from '../assets/images/certificate/image3.jpg'
import cer4 from '../assets/images/certificate/image4.jpg'
import cer5 from '../assets/images/certificate/image5.jpg'
import cer6 from '../assets/images/certificate/image6.jpg'
import cer7 from '../assets/images/certificate/image7.jpg'
import cer8 from '../assets/images/certificate/image8.jpg'

const images = [
    { id: 1, url: cer1 },
    { id: 2, url: cer2 },
    { id: 3, url: cer3 },
    { id: 4, url: cer4 },
    { id: 5, url: cer5 },
    { id: 6, url: cer6 },
    { id: 7, url: cer7 },
    { id: 8, url: cer8 },
]

export const useCertificate = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const mobileScreen = width <= 320

    const [certificates, setCertificates] = useState(
        images.slice(0, mobileScreen ? 1 : 4)
    )
    const position = useRef(1)

    const prev = () => {
        setCertificates(
            images.slice(
                --position.current,
                position.current + (mobileScreen ? 1 : 4)
            )
        )
    }

    const next = () => {
        setCertificates(
            images.slice(
                ++position.current,
                position.current + (mobileScreen ? 1 : 4)
            )
        )
    }

    const updateDimensions = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    return {
        certificates,
        prev,
        next,
        isDisabledPrevBtn: position.current < 1,
        isDisabledNextBtn:
            position.current >= images.length - (mobileScreen ? 1 : 4),
    }
}
