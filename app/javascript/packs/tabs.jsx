import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Tabs} from '@shopify/polaris';
import '@shopify/polaris/styles.css';






document.addEventListener('DOMContentLoaded', () => {
  const domContainerNode = document.getElementById('tab')
    ReactDOM.render(

  <Tabs
    selected={0}
    tabs={[
      {
        id: 'all-customers',
        title: 'All',
        accessibilityLabel: 'All customers',
        panelID: 'all-customers-content',
      },
      {
        id: 'accepts-marketing',
        title: 'Accepts marketing',
        panelID: 'accepts-marketing-content',
      },
      {
        id: 'repeat-customers',
        title: 'Repeat customers',
        panelID: 'repeat-customers-content',
      },
      {
        id: 'prospects',
        title: 'Prospects',
        panelID: 'prospects-content',
      },
    ]}
  />

      , domContainerNode);
  })
