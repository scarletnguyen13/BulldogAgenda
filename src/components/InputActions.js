export const changeColor = (block, color) => (
  {
    type: 'CHANGE_COLOR',
    payload: {block, color}
  }
);