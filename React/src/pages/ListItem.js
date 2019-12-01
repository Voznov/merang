import React, { Component } from 'react';
import { Card, List } from 'antd';
import { API_UPLOADS_URL } from '../constants';

import './ListItem.css'

const { Meta } = Card;

class ListItem extends Component {
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
    return (
      <div>
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
                className="item"
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
      </div>
    );
  }
}

export default ListItem;