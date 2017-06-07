import {Enum, EnumItem} from './enumType';
export const DcsCodeTemplateResetType = Object.freeze({
	__proto__: Enum,
	无: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '无',
            ['en-US']: 'none2'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '日',
            ['en-US']: 'none3'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '月',
            ['en-US']: 'none4'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '年',
            ['en-US']: 'none5'
        }),
	}),
	日: 1,
	月: 2,
	年: 3,
});
export const DcsMasterDataStatus = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none6'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '停用',
            ['en-US']: 'none7'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none8'
        }),
	}),
	停用: 2,
	作废: 99,
});
export const DcsBaseDataStatus = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none9'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none10'
        }),
	}),
	作废: 99,
});
export const DcsCorporateNature = Object.freeze({
	__proto__: Enum,
	国有企业: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '国有企业',
            ['en-US']: 'none11'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '个体户',
            ['en-US']: 'none12'
        }),
	}),
	个体户: 2,
});
export const DcsSexType = Object.freeze({
	__proto__: Enum,
	未填: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未填',
            ['en-US']: 'none13'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '男',
            ['en-US']: 'none14'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '女',
            ['en-US']: 'none15'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未知',
            ['en-US']: 'none16'
        }),
	}),
	男: 1,
	女: 2,
	未知: 3,
});
export const DcsRegionType = Object.freeze({
	__proto__: Enum,
	区: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '区',
            ['en-US']: 'none17'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '省',
            ['en-US']: 'none18'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '市',
            ['en-US']: 'none19'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '县（区）',
            ['en-US']: 'none20'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '乡镇',
            ['en-US']: 'none21'
        }),
	}),
	省: 2,
	市: 3,
	县（区）: 4,
	乡镇: 5,
});
export const DcsVehicleStatus = Object.freeze({
	__proto__: Enum,
	总装上线: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '总装上线',
            ['en-US']: 'none22'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '总装下线',
            ['en-US']: 'none23'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生产入库',
            ['en-US']: 'none24'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '本部仓库',
            ['en-US']: 'none25'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商在途',
            ['en-US']: 'none26'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商仓库',
            ['en-US']: 'none27'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '实销完成',
            ['en-US']: 'none28'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中转库在途',
            ['en-US']: 'none29'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '商品车捐赠出库',
            ['en-US']: 'none30'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '返回生产',
            ['en-US']: 'none31'
        }),
		98: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '游离',
            ['en-US']: 'none32'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '灭失',
            ['en-US']: 'none33'
        }),
	}),
	总装下线: 2,
	生产入库: 3,
	本部仓库: 4,
	经销商在途: 5,
	经销商仓库: 6,
	实销完成: 7,
	中转库在途: 8,
	商品车捐赠出库: 9,
	返回生产: 10,
	游离: 98,
	灭失: 99,
});
export const DcsCustomerType = Object.freeze({
	__proto__: Enum,
	个人用户: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '个人用户',
            ['en-US']: 'none34'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '组织用户',
            ['en-US']: 'none35'
        }),
	}),
	组织用户: 2,
});
export const DcsCustomerBusinessType = Object.freeze({
	__proto__: Enum,
	采矿业: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '采矿业',
            ['en-US']: 'none36'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '电力/燃气/水的生产和供应业',
            ['en-US']: 'none37'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '房地产业',
            ['en-US']: 'none38'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公共管理/社会组织',
            ['en-US']: 'none39'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '国际组织',
            ['en-US']: 'none40'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '建筑业',
            ['en-US']: 'none41'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '交通运输/仓储/邮政业',
            ['en-US']: 'none42'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '教育',
            ['en-US']: 'none43'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '金融业',
            ['en-US']: 'none44'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '居民服务/其他服务业',
            ['en-US']: 'none45'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '科学研究/技术服务/地质勘查业',
            ['en-US']: 'none46'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '农/林/牧/鱼',
            ['en-US']: 'none47'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '批发/零售业',
            ['en-US']: 'none48'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '水利/环境和公共设施管理业',
            ['en-US']: 'none49'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '卫生/社会保障/社会福利业',
            ['en-US']: 'none50'
        }),
		16: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '文化/体育/娱乐业',
            ['en-US']: 'none51'
        }),
		17: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '信息传输/计算机服务和软件业',
            ['en-US']: 'none52'
        }),
		18: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '制造业',
            ['en-US']: 'none53'
        }),
		19: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '住宿/餐饮业',
            ['en-US']: 'none54'
        }),
		20: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '租赁/商务服务业',
            ['en-US']: 'none55'
        }),
		21: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '无业',
            ['en-US']: 'none56'
        }),
		22: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none57'
        }),
		23: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '专业服务',
            ['en-US']: 'none58'
        }),
		24: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中介服务',
            ['en-US']: 'none59'
        }),
		25: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '互联网',
            ['en-US']: 'none60'
        }),
		26: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '交通/运输/物流',
            ['en-US']: 'none61'
        }),
		27: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '娱乐/体育/休闲',
            ['en-US']: 'none62'
        }),
		28: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '媒体/印刷',
            ['en-US']: 'none63'
        }),
		29: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '学术/科研/艺术',
            ['en-US']: 'none64'
        }),
		30: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '家具',
            ['en-US']: 'none65'
        }),
		31: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '广告/公关/展会',
            ['en-US']: 'none66'
        }),
		32: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '建筑/设计/装潢',
            ['en-US']: 'none67'
        }),
		33: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '快速消费品',
            ['en-US']: 'none68'
        }),
		34: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '房地产',
            ['en-US']: 'none69'
        }),
		35: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '服务业',
            ['en-US']: 'none70'
        }),
		36: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '民营企业/私营企业',
            ['en-US']: 'none71'
        }),
		37: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '水利',
            ['en-US']: 'none72'
        }),
		38: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '汽车及零部件',
            ['en-US']: 'none73'
        }),
		39: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '法律',
            ['en-US']: 'none74'
        }),
		40: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '环保',
            ['en-US']: 'none75'
        }),
		41: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '环境和公共设施管理业',
            ['en-US']: 'none76'
        }),
		42: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '电力/电气',
            ['en-US']: 'none77'
        }),
		43: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '耐用消费品',
            ['en-US']: 'none78'
        }),
		44: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '计算机',
            ['en-US']: 'none79'
        }),
		45: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '证券',
            ['en-US']: 'none80'
        }),
		46: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '贸易/进出口',
            ['en-US']: 'none81'
        }),
		47: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '通讯/电信',
            ['en-US']: 'none82'
        }),
		48: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '酒店/餐饮/旅游',
            ['en-US']: 'none83'
        }),
		49: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '采掘/冶炼',
            ['en-US']: 'none84'
        }),
		50: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '银行',
            ['en-US']: 'none85'
        }),
		51: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '非盈利组织/政府',
            ['en-US']: 'none86'
        }),
		52: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '教育/培训',
            ['en-US']: 'none87'
        }),
		53: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '原材料',
            ['en-US']: 'none88'
        }),
		54: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '医疗/保健/卫生',
            ['en-US']: 'none89'
        }),
		55: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '化工/能源',
            ['en-US']: 'none90'
        }),
		56: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '制药/医药',
            ['en-US']: 'none91'
        }),
		57: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '农业/渔业/林业',
            ['en-US']: 'none92'
        }),
		58: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '保险',
            ['en-US']: 'none93'
        }),
	}),
	电力/燃气/水的生产和供应业: 2,
	房地产业: 3,
	公共管理/社会组织: 4,
	国际组织: 5,
	建筑业: 6,
	交通运输/仓储/邮政业: 7,
	教育: 8,
	金融业: 9,
	居民服务/其他服务业: 10,
	科学研究/技术服务/地质勘查业: 11,
	农/林/牧/鱼: 12,
	批发/零售业: 13,
	水利/环境和公共设施管理业: 14,
	卫生/社会保障/社会福利业: 15,
	文化/体育/娱乐业: 16,
	信息传输/计算机服务和软件业: 17,
	制造业: 18,
	住宿/餐饮业: 19,
	租赁/商务服务业: 20,
	无业: 21,
	其他: 22,
	专业服务: 23,
	中介服务: 24,
	互联网: 25,
	交通/运输/物流: 26,
	娱乐/体育/休闲: 27,
	媒体/印刷: 28,
	学术/科研/艺术: 29,
	家具: 30,
	广告/公关/展会: 31,
	建筑/设计/装潢: 32,
	快速消费品: 33,
	房地产: 34,
	服务业: 35,
	民营企业/私营企业: 36,
	水利: 37,
	汽车及零部件: 38,
	法律: 39,
	环保: 40,
	环境和公共设施管理业: 41,
	电力/电气: 42,
	耐用消费品: 43,
	计算机: 44,
	证券: 45,
	贸易/进出口: 46,
	通讯/电信: 47,
	酒店/餐饮/旅游: 48,
	采掘/冶炼: 49,
	银行: 50,
	非盈利组织/政府: 51,
	教育/培训: 52,
	原材料: 53,
	医疗/保健/卫生: 54,
	化工/能源: 55,
	制药/医药: 56,
	农业/渔业/林业: 57,
	保险: 58,
});
export const DcsCustomerOccupationType = Object.freeze({
	__proto__: Enum,
	个体经营/自由职业: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '个体经营/自由职业',
            ['en-US']: 'none94'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '国有企业/国有股份制企业',
            ['en-US']: 'none95'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '没有工作单位',
            ['en-US']: 'none96'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '民营企业/私营企业',
            ['en-US']: 'none97'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none98'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '社会团体',
            ['en-US']: 'none99'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '事业单位',
            ['en-US']: 'none100'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '外资企业/合资企业',
            ['en-US']: 'none101'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '政府机关',
            ['en-US']: 'none102'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '个人开业专家(如私人诊所/律师等)',
            ['en-US']: 'none103'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '个体户',
            ['en-US']: 'none104'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中外合营（合资·合作）',
            ['en-US']: 'none105'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公共事业单位(如医院、学校等)',
            ['en-US']: 'none106'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '军队或武警',
            ['en-US']: 'none107'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '半公半私',
            ['en-US']: 'none108'
        }),
		16: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '国有企业',
            ['en-US']: 'none109'
        }),
		17: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '外商独资·外企办事处',
            ['en-US']: 'none110'
        }),
		18: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '学生',
            ['en-US']: 'none111'
        }),
		19: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '家庭主妇/家庭主夫',
            ['en-US']: 'none112'
        }),
		20: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '政府部门',
            ['en-US']: 'none113'
        }),
		21: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '民营/私营企业',
            ['en-US']: 'none114'
        }),
		22: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '温州新天投资有限公司',
            ['en-US']: 'none115'
        }),
		23: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '目前没有工作',
            ['en-US']: 'none116'
        }),
		24: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '离/退休',
            ['en-US']: 'none117'
        }),
		25: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '私营·民营企业',
            ['en-US']: 'none118'
        }),
		26: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '自由职业',
            ['en-US']: 'none119'
        }),
		27: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '跨国/三资企业',
            ['en-US']: 'none120'
        }),
	}),
	国有企业/国有股份制企业: 2,
	没有工作单位: 3,
	民营企业/私营企业: 4,
	其他: 5,
	社会团体: 6,
	事业单位: 7,
	外资企业/合资企业: 8,
	政府机关: 9,
	个人开业专家(如私人诊所/律师等): 10,
	个体户: 11,
	中外合营（合资·合作）: 12,
	公共事业单位(如医院、学校等): 13,
	军队或武警: 14,
	半公半私: 15,
	国有企业: 16,
	外商独资·外企办事处: 17,
	学生: 18,
	家庭主妇/家庭主夫: 19,
	政府部门: 20,
	民营/私营企业: 21,
	温州新天投资有限公司: 22,
	目前没有工作: 23,
	离/退休: 24,
	私营·民营企业: 25,
	自由职业: 26,
	跨国/三资企业: 27,
});
export const DcsCustomerEducationLevel = Object.freeze({
	__proto__: Enum,
	文盲: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '文盲',
            ['en-US']: 'none121'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '小学',
            ['en-US']: 'none122'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '初中',
            ['en-US']: 'none123'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '高中/中专',
            ['en-US']: 'none124'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '本科/大专',
            ['en-US']: 'none125'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '硕士',
            ['en-US']: 'none126'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '博士',
            ['en-US']: 'none127'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未知',
            ['en-US']: 'none128'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '博士后',
            ['en-US']: 'none129'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '本科',
            ['en-US']: 'none130'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大专',
            ['en-US']: 'none131'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中专',
            ['en-US']: 'none132'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '高中',
            ['en-US']: 'none133'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '初中及以下',
            ['en-US']: 'none134'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '高中/中专/技校/职高',
            ['en-US']: 'none135'
        }),
	}),
	小学: 2,
	初中: 3,
	高中/中专: 4,
	本科/大专: 5,
	硕士: 6,
	博士: 7,
	未知: 8,
	博士后: 9,
	本科: 10,
	大专: 11,
	中专: 12,
	高中: 13,
	初中及以下: 14,
	高中/中专/技校/职高: 15,
});
export const DcsCustomerIncome = Object.freeze({
	__proto__: Enum,
	5万以下: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '5万以下',
            ['en-US']: 'none136'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '5～10万',
            ['en-US']: 'none137'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '10～15万',
            ['en-US']: 'none138'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '15～20万',
            ['en-US']: 'none139'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '20～25万',
            ['en-US']: 'none140'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '25～30万',
            ['en-US']: 'none141'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '30～35万',
            ['en-US']: 'none142'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '35万以上',
            ['en-US']: 'none143'
        }),
	}),
	5～10万: 2,
	10～15万: 3,
	15～20万: 4,
	20～25万: 5,
	25～30万: 6,
	30～35万: 7,
	35万以上: 8,
});
export const DcsCustomerCustomerType = Object.freeze({
	__proto__: Enum,
	个人客户: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '个人客户',
            ['en-US']: 'none144'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '单位客户',
            ['en-US']: 'none145'
        }),
	}),
	单位客户: 2,
});
export const DcsCompanyType = Object.freeze({
	__proto__: Enum,
	分公司: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '分公司',
            ['en-US']: 'none146'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商',
            ['en-US']: 'none147'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '代理库',
            ['en-US']: 'none148'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '物流公司',
            ['en-US']: 'none149'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '责任单位',
            ['en-US']: 'none150'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '配件供应商',
            ['en-US']: 'none151'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生产单位',
            ['en-US']: 'none152'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '承运商',
            ['en-US']: 'none153'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '物流客户',
            ['en-US']: 'none154'
        }),
	}),
	经销商: 2,
	代理库: 3,
	物流公司: 4,
	责任单位: 5,
	配件供应商: 6,
	生产单位: 7,
	承运商: 8,
	物流客户: 9,
});
export const DcsWorkflowOfSimpleApprovalStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none155'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已审核',
            ['en-US']: 'none156'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none157'
        }),
	}),
	已审核: 2,
	作废: 99,
});
export const DcsServiceActivityConditionDataType = Object.freeze({
	__proto__: Enum,
	日期: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '日期',
            ['en-US']: 'none158'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '布尔',
            ['en-US']: 'none159'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整数',
            ['en-US']: 'none160'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '字符',
            ['en-US']: 'none161'
        }),
	}),
	布尔: 2,
	整数: 3,
	字符: 4,
});
export const DcsRetainedCustomerVIPType = Object.freeze({
	__proto__: Enum,
	VIP卡: 102,
	properties: Object.freeze({
		102: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'VIP卡',
            ['en-US']: 'none162'
        }),
		103: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'VIP白银',
            ['en-US']: 'none163'
        }),
		104: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'VIP白金',
            ['en-US']: 'none164'
        }),
		105: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'VIP黄金',
            ['en-US']: 'none165'
        }),
		106: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'VIP钻石',
            ['en-US']: 'none166'
        }),
	}),
	VIP白银: 103,
	VIP白金: 104,
	VIP黄金: 105,
	VIP钻石: 106,
});
export const DcsRetainedCustomerCompanyType = Object.freeze({
	__proto__: Enum,
	股份/上市中资公司（100人以上）: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '股份/上市中资公司（100人以上）',
            ['en-US']: 'none167'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '股份/上市中资公司（100人以下）',
            ['en-US']: 'none168'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '国营/集体企业（5000人以上）',
            ['en-US']: 'none169'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '国营/集体企业（1000-5000）',
            ['en-US']: 'none170'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '国营/集体企业（少于1000）',
            ['en-US']: 'none171'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '合资/外商投资企业（100人以上）',
            ['en-US']: 'none172'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '合资/外商投资企业（100人以下）',
            ['en-US']: 'none173'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '私营企业（100人以上）',
            ['en-US']: 'none174'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '私营企业（51-100）',
            ['en-US']: 'none175'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '私营企业（1-50）',
            ['en-US']: 'none176'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '私营企业（仅仅自己或者家人）',
            ['en-US']: 'none177'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '乡镇/街道企业(100人以上)',
            ['en-US']: 'none178'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '乡镇/街道企业(100人以下)',
            ['en-US']: 'none179'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '政府/事业（部/省级）',
            ['en-US']: 'none180'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '政府/事业（地/市/局级）',
            ['en-US']: 'none181'
        }),
		16: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '政府/事业（县/处级）',
            ['en-US']: 'none182'
        }),
		17: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '政府/事业（乡镇/街道）',
            ['en-US']: 'none183'
        }),
		18: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '军、警、司',
            ['en-US']: 'none184'
        }),
	}),
	股份/上市中资公司（100人以下）: 2,
	国营/集体企业（5000人以上）: 3,
	国营/集体企业（1000-5000）: 4,
	国营/集体企业（少于1000）: 5,
	合资/外商投资企业（100人以上）: 6,
	合资/外商投资企业（100人以下）: 7,
	私营企业（100人以上）: 8,
	私营企业（51-100）: 9,
	私营企业（1-50）: 10,
	私营企业（仅仅自己或者家人）: 11,
	乡镇/街道企业(100人以上): 12,
	乡镇/街道企业(100人以下): 13,
	政府/事业（部/省级）: 14,
	政府/事业（地/市/局级）: 15,
	政府/事业（县/处级）: 16,
	政府/事业（乡镇/街道）: 17,
	军、警、司: 18,
});
export const DcsRetainedCustomerStatus = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none185'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '流失',
            ['en-US']: 'none186'
        }),
	}),
	流失: 99,
});
export const DcsVehicleOrderStatus = Object.freeze({
	__proto__: Enum,
	作废: 99,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none188'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提交',
            ['en-US']: 'none189'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '财务审核',
            ['en-US']: 'none190'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none187'
        }),
	}),
	新建: 1,
	提交: 2,
	财务审核: 7,
});
export const DcsVehicleOrderDetailStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none191'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已确认',
            ['en-US']: 'none192'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '完成',
            ['en-US']: 'none193'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none194'
        }),
	}),
	已确认: 3,
	完成: 4,
	作废: 99,
});
export const DcsVehicleOrderOrderType = Object.freeze({
	__proto__: Enum,
	普通订单: 21,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '周订单',
            ['en-US']: 'none197'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '移库订单',
            ['en-US']: 'none198'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '小品种订单',
            ['en-US']: 'none199'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '寄售订单',
            ['en-US']: 'none200'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中转库冲账订单',
            ['en-US']: 'none201'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '寄售冲账订单',
            ['en-US']: 'none202'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '试乘试驾订单',
            ['en-US']: 'none203'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '降级车订单',
            ['en-US']: 'none204'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '增补订单',
            ['en-US']: 'none205'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大客户订单',
            ['en-US']: 'none206'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '服务车订单',
            ['en-US']: 'none207'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '上市车订单',
            ['en-US']: 'none208'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新能源订单',
            ['en-US']: 'none209'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '退货订单',
            ['en-US']: 'none210'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '转售订单',
            ['en-US']: 'none211'
        }),
		16: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大客户冲账订单',
            ['en-US']: 'none212'
        }),
		17: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大客户寄售订单',
            ['en-US']: 'none213'
        }),
		18: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'A类预留',
            ['en-US']: 'none214'
        }),
		19: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'B类预留',
            ['en-US']: 'none215'
        }),
		20: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '特殊订单',
            ['en-US']: 'none216'
        }),
		21: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '普通订单',
            ['en-US']: 'none195'
        }),
		22: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '紧急订单',
            ['en-US']: 'none196'
        }),
		23: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '专用车',
            ['en-US']: 'none217'
        }),
	}),
	紧急订单: 22,
	周订单: 1,
	移库订单: 2,
	小品种订单: 3,
	寄售订单: 4,
	中转库冲账订单: 5,
	寄售冲账订单: 6,
	试乘试驾订单: 7,
	降级车订单: 8,
	增补订单: 9,
	大客户订单: 10,
	服务车订单: 11,
	上市车订单: 12,
	新能源订单: 13,
	退货订单: 14,
	转售订单: 15,
	大客户冲账订单: 16,
	大客户寄售订单: 17,
	A类预留: 18,
	B类预留: 19,
	特殊订单: 20,
	专用车: 23,
});
export const DcsVehicleOrderChangeDetailStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none218'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '拒绝',
            ['en-US']: 'none219'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已确认',
            ['en-US']: 'none220'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '完成',
            ['en-US']: 'none221'
        }),
	}),
	拒绝: 2,
	已确认: 3,
	完成: 4,
});
export const DcsVehiclePreAllocationRefMatchedType = Object.freeze({
	__proto__: Enum,
	订单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '订单',
            ['en-US']: 'none222'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '库存',
            ['en-US']: 'none223'
        }),
	}),
	库存: 2,
});
export const DcsVehiclePreAllocationRefStatus = Object.freeze({
	__proto__: Enum,
	未匹配: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未匹配',
            ['en-US']: 'none224'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '库存匹配',
            ['en-US']: 'none225'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '处理完成',
            ['en-US']: 'none226'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none227'
        }),
	}),
	库存匹配: 2,
	处理完成: 3,
	作废: 99,
});
export const DcsProductionPlanStatus = Object.freeze({
	__proto__: Enum,
	接受: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '接受',
            ['en-US']: 'none228'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '拒绝',
            ['en-US']: 'none229'
        }),
	}),
	拒绝: 1,
});
export const DcsVehicleReturnOrderStatus = Object.freeze({
	__proto__: Enum,
	新增: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新增',
            ['en-US']: 'none230'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提交',
            ['en-US']: 'none232'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '财务审核',
            ['en-US']: 'none233'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '退货确认',
            ['en-US']: 'none234'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '转售确认',
            ['en-US']: 'none235'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '处理完成',
            ['en-US']: 'none236'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商已出库',
            ['en-US']: 'none237'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '退货入库',
            ['en-US']: 'none238'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none231'
        }),
	}),
	作废: 99,
	提交: 2,
	财务审核: 3,
	退货确认: 4,
	转售确认: 5,
	处理完成: 6,
	经销商已出库: 7,
	退货入库: 8,
});
export const DcsVehicleShippingOrderStatus = Object.freeze({
	__proto__: Enum,
	未发运: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未发运',
            ['en-US']: 'none239'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已发运',
            ['en-US']: 'none240'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '全部接车',
            ['en-US']: 'none241'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '部分接车',
            ['en-US']: 'none242'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none243'
        }),
	}),
	已发运: 2,
	全部接车: 3,
	部分接车: 4,
	作废: 99,
});
export const DcsVehicleShippingMethod = Object.freeze({
	__proto__: Enum,
	空运: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '空运',
            ['en-US']: 'none244'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '水运',
            ['en-US']: 'none245'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '人工驾送',
            ['en-US']: 'none246'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '自提',
            ['en-US']: 'none247'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公路',
            ['en-US']: 'none248'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公铁联运',
            ['en-US']: 'none249'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '水陆联运',
            ['en-US']: 'none250'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '铁路',
            ['en-US']: 'none251'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '板车',
            ['en-US']: 'none252'
        }),
	}),
	水运: 2,
	人工驾送: 3,
	自提: 4,
	公路: 5,
	公铁联运: 6,
	水陆联运: 7,
	铁路: 8,
	板车: 9,
});
export const DcsVehicleShippingDetailVehicleReceptionStatus = Object.freeze({
	__proto__: Enum,
	未发运: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未发运',
            ['en-US']: 'none253'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未接车',
            ['en-US']: 'none254'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已接车',
            ['en-US']: 'none255'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none256'
        }),
	}),
	未接车: 1,
	已接车: 2,
	作废: 99,
});
export const DcsVehicleShipplanApprovalStatus = Object.freeze({
	__proto__: Enum,
	新增: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新增',
            ['en-US']: 'none257'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已登记',
            ['en-US']: 'none259'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已确认',
            ['en-US']: 'none260'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已出库',
            ['en-US']: 'none261'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '部分下达',
            ['en-US']: 'none262'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '全部下达',
            ['en-US']: 'none263'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none258'
        }),
	}),
	作废: 99,
	已登记: 2,
	已确认: 3,
	已出库: 4,
	部分下达: 5,
	全部下达: 6,
});
export const DcsVehicleShipplanApprovalDetailStatus = Object.freeze({
	__proto__: Enum,
	新增: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新增',
            ['en-US']: 'none264'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已下达',
            ['en-US']: 'none265'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已出库',
            ['en-US']: 'none266'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已拣配',
            ['en-US']: 'none268'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none267'
        }),
	}),
	已下达: 2,
	已出库: 3,
	作废: 99,
	已拣配: 4,
});
export const DcsVehicleAvailableResourceQualityStatus = Object.freeze({
	__proto__: Enum,
	合格: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '合格',
            ['en-US']: 'none269'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '不合格',
            ['en-US']: 'none270'
        }),
	}),
	不合格: 2,
});
export const DcsVehicleAvailableResourceLockStatus = Object.freeze({
	__proto__: Enum,
	未锁定: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未锁定',
            ['en-US']: 'none271'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '预分车锁定',
            ['en-US']: 'none272'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审批单锁定',
            ['en-US']: 'none273'
        }),
	}),
	预分车锁定: 2,
	审批单锁定: 3,
});
export const DcsVehicleTrackingFormSourceBillType = Object.freeze({
	__proto__: Enum,
	发车审批单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '发车审批单',
            ['en-US']: 'none274'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '退货单',
            ['en-US']: 'none275'
        }),
	}),
	退货单: 2,
});
export const DcsVehicleTrackingFormStatus = Object.freeze({
	__proto__: Enum,
	在库: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '在库',
            ['en-US']: 'none276'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '出库',
            ['en-US']: 'none277'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商在库',
            ['en-US']: 'none278'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商售出',
            ['en-US']: 'none279'
        }),
	}),
	出库: 2,
	经销商在库: 3,
	经销商售出: 4,
});
export const DcsVehicleOrderChangePolicyShippingDateControl = Object.freeze({
	__proto__: Enum,
	计划发车日期: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '计划发车日期',
            ['en-US']: 'none280'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '期望发车日期',
            ['en-US']: 'none281'
        }),
	}),
	期望发车日期: 2,
});
export const DcsVehPifaPriceDiscLevelDetailPriceCalculationMethod = Object.freeze({
	__proto__: Enum,
	批发价*加价率: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '批发价*加价率',
            ['en-US']: 'none282'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '批发价+加价额',
            ['en-US']: 'none283'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '批发价*加价率+加价额',
            ['en-US']: 'none284'
        }),
	}),
	批发价+加价额: 2,
	批发价*加价率+加价额: 3,
});
export const DcsVehicleOrderPlanStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none285'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '激活',
            ['en-US']: 'none286'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '完成',
            ['en-US']: 'none287'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提交',
            ['en-US']: 'none288'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已按回复量转成订单',
            ['en-US']: 'none289'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none290'
        }),
	}),
	激活: 2,
	完成: 3,
	提交: 5,
	已按回复量转成订单: 6,
	作废: 99,
});
export const DcsVehicleInformationVehicleType = Object.freeze({
	__proto__: Enum,
	商品车: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '商品车',
            ['en-US']: 'none291'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '降级车',
            ['en-US']: 'none292'
        }),
	}),
	降级车: 2,
});
export const DcsDealerTransactionBillStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none293'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提交',
            ['en-US']: 'none294'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已确认',
            ['en-US']: 'none295'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已出库',
            ['en-US']: 'none296'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已入库',
            ['en-US']: 'none297'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none298'
        }),
	}),
	提交: 2,
	已确认: 3,
	已出库: 4,
	已入库: 5,
	作废: 99,
});
export const DcsVehiclePriceChangeAppStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none299'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none300'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已执行',
            ['en-US']: 'none301'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none302'
        }),
	}),
	有效: 2,
	已执行: 3,
	作废: 99,
});
export const DcsVehicleBaseDataStatus = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none303'
        }),
	}),
});
export const DcsVehShipplanApprovalChangeRecAdjustmentType = Object.freeze({
	__proto__: Enum,
	可用资源调整: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '可用资源调整',
            ['en-US']: 'none304'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审批单调整',
            ['en-US']: 'none305'
        }),
	}),
	审批单调整: 2,
});
export const DcsVehicleWarehouseType = Object.freeze({
	__proto__: Enum,
	中心库: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中心库',
            ['en-US']: 'none306'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中转库',
            ['en-US']: 'none307'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '虚拟库',
            ['en-US']: 'none308'
        }),
	}),
	中转库: 2,
	虚拟库: 3,
});
export const DcsDealerVehicleStockInventoryStatus = Object.freeze({
	__proto__: Enum,
	在途: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '在途',
            ['en-US']: 'none309'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '在库',
            ['en-US']: 'none310'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '出库',
            ['en-US']: 'none311'
        }),
	}),
	在库: 1,
	出库: 2,
});
export const DcsDealerVehicleStockPDIStatus = Object.freeze({
	__proto__: Enum,
	不合格: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '不合格',
            ['en-US']: 'none312'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '合格',
            ['en-US']: 'none313'
        }),
	}),
	合格: 1,
});
export const DcsDealerVehicleStockSourceType = Object.freeze({
	__proto__: Enum,
	采购入库: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '采购入库',
            ['en-US']: 'none314'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '退货入库',
            ['en-US']: 'none315'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '调拨入库',
            ['en-US']: 'none316'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商买卖入库',
            ['en-US']: 'none317'
        }),
	}),
	退货入库: 1,
	调拨入库: 2,
	经销商买卖入库: 3,
});
export const DcsVehicleStockLockStatus = Object.freeze({
	__proto__: Enum,
	未锁定: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未锁定',
            ['en-US']: 'none318'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '锁定',
            ['en-US']: 'none319'
        }),
	}),
	锁定: 1,
});
export const DcsProductColor = Object.freeze({
	__proto__: Enum,
	精灵白: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '精灵白',
            ['en-US']: 'none320'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '雪域白',
            ['en-US']: 'none321'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '星际黑',
            ['en-US']: 'none322'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '雅士黑',
            ['en-US']: 'none323'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '珠光黑',
            ['en-US']: 'none324'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '激情红',
            ['en-US']: 'none325'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '旋风红',
            ['en-US']: 'none326'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '炫耀红',
            ['en-US']: 'none327'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '格调灰',
            ['en-US']: 'none328'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '云海灰',
            ['en-US']: 'none329'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '炫沙金',
            ['en-US']: 'none330'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '冰酷蓝',
            ['en-US']: 'none331'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '激情蓝',
            ['en-US']: 'none332'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '极地蓝',
            ['en-US']: 'none333'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '晴空蓝',
            ['en-US']: 'none334'
        }),
		16: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '星空蓝',
            ['en-US']: 'none335'
        }),
		17: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '碧玺绿',
            ['en-US']: 'none336'
        }),
		18: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '冰河银',
            ['en-US']: 'none337'
        }),
		19: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '风尚银',
            ['en-US']: 'none338'
        }),
		20: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '炫亮银',
            ['en-US']: 'none339'
        }),
		21: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生命绿',
            ['en-US']: 'none340'
        }),
		22: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '胜利蓝',
            ['en-US']: 'none341'
        }),
		23: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '玄云白',
            ['en-US']: 'none342'
        }),
		24: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '星空银',
            ['en-US']: 'none343'
        }),
		25: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '珠光白',
            ['en-US']: 'none344'
        }),
		26: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '创驰蓝',
            ['en-US']: 'none345'
        }),
		27: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '神秘银',
            ['en-US']: 'none346'
        }),
		28: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '仙踪绿',
            ['en-US']: 'none347'
        }),
	}),
	雪域白: 2,
	星际黑: 3,
	雅士黑: 4,
	珠光黑: 5,
	激情红: 6,
	旋风红: 7,
	炫耀红: 8,
	格调灰: 9,
	云海灰: 10,
	炫沙金: 11,
	冰酷蓝: 12,
	激情蓝: 13,
	极地蓝: 14,
	晴空蓝: 15,
	星空蓝: 16,
	碧玺绿: 17,
	冰河银: 18,
	风尚银: 19,
	炫亮银: 20,
	生命绿: 21,
	胜利蓝: 22,
	玄云白: 23,
	星空银: 24,
	珠光白: 25,
	创驰蓝: 26,
	神秘银: 27,
	仙踪绿: 28,
});
export const DcsDealerWarehouseType = Object.freeze({
	__proto__: Enum,
	整车仓库: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车仓库',
            ['en-US']: 'none348'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '配件仓库',
            ['en-US']: 'none349'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '旧件仓库',
            ['en-US']: 'none350'
        }),
	}),
	配件仓库: 2,
	旧件仓库: 3,
});
export const DcsDealerRegionManagerAffiSalesRegion = Object.freeze({
	__proto__: Enum,
	东区: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '东区',
            ['en-US']: 'none351'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '南区',
            ['en-US']: 'none352'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '西区',
            ['en-US']: 'none353'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '北区',
            ['en-US']: 'none354'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中区',
            ['en-US']: 'none355'
        }),
	}),
	南区: 2,
	西区: 3,
	北区: 4,
	中区: 5,
});
export const DcsVehiclePaymentBillCertificateSummary = Object.freeze({
	__proto__: Enum,
	整车款: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车款',
            ['en-US']: 'none356'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '维修款',
            ['en-US']: 'none357'
        }),
	}),
	维修款: 2,
});
export const DcsVehiclePaymentBillStatus = Object.freeze({
	__proto__: Enum,
	新增: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新增',
            ['en-US']: 'none358'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none360'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核通过',
            ['en-US']: 'none361'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核不通过',
            ['en-US']: 'none362'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none359'
        }),
	}),
	作废: 99,
	有效: 2,
	审核通过: 3,
	审核不通过: 4,
});
export const DcsVehicleAccountReceivableBillStatus = Object.freeze({
	__proto__: Enum,
	新增: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新增',
            ['en-US']: 'none363'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已接收',
            ['en-US']: 'none365'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '银行查询',
            ['en-US']: 'none366'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核通过',
            ['en-US']: 'none367'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已入账',
            ['en-US']: 'none368'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '转出申请',
            ['en-US']: 'none369'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '转出审批',
            ['en-US']: 'none370'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '出纳付票',
            ['en-US']: 'none371'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none364'
        }),
	}),
	作废: 99,
	已接收: 2,
	银行查询: 3,
	审核通过: 4,
	已入账: 5,
	转出申请: 6,
	转出审批: 7,
	出纳付票: 8,
});
export const DcsVehicleAccountReceivableBillType = Object.freeze({
	__proto__: Enum,
	两方承兑汇票: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '两方承兑汇票',
            ['en-US']: 'none372'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '三方承兑汇票',
            ['en-US']: 'none373'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '质押汇票',
            ['en-US']: 'none374'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其它',
            ['en-US']: 'none375'
        }),
	}),
	三方承兑汇票: 2,
	质押汇票: 3,
	其它: 4,
});
export const DcsVehiclePriceStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none376'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none377'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none378'
        }),
	}),
	有效: 2,
	作废: 99,
});
export const DcsVehicleCustomerAccountAvailability = Object.freeze({
	__proto__: Enum,
	可用: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '可用',
            ['en-US']: 'none379'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '不可用',
            ['en-US']: 'none380'
        }),
	}),
	不可用: 2,
});
export const DcsVehicleDLRAccountFreezeBillStatus = Object.freeze({
	__proto__: Enum,
	新增: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新增',
            ['en-US']: 'none381'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none382'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none383'
        }),
	}),
	有效: 2,
	作废: 99,
});
export const DcsVehicleAccountReceivableBillTransferOutType = Object.freeze({
	__proto__: Enum,
	汇票转出: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '汇票转出',
            ['en-US']: 'none384'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '贴现',
            ['en-US']: 'none385'
        }),
	}),
	贴现: 2,
});
export const DcsVehicleDealerCreditLimitAppStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none386'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none387'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已执行',
            ['en-US']: 'none388'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '失效',
            ['en-US']: 'none389'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none390'
        }),
	}),
	有效: 2,
	已执行: 3,
	失效: 4,
	作废: 99,
});
export const DcsVehicleCustAccountHisDetailBusinessType = Object.freeze({
	__proto__: Enum,
	整车来款: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车来款',
            ['en-US']: 'none391'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车销售出库',
            ['en-US']: 'none392'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车销售退货',
            ['en-US']: 'none393'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '汇票贴息',
            ['en-US']: 'none394'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其它',
            ['en-US']: 'none395'
        }),
	}),
	整车销售出库: 2,
	整车销售退货: 3,
	汇票贴息: 4,
	其它: 5,
});
export const DcsCustomerIdDocumentType = Object.freeze({
	__proto__: Enum,
	居民身份证: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '居民身份证',
            ['en-US']: 'none396'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '军官证',
            ['en-US']: 'none397'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '港澳台海外地区证件',
            ['en-US']: 'none398'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '企业代码证',
            ['en-US']: 'none399'
        }),
	}),
	军官证: 2,
	港澳台海外地区证件: 3,
	企业代码证: 4,
});
export const 尚未翻译 = Object.freeze({
	__proto__: Enum,
	15天以下: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待发运',
            ['en-US']: 'none1711'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '发运在途',
            ['en-US']: 'none1712'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已交车',
            ['en-US']: 'none1713'
        }),
	}),
	15-29天: 2,
	30天以上: 3,
	按日展开: 1,
	按周展开: 2,
	待发运: 1,
	发运在途: 2,
	已交车: 3,
});
export const DcsRetailContractSigningLocation = Object.freeze({
	__proto__: Enum,
	店内: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '店内',
            ['en-US']: 'none403'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '车展',
            ['en-US']: 'none404'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其它',
            ['en-US']: 'none405'
        }),
	}),
	车展: 2,
	其它: 3,
});
export const DcsBusinessDomain = Object.freeze({
	__proto__: Enum,
	整车: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车',
            ['en-US']: 'none408'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '服务',
            ['en-US']: 'none409'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '配件',
            ['en-US']: 'none410'
        }),
	}),
	服务: 2,
	配件: 3,
});
export const DcsMultiLevelAuditConfigInitialStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none411'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提交',
            ['en-US']: 'none412'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核中',
            ['en-US']: 'none413'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核通过',
            ['en-US']: 'none414'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核不通过',
            ['en-US']: 'none415'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none416'
        }),
	}),
	提交: 2,
	审核中: 3,
	审核通过: 4,
	审核不通过: 5,
	作废: 99,
});
export const DcsDealerType = Object.freeze({
	__proto__: Enum,
	一网: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一网',
            ['en-US']: 'none419'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '二网',
            ['en-US']: 'none420'
        }),
	}),
	二网: 2,
});
export const DcsDealerPostType = Object.freeze({
	__proto__: Enum,
	关键岗位: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '关键岗位',
            ['en-US']: 'none421'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '业务岗位',
            ['en-US']: 'none422'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '认证岗位',
            ['en-US']: 'none423'
        }),
	}),
	业务岗位: 2,
	认证岗位: 3,
});
export const DcsDealerEmployeePostPostGrade = Object.freeze({
	__proto__: Enum,
	1级: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '1级',
            ['en-US']: 'none424'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '2级',
            ['en-US']: 'none425'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '3级',
            ['en-US']: 'none426'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '4级',
            ['en-US']: 'none427'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '无级别',
            ['en-US']: 'none428'
        }),
	}),
	2级: 2,
	3级: 3,
	4级: 4,
	无级别: 5,
});
export const DcsDealerEmployeeEmployeeStatus = Object.freeze({
	__proto__: Enum,
	新增: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新增',
            ['en-US']: 'none429'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '变更',
            ['en-US']: 'none430'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '离职',
            ['en-US']: 'none431'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '休假',
            ['en-US']: 'none432'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '在职',
            ['en-US']: 'none433'
        }),
	}),
	变更: 2,
	离职: 3,
	休假: 4,
	在职: 5,
});
export const DcsDealerEmployeeChangeAppType = Object.freeze({
	__proto__: Enum,
	变更: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '变更',
            ['en-US']: 'none434'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '离职',
            ['en-US']: 'none435'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '休假',
            ['en-US']: 'none436'
        }),
	}),
	离职: 2,
	休假: 3,
});
export const DcsDealerEmployeeChangeAppStatus = Object.freeze({
	__proto__: Enum,
	待审核: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待审核',
            ['en-US']: 'none437'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核通过',
            ['en-US']: 'none438'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核不通过',
            ['en-US']: 'none439'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none440'
        }),
	}),
	审核通过: 2,
	审核不通过: 3,
	作废: 99,
});
export const DcsCancellationAppStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none441'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大区经理审核通过',
            ['en-US']: 'none442'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大区经理审核不通过',
            ['en-US']: 'none443'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '确认通过',
            ['en-US']: 'none444'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '确认不通过',
            ['en-US']: 'none445'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '终止',
            ['en-US']: 'none446'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已邮寄文件',
            ['en-US']: 'none447'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '清算汇总至财务',
            ['en-US']: 'none448'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '部门处理中',
            ['en-US']: 'none449'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '业务部门处理完成',
            ['en-US']: 'none450'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '汇款单至财务',
            ['en-US']: 'none451'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大区总监审核通过',
            ['en-US']: 'none453'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大区总监审核不通过',
            ['en-US']: 'none454'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已下发业务部门',
            ['en-US']: 'none455'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '财务清算完成',
            ['en-US']: 'none456'
        }),
		16: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '汇款完成',
            ['en-US']: 'none457'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none452'
        }),
	}),
	大区经理审核通过: 2,
	大区经理审核不通过: 3,
	确认通过: 4,
	确认不通过: 5,
	终止: 6,
	已邮寄文件: 7,
	清算汇总至财务: 8,
	部门处理中: 9,
	业务部门处理完成: 10,
	汇款单至财务: 11,
	作废: 99,
	大区总监审核通过: 12,
	大区总监审核不通过: 13,
	已下发业务部门: 14,
	财务清算完成: 15,
	汇款完成: 16,
});
export const DcsFilingApplicationStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none458'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已提交财务',
            ['en-US']: 'none459'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '处理完成  ',
            ['en-US']: 'none460'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none461'
        }),
	}),
	已提交财务: 2,
	处理完成  : 3,
	作废: 99,
});
export const DcsAppealApplicationAppealType = Object.freeze({
	__proto__: Enum,
	跨区销售: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '跨区销售',
            ['en-US']: 'none462'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '跨区展示',
            ['en-US']: 'none463'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '低价销售',
            ['en-US']: 'none464'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '跨区宣传',
            ['en-US']: 'none465'
        }),
	}),
	跨区展示: 2,
	低价销售: 3,
	跨区宣传: 4,
});
export const DcsAppealApplicationStatus = Object.freeze({
	__proto__: Enum,
	待审核: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待审核',
            ['en-US']: 'none466'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '双方协商中',
            ['en-US']: 'none467'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核不通过',
            ['en-US']: 'none468'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已提报财务',
            ['en-US']: 'none469'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已撤诉',
            ['en-US']: 'none470'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '处理完毕',
            ['en-US']: 'none471'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none472'
        }),
	}),
	双方协商中: 2,
	审核不通过: 3,
	已提报财务: 4,
	已撤诉: 5,
	处理完毕: 6,
	作废: 99,
});
export const DcsAppealApplicationApprovalMark = Object.freeze({
	__proto__: Enum,
	举报成立: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '举报成立',
            ['en-US']: 'none473'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '举报资料不全',
            ['en-US']: 'none474'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '举报不成立',
            ['en-US']: 'none475'
        }),
	}),
	举报资料不全: 2,
	举报不成立: 3,
});
export const DcsAppealDealerListType = Object.freeze({
	__proto__: Enum,
	实销方: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '实销方',
            ['en-US']: 'none476'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '原始进货方',
            ['en-US']: 'none477'
        }),
	}),
	原始进货方: 2,
});
export const DcsAnnouncementBillType = Object.freeze({
	__proto__: Enum,
	通知: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '通知',
            ['en-US']: 'none478'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '通报',
            ['en-US']: 'none479'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none480'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '政策',
            ['en-US']: 'none481'
        }),
	}),
	通报: 2,
	其他: 3,
	政策: 4,
});
export const DcsAnnouncementBillStatus = Object.freeze({
	__proto__: Enum,
	未发布: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未发布',
            ['en-US']: 'none482'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已关闭',
            ['en-US']: 'none483'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已发布',
            ['en-US']: 'none484'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none485'
        }),
	}),
	已关闭: 2,
	已发布: 3,
	作废: 99,
});
export const DcsFileInformationStatus = Object.freeze({
	__proto__: Enum,
	生效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生效',
            ['en-US']: 'none486'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '申请关闭',
            ['en-US']: 'none487'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已关闭',
            ['en-US']: 'none488'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '本部门处理',
            ['en-US']: 'none490'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '非本部门处理',
            ['en-US']: 'none491'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none489'
        }),
	}),
	申请关闭: 2,
	已关闭: 3,
	作废: 99,
	本部门处理: 4,
	非本部门处理: 5,
});
export const DcsFileInformationSatisfaction = Object.freeze({
	__proto__: Enum,
	满意: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '满意',
            ['en-US']: 'none492'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '不满意',
            ['en-US']: 'none493'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一般',
            ['en-US']: 'none494'
        }),
	}),
	不满意: 2,
	一般: 3,
});
export const DcsReservationApplicationStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none495'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已确认',
            ['en-US']: 'none496'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '接受预约',
            ['en-US']: 'none497'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '取消预约',
            ['en-US']: 'none498'
        }),
	}),
	已确认: 2,
	接受预约: 3,
	取消预约: 99,
});
export const DcsPropagateMethodStatus = Object.freeze({
	__proto__: Enum,
	生效: 2,
	properties: Object.freeze({
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生效',
            ['en-US']: 'none499'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none500'
        }),
	}),
	作废: 99,
});
export const DcsMarketEventProjectStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none501'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已确认',
            ['en-US']: 'none502'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已审核',
            ['en-US']: 'none503'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驳回',
            ['en-US']: 'none504'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none505'
        }),
	}),
	已确认: 2,
	已审核: 3,
	驳回: 4,
	作废: 99,
});
export const DcsMarketEventPlanStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none506'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生效',
            ['en-US']: 'none507'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已分配',
            ['en-US']: 'none508'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已确认',
            ['en-US']: 'none509'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驳回',
            ['en-US']: 'none510'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已审核',
            ['en-US']: 'none512'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none511'
        }),
	}),
	生效: 2,
	已分配: 3,
	已确认: 4,
	驳回: 5,
	作废: 99,
	已审核: 6,
});
export const DcsMarketEventPlanSettlementMethod = Object.freeze({
	__proto__: Enum,
	返利: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '返利',
            ['en-US']: 'none513'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '直投',
            ['en-US']: 'none514'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '返现',
            ['en-US']: 'none515'
        }),
	}),
	直投: 2,
	返现: 4,
});
export const DcsMarketEventOutcomeRecordStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none516'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提交',
            ['en-US']: 'none517'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已确认',
            ['en-US']: 'none518'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已登记',
            ['en-US']: 'none519'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已审核',
            ['en-US']: 'none520'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驳回',
            ['en-US']: 'none521'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none522'
        }),
	}),
	提交: 2,
	已确认: 3,
	已登记: 4,
	已审核: 5,
	驳回: 6,
	作废: 99,
});
export const DcsMarketEventOutcomeRecordSettlementMethod = Object.freeze({
	__proto__: Enum,
	返利: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '返利',
            ['en-US']: 'none523'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '直投',
            ['en-US']: 'none524'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '自费',
            ['en-US']: 'none525'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '返现',
            ['en-US']: 'none526'
        }),
	}),
	直投: 2,
	自费: 3,
	返现: 4,
});
export const DcsMarketEventSettlementStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none527'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提交',
            ['en-US']: 'none528'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已审核',
            ['en-US']: 'none529'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驳回',
            ['en-US']: 'none530'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '返利',
            ['en-US']: 'none531'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none532'
        }),
	}),
	提交: 2,
	已审核: 3,
	驳回: 4,
	返利: 5,
	作废: 99,
});
export const DcsMarketEventProjectSponsor = Object.freeze({
	__proto__: Enum,
	主机厂: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '主机厂',
            ['en-US']: 'none533'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大区',
            ['en-US']: 'none534'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售店',
            ['en-US']: 'none535'
        }),
	}),
	大区: 2,
	销售店: 3,
});
export const DcsMarketEventPlanSponsor = Object.freeze({
	__proto__: Enum,
	主机厂: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '主机厂',
            ['en-US']: 'none536'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大区',
            ['en-US']: 'none537'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售店',
            ['en-US']: 'none538'
        }),
	}),
	大区: 2,
	销售店: 3,
});
export const DcsMarketEventSponsor = Object.freeze({
	__proto__: Enum,
	主机厂: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '主机厂',
            ['en-US']: 'none539'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大区',
            ['en-US']: 'none540'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售店',
            ['en-US']: 'none541'
        }),
	}),
	大区: 2,
	销售店: 3,
});
export const DcsTaskAssignmentComplainLevel = Object.freeze({
	__proto__: Enum,
	一般抱怨: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一般抱怨',
            ['en-US']: 'none542'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中级抱怨',
            ['en-US']: 'none543'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '强烈抱怨',
            ['en-US']: 'none544'
        }),
	}),
	中级抱怨: 2,
	强烈抱怨: 3,
});
export const DcsTaskAssignmentResult = Object.freeze({
	__proto__: Enum,
	产品质量: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '产品质量',
            ['en-US']: 'none545'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '技术能力',
            ['en-US']: 'none546'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '备件供应',
            ['en-US']: 'none547'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '服务过程',
            ['en-US']: 'none548'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '随车文件',
            ['en-US']: 'none549'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售过程',
            ['en-US']: 'none550'
        }),
		21: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '产品类',
            ['en-US']: 'none551'
        }),
		22: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售类',
            ['en-US']: 'none552'
        }),
		23: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '服务类',
            ['en-US']: 'none553'
        }),
		24: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '备件类',
            ['en-US']: 'none554'
        }),
		31: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '技术咨询',
            ['en-US']: 'none555'
        }),
		32: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '服务咨询',
            ['en-US']: 'none556'
        }),
		33: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '备品咨询',
            ['en-US']: 'none557'
        }),
		34: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售咨询',
            ['en-US']: 'none558'
        }),
	}),
	技术能力: 2,
	备件供应: 3,
	服务过程: 4,
	随车文件: 5,
	销售过程: 6,
	产品类: 21,
	销售类: 22,
	服务类: 23,
	备件类: 24,
	技术咨询: 31,
	服务咨询: 32,
	备品咨询: 33,
	销售咨询: 34,
});
export const DcsTaskAssignmentServiceLevel = Object.freeze({
	__proto__: Enum,
	24小时联系回复，3天闭环: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '24小时联系回复，3天闭环',
            ['en-US']: 'none559'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '24小时联系回复，2天闭环',
            ['en-US']: 'none560'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '24小时联系回复，1天闭环',
            ['en-US']: 'none561'
        }),
	}),
	24小时联系回复，2天闭环: 2,
	24小时联系回复，1天闭环: 3,
});
export const DcsTaskAssignmentStatus = Object.freeze({
	__proto__: Enum,
	未反馈: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未反馈',
            ['en-US']: 'none562'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '处理中',
            ['en-US']: 'none563'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待审核',
            ['en-US']: 'none564'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '业务部审核DCS不通过',
            ['en-US']: 'none565'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '业务部门申请闭环',
            ['en-US']: 'none566'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '客服回访审核不通过',
            ['en-US']: 'none567'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已审核',
            ['en-US']: 'none568'
        }),
	}),
	处理中: 1,
	待审核: 2,
	业务部审核DCS不通过: 3,
	业务部门申请闭环: 4,
	客服回访审核不通过: 5,
	已审核: 6,
});
export const DcsTaskAssignmentBusinessType = Object.freeze({
	__proto__: Enum,
	报修: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '报修',
            ['en-US']: 'none569'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '抱怨',
            ['en-US']: 'none570'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '表扬',
            ['en-US']: 'none571'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '咨询',
            ['en-US']: 'none572'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '建议',
            ['en-US']: 'none573'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '救援',
            ['en-US']: 'none574'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '潜客',
            ['en-US']: 'none575'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '催单',
            ['en-US']: 'none576'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '预约',
            ['en-US']: 'none577'
        }),
	}),
	抱怨: 2,
	表扬: 3,
	咨询: 4,
	建议: 5,
	救援: 6,
	潜客: 7,
	催单: 8,
	预约: 9,
});
export const DcsSalesLeadProspectLevel = Object.freeze({
	__proto__: Enum,
	FO: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'FO',
            ['en-US']: 'none578'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'A',
            ['en-US']: 'none579'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'B',
            ['en-US']: 'none580'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'C',
            ['en-US']: 'none581'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'N',
            ['en-US']: 'none582'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'S',
            ['en-US']: 'none583'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'O',
            ['en-US']: 'none584'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'F',
            ['en-US']: 'none585'
        }),
	}),
	A: 2,
	B: 3,
	C: 4,
	N: 5,
	S: 6,
	O: 7,
	F: 8,
});
export const DcsSalesLeadProspectIntention = Object.freeze({
	__proto__: Enum,
	高意向: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '高意向',
            ['en-US']: 'none586'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '低意向',
            ['en-US']: 'none587'
        }),
	}),
	低意向: 2,
});
export const DcsSalesLeadCustomerSource = Object.freeze({
	__proto__: Enum,
	新车订单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新车订单',
            ['en-US']: 'none588'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '400电话',
            ['en-US']: 'none589'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '置换订单',
            ['en-US']: 'none590'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '试驾订单',
            ['en-US']: 'none591'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '电话营销-400',
            ['en-US']: 'none592'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '社会化媒体-在线客服',
            ['en-US']: 'none593'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '社会化媒体-网络活动',
            ['en-US']: 'none594'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '电话营销-外呼',
            ['en-US']: 'none595'
        }),
	}),
	400电话: 2,
	置换订单: 3,
	试驾订单: 4,
	电话营销-400: 5,
	社会化媒体-在线客服: 6,
	社会化媒体-网络活动: 7,
	电话营销-外呼: 8,
});
export const DcsSalesLeadStatus = Object.freeze({
	__proto__: Enum,
	新派单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新派单',
            ['en-US']: 'none596'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '处理中',
            ['en-US']: 'none597'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '转意向客户',
            ['en-US']: 'none598'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '成交闭环',
            ['en-US']: 'none599'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '不成交闭环（战败）',
            ['en-US']: 'none600'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核关闭',
            ['en-US']: 'none601'
        }),
	}),
	处理中: 2,
	转意向客户: 3,
	成交闭环: 4,
	不成交闭环（战败）: 5,
	审核关闭: 6,
});
export const DcsSalesLeadPurchaseHistory = Object.freeze({
	__proto__: Enum,
	第一次购车: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '第一次购车',
            ['en-US']: 'none602'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '替代原车(非奇瑞老客户)',
            ['en-US']: 'none603'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '替代原车(奇瑞老客户)',
            ['en-US']: 'none604'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '增购车(非奇瑞老客户)',
            ['en-US']: 'none605'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '增购车(奇瑞老客户)',
            ['en-US']: 'none606'
        }),
	}),
	替代原车(非奇瑞老客户): 2,
	替代原车(奇瑞老客户): 3,
	增购车(非奇瑞老客户): 4,
	增购车(奇瑞老客户): 5,
});
export const DcsSalesLeadIntentionHistoryCategory = Object.freeze({
	__proto__: Enum,
	FO: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'FO',
            ['en-US']: 'none607'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'A',
            ['en-US']: 'none608'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'B',
            ['en-US']: 'none609'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'C',
            ['en-US']: 'none610'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'N',
            ['en-US']: 'none611'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'S',
            ['en-US']: 'none612'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'O',
            ['en-US']: 'none613'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'F',
            ['en-US']: 'none614'
        }),
	}),
	A: 2,
	B: 3,
	C: 4,
	N: 5,
	S: 6,
	O: 7,
	F: 8,
});
export const DcsEnergySavePromotionStandardStatus = Object.freeze({
	__proto__: Enum,
	生效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生效',
            ['en-US']: 'none615'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none616'
        }),
	}),
	作废: 99,
});
export const DcsEnergySavePromotionAppStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none617'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提交',
            ['en-US']: 'none618'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已审核',
            ['en-US']: 'none619'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驳回',
            ['en-US']: 'none620'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待结算',
            ['en-US']: 'none621'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已结算',
            ['en-US']: 'none622'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none623'
        }),
	}),
	提交: 2,
	已审核: 3,
	驳回: 4,
	待结算: 5,
	已结算: 6,
	作废: 99,
});
export const DcsEvergySavePromotionSettlementStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none624'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提交',
            ['en-US']: 'none625'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核',
            ['en-US']: 'none626'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驳回',
            ['en-US']: 'none627'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none628'
        }),
	}),
	提交: 2,
	审核: 3,
	驳回: 4,
	作废: 99,
});
export const DcsMarketEventOutcomeRecordSettlementStatus = Object.freeze({
	__proto__: Enum,
	未结算: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未结算',
            ['en-US']: 'none629'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待结算',
            ['en-US']: 'none630'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '部分结算',
            ['en-US']: 'none631'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已结算',
            ['en-US']: 'none632'
        }),
	}),
	待结算: 2,
	部分结算: 3,
	已结算: 4,
});
export const DcsMarketEventOutcomeDetailCategory = Object.freeze({
	__proto__: Enum,
	广宣: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '广宣',
            ['en-US']: 'none633'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '物料',
            ['en-US']: 'none634'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '促销费用',
            ['en-US']: 'none635'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none636'
        }),
	}),
	物料: 2,
	促销费用: 3,
	其他: 4,
});
export const DcsMarketEventSettlementSumStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none637'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提交',
            ['en-US']: 'none638'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核',
            ['en-US']: 'none639'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驳回',
            ['en-US']: 'none640'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none641'
        }),
	}),
	提交: 2,
	审核: 3,
	驳回: 4,
	作废: 99,
});
export const DcsTaskAssignmentMalfunctionRecognition = Object.freeze({
	__proto__: Enum,
	产品质量原因: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '产品质量原因',
            ['en-US']: 'none642'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '加装原因',
            ['en-US']: 'none643'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '客户操作原因',
            ['en-US']: 'none644'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '自然灾害',
            ['en-US']: 'none645'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none646'
        }),
	}),
	加装原因: 2,
	客户操作原因: 3,
	自然灾害: 4,
	其他: 5,
});
export const DcsDealerEmployeeStatus = Object.freeze({
	__proto__: Enum,
	待审核: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待审核',
            ['en-US']: 'none647'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核通过',
            ['en-US']: 'none648'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核不通过',
            ['en-US']: 'none649'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none650'
        }),
	}),
	审核通过: 2,
	审核不通过: 3,
	作废: 99,
});
export const DcsMarketEventStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none651'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生效',
            ['en-US']: 'none652'
        }),
	}),
	生效: 2,
});
export const DcsPlanRulePlanCategory = Object.freeze({
	__proto__: Enum,
	月度: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '月度',
            ['en-US']: 'none658'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '周度',
            ['en-US']: 'none659'
        }),
	}),
	周度: 2,
});
export const DcsVehicleOrderPlanType = Object.freeze({
	__proto__: Enum,
	周度计划: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '周度计划',
            ['en-US']: 'none660'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '移库计划',
            ['en-US']: 'none661'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中转库冲销计划',
            ['en-US']: 'none662'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '小品种计划',
            ['en-US']: 'none663'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大客户计划',
            ['en-US']: 'none664'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大客户增补计划',
            ['en-US']: 'none665'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '备库计划',
            ['en-US']: 'none666'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商月度计划',
            ['en-US']: 'none667'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '建储计划',
            ['en-US']: 'none668'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '本部月度计划',
            ['en-US']: 'none669'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大客户备库计划',
            ['en-US']: 'none670'
        }),
	}),
	移库计划: 2,
	中转库冲销计划: 3,
	小品种计划: 4,
	大客户计划: 5,
	大客户增补计划: 6,
	备库计划: 7,
	经销商月度计划: 8,
	建储计划: 9,
	本部月度计划: 10,
	大客户备库计划: 11,
});
export const DcsPlanModificationRuleType = Object.freeze({
	__proto__: Enum,
	车型: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '车型',
            ['en-US']: 'none671'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '型号',
            ['en-US']: 'none672'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '物料',
            ['en-US']: 'none673'
        }),
	}),
	型号: 2,
	物料: 3,
});
export const DcsMonthlyPlanType = Object.freeze({
	__proto__: Enum,
	本部: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '本部',
            ['en-US']: 'none674'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商',
            ['en-US']: 'none675'
        }),
	}),
	经销商: 2,
});
export const DcsVehPifaPriceDiscLevelType = Object.freeze({
	__proto__: Enum,
	产品折扣: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '产品折扣',
            ['en-US']: 'none676'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商折扣',
            ['en-US']: 'none677'
        }),
	}),
	经销商折扣: 2,
});
export const DcsTaskAssignmentCustomerComplain = Object.freeze({
	__proto__: Enum,
	客户主诉: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '客户主诉',
            ['en-US']: 'none678'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '客户要求',
            ['en-US']: 'none679'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '此前处理情况',
            ['en-US']: 'none680'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '客服意见',
            ['en-US']: 'none681'
        }),
	}),
	客户要求: 2,
	此前处理情况: 3,
	客服意见: 4,
});
export const DcsSalesLeadLeadSource = Object.freeze({
	__proto__: Enum,
	厂端下发: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '厂端下发',
            ['en-US']: 'none687'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '易车网',
            ['en-US']: 'none688'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '汽车之家',
            ['en-US']: 'none689'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none690'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '终端录入',
            ['en-US']: 'none691'
        }),
	}),
	易车网: 2,
	汽车之家: 3,
	其他: 4,
	终端录入: 5,
});
export const DcsSalesLeadLeadType = Object.freeze({
	__proto__: Enum,
	订单线索: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '订单线索',
            ['en-US']: 'none692'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '400电话',
            ['en-US']: 'none693'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '置换车',
            ['en-US']: 'none694'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '试乘试驾',
            ['en-US']: 'none695'
        }),
	}),
	400电话: 2,
	置换车: 3,
	试乘试驾: 4,
});
export const DcsVehicleCarrierShippingMethod = Object.freeze({
	__proto__: Enum,
	公路: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公路',
            ['en-US']: 'none696'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '水路',
            ['en-US']: 'none697'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '铁路',
            ['en-US']: 'none698'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '自提',
            ['en-US']: 'none699'
        }),
	}),
	水路: 2,
	铁路: 3,
	自提: 4,
});
export const DcsVehicleTransportDrayDrayStatus = Object.freeze({
	__proto__: Enum,
	空闲: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '空闲',
            ['en-US']: 'none700'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '维修',
            ['en-US']: 'none701'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '在运',
            ['en-US']: 'none702'
        }),
	}),
	维修: 2,
	在运: 3,
});
export const DcsVehicleTransportDrayProperty = Object.freeze({
	__proto__: Enum,
	自有: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '自有',
            ['en-US']: 'none703'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '外协',
            ['en-US']: 'none704'
        }),
	}),
	外协: 2,
});
export const DcsVehicleTransportDrayModel = Object.freeze({
	__proto__: Enum,
	上双下单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '上双下单',
            ['en-US']: 'none705'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '双层双排',
            ['en-US']: 'none706'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '单层单排',
            ['en-US']: 'none707'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '双层单排',
            ['en-US']: 'none708'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '地跑',
            ['en-US']: 'none709'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '背驼',
            ['en-US']: 'none710'
        }),
	}),
	双层双排: 2,
	单层单排: 3,
	双层单排: 4,
	地跑: 5,
	背驼: 6,
});
export const DcsDriverInfoProperty = Object.freeze({
	__proto__: Enum,
	主驾驶: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '主驾驶',
            ['en-US']: 'none711'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '副驾驶',
            ['en-US']: 'none712'
        }),
	}),
	副驾驶: 2,
});
export const DcsVehicleCarrierAreaStockVehicleStatus = Object.freeze({
	__proto__: Enum,
	正常: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '正常',
            ['en-US']: 'none713'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '质损',
            ['en-US']: 'none714'
        }),
	}),
	质损: 2,
});
export const DcsVehicleCarrierAreaStockStatus = Object.freeze({
	__proto__: Enum,
	待发运: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待发运',
            ['en-US']: 'none715'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已发运',
            ['en-US']: 'none716'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '送修出库',
            ['en-US']: 'none717'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待返库',
            ['en-US']: 'none718'
        }),
	}),
	已发运: 2,
	送修出库: 3,
	待返库: 4,
});
export const DcsVehicleCarrierAreaStockLockBillType = Object.freeze({
	__proto__: Enum,
	整车发运单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车发运单',
            ['en-US']: 'none719'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车送修单',
            ['en-US']: 'none720'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '换车申请单',
            ['en-US']: 'none721'
        }),
	}),
	整车送修单: 2,
	换车申请单: 3,
});
export const DcsVehicleCarrierAreaStockSourceType = Object.freeze({
	__proto__: Enum,
	整车发车审批单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车发车审批单',
            ['en-US']: 'none722'
        }),
	}),
});
export const DcsCustomerReceivingAddressSourceType = Object.freeze({
	__proto__: Enum,
	系统导入: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '系统导入',
            ['en-US']: 'none727'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '手工维护',
            ['en-US']: 'none728'
        }),
	}),
	手工维护: 2,
});
export const DcsTransportAccidentStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none729'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生效',
            ['en-US']: 'none730'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none731'
        }),
	}),
	生效: 2,
	作废: 99,
});
export const DcsVehicleDamageDamageSubmitter = Object.freeze({
	__proto__: Enum,
	仓库: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '仓库',
            ['en-US']: 'none732'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '承运商',
            ['en-US']: 'none733'
        }),
	}),
	承运商: 2,
});
export const DcsVehicleDamageDamagePart = Object.freeze({
	__proto__: Enum,
	在线检查: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '在线检查',
            ['en-US']: 'none734'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '入库检查',
            ['en-US']: 'none735'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '库间维护',
            ['en-US']: 'none736'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '出库检查',
            ['en-US']: 'none737'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '发车检查',
            ['en-US']: 'none738'
        }),
	}),
	入库检查: 2,
	库间维护: 3,
	出库检查: 4,
	发车检查: 5,
});
export const DcsVehicleRepairSendStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none739'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生效',
            ['en-US']: 'none740'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '部分出库',
            ['en-US']: 'none741'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '全部出库',
            ['en-US']: 'none742'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '部分入库',
            ['en-US']: 'none743'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '全部入库',
            ['en-US']: 'none744'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none745'
        }),
	}),
	生效: 2,
	部分出库: 3,
	全部出库: 4,
	部分入库: 5,
	全部入库: 6,
	作废: 99,
});
export const DcsVehicleRepairSendType = Object.freeze({
	__proto__: Enum,
	生产线返工: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生产线返工',
            ['en-US']: 'none746'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整备中心整备',
            ['en-US']: 'none747'
        }),
	}),
	整备中心整备: 2,
});
export const DcsVehicleRepairSendDetailOriginalLockBillType = Object.freeze({
	__proto__: Enum,
	整车出库计划单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车出库计划单',
            ['en-US']: 'none748'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '同城调拨单',
            ['en-US']: 'none749'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '特殊出库申请单',
            ['en-US']: 'none750'
        }),
	}),
	同城调拨单: 2,
	特殊出库申请单: 3,
});
export const DcsVehicleRepairSendDetailStatus = Object.freeze({
	__proto__: Enum,
	待出库: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待出库',
            ['en-US']: 'none751'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已出库',
            ['en-US']: 'none752'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待入库',
            ['en-US']: 'none753'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已入库',
            ['en-US']: 'none754'
        }),
	}),
	已出库: 2,
	待入库: 3,
	已入库: 4,
});
export const DcsVehicleMaintainTaskType = Object.freeze({
	__proto__: Enum,
	电瓶拆线: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '电瓶拆线',
            ['en-US']: 'none757'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一月检查',
            ['en-US']: 'none758'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '三月检查',
            ['en-US']: 'none759'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '六月检查',
            ['en-US']: 'none760'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '十二月检查',
            ['en-US']: 'none761'
        }),
	}),
	一月检查: 2,
	三月检查: 3,
	六月检查: 4,
	十二月检查: 5,
});
export const DcsCertificateRecordStatus = Object.freeze({
	__proto__: Enum,
	在库中: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '在库中',
            ['en-US']: 'none762'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已出库',
            ['en-US']: 'none763'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待扫描',
            ['en-US']: 'none764'
        }),
	}),
	已出库: 2,
	待扫描: 3,
});
export const DcsVehicleShipplanApprovalCertificateDeliveryMethod = Object.freeze({
	__proto__: Enum,
	随车发放: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '随车发放',
            ['en-US']: 'none765'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '邮寄金融公司驻点员',
            ['en-US']: 'none766'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '三方银票银行自取',
            ['en-US']: 'none767'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '邮寄经销商',
            ['en-US']: 'none768'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '不发放',
            ['en-US']: 'none769'
        }),
	}),
	邮寄金融公司驻点员: 2,
	三方银票银行自取: 3,
	邮寄经销商: 4,
	不发放: 5,
});
export const DcsCertificateMailingInfoStatus = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none770'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '扫描完成',
            ['en-US']: 'none771'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none772'
        }),
	}),
	扫描完成: 2,
	作废: 99,
});
export const DcsInVehicleItemInfoRule = Object.freeze({
	__proto__: Enum,
	VIN: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'VIN',
            ['en-US']: 'none773'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生产批次号',
            ['en-US']: 'none774'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '物料号',
            ['en-US']: 'none775'
        }),
	}),
	生产批次号: 2,
	物料号: 3,
});
export const DcsCommercialVehicleDamageType = Object.freeze({
	__proto__: Enum,
	商品车运输质损单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '商品车运输质损单',
            ['en-US']: 'none776'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '商品车售前质量反馈单',
            ['en-US']: 'none777'
        }),
	}),
	商品车售前质量反馈单: 2,
});
export const DcsVehicleInventoryStatus = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none778'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '完成',
            ['en-US']: 'none779'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none780'
        }),
	}),
	完成: 2,
	作废: 99,
});
export const DcsVehicleInventoryType = Object.freeze({
	__proto__: Enum,
	日常盘点: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '日常盘点',
            ['en-US']: 'none781'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公司级盘点',
            ['en-US']: 'none782'
        }),
	}),
	公司级盘点: 2,
});
export const DcsVehicleMaintainTaskStatus = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none783'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '开始执行',
            ['en-US']: 'none784'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '执行完毕',
            ['en-US']: 'none785'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none786'
        }),
	}),
	开始执行: 2,
	执行完毕: 3,
	作废: 99,
});
export const DcsVehSpecialOutboundAppType = Object.freeze({
	__proto__: Enum,
	商品车捐赠: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '商品车捐赠',
            ['en-US']: 'none797'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '返回生产',
            ['en-US']: 'none798'
        }),
	}),
	返回生产: 2,
});
export const DcsVehicleTransportBillStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none799'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驳运完成',
            ['en-US']: 'none800'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废 ',
            ['en-US']: 'none801'
        }),
	}),
	驳运完成: 2,
	作废 : 99,
});
export const DcsVehicleOutboundPlanApplicant = Object.freeze({
	__proto__: Enum,
	运输科: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '运输科',
            ['en-US']: 'none802'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '承运商',
            ['en-US']: 'none803'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '仓储科',
            ['en-US']: 'none804'
        }),
	}),
	承运商: 2,
	仓储科: 3,
});
export const DcsVehicleOutboundPlanStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none805'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未拣配',
            ['en-US']: 'none806'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已拣配',
            ['en-US']: 'none807'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '备货完成',
            ['en-US']: 'none808'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '部分出库',
            ['en-US']: 'none809'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '全部出库',
            ['en-US']: 'none810'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none811'
        }),
	}),
	未拣配: 2,
	已拣配: 3,
	备货完成: 4,
	部分出库: 5,
	全部出库: 6,
	作废: 99,
});
export const DcsVehicleOutboundPlanOutboundType = Object.freeze({
	__proto__: Enum,
	销售出库: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售出库',
            ['en-US']: 'none812'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '异地调拨出库',
            ['en-US']: 'none813'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '寄售出库',
            ['en-US']: 'none814'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '同城调拨出库',
            ['en-US']: 'none815'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '送修出库',
            ['en-US']: 'none816'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '商品车捐赠出库',
            ['en-US']: 'none817'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '返回生产',
            ['en-US']: 'none818'
        }),
	}),
	异地调拨出库: 2,
	寄售出库: 3,
	同城调拨出库: 11,
	送修出库: 12,
	商品车捐赠出库: 13,
	返回生产: 14,
});
export const DcsVehicleOutboundPlanSourceType = Object.freeze({
	__proto__: Enum,
	交货单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '交货单',
            ['en-US']: 'none819'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车送修单',
            ['en-US']: 'none820'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '特殊出库申请单',
            ['en-US']: 'none821'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '同城调拨单',
            ['en-US']: 'none822'
        }),
	}),
	整车送修单: 2,
	特殊出库申请单: 3,
	同城调拨单: 4,
});
export const DcsVehicleOutboundPlanDetailStatus = Object.freeze({
	__proto__: Enum,
	待拣配: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待拣配',
            ['en-US']: 'none823'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已拣配',
            ['en-US']: 'none824'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已备货',
            ['en-US']: 'none825'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已出库',
            ['en-US']: 'none826'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已取消',
            ['en-US']: 'none827'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废 ',
            ['en-US']: 'none828'
        }),
	}),
	已拣配: 2,
	已备货: 3,
	已出库: 4,
	已取消: 5,
	作废 : 99,
});
export const DcsVehicleInboundPlanStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none829'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none830'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '部分入库',
            ['en-US']: 'none831'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '全部入库',
            ['en-US']: 'none832'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废 ',
            ['en-US']: 'none833'
        }),
	}),
	有效: 2,
	部分入库: 3,
	全部入库: 4,
	作废 : 99,
});
export const DcsVehicleInboundPlanInboundType = Object.freeze({
	__proto__: Enum,
	下线入库: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '下线入库',
            ['en-US']: 'none834'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '同城调拨入库',
            ['en-US']: 'none835'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '退货入库',
            ['en-US']: 'none836'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '送修入库',
            ['en-US']: 'none837'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '换车入库',
            ['en-US']: 'none838'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '降级车入库',
            ['en-US']: 'none839'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '异地调拨入库',
            ['en-US']: 'none840'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '取消交货入库',
            ['en-US']: 'none841'
        }),
	}),
	同城调拨入库: 2,
	退货入库: 3,
	送修入库: 4,
	换车入库: 5,
	降级车入库: 11,
	异地调拨入库: 12,
	取消交货入库: 13,
});
export const DcsVehicleInboundPlanSourceType = Object.freeze({
	__proto__: Enum,
	整车退货单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车退货单',
            ['en-US']: 'none842'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '同城调拨单',
            ['en-US']: 'none843'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车送修单',
            ['en-US']: 'none844'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车驳运单',
            ['en-US']: 'none845'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '换车申请单',
            ['en-US']: 'none846'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车发运单',
            ['en-US']: 'none847'
        }),
	}),
	同城调拨单: 2,
	整车送修单: 3,
	整车驳运单: 4,
	换车申请单: 5,
	整车发运单: 6,
});
export const DcsVehicleInboundPlanDetailStatus = Object.freeze({
	__proto__: Enum,
	未入库: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未入库',
            ['en-US']: 'none848'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已入库',
            ['en-US']: 'none849'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none850'
        }),
	}),
	已入库: 2,
	作废: 99,
});
export const DcsVehicleShippingTrackRecordStatus = Object.freeze({
	__proto__: Enum,
	待发运: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待发运',
            ['en-US']: 'none851'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已发运',
            ['en-US']: 'none852'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已接车',
            ['en-US']: 'none853'
        }),
	}),
	已发运: 2,
	已接车: 3,
});
export const DcsVehicleWarehouseBelongsTo = Object.freeze({
	__proto__: Enum,
	物流公司: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '物流公司',
            ['en-US']: 'none854'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商',
            ['en-US']: 'none855'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '承运商',
            ['en-US']: 'none856'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '改装厂',
            ['en-US']: 'none857'
        }),
	}),
	经销商: 2,
	承运商: 3,
	改装厂: 4,
});
export const DcsVehicleWarehouseAreaType = Object.freeze({
	__proto__: Enum,
	库区: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '库区',
            ['en-US']: 'none858'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待发区',
            ['en-US']: 'none859'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '质损区',
            ['en-US']: 'none860'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '滚装区',
            ['en-US']: 'none861'
        }),
	}),
	待发区: 2,
	质损区: 3,
	滚装区: 4,
});
export const DcsVehicleWarehouseStructureCategory = Object.freeze({
	__proto__: Enum,
	仓库: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '仓库',
            ['en-US']: 'none862'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '库区',
            ['en-US']: 'none863'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '库道',
            ['en-US']: 'none864'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '库位',
            ['en-US']: 'none865'
        }),
	}),
	库区: 2,
	库道: 3,
	库位: 4,
});
export const DcsVehicleWarehouseBinInUseStatus = Object.freeze({
	__proto__: Enum,
	空闲: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '空闲',
            ['en-US']: 'none866'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '占用',
            ['en-US']: 'none867'
        }),
	}),
	占用: 2,
});
export const DcsVehicleWarehouseStatus = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none868'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '停用',
            ['en-US']: 'none869'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none870'
        }),
	}),
	停用: 2,
	作废: 99,
});
export const DcsVehicleInformationPDIStatus = Object.freeze({
	__proto__: Enum,
	合格: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '合格',
            ['en-US']: 'none871'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '不合格',
            ['en-US']: 'none872'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未检查',
            ['en-US']: 'none873'
        }),
	}),
	不合格: 2,
	未检查: 3,
});
export const DcsInboundWarehouseAllocationRule = Object.freeze({
	__proto__: Enum,
	销售车型: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售车型',
            ['en-US']: 'none874'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '物料号',
            ['en-US']: 'none875'
        }),
	}),
	物料号: 2,
});
export const DcsVehicleStockInventoryStatus = Object.freeze({
	__proto__: Enum,
	在库中: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '在库中',
            ['en-US']: 'none878'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已出库',
            ['en-US']: 'none879'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '调拨在途',
            ['en-US']: 'none880'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '送修出库',
            ['en-US']: 'none881'
        }),
	}),
	已出库: 2,
	调拨在途: 3,
	送修出库: 4,
});
export const DcsVehicleStockVehicleStatus = Object.freeze({
	__proto__: Enum,
	正常: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '正常',
            ['en-US']: 'none882'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '质损',
            ['en-US']: 'none883'
        }),
	}),
	质损: 2,
});
export const DcsVehicleStockLockBillType = Object.freeze({
	__proto__: Enum,
	整车出库计划单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车出库计划单',
            ['en-US']: 'none884'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车送修单',
            ['en-US']: 'none885'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '预分车',
            ['en-US']: 'none886'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '特殊出库申请单',
            ['en-US']: 'none887'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '同城调拨单',
            ['en-US']: 'none888'
        }),
	}),
	整车送修单: 2,
	预分车: 3,
	特殊出库申请单: 4,
	同城调拨单: 5,
});
export const DcsVehicleShipplanApprovalSourceType = Object.freeze({
	__proto__: Enum,
	正常订单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '正常订单',
            ['en-US']: 'none889'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '调拨单',
            ['en-US']: 'none890'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '寄售订单',
            ['en-US']: 'none891'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '转售订单',
            ['en-US']: 'none892'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '寄售冲账订单',
            ['en-US']: 'none893'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '特殊出库申请单',
            ['en-US']: 'none894'
        }),
	}),
	调拨单: 2,
	寄售订单: 3,
	转售订单: 4,
	寄售冲账订单: 5,
	特殊出库申请单: 6,
});
export const DcsDealerInboundOutboundPlanStatus = Object.freeze({
	__proto__: Enum,
	作废: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none895'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新增',
            ['en-US']: 'none896'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生效',
            ['en-US']: 'none897'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '部分完成',
            ['en-US']: 'none898'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '完成',
            ['en-US']: 'none899'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '强制完成',
            ['en-US']: 'none900'
        }),
	}),
	新增: 1,
	生效: 2,
	部分完成: 3,
	完成: 4,
	强制完成: 5,
});
export const DcsDealerInboundOutboundPlanDetailStatus = Object.freeze({
	__proto__: Enum,
	未完成: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未完成',
            ['en-US']: 'none901'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '完成',
            ['en-US']: 'none902'
        }),
	}),
	完成: 1,
});
export const DcsDealerInboundPlanWarehouseType = Object.freeze({
	__proto__: Enum,
	采购入库: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '采购入库',
            ['en-US']: 'none903'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '退货入库',
            ['en-US']: 'none904'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '调拨入库',
            ['en-US']: 'none905'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商买卖入库',
            ['en-US']: 'none906'
        }),
	}),
	退货入库: 1,
	调拨入库: 2,
	经销商买卖入库: 3,
});
export const DcsDealerOutboundPlanDeliveryType = Object.freeze({
	__proto__: Enum,
	采购退货出库: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '采购退货出库',
            ['en-US']: 'none907'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '零售出库',
            ['en-US']: 'none908'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '调拨出库',
            ['en-US']: 'none909'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商买卖出库',
            ['en-US']: 'none910'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '批售出库',
            ['en-US']: 'none911'
        }),
	}),
	零售出库: 1,
	调拨出库: 2,
	经销商买卖出库: 3,
	批售出库: 4,
});
export const DcsDealerOutboundPlanCustomerType = Object.freeze({
	__proto__: Enum,
	部门: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '部门',
            ['en-US']: 'none912'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商',
            ['en-US']: 'none913'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '仓库',
            ['en-US']: 'none914'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '供应商',
            ['en-US']: 'none915'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '客户',
            ['en-US']: 'none916'
        }),
	}),
	经销商: 1,
	仓库: 2,
	供应商: 3,
	客户: 4,
});
export const DcsVehicleAllocationRuleType = Object.freeze({
	__proto__: Enum,
	销售车型: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售车型',
            ['en-US']: 'none917'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '运输路线',
            ['en-US']: 'none918'
        }),
	}),
	运输路线: 2,
});
export const DcsDealerTransferApplicationTransferCapitalType = Object.freeze({
	__proto__: Enum,
	自有资金: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '自有资金',
            ['en-US']: 'none919'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '三方银票',
            ['en-US']: 'none920'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经融贷款',
            ['en-US']: 'none921'
        }),
	}),
	三方银票: 2,
	经融贷款: 3,
});
export const DcsKeyAccountPurchaseType = Object.freeze({
	__proto__: Enum,
	政府: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '政府',
            ['en-US']: 'none922'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '军警',
            ['en-US']: 'none923'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '出租',
            ['en-US']: 'none924'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '租赁',
            ['en-US']: 'none925'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驾校',
            ['en-US']: 'none926'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '集团',
            ['en-US']: 'none927'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '集团车改',
            ['en-US']: 'none928'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '集团奖励',
            ['en-US']: 'none929'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none930'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '直销',
            ['en-US']: 'none931'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中直',
            ['en-US']: 'none932'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '省直',
            ['en-US']: 'none933'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '行业',
            ['en-US']: 'none934'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '黑出租',
            ['en-US']: 'none935'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '零售',
            ['en-US']: 'none936'
        }),
	}),
	军警: 2,
	出租: 3,
	租赁: 4,
	驾校: 5,
	集团: 6,
	集团车改: 7,
	集团奖励: 8,
	其他: 9,
	直销: 10,
	中直: 11,
	省直: 12,
	行业: 13,
	黑出租: 14,
	零售: 15,
});
export const DcsKeyAccountStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none937'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已跟进',
            ['en-US']: 'none939'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已成交',
            ['en-US']: 'none940'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '战败',
            ['en-US']: 'none941'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none938'
        }),
	}),
	作废: 99,
	已跟进: 2,
	已成交: 3,
	战败: 4,
});
export const DcsKAProjectWarrantAppStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none942'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提交',
            ['en-US']: 'none943'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '初审通过',
            ['en-US']: 'none944'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '初审不通过',
            ['en-US']: 'none945'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '项目审核通过',
            ['en-US']: 'none946'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '项目审核不通过',
            ['en-US']: 'none947'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '复审通过',
            ['en-US']: 'none948'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '复审不通过',
            ['en-US']: 'none949'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '终审通过',
            ['en-US']: 'none950'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none951'
        }),
	}),
	提交: 2,
	初审通过: 3,
	初审不通过: 4,
	项目审核通过: 5,
	项目审核不通过: 6,
	复审通过: 7,
	复审不通过: 8,
	终审通过: 9,
	作废: 99,
});
export const DcsKeyAccountProjectVerificationMethod = Object.freeze({
	__proto__: Enum,
	走访客户: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '走访客户',
            ['en-US']: 'none952'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '走访经销商',
            ['en-US']: 'none953'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '电话核实',
            ['en-US']: 'none954'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '主观属实项目',
            ['en-US']: 'none955'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '客观属实项目',
            ['en-US']: 'none956'
        }),
	}),
	走访经销商: 2,
	电话核实: 3,
	主观属实项目: 4,
	客观属实项目: 5,
});
export const DcsKeyAccountProjectRebateMaterialSuggestion = Object.freeze({
	__proto__: Enum,
	发票复印件: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '发票复印件',
            ['en-US']: 'none957'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '购销合同复印件',
            ['en-US']: 'none958'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驾驶证复印件',
            ['en-US']: 'none959'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '营运车复印件',
            ['en-US']: 'none960'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '第三方银行付款凭证（集团采购10台及以上）',
            ['en-US']: 'none961'
        }),
	}),
	购销合同复印件: 2,
	驾驶证复印件: 3,
	营运车复印件: 4,
	第三方银行付款凭证（集团采购10台及以上）: 5,
});
export const DcsKeyAccountProjectClosureStatus = Object.freeze({
	__proto__: Enum,
	成交: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '成交',
            ['en-US']: 'none962'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '流失',
            ['en-US']: 'none963'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '虚假',
            ['en-US']: 'none964'
        }),
	}),
	流失: 2,
	虚假: 3,
});
export const DcsKeyAccountProjectStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none965'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提交',
            ['en-US']: 'none966'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '受理审核通过',
            ['en-US']: 'none967'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '受理审核不通过',
            ['en-US']: 'none968'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核报批通过',
            ['en-US']: 'none969'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核报批不通过',
            ['en-US']: 'none970'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '终审通过',
            ['en-US']: 'none971'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '终审不通过',
            ['en-US']: 'none972'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none973'
        }),
	}),
	提交: 2,
	受理审核通过: 3,
	受理审核不通过: 4,
	审核报批通过: 5,
	审核报批不通过: 6,
	终审通过: 7,
	终审不通过: 8,
	作废: 99,
});
export const DcsKeyAccountContractType = Object.freeze({
	__proto__: Enum,
	大客户: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大客户',
            ['en-US']: 'none974'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '直销',
            ['en-US']: 'none975'
        }),
	}),
	直销: 2,
});
export const DcsKeyAccountContractShippingMethod = Object.freeze({
	__proto__: Enum,
	以甲方物流方式决定: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '以甲方物流方式决定',
            ['en-US']: 'none976'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '自提',
            ['en-US']: 'none977'
        }),
	}),
	自提: 2,
});
export const DcsKeyAccountContractStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none978'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商确认',
            ['en-US']: 'none979'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '财务审核',
            ['en-US']: 'none980'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none981'
        }),
	}),
	经销商确认: 2,
	财务审核: 3,
	作废: 99,
});
export const DcsDegradedVehicleContractType = Object.freeze({
	__proto__: Enum,
	拍卖: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '拍卖',
            ['en-US']: 'none982'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '专项报告购车',
            ['en-US']: 'none983'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商购车',
            ['en-US']: 'none984'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '领导干部购车',
            ['en-US']: 'none985'
        }),
	}),
	专项报告购车: 2,
	经销商购车: 3,
	领导干部购车: 4,
});
export const DcsDegradedVehicleContractStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none986'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none987'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '财务部分确认',
            ['en-US']: 'none988'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '财务确认',
            ['en-US']: 'none989'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none990'
        }),
	}),
	有效: 2,
	财务部分确认: 3,
	财务确认: 4,
	作废: 99,
});
export const DcsDegradedVehicleContractDetailStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none991'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '确认',
            ['en-US']: 'none992'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none993'
        }),
	}),
	确认: 2,
	作废: 99,
});
export const DcsVehicleRebateAppStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none994'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核通过',
            ['en-US']: 'none995'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核不通过',
            ['en-US']: 'none996'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已确认',
            ['en-US']: 'none997'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none998'
        }),
	}),
	审核通过: 2,
	审核不通过: 3,
	已确认: 4,
	作废: 99,
});
export const DcsCustomerChangeAppStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none999'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提交',
            ['en-US']: 'none1000'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核',
            ['en-US']: 'none1001'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驳回',
            ['en-US']: 'none1002'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1003'
        }),
	}),
	提交: 2,
	审核: 3,
	驳回: 4,
	作废: 99,
});
export const DcsCustomerReceivingAddressType = Object.freeze({
	__proto__: Enum,
	经销商: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商',
            ['en-US']: 'none1004'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车仓库',
            ['en-US']: 'none1005'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '配件仓库',
            ['en-US']: 'none1006'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '旧件仓库',
            ['en-US']: 'none1007'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '承运商场地',
            ['en-US']: 'none1008'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '客户',
            ['en-US']: 'none1009'
        }),
	}),
	整车仓库: 2,
	配件仓库: 3,
	旧件仓库: 4,
	承运商场地: 5,
	客户: 6,
});
export const DcsTransportRouteShippingMethod = Object.freeze({
	__proto__: Enum,
	公路: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公路',
            ['en-US']: 'none1010'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '水路',
            ['en-US']: 'none1011'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '铁路',
            ['en-US']: 'none1012'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '联运',
            ['en-US']: 'none1013'
        }),
	}),
	水路: 2,
	铁路: 3,
	联运: 4,
});
export const DcsVehiclePreAllocationRefUrgentGrade = Object.freeze({
	__proto__: Enum,
	非紧急: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '非紧急',
            ['en-US']: 'none1014'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '紧急',
            ['en-US']: 'none1015'
        }),
	}),
	紧急: 2,
});
export const DcsVehiclePreAllocationRefStatusQR = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none1016'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已分配资源',
            ['en-US']: 'none1017'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已分配资金',
            ['en-US']: 'none1018'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已上传',
            ['en-US']: 'none1019'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '订单执行成功',
            ['en-US']: 'none1020'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '订单执行失败',
            ['en-US']: 'none1021'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已扣款',
            ['en-US']: 'none1022'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '预分车取消申请',
            ['en-US']: 'none1023'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1024'
        }),
	}),
	已分配资源: 2,
	已分配资金: 3,
	已上传: 4,
	订单执行成功: 5,
	订单执行失败: 6,
	已扣款: 7,
	预分车取消申请: 8,
	作废: 99,
});
export const DcsVehicleShipplanApprovalFundsType = Object.freeze({
	__proto__: Enum,
	自有资金: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '自有资金',
            ['en-US']: 'none1025'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '三方银票',
            ['en-US']: 'none1026'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '金融贷款',
            ['en-US']: 'none1027'
        }),
	}),
	三方银票: 2,
	金融贷款: 3,
});
export const DcsVehicleShipplanApprovalCustomerType = Object.freeze({
	__proto__: Enum,
	经销商: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商',
            ['en-US']: 'none1028'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '客户',
            ['en-US']: 'none1029'
        }),
	}),
	客户: 2,
});
export const DcsVehicleShippingDetailStatus = Object.freeze({
	__proto__: Enum,
	未发运: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未发运',
            ['en-US']: 'none1030'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已发运',
            ['en-US']: 'none1031'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1032'
        }),
	}),
	已发运: 2,
	作废: 99,
});
export const DcsVehicleOrderPlanDetailStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none1033'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已冲账',
            ['en-US']: 'none1034'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '完成',
            ['en-US']: 'none1035'
        }),
	}),
	已冲账: 2,
	完成: 3,
});
export const DcsVehicleOrderPlanDetailIntention = Object.freeze({
	__proto__: Enum,
	客户订单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '客户订单',
            ['en-US']: 'none1036'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '促销活动',
            ['en-US']: 'none1037'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '紧急订单',
            ['en-US']: 'none1038'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '普通订单',
            ['en-US']: 'none1039'
        }),
	}),
	促销活动: 2,
	紧急订单: 3,
	普通订单: 4,
});
export const DcsFileInformationType = Object.freeze({
	__proto__: Enum,
	往来文件: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '往来文件',
            ['en-US']: 'none1040'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '日常问题',
            ['en-US']: 'none1041'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '满意度问题',
            ['en-US']: 'none1042'
        }),
	}),
	日常问题: 2,
	满意度问题: 3,
});
export const DcsDistributionGroupDetailOrganizationType = Object.freeze({
	__proto__: Enum,
	组织: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '组织',
            ['en-US']: 'none1043'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '角色',
            ['en-US']: 'none1044'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '所有人员',
            ['en-US']: 'none1045'
        }),
	}),
	角色: 2,
	所有人员: 3,
});
export const DcsAnnouncementBillDetailOrganizationType = Object.freeze({
	__proto__: Enum,
	组织: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '组织',
            ['en-US']: 'none1046'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '角色',
            ['en-US']: 'none1047'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '通讯组',
            ['en-US']: 'none1048'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '所有人员',
            ['en-US']: 'none1049'
        }),
	}),
	角色: 2,
	通讯组: 3,
	所有人员: 4,
});
export const DcsAnnouncementBillInformationLevel = Object.freeze({
	__proto__: Enum,
	紧急: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '紧急',
            ['en-US']: 'none1050'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '不紧急',
            ['en-US']: 'none1051'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一般',
            ['en-US']: 'none1052'
        }),
	}),
	不紧急: 2,
	一般: 3,
});
export const DcsCancellationAppType = Object.freeze({
	__proto__: Enum,
	网络部创建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '网络部创建',
            ['en-US']: 'none1053'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商创建',
            ['en-US']: 'none1054'
        }),
	}),
	经销商创建: 2,
});
export const DcsDealerSubNetworkType = Object.freeze({
	__proto__: Enum,
	直营店: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '直营店',
            ['en-US']: 'none1055'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '合作二网',
            ['en-US']: 'none1056'
        }),
	}),
	合作二网: 2,
});
export const DcsVehicleProjectInformationPaymentMethod = Object.freeze({
	__proto__: Enum,
	一次性支付: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一次性支付',
            ['en-US']: 'none1057'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '分期支付',
            ['en-US']: 'none1058'
        }),
	}),
	分期支付: 1,
});
export const DcsSubDealerApplicationStatus = Object.freeze({
	__proto__: Enum,
	待审核: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待审核',
            ['en-US']: 'none1059'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none1060'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核不通过',
            ['en-US']: 'none1061'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '停用',
            ['en-US']: 'none1062'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1063'
        }),
	}),
	有效: 2,
	审核不通过: 3,
	停用: 4,
	作废: 99,
});
export const DcsTransportPriceStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none1064'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生效',
            ['en-US']: 'none1065'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1066'
        }),
	}),
	生效: 2,
	作废: 99,
});
export const DcsTransportRouteStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none1067'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生效',
            ['en-US']: 'none1068'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1069'
        }),
	}),
	生效: 2,
	作废: 99,
});
export const DcsVehicleProjectInformationLendingPlan = Object.freeze({
	__proto__: Enum,
	1年0利率: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '1年0利率',
            ['en-US']: 'none1070'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '2年低利率',
            ['en-US']: 'none1071'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none1072'
        }),
	}),
	2年低利率: 2,
	其他: 3,
});
export const DcsVehicleProjectInformationIsSpecialSale = Object.freeze({
	__proto__: Enum,
	非特销车: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '非特销车',
            ['en-US']: 'none1073'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '出租',
            ['en-US']: 'none1074'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '二手车',
            ['en-US']: 'none1075'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '钢铁',
            ['en-US']: 'none1076'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公安',
            ['en-US']: 'none1077'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '集团',
            ['en-US']: 'none1078'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驾校',
            ['en-US']: 'none1079'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '教师',
            ['en-US']: 'none1080'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '企业',
            ['en-US']: 'none1081'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '医院',
            ['en-US']: 'none1082'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '政府',
            ['en-US']: 'none1083'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '租赁',
            ['en-US']: 'none1084'
        }),
	}),
	出租: 2,
	二手车: 3,
	钢铁: 4,
	公安: 5,
	集团: 6,
	驾校: 7,
	教师: 8,
	企业: 9,
	医院: 10,
	政府: 11,
	租赁: 12,
});
export const DcsVehicleProjectInformationVehicleProperty = Object.freeze({
	__proto__: Enum,
	三包车: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '三包车',
            ['en-US']: 'none1085'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公务',
            ['en-US']: 'none1086'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '商务车',
            ['en-US']: 'none1087'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '营运用车',
            ['en-US']: 'none1088'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '非保修车',
            ['en-US']: 'none1089'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '特殊保修车',
            ['en-US']: 'none1090'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '家用(非三包车)',
            ['en-US']: 'none1091'
        }),
	}),
	公务: 2,
	商务车: 3,
	营运用车: 4,
	非保修车: 5,
	特殊保修车: 6,
	家用(非三包车): 7,
});
export const DcsVehicleProjectInformationOwningCarYears = Object.freeze({
	__proto__: Enum,
	尚未领证: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '尚未领证',
            ['en-US']: 'none1092'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '1年以内',
            ['en-US']: 'none1093'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '1-3年',
            ['en-US']: 'none1094'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '3-5年',
            ['en-US']: 'none1095'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '5-10年',
            ['en-US']: 'none1096'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '10年以上',
            ['en-US']: 'none1097'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未知',
            ['en-US']: 'none1098'
        }),
	}),
	1年以内: 2,
	1-3年: 3,
	3-5年: 4,
	5-10年: 5,
	10年以上: 6,
	未知: 7,
});
export const DcsVehicleProjectInformationChangeReason = Object.freeze({
	__proto__: Enum,
	收购价高: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '收购价高',
            ['en-US']: 'none1099'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '过户便捷',
            ['en-US']: 'none1100'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '熟人介绍',
            ['en-US']: 'none1101'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '保险到期',
            ['en-US']: 'none1102'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有新车促销',
            ['en-US']: 'none1103'
        }),
	}),
	过户便捷: 2,
	熟人介绍: 3,
	保险到期: 4,
	有新车促销: 5,
});
export const DcsVehicleProjectInformationContractType = Object.freeze({
	__proto__: Enum,
	直销: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '直销',
            ['en-US']: 'none1104'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '租赁',
            ['en-US']: 'none1105'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '集团',
            ['en-US']: 'none1106'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '出租',
            ['en-US']: 'none1107'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '政府',
            ['en-US']: 'none1108'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '零售',
            ['en-US']: 'none1109'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '黑出租',
            ['en-US']: 'none1110'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驾校',
            ['en-US']: 'none1111'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '医生',
            ['en-US']: 'none1112'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '残疾人购车',
            ['en-US']: 'none1113'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '奖励',
            ['en-US']: 'none1114'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '车改',
            ['en-US']: 'none1115'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '教师',
            ['en-US']: 'none1116'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '防护车',
            ['en-US']: 'none1117'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '双燃料零售',
            ['en-US']: 'none1118'
        }),
		16: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '医院',
            ['en-US']: 'none1119'
        }),
		17: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '协议供货',
            ['en-US']: 'none1120'
        }),
	}),
	租赁: 2,
	集团: 3,
	出租: 4,
	政府: 5,
	零售: 6,
	黑出租: 7,
	驾校: 8,
	医生: 9,
	残疾人购车: 10,
	奖励: 11,
	车改: 12,
	教师: 13,
	防护车: 14,
	双燃料零售: 15,
	医院: 16,
	协议供货: 17,
});
export const DcsVehicleProjectInformationLendingChannel = Object.freeze({
	__proto__: Enum,
	金融公司: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '金融公司',
            ['en-US']: 'none1121'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '工行',
            ['en-US']: 'none1122'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '建行',
            ['en-US']: 'none1123'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '农行',
            ['en-US']: 'none1124'
        }),
	}),
	工行: 2,
	建行: 3,
	农行: 4,
});
export const DcsAnnouncementBillAttachmentType = Object.freeze({
	__proto__: Enum,
	点对点上传: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '点对点上传',
            ['en-US']: 'none1125'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '单一上传',
            ['en-US']: 'none1126'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '无需上传附件',
            ['en-US']: 'none1127'
        }),
	}),
	单一上传: 2,
	无需上传附件: 3,
});
export const DcsNeedsMaintainedVehicleWarehouseAge = Object.freeze({
	__proto__: Enum,
	30天: 30,
	properties: Object.freeze({
		30: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '30天',
            ['en-US']: 'none1128'
        }),
		90: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '90天',
            ['en-US']: 'none1129'
        }),
		180: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '180天',
            ['en-US']: 'none1130'
        }),
		360: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '360天',
            ['en-US']: 'none1131'
        }),
	}),
	90天: 90,
	180天: 180,
	360天: 360,
});
export const DcsWarehouseBinArrangeTaskStatus = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none1132'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '完成',
            ['en-US']: 'none1133'
        }),
	}),
	完成: 2,
});
export const DcsVehicleInformationOperationsNature = Object.freeze({
	__proto__: Enum,
	运营: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '运营',
            ['en-US']: 'none1134'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '非运营',
            ['en-US']: 'none1135'
        }),
	}),
	非运营: 2,
});
export const DcsPotentialCustomerPayOutType = Object.freeze({
	__proto__: Enum,
	一次性支付: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一次性支付',
            ['en-US']: 'none1136'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '分期支付',
            ['en-US']: 'none1137'
        }),
	}),
	分期支付: 1,
});
export const DcsPotentialCustomerVisitReportStatus = Object.freeze({
	__proto__: Enum,
	失败: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '失败',
            ['en-US']: 'none1138'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '成功',
            ['en-US']: 'none1139'
        }),
	}),
	成功: 1,
});
export const DcsReturnVisitTaskMode = Object.freeze({
	__proto__: Enum,
	电话: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '电话',
            ['en-US']: 'none1140'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '短信',
            ['en-US']: 'none1141'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '传真',
            ['en-US']: 'none1142'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '邮件',
            ['en-US']: 'none1143'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '拜访',
            ['en-US']: 'none1144'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none1145'
        }),
	}),
	短信: 1,
	传真: 2,
	邮件: 3,
	拜访: 4,
	其他: 5,
});
export const DcsReturnVisitTaskTaskCategory = Object.freeze({
	__proto__: Enum,
	潜客跟进: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '潜客跟进',
            ['en-US']: 'none1146'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '客户维系',
            ['en-US']: 'none1147'
        }),
	}),
	客户维系: 1,
});
export const DcsReturnVisitTaskStatus = Object.freeze({
	__proto__: Enum,
	作废: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1148'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none1149'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '处理中',
            ['en-US']: 'none1150'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '回访完成',
            ['en-US']: 'none1151'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '不再回访',
            ['en-US']: 'none1152'
        }),
	}),
	新建: 1,
	处理中: 2,
	回访完成: 3,
	不再回访: 4,
});
export const DcsReturnVisitTaskLinkBillType = Object.freeze({
	__proto__: Enum,
	零售合同: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '零售合同',
            ['en-US']: 'none1153'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '维修合同',
            ['en-US']: 'none1154'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '保险单',
            ['en-US']: 'none1155'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '技术服务活动',
            ['en-US']: 'none1156'
        }),
	}),
	维修合同: 1,
	保险单: 2,
	技术服务活动: 3,
});
export const DcsPotentialCustomerLevelOfIntent = Object.freeze({
	__proto__: Enum,
	F: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'F',
            ['en-US']: 'none1157'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'FO',
            ['en-US']: 'none1158'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'A',
            ['en-US']: 'none1159'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'B',
            ['en-US']: 'none1160'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'C',
            ['en-US']: 'none1161'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'N',
            ['en-US']: 'none1162'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'S',
            ['en-US']: 'none1163'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'O',
            ['en-US']: 'none1164'
        }),
	}),
	FO: 1,
	A: 2,
	B: 3,
	C: 4,
	N: 5,
	S: 6,
	O: 7,
});
export const DcsPotentialCustomerVisitType = Object.freeze({
	__proto__: Enum,
	客户来访: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '客户来访',
            ['en-US']: 'none1165'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公司提供',
            ['en-US']: 'none1166'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '拜访',
            ['en-US']: 'none1167'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '客户致电',
            ['en-US']: 'none1168'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '来店',
            ['en-US']: 'none1169'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '短信',
            ['en-US']: 'none1170'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '传真',
            ['en-US']: 'none1171'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '邮件',
            ['en-US']: 'none1172'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none1173'
        }),
	}),
	公司提供: 1,
	拜访: 2,
	客户致电: 3,
	来店: 4,
	短信: 5,
	传真: 6,
	邮件: 7,
	其他: 8,
});
export const DcsReturnVisitTaskPotentialCustomerTaskType = Object.freeze({
	__proto__: Enum,
	首次回访: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '首次回访',
            ['en-US']: 'none1174'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '周期性回访',
            ['en-US']: 'none1175'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '售车回访',
            ['en-US']: 'none1176'
        }),
	}),
	周期性回访: 1,
	售车回访: 2,
});
export const DcsReturnVisitTaskRetainedCustomerTaskType = Object.freeze({
	__proto__: Enum,
	普通保养提醒: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '普通保养提醒',
            ['en-US']: 'none1177'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '首保提醒',
            ['en-US']: 'none1178'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '保险提醒',
            ['en-US']: 'none1179'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '年检提醒',
            ['en-US']: 'none1180'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '维修回访',
            ['en-US']: 'none1181'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '节日问候',
            ['en-US']: 'none1182'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '纪念日问候',
            ['en-US']: 'none1183'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '保修到期提醒',
            ['en-US']: 'none1184'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '保险到期提醒',
            ['en-US']: 'none1185'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '流失回访',
            ['en-US']: 'none1186'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '服务活动提醒',
            ['en-US']: 'none1187'
        }),
	}),
	首保提醒: 1,
	保险提醒: 2,
	年检提醒: 3,
	维修回访: 4,
	节日问候: 5,
	纪念日问候: 6,
	保修到期提醒: 7,
	保险到期提醒: 8,
	流失回访: 9,
	服务活动提醒: 10,
});
export const DcsPotentialCustomerStatus = Object.freeze({
	__proto__: Enum,
	作废: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1188'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新增',
            ['en-US']: 'none1189'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已跟进',
            ['en-US']: 'none1190'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已成交',
            ['en-US']: 'none1191'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '战败',
            ['en-US']: 'none1192'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '被合并',
            ['en-US']: 'none1193'
        }),
	}),
	新增: 1,
	已跟进: 2,
	已成交: 3,
	战败: 4,
	被合并: 5,
});
export const DcsPotentialCustomerInfoSource = Object.freeze({
	__proto__: Enum,
	外展: 100,
	properties: Object.freeze({
		100: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '外展',
            ['en-US']: 'none1194'
        }),
		101: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '传统媒体',
            ['en-US']: 'none1197'
        }),
		102: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '垂直化媒体',
            ['en-US']: 'none1201'
        }),
		103: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '网络媒体',
            ['en-US']: 'none1204'
        }),
		104: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其它渠道',
            ['en-US']: 'none1210'
        }),
		100005: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '车展',
            ['en-US']: 'none1195'
        }),
		100006: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '巡展',
            ['en-US']: 'none1196'
        }),
		101005: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新闻/报纸',
            ['en-US']: 'none1198'
        }),
		101006: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '电视',
            ['en-US']: 'none1199'
        }),
		101007: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '电台',
            ['en-US']: 'none1200'
        }),
		102005: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '车商会',
            ['en-US']: 'none1202'
        }),
		102006: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '车易通',
            ['en-US']: 'none1203'
        }),
		103005: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '搜狐网',
            ['en-US']: 'none1205'
        }),
		103006: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新浪网',
            ['en-US']: 'none1206'
        }),
		103007: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '易车网',
            ['en-US']: 'none1207'
        }),
		103008: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '汽车之家',
            ['en-US']: 'none1208'
        }),
		103009: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '太平洋汽车网',
            ['en-US']: 'none1209'
        }),
		104005: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '老客户介绍',
            ['en-US']: 'none1211'
        }),
		104006: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '朋友介绍',
            ['en-US']: 'none1212'
        }),
		104007: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '店头',
            ['en-US']: 'none1213'
        }),
	}),
	车展: 100005,
	巡展: 100006,
	传统媒体: 101,
	新闻/报纸: 101005,
	电视: 101006,
	电台: 101007,
	垂直化媒体: 102,
	车商会: 102005,
	车易通: 102006,
	网络媒体: 103,
	搜狐网: 103005,
	新浪网: 103006,
	易车网: 103007,
	汽车之家: 103008,
	太平洋汽车网: 103009,
	其它渠道: 104,
	老客户介绍: 104005,
	朋友介绍: 104006,
	店头: 104007,
});
export const DcsOrderingVehicleOrderingTime = Object.freeze({
	__proto__: Enum,
	1天内: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '1天内',
            ['en-US']: 'none1214'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '7天内',
            ['en-US']: 'none1215'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '15天内',
            ['en-US']: 'none1216'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '30天内',
            ['en-US']: 'none1217'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '2个月内',
            ['en-US']: 'none1218'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '3个月内',
            ['en-US']: 'none1219'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '6个月内',
            ['en-US']: 'none1220'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '6个月以上',
            ['en-US']: 'none1221'
        }),
	}),
	7天内: 2,
	15天内: 3,
	30天内: 4,
	2个月内: 5,
	3个月内: 6,
	6个月内: 7,
	6个月以上: 8,
});
export const DcsExtendedInfoTemplateCategory = Object.freeze({
	__proto__: Enum,
	保有客户扩展信息: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '保有客户扩展信息',
            ['en-US']: 'none1222'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '车型扩展信息',
            ['en-US']: 'none1223'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '产品扩展信息',
            ['en-US']: 'none1224'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '派工单扩展信息',
            ['en-US']: 'none1225'
        }),
	}),
	车型扩展信息: 1,
	产品扩展信息: 2,
	派工单扩展信息: 3,
});
export const DcsExtendedInfoTemplateDataType = Object.freeze({
	__proto__: Enum,
	分类: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '分类',
            ['en-US']: 'none1226'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '问题',
            ['en-US']: 'none1227'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '选项',
            ['en-US']: 'none1228'
        }),
	}),
	问题: 1,
	选项: 2,
});
export const DcsExtendedInfoTemplateQuestionType = Object.freeze({
	__proto__: Enum,
	输入: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '输入',
            ['en-US']: 'none1229'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '单选',
            ['en-US']: 'none1230'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '多选',
            ['en-US']: 'none1231'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '长文本输入',
            ['en-US']: 'none1232'
        }),
	}),
	单选: 1,
	多选: 2,
	长文本输入: 3,
});
export const DcsVehicleProjectInformationSAPSalesChannel = Object.freeze({
	__proto__: Enum,
	大客户: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大客户',
            ['en-US']: 'none1233'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '国内',
            ['en-US']: 'none1234'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '国际',
            ['en-US']: 'none1235'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '特殊',
            ['en-US']: 'none1236'
        }),
	}),
	国内: 2,
	国际: 3,
	特殊: 4,
});
export const DcsCertificateInventoryDetailResult = Object.freeze({
	__proto__: Enum,
	一致: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一致',
            ['en-US']: 'none1237'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '盘盈',
            ['en-US']: 'none1238'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '盘亏',
            ['en-US']: 'none1239'
        }),
	}),
	盘盈: 2,
	盘亏: 3,
});
export const DcsVehicleFreezeType = Object.freeze({
	__proto__: Enum,
	冻结: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '冻结',
            ['en-US']: 'none1240'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '解冻',
            ['en-US']: 'none1241'
        }),
	}),
	解冻: 2,
});
export const DcsERPVehicleInventoryStatus = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none1242'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已执行',
            ['en-US']: 'none1243'
        }),
	}),
	已执行: 2,
});
export const DcsVLSBaseStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none1244'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生效',
            ['en-US']: 'none1245'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1246'
        }),
	}),
	生效: 2,
	作废: 99,
});
export const DcsVehicleIntraCityTransferStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none1247'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核通过',
            ['en-US']: 'none1248'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核不通过',
            ['en-US']: 'none1249'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '确认通过',
            ['en-US']: 'none1250'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '确认不通过',
            ['en-US']: 'none1251'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1252'
        }),
	}),
	审核通过: 2,
	审核不通过: 3,
	确认通过: 4,
	确认不通过: 5,
	作废: 6,
});
export const DcsCarrierAreaInventoryDetailResult = Object.freeze({
	__proto__: Enum,
	一致: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一致',
            ['en-US']: 'none1253'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '盘盈',
            ['en-US']: 'none1254'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '盘亏',
            ['en-US']: 'none1255'
        }),
	}),
	盘盈: 2,
	盘亏: 3,
});
export const DcsCarrierAreaInventoryStatus = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none1256'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '完成',
            ['en-US']: 'none1257'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1258'
        }),
	}),
	完成: 2,
	作废: 99,
});
export const DcsVehicleContactPersonType = Object.freeze({
	__proto__: Enum,
	车主: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '车主',
            ['en-US']: 'none1259'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '亲友',
            ['en-US']: 'none1260'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '同事 ',
            ['en-US']: 'none1261'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '司机 ',
            ['en-US']: 'none1262'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '随从',
            ['en-US']: 'none1263'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '下属',
            ['en-US']: 'none1264'
        }),
	}),
	亲友: 2,
	同事 : 3,
	司机 : 4,
	随从: 5,
	下属: 6,
});
export const DcsDealerTransferApplicationType = Object.freeze({
	__proto__: Enum,
	经销商内部: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商内部',
            ['en-US']: 'none1265'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商之间',
            ['en-US']: 'none1266'
        }),
	}),
	经销商之间: 2,
});
export const DcsDealerTransferApplicationStatus = Object.freeze({
	__proto__: Enum,
	新增: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新增',
            ['en-US']: 'none1267'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none1268'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核通过',
            ['en-US']: 'none1269'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核不通过',
            ['en-US']: 'none1270'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1271'
        }),
	}),
	有效: 2,
	审核通过: 3,
	审核不通过: 4,
	作废: 99,
});
export const DcsDealerMonthlySalesTargetStatus = Object.freeze({
	__proto__: Enum,
	新增: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新增',
            ['en-US']: 'none1272'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提交',
            ['en-US']: 'none1273'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大区总监审核通过',
            ['en-US']: 'none1274'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大区总监审核不通过',
            ['en-US']: 'none1275'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售支援部审核通过',
            ['en-US']: 'none1276'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售支援部审核不通过',
            ['en-US']: 'none1277'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '分管副总审核通过',
            ['en-US']: 'none1278'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '分管副总审核不通过',
            ['en-US']: 'none1279'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '总经理审核通过',
            ['en-US']: 'none1280'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '总经理审核不通过',
            ['en-US']: 'none1281'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已变更',
            ['en-US']: 'none1282'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '变更提交',
            ['en-US']: 'none1283'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售支援部变更审核通过',
            ['en-US']: 'none1284'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售支援部变更审核不通过',
            ['en-US']: 'none1285'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '分管副总变更审核通过',
            ['en-US']: 'none1286'
        }),
		16: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '分管副总变更审核不通过',
            ['en-US']: 'none1287'
        }),
		17: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '锁定',
            ['en-US']: 'none1288'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1289'
        }),
	}),
	提交: 2,
	大区总监审核通过: 3,
	大区总监审核不通过: 4,
	销售支援部审核通过: 5,
	销售支援部审核不通过: 6,
	分管副总审核通过: 7,
	分管副总审核不通过: 8,
	总经理审核通过: 9,
	总经理审核不通过: 10,
	已变更: 11,
	变更提交: 12,
	销售支援部变更审核通过: 13,
	销售支援部变更审核不通过: 14,
	分管副总变更审核通过: 15,
	分管副总变更审核不通过: 16,
	锁定: 17,
	作废: 99,
});
export const DcsVehicleReturnOrderType = Object.freeze({
	__proto__: Enum,
	销售退货: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售退货',
            ['en-US']: 'none1290'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '转售退货',
            ['en-US']: 'none1291'
        }),
	}),
	转售退货: 2,
});
export const DcsVehicleReturnOrderShippingMethod = Object.freeze({
	__proto__: Enum,
	物流运输: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '物流运输',
            ['en-US']: 'none1292'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '自提',
            ['en-US']: 'none1293'
        }),
	}),
	自提: 2,
});
export const DcsVehicleProjectInformationConsignmentType = Object.freeze({
	__proto__: Enum,
	非寄售: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '非寄售',
            ['en-US']: 'none1294'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '寄售',
            ['en-US']: 'none1295'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '寄售冲账完成',
            ['en-US']: 'none1296'
        }),
	}),
	寄售: 2,
	寄售冲账完成: 3,
});
export const DcsRetailContractStatus = Object.freeze({
	__proto__: Enum,
	作废: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1297'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新增',
            ['en-US']: 'none1298'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驳回',
            ['en-US']: 'none1299'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生效',
            ['en-US']: 'none1300'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已收订金',
            ['en-US']: 'none1301'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已付清',
            ['en-US']: 'none1302'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '发车',
            ['en-US']: 'none1303'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '退订',
            ['en-US']: 'none1304'
        }),
	}),
	新增: 1,
	驳回: 2,
	生效: 3,
	已收订金: 4,
	已付清: 5,
	发车: 6,
	退订: 9,
});
export const DcsQuestionnaireTemplateCategory = Object.freeze({
	__proto__: Enum,
	运营类: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '运营类',
            ['en-US']: 'none1305'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '服务类',
            ['en-US']: 'none1306'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '满意度',
            ['en-US']: 'none1307'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '产品类',
            ['en-US']: 'none1308'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售类',
            ['en-US']: 'none1309'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none1310'
        }),
	}),
	服务类: 1,
	满意度: 2,
	产品类: 3,
	销售类: 4,
	其他: 5,
});
export const DcsQuestionnaireTemplateDataType = Object.freeze({
	__proto__: Enum,
	问卷: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '问卷',
            ['en-US']: 'none1311'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '问题分类',
            ['en-US']: 'none1312'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '问题',
            ['en-US']: 'none1313'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '选项',
            ['en-US']: 'none1314'
        }),
	}),
	问题分类: 1,
	问题: 2,
	选项: 3,
});
export const DcsQuestionnaireTemplateQuestionType = Object.freeze({
	__proto__: Enum,
	扩展题: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '扩展题',
            ['en-US']: 'none1315'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '单选题',
            ['en-US']: 'none1316'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '多选题',
            ['en-US']: 'none1317'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '打分题',
            ['en-US']: 'none1318'
        }),
	}),
	单选题: 1,
	多选题: 2,
	打分题: 3,
});
export const DcsVehicleShippingTrackRecordSourceType = Object.freeze({
	__proto__: Enum,
	整车发车审批单: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车发车审批单',
            ['en-US']: 'none1319'
        }),
	}),
});
export const DcsQuestionnaireStatus = Object.freeze({
	__proto__: Enum,
	待下发: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待下发',
            ['en-US']: 'none1325'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已下发',
            ['en-US']: 'none1326'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已关闭',
            ['en-US']: 'none1327'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1328'
        }),
	}),
	已下发: 1,
	已关闭: 2,
	作废: 99,
});
export const DcsDealerQuestionnaireStatus = Object.freeze({
	__proto__: Enum,
	待下发: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待下发',
            ['en-US']: 'none1329'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '进行中',
            ['en-US']: 'none1330'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已完成',
            ['en-US']: 'none1331'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已结束',
            ['en-US']: 'none1332'
        }),
	}),
	进行中: 1,
	已完成: 2,
	已结束: 3,
});
export const DcsQuestionnaireQuestionTrackStatus = Object.freeze({
	__proto__: Enum,
	待处理: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待处理',
            ['en-US']: 'none1333'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已处理',
            ['en-US']: 'none1334'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '无需处理',
            ['en-US']: 'none1335'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '申请关闭',
            ['en-US']: 'none1336'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已关闭',
            ['en-US']: 'none1337'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1338'
        }),
	}),
	已处理: 1,
	无需处理: 2,
	申请关闭: 3,
	已关闭: 4,
	作废: 99,
});
export const DcsDealerRebateAccoutSourceType = Object.freeze({
	__proto__: Enum,
	订单调整: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '订单调整',
            ['en-US']: 'none1339'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'DCS传输',
            ['en-US']: 'none1340'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '手工调整',
            ['en-US']: 'none1341'
        }),
	}),
	DCS传输: 2,
	手工调整: 3,
});
export const DcsProductStatus = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none1342'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '停用',
            ['en-US']: 'none1343'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废申请',
            ['en-US']: 'none1344'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1345'
        }),
	}),
	停用: 2,
	作废申请: 3,
	作废: 99,
});
export const DcsTransportCostAccountingStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none1346'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一审通过',
            ['en-US']: 'none1347'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一审不通过',
            ['en-US']: 'none1348'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '二审通过',
            ['en-US']: 'none1349'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '二审不通过',
            ['en-US']: 'none1350'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '财务审核通过',
            ['en-US']: 'none1351'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '财务审核不通过',
            ['en-US']: 'none1352'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '财务取消审核',
            ['en-US']: 'none1353'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1354'
        }),
	}),
	一审通过: 2,
	一审不通过: 3,
	二审通过: 4,
	二审不通过: 5,
	财务审核通过: 6,
	财务审核不通过: 7,
	财务取消审核: 8,
	作废: 99,
});
export const DcsRetainedCustomerCustomerLevel = Object.freeze({
	__proto__: Enum,
	1个月内: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '1个月内',
            ['en-US']: 'none1355'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '1-3个月',
            ['en-US']: 'none1356'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '3-6个月',
            ['en-US']: 'none1357'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '6-12个月',
            ['en-US']: 'none1358'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '12个月以上',
            ['en-US']: 'none1359'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未知',
            ['en-US']: 'none1360'
        }),
		100: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '临时客户',
            ['en-US']: 'none1361'
        }),
		101: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '标准客户',
            ['en-US']: 'none1362'
        }),
		102: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '优质-超保进站',
            ['en-US']: 'none1363'
        }),
		103: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '优质-领导干部',
            ['en-US']: 'none1364'
        }),
		104: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '优质-购多台车',
            ['en-US']: 'none1365'
        }),
		105: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '优质-意见领袖',
            ['en-US']: 'none1366'
        }),
		106: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '优质-首批艾7',
            ['en-US']: 'none1367'
        }),
		107: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '尊享卡-艾7',
            ['en-US']: 'none1368'
        }),
		108: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '优质-瑞虎5',
            ['en-US']: 'none1369'
        }),
		109: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '尊享卡-瑞虎5',
            ['en-US']: 'none1370'
        }),
		110: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '优质-瑞虎5',
            ['en-US']: 'none1371'
        }),
	}),
	1-3个月: 2,
	3-6个月: 3,
	6-12个月: 4,
	12个月以上: 5,
	未知: 6,
	临时客户: 100,
	标准客户: 101,
	优质-超保进站: 102,
	优质-领导干部: 103,
	优质-购多台车: 104,
	优质-意见领袖: 105,
	优质-首批艾7: 106,
	尊享卡-艾7: 107,
	优质-瑞虎5: 110,
	尊享卡-瑞虎5: 109,
});
export const DcsVehSpecialOutboundAppSubType = Object.freeze({
	__proto__: Enum,
	培训领用: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '培训领用',
            ['en-US']: 'none1372'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '培训领用冲销',
            ['en-US']: 'none1373'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '质量招回领用',
            ['en-US']: 'none1374'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '质量招回领用冲销',
            ['en-US']: 'none1375'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '工作车辆领用发料',
            ['en-US']: 'none1376'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '工作车辆领用发料冲销',
            ['en-US']: 'none1377'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '技术开发领用',
            ['en-US']: 'none1378'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '技术开发领用冲销',
            ['en-US']: 'none1379'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '职工福利领用',
            ['en-US']: 'none1380'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '职工福利领用冲销',
            ['en-US']: 'none1381'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '售后服务领用-整车',
            ['en-US']: 'none1382'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '售后服务领用冲销-整车',
            ['en-US']: 'none1383'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '捐赠领用',
            ['en-US']: 'none1384'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '捐赠领用冲销',
            ['en-US']: 'none1385'
        }),
	}),
	培训领用冲销: 2,
	质量招回领用: 3,
	质量招回领用冲销: 4,
	工作车辆领用发料: 5,
	工作车辆领用发料冲销: 6,
	技术开发领用: 7,
	技术开发领用冲销: 8,
	职工福利领用: 9,
	职工福利领用冲销: 10,
	售后服务领用-整车: 11,
	售后服务领用冲销-整车: 12,
	捐赠领用: 13,
	捐赠领用冲销: 14,
});
export const DcsRetainedCustomerHobby = Object.freeze({
	__proto__: Enum,
	娱乐类(旅游、摄影、看电视、逛街/购物等）: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '娱乐类(旅游、摄影、看电视、逛街/购物等）',
            ['en-US']: 'none1386'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '研究类(看书/看报、上网浏览新闻、进修/学习等）',
            ['en-US']: 'none1387'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '运动类(打高尔夫、骑单车、打球、游泳、健身、钓鱼）',
            ['en-US']: 'none1388'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '游戏类(上网打游戏、打麻将/打牌）',
            ['en-US']: 'none1389'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '冒险类(爬山、攀岩）',
            ['en-US']: 'none1390'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '收藏类(收藏、集邮）',
            ['en-US']: 'none1391'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '乐器类(听音乐）',
            ['en-US']: 'none1392'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '没什么时间顾及业余爱好',
            ['en-US']: 'none1393'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其它',
            ['en-US']: 'none1394'
        }),
	}),
	研究类(看书/看报、上网浏览新闻、进修/学习等）: 1,
	运动类(打高尔夫、骑单车、打球、游泳、健身、钓鱼）: 2,
	游戏类(上网打游戏、打麻将/打牌）: 3,
	冒险类(爬山、攀岩）: 4,
	收藏类(收藏、集邮）: 5,
	乐器类(听音乐）: 6,
	没什么时间顾及业余爱好: 7,
	其它: 8,
});
export const DcsVehicleShippingDetailOriginalRequirementBillType = Object.freeze({
	__proto__: Enum,
	整车发车审批单: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车发车审批单',
            ['en-US']: 'none1395'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整车退货交货单',
            ['en-US']: 'none1396'
        }),
	}),
	整车退货交货单: 1,
});
export const DcsMappingOwner = Object.freeze({
	__proto__: Enum,
	CRM: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'CRM',
            ['en-US']: 'none1397'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '易车网',
            ['en-US']: 'none1398'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '车商汇',
            ['en-US']: 'none1399'
        }),
	}),
	易车网: 2,
	车商汇: 3,
});
export const DcsRetailContractOptionalListType = Object.freeze({
	__proto__: Enum,
	精品件选装: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '精品件选装',
            ['en-US']: 'none1400'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '配置选装',
            ['en-US']: 'none1401'
        }),
	}),
	配置选装: 1,
});
export const DcsQuestionnaireTemplateStatus = Object.freeze({
	__proto__: Enum,
	未使用: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未使用',
            ['en-US']: 'none1402'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已使用',
            ['en-US']: 'none1403'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1404'
        }),
	}),
	已使用: 1,
	作废: 99,
});
export const DcsVehicleDamageDetailProcessMethod = Object.freeze({
	__proto__: Enum,
	生产线返工: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生产线返工',
            ['en-US']: 'none1405'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '整备中心整备',
            ['en-US']: 'none1406'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '现场维修',
            ['en-US']: 'none1407'
        }),
	}),
	整备中心整备: 2,
	现场维修: 3,
});
export const DcsVehicleExchangeRecordStatus = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none1408'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已返库',
            ['en-US']: 'none1409'
        }),
	}),
	已返库: 2,
});
export const DcsVehicleReturnDeliveryStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none1410'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1411'
        }),
	}),
	作废: 99,
});
export const DcsVehicleReturnDeliveryType = Object.freeze({
	__proto__: Enum,
	销售退货: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售退货',
            ['en-US']: 'none1412'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '转售退货',
            ['en-US']: 'none1413'
        }),
	}),
	转售退货: 2,
});
export const DcsVehicleReturnDeliveryDetailStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none1414'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已下达',
            ['en-US']: 'none1415'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已入库',
            ['en-US']: 'none1416'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1417'
        }),
	}),
	已下达: 2,
	已入库: 3,
	作废: 99,
});
export const DcsVehicleOrderDetailExtendShippingMethod = Object.freeze({
	__proto__: Enum,
	物流运输: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '物流运输',
            ['en-US']: 'none1418'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '自提',
            ['en-US']: 'none1419'
        }),
	}),
	自提: 2,
});
export const DcsRetailContractPaymentType = Object.freeze({
	__proto__: Enum,
	分期付款: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '分期付款',
            ['en-US']: 'none1420'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '现款',
            ['en-US']: 'none1421'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '贷款',
            ['en-US']: 'none1422'
        }),
	}),
	现款: 1,
	贷款: 2,
});
export const DcsRetailContractAccountSettleStatus = Object.freeze({
	__proto__: Enum,
	无需结算: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '无需结算',
            ['en-US']: 'none1423'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '待结算',
            ['en-US']: 'none1424'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已结算',
            ['en-US']: 'none1425'
        }),
	}),
	待结算: 1,
	已结算: 2,
});
export const DcsRetailContractAPPLICATION = Object.freeze({
	__proto__: Enum,
	家商兼用: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '家商兼用',
            ['en-US']: 'none1426'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '家用（私用）',
            ['en-US']: 'none1427'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '商用（公用）',
            ['en-US']: 'none1428'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '营运(出租/租赁/驾校/长途客运)',
            ['en-US']: 'none1429'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '长途客运',
            ['en-US']: 'none1430'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '出租',
            ['en-US']: 'none1431'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '驾校',
            ['en-US']: 'none1432'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '接待用车',
            ['en-US']: 'none1433'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '领导配车',
            ['en-US']: 'none1434'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '业务用车',
            ['en-US']: 'none1435'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '租赁',
            ['en-US']: 'none1436'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none1437'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '个人代步',
            ['en-US']: 'none1438'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '事业单位',
            ['en-US']: 'none1439'
        }),
		16: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公务',
            ['en-US']: 'none1440'
        }),
		17: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他接待用车',
            ['en-US']: 'none1441'
        }),
		18: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '军用',
            ['en-US']: 'none1442'
        }),
		19: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '商务',
            ['en-US']: 'none1443'
        }),
		20: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '商用为主兼顾家用',
            ['en-US']: 'none1444'
        }),
		21: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '家用为主兼顾商用',
            ['en-US']: 'none1445'
        }),
		22: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '样车',
            ['en-US']: 'none1446'
        }),
		23: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '私家车',
            ['en-US']: 'none1447'
        }),
		24: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '私用',
            ['en-US']: 'none1448'
        }),
		26: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销',
            ['en-US']: 'none1449'
        }),
		27: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '自用',
            ['en-US']: 'none1450'
        }),
		28: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '试乘试驾车',
            ['en-US']: 'none1451'
        }),
		31: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '奖品',
            ['en-US']: 'none1452'
        }),
		32: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '三包车',
            ['en-US']: 'none1453'
        }),
		33: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公务/商务车',
            ['en-US']: 'none1454'
        }),
		34: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '营运用车',
            ['en-US']: 'none1455'
        }),
		35: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '非保修车',
            ['en-US']: 'none1456'
        }),
		36: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '特殊保修车',
            ['en-US']: 'none1457'
        }),
		37: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '家用(非三包车)',
            ['en-US']: 'none1458'
        }),
	}),
	家用（私用）: 2,
	商用（公用）: 3,
	营运(出租/租赁/驾校/长途客运): 4,
	长途客运: 5,
	出租: 6,
	驾校: 7,
	接待用车: 8,
	领导配车: 9,
	业务用车: 10,
	租赁: 11,
	其他: 12,
	个人代步: 13,
	事业单位: 14,
	公务: 16,
	其他接待用车: 17,
	军用: 18,
	商务: 19,
	商用为主兼顾家用: 20,
	家用为主兼顾商用: 21,
	样车: 22,
	私家车: 23,
	私用: 24,
	经销: 26,
	自用: 27,
	试乘试驾车: 28,
	奖品: 31,
	三包车: 32,
	公务/商务车: 33,
	营运用车: 34,
	非保修车: 35,
	特殊保修车: 36,
	家用(非三包车): 37,
});
export const DcsDealerAcountCheckListDirection = Object.freeze({
	__proto__: Enum,
	借: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '借',
            ['en-US']: 'none1498'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '贷',
            ['en-US']: 'none1499'
        }),
	}),
	贷: 2,
});
export const DcsMonthlyPlanDetailStatus = Object.freeze({
	__proto__: Enum,
	新增: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新增',
            ['en-US']: 'none1506'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '完成',
            ['en-US']: 'none1507'
        }),
	}),
	完成: 2,
});
export const DcsVehicleRebateAppDetailStatus = Object.freeze({
	__proto__: Enum,
	新增: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新增',
            ['en-US']: 'none1508'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已确认',
            ['en-US']: 'none1509'
        }),
	}),
	已确认: 2,
});
export const DcsDealerQuaterlySalesTargetStatus = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none1515'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已分解',
            ['en-US']: 'none1516'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1517'
        }),
	}),
	已分解: 2,
	作废: 99,
});
export const DcsCustomerDrivingSeniority = Object.freeze({
	__proto__: Enum,
	1～3年: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '1～3年',
            ['en-US']: 'none1521'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '1年以内',
            ['en-US']: 'none1522'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '3～5年',
            ['en-US']: 'none1523'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '5年以上',
            ['en-US']: 'none1524'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未知',
            ['en-US']: 'none1525'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '5～10年',
            ['en-US']: 'none1526'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '尚未领证',
            ['en-US']: 'none1527'
        }),
	}),
	1年以内: 2,
	3～5年: 3,
	5年以上: 4,
	未知: 5,
	5～10年: 6,
	尚未领证: 7,
});
export const DcsCustomerJobPosition = Object.freeze({
	__proto__: Enum,
	私营业主: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '私营业主',
            ['en-US']: 'none1528'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '出租司机',
            ['en-US']: 'none1529'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公务员',
            ['en-US']: 'none1530'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新闻媒体',
            ['en-US']: 'none1531'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '文艺娱乐',
            ['en-US']: 'none1532'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '金融/证券/保险',
            ['en-US']: 'none1533'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公检法军',
            ['en-US']: 'none1534'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '科研/教育',
            ['en-US']: 'none1535'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '医疗',
            ['en-US']: 'none1536'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '律师/会计',
            ['en-US']: 'none1537'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '旅游/饭店/服务业',
            ['en-US']: 'none1538'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '计算机/网络',
            ['en-US']: 'none1539'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '邮电通信',
            ['en-US']: 'none1540'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '生产制造',
            ['en-US']: 'none1541'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '自由职业',
            ['en-US']: 'none1542'
        }),
		16: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '农/林/牧/副/渔',
            ['en-US']: 'none1543'
        }),
		17: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '学生',
            ['en-US']: 'none1544'
        }),
		18: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '交通运输',
            ['en-US']: 'none1545'
        }),
		19: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '房地产/建筑',
            ['en-US']: 'none1546'
        }),
		21: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '企业负责人',
            ['en-US']: 'none1547'
        }),
		22: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '高层职员',
            ['en-US']: 'none1548'
        }),
		23: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中层职员',
            ['en-US']: 'none1549'
        }),
		24: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一般职员',
            ['en-US']: 'none1550'
        }),
		25: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '自由职业者',
            ['en-US']: 'none1551'
        }),
		26: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none1552'
        }),
		27: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '高级管理人员',
            ['en-US']: 'none1553'
        }),
		28: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '普通职员',
            ['en-US']: 'none1554'
        }),
		29: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '工人/服务人员',
            ['en-US']: 'none1555'
        }),
		30: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中级管理人员',
            ['en-US']: 'none1556'
        }),
		31: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中高级技术人员',
            ['en-US']: 'none1557'
        }),
		34: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一般管理人员',
            ['en-US']: 'none1558'
        }),
		35: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '普通技术人员',
            ['en-US']: 'none1559'
        }),
		36: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '民营企业/私营企业业主',
            ['en-US']: 'none1560'
        }),
		37: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '个体经营/自由职业者',
            ['en-US']: 'none1561'
        }),
		38: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '高层领导干部/高级管理人员',
            ['en-US']: 'none1562'
        }),
		39: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '中层领导干部/中级管理人员',
            ['en-US']: 'none1563'
        }),
		40: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一般领导干部/一般管理人员',
            ['en-US']: 'none1564'
        }),
		41: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '家庭主妇/离退休/下岗/待业',
            ['en-US']: 'none1565'
        }),
		42: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '技术专家/高级顾问',
            ['en-US']: 'none1566'
        }),
		43: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '家庭主妇/离退休/下岗/待业',
            ['en-US']: 'none1567'
        }),
		44: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '技术专家/高级顾问',
            ['en-US']: 'none1568'
        }),
		47: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '民营企业/私营企业主',
            ['en-US']: 'none1569'
        }),
	}),
	出租司机: 2,
	公务员: 3,
	新闻媒体: 4,
	文艺娱乐: 5,
	金融/证券/保险: 6,
	公检法军: 7,
	科研/教育: 8,
	医疗: 9,
	律师/会计: 10,
	旅游/饭店/服务业: 11,
	计算机/网络: 12,
	邮电通信: 13,
	生产制造: 14,
	自由职业: 15,
	农/林/牧/副/渔: 16,
	学生: 17,
	交通运输: 18,
	房地产/建筑: 19,
	企业负责人: 21,
	高层职员: 22,
	中层职员: 23,
	一般职员: 24,
	自由职业者: 25,
	其他: 26,
	高级管理人员: 27,
	普通职员: 28,
	工人/服务人员: 29,
	中级管理人员: 30,
	中高级技术人员: 31,
	一般管理人员: 34,
	普通技术人员: 35,
	民营企业/私营企业业主: 36,
	个体经营/自由职业者: 37,
	高层领导干部/高级管理人员: 38,
	中层领导干部/中级管理人员: 39,
	一般领导干部/一般管理人员: 40,
	家庭主妇/离退休/下岗/待业: 43,
	技术专家/高级顾问: 44,
	民营企业/私营企业主: 47,
});
export const DcsRetainedCustomerFamilySize = Object.freeze({
	__proto__: Enum,
	1人: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '1人',
            ['en-US']: 'none1570'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '2人',
            ['en-US']: 'none1571'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '3人',
            ['en-US']: 'none1572'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '4人',
            ['en-US']: 'none1573'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '5人及以上',
            ['en-US']: 'none1574'
        }),
	}),
	2人: 2,
	3人: 3,
	4人: 4,
	5人及以上: 5,
});
export const DcsOrderingVehicleFocus = Object.freeze({
	__proto__: Enum,
	价格: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '价格',
            ['en-US']: 'none1575'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '外形',
            ['en-US']: 'none1576'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '动力',
            ['en-US']: 'none1577'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '安全',
            ['en-US']: 'none1578'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '舒适',
            ['en-US']: 'none1579'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '操纵性',
            ['en-US']: 'none1580'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '质保',
            ['en-US']: 'none1581'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '贷款',
            ['en-US']: 'none1582'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '保险',
            ['en-US']: 'none1583'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none1584'
        }),
	}),
	外形: 2,
	动力: 3,
	安全: 4,
	舒适: 5,
	操纵性: 6,
	质保: 7,
	贷款: 8,
	保险: 9,
	其他: 10,
});
export const DcsOrderingVehiclePurchasePurpose = Object.freeze({
	__proto__: Enum,
	家用: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '家用',
            ['en-US']: 'none1585'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '商用',
            ['en-US']: 'none1586'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '休闲',
            ['en-US']: 'none1587'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '上班',
            ['en-US']: 'none1588'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '爱好',
            ['en-US']: 'none1589'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '运动',
            ['en-US']: 'none1590'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none1591'
        }),
	}),
	商用: 2,
	休闲: 3,
	上班: 4,
	爱好: 5,
	运动: 6,
	其他: 7,
});
export const DcsOrderingVehiclePurchaseType = Object.freeze({
	__proto__: Enum,
	新购: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新购',
            ['en-US']: 'none1592'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '增购',
            ['en-US']: 'none1593'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '换购',
            ['en-US']: 'none1594'
        }),
	}),
	增购: 2,
	换购: 3,
});
export const DcsTaskAssignmentCRMStatus = Object.freeze({
	__proto__: Enum,
	处理中: 2,
	properties: Object.freeze({
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '处理中',
            ['en-US']: 'none1595'
        }),
		94: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '审核不通过',
            ['en-US']: 'none1596'
        }),
		95: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '回访',
            ['en-US']: 'none1597'
        }),
		96: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '暂存',
            ['en-US']: 'none1598'
        }),
		98: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1599'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '完成',
            ['en-US']: 'none1600'
        }),
	}),
	审核不通过: 94,
	回访: 95,
	暂存: 96,
	作废: 98,
	完成: 99,
});
export const DcsPotentialCustomerBaseDistributeStatus = Object.freeze({
	__proto__: Enum,
	未分配: 0,
	properties: Object.freeze({
		0: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未分配',
            ['en-US']: 'none1601'
        }),
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已分配',
            ['en-US']: 'none1602'
        }),
	}),
	已分配: 1,
});
export const DcsVehicleProjectInformationFileAttribute = Object.freeze({
	__proto__: Enum,
	有效: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none1603'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '无效',
            ['en-US']: 'none1604'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '虚假',
            ['en-US']: 'none1605'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '提前上传',
            ['en-US']: 'none1606'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '跨月提前上传',
            ['en-US']: 'none1607'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '上传不及时',
            ['en-US']: 'none1608'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '跨月上传不及时',
            ['en-US']: 'none1609'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未回访',
            ['en-US']: 'none1610'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '退车',
            ['en-US']: 'none1611'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '核心信息录入错误',
            ['en-US']: 'none1612'
        }),
	}),
	无效: 2,
	虚假: 3,
	提前上传: 4,
	跨月提前上传: 5,
	上传不及时: 6,
	跨月上传不及时: 7,
	未回访: 8,
	退车: 9,
	核心信息录入错误: 10,
});
export const DcsERPStorageLocationType = Object.freeze({
	__proto__: Enum,
	国际: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '国际',
            ['en-US']: 'none1621'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大客户',
            ['en-US']: 'none1622'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '降级车',
            ['en-US']: 'none1623'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none1624'
        }),
	}),
	大客户: 2,
	降级车: 3,
	其他: 4,
});
export const DcsRetainedCustomerCurrentAddress = Object.freeze({
	__proto__: Enum,
	城镇: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '城镇',
            ['en-US']: 'none1625'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '农村',
            ['en-US']: 'none1626'
        }),
	}),
	农村: 2,
});
export const DcsCustomerIfMarried = Object.freeze({
	__proto__: Enum,
	已婚: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '已婚',
            ['en-US']: 'none1627'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '未婚',
            ['en-US']: 'none1628'
        }),
	}),
	未婚: 2,
});
export const DcsCustomerFamily = Object.freeze({
	__proto__: Enum,
	一般: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一般',
            ['en-US']: 'none1636'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '良好',
            ['en-US']: 'none1637'
        }),
	}),
	良好: 2,
});
export const DcsVehicleProjectInformationInformationChannel = Object.freeze({
	__proto__: Enum,
	新闻/报纸: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新闻/报纸',
            ['en-US']: 'none1638'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '电视',
            ['en-US']: 'none1639'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '电台',
            ['en-US']: 'none1640'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '网络平台-车商',
            ['en-US']: 'none1641'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '网络平台-车易通',
            ['en-US']: 'none1642'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '搜狐网',
            ['en-US']: 'none1643'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新浪网',
            ['en-US']: 'none1644'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '汽车之家网',
            ['en-US']: 'none1645'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '易车网',
            ['en-US']: 'none1646'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '太平洋汽车网',
            ['en-US']: 'none1647'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他互联网',
            ['en-US']: 'none1648'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '车展',
            ['en-US']: 'none1649'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '巡展',
            ['en-US']: 'none1650'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '朋友介绍',
            ['en-US']: 'none1651'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '店头',
            ['en-US']: 'none1652'
        }),
		16: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '路过',
            ['en-US']: 'none1653'
        }),
		17: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他',
            ['en-US']: 'none1654'
        }),
	}),
	电视: 2,
	电台: 3,
	网络平台-车商: 4,
	网络平台-车易通: 5,
	搜狐网: 6,
	新浪网: 7,
	汽车之家网: 8,
	易车网: 9,
	太平洋汽车网: 10,
	其他互联网: 11,
	车展: 12,
	巡展: 13,
	朋友介绍: 14,
	店头: 15,
	路过: 16,
	其他: 17,
});
export const DcsVehicleProjectInformationConsiderationsFocusOn = Object.freeze({
	__proto__: Enum,
	外观好看: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '外观好看',
            ['en-US']: 'none1655'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '做工精细 ',
            ['en-US']: 'none1656'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '空间宽敞',
            ['en-US']: 'none1657'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '性价比高',
            ['en-US']: 'none1658'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '使用成本低',
            ['en-US']: 'none1659'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '安全性能好',
            ['en-US']: 'none1660'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '质量可靠',
            ['en-US']: 'none1661'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '发动机性能好',
            ['en-US']: 'none1662'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '油耗低',
            ['en-US']: 'none1663'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '舒适性好',
            ['en-US']: 'none1664'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '配置齐全',
            ['en-US']: 'none1665'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '喜欢自主品牌',
            ['en-US']: 'none1666'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '品牌口碑好',
            ['en-US']: 'none1667'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '形象与我的身份/个性匹配',
            ['en-US']: 'none1668'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '知名度高',
            ['en-US']: 'none1669'
        }),
		16: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售服务商服务好',
            ['en-US']: 'none1670'
        }),
		17: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有促销优惠朋友',
            ['en-US']: 'none1671'
        }),
		18: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '家人推荐',
            ['en-US']: 'none1672'
        }),
		19: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '售后服务方便',
            ['en-US']: 'none1673'
        }),
		20: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '备件价格便宜',
            ['en-US']: 'none1674'
        }),
		21: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '其他渠道',
            ['en-US']: 'none1675'
        }),
	}),
	做工精细 : 2,
	空间宽敞: 3,
	性价比高: 4,
	使用成本低: 5,
	安全性能好: 6,
	质量可靠: 7,
	发动机性能好: 8,
	油耗低: 9,
	舒适性好: 10,
	配置齐全: 11,
	喜欢自主品牌: 12,
	品牌口碑好: 13,
	形象与我的身份/个性匹配: 14,
	知名度高: 15,
	销售服务商服务好: 16,
	有促销优惠朋友: 17,
	家人推荐: 18,
	售后服务方便: 19,
	备件价格便宜: 20,
	其他渠道: 21,
});
export const DcsRetainedCustomerOtherBrand = Object.freeze({
	__proto__: Enum,
	A1: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'A1',
            ['en-US']: 'none1676'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'A3',
            ['en-US']: 'none1677'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'A5',
            ['en-US']: 'none1678'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'QQ3',
            ['en-US']: 'none1679'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'QQ3纯电动',
            ['en-US']: 'none1680'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'QQ6',
            ['en-US']: 'none1681'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'Qqme',
            ['en-US']: 'none1682'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '东方之子',
            ['en-US']: 'none1683'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '老风云',
            ['en-US']: 'none1684'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '风云2',
            ['en-US']: 'none1685'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '老旗云',
            ['en-US']: 'none1686'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '旗云1',
            ['en-US']: 'none1687'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '旗云2',
            ['en-US']: 'none1688'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '旗云3',
            ['en-US']: 'none1689'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'E5',
            ['en-US']: 'none1690'
        }),
		16: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '瑞虎3',
            ['en-US']: 'none1691'
        }),
		17: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'G3',
            ['en-US']: 'none1692'
        }),
		18: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'G5',
            ['en-US']: 'none1693'
        }),
		19: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'G6',
            ['en-US']: 'none1694'
        }),
		20: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'M1',
            ['en-US']: 'none1695'
        }),
		21: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'M1纯电动',
            ['en-US']: 'none1696'
        }),
		22: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'M5',
            ['en-US']: 'none1697'
        }),
		23: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'X1',
            ['en-US']: 'none1698'
        }),
		24: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'H3',
            ['en-US']: 'none1699'
        }),
		25: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'H5',
            ['en-US']: 'none1700'
        }),
		26: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'V5',
            ['en-US']: 'none1701'
        }),
		27: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'X5',
            ['en-US']: 'none1702'
        }),
		28: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '艾瑞泽7',
            ['en-US']: 'none1703'
        }),
		29: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'E3',
            ['en-US']: 'none1704'
        }),
		30: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '瑞虎5',
            ['en-US']: 'none1705'
        }),
	}),
	A3: 2,
	A5: 3,
	QQ3: 4,
	QQ3纯电动: 5,
	QQ6: 6,
	Qqme: 7,
	东方之子: 8,
	老风云: 9,
	风云2: 10,
	老旗云: 11,
	旗云1: 12,
	旗云2: 13,
	旗云3: 14,
	E5: 15,
	瑞虎3: 16,
	G3: 17,
	G5: 18,
	G6: 19,
	M1: 20,
	M1纯电动: 21,
	M5: 22,
	X1: 23,
	H3: 24,
	H5: 25,
	V5: 26,
	X5: 27,
	艾瑞泽7: 28,
	E3: 29,
	瑞虎5: 30,
});
export const DcsTaskAssignmentDispatchDepartment = Object.freeze({
	__proto__: Enum,
	奇瑞网络管理部: 52,
	properties: Object.freeze({
		21: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '奇瑞售后服务部',
            ['en-US']: 'none1732'
        }),
		23: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '经销商支援部',
            ['en-US']: 'none1731'
        }),
		24: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '奇瑞备件公司',
            ['en-US']: 'none1730'
        }),
		25: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '物流公司',
            ['en-US']: 'none1729'
        }),
		26: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '销售支援部',
            ['en-US']: 'none1728'
        }),
		27: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公关传播部',
            ['en-US']: 'none1727'
        }),
		28: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '开瑞备件管理部',
            ['en-US']: 'none1726'
        }),
		41: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '开瑞售后服务部',
            ['en-US']: 'none1725'
        }),
		42: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新能源公司营销部',
            ['en-US']: 'none1724'
        }),
		43: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新能源公司售后服务部',
            ['en-US']: 'none1723'
        }),
		44: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '奇瑞商用车公司售后服务部',
            ['en-US']: 'none1722'
        }),
		45: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '奇瑞商用车公司营销部',
            ['en-US']: 'none1721'
        }),
		46: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '开瑞市场传播部',
            ['en-US']: 'none1720'
        }),
		47: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '公关传播部',
            ['en-US']: 'none1719'
        }),
		48: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '大客户销售部',
            ['en-US']: 'none1718'
        }),
		49: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '增值业务部',
            ['en-US']: 'none1717'
        }),
		50: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '开瑞销售管理部',
            ['en-US']: 'none1716'
        }),
		51: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '市场与商品管理部',
            ['en-US']: 'none1715'
        }),
		52: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '奇瑞网络管理部',
            ['en-US']: 'none1714'
        }),
	}),
	市场与商品管理部: 51,
	开瑞销售管理部: 50,
	增值业务部: 49,
	大客户销售部: 48,
	公关传播部: 27,
	开瑞市场传播部: 46,
	奇瑞商用车公司营销部: 45,
	奇瑞商用车公司售后服务部: 44,
	新能源公司售后服务部: 43,
	新能源公司营销部: 42,
	开瑞售后服务部: 41,
	开瑞备件管理部: 28,
	销售支援部: 26,
	物流公司: 25,
	奇瑞备件公司: 24,
	经销商支援部: 23,
	奇瑞售后服务部: 21,
});
export const DcsCERTDeliveryMethodOrderType = Object.freeze({
	__proto__: Enum,
	正常订单: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '正常订单',
            ['en-US']: 'none1733'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '寄售冲账订单',
            ['en-US']: 'none1734'
        }),
	}),
	寄售冲账订单: 2,
});
export const DcsCERTDeliveryMethodDetailDealerType = Object.freeze({
	__proto__: Enum,
	一网: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '一网',
            ['en-US']: 'none1735'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '二网',
            ['en-US']: 'none1736'
        }),
	}),
	二网: 2,
});
export const DcsVehicleTransferApplyStatus = Object.freeze({
	__proto__: Enum,
	新建: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '新建',
            ['en-US']: 'none1737'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '有效',
            ['en-US']: 'none1738'
        }),
		99: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '作废',
            ['en-US']: 'none1739'
        }),
	}),
	有效: 2,
	作废: 99,
});
export const DcsVehicleProjectInformationOriginalVehicleModel = Object.freeze({
	__proto__: Enum,
	A1: 1,
	properties: Object.freeze({
		1: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'A1',
            ['en-US']: 'none1740'
        }),
		2: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'A3',
            ['en-US']: 'none1741'
        }),
		3: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'A5',
            ['en-US']: 'none1742'
        }),
		4: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'QQ3',
            ['en-US']: 'none1743'
        }),
		5: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'QQ3纯电动',
            ['en-US']: 'none1744'
        }),
		6: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'QQ6',
            ['en-US']: 'none1745'
        }),
		7: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'Qqme',
            ['en-US']: 'none1746'
        }),
		8: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '东方之子',
            ['en-US']: 'none1747'
        }),
		9: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '老风云',
            ['en-US']: 'none1748'
        }),
		10: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '风云2',
            ['en-US']: 'none1749'
        }),
		11: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '老旗云',
            ['en-US']: 'none1750'
        }),
		12: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '旗云1',
            ['en-US']: 'none1751'
        }),
		13: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '旗云2',
            ['en-US']: 'none1752'
        }),
		14: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '旗云3',
            ['en-US']: 'none1753'
        }),
		15: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'E5',
            ['en-US']: 'none1754'
        }),
		16: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '瑞虎3',
            ['en-US']: 'none1755'
        }),
		17: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'G3',
            ['en-US']: 'none1756'
        }),
		18: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'G5',
            ['en-US']: 'none1757'
        }),
		19: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'G6',
            ['en-US']: 'none1758'
        }),
		20: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'M1',
            ['en-US']: 'none1759'
        }),
		21: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'M1纯电动',
            ['en-US']: 'none1760'
        }),
		22: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'M5',
            ['en-US']: 'none1761'
        }),
		23: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'X1',
            ['en-US']: 'none1762'
        }),
		24: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'H3',
            ['en-US']: 'none1763'
        }),
		25: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'H5',
            ['en-US']: 'none1764'
        }),
		26: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'V5',
            ['en-US']: 'none1765'
        }),
		27: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'X5',
            ['en-US']: 'none1766'
        }),
		28: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '艾瑞泽7',
            ['en-US']: 'none1767'
        }),
		29: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: 'E3',
            ['en-US']: 'none1768'
        }),
		30: Object.freeze({
            __proto__: Enum,
            ['zh-CN']: '瑞虎5',
            ['en-US']: 'none1769'
        }),
	}),
	A3: 2,
	A5: 3,
	QQ3: 4,
	QQ3纯电动: 5,
	QQ6: 6,
	Qqme: 7,
	东方之子: 8,
	老风云: 9,
	风云2: 10,
	老旗云: 11,
	旗云1: 12,
	旗云2: 13,
	旗云3: 14,
	E5: 15,
	瑞虎3: 16,
	G3: 17,
	G5: 18,
	G6: 19,
	M1: 20,
	M1纯电动: 21,
	M5: 22,
	X1: 23,
	H3: 24,
	H5: 25,
	V5: 26,
	X5: 27,
	艾瑞泽7: 28,
	E3: 29,
	瑞虎5: 30,
});
