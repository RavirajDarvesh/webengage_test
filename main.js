
const ls = localStorage;
const arr= [1,4,5699,7777];
ls.setItem("data", arr);
const data= ls.getItem("data");
const parsed = data.split(",");

const newdata = parsed.map((i)=>{
    return i;
});

console.log(newdata);


