module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337), 
  url: 'https://cms.verdensrommet.network',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '21c3b81867c02e3856233a4c948aa60e'),
    },
  },
});
