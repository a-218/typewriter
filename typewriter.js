const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
  setTimeout(() => {
  process.stdout.write(char);
  process.stdout.write('\n');
}, 50 * char)dddddd
}



// const sentence = "hello there from lighthouse labs";
//   for (let i = 0; i < sentence.length; i++) {
//       setTimeout(function () {
//           process.stdout.write(sentence[i]);
//           process.stdout.write('\n');
//       }, i * 50);
//   }



