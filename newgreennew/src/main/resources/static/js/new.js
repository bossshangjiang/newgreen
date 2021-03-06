// 用于上传文件index.html及修改文件的下拉框联动 和给页面的fff赋值

var oone = document.getElementById("one");
var otwo = document.getElementById("two");
var three = document.getElementById("three");
var str = '';

otwo.disabled = true;
three.disabled = true;
var arr1 = [
	{
	"id": "1",
	"value": "项目公司基础材料"},
	{
	"id": "2",
	"value": "项目公司资信及担保情况"},
	{
        "id": "3",
        "value": "项目公司法律情况"},
    {
        "id": "4",
        "value": "项目施工与生产情况"},
    {
        "id": "5",
        "value": "财务资料"},
    {
        "id": "6",
        "value": "合作文件"},
    {
        "id": "7",
        "value": "其他资料"}

	];
var str = '<option>请选择一级标题</option>';
for(var i = 0; i < arr1.length; i++) {
	str += "<option value=" + arr1[i].id + ">" + arr1[i].value + "</option>"
}
oone.innerHTML = str;

var arr2 = {
	'1': ['1-1@项目公司最新营业执照与开户许可证', '1-2@项目公司法人身份证复印件', '1-3@项目批复', '1-4@项目公司电力许可证、土地证、房产证',
		'1-5@项目公司历次变更的公司章程', '1-6@项目公司成立至今的工商底档', '1-7@项目公司可行性研究报告',
		'1-8@项目公司股权结构、组织结构情况', '1-9@国家以及项目所在地的有关产业发展优惠政策', '1-10@采购情况',
		'1-11@销售情况', '1-12@项目公司近三年审计报告和最新一期财务报表'
	],
	'2': ["2-1@公司历次验资报告", "2-2@公司以及法人近一个月内的征信报告（明细版）", "2-3@贷款卡以及银行授信合同",
		"2-4@公司股权质押、设备抵押情况，以及历次借款合同", "2-5@公司对外担保情况及合同"
	],
	'3': ["3-1@公司提供的诉讼情况说明", "3-2@已生效的判决书，行政处罚决定书和其他监管记录等文件"
	],
    '4': ["4-1@在建项目建设用地规划许可证，建设工程规划许可证，建筑工程施工许可证", "4-2@相关合同",
		"4-3@在建项目工程图纸及施工进度表", "4-4@供电公司电量结算单", "4-5@项目生产报表"
    ],
    '5': ["5-1@科目余额表", "5-2@科目明细账", '5-3@货币资金', '5-4@在建工程付款凭证', '5-5@固定资产',
		'5-6@土地付款凭证', '5-7@税务资料', '5-8@关联方交易明细', '5-9@营业外收支', '5-10@重要凭证扫描件', '5-11@其他'
    ],
    '6': ["6-1@合作框架协议", "6-2@增资扩股协议", '6-3@项目公司董事会、股东会决议'
    ],
    '7': ["7-1@其他资料"
    ]

};
oone.onchange = function() {
	var val = this.value;
	var arrA = arr2[val];
	var str1 = '<option>请选择二级标题</option>';
	for(var j = 0; j < arrA.length; j++) {
		var aaa = arrA[j].split('@');
		str1 += "<option value=" + aaa[0] + ">" + aaa[1] + "</option>"
	}
	otwo.innerHTML = str1;
	otwo.disabled = false;
	three.innerHTML = '<option>请选择三级标题</option>';
	three.disabled = 'disabled';
};

