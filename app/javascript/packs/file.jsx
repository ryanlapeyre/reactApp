import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Page, Card, Button, Thumbnail} from '@shopify/polaris';
const Hello = props => (
<DisplayText size="large">Good evening, Dominic.</DisplayText>
)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello/>,
    document.body.appendChild(document.createElement('DisplayText')),
  )
})
