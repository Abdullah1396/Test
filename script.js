const questions = [

{
image:"q1.jpg",
question:"أي رابط ظهر في ذهنك أولاً؟",

answers:[
{text:"الشجرة + المفتاح",type:"A"},
{text:"الشجرة + القفص",type:"B"},
{text:"المفتاح + القفص",type:"C"}
]
}

];

let currentQuestion=0;

let scores={
A:0,
B:0,
C:0
};

const container =
document.getElementById("question-container");

function loadQuestion(){

const q=questions[currentQuestion];

container.innerHTML=`

<img src="${q.image}">

<h2>${q.question}</h2>

${q.answers.map(answer=>`

<div class="choice"
onclick="selectAnswer('${answer.type}')">

${answer.text}

</div>

`).join("")}

`;

}

function selectAnswer(type){

scores[type]++;

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}

else{

showResult();

}

}

function showResult(){

let resultType="A";

if(scores.B>scores.A &&
scores.B>scores.C){

resultType="B";

}

if(scores.C>scores.A &&
scores.C>scores.B){

resultType="C";

}

let text="";

if(resultType==="A"){
text="النمط الرمزي";
}

if(resultType==="B"){
text="النمط التحليلي";
}

if(resultType==="C"){
text="النمط السياقي";
}

container.innerHTML="";

document.getElementById("nextBtn").style.display="none";

document.getElementById("result").innerHTML=

`<h1>${text}</h1>`;

}

loadQuestion();
