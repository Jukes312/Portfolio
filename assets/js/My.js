let readMore = document.getElementsByClassName('read-more')
let readMoreBtn = document.getElementsByClassName('read-more-btn');
let readMoreBtnLenth = readMoreBtn.length;
console.log(readMore)

for(let i=0;i<readMoreBtnLenth;i++){
   readMoreBtn[i].onclick = ()=>{readMore[i].classList.toggle('read-more-open')
   readMoreBtn[i].textContent = readMore[i].classList.contains('read-more-open')? 'Read Less...': 'Read More...'

}

}

 