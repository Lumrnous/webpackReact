module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'usage',
          corejs: 3,
          targets: {
            chrome: 90
          }
        }
      ],
      ['@babel/preset-react']
    ]
  }