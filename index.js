const child = require('child_process')

child.execFile('exe-win.exe', {
  cwd: __dirname
}, function (error, stdout, stderr) {

  console.log('error: ', error)
  console.log('stdout: ', stdout)
  console.log('stderr: ', stderr)

})