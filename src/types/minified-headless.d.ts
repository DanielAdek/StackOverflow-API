/** Declaration file generated by dts-gen */

export = minified_headless;

declare function minified_headless(...args: any[]): void;

declare namespace minified_headless {
	class M {
		constructor(list: any, assimilateSublists: any);

		array(arg1: any, arg2: any, arg3: any): any;

		call(arg1: any, arg2: any): any;

		collect(arg1: any, arg2: any): any;

		contains(arg1: any, arg2: any, arg3: any): any;

		each(arg1: any, arg2: any, arg3: any): any;

		endsWith(arg1: any, arg2: any, arg3: any): any;

		equals(arg1: any, arg2: any, arg3: any): any;

		filter(arg1: any, arg2: any): any;

		find(arg1: any, arg2: any, arg3: any): any;

		findLast(arg1: any, arg2: any, arg3: any): any;

		intersection(arg1: any, arg2: any): any;

		join(separator: any): any;

		map(arg1: any, arg2: any): any;

		merge(arg1: any, arg2: any, arg3: any): any;

		only(index: any): any;

		reduce(callback: any, memo: any): any;

		reverse(arg1: any, arg2: any, arg3: any): any;

		sort(func: any): any;

		startsWith(arg1: any, arg2: any, arg3: any): any;

		sub(arg1: any, arg2: any): any;

		toObject(arg1: any, arg2: any, arg3: any): any;

		uniq(arg1: any, arg2: any): any;

		unite(arg1: any, arg2: any, arg3: any): any;

	}

	const prototype: {
	};

	function array(list: any): any;

	function bind(f: any, fThis: any, beforeArgs: any, afterArgs: any, ...args: any[]): any;

	function call(arg1: any, arg2: any, arg3: any): any;

	function collect(arg1: any, arg2: any, arg3: any): any;

	function contains(list: any, value: any): any;

	function copyObj(from: any, to: any): any;

	function dateAdd(date: any, property: any, value: any): any;

	function dateClone(date: any): any;

	function dateDiff(property: any, date1: any, date2: any): any;

	function dateMidnight(date: any): any;

	function each(list: any, cb: any, ctx: any): any;

	function eachObj(obj: any, cb: any, ctx: any): any;

	function endsWith(base: any, end: any): any;

	function equals(x: any, y: any): any;

	function escapeHtml(s: any): any;

	function escapeRegExp(s: any): any;

	function extend(target: any, ...args: any[]): any;

	function filter(arg1: any, arg2: any, arg3: any): any;

	function filterObj(obj: any, f: Function, ctx: any): any;

	function find(list: any, findFunc: any, startIndex: any, endIndex: any): any;

	function findLast(list: any, findFunc: any, startIndex: any, endIndex: any): any;

	function format(tpl: any, object: any, escapeFunction: any): any;

	function formatHtml(tpl: any, obj: any): any;

	function formatValue(fmt: any, value: any): any;

	function intersection(arg1: any, arg2: any, arg3: any): any;

	function isBool(n: any): any;

	function isDate(n: any): any;

	function isEmpty(s: any, ignoreWhitespace: any): any;

	function isFunction(f: any): any;

	function isList(v: any): any;

	function isNumber(n: any): any;

	function isObject(f: any): any;

	function isString(s: any): any;

	function isValue(n: any): any;

	function keys(arg1: any, arg2: any, arg3: any): any;

	function map(arg1: any, arg2: any, arg3: any): any;

	function mapObj(obj: any, mapFunc: any, ctx: any): any;

	function merge(list: any, target: any): any;

	function pad(digits: any, number: any): any;

	function parseDate(fmt: any, date: any): any;

	function parseNumber(fmt: any, value: any): any;

	function partial(f: any, beforeArgs: any, afterArgs: any): any;

	function range(start: any, end: any): any;

	function reverse(list: any): any;

	function startsWith(base: any, start: any): any;

	function sub(arg1: any, arg2: any, arg3: any): any;

	function template(template: any, escapeFunction: any, ...args: any[]): any;

	function toObject(list: any, value: any): any;

	function toString(s: any): any;

	function trim(s: any): any;

	function uniq(arg1: any, arg2: any, arg3: any): any;

	function unite(list: any, ...args: any[]): any;

	function values(arg1: any, arg2: any, arg3: any): any;

	namespace M {
		namespace prototype2 {
			function array(arg1: any, arg2: any, arg3: any): any;

			function call(arg1: any, arg2: any): any;

			function collect(arg1: any, arg2: any): any;

			function contains(arg1: any, arg2: any, arg3: any): any;

			function each(arg1: any, arg2: any, arg3: any): any;

			function endsWith(arg1: any, arg2: any, arg3: any): any;

			function equals(arg1: any, arg2: any, arg3: any): any;

			function filter(arg1: any, arg2: any): any;

			function find(arg1: any, arg2: any, arg3: any): any;

			function findLast(arg1: any, arg2: any, arg3: any): any;

			function intersection(arg1: any, arg2: any): any;

