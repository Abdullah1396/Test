const questions = [
{
image:"images/5451F0F6-D7AA-41A7-ACA4-27103043D6F8.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"الشجرة + القفص",type:"human"},
{text:"القفص + المفتاح",type:"symbolic"},
{text:"الشجرة + المفتاح",type:"explorer"}
]
},
{
image:"images/4CB438D8-2975-4F57-9CE3-8638610012E8.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"الساعة + الشمعة",type:"builder"},
{text:"الشمعة + الجنازة",type:"symbolic"},
{text:"الساعة + الجنازة",type:"human"}
]
}
];

let currentQuestion = 0;

let scores = {
builder:0,
explorer:0,
human:0,
symbolic:0
};

const container =
document.getElementById("question-container");

function loadQuestion(){

const q = questions[currentQuestion];

container.innerHTML = `
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

if(currentQuestion < questions.length){
loadQuestion();
}else{
showResult();
}

}

function showResult(){

let result = Object.keys(scores)
.reduce((a,b)=>scores[a]>scores[b]?a:b);

let title = "";

if(result==="builder") title="النمط البنائي";
if(result==="explorer") title="النمط الاستكشافي";
if(result==="human") title="النمط الإنساني";
if(result==="symbolic") title="النمط الرمزي";

container.innerHTML = `
<h1>${title}</h1>
`;
}

loadQuestion();
