import { Sprite, Ticker } from 'pixi.js';
import Scene from './Scene';
import gsap from 'gsap';
// import Footer from '../components/Footer';
// import Footer from '../components/Guy';
import Guy from '../components/Guy';

export default class Play extends Scene {
  async onCreated() {
    const guy = new Guy();
    guy.y = 100;
    guy.x = -800;

    const ticker = new Ticker();
    console.log(window.innerWidth / 2);
    console.log(window.innerWidth);

    console.log(this.parent.width);
    console.log(this.parent.parent.width);

    ticker.add(() => {
      guy.x += 1.5;
      if (guy.x > 1000) {
        guy.x = -1000;
      }
    });

    ticker.start();
    this.addChild(guy);
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) {
    // eslint-disable-line no-unused-vars
  }
}
