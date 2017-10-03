import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Button} from '@shopify/polaris';
const Hello = props => (

  <DisplayText size="large">Good evening, Dominic.</DisplayText>


)


// Render component with data
document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('hello-react')
ReactDOM.render(<Hello {...data} />, node)
})
