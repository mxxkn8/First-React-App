import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
            <footer  style={{width: '2px',marginRight: '50px'}} >
            Copyright &copy; {new Date().getFullYear} Dev Connector
            </footer>
            </div>
        )
    }
}
