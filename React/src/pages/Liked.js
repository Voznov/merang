import React, { Component } from "react";
import classNames from "classnames";
import { Icon, Button } from 'antd';

import "./Liked.css";

class Liked extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,    //по умолчанию открыта вкладка арендую
        };
        this.handleFavoritesClick = this.handleFavoritesClick.bind(this);
        this.handleSubscriptionsClick = this.handleSubscriptionsClick.bind(this);
    }

    handleFavoritesClick() {
        this.setState({ liked: false });
    }

    handleSubscriptionsClick() {
        this.setState({ liked: true });
    }

    render() {
        let actual_liked = this.state.liked;
        return <section className="liked__container">
            <div className="liked__type">
                <div className="liked__wrap liked__favorites" >
                    <h2 onClick={this.handleFavoritesClick}
                        className={classNames('liked__header', { 'liked__active': !actual_liked })}>Избранное</h2>
                </div>
                <div className="liked__wrap liked__subscriptions">
                    <h2 onClick={this.handleSubscriptionsClick}
                        className={classNames('liked__header', { 'liked__active': actual_liked })}>Подписки</h2>
                </div>
            </div>
            <Cards liked_state={actual_liked} />
        </section>
    }
}
class Cards extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        const favorites_liked_list = favorites_liked.map((favorites_card) =>
            <Card key={favorites_deal.title.toString()}
                deal={favorites_deal} />
        )

        const subscriptions_liked_list = subscriptions_liked.map((subscriptions_card) =>
            <Card key={subscriptions_card.title.toString()}
                card={subscriptions_card} />
        )

        return <section className="liked__cards">
            {this.props.liked_state ? favorites_liked_list : subscriptions_liked_list}
        </section>
    }
}

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: props.card
        }
    }
    render() {
        let card = this.state.card;
        return <div className="liked__list">
            <div className="liked__card">
                <img
                    className="liked__img"
                    alt=""
                    src='https://i.pinimg.com/originals/40/6d/fb/406dfba686da73abe5d620b10e600785.png'
                />

                <div className="liked__description">
                    <div className="liked__price-icon-wrap">
                        <p className="liked__price">550</p>
                        <Icon className="liked__like-icon" type="heart" theme="filled" style={{ color: '#E07676' }} />
                    </div>
                    <h2 className="liked__title">Самокат внедорожный</h2>
                    <Button type="primary" style={{ width: '100%', marginTop: '10px' }}>Забронировать</Button>
                </div>


            </div>
        </div>
    }
}

export default Liked;
