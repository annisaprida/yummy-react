import React, { Component } from "react"
import Draggable from "react-draggable";
import "./scss/Home.scss"

class Home extends Component {
  constructor() {
    super();
    this.state = {
        selectedColorArea: '#001219'
    };
  }
  dragHandler = (event, info) => {
    let colorArea = {
      "#001219": document.getElementById('#001219').getBoundingClientRect(),
      "#005f73": document.getElementById('#005f73').getBoundingClientRect(),
      "#0a9396": document.getElementById('#0a9396').getBoundingClientRect(),
      "#94d2bd": document.getElementById('#94d2bd').getBoundingClientRect(),
      "#e9d8a6": document.getElementById('#e9d8a6').getBoundingClientRect(),
      "#ee9b00": document.getElementById('#ee9b00').getBoundingClientRect(),
      "#ca6702": document.getElementById('#ca6702').getBoundingClientRect()
    }
    var rect2 = document.getElementById('color-picker__button').getBoundingClientRect();
    Object.keys(colorArea).map(key => 
      (!(colorArea[key].right < rect2.left ||
      colorArea[key].left > rect2.right ||
      colorArea[key].bottom < rect2.top ||
      colorArea[key].top > rect2.bottom))
       && this.setState({selectedColorArea: key})
    )
  }


  render() {
    const colors = ["#001219", "#005f73", "#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702"]
    let { selectedColorArea } = this.state;
    return (
      <>
      <div className="notouch"></div>
      <h1>yummy front end assignment - modified</h1>
      <section class="color-preview" style={{backgroundColor: selectedColorArea}}>
      </section>
      <section className="color-picker" >
        
        <ul>
          {colors.map(function (index) {
            return <li
              key={index}
              id={index}
              className="color__item"
              style={{ backgroundColor: index }}
            >
              <a
                href={index}
                style={{ color: index }}
              >
                color
              </a>
            </li>;
          })}
        </ul>
        <Draggable
          onDrag={this.dragHandler}
        >
          <button id="color-picker__button">
            o
          </button>
        </Draggable>
      </section >
      </>
    )
  }
}

export default Home

