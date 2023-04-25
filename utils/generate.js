const colorPalette = require('./palette');

/**
 * @param {string} color
 * @param {Object} options
 * @param {number} options.index 1 - 10 (default: 6)
 * @param {boolean} options.list
 * @param {string} options.format 'hex' | 'rgb' | 'hsl'
 * 
 * @return string | string[]
 */
function generate(color, options = {}) {
  const { list, index = 6, format = 'hex' } = options;

  if (list) {
    const list = [];
    for(let i = 1; i <= 10; i++) {
      list.push(colorPalette(color, i, format));
    }
    return list;
  }
  return colorPalette(color, index, format);
}

module.exports = generate;
