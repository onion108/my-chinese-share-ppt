class Slide {

  #init;

  constructor() {

    /**
     * @type {HTMLDivElement}
     */
    this.el = document.createElement('div');

    /**
     * @type {boolean}
     */
    this.#init = false;

  }

  /**
   * Initialize and append children.
   */
  initStage() {}

  /**
   * Returns the DOM to render.
   * @returns {HTMLDivElement}
   */
  render() {
    if (!this.#init) {
      this.#init = true;
      this.initStage();
    }
    return this.el;
  }

  /**
   * Get called to set the layout of the slide.
   */
  layout() {}

  /**
   * Play the entering animation.
   * @param {() => void} animationEndCallback 
   */
  playEnterAnim(animationEndCallback) {
    animationEndCallback();
  }

  /**
   * Play the exiting animation.
   * @param {() => void} animationEndCallback 
   */
  playExitAnim(animationEndCallback) {
    animationEndCallback();
  }
}

class SlideShow {
  /**
   * Create a slide show player.
   * @param {string} el The selector of the element.
   */
  constructor(el) {
    /**
     * @type {Array<Slide>}
     */
    this.slideShows = [];

    /**
     * @type {number}
     */
    this.currentPlaying = 0;

    /**
     * @type {HTMLDivElement}
     */
    this.element = document.querySelector(el);
    this.element.style.position = "absolute";
    this.element.style.top = "0px";
    this.element.style.left = "0px";
    this.element.style.height = window.innerHeight + "px";
    this.element.style.width = window.innerWidth + "px";

    /**
     * @type {boolean}
     */
    this.isPlaying = false;

  }

  /**
   * 
   * @param  {...Slide} slideShows 
   */
  addSlideShows(...slideShows) {
    for (let i of slideShows) {
      this.slideShows.push(i);
    }
  }

  /**
   * Start playing.
   * @param {number} [from=0]
   */
  play(from = 0) {
    this.currentPlaying = from;
    this.element.innerHTML = "";
    this.#renderNewSlide();
  }

  /**
   * Play the next slide.
   */
  playNext() {
    if (this.isPlaying) {
      this.#clearOldSlide(() => {
        if (this.currentPlaying < this.slideShows.length - 1) {
          this.currentPlaying += 1;
        }
        this.#renderNewSlide();
      });
    }
  }

  /**
   * Play the slide at the given index (starts by 0).
   * @param {number} no The index.
   */
  playNo(no) {
    if (no >= 0 && no < this.slideShows.length) {
      this.#clearOldSlide(() => {
        this.currentPlaying = no;
        this.#renderNewSlide();
      });
    }
  }

  #clearOldSlide(onFinish) {
    this.isPlaying = false;
    this.slideShows[this.currentPlaying].playExitAnim(() => {
      this.element.innerHTML = "";
      onFinish();
    });
  }

  #renderNewSlide() {
    this.isPlaying = false;
    this.element.style.opacity = "0";
    this.element.innerHTML = "";
    this.element.appendChild(this.slideShows[this.currentPlaying].render());
    this.slideShows[this.currentPlaying].layout();
    this.element.style.opacity = "1";
    this.slideShows[this.currentPlaying].playEnterAnim(() => {
      this.isPlaying = true;
    });
  }

  resizeCurrentSlide() {
    if (this.isPlaying) {
      this.element.style.position = "absolute";
      this.element.style.top = "0px";
      this.element.style.left = "0px";
      this.element.style.height = window.innerHeight + "px";
      this.element.style.width = window.innerWidth + "px";
      this.slideShows[this.currentPlaying].layout();
    }
  }
}