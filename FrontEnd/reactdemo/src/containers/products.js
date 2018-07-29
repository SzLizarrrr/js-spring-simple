import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { getProducts } from '../actions/actions-products';
import { Link } from 'react-router-dom';

class Products extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterStr: "",
      dummyProducts: props.dummyProducts
    }
  }

  componentDidMount() {
    this.props.getProducts();
  }

  renderDummyProducts() {
    return this.state.dummyProducts
      .filter(product => {
        const keys = [false, ...Object.keys(product)];
        return keys.reduce((k1, k2) => {
          return k1 || (""+product[k2]).includes(this.state.filterStr)
        })
      })
      .map(product => {
      return (
        <tr key={product.name}>
          <td>{product.name}</td>
          <td>{product.brand}</td>
          <td>{product.price}</td>
          <td>{product.stock}</td>
          <td><img src={product.image} alt="" style={{width: "100px", height: "100px"}} /></td>
        </tr>
      );
    });
  }

  renderProducts() {
    return this.props.products
      .filter(product => {
        const keys = [false, ...Object.keys(product)];
        return keys.reduce((k1, k2) => {
          return k1 || (""+product[k2]).includes(this.state.filterStr)
        })
      })
      .map(product => {
        return (
          <tr key={product.name}>
            <td>
              <Link to={`/products/${product.name}`}>
                {product.name}
              </Link>
            </td>
            <td>{product.brand}</td>
            <td>{product.price}</td>
            <td>{product.stock}</td>
            <td><img src={product.image} alt="" style={{width: "100px", height: "100px"}} /></td>
          </tr>
        );
      });
  }

  handleSearch = (e) => {
    this.setState({
      filterStr: e.target.value
    });
  }

  render() {
    return (
      <div className="row col-sm-10">
        <h2>All Products</h2>
        <hr/>
        <div className="form-group pull-left">
          <label htmlFor="search">Search</label>
          <input
            id="search"
            type="text"
            className="form-control"
            value={this.state.filterStr}
            onChange={this.handleSearch}
          />
        </div>
        <div className="form-group pull-right">
          <Link className="btn btn-primary" to="/addproduct">
            Add New Product
          </Link>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {/*{ this.renderDummyProducts() }*/}
            { this.renderProducts() }
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getProducts: getProducts
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
// export default connect(mapStateToProps, {getProducts})(Products);