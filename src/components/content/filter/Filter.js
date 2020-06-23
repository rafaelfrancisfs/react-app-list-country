import React, { Component } from 'react'
import "../../../css/App.css";
import { formatNumber } from '../../../utils/utils';
export default class Filter extends Component {

    handleInputChange = (event) => {
        const newText = event.target.value;
        this.props.onChangeFilter(newText);
    }
    render() {
        const { filter, countCountry, totalPopulation } = this.props;

        return (
            <div className="Filter">
                <input className="Filter-input" placeholder="Pesquisar...." type="text" value={filter} onChange={this.handleInputChange} />
                    |<span className="Filter.country">Países: <strong>{countCountry}</strong> </span>
                    |<span className="Filter.population">População: <strong>{formatNumber(totalPopulation)}</strong> </span>
            </div>
        )
    }
}
