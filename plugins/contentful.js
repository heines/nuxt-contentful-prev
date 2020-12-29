const contentful = require('contentful');
const config = {
  host: 'cdn.contentful.com',
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
};

if (process.env.NODE_ENV !== 'production') {
  config.host = process.env.CTF_CPA_HOST;
  config.accessToken = process.env.CTF_CPA_ACCESS_TOKEN;
}
const client = contentful.createClient(config);
export default client;
