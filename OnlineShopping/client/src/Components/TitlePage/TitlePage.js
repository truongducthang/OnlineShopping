import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class TitlePage extends Component {
  render() {
    return (
      <div className="title-page">
        <div className="breadcrumb">
          <div className="container">
            <Link to="#" className="breadcrumb-item">
              Home
            </Link>
            {this.props.slug ? (
              <span to="#" className="breadcrumb-item">
                {this.props.slug}
              </span>
            ) : (
              ''
            )}
            {this.props.name ? (
              <span to="#" className="breadcrumb-item">
                {this.props.name}
              </span>
            ) : (
              ''
            )}
            <h2 className="float-right">{this.props.name}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default TitlePage;
