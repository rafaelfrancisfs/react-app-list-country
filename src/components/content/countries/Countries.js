import React, { Component } from 'react'
import Country from './Country';
import "../../../css/App.css";

export default class Countries extends Component {
    render() {
        const { countries } = this.props;
        return (
            <div className="Countries">

                {countries.map((country) => {
                    return <span key={country.id}><Country country={country} /></span>
                })}

            </div>
        )
    }
}
