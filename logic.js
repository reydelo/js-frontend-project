var Item = function(name, img, category, color, brand, price, date, size){
  this.name = name,
  this.img = img,
  this.category = category,
  this.color = color,
  this.brand = brand,
  this.price = price,
  this.date = date,
  this.size = size
};

Item.prototype.display = function(){
  $('body').append('<h1>' + this.name + '<h1>')
  for(i = 0; i < this.img.length; i++) {
    $('body').append('<img src="' + this.img[i] + '"></img>');
  }
}
