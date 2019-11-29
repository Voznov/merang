import React, { Component } from 'react';
import { Card, List } from 'antd';
import { API_UPLOADS_URL } from '../constants';

import './Search.css'

const { Meta } = Card;

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
        ];
        return <div className="search"> {
            products.length != 0
                ? <div>
                    <List
                        grid={{
                            gutter: 1,
                            xs: 2,
                            sm: 3,
                            md: 4,
                            lg: 4,
                            xl: 6,
                            xxl: 6,
                        }}
                        dataSource={products}
                        renderItem={item => (
                            <List.Item>
                                <Card
                                    className="product-box"
                                    hoverable
                                    cover={<img
                                        src={API_UPLOADS_URL + "/" + item.src}
                                        width="156px"
                                        height="156px"
                                    />}
                                >
                                    <Meta title={item.price + " ₽/день"} description={item.name} />
                                </Card>
                            </List.Item>
                        )}
                    />
                    <div style={{height: "100px"}}/> {/*Space for scrolling*/}
                </div>
                : <p className="line-empty">Ничего не найдено.</p>
        }
        </div>
    }
}

export default Search;