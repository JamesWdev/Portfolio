const gifLinks = {
  "Add items to cart": "images/add_cart.gif",
  "Edit cart items": "images/update_item.gif",
  "Remove cart items": "images/delete_item.gif",
  "Purchase items": "images/purchase.gif",
  "Responsive layout": "images/responsive.gif",
  "Mobile view": "images/mobile.gif",
  "Tablet view": "images/tablet.gif"
};
const slide = document.querySelector('.slide-title');
const slideTitles = Object.keys(gifLinks);
const gif = document.querySelector('.gif');
const gifLinksLength = Object.values(gifLinks).length;
const gifLinkValues = Object.values(gifLinks);

gif.src = gifLinkValues[0];
slide.innerHTML = slideTitles[0];
//-----------------------
// Next button logic-----
let nextButton = document.querySelector('.next');

let j = true;
let i = 0;
nextButton.addEventListener('click', function() {
  if (i < (gifLinksLength - 1)) {
    i = i + 1;
  } else {
    i = 0;
  }
  
  slide.innerHTML = slideTitles[`${i}`];
  gif.src = gifLinkValues[`${i}`];
  //toggle fade animation per click
 if (j === true) {
  gif.classList.remove('fade2');
  gif.classList.add('fade');
  return j = false;
 } else {
  gif.classList.remove('fade');
  gif.classList.add('fade2');
  return j = true;
 }
})

//------------------------
// Previous button logic--
let prevButton = document.querySelector('.previous');

prevButton.addEventListener('click', function() {
  if (i > 0){
    i = i - 1;
  } else {
    i = (gifLinksLength - 1);
  }

  slide.innerHTML = slideTitles[`${i}`];
  gif.src = gifLinkValues[`${i}`];

  gif.classList.add('fade2');
//toggle fade animation per click
  if (j === true) {
    gif.classList.remove('fade2');
    gif.classList.add('fade');
    return j = false;
   } else {
    gif.classList.remove('fade');
    gif.classList.add('fade2');
    return j = true;
   }
})
