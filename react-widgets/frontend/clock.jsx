import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState({ time: new Date()});

  }

  render() {
    if (!this.state.time) return null;

    let seconds = this.state.time.getSeconds();
    let minutes = this.state.time.getMinutes();
    let hours = this.state.time.getHours();
    let day = this.state.time.getDate();
    let month = this.state.time.getMonth();
    let year = this.state.time.getFullYear();

    function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

    let betterMinutes = checkTime(minutes);
    let betterSeconds = checkTime(seconds);

    const fullTime = hours + ':' + betterMinutes + ':' + betterSeconds;
    const fullDate = month + "-" + day + "-" + year;

    return (

      <div className="clock">
        <h1 className="clock-name">:)</h1>
        <h2 className="clock-timer">{fullTime}</h2>
        <h3 className="date">{fullDate}</h3>
      </div>
    );
  }

  componentDidMount() {
    this.intervaal = setInterval( this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervaal);
  }
}






export default Clock;
