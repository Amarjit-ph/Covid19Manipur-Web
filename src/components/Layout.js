import React from 'react'


import Header from '../components/header'
import Footer from '../components/footer'

import '../styles/index.scss'
import '../styles/layout.scss'

export default function Layout(props) {
    return (
        <div className='container'>
            <div className='content'>
                {props.children}
            </div>
        </div>
    )
}

/*
export default function Layout(props) {
    return (
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header />
                {props.children}
            </div>

            <Footer />
        </div>
    )
}
*/

