// import meiju from './meiju';

import React, {Component} from 'react';
import {Table, Row, Col, Button, Tabs, Form, Select} from 'antd';
import logo from './logo.svg';
import './App.css';
import dataJson from './data';
import XLSX from 'xlsx';
import {saveAs} from 'file-saver';
import {Enum, EnumItem} from './enumType';
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;
var fs = require("fs");
class App extends Component {
    constructor(props) {
        super(props);
        console.log(fs);
        this.state = {
            columns: [],
            testData: [],
            res: {},
        }
        if (window.FileReader) {
            const fr = new FileReader();
            this.rABS = fr.readAsBinaryString ? true : false;
        } else
            alert("Not supported by your browser!");
        this.importFile = this.importFile.bind(this);
        this.fixdata = this.fixdata.bind(this);
        this.downloadExcel = this.downloadExcel.bind(this);
        this.s2ab = this.s2ab.bind(this);
        this.getCharCol = this.getCharCol.bind(this);
    }

    s2ab(s) {
        let buf = new ArrayBuffer(s.length);
        let view = new Uint8Array(buf);
        // //log console.log('s2ab',buf, view, s);
        for(let i = 0; i !== s.length; ++i)
            view[i] = s.charCodeAt(i) & 0xFF;
        // //log console.log('view', buf, view);
        return buf;
    }

    getCharCol(n) {
        //定义返回的字符串s，转化关系变量m的初始值
        let [s, m] = ['', 0];
        while(n > 0) {
            //将数字映射为excel行的字母 如0~25 => A~Z
            m = n % 26 + 1;
            s += String.fromCharCode(m + 64);
            n = (n - m) / 26;
        }
        return s;
    }

    // ArrayBuffer转为字符串，参数为ArrayBuffer对象
    fixdata(data) {
        //定义返回的字符串0， 遍历变量l，每次读取数据的大小w
        let [o, l, w] = ['', 0, 10240];
        for (; l < data.byteLength / w; ++l)
            o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
        o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
        return o;
    }

    //TODO 需要判断是否能调用readAsArrayBuffer等方法
    importFile(e) {
        console.dir(e.target);
        const {fileName} = this.state;
        //获取上传文件
        let file = e.target.files[0];
        //log console.log(document.getElementById("test"));
        if(!file) {
            document.getElementById("test").name = fileName;
            return;
        }
        //实例化FileReader
        const reader = new FileReader();
        if(this.rABS)
            //调用readAsBinaryString读取文件内容
            reader.readAsBinaryString(file);
        else
            //调用readAsArrayBuffer读取文件内容
            reader.readAsArrayBuffer(file);


        //调用onload执行文件读取完毕后的操作
        reader.onload = e => {
            let workbook;
            console.time('导入');
            // 获取文件内容  为ArrayBuffer对象
            const data = e.target.result;
            if(this.rABS) {
                workbook = XLSX.read(data, {type: 'binary'});
            } else {
                // 将文件内容转化为二进制数据字符串
                const arr = this.fixdata(data);
                // btoa() 函数能够从二进制数据创建一个base-64编码的ASCII字符串，调用read方法解析成js能识别的workbook对象
                workbook = XLSX.read(btoa(arr), {type: 'base64'});
            }
            //log console.log(workbook, workbook.Sheets[workbook.SheetNames[1]]);
            //序列化excel的数据
            let res = {};
            let test = [];
            console.log('workbook', workbook);
            workbook.SheetNames.forEach(item => {
                //log console.log(XLSX.utils.sheet_to_json(workbook.Sheets[item], {defval: '', header: 1}));
                if(XLSX.utils.sheet_to_json(workbook.Sheets[item], {defval: '', header: 1}).length > 0) {
                    res[item] = XLSX.utils.sheet_to_json(workbook.Sheets[item], {defval: '',  header: 1});
                    test = XLSX.utils.sheet_to_json(workbook.Sheets[item], {defval: '',  header: 1});
                }
            })
            console.timeEnd('导入');
            let columns = test.splice(0, 1)[0].map((item, i) => {
                return {
                    title: item,
                    dataIndex: i
                }
            });
            let testData = [];
            test.forEach(item => {
                let obj = {};
                item.forEach((v, i) => {
                    obj[i] = v;
                })
                testData.push(obj)
            })
            console.log(Date.now());
            this.setState({
                columns,
                fileName: file.name,
                res,
                workbook,
                testData
            })
        }
    }

