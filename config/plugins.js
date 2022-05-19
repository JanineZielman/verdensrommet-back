module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendmail',
    settings: {
      defaultFrom: 'info@verdensrommet.network',
      defaultReplyTo: 'info@verdensrommet.network',
    },
  },
  // ...
});
