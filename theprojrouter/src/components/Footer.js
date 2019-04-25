import React, { Component } from 'react';
import App from '../App'

class Footer extends Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <h3>
                    <a href="https://nycopendata.socrata.com/Social-Services/311-Service-Requests-from-2010-to-Present/erm2-nwe9">
                    Official Site 2010 - present
                    </a>
                </h3>

                <h3>
                    <a href="https://data.cityofnewyork.us/resource/fhrw-4uyv.json">
                    04/25/19 12pm - just discovered this file and will refactor for portfolio :(
                    </a>
                </h3>

            </div>
        );
    }
}

export default Footer;