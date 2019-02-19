import React, {Component} from 'react';

// use stateful component to store ui state
class Layout extends Component {
    render() {
        return (
            <main>
                {this.props.children}
            </main>
        );
    }
}

export default Layout;