import React from 'react'
import './App.css';

import firstCat from './imgs/firstCat.png'
import secondCat from './imgs/secondCat.png'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.firstScroll = React.createRef();
        this.secondScroll = React.createRef();
    }

    state = {
        images: 100,
        firstSize: 100,
        secondSize: 200
    }

    onScrollFirst = () => {
        let newScrollTop = this.firstScroll.current.scrollTop * (this.state.secondSize / this.state.firstSize)
        this.secondScroll.current.scrollTop  = newScrollTop
    }

    onScrollSecond = () => {
        let newScrollTop = this.secondScroll.current.scrollTop * (this.state.firstSize / this.state.secondSize)
        this.firstScroll.current.scrollTop  = newScrollTop
    }

    render() {
        return <>
            <div>
                <label>First Scroll Size</label>
                <input type="text" value={this.state.firstSize} onChange={(e) => {
                    this.setState({firstSize: Number(e.target.value)})
                }} />
            </div>

            <div>
                <label>Second Scroll Size</label>
                <input type="text" value={this.state.secondSize} onChange={(e) => {
                    this.setState({secondSize: Number(e.target.value)})
                }} />
            </div>

            <div className="container">
                <div className="scroll-first" ref={this.firstScroll} style={{height: this.state.firstSize, width: this.state.firstSize}} onScroll={this.onScrollFirst}>
                    {Array.from(Array(this.state.images).keys()).map((image, i) => {
                        return <div key={i} className="image" style={{height: this.state.firstSize, width: this.state.firstSize}}>
                            <img style={{height: this.state.firstSize}} src={firstCat} alt="This our cat" />
                            <span>{i+1}</span>
                        </div>
                    })}
                </div>
                <div className="scroll-second" ref={this.secondScroll} style={{height: this.state.secondSize, width: this.state.secondSize}} onScroll={this.onScrollSecond}>
                    {Array.from(Array(this.state.images).keys()).map((image, i) => {
                        return <div key={i} className="image" style={{height: this.state.secondSize, width: this.state.secondSize}}>
                            <img style={{height: this.state.secondSize}} src={secondCat} key={i} alt="And this is his brother" />
                            <span>{i+1}</span>
                        </div>
                    })}
                </div>
            </div>
        </>
    }
}

export default App;
