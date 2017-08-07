let info = document.querySelector('.myinfo');
let aboutme = document.querySelector('.mybio')
let propic = document.querySelector('.pic')
let req = new XMLHttpRequest();
req.addEventListener('load',myData);
// req.addEventListener('load',basicbio);
req.open("GET", "https://api.github.com/users/sarahshuey");
req.send();

function myData() {
  let data = JSON.parse(this.responseText);
  let basicInfo = '';
console.log(data);
    basicInfo += `<dt> Name: </dt> <dd> ${data.name} </dd> <dt> Github URL: </dt> <dd> ${data.html_url} </dd> <dt> Email: </dt> <dd> Sarah.Shuey@me.com </dd> <dt> Company: </dt> <dd>${data.company} </dd> <dt> Website: </dt> <dd> ${data.blog} </dd>`
    info.innerHTML = basicInfo;
    let basic = '';
    basic += `${data.bio}`
    aboutme.innerHTML = basic;
    let picture = `<img src=${data.avatar_url}>`
    propic.innerHTML = picture;
  };
