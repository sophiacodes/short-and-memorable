import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="app-details">
                <span>&copy; 2018</span>
                <span>Version 0.1</span>
                <span className="">Sophia Grace Domfeh</span>
            </div>
            <div className="app-name">
                <span className="word-count">Word Count</span>
                <span className="">Take home test</span>
            </div>
        </footer>
    )
};

export default (Footer);