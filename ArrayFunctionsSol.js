const data = require('./worksheet');

const names = data.map(x=> x.name);
console.log('map#1',names);
const heights = data.map(x=> x.height);
console.log('map#2',heights);
const nameheights = data.map(sel);
function sel(myObj){
    return {name: myObj.name, height: myObj.height}	}
console.log('map#3',nameheights);
const fnames = data.map(x=> x.name.split(" ").slice(0,1));
console.log('map#4',fnames);
const tmass = data.map(x=>x.mass).reduce((x,y)=>x+y);
console.log('reduce#1',tmass);
const theight = data.map(x=>x.height).reduce((x,y)=>x+y);
console.log('reduce#2',theight);
const charcount = data.map(x=>x.name+" "+(x.name.length-1));//-1 to compensate for space char betw first & last name 
console.log('reduce#3',charcount);
const eyecount = {blue:data.map(x=>x.eye_color).filter(x=>x=="blue").length,
yellow:data.map(x=>x.eye_color).filter(x=>x=="yellow").length,
brown:data.map(x=>x.eye_color).filter(x=>x=="brown").length
};
console.log('reduce#4',eyecount);
const bigmass = data.filter(x=>x.mass>100);
console.log("filter#1",bigmass);
const height = data.filter(x=>x.height<200);
console.log("filter#2",height);
const male = data.filter(x=>x.gender=='male');
console.log("filter#3",male);
const female = data.filter(x=>x.gender=='female');
console.log("filter#4",female);
const sortmass = data.sort((a,b)=>a.mass-b.mass);
console.log("sort#1",sortmass);
const sortheight = data.sort((a,b)=>a.height-b.height);
console.log("sort#2",sortheight);
const sortname = data.sort(function(a, b) {
    let nameA = a.name.toUpperCase(); // ignore upper and lowercase
    let nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
console.log("sort#3",sortname);
const sortgender = data.sort(function(a, b) {
    let nameA = a.gender.toUpperCase(); // ignore upper and lowercase
    let nameB = b.gender.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
console.log("sort#4",sortgender);
const everychar = data.every(x=>x.eye_color=='blue');
console.log('every#1',everychar);
const everymass = data.every(x=>x.mass>40);
console.log('every#2',everymass);
const everyheight = data.every(x=>x.height<200);
console.log('every#3',everyheight);
const everygen = data.every(x=>x.genderr=='male');
console.log('every#4',everygen);
const somecheck=data.some(x=>x.gender=='male');
console.log('some#1',somecheck);
const someblue=data.some(x=>x.eye_color=='blue');
console.log('some#2',someblue);
const someheight=data.some(x=>x.height>210);
console.log('some#3',someheight);
const somemass=data.some(x=>x.mass<50);
console.log('some#4',somemass);

