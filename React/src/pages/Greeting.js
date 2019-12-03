import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button, Form, Icon } from 'antd';
import { APP_NAME } from '../constants';

import './Greeting.css';
import SearchForm from "./SearchForm";

const FormItem = Form.Item;

class Greeting extends Component {
    render() {
        return <div id="greeting-container" className="greeting-container">
            <h1 className="greeting-text-title">Merang.ru</h1>
            <Button type="link" size="large" href="/login" className="form-button" >Войти</Button>
            <Button type="primary" size="large" href="/signup" className="form-button" >Зарегистрироваться</Button>
        </div>
    }
}

export default Greeting;