import React from "react";
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { withRouter } from "react-router-dom";
import autoBind from "auto-bind";
import Product from "../Product/Product";
import { getProducts, buyProduct, deleteProduct } from "../../redux/actions";
import "./Shop.css";

class Shop extends React.Component {
    constructor(props, context) {
        super(props, context);
        autoBind(this);

        this.props.onGetProducts();
    }

    onBuyClick(productToBuy) {
        this.props.onBuyProduct(productToBuy.id);
    }

    onDeleteClick(productToDelete) {
        this.props.onDeleteProduct(productToDelete.id);
    }

    onEditClick(productToEdit) {
        this.props.history.push({
            pathname: '/edit-product',
            state: { product: productToEdit },
        });
    }

    render() {
        return (
            <div className="shop">
                <p></p>
                <div className="products-container">
                    {
                        this.props.products.map((product, key) =>
                            <div key={key} className="product-container">
                                <Product
                                    product={product}
                                    onBuyClick={this.onBuyClick}
                                    onDeleteClick={this.onDeleteClick}
                                    onEditClick={this.onEditClick}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state
});

const mapDispatchToProps = dispatch => ({
    onGetProducts: () => dispatch(getProducts()),
    onBuyProduct: (productId) => dispatch(buyProduct(productId)), 
    onDeleteProduct: (productId) => dispatch(deleteProduct(productId)), 
});

Shop.propTypes = {
    products: PropTypes.array,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
)(Shop);