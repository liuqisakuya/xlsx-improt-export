import React, {Component} from 'react';
import {Table, Row, Col, Button, Tabs} from 'antd';
import logo from './logo.svg';
import './App.css';
import dataJson from './data';
import XLSX from 'xlsx';
import {saveAs} from 'file-saver';
const TabPane = Tabs.TabPane;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            columns2: dataJson.columns1,
            data: [],
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
        // ///console.log('s2ab',buf, view, s);
        for(let i = 0; i !== s.length; ++i)
            view[i] = s.charCodeAt(i) & 0xFF;
        // ///console.log('view', buf, view);
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
        const {dataSource, columns1} = dataJson;
        const columns2 = columns1;
        const {fileName} = this.state;
        //获取上传文件
        let file = document.getElementById("test").files[0];
        console.log(document.getElementById("test"));
        if(!file) {
            document.getElementById("test").name = fileName;
            return;
        }
        //实例化FileReader
        let reader = new FileReader();
        if(this.rABS)
            //调用readAsBinaryString读取文件内容
            reader.readAsBinaryString(file);
        else
            //调用readAsArrayBuffer读取文件内容
            reader.readAsArrayBuffer(file);


        //调用onload执行文件读取完毕后的操作
        reader.onload = e => {
            let workbook;

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
            console.log(workbook, workbook.Sheets[workbook.SheetNames[1]]);
            //序列化excel的数据
            let res = {};
            let colAndRow = {};
            workbook.SheetNames.forEach(item => {
                if(XLSX.utils.sheet_to_json(workbook.Sheets[item], {defval: ''}).length > 0){
                    colAndRow = workbook.Sheets[item]['!merges'];
                    res[item] = XLSX.utils.sheet_to_json(workbook.Sheets[item], {defval: ''});
                }
            })

            console.log(res, colAndRow);
            const tabsArray = Object.keys(res);
            const columns = [];
            columns2.forEach((item, index) => {
                item.render = (t, r, i) => {
                    const obj = {
                        children: t,
                        props: {},
                    };
                    colAndRow.forEach(p => {
                        if(p.s.c === item) {
                            if(p.s.r === i) {
                                console.log(222);
                            }
                        }
                    })
                }
            })

                    // columns.push({
                    //     render: (t, r, i) => {
                    //         const obj = {
                    //             children: t,
                    //             props: {},
                    //         };
                    //         colAndRow[item].forEach(k => {
                    //             // if(k)
                    //         })
                    //     }
                    // })
            this.setState({
                fileName: file.name,
                res,
                workbook,
                columns2: columns2,
                data: res[tabsArray[0]]
            })
        }
    }

    downloadExcel(json, type) {
        ///console.time('total')
        const {dataSource, columns1} = dataJson;
        //将表格数据处理为二维数组，数组的每个元素为表格每行的数据，
        ///console.time('处理二维数组');
        const tableArray = [];
        dataSource.forEach((v, i) => columns1.forEach((k, j) => tableArray.push({
            //v为导出时渲染的值 position为导出时，所在excel的位置
            v: i === 0 ? k.title : v[k.key],
            // 如果不需要表头则不用判断i===0
            // v: v[k.key],
            //当列大于25时 调用getCharCol处理，i+1为行
            position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
        })));
        console.log(tableArray);
        //平铺数组
        ///console.timeEnd('处理二维数组');
        const excledata = {};//用来保存转换好的json
        ///console.time('保存json');
        tableArray.forEach(v => excledata[v.position] = {
            v: v.v
        });

        //设置区域,比如表格从A1到T20
        ///console.timeEnd('保存json');
        ///console.time('设置区域');
        const outputPos = Object.keys(excledata);
        ///console.timeEnd('设置区域');
        //转化为导出需要的结构
        const workbook = {
            SheetNames: ['exportExcel'], //保存的表标题
            Sheets: {
                'exportExcel': Object.assign({},
                    excledata, //内容
                    {
                        '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                    },
                    {
                        '!margins':{ left:0.7, right:0.7, top:0.75, bottom:0.75, header:0.3, footer:0.3 }
                    }
                ),
                '!cols': {
                    ColInfo: {
                        width: '1024px'
                    }
                }
            }
        };

        ///console.time('转换类型');
        const exportExcel = new Blob([this.s2ab(XLSX.write(workbook,
            {bookType: (type === undefined ? 'xlsx':type),bookSST: false, type: 'binary'}//这里的数据是用来定义导出的格式类型
            ))], {
            type: ""
        }); //创建二进制对象写入转换好的字节流
        ///console.timeEnd('转换类型');
        ///console.time('导出消耗时间');
        saveAs(exportExcel, 'liuqi.xlsx');
        ///console.timeEnd('导出消耗时间')
        ///console.timeEnd('total')

    }

    render() {
        const {dataSource, columns1} = dataJson;
        const {data, columns2, columns} = this.state;
        const {res}  = this.state;
        const tabsArray = Object.keys(res);
        let tabs = null;
        let exporttable = null;
        if(tabsArray.length > 0) {
            //TODO 重新render了 defaultActiveKey值也改变了 但没有默认选中
            tabs =  <Tabs defaultActiveKey={tabsArray[0]} >
                        {
                            tabsArray.map(item => {
                                const columns = [];
                                for(let p in res[item][0]) {
                                    columns.push({
                                        title: p,
                                        dataIndex: p,
                                        key: p,
                                    })
                                };
                                // exporttable = <Table
                                //     dataSource={res[item]}
                                //     columns={columns1}
                                //     rowKey={r => {
                                //         let rowkeyStr = ''
                                //         for(let k in columns) {
                                //             rowkeyStr += r[columns[k].key]
                                //         }
                                //         return rowkeyStr
                                //     }}
                                //     size="small"
                                //     bordered
                                // />
                                return (
                                    <TabPane tab={item} key={item}>
                                        <Table
                                            dataSource={res[item]}
                                            columns={columns2}
                                            rowKey={r => {
                                                let rowkeyStr = ''
                                                for(let k in columns) {
                                                    rowkeyStr += r[columns[k].key]
                                                }
                                                return Math.random()
                                            }}
                                            size="small"
                                            bordered
                                        />
                                    </TabPane>
                                )
                            })
                        }
                    </Tabs>
                console.log(tabs);
        }

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
                            {tabsArray.length > 0 && tabs}
                        </Col>
                        <Col span={12}>
                            {/* <Button type="primary" onClick={this.downloadExcel}>导出</Button>
                            <Table
                                dataSource={data}
                                columns={columns1}
                                rowKey={r => {
                                    let rowkeyStr = ''
                                    for(let k in columns) {
                                        rowkeyStr += r[columns[k].key]
                                    }
                                    return rowkeyStr
                                }}
                                size="small"
                                bordered
                            /> */}
                            {/* {exporttable} */}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default App;
