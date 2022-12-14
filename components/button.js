class Button {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.isClicked = false;
  }

  show() {
    if (this.over()) {
      fill(220);
    } else {
      fill(255);
    }

    rect(this.x, this.y, this.w, this.h);

    fill(0);
    textSize(18);
    text('클릭', this.x + this.w / 2 - 18, this.y + this.h / 2 + 5);
  }

  over() {
    let x2 = this.x + this.w;
    let y2 = this.y + this.h;
    if (this.x < mouseX && mouseX < x2 && this.y < mouseY && mouseY < y2) {
      return true;
    } else {
      return false;
    }
  }

  click() {
    let x2 = this.x + this.w;
    let y2 = this.y + this.h;
    if (this.x < mouseX && mouseX < x2 && this.y < mouseY && mouseY < y2) {
      if (mouseIsPressed) {
        if (!this.isClicked) {
          this.isClicked = true;
          return true;
        } else {
          return false;
        }
      }
    }

    this.isClicked = false;
    return false;
  }
}
