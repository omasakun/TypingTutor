/** @typedef {{key:string,time:number,correct:boolean}} TypeResult */
/** @typedef {{text:string,wordID:[number,number][],freq:number,count:number,fail:number,pass:number,time:{count:number,time:number},score:number}} ScoredChar */

const nGram = 3;
/**　
 * @type {ScoredChar[]}
 */
var Chars = []; {
	/**@type {Map<string,Map<number,number>>} */
	let tmp = new Map(); // Map(nGram => Map(wordID=>count))
	Words.forEach((word, index) => {
		for (var i = 0; i < word.length; i++) {
			for (var j = 1; j <= nGram; j++) {
				if (i + j - 1 >= word.length) break; // Out of array
				let text = word.substr(i, j);
				let item = tmp.get(text);
				if (!item) { // undefined
					tmp.set(text, new Map([
						[index, 1]
					]));
				} else {
					item.set(index, (item.get(index) || 0) + 1);
				}
			}
		}
	});
	let maxFreq = 0;
	tmp.forEach((item, key) => {
		let count = 0;
		let wordID = [];
		item.forEach((value, key) => {
			wordID.push([key, value]);
			count += value;
		});
		let freq = Math.pow(count, key.length); //TODO
		maxFreq = Math.max(maxFreq, freq);
		Chars.push({
			text: key,
			fail: 0,
			pass: 0,
			time: {
				count: 0,
				time: 0
			},
			wordID: wordID,
			count: count,
			freq: freq,
			score: undefined
		});
	});
	Chars.forEach((item) => item.freq = item.freq / maxFreq);
} // Set Chars
/**
 * @type {{Date:string,Status:string,Words:number,Time:number,WPM:number,Acc:number}[]}
 */
varLog = [];
/**　
 * @param {TypeResult[]} queue
 */
function LoadTypeResult(queue) {
	for (var i = Math.max(0, queue.length - nGram); i < queue.length; i++) {
		var items = queue.slice(i, queue.length);
		var text = items.map((v) => v.key).join("");
		var ID = Chars.findIndex((v) => v.text == text);
		if (ID < 0) continue;
		if (items.findIndex((v) => !v.time || v.time <= 0) < 0) {
			Chars[ID].time.count++;
			Chars[ID].time.time += items.reduce((pv, v) => pv + v.time, 0);
		}
		if (items.findIndex((v) => !v.correct) < 0) Chars[ID].pass++;
		else Chars[ID].fail++;
		Chars[ID].score = undefined;
	}
}
/** 
 * @param {TypeResult[]} queue
 */
function LoadTypeResults(queue) {
	let tmp = [];
	for (var i = 0; i < queue.length; i++) {
		tmp.push(queue[i]);
		LoadTypeResult(tmp);
	}
}

function MakeQuestions(resultCount) {
	Chars.forEach((item) => {
		var acc = item.pass / (item.fail + item.pass + 1);
		var time = ((item.time.time + 1) / item.time.count);
		if (item.text == "the")
			console.log();
		item.score = time / acc; // 大きいと、やるべき (TODO: freqを無視している)
	});
	/**@type {Map<string,{score:number,scoreInfs:number,freq:number,count:number}>} */
	var wordIDs = new Map();
	Chars.forEach(item => item.wordID.forEach((v) => {
		var tmp = wordIDs.get(Words[v[0]]) || { score: 0, scoreInfs: 0, freq: 0, count: 0 };
		if (Words[v[0]] == "the" && item.score == Infinity)
			console.log();
		if (item.score == Infinity)
			tmp.scoreInfs += v[1];
		else tmp.score += item.score * v[1];
		tmp.freq += item.freq * v[1];
		tmp.count += v[1];
		wordIDs.set(Words[v[0]], tmp);
	}));
	/**@type {string[]} */
	var result = [];
	var removed = new Set();
	console.time("MakeQuestions");
	// <=2つの/の間に*を入れて切り替わる
	while (result.length < resultCount) { // 一回で、4.9% 0.7% 0.4% 0.3% 0.1%
		let max = { score: -Infinity, scoreInfs: -Infinity, freq: -Infinity, text: "" };
		wordIDs.forEach((v, key) => {
			var compare = max.scoreInfs != v.scoreInfs / v.count ? max.scoreInfs - v.scoreInfs / v.count
				: max.score != v.score / v.count ? max.score - v.score / v.count
					: max.freq - v.freq / v.count;
			if (compare > 0) return;
			max = { score: v.score / v.count, scoreInfs: v.scoreInfs / v.count, freq: v.freq / v.count, text: key };
		});
		result.push(max.text);
		for (var i = 0; i < max.text.length; i++) {
			for (var j = 1; j <= nGram; j++) {
				if (i + j - 1 >= max.text.length) break; // Out of array
				let text = max.text.substr(i, j);
				if (removed.has(text)) continue;
				removed.add(text);
				let Char = Chars.find(v => v.text == text);
				if (Char == undefined) continue;
				Char.wordID.forEach(v => {
					var tmp = wordIDs.get(Words[v[0]]);
					if (tmp == undefined) return;
					if (Char.score == Infinity) tmp.scoreInfs -= v[1];
					else tmp.score -= Char.score * v[1];
					tmp.freq -= Char.freq * v[1];
				});
			}
		}
	}
	/*/
	result= Array.from(wordIDs).sort((a, b) => // 一回で、3.4% 1% 0.6% 0.4% 0.2%
		b[1].scoreInfs != a[1].scoreInfs ? b[1].scoreInfs - a[1].scoreInfs
			: b[1].score != a[1].score ? b[1].score - a[1].score
				: b[1].freq - a[1].freq) // やるべきものを先頭に
		.slice(0, resultCount).map(v => v[0]);
	/**/
	console.timeEnd("MakeQuestions");
	return result;
	/*/ 一回で、3.6% 1% 0.5% 0.4% 0.3%  | 3.5% 1% 0.6% 0.5% 0.3%
		Chars.sort((a, b) => b.score != a.score ? b.score - a.score : b.freq - a.freq); // やるべきものが、先頭に来る
		return Chars.slice(0, resultCount).map((v) => {
			var index = (v.wordID.reduce((pv, v) => pv + v[1], 0) * Math.random()) << 0;
			return Words[v.wordID[v.wordID.findIndex((vv) => {
				index -= vv[1];
				return index < 0;
			})][0]];
		});
	*/
}

