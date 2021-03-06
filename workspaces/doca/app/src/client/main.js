import { connect } from 'react-redux';
import { App } from '@cloudflare/doca-default-theme';
import Introduction from './introduction';
import config from '../../config';

// this dynamically imports css, less and sass from the "THEME/styles"
try {
  const reqCSS = require.context(
    '@cloudflare/doca-default-theme/styles',
    true,
    /\.css$/gi
  );
  reqCSS.keys().forEach(reqCSS);
  const reqLESS = require.context(
    '@cloudflare/doca-default-theme/styles',
    true,
    /\.less$/gi
  );
  reqLESS.keys().forEach(reqLESS);
  const reqSASS = require.context(
    '@cloudflare/doca-default-theme/styles',
    true,
    /\.scss$/gi
  );
  reqSASS.keys().forEach(reqSASS);
} catch (e) {
  // no theme styles were found
}

const mapStateToProps = state => ({
  schemas: state.schemas,
  config,
  introduction: Introduction
});

const Main = connect(mapStateToProps)(App);

export default Main;
