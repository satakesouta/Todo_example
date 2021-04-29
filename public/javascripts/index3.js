const $todoLists = document.getElementsByClassName("todoList")[0];
const $todoMake = document.getElementsByClassName("todoMake")[0];
const $addTaskbutton = document.getElementById("addTaskbutton");
const $back = document.getElementById("back");
const $form = document.getElementsByClassName("form");
const $todoEdit = document.getElementsByClassName("todoEdit")[0];
const $back2 = document.getElementById("back2");

import { makeNode } from "./component/makenode.js";
import "./component/style.css";
import { editButton } from "./component/editbutton.js";

// 関数 データのやり取り
async function getUsers() {
	const res = await fetch("http://localhost:5000/api");
	const users = await res.json();
	return users;
}

const listUsers = async () => {
	// JSONデータのやり取り
	const users = await getUsers();
	document.getElementById("style").style.display = "block";
	$todoMake.style.display = "none";
	//  DOM操作
	let handlerIndex = 0;
	if (!(users == null)) {
		while (handlerIndex < users.length) {
			makeNode(users[handlerIndex], handlerIndex);
			handlerIndex++;
		}
	}
	editButton();
};

listUsers();

// todo追加ボタン
$addTaskbutton.addEventListener("click", () => {
	$todoMake.style.display = "block";
	$addTaskbutton.style.display = "none";
	window.scrollTo({
		top: 0,
		behavior: "auto",
	});
});

// 戻るボタン
$back.addEventListener("click", () => {
	$todoMake.style.display = "none";
	$addTaskbutton.style.display = "block";
	// console.log($form);
	Array.prototype.forEach.call($form, (element) => {
		element.value = "";
	});
	// $form.value = "";
});

// 戻るボタン2
$back2.addEventListener("click", () => {
	$todoEdit.style.display = "none";
	$addTaskbutton.style.display = "block";
	$todoLists.style.display = "block";
	// console.log($form);
	Array.prototype.forEach.call($form, (element) => {
		element.value = "";
	});
});
