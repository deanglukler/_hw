const da = Array(55).join('-');
function cd() {console.log(da)}
function c(i, d){if(d)console.log(da+'\n'+i+'\n'+da); else console.log(i);}
function cc(desc, arg, d){
  if(d) cd()
  console.log(desc);console.log('typeof: ', typeof arg);console.dir(arg);
  if(d) cd()
}