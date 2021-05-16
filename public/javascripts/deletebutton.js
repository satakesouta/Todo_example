const $deleteButton = document.getElementsByName("delete");

import { apiUrl } from "./api-url.js";
import { userName } from "./username.js";
import { handleError } from "./handleerror.js";

const deleteButton = () => {
	let handlerIndex2 = 0;
	while (handlerIndex2 < $deleteButton.length) {
		$deleteButton[handlerIndex2].addEventListener("click", async (e) => {
			const number = e.target.value;
			const res = await fetch(apiUrl + userName() + `/${number}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			});
			// let handlerIndex = 0;
			// while (handlerIndex < $todolist.length) {
			// 	$todolist[0].remove();
			// 	// handlerIndex++;
			// }
			// listUsers(apiUrl + userName());
			handleError(res);
		});
		handlerIndex2++;
	}
};

export { deleteButton };
