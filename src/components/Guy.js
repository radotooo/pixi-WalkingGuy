import { AnimatedSprite, Container, Texture } from 'pixi.js';

export default class Guy extends Container {
  constructor() {
    super();
    this.init();
    this.buttonMode = true;
    this.interactive = true;
  }

  init() {
    let guyAnimation = [
      'capguy01',
      'capguy02',
      'capguy03',
      'capguy04',
      'capguy05',
      'capguy06',
      'capguy07',
      'capguy08',
    ];

    let textureArray = [];

    for (let i = 0; i < guyAnimation.length; i++) {
      let texture = new Texture.from(guyAnimation[i]);
      textureArray.push(texture);
    }

    this.animation = new AnimatedSprite(textureArray);
    this.animation.animationSpeed = 0.167;
    this.animation.updateAnchor = true;
    this.animation.loop = true;
    this.animation.play();

    this.addChild(this.animation);
  }
}
