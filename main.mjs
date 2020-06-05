import { Chinese } from './zh.mjs';

/** 简体 */
const simplified = Chinese.S;
/** 繁体 */
const traditional = Chinese.T;

class Translation {
	/**
	 *
	 * @param {string} char
	 * @returns {boolean}
	 */
	isChinese(char) {
		let code = char.charCodeAt();
		return code >= 0x4E00 && code <= 0x9FA5;
		// return (code > 0x3400 && code < 0x9fc3) || (code > 0xf900 && code < 0xfa6a);
	}

	/**
	 *
	 * @param {string} str
	 * @param {boolean} type true: 简体转繁体
	 */
	translate(str, type) {
		if (typeof str !== 'string') {
			return str;
		}

		let source = simplified;
		let target = traditional;
		if (!type) {
			source = traditional;
			target = simplified;
		}

		let res = '';
		for (let i = 0; i < str.length; i++) {
			let letter = str.charAt(i);
			if (!this.isChinese(letter)) {
				res += letter;
				continue;
			}

			let index = source.indexOf(letter);
			if (index !== -1) {
				res += target.charAt(index);
			} else {
				res += letter;
			}
		}

		return res;
	}

	s2t(str) {
		return this.translate(str, true);
	}

	t2s(str) {
		return this.translate(str, false);
	}
}

const translation = new Translation();

export { translation };
