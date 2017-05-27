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
        dataIndex: "仓库编号",
        key: "warehouseCode"
    },
    {
        title: "仓库名称",
        dataIndex: "仓库名称",
        key: "warehouseName"
    },
    {
        title: "备件编号",
        dataIndex: "备件编号",
        key: "stockCode"
    },
    {
        title: "名称",
        dataIndex: "名称",
        key: "stockName"
    },
    {
        title: "差异数量",
        dataIndex: "数量",
        key: "diffNum"
    },
    {
        title: "差异金额",
        dataIndex: "金额",
        key: "diffAmount"
    }
];


export default {dataSource, columns1};
