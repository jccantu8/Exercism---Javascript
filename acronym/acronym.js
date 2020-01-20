export const parse = (str) => {
  let newStr = str.replace(/[\-]/g, ' ').replace(/[^a-zA-Z\s]/g, '').split(' ');

  return newStr.map( (e) => e.charAt(0).toUpperCase()).join('');
};
