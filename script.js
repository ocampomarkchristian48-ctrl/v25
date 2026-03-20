function shuffle(arr){
return arr.sort(()=>0.5-Math.random());
}

let allQuestions={

prob:[
{q:"Probability of heads?",a:["1/2","1/3","1/4","1"],c:0},
{q:"Rolling 6?",a:["1/6","1/2","1/3","1"],c:0},
{q:"Certain event?",a:["1","0","2","3"],c:0},
{q:"Impossible event?",a:["0","1","2","3"],c:0},
{q:"Range?",a:["0-1","1-10","0-10","-1-1"],c:0},
{q:"Half?",a:["0.25","0.5","1","2"],c:1},
{q:"Chance?",a:["Probability","Mass","Time","Speed"],c:0},
{q:"Random?",a:["Unpredictable","Fixed","Same","None"],c:0},
{q:"0 means?",a:["Impossible","Certain","Half","None"],c:0},
{q:"1 means?",a:["Certain","Impossible","Half","None"],c:0},
{q:"Fair coin?",a:["Equal","Not equal","Heavy","None"],c:0},
{q:"Dice sides?",a:["6","5","4","3"],c:0},
{q:"Even?",a:["2,4,6","1,3,5","All","None"],c:0},
{q:"Odd?",a:["1,3,5","2,4,6","All","None"],c:0},
{q:"Event?",a:["Outcome","Color","Shape","None"],c:0},
{q:"Outcome?",a:["Result","Color","Mass","None"],c:0},
{q:"Sample space?",a:["All outcomes","One","Half","None"],c:0},
{q:"Experiment?",a:["Test","Food","Water","Air"],c:0},
{q:"Chance value?",a:["0-1","0-10","1-100","None"],c:0},
{q:"Probability symbol?",a:["P","Q","R","S"],c:0}
],

group:[
{q:"Closure?",a:["Yes","No","None","All"],c:0},
{q:"Identity?",a:["Exists","None","All","Half"],c:0},
{q:"Inverse?",a:["Yes","No","None","All"],c:0},
{q:"Associative?",a:["Yes","No","Half","None"],c:0},
{q:"Element?",a:["Member","Color","Shape","None"],c:0},
{q:"Operation?",a:["Rule","Food","Time","None"],c:0},
{q:"Binary?",a:["2 inputs","1","3","None"],c:0},
{q:"Abelian?",a:["Commutative","Not","Half","None"],c:0},
{q:"Commutative?",a:["a+b=b+a","a-b=b-a","None","All"],c:0},
{q:"Neutral?",a:["Identity","Zero","All","None"],c:0},
{q:"Subgroup?",a:["Part","Whole","None","All"],c:0},
{q:"Finite?",a:["Limited","Infinite","None","All"],c:0},
{q:"Infinite?",a:["Unlimited","Limited","None","All"],c:0},
{q:"Order?",a:["Size","Color","Shape","None"],c:0},
{q:"Group example?",a:["Integers","Food","Color","None"],c:0},
{q:"Set?",a:["Collection","Food","Air","None"],c:0},
{q:"Rule?",a:["Operation","Food","Air","None"],c:0},
{q:"Closure rule?",a:["Inside","Outside","None","All"],c:0},
{q:"Inverse?",a:["Undo","Add","Multiply","None"],c:0},
{q:"Group needs?",a:["4 properties","1","2","3"],c:0}
],

pred:[
{q:"P→P?",a:["True","False","None","All"],c:0},
{q:"NOT True?",a:["False","True","None","All"],c:0},
{q:"AND?",a:["Both true","One","None","All"],c:0},
{q:"OR?",a:["At least one","None","Both false","All"],c:0},
{q:"Implication?",a:["If then","And","Or","None"],c:0},
{q:"Predicate?",a:["Statement","Number","Shape","None"],c:0},
{q:"Variable?",a:["x,y","Color","Shape","None"],c:0},
{q:"Domain?",a:["Set","Color","Shape","None"],c:0},
{q:"Quantifier?",a:["All/Some","None","All","Half"],c:0},
{q:"∀ ?",a:["All","Some","None","Half"],c:0},
{q:"∃ ?",a:["Exists","All","None","Half"],c:0},
{q:"Statement?",a:["True/False","None","All","Half"],c:0},
{q:"Compound?",a:["Combined","Single","None","All"],c:0},
{q:"Truth?",a:["Value","Color","Shape","None"],c:0},
{q:"False?",a:["Not true","True","None","All"],c:0},
{q:"Expression?",a:["Logic","Food","Air","None"],c:0},
{q:"Conclusion?",a:["Result","Start","None","All"],c:0},
{q:"Logic?",a:["Reason","Food","Air","None"],c:0},
{q:"Symbol?",a:["Letter","Food","Air","None"],c:0},
{q:"Table?",a:["Truth table","Food","Air","None"],c:0}
],

count:[
{q:"2! ?",a:["2","1","3","4"],c:0},
{q:"3! ?",a:["6","5","7","8"],c:0},
{q:"4! ?",a:["24","20","30","36"],c:0},
{q:"5! ?",a:["120","100","110","130"],c:0},
{q:"Permutation?",a:["Order matters","No order","None","All"],c:0},
{q:"Combination?",a:["No order","Order","None","All"],c:0},
{q:"nPr?",a:["Permutation","Combination","None","All"],c:0},
{q:"nCr?",a:["Combination","Permutation","None","All"],c:0},
{q:"0! ?",a:["1","0","None","All"],c:0},
{q:"Factorial?",a:["Multiply","Add","None","All"],c:0},
{q:"Counting?",a:["Total","None","All","Half"],c:0},
{q:"Arrangement?",a:["Order","None","All","Half"],c:0},
{q:"Selection?",a:["Choose","None","All","Half"],c:0},
{q:"Repeat?",a:["Allowed","None","All","Half"],c:0},
{q:"No repeat?",a:["Not allowed","None","All","Half"],c:0},
{q:"Multiply rule?",a:["Yes","No","None","All"],c:0},
{q:"Add rule?",a:["Yes","No","None","All"],c:0},
{q:"Objects?",a:["Things","None","All","Half"],c:0},
{q:"Formula?",a:["Rule","None","All","Half"],c:0},
{q:"Tree diagram?",a:["Visual","None","All","Half"],c:0}
]

};

