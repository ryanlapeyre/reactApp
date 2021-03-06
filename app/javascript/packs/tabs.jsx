import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import React, { Component } from 'react';
import {Tabs, Page, Card, Button, Thumbnail} from '@shopify/polaris';
import '@shopify/polaris/styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleTabChange = this.handleTabChange.bind(this);

    this.state = {
      selectedTab: 0,
    };
  }

  handleTabChange(selectedTab) {
    this.setState({selectedTab});
  }


  render() {
    const {selectedTab} = this.state;

    const tabs = [
      {
        id: 'tab1',
        title: 'something1',
        panelID: 'panel2',
      },
      {
        id: 'tab2',
        title: 'something2',
        panelID: 'panel2',
      },
    ];

    const tabPanels = [
      (
        <Tabs.Panel id="panel1">
        <Page title="Products">
         {this.props.products.map((product, index) => (
         <Card key={index}
           title={product.title}
           primaryFooterAction={{
             content: 'View',
             url: 'https://${shop_session.url}/admin/products/${product.id}',
           }}
           sectioned
         >
             <Thumbnail
               source={product.images[0].src}
               alt={product.title}
               size="large"
             />

         </Card>
         ))}
       </Page>
        </Tabs.Panel>
      ),
      (
        <Tabs.Panel id="panel2">
          <Button onClick={() => alert('Button clicked!')}>Example button </Button>
        </Tabs.Panel>
      ),
    ];

    return (
      <div>
        <Tabs
          selected={selectedTab}
          tabs={tabs}
          onSelect={this.handleTabChange}
          fitted
        />
        {tabPanels[selectedTab]}
      </div>
    );
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const domContainerNode = document.getElementById('tabs')
    const data = JSON.parse(domContainerNode.getAttribute('data'))
    ReactDOM.render(<App {...data} />, domContainerNode);
  })
