const util = {
  getCheckmarkPath() {
    return 'M0.5 7.1L6.53451 12.4672C6.55497 12.4854 6.58626 12.4837 6.6047 12.4635L17.5 0.5';
  },
  getCheckmarkWidth() {
    return '18';
  },
  getCheckmarkHeight() {
    return '13';
  },
  getCheckmarkViewBox() {
    return '0 0 18 13';
  },
  getCheckmarkFill() {
    return 'none';
  },
  getCheckmarkNamespace() {
    return 'http://www.w3.org/2000/svg';
  },
  getCheckmarkStrokeLinecap(): "round" | "butt" | "square" | "inherit" {
    return "round";
  },
};

export default util;