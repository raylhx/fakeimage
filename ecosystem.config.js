module.exports = {
  apps : [{
    name: 'fakeimage',
    script: './index.js',
    watch: ['./index.js', 'src'],
    ignore_watch: [
      'node_modules',
      'logs'
    ],
    out_file: 'pm2-logs/log.log',
    error_file: 'pm2-logs/error.log',
    log_file: 'combined.log',
    log_date_format : 'YYYY-MM-DD HH:mm Z',
    time: true,
    env_dev: {
      NODE_ENV: 'dev'
    },
    env_test: {
      NODE_ENV: 'test'
    },
    env_prod: {
      NODE_ENV: 'prod'
    }
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
}
