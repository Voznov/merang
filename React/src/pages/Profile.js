import React, { Component } from 'react';
import { getUserProfile } from '../util/APIUtils';
import { Avatar, List } from 'antd';
import { getAvatarColor } from '../util/Colors';
import { formatDate } from '../util/Helpers';
import LoadingIndicator from '../common/LoadingIndicator';
import './Profile.css';
import NotFound from '../common/NotFound';
import ServerError from '../common/ServerError';
import { APP_VERSION } from '../constants';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isLoading: false
        }
        this.loadUserProfile = this.loadUserProfile.bind(this);
    }

    loadUserProfile(username) {
        this.setState({
            isLoading: true
        });

        getUserProfile(username)
            .then(response => {
                this.setState({
                    user: response,
                    isLoading: false
                });
            }).catch(error => {
                if (error.status === 404) {
                    this.setState({
                        notFound: true,
                        isLoading: false
                    });
                } else {
                    this.setState({
                        serverError: true,
                        isLoading: false
                    });
                }
            });
    }

    componentDidMount() {
        const username = this.props.match.params.username;
        this.loadUserProfile(username);
    }

    componentDidUpdate(nextProps) {
        if (this.props.match.params.username !== nextProps.match.params.username) {
            this.loadUserProfile(nextProps.match.params.username);
        }
    }

    render() {

        if (this.state.isLoading) {
            return <LoadingIndicator />;
        }

        if (this.state.notFound) {
            return <NotFound />;
        }

        if (this.state.serverError) {
            return <ServerError />;
        }

        let menuItems = [
            {
                text: 'Выйти',
                onClick: (() => this.props.onLogout()),
                className: 'logout-button'
            }
        ];

        return (
            <div className="profile">
                {
                    this.state.user ? (
                        <div className="user-profile">
                            <div className="user-details">
                                <div className="user-avatar">
                                    <Avatar className="user-avatar-circle" style={{ backgroundColor: getAvatarColor(this.state.user.name) }}>
                                        {this.state.user.name[0].toUpperCase()}
                                    </Avatar>
                                </div>
                                <div className="user-summary">
                                    <div className="full-name">{this.state.user.name}</div>
                                    <div className="username">@{this.state.user.username}</div>
                                </div>
                            </div>
                            {this.props.currentUser.name == this.state.user.name ? (
                                <div>
                                    <List
                                        className="list"
                                        bordered={false}
                                        itemLayout="horizontal"
                                        dataSource={menuItems}
                                        renderItem={item => (
                                            <List.Item onClick={item.onClick} >
                                            <div style={{display: "table"}}>
                                                    <div className={item.className + " list-item"} >{item.text}</div>
                                                </div>
                                            </List.Item>
                                        )}
                                    />
                                    <div style={{display: "table"}}>
                                        <div className="version list-item">Версия: {APP_VERSION}</div>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    ) : null
                }
            </div>
        );
    }
}

export default Profile;