import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Page, Card, Button, Thumbnail} from '@shopify/polaris';
import '@shopify/polaris/styles.css';






document.addEventListener('DOMContentLoaded', () => {
  const domContainerNode = document.getElementById('test')
    ReactDOM.render(
<DatePicker
  month={4}
  year={2017}
/>, domContainerNode);
  })
