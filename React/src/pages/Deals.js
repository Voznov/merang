import React, { Component } from "react";
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
        return
        <section className="deals--container">
            <h1 className="deals--title">Сделки</h1>
            <div className="deals--type">
                <div className="deals--occupy" /*onClick={handleOccupyClick}*/>
                    <h2 className="deals--occupy__header">Арендую</h2>                 //доделаю изменения классов active в зависимости от state
                    <div className="deals--occupy__active"></div>
                </div>
                <div className="deals-surrender" /*onClick={handleSurrenderClick}*/>
                    <h2 className="deals--surrender__header">Сдаю</h2>
                    <div className="deals--surrender__active"></div>
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
        return
        <section className="deals--cards">
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
        return
        <div className="deals--cards__card">


        </div>
    }
}

export default Deals;