export const delay = (ms: number) => { return new Promise(res => setTimeout(res, ms)) };

export function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//export function sleep(milliseconds) {
//    const date = Date.now();
//    let currentDate = null;
//    do {
//      currentDate = Date.now();
//    } while (currentDate - date < milliseconds);
//  }