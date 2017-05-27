import React, {Component} from 'react';
import {Table, Row, Col, Button} from 'antd';
import logo from './logo.svg';
import './App.css';
import dataJson from './data';
import XLSX from 'xlsx';
import {saveAs} from 'file-saver';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [],
            res: [],
        }
        this.rABS = true;
        this.importFile = this.importFile.bind(this);
        this.fixdata = this.fixdata.bind(this);
        this.downloadExcel = this.downloadExcel.bind(this);
        this.s2ab = this.s2ab.bind(this);
        this.getCharCol = this.getCharCol.bind(this);
    }

    s2ab(s) {
        let buf = new ArrayBuffer(s.length);
        let view = new Uint8Array(buf);
        // console.log('s2ab',buf, view, s);
        for(let i = 0; i !== s.length; ++i)
            view[i] = s.charCodeAt(i) & 0xFF;
        // console.log('view', buf, view);
        return buf;
    }

    getCharCol(n) {
        //定义返回的字符串s，转化关系变量m的初始值
        let [s, m] = ['', 0];
        while(n > 0) {
            //将数字映射为excel行的字母 如0~25 => A~Z
            m = n % 26 + 1
            s = String.fromCharCode(m + 64) + s
            n = (n - m) / 26
        }
        return s
    }

    fixdata(data) {
      var o = "", l = 0, w = 10240;
      for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
      o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
      return o;
    }

    importFile(obj) {
        const {dataSource, columns1} = dataJson;
        let file = document.getElementById("test").files[0];
        let reader = new FileReader();
        reader.readAsArrayBuffer(file);
        reader.onload = e => {
            let data = e.target.result;
            let arr = this.fixdata(data);
            let workbook = XLSX.read(btoa(arr), {type: 'base64'});
            let res = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
            const columns = [];
            for(let p in res[0]) {
                columns1.push({
                    title: p,
                    dataIndex: p,
                    key: p,
                })
            };

            this.setState({
                columns,
                res,
                workbook
            })
        }
    }

    downloadExcel(json, type) {
        console.time('total');
        const {dataSource, columns1} = dataJson;
        //将表格数据处理为二维数组，数组的每个元素为表格每行的数据，
        console.time('处理二维数组');
        const tableArray = [];
        dataSource.forEach((v, i) => columns1.forEach((k, j) => {
            const position = (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1);
            const value =  i === 0 ? k.title : v[k.key];
            tableArray.push({
                [position]: value
                // //v为导出时渲染的值 position为导出时，所在excel的位置
                // v: i === 0 ? k.title : v[k.key],
                // // 如果不需要表头则不用判断i===0
                // // v: v[k.key],
                // //当列大于25时 调用getCharCol处理，i+1为行
                // position: (j > 25 ? this.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
            })
        }));
        //平铺数组
        console.timeEnd('处理二维数组');
        const excledata = [];//用来保存转换好的json
        console.time('保存json');
        // tableArray.forEach(v => excledata[v.position] = {
        //     v: v.v
        // });
        //设置区域,比如表格从A1到T20
        console.timeEnd('保存json');
        console.log(tableArray);
        console.time('设置区域');
        const outputPos = Object.keys(tableArray);
        console.timeEnd('设置区域');
        //转化为导出需要的结构
        const workbook = {
            SheetNames: ['exportExcel'], //保存的表标题
            Sheets: {
                'exportExcel': Object.assign({},
                    excledata, //内容
                    {
                        '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1] //设置填充区域
                    })
            }
        };

        console.time('转换类型');
        const exportExcel = new Blob([this.s2ab(XLSX.write(workbook,
            {bookType: (type === undefined ? 'xlsx':type),bookSST: false, type: 'binary'}//这里的数据是用来定义导出的格式类型
            ))], {
            type: ""
        }); //创建二进制对象写入转换好的字节流
        console.timeEnd('转换类型');
        console.time('导出消耗时间');
        saveAs(exportExcel, 'liuqi.xlsx');
        console.timeEnd('导出消耗时间')
        console.timeEnd('total');
    }

    render() {
        const {columns, res}  = this.state;
        const {dataSource, columns1} = dataJson;
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <div className="xlsx">
                    <Row gutter={20}>
                        <Col span={12}>
                            <input type="file" id="test" onChange={this.importFile} />
                            {res.length > 0 &&
                                <Table
                                    dataSource={res}
                                    columns={columns}
                                    rowKey={r => r[columns[3].key]}
                                    size="small"
                                    bordered
                                />
                            }
                        </Col>
                        <Col span={12}>
                            <Button type="primary" onClick={this.downloadExcel}>导出</Button>
                            <Table
                                dataSource={dataSource}
                                columns={columns1}
                                rowKey="index"
                                size="small"
                                bordered
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default App;
