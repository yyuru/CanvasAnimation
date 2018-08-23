//获取线性渐变色
export const getLinearGradient = (ctx, color) => {
  let canvasWidth = ctx.canvas.clientWidth;
  let canvasHeight = ctx.canvas.clientHeight;
  let lg = ctx.createLinearGradient(0, canvasHeight/2, canvasWidth , canvasHeight/2);
  color.forEach((item, index) => {
    lg.addColorStop(index * (1 / (color.length - 1)), item);
  });
  
  return lg
}
//获取径向渐变色
export const getRadiusGradient = (ctx, circle = [{
  x: 10,
  y: 10,
  r: 2
}, {
  x: 30,
  y: 30,
  r: 5
}], color,Numbers) => {
  let rg = ctx.createRadialGradient(circle[0].x, circle[0].y, circle[0].r, circle[1].x, circle[1].y, circle[1].r);
  color.forEach((item, index) => {
    rg.addColorStop(Numbers[index], item);
  });
  return rg
}