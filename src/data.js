var Chance = require('chance');
var chance = new Chance();
let dataSource = []
for(let i = 0; i < 20; i++) {
    dataSource.push({
        warehouseCode:  chance.natural(),
        warehouseName: chance.city(),
        stockCode:  chance.natural(),
        stockName: chance.name(),
        diffNum:  chance.natural({min: 1, max: 2}),
        diffAmount: chance.natural({length: 5}),
        index: i
    })
}

const columns1 = [
    {
        title: "仓库编号",
        dataIndex: "warehouseCode",
        key: "warehouseCode"
    },
    {
        title: "仓库名称",
        dataIndex: "warehouseName",
        key: "warehouseName"
    },
    {
        title: "备件编号",
        dataIndex: "stockCode",
        key: "stockCode"
    },
    {
        title: "备件名称",
        dataIndex: "stockName",
        key: "stockName"
    },
    {
        title: "差异数量",
        dataIndex: "diffNum",
        key: "diffNum"
    },
    {
        title: "差异金额",
        dataIndex: "diffAmount",
        key: "diffAmount"
    }
];


export default {dataSource, columns1};
