const Init = () => {
  return new Promise(async resolve => {
    if (Peak.env === 'local') {
      try {
        require('./local.config').default
      } catch (err) {
        console.error(
          '请复制一份local.config.example.js，并命名为local.config.js'
        )
      }
    } else {
      console.log(Peak.env)
    }

    resolve()
  })
}

Init().then(() => {
  require('./main')
})
