import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'redux'
import PropTypes from 'prop-types'
import { Row, Col, Button, Form, Input } from 'antd';
import DateTimePicker from 'react-datetime';
import moment from 'moment';
import { addProduct, editProduct } from "../../redux/actions";
import "./ProductForm.css";

const FormItem = Form.Item;

class AddProduct extends Component {
    constructor(props) {
        super(props);

        const editMode = props.location.state !== undefined && props.location.state.product !== undefined;
        this.state = {
            editMode,
            productDefaults: editMode ? { ...props.location.state.product } : {},
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const product = { ...this.props.form.getFieldsValue() }
        if (this.state.editMode) {
            this.props.onEditProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        this.props.history.push('/');
    };

    FormItemWithDefaultValue = (props) => {
        const initialValue = this.state.productDefaults[props.value];
        const input = <Input type={props.type} />;
        return (
            <FormItem label={props.label}>
                {this.props.form.getFieldDecorator(props.value, {
                    initialValue,
                })(input)}
            </FormItem>
        );
    };

    DatePicketWithDefaultValue = (props) => {
        const initialValue = moment(this.state.productDefaults[props.value]);
        return (
            <FormItem label={props.label}>
                <this.FormItemWithDefaultValue value={props.value} type='hidden' />
                <DateTimePicker defaultValue={initialValue} onChange={selected => {
                    if (selected && moment.isMoment(selected)) {
                        const fieldValue = {};
                        fieldValue[props.value] = selected.format('llll');
                        this.props.form.setFieldsValue(fieldValue);
                    }
                }} />
            </FormItem>
        );
    };

    render() {
        return (
            <Row>
                <Col push={9} span={6}>
                    <Form onSubmit={this.handleSubmit}>
                        <this.FormItemWithDefaultValue value='id' type='hidden' />
                        <this.FormItemWithDefaultValue label='Name' value='name' type='text' />
                        <this.FormItemWithDefaultValue label='Quantity' value='quantity' type='number' />
                        <this.FormItemWithDefaultValue label='Price' value='price' type='number' />
                        <this.FormItemWithDefaultValue label='Image Url' value='imageUrl' type='text' />
                        <this.DatePicketWithDefaultValue label='Insertion Time' value='insertionTime' type='date' />
                        <this.DatePicketWithDefaultValue label='Sale End Time' value='endTime' type='date' />
                        <FormItem>
                            <Button type="primary" htmlType="submit">{this.state.editMode ? "Edit Product" : "Add Product"}</Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onAddProduct: (product) => dispatch(addProduct(product)), 
    onEditProduct: (product) => dispatch(editProduct(product)), 
});

AddProduct.propTypes = {
    products: PropTypes.array,
};

export default compose(
    connect(null, mapDispatchToProps),
    Form.create()
)(withRouter(AddProduct));
