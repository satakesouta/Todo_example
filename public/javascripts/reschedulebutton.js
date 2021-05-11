const $rescheduleButton = document.getElementsByName("edit")[0];
const $todoEdit = document.getElementsByClassName("todoEdit")[0];
const $todolist = document.getElementsByClassName("list");
const $addTaskbutton = document.getElementById("addTaskbutton");

import { listUsers } from "./listusers.js";
import { apiUrl } from "./api-url.js";
import { userName } from "./username.js";

const rescheduleButton = () => {
	$rescheduleButton.addEventListener("click", async (e) => {
		const todoObject1 = {
			What: $todoEdit.querySelector('[name="What"]').value,
			Where: $todoEdit.querySelector('[name="Where"]').value,
			Untilwhen: $todoEdit.querySelector('[name="Untilwhen"]').value,
		};
		const number = e.target.value;
		await fetch(apiUrl + userName() + `/${number}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(todoObject1),
		});
		let handlerIndex = 0;
		while (handlerIndex < $todolist.length) {
			$todolist[0].remove();
			// handlerIndex++;
		}
		listUsers(apiUrl + userName());
		$todoEdit.style.display = "none";
		$addTaskbutton.style.display = "block";
	});
};

export { rescheduleButton };
