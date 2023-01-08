import React from 'react'
import Footerpart1 from './footerpart1'
import style from "../../styles/footer/footer.module.css"
import Footerpart2 from './footerpart2'

const Footer = () => {
    return (
        <>
            <div className={style.whole}>

                <Footerpart1 />
                <Footerpart2 />
            </div>
            <h3>Varaluae 2021 C All Right Reserved</h3>
        </>
    )
}

export default Footer