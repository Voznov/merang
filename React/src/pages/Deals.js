import React, { Component } from "react";
import "./Deals.css";
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
                    <h2 className="deals__header deals__active">Арендую</h2>                 {/* доделаю изменения классов active в зависимости от state */}
                </div>
                <div className="deals__wrap deals__surrender">
                    <h2 className="deals__header">Сдаю</h2>
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
