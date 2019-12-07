import React, { Component } from "react";
import "./Login.css";

class Deals extends Component {
    render() {
        return
        <section id="deals--container" className="deals--container">
            <h1 className="deals--title">Сделки</h1>
            <div className="deals--type">
                <div className="deals--occupy">
                  <h2 className="deals--occupy__header">Арендую</h2>
                  <div className="deals--occupy__active"></div>
                </div>
                <div className="deals-surrender">
                  <h2 className="deals--surrender__header">Сдаю</h2>
                  <div className="deals--surrender__active"></div>
                </div>
            </div>
            <cards
        </section>
    }
}


class Cards extends Component {
    render() {
        return
        <section id="deals--cards" className="deals--cards">
            <card>
        </section>
    }
}


class Card extends Component {
    render() {
        return
        <div id="deals--cards__card" className="deals--cards__card">
          

        </div>
    }
}
