preload: function() {
      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.asset = this.add.sprite(this.width/2, this.height/2, ‘preloader’);
      this.asset.anchor.setTo(0.5, 0.5);
      this.load.setPreloadSprite(this.asset);
}
