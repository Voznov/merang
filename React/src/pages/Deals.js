import React, { Component } from "react";
import classNames from "classnames";
import { Button, Icon, Avatar, Rate } from 'antd';
import { getOccupyDeals, getSurrenderDeals } from "../util/APIUtils";

import "./Deals.css";

class Deals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deals: false,    //по умолчанию открыта вкладка арендую
        };
        this.handleOccupyClick = this.handleOccupyClick.bind(this);
        this.handleSurrenderClick = this.handleSurrenderClick.bind(this);
    }

    handleOccupyClick() {
        this.setState({ deals: false });
    }

    handleSurrenderClick() {
        this.setState({ deals: true });
    }

    render() {
        let actual_deals = this.state.deals;
        return <section className="deals__container">
            <div className="deals__type">
                <div className="deals__wrap deals__occupy" >
                    <h2 onClick={this.handleOccupyClick}
                        className={classNames('deals__header', { 'deals__active': !actual_deals })}>Арендую</h2>                 {/* доделаю изменения классов active в зависимости от state */}
                </div>
                <div className="deals__wrap deals__surrender">
                    <h2 onClick={this.handleSurrenderClick}
                        className={classNames('deals__header', { 'deals__active': actual_deals })}>Сдаю</h2>
                </div>
            </div>
            <Cards deals_state={actual_deals} />
        </section>
    }
}
class Cards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const occupy_deals = [
            {
                img: "https://img.mvideo.ru/Pdb/50049669b.jpg",
                title: 'Дрель',
                date_begin: '16.11',
                date_end: "23.11",
                price: "3000",
                price_per_day: "500",
                status: true,
                person_avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                person_name: 'Дмитрий К',
                person_stars: 3.5,
            },
            {
                img: "https://img.mvideo.ru/Pdb/50049669b.jpg",
                title: 'Ноутбук',
                date_begin: '16.11',
                date_end: "23.11",
                price: "3000",
                price_per_day: "500",
                status: true
            },
            {
                img: "https://img.mvideo.ru/Pdb/50049669b.jpg",
                title: 'Электроскутер',
                date_begin: '16.11',
                date_end: "23.11",
                price: "3000",
                price_per_day: "500",
                status: true,
                person_avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                person_name: 'Дмитрий К',
                person_stars: 3.5,
            },
        ];

        const surrender_deals = [
            {
                img: "https://img.mvideo.ru/Pdb/50049669b.jpg",
                title: 'Электроскутер с зарядным устройством',
                date_begin: '16.11',
                date_end: "23.11",
                price: "3000",
                price_per_day: "500",
                status_ready: {status:false},
                person_avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                person_name: 'Дмитрий К',
                person_stars: 3.5,
            },
            {
                img: "https://img.mvideo.ru/Pdb/50049669b.jpg",
                title: 'Фотоаппарат',
                date_begin: '12.11',
                date_end: "23.11",
                price: "4500",
                price_per_day: "500",
            },
            {
                img: "https://img.mvideo.ru/Pdb/50049669b.jpg",
                title: 'Самокат',
                date_begin: '16.11',
                date_end: "23.11",
                price: "3100",
                price_per_day: "400",
                status_ready: {status:true},
                person_avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                person_name: 'Дмитрий К',
                person_stars: 4.5,
            },
        ];

        const occupy_deals_list = occupy_deals.map((occupy_deal) =>
            <Card key={occupy_deal.title.toString()}
                deal={occupy_deal} />
        )

        const surrender_deals_list = surrender_deals.map((surrender_deal) =>
            <Card key={surrender_deal.title.toString()}
                deal={surrender_deal} />
        )

        return <section className="deals__cards">
            {this.props.deals_state ? occupy_deals_list : surrender_deals_list}
        </section>
    }
}

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deal: props.deal
        }
    }
    render() {
        let deal = this.state.deal;
        return <div className="deals__card">
            <div className="deals__card-wrap card">
                <div className="card__wrap-top">
                    <img
                        className="card__img"
                        alt="logo"
                        src={deal.img}
                    />
                    <div className="card__info-wrap">
                        <h3 className="card__info-title">{deal.title}</h3>
                        <div className="card__date-price--wrap">
                            <p className="card__date card__date-begin">{deal.date_begin} <Icon type="calendar" /></p>
                            <p className="card__date card__date-end">{deal.date_end}<Icon type="calendar" /></p>
                            <div className="card__price">
                                <p className="price__sum">{deal.price}</p>
                                <p className="price__day">{deal.price_per_day}</p>
                            </div>
                        </div>
                        {deal.person_name ? <p className="card__info-user">
                            <Avatar src={deal.person_avatar} />
                            <p className="card__info-user--name">{deal.person_name}</p>
                            <Rate allowHalf defaultValue={deal.person_stars} />
                        </p> : null}
                        {deal.status_ready ? deal.status_ready.status ? <p className="card__info-text he_said_yes">Бронирование одобрено владельцем</p> : <p className="card__info-text he_said_no">Владелец отказался от сделки</p> : null}
                    </div>
                </div>

                {deal.status_ready ? deal.status_ready.status ?
                  <div className="card__wrap-service" style={{ marginTop: '10px', paddingBottom: '15px', display: 'flex' }}>
                      <Button style={{ color: '#E07676', borderColor: '#E07676', marginRight: '5px' }} ghost>
                          Отменить
                      </Button>
                      <Button style={{ color: '#5207F2', borderColor: '#5207F2', marginRight: '5px' }} icon="message" ghost>
                          Чат
                      </Button>
                      <Button type="primary" style={{ width: '100%', borderColor: '#5207F2', background: '#5207F2' }} icon="check">
                          Подтвердить
                      </Button>
                  </div> : <div className="card__wrap-service" style={{ marginTop: '10px', paddingBottom: '15px', display: 'flex' }}>
                      <Button style={{ color: '#E07676', borderColor: '#E07676', width: '100%' }} ghost>
                          Удалить запрос
                      </Button>
                  </div> : <div className="card__wrap-service" style={{ marginTop: '10px', paddingBottom: '15px', display: 'flex' }}>
                    <Button style={{ color: '#E07676', borderColor: '#E07676', marginRight: '5px' }} ghost>
                        Отменить
                    </Button>
                    <Button style={{ color: '#5207F2', borderColor: '#5207F2', marginRight: '5px', width: '100%' }} icon="message" ghost>
                        Чат
                    </Button>
                    <Button style={{ color: '#5207F2', borderColor: '#5207F2' }} icon="edit" ghost>
                        Даты
                    </Button>
                </div>}

            </div>



            {/* <div style={{ height: "100px" }} /> */}

        </div>
    }
}

