import React, { useState, useRef } from 'react'

const reviewList = [
    {
        id: 1,
        name: 'Зеленов Евгений',
        position: 'Индивидуальный предприниматель',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum illum architecto',
    },
    {
        id: 2,
        name: 'Иванов Петр',
        position: 'Гененеральный директор трансопртной компании',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum illum architecto',
    },
    {
        id: 3,
        name: 'Петров Иван',
        position: 'Индивидуальный предприниматель',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum illum architecto',
    },
    {
        id: 4,
        name: 'Свиридов Дмитрий',
        position: 'Гененеральный директор трансопртной компании',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum illum architecto',
    },
    {
        id: 5,
        name: 'Кочубей Мирон',
        position: 'Индивидуальный предприниматель',
        content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum illum architecto',
    },
]

export const useReviews = () => {
    const [review, setReview] = useState(reviewList.slice(0, 2))
    const position = useRef(1)

    const prev = () => {
        setReview(reviewList.slice(--position.current, position.current + 2))
    }

    const next = () => {
        setReview(reviewList.slice(++position.current, position.current + 2))
    }

    return {
        review,
        prev,
        next,
        isDisabledPrevBtn: position.current < 1,
        isDisabledNextBtn: position.current >= reviewList.length - 2,
    }
}
