
for (let repeat = 100; repeat <= 200; repeat++ ) {
  if (repeat % 3 === 0 && repeat & 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (repeat % 3 === 0) {
    console.log("Loopy");
  } else if (repeat % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(repeat);
  }
}