import React, { Component } from 'react'
import "./Tour.scss"

export class Tour extends Component {
    state = {
        showInfo: false
    };
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    render() {
        const {id,town,img,name, info} = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                <img width="200" src={img} alt="" />
                <span className="close-btn" onClick={()=>{removeTour(id)}}>
                <i className="fas fa-window-close"/>
                </span>
                </div>
                <div className="tourinfo">
                     <h3>{town}</h3>
                     <h4>{name}</h4>
                     <h5>
                          info{" "}
                        <span onClick={this.handleInfo}><i className="fas fa-caret-square-down"/>
                       </span>
                      </h5>
                {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>
        )
    }
}
 
export default Tour