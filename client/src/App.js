import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';
import Layout from './hoc/layout/layout';
import Form from './containers/form/form';
import OrderComplete from './components/order_complete/order_complete';


class App extends Component {

    // should handle with router if app gets lager
    render() {
        const renderComp = this.props.formSubmitted ? <OrderComplete/> : <Form/>;
        return (
            <BrowserRouter>
                <Layout>
                    {renderComp}

                    {/*<Route path="/" exact component={Form}/>*/}
                    {/*<Route path="/success" exact component={OrderComplete}/>*/}
                </Layout>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
};

export default connect(mapStateToProps)(App);
