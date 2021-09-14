const fs = require("fs");
const path = require("path");
const translation = require("./Translate");

const readChinese = function (url) {
	fs.readFile(url, "utf-8", (err, data) => {
		if (err) {
			console.log(`读取文件 ${url} 失败`);
			return;
		}
		console.log(`==读取文件 ${url} 成功==`);
		translateFile(data);
	});
};

const translateFile = function (data) {
	console.log(`开始翻译`);
	// 简体转繁体
	let result = translation.s2t(data);
	if (!result) {
		console.log(`翻译文件失败`);
		return;
	}
	console.log(`==翻译成功==`);
	writeChinese(result);
};

const writeChinese = function (data) {
	console.log(`开始写入文件`);
	let outDir = path.join(__dirname, "../out");
	if (!fs.existsSync(outDir)) {
		fs.mkdirSync(outDir);
	}
	let outFile = path.join(outDir, "result.txt");
	fs.writeFile(outFile, data, (err) => {
		if (err) {
			console.log(`写入文件失败`);
			return;
		}
		console.log(`==写入文件 ${outFile} 成功==`);
	});
};

console.log(`======开始翻译======`);
let inFile = path.join(__dirname, "test.txt");
readChinese(inFile);
