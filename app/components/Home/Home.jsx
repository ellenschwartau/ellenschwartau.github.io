import React from 'react'
import './Home.scss'
import Snake from 'react-snake'

/**
 * This component represents the Home-Page and renders some charts.
 */
export default class Home extends React.Component {

    render() {
        return (
            <div className="home">
                <div className="home__snake">
                    <Snake />
                </div>
                <div className="home__info">
                    
                </div>
            </div>
        );
    }
}
