import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Button} from '@shopify/polaris';
const Hello2 = props => (

  <DisplayText size="large">Good evening, Dominic.</DisplayText>


)


// Render component with data
document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('test')
ReactDOM.render(<Hello2/>, node)
})
