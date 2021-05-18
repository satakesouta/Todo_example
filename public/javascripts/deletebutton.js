const $deleteButton = document.getElementsByName("delete");

import { apiUrl } from "./api-url.js";
import { handleError } from "./handleerror.js";

const deleteButton = () => {
	let handlerIndex2 = 0;
	while (handlerIndex2 < $deleteButton.length) {
		$deleteButton[handlerIndex2].addEventListener("click", async (e) => {
			e.target.disabled = true;
			const number = e.target.value;
			const res = await fetch(apiUrl + `/${number}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			});
			handleError(res);
		});
		handlerIndex2++;
	}
};

export { deleteButton };
