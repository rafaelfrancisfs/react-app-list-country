import React, { Component } from 'react'
import Countries from './countries/Countries';
import "../../css/App.css";
import Filter from './filter/Filter';

export default class Content extends Component {
    constructor() {
        super();
        this.state = {
            allCountries: [],
            filteredCountries: [],
            filter: '',
            filterPopulation: 0,
        }
    };

    async componentDidMount() {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const json = await res.json();
        const allCountries = json.map(({ name, numericCode, flag, population }) => {
            return {
                id: numericCode,
                name,
                flag,
                population,
                filterName: name.toLowerCase(),
            }
        });

        const filterPopulation = this.sumPopulation(allCountries);

        this.setState({
            allCountries,
            filteredCountries: Object.assign([], allCountries),
            filterPopulation,
        });
    };

    sumPopulation = ((countries) => {
        // soma população
        const totalPopulation = countries.reduce((acc, cur) => {
            return acc + cur.population;
        }, 0)
        return totalPopulation;
    });

    handleChangeFilter = (newText) => {
        this.setState({
            filter: newText,
        });

        //aplicando o filtro via input
        const filterLowerCase = newText.toLowerCase();
        const filteredCountries = this.state.allCountries.filter((country) => {
            return country.filterName.includes(filterLowerCase);
        });

        const filterPopulation = this.sumPopulation(filteredCountries);

        this.setState({
            filteredCountries,
            filterPopulation,
        });

    };



    render() {
        const { filteredCountries, filter, filterPopulation } = this.state;
        return (
            <>
                <Filter filter={filter}
                    onChangeFilter={this.handleChangeFilter}
                    countCountry={filteredCountries.length}
                    totalPopulation={filterPopulation}
                />
                <div className="Content">
                    <Countries countries={filteredCountries} />

                </div>
            </>
        );
    };
};
