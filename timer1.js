// Get arg array
const args = process.argv.slice(2);
// Loop through each and set timer for each arg
for (const arg of args) {
  if (Number.isNaN(Number(arg)) || arg <= 0) continue; // Ignore args that aren't number or 0 or less
  const time = arg * 1000;
  setTimeout((seconds) => {
    process.stdout.write('\x07');
    console.log(`Timer set for ${seconds} seconds elapsed`);
  }, time, arg);
}