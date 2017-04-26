'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Created by rroussel on 24/04/2017.
 */

/*EITHER*/
/*import ParentMessageBox from 'core-hybrid/lib/MessageBox'*/
/*OR*/
var h = require('core-hybrid');

var MessageBox = function (_h$MessageBox) {
    _inherits(MessageBox, _h$MessageBox);

    function MessageBox(message) {
        _classCallCheck(this, MessageBox);

        return _possibleConstructorReturn(this, (MessageBox.__proto__ || Object.getPrototypeOf(MessageBox)).call(this, message));
    }

    _createClass(MessageBox, [{
        key: 'show',
        value: function show() {
            alert(this._message);
        }
    }]);

    return MessageBox;
}(h.MessageBox);

exports.default = MessageBox;
module.exports = exports['default'];