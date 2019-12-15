import React, { Component } from 'react';
import classNames from "classnames";
import { Badge, Empty } from 'antd';

import "./Chats.css";

class Chats extends Component {
  constructor(props) {
      super(props);
      this.state = {
          chats: true,    //по умолчанию открыта вкладка открытые
      };
      this.handleOpenClick = this.handleOpenClick.bind(this);
      this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleOpenClick() {
      this.setState({ chats: true });
  }

  handleCloseClick() {
      this.setState({ chats: false });
  }
  render() {
    let actual_chats = this.state.chats;
    return (
      <section className="chats__container">
        <div className="chats__type">
          <div className="chats__wrap chats__open" >
            <h2 onClick={this.handleOpenClick} className={classNames('chats__header', { 'chats__active': actual_chats })}>Открытые</h2>
          </div>
          <div className="chats__wrap chats__close">
            <h2 onClick={this.handleCloseClick} className={classNames('chats__header', { 'chats__active': !actual_chats })}>Завершенные</h2>
          </div>
        </div>

        <Cards cards_state={actual_chats} />
        {/* <Empty /> */}
        {/* <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> */}
      </section>
    );
  }
}



class Cards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const open_chats = [
            {
              img: "https://i.pinimg.com/originals/40/6d/fb/406dfba686da73abe5d620b10e600785.png",
              count: 4,
              date: '12.11.2019',
              title: "Самокат внедорожный на шипованых колесах",
              price: "550",
              last_message: "Вы: Будет ли в комплекте идти зарядное устройство?",
              person_name: 'Константин С.',
            },
            {
              img: "https://i.pinimg.com/originals/40/6d/fb/406dfba686da73abe5d620b10e600785.png",
              count: 4,
              date: '12.11.2019',
              title: "Самокат",
              price: "550",
              last_message: "Вы: Будет ли в комплекте идти зарядное устройство?",
              person_name: 'Константин С.',
            },
            {
              img: "https://i.pinimg.com/originals/40/6d/fb/406dfba686da73abe5d620b10e600785.png",
              count: 4,
              date: '12.11.2019',
              title: "Велосипед",
              price: "550",
              last_message: "Вы: Будет ли в комплекте идти зарядное устройство?",
              person_name: 'Константин С.',
            },
        ];

        const close_chats = [
            {
              img: "https://i.pinimg.com/originals/40/6d/fb/406dfba686da73abe5d620b10e600785.png",
              count: 4,
              date: '12.11.2019',
              title: "Самокат внедорожный",
              price: "550",
              last_message: "Вы: Будет ли в комплекте идти зарядное устройство?",
              person_name: 'Константин С.',
            },
            {
              img: "https://i.pinimg.com/originals/40/6d/fb/406dfba686da73abe5d620b10e600785.png",
              count: 4,
              date: '12.11.2019',
              title: "Самокат внедорожный на колесах",
              price: "550",
              last_message: "Вы: Будет ли в комплекте идти зарядное устройство?",
              person_name: 'Сергей',
            },
            {
              img: "https://i.pinimg.com/originals/40/6d/fb/406dfba686da73abe5d620b10e600785.png",
              count: 4,
              date: '12.11.2019',
              title: "Самокат внедорожный на обычных колесах",
              price: "550",
              last_message: "Вы: Будет ли в комплекте идти зарядное устройство?",
              person_name: 'Константин С.',
            },
        ];

        const open_chats_list = open_chats.map((open_chat) =>
            <Card key={open_chat.title.toString()}
                chat={open_chat} />
        )

        const close_chats_list = close_chats.map((close_chat) =>
            <Card key={close_chat.title.toString()}
                chat={close_chat} />
        )


        return <div className="chats__list">
            {this.props.cards_state ? open_chats_list : close_chats_list}
        </div>
    }
}

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let chat = this.props.chat;
        return <div className="chat__item">
          <div className="chat__images">
            <img
              className="chat__img"
              alt=""
              src={chat.img}
            />
            <Badge
              className="chat__badge"
              count={chat.count}
              style={{ backgroundColor: '#fff', color: '#5207f2', boxShadow: '0 0 0 1px #d9d9d9 inset' }}
            />
          </div>
          <div className="chat__description">
            <div className="chat__item-wrap">
              <h3 className="chat__name">{chat.person_name}</h3>
              <p className="chat__date">{chat.date}</p>
            </div>
            <div className="chat__item-wrap">
              <p className="chat__item-title">{chat.title}</p>
              <p className="chat__cost">{chat.price}</p>
            </div>
            <p className="chat__last-message">{chat.last_message}</p>
          </div>
        </div>
    }
}

export default Chats;
