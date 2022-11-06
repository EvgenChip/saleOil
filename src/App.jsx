import React from 'react'

import { Benefit } from './Benefit'
import { Certificate } from './Certificate'
import { Partners } from './Partners'
import { Reviews } from './Reviews'
import { Footer } from './Footer'
import { Header } from './Header'
import { QuickOrder } from './QuickOrder'
import { PriceOil } from './PriceOil'
import { FuelCalculation } from './FuelCalculation'
import { SchemeWork } from './SchemeWork'
import './App.css'

function App() {
    return (
        <>
            <Header />
            <main>
                <QuickOrder />
                <PriceOil />
                <FuelCalculation />
                <SchemeWork />
                <Benefit />
                <Certificate />
                <Partners />
                <Reviews />
            </main>
            <Footer />
        </>
    )
}

export default App
