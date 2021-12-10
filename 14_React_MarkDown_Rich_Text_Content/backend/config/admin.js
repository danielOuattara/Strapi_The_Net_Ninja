module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c791b1869b6bdbbc3b73a79d24cb0dcc'),
  },
});
