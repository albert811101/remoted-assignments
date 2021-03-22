function ajax(src, callback){
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);  
    }  
  };  
  xhr.open('get', src);
  xhr.send();
}
function render(data){
  var jsn = JSON.parse(data);
  console.log(jsn);
  
  var newDiv;
  var textNode;
  var totalDiv;

  
  for (i=0; i<jsn.length; i++) {
    totalDiv = document.createElement('div')
   //先把袋子做出來，再把每三項丟進袋子裡，最後把三個袋子再丟進content裡
    

    newDiv = document.createElement('div');
    textNode = document.createTextNode(jsn[i].name);
    newDiv.appendChild(textNode);
    totalDiv.appendChild(newDiv);

    newDiv = document.createElement("div");
    textNode = document.createTextNode(jsn[i].description);
    newDiv.appendChild(textNode);
    totalDiv.appendChild(newDiv);

    newDiv = document.createElement("div");
    textNode = document.createTextNode(jsn[i].price);
    newDiv.appendChild(textNode);
    totalDiv.appendChild(newDiv);


    document.querySelector('#content').appendChild(totalDiv);
    
  }

  // document.createElement() and appendChild() methods are preferred.
  }
ajax("http://13.113.12.180:4000/api/1.0/remote-w4-data", function(response){
  render(response);
}); // you should get product information in JSON format and render data in the page