const isServer = typeof window === 'undefined';
const isStaging = isServer
  ? process.env.NODE_ENV === 'developer'
  : globalThis.location.href.includes('localhost');

export default isStaging;
