import React, { Component } from 'react';
import classNames from "classnames";
import { Badge, Empty } from 'antd';

import "./Chats.css";

class Chats extends Component {
  render() {
    return (
      <section className="chats__container">
        <div className="chats__type">
          <div className="chats__wrap chats__occupy" >
            <h2
              // onClick={this.handleOccupyClick}
              className='chats__header  chats__active'
            // {classNames('chats__header', { 'chats__active': !actual_chat })}
            >Открытые</h2>                 {/* доделаю изменения классов active в зависимости от state */}
          </div>
          <div className="chats__wrap chats__surrender">
            <h2
              // onClick={this.handleSurrenderClick}
              className='chats__header'
            // {classNames('chats__header', { 'chats__active': actual_chat })}
            >Завершенные</h2>
          </div>
        </div>

        <div className="chats__list">
          <div className="chat__item">
            <div className="chat__images">
              <img
                className="chat__img"
                alt=""
                src="https://i.pinimg.com/originals/40/6d/fb/406dfba686da73abe5d620b10e600785.png"
              />
              <Badge
                className="chat__badge"
                count={4}
                style={{ backgroundColor: '#fff', color: '#5207f2', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
              />
            </div>
            <div className="chat__description">
              <div className="chat__item-wrap">
                <h3 className="chat__name">Константин С.</h3>
                <p className="chat__date">12.11.2019</p>
              </div>
              <div className="chat__item-wrap">
                <p className="chat__item-title">Самокат внедорожный на шипованых колесах</p>
                <p className="chat__cost">550</p>
              </div>
              <p className="chat__last-message">Вы: Будет ли в комплекте идти зарядное устройство?</p>
            </div>
          </div>
        </div>
        {/* <Empty /> */}
        {/* <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> */}
      </section>
    );
  }
}

export default Chats;