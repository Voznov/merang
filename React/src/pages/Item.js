import React, { Component } from 'react';
import { Carousel, Icon, Button, Avatar, Rate } from 'antd';
import { YMaps, Map } from 'react-yandex-maps';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  LineShareButton,
  PocketShareButton,
  InstapaperShareButton,
  EmailShareButton,

  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  TelegramIcon,
  WhatsappIcon,
  RedditIcon,
  TumblrIcon,
  MailruIcon,
  EmailIcon,
  LivejournalIcon,
  ViberIcon,
  WorkplaceIcon,
  LineIcon,
  PocketIcon,
  InstapaperIcon,

} from 'react-share';

import "./Item.css";

class Item extends Component {
  render() {
    return (
      <div>
        <Carousel effect="fade">
          <div>
            <img
              className="item__img"
              alt="example"
              src="https://i2.rozetka.ua/goods/1851278/xiaomi_mi_scooter_m365_black_images_1851278780.jpg" />
          </div>
          <div>
            <img
              className="item__img"
              alt="example"
              src="https://i2.rozetka.ua/goods/1851278/xiaomi_mi_scooter_m365_black_images_1851278654.jpg" />
          </div>
          <div>
            <img
              className="item__img"
              alt="example"
              src="https://i2.rozetka.ua/goods/4736023/streetgo_sgfrcrbl02_images_4736023008.jpg" />
          </div>
          <div>
            <img
              className="item__img"
              alt="example"
              src="https://i2.rozetka.ua/goods/1851278/xiaomi_mi_scooter_m365_black_images_1851278654.jpg" />
          </div>
        </Carousel>
        <div className="item__like-wrap">
          <h1 className="item__title">Электроскутер с зарядным устройством</h1>
          <div className="item__like">
            <Icon className="item__like-icon" type="heart" theme="filled" style={{ color: '#E07676' }} />
            {/* <Icon type="smile" theme="outlined" /> */}
          </div>
        </div>
        <div className="item__price-wrap">
          <p className="item__price  item__price-day">550</p>
          <p className="item__price  item__price-week">3700</p>
          <p className="item__price  item__price-month">15000</p>
        </div>
        <p className="item__deposit">5000</p>
        <p className="item__address"> <Icon type="environment" style={{ fontSize: '24px', marginRight: '10px', color: '#5207F2' }} /> Санкт-Петербург, м. Василеостровская, 12 линия В. О., 51</p>
        <YMaps>
          <div className="item__map">
            <div className="item__reservation">
              <div className="item__reservation-wrap">
                {/* <Button type="primary" style={{ width: '100%', marginTop: '15px', marginBottom: '15px' }}>Редактировать</Button> */}

                <div className="item__reservation-wrap cost-metro">
                  <p className="item__reservation-cost">550</p>
                  <p className="item__reservation-metro">Василеостровская</p>
                </div>
                <Button type="primary" style={{ width: '49%', marginTop: '15px', marginBottom: '15px' }}>Забронировать</Button>
              </div>
            </div>
            <Map defaultState={{ center: [59.946189, 30.265652], zoom: 16 }} width={'100 %'} height={'160px'} />
          </div>
        </YMaps>

        {/* </div> */}
        <div className="item__description">
          <h2 className="item__description-title">Описание</h2>
          <p className="item__description-text">Самокат очень быстрый и проходимый. Подойдет для прогулки как в парке, так и в городе. Максимальная скорость 35 км/ч. Заряда хватает обычно примерно на 5 часов. Полностью заряжается за 2-3 часа.
Обращайтесь! ;)</p>
        </div>
        <div className="item__owner">
          <Avatar
            style={{ width: '111px', height: '80px', margin: '15px 15px 15px 0' }}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <div className="item__owner-wrap">
            <p className="item__owner-name">Дмитрий К.</p>
            <div className="item__owner-rate">
              <Rate allowHalf defaultValue={4.3} />
              <p className="item__owner-number">4.3 / 5</p>
            </div>
            <Button type="primary" ghost="true" style={{ width: '100%' }}>Написать сообщение</Button>
          </div>
        </div>
        <ul className="item__stat">
          <li className="item__stat-list">Опубликовано<span>20 ноября 2019</span></li>
          <li className="item__stat-list">Просмотров<span>1207</span></li>
          <li className="item__stat-list">В избранном<span>16</span></li>
        </ul>
        <div className="item__share">
          <h2 className="item__share-title">Поделиться</h2>
          <div className="item__share-wrap">
            <VKShareButton
              // url={shareUrl}
              // quote={title}
              className="Demo__some-network__share-button">
              <VKIcon
                size={32}
                round />
            </VKShareButton>
            <OKShareButton
              // url={shareUrl}
              // quote={title}
              className="Demo__some-network__share-button">
              <OKIcon
                size={32}
                round />
            </OKShareButton>
            <FacebookShareButton
              // url={shareUrl}
              // quote={title}
              className="Demo__some-network__share-button">
              <FacebookIcon
                size={32}
                round />
            </FacebookShareButton>
            <WhatsappShareButton
              // url={shareUrl}
              // quote={title}
              className="Demo__some-network__share-button">
              <WhatsappIcon
                size={32}
                round />
            </WhatsappShareButton>
            <ViberShareButton
              // url={shareUrl}
              // quote={title}
              className="Demo__some-network__share-button">
              <ViberIcon
                size={32}
                round />
            </ViberShareButton>
            <TelegramShareButton
              // url={shareUrl}
              // quote={title}
              className="Demo__some-network__share-button">
              <TelegramIcon
                size={32}
                round />
            </TelegramShareButton>
            <TwitterShareButton
              // url={shareUrl}
              // quote={title}
              className="Demo__some-network__share-button">
              <TwitterIcon
                size={32}
                round />
            </TwitterShareButton>
            <EmailShareButton
              // url={shareUrl}
              // quote={title}
              className="Demo__some-network__share-button">
              <EmailIcon
                size={32}
                round />
            </EmailShareButton>
          </div>
        </div>
        <div style={{ height: '100px' }}>

        </div>
      </div >
    );
  }
}


export default Item;