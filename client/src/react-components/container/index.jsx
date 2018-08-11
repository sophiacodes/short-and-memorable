import React from 'react';
import PropTypes from 'prop-types';
import './container.css';

const Container = ({...props}) => {
    return (
        <section className="container">{props.children}</section>
    )
}

Container.propTypes = {
    children: PropTypes.node.isRequired
};

export default (Container);