import users from './users-data.js';
import hello from './greetings.js';
import PromptSync from 'prompt-sync';
//import { chalkLog } from './log.js';
//import fetchList from './fetch-list.js';



//hello();
//console.log(users);
//chalkLog();
//fetchList();

const prompt = PromptSync();

console.log("Digite seu nome:");
const userName = prompt("> ");

console.log("Qual a sua idade?");
const userAge = prompt("> ");

hello(userName, userAge);

