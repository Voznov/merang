import React, { Component } from 'react';
import { signup, checkUsernameAvailability, checkEmailAvailability } from '../util/APIUtils';
import './Signup.css';
import { Link } from 'react-router-dom';
import {
    NAME_MIN_LENGTH, NAME_MAX_LENGTH,
    USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH,
    EMAIL_MAX_LENGTH,
    PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH, APP_NAME,
    ERROR_UNDEFINED_TEXT, ERROR_TOO_LONG_TEXT, ERROR_TOO_SHORT_TEXT
} from '../constants';

import { Form, Icon, Input, Button, notification } from 'antd';
const FormItem = Form.Item;

class Signup extends Component {
    render() {
        const AntWrappedSignupForm = Form.create()(SignupForm);
        return <div className="signup-container">
            <h1 className="page-title">Регистрация</h1>
            <div className="signup-content">
                <AntWrappedSignupForm onLogin={this.props.onLogin} />
            </div>
        </div>
    }
}

class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: ''
            },
            username: {
                value: ''
            },
            email: {
                value: ''
            },
            password: {
                value: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateUsernameAvailability = this.validateUsernameAvailability.bind(this);
        this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
        this.isFormInvalid = this.isFormInvalid.bind(this);
    }

    handleInputChange(event, validationFun) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: {
                value: inputValue,
                ...validationFun(inputValue)
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const signupRequest = {
            name: this.state.name.value,
            email: this.state.email.value,
            username: this.state.username.value,
            password: this.state.password.value
        };
        signup(signupRequest)
            .then(response => {
                notification.success({
                    message: APP_NAME,
                    description: "Вы успешно зарегистрировались. Войдите в свою учётную запись",
                });
                this.props.history.push("/login");
            }).catch(error => {
                notification.error({
                    message: APP_NAME,
                    description: error.message || {ERROR_UNDEFINED_TEXT}
                });
            });
    }

    isFormInvalid() {
        return !(this.state.name.validateStatus === 'success' &&
            this.state.username.validateStatus === 'success' &&
            this.state.email.validateStatus === 'success' &&
            this.state.password.validateStatus === 'success'
        );
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="signup-form">
                <FormItem
                    validateStatus={this.state.name.validateStatus}
                    help={this.state.name.errorMsg}>
                    <Input
                        size="large"
                        name="name"
                        autoComplete="off"
                        placeholder="Ваше полное имя"
                        value={this.state.name.value}
                        onChange={(event) => this.handleInputChange(event, this.validateName)} />
                </FormItem>
                <FormItem
                    hasFeedback
                    validateStatus={this.state.username.validateStatus}
                    help={this.state.username.errorMsg}>
                    <Input
                        size="large"
                        name="username"
                        autoComplete="off"
                        placeholder="Ваш логин"
                        value={this.state.username.value}
                        onBlur={this.validateUsernameAvailability}
                        onChange={(event) => this.handleInputChange(event, this.validateUsername)} />
                </FormItem>
                <FormItem
                    hasFeedback
                    validateStatus={this.state.email.validateStatus}
                    help={this.state.email.errorMsg}>
                    <Input
                        size="large"
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="Ваш e-mail"
                        value={this.state.email.value}
                        onBlur={this.validateEmailAvailability}
                        onChange={(event) => this.handleInputChange(event, this.validateEmail)} />
                </FormItem>
                <FormItem
                    validateStatus={this.state.password.validateStatus}
                    help={this.state.password.errorMsg}>
                    <Input
                        size="large"
                        name="password"
                        type="password"
                        autoComplete="off"
                        placeholder="Пароль от 6 до 20 символов"
                        value={this.state.password.value}
                        onChange={(event) => this.handleInputChange(event, this.validatePassword)} />
                </FormItem>
                <FormItem>
                    <Button type="primary"
                        htmlType="submit"
                        size="large"
                        className="signup-form-button"
                        disabled={this.isFormInvalid()}>Зарегистрироваться</Button>
                    Уже зарегистрированы? <Link to="/login">Войти</Link>
                </FormItem>
            </Form>
        );
    }

    // Validation Functions

    validateName = (name) => {
        if (name.length > NAME_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Слишком длинное имя (${ERROR_TOO_LONG_TEXT} ${NAME_MAX_LENGTH})`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

    validateEmail = (email) => {
        if (!email) {
            return {
                validateStatus: 'error',
                errorMsg: 'E-mail не может быть пустым'
            }
        }

        const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
        if (!EMAIL_REGEX.test(email)) {
            return {
                validateStatus: 'error',
                errorMsg: 'E-mail не валиден'
            }
        }

        if (email.length > EMAIL_MAX_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Слишком длинный e-mail (${ERROR_TOO_LONG_TEXT} ${EMAIL_MAX_LENGTH})`
            }
        }

        return {
            validateStatus: null,
            errorMsg: null
        }
    }

    validateUsername = (username) => {
        if (username.length < USERNAME_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Слишком короткий логин (${ERROR_TOO_SHORT_TEXT} ${USERNAME_MIN_LENGTH})`
            }
        } else if (username.length > USERNAME_MAX_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Слишком длинный логин (${ERROR_TOO_LONG_TEXT} ${USERNAME_MAX_LENGTH})`
            }
        } else {
            return {
                validateStatus: null,
                errorMsg: null
            }
        }
    }

    validateUsernameAvailability() {
        // First check for client side errors in username
        const usernameValue = this.state.username.value;
        const usernameValidation = this.validateUsername(usernameValue);

        if (usernameValidation.validateStatus === 'error') {
            this.setState({
                username: {
                    value: usernameValue,
                    ...usernameValidation
                }
            });
            return;
        }

        this.setState({
            username: {
                value: usernameValue,
                validateStatus: 'validating',
                errorMsg: null
            }
        });

        checkUsernameAvailability(usernameValue)
            .then(response => {
                if (response.available) {
                    this.setState({
                        username: {
                            value: usernameValue,
                            validateStatus: 'success',
                            errorMsg: null
                        }
                    });
                } else {
                    this.setState({
                        username: {
                            value: usernameValue,
                            validateStatus: 'error',
                            errorMsg: 'Этот логин уже занят'
                        }
                    });
                }
            }).catch(error => {
                // Marking validateStatus as success, Form will be recchecked at server
                this.setState({
                    username: {
                        value: usernameValue,
                        validateStatus: 'success',
                        errorMsg: null
                    }
                });
            });
    }

    validateEmailAvailability() {
        // First check for client side errors in email
        const emailValue = this.state.email.value;
        const emailValidation = this.validateEmail(emailValue);

        if (emailValidation.validateStatus === 'error') {
            this.setState({
                email: {
                    value: emailValue,
                    ...emailValidation
                }
            });
            return;
        }

        this.setState({
            email: {
                value: emailValue,
                validateStatus: 'validating',
                errorMsg: null
            }
        });

        checkEmailAvailability(emailValue)
            .then(response => {
                if (response.available) {
                    this.setState({
                        email: {
                            value: emailValue,
                            validateStatus: 'success',
                            errorMsg: null
                        }
                    });
                } else {
                    this.setState({
                        email: {
                            value: emailValue,
                            validateStatus: 'error',
                            errorMsg: 'Этот e-mail уже используется'
                        }
                    });
                }
            }).catch(error => {
                // Marking validateStatus as success, Form will be recchecked at server
                this.setState({
                    email: {
                        value: emailValue,
                        validateStatus: 'success',
                        errorMsg: null
                    }
                });
            });
    }

    validatePassword = (password) => {
        if (password.length < PASSWORD_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Слишком короткий пароль (${ERROR_TOO_SHORT_TEXT} ${PASSWORD_MIN_LENGTH})`
            }
        } else if (password.length > PASSWORD_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Слишком длинный пароль (${ERROR_TOO_LONG_TEXT} ${PASSWORD_MAX_LENGTH})`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };
        }
    }

}

export default Signup;