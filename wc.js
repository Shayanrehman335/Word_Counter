import inquirer from "inquirer";
let user_ans = await inquirer.prompt({
    type: "input",
    name: "words",
    message: "Please enter your sentence"
});
let word_count = user_ans.words.trim().split(" ").lenght;
console.log(`Your sentece has ${word_count} words.`);
