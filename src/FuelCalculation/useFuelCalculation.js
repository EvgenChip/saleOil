import React, { useState } from 'react'

export const useFuelCalculation = () => {
    const [rangeValue, setRangeValue] = useState(0)

    const rangeSlide = (e) => {
        setRangeValue(e.target.value)
    }

    return {
        rangeValue,
        rangeSlide,
    }
}
