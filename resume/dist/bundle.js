(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var bio = {
	"mobile": "020 4018 5543",
	"email": "vicken.liu@gmail.com",
	"location": "Wellington-New Zealand",
	"skills": ["HTML", "CSS", "JAVASCRIPT", "ANGULAR.JS", "RAILS"]
},
    projects = {
	"works": [{
		"name": "Tongle Health Consulting",
		"year": "2015",
		"link": "http://www.tlgay.com",
		"info": "Transfer an old style plain page to a modern, clean-designed website.Fully functinal, cross-browsers,and mobile friendly."
	}, {
		"name": "Personal Portfolio V1",
		"year": "2015",
		"link": "http://www.vickenliu.com/V1",
		"info": "My first personal website,was playing around while I was studying,Try to demonstrate the skills."
	}, {
		"name": "Personal Portfolio V2",
		"year": "2015",
		"link": "http://www.vickenliu.com",
		"info": "Try to squeeze all the information on a single page. Started from scratch,Try to impliment more new stuff within the code."
	}, {
		"name": "Personal Portfolio Test",
		"year": "2015",
		"link": "http://www.vickenliu.com/test",
		"info": "impliment a new design,and put in new technique into use."
	}]
},
    education = {
	"records": [{
		"school": "China Three Gorges University",
		"years": "2005-2009",
		"major": "Electrical Engineering & Automation"
	}, {
		"school": "Code School",
		"years": "2015",
		"major": "Front-end Development"
	}, {
		"school": "Dev Academy",
		"years": "2016",
		"major": "Web Development"
	}]
},
    work = {
	"works": [{
		"company": "Shanghai Longchuang System Integrator",
		"year": "2010-2013",
		"position": "Onsite Engineer"
	}, {
		"company": "Envictus NZ",
		"year": "2013-2015",
		"position": "PLC technician"
	}]
};
exports.bio = bio;
exports.projects = projects;
exports.education = education;
exports.work = work;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = display;
function display(id, obj) {
	var divEdu = document.getElementById(id),
	    head = document.createElement('h2');
	head.innerHTML = id.toUpperCase();
	divEdu.appendChild(head);
	for (var key in obj) {
		obj[key].forEach(function (item) {
			var newElement = document.createElement('div');
			var newChild = '';
			for (var _key in item) {
				if (_key === 'link') {
					newChild += '<h3><strong>' + _key.toUpperCase() + ': </strong><a href="' + item[_key] + '"  target=\'_blank\'>live site</a></h3>';
				} else {
					newChild += '<h3><strong>' + _key.toUpperCase() + ': </strong>' + item[_key] + '</h3>';
				}
			}
			newElement.className += 'educationRecord group';
			newElement.innerHTML += newChild;
			divEdu.appendChild(newElement);
		});
	}
}

},{}],3:[function(require,module,exports){
'use strict';

var _constant = require('./constant');

var _display = require('./display');

var _display2 = _interopRequireDefault(_display);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
	init();
});

function init() {
	displayBio();
	(0, _display2.default)('education', _constant.education);
	(0, _display2.default)('projects', _constant.projects);
	(0, _display2.default)('work', _constant.work);
}

function displayBio() {
	var ul = document.getElementById('bio').querySelector('ul');
	for (var item in _constant.bio) {
		var newElement = document.createElement('li');
		if (item === 'email') {
			newElement.innerHTML = "<strong>" + item.toUpperCase() + ":</strong> <a href='mailto:" + _constant.bio[item] + "'>" + _constant.bio[item] + "</a>";
		} else if (item === "mobile") {
			newElement.innerHTML = "<strong>" + item.toUpperCase() + ":</strong> <a href='tel:" + _constant.bio[item] + "'>" + _constant.bio[item] + "</a>";
		} else {
			newElement.innerHTML = "<strong>" + item.toUpperCase() + ":</strong> " + _constant.bio[item];
		}

		ul.appendChild(newElement);
	}
}

},{"./constant":1,"./display":2}]},{},[3]);
