var dataList = document.querySelector('.data-list');
var counter = 6;
var counterSecond = 0;
var onLoadBtn = document.querySelector('.onload-btn')

onLoadBtn.addEventListener('click', function () {
  makeRequest();
  counter += 6;
  counterSecond += 6;
  // console.log(counter);
})

function makeRequest() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = alertContent;
  xhttp.open("GET", 'https://jsonplaceholder.typicode.com/posts', true);
  xhttp.send();
}

function alertContent() {
  if (this.readyState === 4 && this.status === 200) {
    data = JSON.parse(this.responseText);
    var ulItems = document.querySelector('.data-list');
    counter = counter < data.length ? counter : data.length;
    for (var i = counterSecond; i < counter; i++) {
  // console.log(i);
      if (i == data.length - 1) {
        onLoadBtn.classList.add('hide-btn');
      }
      var userList = document.createElement('li');
      userList.classList.add('user-list');
      userList.innerHTML = `<div class="user-details">
                          <h2>Title : ${data[i].title}</h2>
                          <p>Body : ${data[i].body}</p>
                            </div>`;
      ulItems.appendChild(userList);
    }
  }
}
