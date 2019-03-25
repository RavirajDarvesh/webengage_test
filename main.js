
const ls = localStorage;

const arr= [];
arr.push();
ls.setItem("data", arr);
const data= ls.getItem("data");
const parsed = data.split(",");

const newdata = parsed.map((i)=>{
    return console.log(i);
});



