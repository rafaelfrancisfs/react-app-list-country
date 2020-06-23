import React, { Component } from 'react'
import "../../../css/App.css";

export default class Country extends Component {
    render() {
        const { country } = this.props;
        const { name, flag } = country;
        return (
            <div className="Country">
                <img src={flag} alt={name} className="Country-flag" />
                <span>{name}</span>

            </div>
        )
    }
}
