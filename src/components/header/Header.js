import React, { Component } from 'react'
import "../../css/App.css";
import logo from '../../assets/logo.svg';

export default class Header extends Component {
    render() {
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <p> IGTI Bootcamp - Desenvolvedor Full Stack - Desafio Lista Paises. </p>
                    <div className='App-content' >
                        <p> Objetivos: </p>
                        <li>Criação de um app para listar países a partir da API https://restcountries.eu/rest/v2/all </li>
                        <li> Input para filtrar os países </li>
                        <li>Exibir quantidade de países e soma da população dos países filtrados. </li>
                    </div>
                </header>
            </div>
        )
    }
}
