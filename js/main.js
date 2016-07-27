function main(longName) {
  console.log(` Hello ES6 user: ${longName}`);
}
main('ES6 User');

goog.exportSymbol('main', main);
export { main }