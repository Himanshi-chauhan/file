var questions = ["what is your name ?","what is your hobby ?","what is your fav  programing language ?"];
var answer = [];
function ask (i)
{
	process.stdout.write(`\n\n\n\n ${questions[i]}`);
	process.stdout.write("  >  ");
}
process.stdin.on('data',function(data){
	/* process.stdout.write('\n' + data.toString().trim() + '\n'); */
	answer.push(data.toString().trim());
	if(answer.length < questions.length){
		ask(answer.length);
	}
	else{
		process.exit();
	}		  
});
process.on('exit',function(){
	process.stdout.write("\n\n\n\n");
	process.stdout.write(`Go ${answer[1]} ${answer[0]} you can finish writing ${answer[2]} later`);
	process.stdout.write("\n\n\n\n");
	
	
});
ask(0);

    /* process.stdout.write("heloo-");
	process.stdout.write("world \n\n\n\n"); */