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
image:"images/B5C20064-5633-4859-8277-41224BD32335.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"القناع + الشمعة",type:"symbolic"},
{text:"الدرج + الشمعة",type:"builder"},
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
image:"images/3837A93E-B92B-4DA9-A6DD-D59415288121.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"الطفل + المظلة",type:"human"},
{text:"المظلة + الأرجوحة",type:"builder"},
{text:"الطفل + الأرجوحة",type:"explorer"}
]
},

{
image:"images/108E05AF-A09E-4DB1-A9D8-40D38EBA0308.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"القفص + المفتاح",type:"symbolic"},
{text:"المفتاح + النافذة",type:"explorer"},
{text:"القفص + النافذة",type:"builder"}
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
<img src="${q.image}" style="width:100%;border-radius:12px;margin-bottom:20px;">

<h2>${q.question}</h2>

<button class="choice" onclick="selectAnswer('${q.answers[0].type}')">
${q.answers[0].text}
</button>

<button class="choice" onclick="selectAnswer('${q.answers[1].type}')">
${q.answers[1].text}
</button>

<button class="choice" onclick="selectAnswer('${q.answers[2].type}')">
${q.answers[2].text}
</button>
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

let winner = Object.keys(scores).reduce(
(a,b)=>scores[a] > scores[b] ? a : b
);

let resultHTML = "";

if(winner === "symbolic"){

resultHTML = `
<h1>النمط الرمزي</h1>

<p>
أنت ترى المعاني الخفية والرموز والعلاقات العميقة بين الأشياء.
تميل إلى التأمل والتفسير أكثر من الملاحظة المباشرة.
</p>
`;

}

if(winner === "builder"){

resultHTML = `
<h1>النمط البنائي</h1>

<p>
تميل إلى رؤية البنية والمنطق والنظام.
تركز على كيفية عمل الأشياء وترابطها العملي.
</p>
`;

}

if(winner === "explorer"){

resultHTML = `
<h1>النمط الاستكشافي</h1>

<p>
تميل لاكتشاف الاحتمالات والفرص والطرق الجديدة.
عقلك يبحث دائماً عن المجهول والروابط غير المتوقعة.
</p>
`;

}

if(winner === "human"){

resultHTML = `
<h1>النمط الإنساني</h1>

<p>
تركز على الإنسان والمشاعر والتجارب الإنسانية.
غالباً ترى الأشخاص قبل الأشياء.
</p>
`;

}

container.innerHTML = resultHTML;

}

loadQuestion();
