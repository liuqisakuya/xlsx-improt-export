var data = [
	['名称','价格','数量'],
	['衣服',10,100],
	['帽子',10,100]
];
var data1 = [
	['name','price','num'],
	['clothes',10,100],
	['hat',10,100]
];
var ws_name = "SheetJS";

var wscols = [
	{wch:6},
	{wch:7},
	{wch:10},
	{wch:20}
];


console.log("Sheet Name: " + ws_name);
console.log("Data: "); for(var i=0; i!=data.length; ++i) console.log(data[i]);
console.log("Columns :"); for(i=0; i!=wscols.length;++i) console.log(wscols[i]);

var fs = require("fs");
var path = require('path');
var XLSX = require("xlsx");

/* require XLSX */
// if(typeof XLSX === "undefined") { try { XLSX = require('./'); } catch(e) { XLSX = require('../'); } }

/* dummy workbook constructor */
function Workbook() {
	if(!(this instanceof Workbook)) return new Workbook();
	this.SheetNames = [];
	this.Sheets = {};
}
var wb = new Workbook();
var wbEn = new Workbook();

/* TODO: date1904 logic */
function datenum(v, date1904) {
	if(date1904) v+=1462;
	var epoch = Date.parse(v);
	return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
}

/* convert an array of arrays in JS to a CSF spreadsheet */
function sheet_from_array_of_arrays(data, opts) {
	var ws = {};
	var range = {s: {c:10000000, r:10000000}, e: {c:0, r:0 }};
	for(var R = 0; R != data.length; ++R) {
		for(var C = 0; C != data[R].length; ++C) {
			if(range.s.r > R) range.s.r = R;
			if(range.s.c > C) range.s.c = C;
			if(range.e.r < R) range.e.r = R;
			if(range.e.c < C) range.e.c = C;
			var cell = {v: data[R][C] };
			if(cell.v == null) continue;
			var cell_ref = XLSX.utils.encode_cell({c:C,r:R});

			/* TEST: proper cell types and value handling */
			if(typeof cell.v === 'number') cell.t = 'n';
			else if(typeof cell.v === 'boolean') cell.t = 'b';
			else if(cell.v instanceof Date) {
				cell.t = 'n'; cell.z = XLSX.SSF._table[14];
				cell.v = datenum(cell.v);
			}
			else cell.t = 's';
			ws[cell_ref] = cell;
		}
	}

	/* TEST: proper range */
	if(range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
	return ws;
}
var ws = sheet_from_array_of_arrays(data);
var wsEn = sheet_from_array_of_arrays(data1);
/* TEST: add worksheet to workbook */
wb.SheetNames.push(ws_name);
wb.Sheets[ws_name] = ws;
wbEn.SheetNames.push(ws_name);
wbEn.Sheets[ws_name] = wsEn;
/* TEST: column widths */
ws['!cols'] = wscols;
wsEn['!cols'] = wscols;
/* write file */
// XLSX.writeFile(wb, 'XLSX.xlsx');
// XLSX.writeFile(wb, 'XLSM.xlsm');
// XLSX.writeFile(wb, 'XLSB.xlsb');
XLSX.writeFile(wb, 'XLS-CN.xls', {bookType:'xlml'});
// XLSX.writeFile(wbEn, 'XLS-EU.xls', {bookType:'biff2'});
// XLSX.writeFile(wb, 'ODS.ods');
