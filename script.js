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
image:"images/108E05AF-A09E-4DB1-A9D8-40D38EBA0308.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"المرآة + الكتاب",type:"human"},
{text:"الكتاب + الباب",type:"explorer"},
{text:"المرآة + الباب",type:"symbolic"}
]
},

{
image:"images/B5C20064-5633-4859-8277-41224BD32335.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"الطفل + المظلة",type:"human"},
{text:"المظلة + الأرجوحة",type:"builder"},
{text:"الطفل + الأرجوحة",type:"symbolic"}
]
},

{
image:"images/EE394658-227B-45D9-9191-4702BB0F9C2B.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"القفص + المفتاح",type:"builder"},
{text:"المفتاح + النافذة",type:"explorer"},
{text:"القفص + النافذة",type:"symbolic"}
]
},

{
image:"images/17B21646-A7B8-416D-9582-1396FC95872D.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"الحقيبة + الفانوس",type:"explorer"},
{text:"الفانوس + الكرسي",type:"builder"},
{text:"الحقيبة + الكرسي",type:"human"}
]
},

{
image:"images/2DCE45C1-BEC4-449B-8D6D-5940E212F8CB.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"القناع + الشمعة",type:"human"},
{text:"الشمعة + الدرج",type:"explorer"},
{text:"القناع + الدرج",type:"symbolic"}
]
},

{
image:"images/3837A93E-B92B-4DA9-A6DD-D59415288121.png",
question:"أي رابط ظهر في ذهنك أولاً؟",
answers:[
{text:"الشخص + الجسر",type:"builder"},
{text:"الجسر + الضباب",type:"explorer"},
{text:"الشخص + الضباب",type:"symbolic"}
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

const container = document.getElementById("question-container");
const result = document.getElementById("result");

function loadQuestion(){

const q = questions[currentQuestion];

const progress =
(currentQuestion / questions.length) * 100;

container.innerHTML = `
<div class="progress">
<div class="progress-fill"
style="width:${progress}%"></div>
</div>

<h3>
السؤال ${currentQuestion + 1}
من
${questions.length}
</h3>

<img src="${q.image}">

<h2>${q.question}</h2>

${q.answers.map(answer => `
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

container.innerHTML = `

const winner =
Object.keys(scores).reduce(
(a,b)=>scores[a] > scores[b] ? a : b
);

let title = "";
let desc = "";

if(winner==="builder"){
title="🔧 النمط البنائي";
desc="تميل إلى رؤية البنية والمنطق والنظام. تركز على كيفية عمل الأشياء وترابطها العملي.";
}

if(winner==="explorer"){
title="🧭 النمط الاستكشافي";
desc="تنجذب للمجهول والاحتمالات والطرق الجديدة. تبحث دائماً عما وراء الصورة الظاهرة.";
}

if(winner==="human"){
title="❤️ النمط الإنساني";
desc="ترى العلاقات البشرية والمشاعر والدوافع قبل التفاصيل الأخرى.";
}

if(winner==="symbolic"){
title="🜂 النمط الرمزي";
desc="تميل لربط الأشياء بالمعاني العميقة والرموز والاستعارات أكثر من الواقع المباشر.";
}

const total = questions.length;

const builderP = Math.round((scores.builder / total) * 100);
const explorerP = Math.round((scores.explorer / total) * 100);
const humanP = Math.round((scores.human / total) * 100);
const symbolicP = Math.round((scores.symbolic / total) * 100);

result.innerHTML = `
<div class="result-card">

<h1>${title}</h1>

<p>${desc}</p>

<hr>

<h3>ملفك المعرفي</h3>

<div class="score-row">
🔧 البنائي ${builderP}%
<div class="score-bar">
<div class="score-fill" style="width:${builderP}%"></div>
</div>
</div>

<div class="score-row">
🧭 الاستكشافي ${explorerP}%
<div class="score-bar">
<div class="score-fill" style="width:${explorerP}%"></div>
</div>
</div>

<div class="score-row">
❤️ الإنساني ${humanP}%
<div class="score-bar">
<div class="score-fill" style="width:${humanP}%"></div>
</div>
</div>

<div class="score-row">
🜂 الرمزي ${symbolicP}%
<div class="score-bar">
<div class="score-fill" style="width:${symbolicP}%"></div>
</div>
</div>

<hr>

<button onclick="shareWhatsApp()">
🟢 مشاركة عبر واتساب
</button>

<button onclick="copyLink()">
🔗 نسخ الرابط
</button>

<button onclick="location.reload()">
🔄 إعادة الاختبار
</button>

<hr>

<p>
هذه النتيجة تعكس الطريقة التي يميل بها عقلك
إلى بناء المعنى والعلاقات بين الأشياء،
وليست مقياساً للذكاء أو القدرات العقلية.
</p>

</div>
`;

}

function shareWhatsApp(){

const text =
"🧠 نتيجة اختبار نمط الإدراك المعرفي\n\n" +
document.querySelector(".result-card h1").innerText +
"\n\n" +
window.location.href;

window.open(
"https://wa.me/?text=" +
encodeURIComponent(text)
);

}

function copyLink(){

navigator.clipboard.writeText(
window.location.href
);

alert("تم نسخ الرابط");

}

loadQuestion();
