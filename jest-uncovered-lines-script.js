const file = '/Users/slimbean/asdf/oe/client/components/common/documentsUploadCard/DocumentsUploadCard.jsx'
const s = input.coverageMap[file].s;
const sM = input.coverageMap[file].statementMap;
uncoveredS = Object.keys(s).reduce((col, key) => {
    if (s[key] === 0) col.push(key)
    return col
}, [])
output = uncoveredS.map(key => sM[key].start.line)