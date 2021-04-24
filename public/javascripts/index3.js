const $todoLists = document.getElementsByClassName("todoList")[0];
const $todoMake = document.getElementsByClassName("todoMake")[0];
const $addTaskbutton = document.getElementById("addTaskbutton");
const $back = document.getElementById("back");
const $form = document.getElementsByClassName("form");
const $todoEdit = document.getElementsByClassName("todoEdit")[0];
const $back2 = document.getElementById("back2");
const $editnumber = document.getElementsByName("edit")[0];
const $form2 = document.getElementsByClassName("form2");
const listIndex = document.getElementsByName("edit2");
import { addList } from "./component/nodeMake.js";
import "./component/style.css";

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
			addList(users[handlerIndex], handlerIndex);
			handlerIndex++;
		}
	}
};


listUsers();

// 編集ボタンのイベント
let handlerIndex2 = 0;
while (handlerIndex2 < listIndex.length) {
	listIndex[handlerIndex2].addEventListener("click", (e) => {
		window.scrollTo({
			top: 0,
			behavior: "auto",
		});
		let fff = e.target.value;
		$addTaskbutton.style.display = "none";
		$todoEdit.style.display = "block";
		$todoMake.style.display = "none";
		$editnumber.value = fff;
		for (let i = 0; i < $form2.length; i++) {
			const users2 = [users[fff].What, users[fff].Untilwhen, users[fff].Where];
			$form2[i].value = users2[i];
		}
	});
	handlerIndex2++;
}

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
