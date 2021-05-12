const $addButton = document.getElementById("add");
const $todoMake = document.getElementsByClassName("todoMake")[0];
const $todolist = document.getElementsByClassName("list");
const $addTaskbutton = document.getElementById("addTaskbutton");
const $form = document.getElementsByClassName("form");

import { listUsers } from "./listusers.js";
import { apiUrl } from "./api-url.js";
import { userName } from "./username.js";
// addボタンの実装

const addButton = () => {
	$addButton.addEventListener("click", async () => {
		const todoObject1 = {
			What: $todoMake.querySelector('[name="What"]').value,
			Where: $todoMake.querySelector('[name="Where"]').value,
			Untilwhen: $todoMake.querySelector('[name="Untilwhen"]').value,
		};
		await fetch(apiUrl + userName(), {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(todoObject1),
		});
		let handlerIndex = 0;
		while (handlerIndex < $todolist.length) {
			$todolist[0].remove();
			// handlerIndex++;
		}
		listUsers(apiUrl + userName());
		$todoMake.style.display = "none";
		$addTaskbutton.style.display = "block";
		Array.prototype.forEach.call($form, (element) => {
			element.value = "";
		});
	});
};

const addTaskButton = () => {
	$addTaskbutton.addEventListener("click", () => {
		$todoMake.style.display = "block";
		$addTaskbutton.style.display = "none";
		window.scrollTo({
			top: 0,
			behavior: "auto",
		});
	});
};

export { addButton, addTaskButton };
