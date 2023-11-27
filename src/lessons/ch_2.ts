function lesson1() {
  let res = null;

  (() => {
    console.log('ano');
  })()

  console.log(res);
}

export function ch_2() {
  lesson1();
} 