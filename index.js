const child = require('child_process')

const exeFile = 'plugbot-systray.exe'

child.execFile(exeFile, {
  cwd: __dirname
}, function (error, stdout, stderr) {

  console.log('error: ', error)
  console.log('stdout: ', stdout)
  console.log('stderr: ', stderr)

})