let current=[],index=0,score=0,done=0,player="",currentTopicElement=null;

function startGame(){
player=document.getElementById("name").value;
if(player==="") return alert("Enter name");

document.getElementById("start").classList.add("hidden");
document.getElementById("desc").classList.remove("hidden");
}

function showTopics(){
document.getElementById("desc").classList.add("hidden");
document.getElementById("topics").classList.remove("hidden");
}

function playTopic(t,el){
if(el.classList.contains("done")) return;

currentTopicElement=el;
current=shuffle([...allQuestions[t]]).slice(0,5);
index=0;

document.getElementById("topics").classList.add("hidden");
document.getElementById("quiz").classList.remove("hidden");

show();
}

function show(){
let q=current[index];
document.getElementById("question").innerText=q.q;

let html="";
q.a.forEach((a,i)=>{
html+=`<div class="answerBtn" onclick="ans(${i})">${a}</div>`;
});
document.getElementById("answers").innerHTML=html;
}

function ans(i){
if(i===current[index].c) score++;

index++;

if(index<5){
show();
}else{
currentTopicElement.classList.add("done");
done++;

document.getElementById("quiz").classList.add("hidden");
document.getElementById("topics").classList.remove("hidden");

if(done===4) finish();
}
}

function finish(){
let percent=(score/20)*100;

document.getElementById("topics").classList.add("hidden");
document.getElementById("result").classList.remove("hidden");

document.getElementById("final").innerText=
player+" Score: "+score+"/20 ("+percent+"%) "+(percent>=70?"PASSED 🎉":"FAILED ❌");
}
