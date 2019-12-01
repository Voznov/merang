import React, { Component } from 'react';
import { Card, List } from 'antd';

import ListItem from './ListItem';
import SearchForm from './SearchForm';

import './Search.css'

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoading: false
        }
    }

    render() {
        let products = [
            {
                name: 'Самокат Tech Team 270 Sport 2019',
                price: 240,
                src: "1.jpg"
            },
            {
                name: 'Фотоаппарат зеркальный Nikon D5300 Kit 18-55 VR AF-P Black',
                price: 550,
                src: "2.jpg"
            },
            {
                name: 'Игровая приставка Sony PlayStation 4',
                price: 450,
                src: "3.jpg"
            }
            ,
            {
                name: 'Игровая приставка Sony PlayStation 4',
                price: 450,
                src: "3.jpg"
            }
            ,
            {
                name: 'Игровая приставка Sony PlayStation 4',
                price: 450,
                src: "3.jpg"
            }
        ];
        return <div className="search"> {
            products.length != 0
                ? <div>
                    <SearchForm />

                    <ListItem />
                    <div style={{ height: "100px" }} /> {/*Space for scrolling*/}
                </div>
                : <p className="line-empty">Ничего не найдено.</p>
        }
        </div>
    }
}

export default Search;