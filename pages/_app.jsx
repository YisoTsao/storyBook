import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => <Component {...{ pageProps }} />;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape({}),
};

MyApp.defaultProps = {
  pageProps: {},
};

export default MyApp;
