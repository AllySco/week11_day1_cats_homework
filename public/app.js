var addCat = function( name, food, source ) {

  var createUnorderedList = function() {
    var unorderedList = document.createElement( "ul" );
    unorderedList.classList.add( "cat" );
    return unorderedList;
  }

  var createListName = function( name ) {
    var catName = document.createElement( "li" );
    catName.innerText = "Name: " + name;
    return catName; 
  }

  var createListFood = function( food ) {
    var favFood = document.createElement( "li" );
    favFood.innerText = "Favourite food: " + food;
    return favFood;
  }

  var createListImg = function(source) {
    var listImg = document.createElement( "li" );
    var photo = document.createElement( "img" );
    photo.src = source;
    photo.width = 500;
    listImg.appendChild( photo );    
    return listImg;
  }

  var appendElements = function( unorderedList, listName, listFood, listImg, catList ){
    unorderedList.appendChild( listName );
    unorderedList.appendChild( listFood );
    unorderedList.appendChild( listImg );
    catList.appendChild( unorderedList );
  }

  var catList = document.getElementById( "cats" );

  var unorderedList = createUnorderedList();
  var listName = createListName( name );
  var listFood = createListFood( food );
  var listImg = createListImg( source );
  appendElements( unorderedList, listName, listFood, listImg, catList );
}

var app = function() {

  for ( var i = 0; i < cats.length; i++ ){
    addCat(cats[i].name, cats[i].food, cats[i].source);
  }
}

var cats = [{
  name: "Boba",
  food: "Sock fluff",
  source: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
}, {
  name: "Barnaby",
  food: "Tuna",
  source: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"
}, {
  name: "Max",
  food: "Whiskas Temptations",
  source: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
}, {
  name: "Craig",
  food: "Blood of his enemies",
  source: "http://www.slate.com/content/dam/slate/articles/health_and_science/science/2013/01/130123_SCI_EvilCats.jpg.CROP.rectangle3-large.jpg"
}]


window.onload = app;