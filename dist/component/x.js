"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactTable = require("react-table");

var _makeData = _interopRequireDefault(require("./makeData"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const Styles = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 1rem;\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n      :last-child {\n        border-right: 0;\n      }\n      input {\n        font-size: 1rem;\n        padding: 0;\n        margin: 0;\n        border: 0;\n      }\n    }\n  }\n  .pagination {\n    padding: 0.5rem;\n  }\n"]))); // Create an editable cell renderer


const EditableCell = _ref => {
  let {
    value: initialValue,
    row: {
      index
    },
    column: {
      id
    },
    updateMyData // This is a custom function that we supplied to our table instance

  } = _ref;

  // We need to keep and update the state of the cell normally
  const [value, setValue] = _react.default.useState(initialValue);

  const onChange = e => {
    setValue(e.target.value);
  }; // We'll only update the external data when the input is blurred


  const onBlur = () => {
    updateMyData(index, id, value);
  }; // If the initialValue is changed external, sync it up with our state


  _react.default.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return /*#__PURE__*/_react.default.createElement("input", {
    value: value,
    onChange: onChange,
    onBlur: onBlur
  });
}; // Set our editable cell renderer as the default Cell renderer


const defaultColumn = {
  Cell: EditableCell
}; // Be sure to pass our updateMyData and the skipPageReset option

function Table(_ref2) {
  let {
    columns,
    data,
    updateMyData,
    skipPageReset
  } = _ref2;
  // For this example, we're using pagination to illustrate how to stop
  // the current page from resetting when our data changes
  // Otherwise, nothing is different here.
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: {
      pageIndex,
      pageSize
    }
  } = (0, _reactTable.useTable)({
    columns,
    data,
    defaultColumn,
    // use the skipPageReset option to disable page resetting temporarily
    autoResetPage: !skipPageReset,
    // updateMyData isn't part of the API, but
    // anything we put into these options will
    // automatically be available on the instance.
    // That way we can call this function from our
    // cell renderer!
    updateMyData
  }, _reactTable.usePagination); // Render the UI for your table

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("table", getTableProps(), /*#__PURE__*/_react.default.createElement("thead", null, headerGroups.map(headerGroup => /*#__PURE__*/_react.default.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(column => /*#__PURE__*/_react.default.createElement("th", column.getHeaderProps(), column.render('Header')))))), /*#__PURE__*/_react.default.createElement("tbody", getTableBodyProps(), page.map((row, i) => {
    prepareRow(row);
    return /*#__PURE__*/_react.default.createElement("tr", row.getRowProps(), row.cells.map(cell => {
      return /*#__PURE__*/_react.default.createElement("td", cell.getCellProps(), cell.render('Cell'));
    }));
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => gotoPage(0),
    disabled: !canPreviousPage
  }, '<<'), ' ', /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => previousPage(),
    disabled: !canPreviousPage
  }, '<'), ' ', /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => nextPage(),
    disabled: !canNextPage
  }, '>'), ' ', /*#__PURE__*/_react.default.createElement("button", {
    onClick: () => gotoPage(pageCount - 1),
    disabled: !canNextPage
  }, '>>'), ' ', /*#__PURE__*/_react.default.createElement("span", null, "Page", ' ', /*#__PURE__*/_react.default.createElement("strong", null, pageIndex + 1, " of ", pageOptions.length), ' '), /*#__PURE__*/_react.default.createElement("span", null, "| Go to page:", ' ', /*#__PURE__*/_react.default.createElement("input", {
    type: "number",
    defaultValue: pageIndex + 1,
    onChange: e => {
      const page = e.target.value ? Number(e.target.value) - 1 : 0;
      gotoPage(page);
    },
    style: {
      width: '100px'
    }
  })), ' ', /*#__PURE__*/_react.default.createElement("select", {
    value: pageSize,
    onChange: e => {
      setPageSize(Number(e.target.value));
    }
  }, [10, 20, 30, 40, 50].map(pageSize => /*#__PURE__*/_react.default.createElement("option", {
    key: pageSize,
    value: pageSize
  }, "Show ", pageSize)))));
}

function App() {
  const columns = _react.default.useMemo(() => [{
    Header: 'Name',
    columns: [{
      Header: 'First Name',
      accessor: 'firstName'
    }, {
      Header: 'Last Name',
      accessor: 'lastName'
    }]
  }, {
    Header: 'Info',
    columns: [{
      Header: 'Age',
      accessor: 'age'
    }, {
      Header: 'Visits',
      accessor: 'visits'
    }, {
      Header: 'Status',
      accessor: 'status'
    }, {
      Header: 'Profile Progress',
      accessor: 'progress'
    }]
  }], []);

  const [data, setData] = _react.default.useState(() => (0, _makeData.default)(20));

  const [originalData] = _react.default.useState(data);

  const [skipPageReset, setSkipPageReset] = _react.default.useState(false); // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.
  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data


  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    setData(old => old.map((row, index) => {
      if (index === rowIndex) {
        return _objectSpread(_objectSpread({}, old[rowIndex]), {}, {
          [columnId]: value
        });
      }

      return row;
    }));
  }; // After data chagnes, we turn the flag back off
  // so that if data actually changes when we're not
  // editing it, the page is reset


  _react.default.useEffect(() => {
    setSkipPageReset(false);
  }, [data]); // Let's add a data resetter/randomizer to help
  // illustrate that flow...


  const resetData = () => setData(originalData);

  return /*#__PURE__*/_react.default.createElement(Styles, null, /*#__PURE__*/_react.default.createElement("button", {
    onClick: resetData
  }, "Reset Data"), /*#__PURE__*/_react.default.createElement(Table, {
    columns: columns,
    data: data,
    updateMyData: updateMyData,
    skipPageReset: skipPageReset
  }));
}

var _default = App;
exports.default = _default;