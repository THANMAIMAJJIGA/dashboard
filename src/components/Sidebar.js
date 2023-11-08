// Sidebar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faMoneyBillAlt, faHandHoldingUsd, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

    const sidebarStyle = {

        height: '100vh',
        backgroundColor: '#FFA500',
        color: '#fff',
        padding: '20px',
        gap: '2rem',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        flexdirection: 'column',
        alignitems: 'center',
        justifycontent: 'spacebetween',
    };

    const linkStyle = {
        textDecoration: 'none',
        color: 'black',
    };

    return (
        <div style={sidebarStyle} >
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                    <a href="#dashboard" style={linkStyle}>
                        <FontAwesomeIcon icon={faChartBar} />

                    </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <a href="#income" style={linkStyle}>
                        <FontAwesomeIcon icon={faHandHoldingUsd} />

                    </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <a href="#expenses" style={linkStyle}>
                        <FontAwesomeIcon icon={faMoneyBillAlt} />

                    </a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <a href="#expenses" style={linkStyle}>
                        <FontAwesomeIcon icon={faExchangeAlt} />
                    </a>
                </li>
                {/* Add more sidebar items here */}
            </ul>

        </div>
    );
};

export default Sidebar;
