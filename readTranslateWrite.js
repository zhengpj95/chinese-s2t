import * as fs from 'fs';
import { translation } from './main.mjs';

const readChinese = function (url) {
	fs.readFile(url, 'utf-8', (err, data) => {
		if (err) {
			console.log(`读取文件${url}失败`);
			return;
		}
		console.log(`读取文件${url}成功`);
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
	console.log(`翻译成功`);
	writeChinese(result);
};

const writeChinese = function (data) {
	console.log(`开始写入文件`);
	fs.writeFile('./test2.txt', data, (err) => {
		if (err) {
			console.log(`写入文件失败`);
			return;
		}
		console.log(`写入文件成功`);
	});
};

readChinese('./test.txt');
