import { Chinese } from './zh.mjs';

/** 简体 */
const simplified = Chinese.S;
/** 繁体 */
const traditional = Chinese.T;

class Translation {
	isChinese(char) {}

	translate(str, type) {}

	s2t(str) {
		return this.translate(str, true);
	}

	t2s(str) {
		return this.translate(str, false);
	}
}

const translation = new Translation();

export { translation };
