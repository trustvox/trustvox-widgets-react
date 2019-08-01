import React from 'react';

interface ReviewsProps {
  product;
}

class ProductReviews extends React.Component<ReviewsProps> {
  private setTrustvoxAttrs() {
    window['_trustvox'] = [];

    window['_trustvox'].push(
      ['_storeId', this.props.product.storeId],
      ['_productId', this.props.product.productId],
      ['_customStyle', this.props.product.customStyle || {}]
    );

    if (this.props.product.name)
      window['_trustvox'].push(['_productName', this.props.product.name]);

    if (this.props.product.photos)
      window['_trustvox'].push(['_productPhotos', this.props.product.photos]);
  }

  private addTrustvoxScript() {
    if (!this.isTrustvoxScriptLoaded()) {
      const script = window.document.createElement('script');
      script.src =
        '//static-staging.trustvox.com.br/sincero-staging/sincero.js';
      script.async = false;
      script.defer = true;
      document.head.appendChild(script);
    }
  }

  private autoloadTrustvox() {
    if (window['_trustvox_initializer'])
      window['_trustvox_initializer'].autoInitialize();
  }

  private cleanupTrustvox() {
    if (window['_trustvox_initializer'])
      window['_trustvox_initializer'].cleanup();
  }

  private isTrustvoxScriptLoaded() {
    return !!document.querySelector(
      "[src='//static-staging.trustvox.com.br/sincero-staging/sincero.js']"
    );
  }

  // Only necessary for this demo. Please, don't put this in production
  private cleanupStyles() {
    const customStyle = document.querySelector('style[data-jss]');
    if (customStyle) document.head.removeChild(customStyle);
  }

  private initializeTrustvox() {
    this.setTrustvoxAttrs();
    this.addTrustvoxScript();
    this.cleanupTrustvox();
    this.autoloadTrustvox();
  }

  public componentDidMount() {
    this.cleanupStyles();
    this.initializeTrustvox();
  }

  public componentDidUpdate() {
    this.cleanupStyles();
    this.initializeTrustvox();
  }

  public render() {
    return (
      <div>
        <div id="_sincero_widget"></div>
      </div>
    );
  }
}

export default ProductReviews;
