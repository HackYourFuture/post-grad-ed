/* @flow */
const Enzyme = require("enzyme");
const EnzymeAdapter = require("enzyme-adapter-react-16");

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

// Quill uses the MutationObserver. We don't need to test quill, but this means components with Quill in it won't fail
// Workaround as suggested at https://github.com/zenoamaro/react-quill/issues/434
global.MutationObserver = class {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
};
global.document.getSelection = function() {};
