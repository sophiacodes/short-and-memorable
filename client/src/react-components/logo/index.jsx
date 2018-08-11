import React, { Fragment } from 'react';
import './logo.css';

const Logo = () => {
    return (
        <Fragment>
          <h1 className="title logo">
            <span className="logo-left">Open</span>Law 
          </h1>
          <h2 className="subtitle">
            Next generation <b>smart</b> legal agreements.
          </h2>
        </Fragment>
    )
}

export default (Logo);