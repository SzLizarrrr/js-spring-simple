import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { editProduct, getProducts } from "../actions/actions-products";

class EditProduct extends Component {

  componentDidMount() {
      const { name } = this.props.match.params;
      this.props.getProducts();
  }

  onSubmit(values) {
    // console.log(values);
    // this.props.history.push('/');
    this.props.editProduct(values, () => {
      this.props.history.push('/');
    });
  }

  renderField = (field) => {
    // onChange={field.input.onChange} and etc.
    // pristine, touched, invalid
    const {label, type, name, meta: {touched, error}} = field;
    const className = `form-group ${touched && error ? 'text-danger' : ''}`;

    return (
      <div className={className}>
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          type={type}
          className="form-control"
          {...field.input}
        />
        <div>
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit, product }  = this.props;
    //console.log(product);

    return (
      <div className="row">
        <h2>Edit A Product</h2>
        <form className="form-group" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Name"
            type="text"
            name="name"
            component={this.renderField}
          />
          <Field
            label="Brand"
            type="text"
            name="brand"
            component={this.renderField}
          />
          <Field
            label="Price"
            type="number"
            name="price"
            component={this.renderField}
          />
          <Field
            label="Stock"
            type="number"
            name="stock"
            component={this.renderField}
          />
          <Field
            label="Image"
            type="text"
            name="image"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary" style={{marginRight: "20px"}}>Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }

}

function validate(values) {
  const errors = {};

  if(!values.name){
    errors.name = "Enter product name!";
  }

  if(!values.brand){
    errors.brand = "Enter product brand!";
  }

  if(!values.price){
    errors.price = "Enter product price!";
  }

  if(!values.stock){
    errors.stock = "Enter product stock!";
  }

  if(!values.image){
    errors.image = "Enter product image url!";
  }

  return errors;
}

function mapStateToProps({ products }, ownProps) {
  const product = products.find(p => p.name === ownProps.match.params.name);
  return {
    product: product,
    initialValues: product
  };
}

// export default reduxForm({
//   validate,
//   form: 'EditProductsForm',
//   enableReinitialize: true
// })(
//   connect(mapStateToProps, { editProduct })(EditProduct)
// );

EditProduct = reduxForm({
  validate,
  form: 'EditProductsForm'  // a unique identifier for this form
})(EditProduct)

// You have to connect() to any reducers that you wish to connect to yourself
EditProduct = connect(
  mapStateToProps, { editProduct, getProducts }
)(EditProduct)

export default EditProduct;