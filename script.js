// Questions ans answer store
let questions = [
	{
		Question: "Full From Of HTML ?",
		correctAnswer: "HyperText MarkUp Language",
		randomAnswer1: "HT Language",
		randomAnswer2: "Hype or Text Language",
		randomAnswer3: "Nothing From Here",
	},
	{
		Question: "Full From Of CSS ?",
		correctAnswer: "Cascading Style Sheets",
		randomAnswer1: "Cas ceding sheet style",
		randomAnswer2: "Style sheet web",
		randomAnswer3: "Cash Cading sheet",
	},
	{
		Question: "Full From Of JS",
		correctAnswer: "Java Script",
		randomAnswer1: "JavaS",
		randomAnswer2: "Java",
		randomAnswer3: "Java Source",
	},
	{
		Question: "What Is Computer Coding ?",
		correctAnswer: "Telling a computer what to do",
		randomAnswer1: "A List of functions",
		randomAnswer2: "A TV show",
		randomAnswer3: "A Radio Show",
	},
	{
		Question: "How amny types of window does python use ?",
		correctAnswer: "two",
		randomAnswer1: "five",
		randomAnswer2: "one",
		randomAnswer3: "four",
	},
	{
		Question: "What is the first name of java Script ?",
		correctAnswer: "Mocha",
		randomAnswer1: "LiveScript",
		randomAnswer2: "Java",
		randomAnswer3: "Nothing From Here"
	},

	{
		Question: "Who is the inventor of java Script ?",
		correctAnswer: "Brendan Eich ",
		randomAnswer1: "Roborto",
		randomAnswer2: "Haslaey",
		randomAnswer3: "Pulami"
	},
		{
		Question: "In which year JavaScript was invented ?",
		correctAnswer: "1995",
		randomAnswer1: "1997",
		randomAnswer2: "1998",
		randomAnswer3: "1990"
	},
	{
		Question: "The Way Of Create Function In JavaScript?",
		correctAnswer: "function var_name(){}",
		randomAnswer1: 'var_name()function{}',
		randomAnswer2: 'function{}var_name()',
		randomAnswer3: "func var_name(){}"
	}
];
let flag = 0;
let option  = document.querySelectorAll("option");
const id = 'correct';
let correct_Ans = 0;
let incorrect_Ans = 0;
function randomVal(){
	for(let i of option){
		i.removeAttribute("id" , "correct")
		i.innerHTML = ""
	}

	randomOption = Math.floor(Math.random() * 4);
	option[randomOption].setAttribute("id", id);
	for(let i of option){
		i.style.border = '1px solid lightgrey'
		if(i.id == ""){
			let incorrect_div = [i];
			for(let j of incorrect_div){
				j.classList.add("ans_list")
			}
		}
	}
	correct.removeAttribute("class","ans_list")
	correct.innerHTML = questions[flag].correctAnswer;

}
randomVal()

// randomVal()

// Quiz app variables
let current_question = document.querySelector(".current_question");

let totalQuestion = questions.length;
let next_btn = document.querySelector(".next_btn");
let timer = 30;
let duration = 1000;
main()
let questionsContainer = document.querySelector(".questionsContainer")
let resultContainer = document.querySelector(".resultContainer")

// If next button is click show another question and set time
next_btn.addEventListener("click" , () => {
	for(let i of option){
		i.removeAttribute("disabled", "");
		i.style.cursor = 'pointer'
	}
	if(flag != questions.length - 1){
	timer = 30;
	flag++;
	randomVal();
	main();
	}
	else{
		setTimeout(() => {
			questionsContainer.style.display = 'none';
			resultContainer.style.display = 'flex';
			result_display.innerHTML =  `${correct_Ans} is correctAnswer ${incorrect_Ans} is incorrect out of ${totalQuestion}`
			if(correct_Ans <= questions.length-3){
				satisfaction.innerHTML = "Poor";
			}
			else if(correct_Ans == questions.length-1){
				satisfaction.innerHTML = "Excellent"
			}
		}, 1000)
		
	}
})

function main(){
let ans_list = document.querySelectorAll(".ans_list");
question.innerHTML = questions[flag].Question;
current_question.innerHTML =`${flag + 1} / ${totalQuestion}`;
correct.innerHTML = questions[flag].correctAnswer;
ans_list[0].innerHTML = questions[flag].randomAnswer1;
ans_list[1].innerHTML = questions[flag].randomAnswer2;
ans_list[2].innerHTML = questions[flag].randomAnswer3;
}


// For Time Interval
setInterval(() => {
	timer--;
	time.innerHTML = timer;
	if(timer == 0){
		try{
		flag ++;
		randomVal()
		main()

		timer = 30;
		}
		catch(a){
			alert("")
			return;
		}
		
	}
}, duration)

// Validate The Correct Answer
for(let i of option){
	i.addEventListener("click" , function(){
		for(let j of option){
			j.setAttribute("disabled", "")
			j.style.cursor = 'default';
		}
		if(this.innerHTML == questions[flag].correctAnswer){
			this.style.border = "1px solid #118a1f"
			correct_Ans++;
		}
		else{
			this.style.border = "1px solid red";
			incorrect_Ans++;
		}
	})


}




startAgain.addEventListener('click', () => {
	location.reload()
})


