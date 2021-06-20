import React, { Component } from 'react'

class Content extends Component {
    constructor(props) {
        super(props);
    }

    edit = () => {alert("Edit mode")}
    remove = () => {alert("Remove mode")}
    
    render() {
        return (
            <div className="col-lg-4 p-4 pb-5">
            <div className="row">
            <div className="col-lg-5">
                <div className="p-1"><img className="img-fluid rounded-circle" src={"assets/img/"+ this.props.imageFile} alt="..." /></div>
            </div>
            <div className="col-lg-7">
                <div className="p-1">
                    <h2 className="display-6">{this.props.title}</h2>
                    <p>{this.props.content}</p>
                    <div className="row">
                        <div className="btn btn-info" onClick={this.edit}>Edit</div>
                        <div className="btn btn-warning" onClick={this.remove}>Remove</div>
                    </div>
                </div>
            </div>
            </div>
            <hr></hr>
            </div>
        
            
        )
    }
}

export default Content


