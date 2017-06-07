var fs = require("fs");
var path = require('path');
var XLSX = require("xlsx");
console.time('读取excel');
let workbook = XLSX.readFile('字典test.xls');
console.timeEnd('读取excel');
let res = {};
let test2;
console.time('处理excel');
workbook.SheetNames.forEach(item => {
    let ws2 = workbook.Sheets[item];
    let range = XLSX.utils.decode_range(ws2['!ref']);
    range.s.r = 1;
    ws2['!ref'] = XLSX.utils.encode_range(range);
    if(XLSX.utils.sheet_to_json(ws2, {defval: '', header: 1}).length > 0) {
        test2 = XLSX.utils.sheet_to_json(ws2, {defval: '', raw: true, header: ["EnumName", "Type", "Key", "Name", "CN", "EN", "IsBuiltIn", "更新时间", "index"]});
    }
});
console.timeEnd('处理excel');
let test2obj = {};
let valtest = '';
console.time('生成obj');
test2.forEach(item => {
    if(item.EnumName !== '' && item.EnumName !== valtest) {
        valtest = item.EnumName;
        test2obj[item.EnumName] = {
            // ['__proto__']: Enum,
            [item.CN]: item.Key,
            properties: {
                [item.Key]: {
                    // ['__proto__']: EnumItem,
                    ['zh-CN']: item.CN,
                    ['en-US']: item.EN
                }
            }
        }
    } else {
        test2obj[valtest] = Object.assign(test2obj[valtest], {
            [item.CN]: item.Key,
            properties: Object.assign(test2obj[valtest].properties, {
                [item.Key]: {
                    // ['__proto__']: EnumItem,
                    ['zh-CN']: item.CN,
                    ['en-US']: item.EN
                }
            })
        })
    }

});
console.timeEnd('生成obj');
const value = test2obj.DcsCorporateNature;
const templeStr = (obj, name) => {
    let str = '\t__proto__: Enum,\n';
    for(let key in obj) {
        if(key !== 'properties')
            str += `\t${key}: ${obj[key]},\n`
        else {
            const k = obj[key];
            let strItem = '';
            for(let p in k) {
                const val = k[p];
                const strLanguage = `Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '${val['zh-CN']}',
            ['en-US']: '${val['en-US']}'
        }),`;
                strItem += `\t\t${p}: ${strLanguage}\n`
            }
            str += `\tproperties: Object.freeze({\n${strItem}\t}),\n`;
        }
    }
    return `export const ${name} = Object.freeze({\n${str}});\n`;
};
console.time('生成str');
let fileStr = `import {Enum, EnumItem} from './enumType';\n`;
for (let f in test2obj) {
    const obj = test2obj[f];
    fileStr += templeStr(obj, f);
};
console.timeEnd('生成str');
console.time('写入文件');
fs.writeFile('meiju.js', fileStr, {flag: 'w'}, function(err) {
   if (err) {
       return console.error(err);
   } else {
       console.log('写入成功');
   }
});
console.timeEnd('写入文件');