export default Deals;



// import React from "react";
// import classNames from "classnames";
// import Badge from "../Badge";
//
// import "./List.scss";
//
// const List = ({ items, isRemovable, onClick }) => {
//   return (
//     <ul onClick={onClick} className="list">
//     {items.map((item, index) => (
//       <li
//       key={index}
//       className={classNames(item.className, { active: item.active })}
//       >
//       <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
//       <span>{item.name}</span>
//       </li>
//     ))}
//     </ul>
//   );
// };
//
// export default List;




// <div className="deals__card-wrap card">
//     <div className="card__wrap-top">
//         <img
//             className="card__img"
//             alt="logo"
//             src="https://img.mvideo.ru/Pdb/50049669b.jpg"
//         />
//         <div className="card__info-wrap">
//             <h3 className="card__info-title">Электроскутер с зарядным устройством</h3>
//             <div className="card__date-price--wrap">
//                 <p className="card__date card__date-begin">16.11 <Icon type="calendar" /></p>
//                 <p className="card__date card__date-end">23.11 <Icon type="calendar" /></p>
//                 <div className="card__price">
//                     <p className="price__sum">3500</p>
//                     <p className="price__day">500</p>
//                 </div>
//             </div>
//             <p className="card__info-text he_said_yes">Бронирование одобрено владельцем</p>
//         </div>
//     </div>
//     <div className="card__wrap-service" style={{ marginTop: '10px', paddingBottom: '15px', display: 'flex' }}>
//         <Button style={{ color: '#E07676', borderColor: '#E07676', marginRight: '5px' }} ghost>
//             Отменить
//         </Button>
//         <Button style={{ color: '#5207F2', borderColor: '#5207F2', marginRight: '5px' }} icon="message" ghost>
//             Чат
//         </Button>
//         <Button type="primary" style={{ width: '100%', borderColor: '#5207F2', background: '#5207F2' }} icon="check">
//             Подтвердить
//         </Button>
//     </div>
// </div>
//
// <div className="deals__card-wrap card">
//     <div className="card__wrap-top">
//         <img
//             className="card__img"
//             alt="logo"
//             src="https://img.mvideo.ru/Pdb/50049669b.jpg"
//         />
//         <div className="card__info-wrap">
//             <h3 className="card__info-title">Электроскутер с зарядным устройством</h3>
//             <p className="card__info-text he_said_no">Владелец отказался от сделки</p>
//             <div className="card__wrap-service" style={{ marginTop: '10px', paddingBottom: '15px', display: 'flex' }}>
//                 <Button style={{ color: '#E07676', borderColor: '#E07676', width: '100%' }} ghost>
//                     Удалить запрос
//                 </Button>
//             </div>
//         </div>
//     </div>
// </div>
//
// <div className="deals__card-wrap card">
//     <div className="card__wrap-top">
//         <img
//             className="card__img"
//             alt="logo"
//             src="https://www.gooscooter.com/733-large_default/harley-electric-scooter-1000w-12ah-big-wheel-motorcycle-semnyj-akkumulyator-elektricheskij-skuter.jpg"
//         />
//         <div className="card__info-wrap">
//             <h3 className="card__info-title">Электроскутер с зарядным устройством</h3>
//             <div className="card__date-price--wrap">
//                 <p className="card__date card__date-begin">16.11 <Icon type="calendar" /></p>
//                 <p className="card__date card__date-end">23.11 <Icon type="calendar" /></p>
//                 <div className="card__price">
//                     <p className="price__sum">3500</p>
//                     <p className="price__day">500</p>
//                 </div>
//             </div>
//             <p className="card__info-user">
//                 <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
//                 <p className="card__info-user--name">Дмитрий К.</p>
//                 <Rate allowHalf defaultValue={3.5} />
//             </p>
//         </div>
//     </div>
//     <div className="card__wrap-service" style={{ marginTop: '10px', paddingBottom: '15px', display: 'flex' }}>
//         <Button style={{ color: '#E07676', borderColor: '#E07676', marginRight: '5px' }} ghost>
//             Отменить
//         </Button>
//         <Button style={{ color: '#5207F2', borderColor: '#5207F2', marginRight: '5px', width: '100%' }} icon="message" ghost>
//             Чат
//         </Button>
//         <Button style={{ color: '#5207F2', borderColor: '#5207F2' }} icon="edit" ghost>
//             Даты
//         </Button>
//     </div>
// </div>
