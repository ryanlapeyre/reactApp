import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Page, Card, Button, Thumbnail} from '@shopify/polaris';
import '@shopify/polaris/styles.css';



document.addEventListener('DOMContentLoaded', () => {
  const domContainerNode = document.getElementById('dev')
    ReactDOM.render(<DisplayText size="extraLarge">Good evening, Dominic.</DisplayText>, domContainerNode);
  })
