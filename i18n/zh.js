const Chalk = require("chalk");
const Figures = require("figures");
const { ByteSize, RoundNum } = require("trample/node");

const GLOB_TEXT = {
	desc: `Description:\n${Chalk.blueBright("img-master")} 一个多功能无限制的图像批处理工具\n文档详情请查看 ${Chalk.yellowBright("https://github.com/JowayYoung/img-master")}`,
	help: "使用信息",
	version: "版本编号"
};

const ACTION_TEXT = {
	compress: "压缩图像",
	group: "分组图像",
	transform: "变换图像",
	tBlur: "模糊",
	tExtract: "裁剪",
	tFlip: "平翻",
	tFlop: "对翻",
	tFormat: "格式",
	tGrayscale: "灰度",
	tNegate: "负片",
	tNormalise: "对比",
	tResize: "调整",
	tRotate: "旋转",
	tSharpen: "锐化"
};

const QUESTION_TEXT = {
	gruop: "请选择图像分组依据",
	groupList: [
		{ name: "按照图像类型分组", value: "type" },
		{ name: "按照图像尺寸分组", value: "size" },
		{ name: `按照图像大小区间分组：${Chalk.blueBright("小于10k为小图，介于10k~100k为中图，大于100k为大图")}`, value: "range" }
	]
};

const COMPRESS_TEXT = {
	compressCompleted: (path, obj) => `${Figures.tick} 压缩[${Chalk.yellowBright(path)}]完成：原始大小${Chalk.redBright(ByteSize(obj.input.size))}，压缩大小${Chalk.greenBright(ByteSize(obj.output.size))}，优化比例${Chalk.blueBright(RoundNum(1 - obj.output.ratio, 2, true))}`,
	compressFailed: (path, msg) => `${Figures.cross} 压缩[${Chalk.yellowBright(path)}]失败：${Chalk.redBright(msg)}`,
	uploadFailed: (path, msg) => `${Figures.cross} 上传[${Chalk.yellowBright(path)}]失败：${Chalk.redBright(msg)}`,
	uploadLimited: path => `${Figures.cross} 上传[${Chalk.yellowBright(path)}]失败：${Chalk.redBright("请确保图像大小在5M以下")}`
};

const GROUP_TEXT = {
	grouprangeCompleted: `${Figures.tick} 按照图像${Chalk.greenBright("大小区间")}分组完成`,
	groupsizeCompleted: `${Figures.tick} 按照图像${Chalk.greenBright("尺寸")}分组完成`,
	grouptypeCompleted: `${Figures.tick} 按照图像${Chalk.greenBright("类型")}分组完成`
};

const OPERATION_TEXT = {
	targetCount: n => `${Figures.pointer} 处理图像总数：${Chalk.blueBright(n)}张`
};

const TRANSFORM_TEXT = {
	transformCompleted: (path, obj) => `${Figures.tick} 变换[${Chalk.yellowBright(path)}]完成：转换尺寸${Chalk.greenBright(obj.width)}x${Chalk.greenBright(obj.height)}，转换大小${Chalk.greenBright(ByteSize(obj.size))}，转换类型${Chalk.greenBright(obj.format === "jpeg" ? "JPG" : obj.format.toUpperCase())}`,
	transformFailed: (path, msg) => `${Figures.cross} 变换[${Chalk.yellowBright(path)}]失败：${Chalk.redBright(msg)}`,
	transformEmpty: `${Figures.cross} 变换图像失败：${Chalk.redBright("请检查配置是否未输入或输入错误")}`
};

module.exports = {
	ACTION_TEXT,
	COMPRESS_TEXT,
	GLOB_TEXT,
	GROUP_TEXT,
	OPERATION_TEXT,
	QUESTION_TEXT,
	TRANSFORM_TEXT
};