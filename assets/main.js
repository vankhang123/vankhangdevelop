
const swiperEl = document.querySelector('.mySwiper');
const swiperParams = {
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1.5, 
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4, 
    } 
  },
  scrollbar: false,
  navigation: true,
  pagination:false,
  keyboard: {
    enabled:true,
},
on: {
  init() {
    // ...
  },
},
};

    
Object.assign(swiperEl, swiperParams);
const swiperEl2 = document.querySelector('.mySwiper2');
const swiperParams2 = {
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 6,
    } 
  },
  navigation: true,
  pagination:false, 
  scrollbar: false,
  keyboard: {
    enabled:true,
    onlyInViewport:false,
  },
  on: { 
    init() {
      // ...
    },
  },
};
Object.assign(swiperEl2, swiperParams2);
const swiperEl3 = document.querySelector('.mySwiper3');
const swiperParams3 = {
  slidesPerView: 1,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el:'.lockClass',
    type:'bullets',
    },
    keyboard: {
      enabled:true,
      onlyInViewport:false,
    },
  on: {
    init() {
      // ...
    },
  },
};
Object.assign(swiperEl3, swiperParams3);  
// boolean
var myObject = {
   name: 'son dang ',
   age :1 ,
  adress:"ha noi",
  myFunction:function () {

  }
};
var age;
var myArray =[
  'javascript',
  'PHP',
  'Ruby'    
];
var result =  'A' || 'B' || 'C';

var language = 'JavaScript';

var lanuage = [
'javascript', 
'php',
'ruby',
'Dart'  
];
console.log(lanuage.shift());
console.log(lanuage)
function writelog() {
  var myString = '';
  for (var param of arguments) {
      myString +=`${param} -`
  }
  console.log(myString);
}   
writelog('log 1','log 2','log 3');
function cong(a , b){
  return a.toString() + b.toString();   
}
var result  = cong (2 , 8);
console.log(result);
function showMessage() {
  console.log('declaration function');
}

var showmesage2 = function() {
  console.log('expression function');
}
// function  --> phương thức /method
// others  --> thuộc tính/property
showmesage2();
var emailKey = 'email';
var  myInfo = {
  name:'Son Dang',
  age:18,
  address:'Ha Noi,VN',
  [emailKey]:'nguyenkhang34798@gmail.com',
   getName :function() {
    return this.name;   
   }
};
console.log(myInfo.getName());
// object constructor
function User(firstName, lastName , avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
}
User.prototype.className = 'F8';
User.prototype.getClassName = function() {
  return this.className;
} 
var author = new User('Sơn', 'Đặng', 'Avatar');
var user = new User('Vũ','Nguyễn','Avatar');
author.title = 'chia se dao  tại  F8';
user.comment ='liệu có khóa asp.net k ad';
console.log(author.getName());
console.log(user.getName());
// object prototype -basic
// đối tượng Date
  var date = new Date();
 var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate(); 
 console.log(`${day}/${month}/${year}`); 
  // cau lệnh rẽ nhánh-If else
 var date = 9 ;
 switch(date) {
  case 2: 
  console.log('hôm nay là thứ 2 ');
  break;
  case 3: 
  console.log('hôm nay là thứ 3 ');
  break;
  case 4: 
  console.log('hôm nay là thứ 4 ');
  break;
  case 5: 
  console.log('hôm nay là thứ 5 ');
  break;
  default:
    console.log('không biết');
 
 }
//  toán tử  3 ngôi - ternary operator
var i = 0 ;
for(; i <= 1000;) {
  i++;  
  console.log(i);
}
var myInfo = {
  name:'son dang',
  age: 18,
  address:'ha noi ,VN' 
};
for(var key  in myInfo) {
  console.log(myInfo[key]);
}
var language = [
  'javascript',
  'php',  
  'ruby',
  'java'
];
for( var key in language ) {
 
}