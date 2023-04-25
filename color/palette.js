// eslint-disable-next-line @typescript-eslint/no-var-requires
const { generate } = require('../utils/index.js');

module.exports = {
  install(_, __, functions) {
    functions.add('color-palette', (color, index) => {
      return generate(color.value, { index: index.value });
    });
  },
};
