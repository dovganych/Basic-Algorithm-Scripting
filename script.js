function reverseString(str) {
  return str.split('').reverse().join('');
}
function factorialize(num) {
  if(num === 0) { return 1;}
  return num *= factorialize(num-1);
}
function palindrome(str) {
  return str.toLowerCase().replace(/[\W_]/g,'') === 
    str.toLowerCase().replace(/[\W_]/g,'').split('').reverse().join('');
}
function findLongestWord(str) {
	var arr = str.split(' ');
	var max = arr[0].length;
	  	for(var i = 1; i < arr.length; i++){
	  		if(max < arr[i].length){
	  			max = arr[i].length;
	  		}
	  	}
	return max;
}
function findLongestWord_v2(str) {
	return str.split(' ').
      	reduce(function(last,current){
         	return Math.max(last,current.length);
          	},0);
}
function titleCase(str) {
  var arr = str.toLowerCase().split(' ');
  var result = arr.map(function(item){
    return item.replace(item.charAt(0),item.charAt(0).toUpperCase());
  });
  return result.join(' ');
}
function largestOfFour(arr) {
	return arr.map(function(item){
    	return item.reduce(function(previos,current){
       		return (current > previos) ? current : previos;
     	});
  	});
}
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}
function repeatStringNumTimes(str, num) {
  if(num < 1) { return '';}
  if(num === 1) { return str;}
  return str + repeatStringNumTimes(str, num-1);
}
function truncateString(str, num) {
  if(str.length <= num) {return str;}
  return str.substr(0,num > 3 ? num-3 : num)+'...';
}
function chunkArrayInGroups(arr, size) {
  var array = [],i = 0;
  while(i < arr.length){
    array.push(arr.slice(i,i+size));
    i += size;
  }
  return array;
}
function slasher(arr, howMany) {
  return arr.splice(howMany);
}
function mutation(arr) {
	for(var i = 0; i < arr[1].length; i++){
		if(arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1){
			return false;
		}
	}
	return true;
}
function mutation_v2(arr) {
   return arr[1].toLowerCase().
     split('').
       every(function(item){
     return arr[0].toLowerCase().
       indexOf(item) !== -1;
   });
}
function bouncer(arr) {
  return arr.filter(Boolean);
}
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  return arr.filter(function(item){
    for(var i = 1; i< args.length; i++){
      if(item === args[i]) return false;
    }
    return true;
  });
}
function getIndexToIns(arr, num) {
  return arr.concat(num).sort(function(a,b){
    return a > b;
    }).indexOf(num);
}
function rot13(str) { // LBH QVQ VG!
  return str.split('').map(function(item){
    if( /[A-M]/.test(item)){
      return String.fromCharCode(item.charCodeAt(0)+13);
    }
    else if( /[N-Z]/.test(item)){
      return String.fromCharCode(item.charCodeAt(0)-13);
    }
    else { return item;}
  }).join('');
}