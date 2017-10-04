import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {DatePicker} from '@shopify/polaris';
import '@shopify/polaris/styles.css';






document.addEventListener('DOMContentLoaded', () => {
  const domContainerNode = document.getElementById('test')
    ReactDOM.render(
      <DisplayText size="extraLarge">Good evening, Dominic.</DisplayText>
      , domContainerNode);
  })
