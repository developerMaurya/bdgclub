"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! Bootstrap integration for DataTables' Buttons
 * ©2016 SpryMedia Ltd - datatables.net/license
 */

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery', 'datatables.net-bs4', 'datatables.net-buttons'], function ($) {
      return factory($, window, document);
    });
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object') {
    // CommonJS
    module.exports = function (root, $) {
      if (!root) {
        root = window;
      }
      if (!$ || !$.fn.dataTable) {
        $ = require('datatables.net-bs4')(root, $).$;
      }
      if (!$.fn.dataTable.Buttons) {
        require('datatables.net-buttons')(root, $);
      }
      return factory($, root, root.document);
    };
  } else {
    // Browser
    factory(jQuery, window, document);
  }
})(function ($, window, document, undefined) {
  'use strict';

  var DataTable = $.fn.dataTable;
  $.extend(true, DataTable.Buttons.defaults, {
    dom: {
      container: {
        className: 'dt-buttons btn-group flex-wrap'
      },
      button: {
        className: 'btn btn-secondary'
      },
      collection: {
        tag: 'div',
        className: 'dropdown-menu',
        closeButton: false,
        button: {
          tag: 'a',
          className: 'dt-button dropdown-item',
          active: 'active',
          disabled: 'disabled'
        }
      },
      splitWrapper: {
        tag: 'div',
        className: 'dt-btn-split-wrapper btn-group',
        closeButton: false
      },
      splitDropdown: {
        tag: 'button',
        text: '',
        className: 'btn btn-secondary dt-btn-split-drop dropdown-toggle dropdown-toggle-split',
        closeButton: false,
        align: 'split-left',
        splitAlignClass: 'dt-button-split-left'
      },
      splitDropdownButton: {
        tag: 'button',
        className: 'dt-btn-split-drop-button btn btn-secondary',
        closeButton: false
      }
    },
    buttonCreated: function buttonCreated(config, button) {
      return config.buttons ? $('<div class="btn-group"/>').append(button) : button;
    }
  });
  DataTable.ext.buttons.collection.className += ' dropdown-toggle';
  DataTable.ext.buttons.collection.rightAlignClassName = 'dropdown-menu-right';
  return DataTable.Buttons;
});