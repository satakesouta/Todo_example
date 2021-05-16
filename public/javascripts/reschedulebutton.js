const $rescheduleButton = document.getElementsByName("edit")[0];
const $todoEdit = document.getElementsByClassName("todoEdit")[0];

import { apiUrl } from "./api-url.js";
import { userName } from "./username.js";
import { handleError } from "./handleerror.js";

const rescheduleButton = () => {
	$rescheduleButton.addEventListener("click", async (e) => {
		const todoObject1 = {
			What: $todoEdit.querySelector('[name="What"]').value,
			Where: $todoEdit.querySelector('[name="Where"]').value,
			Untilwhen: $todoEdit.querySelector('[name="Untilwhen"]').value,
		};
		const number = e.target.value;
		const res = await fetch(apiUrl + userName() + `/${number}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(todoObject1),
		});
		handleError(res);
	});
};

export { rescheduleButton };