			function join(separator: any): any;

			function map(arg1: any, arg2: any): any;

			function merge(arg1: any, arg2: any, arg3: any): any;

			function only(index: any): any;

			function reduce(callback: any, memo: any): any;

			function reverse(arg1: any, arg2: any, arg3: any): any;

			function sort(func: any): any;

			function startsWith(arg1: any, arg2: any, arg3: any): any;

			function sub(arg1: any, arg2: any): any;

			function toObject(arg1: any, arg2: any, arg3: any): any;

			function uniq(arg1: any, arg2: any): any;

			function unite(arg1: any, arg2: any, arg3: any): any;

			namespace array {
				const prototype: {
				};

			}

			namespace call {
				const prototype: {
				};

			}

			namespace collect {
				const prototype: {
				};

			}

			namespace contains {
				const prototype: {
				};

			}

			namespace each {
				const prototype: {
				};

			}

			namespace endsWith {
				const prototype: {
				};

			}

			namespace equals {
				const prototype: {
				};

			}

			namespace filter {
				const prototype: {
				};

			}

			namespace find {
				const prototype: {
				};

			}

			namespace findLast {
				const prototype: {
				};

			}

			namespace intersection {
				const prototype: {
				};

			}

			namespace join {
				const prototype: {
				};

			}

			namespace map {
				const prototype: {
				};

			}

			namespace merge {
				const prototype: {
				};

			}

			namespace only {
				const prototype: {
				};

			}

			namespace reduce {
				const prototype: {
				};

			}

			namespace reverse {
				const prototype: {
				};

			}

			namespace sort {
				const prototype: {
				};

			}

			namespace startsWith {
				const prototype: {
				};

			}

			namespace sub {
				const prototype: {
				};

			}

			namespace toObject {
				const prototype: {
				};

			}

			namespace uniq {
				const prototype: {
				};

			}

			namespace unite {
				const prototype: {
				};

			}

		}

	}

	namespace array {
		const prototype: {
		};

	}

	namespace bind {
		const prototype: {
		};

	}

	namespace call {
		const prototype: {
		};

	}

	namespace collect {
		const prototype: {
		};

	}

	namespace contains {
		const prototype: {
		};

	}

	namespace copyObj {
		const prototype: {
		};

	}

	namespace dateAdd {
		const prototype: {
		};

	}

	namespace dateClone {
		const prototype: {
		};

	}

	namespace dateDiff {
		const prototype: {
		};

	}

	namespace dateMidnight {
		const prototype: {
		};

	}

	namespace each {
		const prototype: {
		};

	}

	namespace eachObj {
		const prototype: {
		};

	}

	namespace endsWith {
		const prototype: {
		};

	}

	namespace equals {
		const prototype: {
		};

	}

	namespace escapeHtml {
		const prototype: {
		};

	}

	namespace escapeRegExp {
		const prototype: {
		};

	}

	namespace extend {
		const prototype: {
		};

	}

	namespace filter {
		const prototype: {
		};

	}

	namespace filterObj {
		const prototype: {
		};

	}

	namespace find {
		const prototype: {
		};

	}

	namespace findLast {
		const prototype: {
		};

	}

	namespace format {
		const prototype: {
		};

	}

	namespace formatHtml {
		const prototype: {
		};

	}

	namespace formatValue {
		const prototype: {
		};

	}

	namespace intersection {
		const prototype: {
		};

	}

	namespace isBool {
		const prototype: {
		};

	}

	namespace isDate {
		const prototype: {
		};

	}

	namespace isEmpty {
		const prototype: {
		};

	}

	namespace isFunction {
		const prototype: {
		};

	}

	namespace isList {
		const prototype: {
		};

	}

	namespace isNumber {
		const prototype: {
		};

	}

	namespace isObject {
		const prototype: {
		};

	}

	namespace isString {
		const prototype: {
		};

	}

	namespace isValue {
		const prototype: {
		};

	}

	namespace keys {
		const prototype: {
		};

	}

	namespace map {
		const prototype: {
		};

	}

	namespace mapObj {
		const prototype: {
		};

	}

	namespace merge {
		const prototype: {
		};

	}

	namespace pad {
		const prototype: {
		};

	}

	namespace parseDate {
		const prototype: {
		};

	}

	namespace parseNumber {
		const prototype: {
		};

	}

	namespace partial {
		const prototype: {
		};

	}

	namespace range {
		const prototype: {
		};

	}

	namespace reverse {
		const prototype: {
		};

	}

	namespace startsWith {
		const prototype: {
		};

	}

	namespace sub {
		const prototype: {
		};

	}

	namespace template {
		const prototype: {
		};

	}

	namespace toObject {
		const prototype: {
		};

	}

	namespace toString {
		const prototype: {
		};

	}

	namespace trim {
		const prototype: {
		};

	}

	namespace uniq {
		const prototype: {
		};

	}

	namespace unite {
		const prototype: {
		};

	}

	namespace values {
		const prototype: {
		};

	}

}