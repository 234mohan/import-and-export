// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}

  state = {count1: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onIncrement2 = () => {
    this.setState(prevState => ({count1: prevState.count1 + 1}))
  }

  render() {
    const {count} = this.state
    const {count1} = this.state
    return (
      <div className="container">
        <div className="container1">
          <h1 className="heading">
            Bob ate <span className="list"> 0 </span> mangoes
            <span className="list"> 0 </span> bananas
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button className="button" onClick={this.onIncrement} type="button">
              Eat Mango
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <button
              className="button"
              onClick={this.onIncrement2}
              type="button"
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
