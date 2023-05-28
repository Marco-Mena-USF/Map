new Set([1,1,2,2,3,4])

// 1,2,3,4

// [...new Set("referee")].join("")
//'ref'

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

//0:{array(3) => true} 1: {array(3)=> false}

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false


const hasDuplicate = arr => new Set(arr).size !== arr.length 


vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(char){
    return "aeiou".includes(char);
  }
  
function vowelCount(str){
const vowel=new Map();for(let char of str){
let lowerCaseChar=char.toLowerCase()
if(isVowel(lowerCaseChar)){
if(vowel.has(lowerCaseChar)){vowel.set(lowerCaseChar,vowel.get(lowerCaseChar)+1);
} else {vowel.set(lowerCaseChar,1);
}
}
}
return vowel;
}