var arr3 = {
	'1-1': ['1-1-1@项目公司最新营业执照与开户许可证'],
	'1-2': ['1-2-1@项目公司法人身份证复印件'],
	'1-3': ['1-3-1@发改委核准批复','1-3-2@项目环境影响批复','1-3-3@电网接入批复'],
	'1-4': ['1-4-1@项目公司电力许可证、土地证、房产证'],
	'1-5': ['1-5-1@项目公司历次变更的公司章程'],
	'1-6': ['1-6-1@项目公司成立至今的工商底档'],
	'1-7': ['1-7-1@项目公司可行性研究报告'],
	'1-8': ["1-8-1@含股权比例的股权结构图", "1-8-2@公司组织结构图", "1-8-3@公司董事、监事、高管人员名单及职位",
		"1-8-4@公司历次发生股权变更的协议及股东会、董事会决议","1-8-5@公司附属公司和关联公司清单"],
	'1-9': ['1-9-1@国家以及项目所在地的有关产业发展优惠政策'],
	'1-10': ['1-10-1@设备采购明细表','1-10-2@三大主机及其他设备采购合同','1-10-3@燃料采购合同'],
	'1-11': ['1-11-1@并网协议','1-11-2@购售电协议以及直供电协议','1-11-3@用热单位明细表以及供热合同'],
	'1-12': ['1-12-1@项目公司近三年审计报告和最新一期财务报表'],

	'2-1': ['2-1-1@公司历次验资报告'],
	'2-2': ['2-2-1@公司以及法人近一个月内的征信报告（明细版）'],
	'2-3': ['2-3-1@贷款卡以及银行授信合同'],
	'2-4': ["2-4-1@公司股权质押、设备抵押情况，以及历次借款合同"],
	'2-5': ['2-5-1@公司对外担保情况及合同'],

	'3-1': ['3-1-1@公司提供的诉讼情况说明'],
	'3-2': ["3-2-1@已生效的判决书，行政处罚决定书和其他监管记录等文件"],

	'4-1': ['4-1-1@在建项目建设用地规划许可证，建设工程规划许可证，建筑工程施工许可证'],
    '4-2': ['4-2-1@施工合同','4-2-2@如设备采购合同中，厂家只提供设备不负责安装，请提供设备安装合同'],
    '4-3': ['4-3-1@在建项目工程图纸及施工进度表'],
    '4-4': ['4-4-1@供电公司电量结算单'],
    '4-5': ['4-5-1@项目生产报表'],

    '5-1': ['5-1-1@科目余额表'],
    '5-2': ['5-2-1@科目明细账'],
    '5-3': ['5-3-1@银行对账单和余额调节表','5-3-2@现金盘点表'],
    '5-4': ['5-4-1@在建工程付款凭证'],
    '5-5': ['5-5-1@固定资产明细表','5-5-2@设备发票','5-5-3@转固资料','5-5-4@付款凭证'],
    '5-6': ['5-6-1@土地付款凭证'],
    '5-7': ['5-7-1@纳税申报表','5-7-2@所得税汇算清缴报告','5-7-3@缴税凭证'],
    '5-8': ["5-8-1@关联方交易明细"],
    '5-9': ['5-9-1@政府补助文件及收款凭证','5-9-2@罚款文件及付款凭证'],
    '5-10': ['5-10-1@重要凭证扫描件'],
    '5-11': ['5-11-1@其他'],

    '6-1': ['6-1-1@合作框架协议'],
    '6-2': ['6-2-1@增资扩股协议'],
    '6-3': ['6-3-1@项目公司董事会、股东会决议'],

    '7-1': ['7-1-1@其他资料']


};
otwo.onchange = function() {
	var val = this.value;
	var arrB = arr3[val];
	var str2 = '<option>请选择三级标题</option>';
	for(var l = 0; l < arrB.length; l++) {
		var bbb = arrB[l].split('@');
		// alert(bbb);
		str2 += "<option value=" + bbb[0] + ">" + bbb[1] + "</option>";
	}
	three.innerHTML = str2;
	three.disabled = false;
};

// 显示三级value
function getSelectval(id) {
    var selId = document.getElementById(id); //获取select的id
    var seleIndex = selId.selectedIndex; //获取被选项的引索值
    alert(selId.options[seleIndex].value); //获取被选项的value
    $("#fff").val(selId.options[seleIndex].value);
    $("#fff2").val(selId.options[seleIndex].value);
//				alert(selId.options[seleIndex].text); //获取被选项的文本
}

