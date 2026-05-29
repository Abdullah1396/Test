function showResult(){

const maxScore = Math.max(
scores.builder,
scores.explorer,
scores.human,
scores.symbolic
);

const winners = [];

for (const type in scores){
if(scores[type] === maxScore){
winners.push(type);
}
}

let title = "";

if(winners.length > 1){

title = "نمط مختلط: ";

if(winners.includes("builder"))
title += "البنائي ";

if(winners.includes("explorer"))
title += "الاستكشافي ";

if(winners.includes("human"))
title += "الإنساني ";

if(winners.includes("symbolic"))
title += "الرمزي ";

}else{

const result = winners[0];

if(result==="builder")
title="النمط البنائي";

if(result==="explorer")
title="النمط الاستكشافي";

if(result==="human")
title="النمط الإنساني";

if(result==="symbolic")
title="النمط الرمزي";

}

container.innerHTML = `
<h1>${title}</h1>
`;
}
