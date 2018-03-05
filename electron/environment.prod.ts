import * as url from 'url';

const PROTOCOL = 'file';

export const environment = {
  prod: true,
  PROTOCOL: PROTOCOL,
  startUrl: url.format({
    pathname: 'index.html',
    protocol: PROTOCOL + ':',
    slashes: true
  }),
};
