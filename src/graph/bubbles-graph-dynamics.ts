import p5 from 'p5/lib/p5.min.js';


class PhysicsBody {
  position: Object;
  velocity: Object;
  acceleration: Object;
  mass: number;
  drag: number;

  constructor(p: Partial<PhysicsBody> = {}) {

  }

  update(deltatime: number) {
    let adjVel =
      let adjustedVelocity = new Point(this.velocity.multiplyScalar(deltatime));
    let adjustedAcceleration = new Point(this.acceleration.multiplyScalar(deltatime * deltatime * 0.5));

    let nextPosition = new Point(
      this.position.addPoint(
        adjustedVelocity.addPoint(
          adjustedAcceleration)));
    let nextAcceleration = this.applyForce(GRAVITATIONAL_FORCE);
    let nextVelocity = this.velocity.addPoint(this.acceleration.addPoint(nextAcceleration))

    this.position = nextPosition;
    this.velocity = nextVelocity;
    this.acceleration = nextAcceleration;
  }

  applyForce(force: Point) {


    return force;
  }

}

export default class BubblesGraph {

}
