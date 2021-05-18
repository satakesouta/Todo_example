const $rescheduleButton = document.getElementsByName("reschedule")[0];
const $todoEdit = document.getElementsByClassName("todoEdit")[0];

import { apiUrl } from "./api-url.js";
import { handleError } from "./handleerror.js";

const rescheduleButton = () => {
	$rescheduleButton.addEventListener("click", async (e) => {
		$rescheduleButton.disabled = true;
		const todoObject1 = {
			What: $todoEdit.querySelector('[name="What"]').value,
			Place: $todoEdit.querySelector('[name="Where"]').value,
			Untilwhen: $todoEdit.querySelector('[name="Untilwhen"]').value,
		};
		const number = e.target.value;
		const res = await fetch(apiUrl + `/${number}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(todoObject1),
		});
		handleError(res);
		$rescheduleButton.disabled = false;
	});
};

export { rescheduleButton };
