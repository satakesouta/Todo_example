const $addButton = document.getElementById("add");
const $todoMake = document.getElementsByClassName("todoMake")[0];
const $addTaskbutton = document.getElementById("addTaskbutton");

import { apiUrl } from "./api-url.js";
import { userName } from "./username.js";
import { handleError } from "./handleerror.js";

const addButton = () => {
	$addButton.addEventListener("click", async () => {
		const todoObject1 = {
			What: $todoMake.querySelector('[name="What"]').value,
			Where: $todoMake.querySelector('[name="Where"]').value,
			Untilwhen: $todoMake.querySelector('[name="Untilwhen"]').value,
		};
		const res = await fetch(apiUrl + userName(), {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(todoObject1),
		});
		handleError(res);
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
