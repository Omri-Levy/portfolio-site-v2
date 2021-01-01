import React from 'react';
import TopLayout from './TopLayout/TopLayout';

// created the TopLayout component to allow folder structure, file extension and
// naming conventions parity. having top-layout.js due to the gatsby-material-ui
// plugin breaking without it.

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default ({ children }) => <TopLayout children={children} />;
