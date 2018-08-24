const flattenDir = (dir, nested) => {
  const dirs = fs.readdirSync(dir).filter(isDirectory)
  const files = fs.readdirSync(dir).filter(!isDirectory)
  if (dirs.length > 0) {
    dirs.forEach(dirr => {
      flattenDir(`${dir}/${dirr}`, true)
    })
  }
  if (nested) {
    files.forEach(file => {
      fs.renameSync(`${dir}/file`, `${dir}/../${file}`)
    })
  }
}