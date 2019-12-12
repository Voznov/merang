import React, { Component } from "react";
import "./Deals.css";
import classNames from "classnames";
import { getOccupyDeals, getSurrenderDeals } from "../util/APIUtils";


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
        return <section className="deals__container">
            <div className="deals__type">
                <div className="deals__wrap deals__occupy" >
                    <h2 onClick={this.handleOccupyClick} className={classNames('deals__header', { 'deals__active': !this.state.deals })}>Арендую</h2>                 {/* доделаю изменения классов active в зависимости от state */}
                </div>
                <div className="deals__wrap deals__surrender">
                    <h2 onClick={this.handleSurrenderClick} className={classNames('deals__header', { 'deals__active': this.state.deals })}>Сдаю</h2>
                </div>
            </div>
            <Cards deals_state={this.state.deals} />
        </section>
    }
}



class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deals: props.deals_state      //в пропсе передается состояние сделок: арендует(true) или сдает(false)
        }
    }
    render() {
        return <section className="deals__cards">
            {this.state.deals ? (
                <Card />                                //передается с сервера список карточек с арендой
            ) : (
                    <Card />                                 // либо список карточек со сдачей (сам список доделаю)
                )}
        </section>
    }
}


class Card extends Component {
    render() {
        return <div className="deals__card">
            <div className="deals__card-wrap card">
                <div className="card__wrap-top">
                    <img src="../assets/item/b1.jpg" className="card__img" alt="" />

                    <h3>Электроскутер с зарядным устройством</h3>
                </div>
                <div className="card__wrap-service"></div>

            </div>


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
