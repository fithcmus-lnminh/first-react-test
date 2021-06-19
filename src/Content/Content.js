import React, { Component } from 'react'

class Content extends Component {
    constructor(props) {
        super(props);
    }

    edit = () => {alert("Edit mode")}
    remove = () => {alert("Remove mode")}
    
    render() {
        return (
            <section id="scroll">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className={"col-lg-6 " + this.props.position}>
                        <div className="p-5"><img className="img-fluid rounded-circle" src={"assets/img/"+ this.props.imageFile} alt="..." /></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <h2 className="display-4">{this.props.title}</h2>
                            <p>{this.props.content}</p>
                            <div class="row">
                                <div class="btn btn-info" onClick={this.edit}>Edit</div>
                                <div class="btn btn-warning" onClick={this.remove}>Remove</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        )
    }
}

export default Content


