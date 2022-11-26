const { isPackage, setPackageJson } = require('@arcanist-ui/setup-utils')
const { name } = require('../package.json')

setPackageJson({
    prettier: isPackage(name) ? './src/.prettierrc.js' : name,
})
