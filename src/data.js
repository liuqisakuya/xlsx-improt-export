import React, {Component} from 'react';
import {Table, Row, Col, Button, Tabs} from 'antd';
import XLSX from 'xlsx';
import {saveAs} from 'file-saver';
const TabPane = Tabs.TabPane;
var Chance = require('chance');
var chance = new Chance();
let dataSource = []
for(let i = 0; i < 20000; i++) {
    const num = chance.natural({min: 10000000000, max: 99999999999});
    const str = num % 2 === 0 ? 'B' : 'C';
    const a = chance.natural({min: 10, max: 99});
    const b = chance.natural({min: 10, max: 99});
    const c = a - b;
    dataSource.push({
        sparePartCode:  `${num}${str}`,
        sparePartName: chance.name(),
        currentQuantity: a,
        inventoryQuantity: b,
        diffQuantity: c,
        locationCode:  chance.natural(),
        remark: "",
        index: i
    })
}

// const columns1 = [
//     {
//         title: "配件编号",
//         dataIndex: "sparePartCode",
//         key: "sparePartCode"
//     },
//     {
//         title: "配件名称",
//         dataIndex: "sparePartName",
//         key: "sparePartName"
//     },
//     {
//         title: "库位",
//         dataIndex: "locationCode",
//         key: "locationCode"
//     },
//     {
//         title: "当前库存",
//         dataIndex: "currentQuantity",
//         key: "currentQuantity"
//     },
//     {
//         title: "盘点库存",
//         dataIndex: "inventoryQuantity",
//         key: "inventoryQuantity"
//     },
//     {
//         title: "差异",
//         dataIndex: "diffQuantity",
//         key: "diffQuantity"
//     },
//     {
//         title: "备注",
//         dataIndex: "remark",
//         key: "remark"
//     }
// ];
const columns1 = [
    {
        title: "sparePartCode",
        dataIndex: "sparePartCode",
        key: "sparePartCode"
    },
    {
        title: "sparePartName",
        dataIndex: "sparePartName",
        key: "sparePartName"
    },
    {
        title: "locationCode",
        dataIndex: "locationCode",
        key: "locationCode"
    },
    {
        title: "currentQuantity",
        dataIndex: "currentQuantity",
        key: "currentQuantity"
    },
    {
        title: "inventoryQuantity",
        dataIndex: "inventoryQuantity",
        key: "inventoryQuantity"
    },
    {
        title: "diffQuantity",
        dataIndex: "diffQuantity",
        key: "diffQuantity"
    },
    {
        title: "remark",
        dataIndex: "remark",
        key: "remark"
    }
];

export default {dataSource, columns1};
