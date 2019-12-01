import React, { Component } from 'react';
import './DesktopApp.css'

import phone from '../assets/phone.png';

class DesktopApp extends Component {
    render() {
        return <div className="desktop-box">
            <div className="desktop-message">
                <h1 className="desktop-text-pattern desktop-title">Merang.ru</h1>
                <h4 className="desktop-text-pattern desktop-text">В данный момент десктоп-версия сайта находится в разработке</h4>
                <h4 className="desktop-text-pattern desktop-text">Используйте мобильное устройство</h4>
                {/* <h4 className="desktop-text-pattern desktop-text">Используйте мобильное устройство или скачайте <a href="https://merang.ru/downloads/">Android-приложение</a></h4> */}
            </div>
            <img src={phone} className="desktop-img" alt="Наш сайт на телефоне" height="603px" />
        </div>
    }
}

export default DesktopApp;