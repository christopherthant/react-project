import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Input from '../../components/ui/input/input';
import styles from './form.module.css';
import * as actionCreators from '../../store/actions/form';
import validate from './utilities/validators';

class Form extends Component {

    // for validation and ui
    state = {
        ccName: {
            rules: {
                required: true,
            },
            valid: false,
            touched: false,
            errorMessage: 'This field is required'
        },
        ccNumber: {
            rules: {
                required: true,
                isNumeric: true,
                minLength: 12,
                maxLength: 12
            },
            valid: false,
            touched: false,
            errorMessage: "Invalid Input"
        },
        ccCode: {
            rules: {
                required: true,
                isNumeric: true,
                minLength: 3,
                maxLength: 3,
            },
            valid: false,
            touched: false,
            errorMessage: "Invalid Input"
        },
        ccExMo: {
            rules: {
                required: true,
                isNumeric: true,
                minLength: 2,
                maxLength: 2,
            },
            valid: false,
            touched: false,
            errorMessage: "Invalid Input"
        },
        ccExYr: {
            rules: {
                required: true,
                isNumeric: true,
                minLength: 2,
                maxLength: 2,
            },
            valid: false,
            touched: false,
            errorMessage: "Invalid Input"
        },
        firstName: {
            rules: {
                required: true,
            },
            valid: false,
            touched: false,
            errorMessage: 'This field is required'
        },
        lastName: {
            rules: {
                required: true,
            },
            valid: false,
            touched: false,
            errorMessage: 'This field is required'
        },
        address1: {
            rules: {
                required: true,
            },
            valid: false,
            touched: false,
            errorMessage: 'This field is required'
        }
    };

    changeHandler = (event, touched) => {
        const name = event.target.name;
        const value = event.target.value;
        this.checkField(name, value, touched);
    };

    checkField(name, value, touched) {
        const updatedState = {...this.state};
        const updatedEl = {...updatedState[name]};

        if (updatedEl) {
            updatedEl.valid = validate(value, updatedEl.rules);
            if (touched) {
                updatedEl.touched = true;
            }
            updatedState[name] = updatedEl;
            this.setState(updatedState);
        }

        this.props.onValueChange(name, value, touched);
        return updatedEl.valid;
    }

    focusHandler = (event) => {
        this.changeHandler(event, true);
    };

    checkForm() {
        return Object.keys(this.state).every(key => {
            return this.checkField(key, this.props[key], true);
        });
    }

    submitHandler = (event) => {
        event.preventDefault();
        if (this.checkForm()) {
            this.props.submit();
        }
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="hidden" value={this.props.amount}/>
                <div className={styles.cardInfo}>
                    <h3>Credit Card Information</h3>

                    <table cellSpacing="0">
                        <tbody>
                        <tr>
                            <td>
                                <Input label="Cardholder Name" type="text" name="ccName" value={this.props.ccName}
                                       change={(e) => this.changeHandler(e)}
                                       focus={(e) => this.focusHandler(e)}
                                       validation={this.state.ccName}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input label="Card Number:" type="text" name="ccNumber" value={this.props.ccNumber}
                                       change={(e) => this.changeHandler(e)} validation={this.state.ccNumber}
                                       focus={(e) => this.focusHandler(e)}
                                />
                            </td>
                            <td>
                                <Input label="Card Code" type="text" name="ccCode" value={this.props.ccCode}
                                       change={(e) => this.changeHandler(e)} validation={this.state.ccCode}
                                       focus={(e) => this.focusHandler(e)}/>
                            </td>
                            <td>
                                <Input label="Expiration" type="text" name="ccExMo" value={this.props.ccExMo}
                                       change={(e) => this.changeHandler(e)} validation={this.state.ccExMo}
                                       focus={(e) => this.focusHandler(e)}/>
                            </td>
                            <td>/</td>
                            <td>
                                <Input type="text" name="ccExYr" value={this.props.ccExYr}
                                       change={(e) => this.changeHandler(e)} validation={this.state.ccExYr}
                                       focus={(e) => this.focusHandler(e)}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.billing}>
                    <h3>Billing Information</h3>
                    <table cellSpacing="0">
                        <tbody>
                        <tr>
                            <td>
                                <Input label="First Name" type="text" name="firstName" value={this.props.firstName}
                                       change={(e) => this.changeHandler(e)} validation={this.state.firstName}
                                       focus={(e) => this.focusHandler(e)}/>
                            </td>
                            <td>
                                <Input label="Last Name" type="text" name="lastName" value={this.props.lastName}
                                       change={(e) => this.changeHandler(e)} validation={this.state.lastName}
                                       focus={(e) => this.focusHandler(e)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input label="Company" type="text" name="company" onChange={this.changeHandler}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input label="Address 1" type="text" name="address1" value={this.props.address1}
                                       change={(e) => this.changeHandler(e)} validation={this.state.address1}
                                       focus={(e) => this.focusHandler(e)}/>
                            </td>

                            <td>
                                <Input label="Address 2" type="text" name="address2" onChange={this.changeHandler}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Input label="City" type="text" name="city" onChange={this.changeHandler}/>
                            </td>
                            <td>
                                <Input label="State" type="text" name="state" onChange={this.changeHandler}/>
                            </td>
                            <td>
                                <Input label="Zip" type="text" name="zip" value={this.props.zip}
                                       change={(e) => this.changeHandler(e)}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <input type="submit" name="submit" value="Submit Payment"/>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onValueChange: (name, value) => dispatch(actionCreators.changeForm(name, value)),
        submit: () => dispatch(actionCreators.submitData())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);