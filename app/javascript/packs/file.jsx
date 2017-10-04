import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Page, Card, Button, Thumbnail} from '@shopify/polaris';
import '@shopify/polaris/styles.css';




const Hello2 = props => (
  <DisplayText size="extraLarge">Good evening, Dominic.</DisplayText>

)



document.addEventListener('DOMContentLoaded', () => {
  const domContainerNode = document.getElementById('dev')
    ReactDOM.render(Hello2, domContainerNode);
  })
