(Array.from(document.getElementsByTagName("a"))).forEach((a)=>{
    a.addEventListener("click",find_book);
});
//function for finding book
function find_book(e){
    e.preventDefault();
    console.log(e.target.id);
    if(e.target.id=="AIW") Display_Book("books/AliceInWonderland.txt","Alice In WonderLand");
    if(e.target.id=="JAH") Display_Book("books/JekyllAndHyde.txt","Jekyll And Hyde");
    if(e.target.id=="LOTR") Display_Book("books/LOTR.txt","Lord Of The Rings");
}

//Function for display book
function Display_Book(url,title){
    var client = new XMLHttpRequest();
client.open('GET', url);
client.onreadystatechange = function() {
  var content=client.responseText;
  document.getElementById("book-head").innerText=title;
  document.getElementById("book-text").innerText=content;
}
client.send();
}

