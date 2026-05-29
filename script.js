const questions = [

{
image:"images/108E05AF-A09E-4DB1-A9D8-40D38EBA0308.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"القفص + المفتاح",type:"symbolic"},
{text:"المفتاح + النافذة",type:"explorer"},
{text:"القفص + النافذة",type:"builder"}
]
},

{
image:"images/17B21646-A7B8-416D-9582-1396FC95872D.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"المرآة + الكتاب",type:"symbolic"},
{text:"الكتاب + الباب",type:"builder"},
{text:"المرآة + الباب",type:"explorer"}
]
},

{
image:"images/2DCE45C1-BEC4-449B-8D6D-5940E212F8CB.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"الحقيبة + الفانوس",type:"explorer"},
{text:"الفانوس + الكرسي",type:"symbolic"},
{text:"الحقيبة + الكرسي",type:"builder"}
]
},

{
image:"images/3837A93E-B92B-4DA9-A6DD-D59415288121.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"الطفل + المظلة",type:"human"},
{text:"المظلة + الأرجوحة",type:"builder"},
{text:"الطفل + الأرجوحة",type:"explorer"}
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
},

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
image:"images/B5C20064-5633-4859-8277-41224BD32335.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"القناع + الشمعة",type:"symbolic"},
{text:"الشمعة + الدرج",type:"human"},
{text:"القناع + الدرج",type:"explorer"}
]
},

{
image:"images/EE394658-227B-45D9-9191-4702BB0F9C2B.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"الشخص + الجسر",type:"human"},
{text:"الجسر + الضباب",type:"builder"},
{text:"الشخص + الضباب",type:"explorer"}
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

container.innerHTML =  <img src="${q.image}">  <h2>${q.question}</h2>  ${q.answers.map(answer =>

<div class="choice"
onclick="selectAnswer('${answer.type}')">

${answer.text}

</div>

).join("")}  ;

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

let result =
Object.keys(scores).reduce((a,b)=>
scores[a] > scores[b] ? a : b
);

let title = "";
let description = "";

if(result==="builder"){
title="النمط البنائي";
description="أنت تميل لرؤية الأنظمة والعلاقات المنطقية والبنية الكامنة خلف الأشياء.";
}

if(result==="explorer"){
title="النمط الاستكشافي";
description="أنت مدفوع بالفضول واكتشاف الاحتمالات والمسارات الجديدة.";
}

if(result==="human"){
title="النمط الإنساني";
description="أنت ترى العالم من خلال الأشخاص والمشاعر والتجارب الإنسانية.";
}

if(result==="symbolic"){
title="النمط الرمزي";
description="أنت تميل إلى قراءة المعاني الخفية والرموز والاستعارات وراء الأشياء.";
}

container.innerHTML = "";

document.getElementById("nextBtn").style.display="none";

document.getElementById("result").innerHTML = <h1>${title}</h1> <p>${description}</p>;

}

loadQues
