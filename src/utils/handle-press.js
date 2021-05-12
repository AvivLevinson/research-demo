const KEY_PRESS_RIGHT = 39;
const KEY_PRESS_lEFT = 37;

export default function handlePress(event) {
  const end = new Date().getTime();
  let key = "worng";
  switch (event.keyCode) {
    case KEY_PRESS_RIGHT:
      key = "right";
      console.log("you press right");
      break;

    case KEY_PRESS_lEFT:
      key = "left";
      console.log("you press left");
      break;

    default:
      console.log("try agin");
  }

  return { key, end };
}
