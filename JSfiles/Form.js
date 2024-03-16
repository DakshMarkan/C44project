class Form {
    constructor() {
      this.playButton = createButton("Play");
      this.titleImg = createImg("Images/HD-wallpaper-world-of-tanks-with-background-of-castle-world-of-tanks-games.jpg");
    }
  
    setElementsPosition() {
      this.titleImg.position(120, 50);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
    }
  
    setElementsStyle() {
      this.titleImg.class("gameTitle");
      this.playButton.class("customButton");
    }
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
    }
  
    /*handleMousePressed() {
      this.playButton.mousePressed(() => {
        this.input.hide();
        this.playButton.hide();
        var message = `
        Hello ${this.input.value()}
        </br>wait for another player to join...`;
        this.greeting.html(message);
        playerCount += 1;
        player.name = this.input.value();
        player.index = playerCount;
        player.addPlayer();
        player.updateCount(playerCount);
        player.getDistance();
      });
    }*/
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      //this.handleMousePressed();
    }
  }
  