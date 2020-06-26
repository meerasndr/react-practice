import React from 'react';
import ReactDOM from 'react-dom'
import ClockDisplay from './ClockDisplay'
const moment = require('moment-timezone')


class App extends React.Component {
    state = {currtime: ''}

    componentDidMount() {
        setInterval(() => {
            this.setState({currtime: new Date().toLocaleTimeString()})
        }, 1000)
        console.log(moment.tz.countries())
    }

    render(){
        return (
            <div className="ui three column grid">
                <div className="column">
                    <div className="ui fluid card">
                    <div className="content"><ClockDisplay city="Bangalore" time={this.state.currtime}/></div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui fluid card">
                    <div className="content"><ClockDisplay city="Los Angeles" time={moment().tz("America/Los_Angeles").format('HH:mm:ss')}/></div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui fluid card">
                    <div className="content"><ClockDisplay city="Chicago" time={moment().tz("America/Chicago").format('HH:mm:ss')}/></div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui fluid card">
                    <div className="content"><ClockDisplay city="Montreal" time={moment().tz("America/New_York").format('HH:mm:ss')}/></div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui fluid card">
                    <div className="content"><ClockDisplay city="London" time={moment().tz("Europe/London").format('HH:mm:ss')}/></div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui fluid card">
                    <div className="content"><ClockDisplay city="Moscow" time={moment().tz("Asia/Riyadh").format('HH:mm:ss')}/></div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui fluid card">
                    <div className="content"><ClockDisplay city="Tokyo" time={moment().tz("Asia/Tokyo").format('HH:mm:ss')}/></div>
                    </div>
                </div>
                <div className="column">
                    <div className="ui fluid card">
                    <div className="content"><ClockDisplay city="Sydney" time={moment().tz("Australia/Sydney").format('HH:mm:ss')}/></div>
                    </div>
                </div>
            </div>
                
            )
        }
    }

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)