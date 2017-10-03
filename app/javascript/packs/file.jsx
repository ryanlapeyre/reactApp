import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Page, Card, Button, Thumbnail} from '@shopify/polaris';
const Hello2 = props => (
  <DisplayText size="large">Good evening, Dominic.</DisplayText>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello2/>,
    document.body.appendChild(document.createElement('div')),
  )
})