function MakePracticeText() {
	var len = 100; //TODO
	return Shuffle(SliceLength(MakeQuestions(len), len)).join(" ");
}

function Shuffle(array) {
	var n = array.length,
		t, i;

	while (n) {
		i = (Math.random() * n--) << 0;
		t = array[n];
		array[n] = array[i];
		array[i] = t;
	}

	return array;
}

/**
 * @param {string[]} texts
 * @returns {string[]}
 */
function SliceLength(texts, len) {
	for (let i = 0; i < texts.length; i++) {
		len -= texts[i].length + 1;
		if (len < 0) return texts.slice(0, i - 1);
	}
	return texts;
}

function ShowStatus() {
	if (queue2Log.length > LogLen) queue2Log.splice(0, queue2Log.length - LogLen);
	var sum = {
		fail: 0,
		pass: 0,
		time: {
			count: 0,
			time: 0
		}
	};
	queue2Log.forEach((v) => {
		v.correct ? sum.pass++ : sum.fail++;
		if (v.time != undefined) {
			sum.time.count++;
			sum.time.time += v.time;
		}
	});
	var wpm = 60000 / (sum.time.time / sum.time.count);
	var acc = sum.pass / (sum.fail + sum.pass);
	var completeCounts = [];
	var tipTime = {
		count: 0,
		time: 0
	};
	var tipAcc = {
		count: 0,
		pass: 0
	};
	var charAndTime = [];
	var charAndAcc = [];
	for (i = 0; i < statusCount; i++) completeCounts.push(0);
	Chars.forEach((v) => {
		if (v.time.count > 0) {
			tipTime.count += v.count * v.time.count;
			tipTime.time += v.count * v.time.time / v.text.length;
			charAndTime.push({
				text: v.text,
				_: 60000 / (v.time.time / v.time.count / v.text.length)
			});
		}
		if (v.pass + v.fail > 0) {
			tipAcc.count += v.count * (v.pass + v.fail);
			tipAcc.pass += v.count * v.pass;
			charAndAcc.push({
				text: v.text,
				_: v.pass / (v.pass + v.fail)
			});
		}
		if (v.pass != 0 && v.time.count != 0) {
			if (v.pass - 1 < completeCounts.length)
				completeCounts[v.pass - 1]++;
			else
				completeCounts[completeCounts.length - 1]++;
		}
	});
	var status = "";
	for (var i = completeCounts.length - 1; i >= 0; i--) {
		if (i > 0) completeCounts[i - 1] += completeCounts[i];
		if (completeCounts[i] != Chars.length)
			status = ((completeCounts[i] / Chars.length * 1000) << 0) / 10 + "% " + status;
		else
			status = "Fin " + status;
	}
	_set("status", "Analysing " + status);
	_set("score", "Score:" + ((wpm * 100 * acc) << 0));
	_set("WPMmeasured", (wpm << 0) + "WPM");
	_set("ACCmeasured", "Acc." + ((acc * 100) << 0) + "%");
	_set("WPMtip", ((60000 / (tipTime.time / tipTime.count)) << 0) + "WPM");
	_set("ACCtip", "Acc." + ((tipAcc.pass / tipAcc.count * 100) << 0) + "%");
	var WPMtexts = charAndTime.sort((a, b) => a._ - b._).map((v) => v.text + " " + (v._ << 0));
	var ACCtexts = charAndAcc.sort((a, b) => a._ - b._).map((v) => v.text + " " + ((v._ * 100) << 0));
	_setList("WPMweak", WPMtexts.slice(0, weakWordsCount));
	_setList("WPMstrong", WPMtexts.reverse().slice(0, weakWordsCount));
	_setList("ACCweak", ACCtexts.slice(0, weakWordsCount));
	_setList("ACCstrong", ACCtexts.reverse().slice(0, weakWordsCount));
	var playingStat = Chars.filter(v => v.text.length == 1).reduce((pv, cv) => ({ time: pv.time + cv.time.time, type: pv.type + cv.pass, typo: pv.typo + cv.fail }), { time: 0, type: 0, typo: 0 });
	_set("totalTime", "Time: " + ms2text(playingStat.time));
	_set("totalType", playingStat.type + " types");
	_set("totalTypo", playingStat.typo + " typos");
	function ms2text(ms) {
		var s = (ms << 0) / 1000, m = (ms / 60 / 1000) << 0, h = (ms / 60 / 60 / 1000) << 0;
		return h + ":" + (m % 60) + ":" + (s % 60);
	}
	function _setList(id, arr) {
		_(id).innerHTML = "";
		arr.forEach((v) => {
			var a = document.createElement("span");
			a.innerText = v;
			_(id).appendChild(a);
		})
	}
}
const statusCount = 5;
const weakWordsCount = 20;
const LogLen = 100;
const time2Wait = 1000;
/** @type {TypeResult[]} */
var queue2Log = [];
/** @type {TypeResult[]} */
var queue2Analysis = [];
var passed = true;
var time = 0;
var timeRecent = 0;
var timerID = -1;
window.addEventListener("load", () => {
	SetText(MakePracticeText());
	_("upload").addEventListener("click", () => {
		Util.LoadFile((text) => {
			var mode = prompt("overwrite|add|cancel", "add");
			var Fn = {
				"overwrite": (a, b) => a,
				"add": (a, b) => a + b
			};
			if (!Fn[mode]) alert("calceled");
			JSON.parse(text).forEach((item) => {
				var i = Chars.findIndex((v) => v.text == item[0]);
				if (i < 0) return;
				Chars[i].fail = Fn[mode](item[1], Chars[i].fail);
				Chars[i].pass = Fn[mode](item[2], Chars[i].pass);
				Chars[i].time.count = Fn[mode](item[3], Chars[i].time.count);
				Chars[i].time.time = Fn[mode](item[4], Chars[i].time.time);
			});
			MakeQuestions(0);
			ShowStatus();
		})
	});
	_("download").addEventListener("click", () => {
		var name = prompt("Filename...", "keyboard.json") || "keyboard.json";
		Util.Download(name, JSON.stringify(Chars.map((v) => [v.text, v.fail, v.pass, v.time.count, v.time.time << 0])));
	});
	window.addEventListener("keypress", (e) => {
		if (_("l1-Practice").innerText.startsWith(e.key.toLowerCase())) {
			var t = time < 0 ? undefined : performance.now() - time;
			time = performance.now();
			var item = {
				key: e.key.toLowerCase(),
				correct: passed,
				time: (performance.now() - timeRecent) < time2Wait ? t : undefined
			};
			queue2Analysis.push(item);
			LoadTypeResult(queue2Analysis);
			_("l1-Practice").innerText = _("l1-Practice").innerText.slice(e.key.length);
			_("l1-Fin").innerText += e.key.toLowerCase();
			if (_("l1-Practice").innerText == "") {
				SetText(MakePracticeText());
				queue2Analysis = [];
				time = -1;
			}
			//MakeQuestions(0); // 下に依存する行がある
			//_("line2").innerText = MakePracticeText();// SliceLength(Chars.slice(0, 100).map((v) => v.text), 100).join(" ");

			queue2Log.push(item);
			ShowStatus();
			passed = true;
		} else {
			passed = false;
			if (_("l1-Fin").innerText != "") {
				var pre = document.createElement("pre");
				pre.innerText = _("l1-Fin").innerText;
				_("l1-Log").appendChild(pre);
				_("l1-Fin").innerText = "";
			}
		}
		_("practice").classList.remove("waiting");
		if (timerID >= 0) clearTimeout(timerID);
		timerID = setTimeout(() => {
			_("practice").classList.add("waiting");
		}, time2Wait);
		timeRecent = performance.now();
		e.preventDefault();
	});
});

function SetText(text) {
	_("l1-Practice").innerText = text;
	_("l1-Fin").innerText = "";
	_("l1-Log").innerHTML = "";
}

function _(id) {
	return document.getElementById(id)
}

function _set(id, text) {
	_(id).innerText = text
}