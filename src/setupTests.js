// src/setupTests.js
global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
      addEventListener: function () {}, // Add this line
      removeEventListener: function () {}, // Add this line
    };
  };
