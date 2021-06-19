import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer class="py-5 bg-black">
                <div class="container px-5"><p class="m-0 text-center text-white small">{this.props.content}</p></div>
            </footer>
        )
    }
}

export default Footer
