const $addButton = document.getElementById("add");
const $todoMake = document.getElementsByClassName("todoMake")[0];
const $addTaskbutton = document.getElementById("addTaskbutton");

import { apiUrl } from "./api-url.js";
import { handleError } from "./handleerror.js";

const addButton = () => {
	$addButton.addEventListener("click", async () => {
		$addButton.disabled = true;
		const todoObject1 = {
			What: $todoMake.querySelector('[name="What"]').value,
			Place: $todoMake.querySelector('[name="Where"]').value,
			Untilwhen: $todoMake.querySelector('[name="Untilwhen"]').value,
		};
		const res = await fetch(apiUrl, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(todoObject1),
		});
		handleError(res);
		$addButton.disabled = false;
		// $addButton.removeAttribute("disabled");
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
