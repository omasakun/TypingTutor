var Util = {
	LoadScript: (src, callback) => {
		let done = false;
		let head = document.getElementsByTagName('head')[0];
		let script = document.createElement('script');
		script.src = src;
		head.appendChild(script);
		script.onload = script.onreadystatechange = () => {
			if (!done && (!script.readyState || script.readyState === "loaded" || script.readyState === "complete")) {
				done = true;
				callback();
				script.onload = script.onreadystatechange = null;
				if (head && script.parentNode) {
					head.removeChild(script);
				}
			}
		};
	},
	URLtoObject: () => {
		let arg = {};
		let pair = location.search.substring(1).split('&');
		pair.forEach((V) => {
			let kv = V.split('=');
			arg[kv[0]] = kv[1];
		});
		return arg;
	},
	Polyfill: () => {
		window.performance = window.performance || {};
		window.performance.now = window.performance.now || (() => new Date().getTime());
		(function () {
			var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
				window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
			window.requestAnimationFrame = requestAnimationFrame;
		})();
	},
	DateFormat: (date) => {
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		var d = date.getDate();
		var h = date.getHours();
		var min = date.getMinutes();
		var s = date.getSeconds();
		return `${y}/${m}/${d} ${h}:${min}:${s}`;
	},
	Download: (filename, text) => {
		var a = document.createElement('a');
		a.href = window.URL.createObjectURL(new Blob([text], {
			type: 'text/plain'
		}));
		a.download = filename;
		a.style.display = 'none';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	},
	LoadFile: (callBack) => {
		var input = document.createElement("input");
		input.type = "file";
		input.addEventListener("change", (e) => {
			var file = e.target.files[0];
			if (!file) return;
			var reader = new FileReader();
			reader.onload = (e) => callBack(e.target.result);
			reader.readAsText(file);
		});
		document.body.appendChild(input);
		input.click();
		document.body.removeChild(input);
	}
};