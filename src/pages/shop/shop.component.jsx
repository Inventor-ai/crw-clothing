import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import './shop.styles.scss';

class ShopPage extends React.Component {
  constructor(props) {
    super(props) ;
    console.log('shop - constructor', props);
    this.state = {
       collections : SHOP_DATA,
       router : props
    }
  }

  render () {
    console.log('shop render', this.state.collections );
    const path = this.state.router.match.path ;
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        SHOP PAGE LOGO
        <h2>Collections</h2>
        { 
            collections.map ( ( {id, ...otherCollectionProps} ) => (
            <CollectionPreview 
               key={id} path={path}
               { ...otherCollectionProps } />
            ))
        }
      </div>
    );
  }
}

export default ShopPage;