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

function loadQuestion(){

const q = questions[currentQuestion];

document.getElementById("question-container").innerHTML =
`
<img src="${q.image}" style="width:100%">
<h2>${q.question}</h2>

<button onclick="answerQuestion(0)">
${q.answers[0].text}
</button>

<button onclick="answerQuestion(1)">
${q.answers[1].text}
</button>

<button onclick="answerQuestion(2)">
${q.answers[2].text}
</button>
`;
}

function answerQuestion(index){

currentQuestion++;

if(currentQuestion < questions.length){

loadQuestion();

}else{

document.getElementById("question-container").innerHTML =
"<h1>نجح الاختبار</h1>";

}

}

loadQuestion();
