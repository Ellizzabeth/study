let m;
let n;

function isInt(s){
    return /^-?[0-9]+$/.test(s);
}

do {
  str = prompt('введіть ціле число m більше 0');
  if (!isInt(str)) {alert('число має бути цілим__');continue;}
  m = parseInt(str);
  if (m <= 0) {alert("m має бути більше 0");continue;}
  break;
}
while(true);

do {
  str = prompt('введіть ціле число n більше ' + m);
  if (!isInt(str)) {alert('число має бути цілим__');continue;}
  n = parseInt(str);
  if (n <= m) {alert("n має бути більше " + m);continue;}
  break;
}
while(true);
alert("m = " + m + "; n = " + n);

mult = 1;
for (i = m; i <= n; ++i) {
   if (i%2) mult *= i; 
}
alert(mult);
