import p5 from 'p5/lib/p5.min.js';

function drawArrow(s: any, base: any, vec: any, myColor: any) {
  s.push();
  s.stroke(myColor);
  s.strokeWeight(3);
  s.fill(myColor);
  s.translate(base.x, base.y);
  s.line(0, 0, vec.x, vec.y);
  s.rotate(vec.heading());
  let arrowSize = 7;
  s.translate(vec.mag() - arrowSize, 0);
  s.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  s.pop();
}

export default {

  BubblesSketch: (s: any) => {
    s.setup = () => {
      s.createCanvas(10, 10);
    }
    s.draw = () => {
      s.background(240);

      let v0 = s.createVector(0, 0);
      let v1 = s.createVector(s.mouseX, s.mouseY);
      drawArrow(s, v0, v1, 'red');

      let v2 = s.createVector(-30, 20);
      drawArrow(s, v1, v2, 'blue');

      let v3 = p5.Vector.add(v1, v2);
      drawArrow(s, v0, v3, 'purple');
    }
  }

}