    downloadExcel() {
        // const obj = this.props.form.getFieldValue('exportFormat');
        // console.log(obj);
        console.time('total')
        const {dataSource, columns1} = dataJson;
        const tbl = {};
        XLSX.SSF.init_table(tbl);
        //将表格数据处理为二维数组，数组的每个元素为表格每行的数据，
        console.time('处理二维数组');
        const tableArray = [];
        dataSource.forEach((v, i) => columns1.forEach((k, j) => {
            if(k.key === 'sparePartCode')
                tableArray.push({
                    //v为导出时渲染的值 position为导出时，所在excel的位置
                    v: i === 0 ? k.title : v[k.key],
                    l: {
                        Target: "http://www.baidu.com/",
                        Tooltip: "Find us @ SheetJS.com!"
                    },
                    // 如果不需要表头则不用判断i===0
                    // v: v[k.key],
                    //当列大于25时 调用getCharCol处理，i+1为行
                    position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
                })
            else if(k.key === 'date')
                tableArray.push({
                    //v为导出时渲染的值 position为导出时，所在excel的位置
                    v: i === 0 ? k.title : v[k.key],
                    z: tbl[15],
                    s: {
                        bgColor: {
                            indexed: 64
                        },
                        fgColor: {
                            rgb: "FFFF00"
                        }
                    },
                    // 如果不需要表头则不用判断i===0
                    // v: v[k.key],
                    //当列大于25时 调用getCharCol处理，i+1为行
                    position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
                })
            else
                tableArray.push({
                    //v为导出时渲染的值 position为导出时，所在excel的位置
                    v: i === 0 ? k.title : v[k.key],
                    // 如果不需要表头则不用判断i===0
                    // v: v[k.key],
                    //当列大于25时 调用getCharCol处理，i+1为行
                    position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
                })
        }));
        //log console.log(tableArray, dataSource);
        //平铺数组
        console.timeEnd('处理二维数组');
        const excledata = {};//用来保存转换好的json
        console.time('保存json');
        tableArray.forEach(v => {
            excledata[v.position] = {...v}
        });

        //设置区域,比如表格从A1到T20
        console.timeEnd('保存json');
        console.time('设置区域');
        const outputPos = Object.keys(excledata);
        //log console.log('excledata', excledata);
        console.timeEnd('设置区域');
        //转化为导出需要的结构
        const workbook = {
            SSF: tbl,
            SheetNames: ['exportExcel'], //保存的表标题
            // Workbook: {
            //     Sheets: [
            //         {
            //            //隐藏表
            //             Hidden: 1,
            //             name: "exportExcel"
            //         }
            //     ]
            // },
            Sheets: {
                'exportExcel': Object.assign({},
                    excledata, //内容
                    {
                        '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                    },
                    {
                        '!margins':{ left:0.7, right:0.7, top:0.75, bottom:0.75, header:0.3, footer:0.3 }
                    },
                    {
                        // '!merges': [
                        //     {
                        //         s: {
                        //             c: 2,
                        //             r: 1
                        //         },
                        //         e: {
                        //             c: 2,
                        //             r: 9
                        //         }
                        //     }
                        // ],
                        '!cols': [
                            {
                                MDW: 6,
                                width: 18
                            },
                            {
                                MDW: 6,
                                width: 16
                            },
                            {
                                MDW: 6,
                                width: 48
                            },
                            {
                                MDW: 6,
                                width: 48
                            },
                            {
                                MDW: 6,
                                width: 16
                            },
                            {
                                MDW: 6,
                                width: 48
                            }
                        ]
                    }
                ),

            }
        };
        console.log('ddd', workbook);
        console.time('转换类型');
        const exportExcel = new Blob([this.s2ab(XLSX.write(workbook,
            {
                bookType: 'xlsx',//输出的文件格式
                bookSST: false,
                type: 'binary',//这里的数据是用来定义导出的格式类型
                // cellDates: true,
                // cellStyles: true
            }))], {
            type: ""
        }); //创建二进制对象写入转换好的字节流
        console.timeEnd('转换类型');
        console.time('导出消耗时间');
        saveAs(exportExcel, `测试数据${dataSource.length}条.xlsx`);
        console.timeEnd('导出消耗时间')
        console.timeEnd('total')

    }

    render() {
        console.count('render');
        console.log(Date.now());
        const { getFieldDecorator } = this.props.form;
        const {dataSource, columns1} = dataJson;
        const {res, columns, testData}  = this.state;
        const pagination = {
            pageSize: 50,
            total: testData.length
        };
        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 9 },
        };
        const tabsArray = Object.keys(res);
        let tabs = null;
        let exporttable = null;
        // if(tabsArray.length > 0) {
        //     //TODO 重新render了 defaultActiveKey值也改变了 但没有默认选中
        //     tabs =  <Tabs defaultActiveKey={tabsArray[0]} >
        //                 {
        //                     tabsArray.map(item => {
        //                         // const columns = [];
        //                         // for(let p in res[item][0]) {
        //                         //     columns.push({
        //                         //         title: p,
        //                         //         dataIndex: p,
        //                         //         key: p,
        //                         //     })
        //                         // };
        //                         return (
        //                             <TabPane tab={item} key={item}>
        //                                 <Table
        //                                     dataSource={testData}
        //                                     columns={columns}
        //                                     rowKey="0"
        //                                     pagination={pagination}
        //                                     size="small"
        //                                     bordered
        //                                 />
        //                             </TabPane>
        //                         )
        //                     })
        //                 }
        //             </Tabs>
        // }

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div className="xlsx">
                    <Row gutter={20}>
                        <Col span={12}>
                            <input type="file" id="test" onChange={this.importFile}/>
                            {/* {tabsArray.length > 0 && tabs} */}
                            <Table
                                dataSource={testData}
                                columns={columns}
                                rowKey="0"
                                size="small"
                                bordered
                                // pagination={false}
                            />
                        </Col>
                        <Col span={12}>
                            <Row>
                                {/* <Col>
                                    <FormItem>
                                      {getFieldDecorator('exportFormat', { initialValue: 'xlsx' })(
                                            <Select placeholder="Please select export format">
                                                <Option value="xlsx">xlsx</Option>
                                                <Option value="xls">xls</Option>
                                                <Option value="csv">csv</Option>
                                            </Select>
                                      )}
                                    </FormItem>
                                </Col> */}
                                <Col>
                                    <Button type="primary" onClick={this.downloadExcel}>导出</Button>
                                </Col>
                            </Row>
                            <Table
                                dataSource={dataSource}
                                columns={columns1}
                                rowKey="index"
                                size="small"
                                bordered
                                // pagination={false}
                            />
                            {/* {exporttable} */}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default Form.create()(App);
