const $deleteButton = document.getElementsByName("delete");
const $todolist = document.getElementsByClassName("list");

import { listUsers } from "./listusers.js";
import { apiUrl } from "./api-url.js";
import { userName } from "./username.js";

const deleteButton = () => {
	let handlerIndex2 = 0;
	while (handlerIndex2 < $deleteButton.length) {
		$deleteButton[handlerIndex2].addEventListener("click", async (e) => {
			const number = e.target.value;
			await fetch(apiUrl + userName() + `/${number}`, {
				method: "DELETE",
				headers: { "Content-Type": "application/json" },
			});
			let handlerIndex = 0;
			while (handlerIndex < $todolist.length) {
				$todolist[0].remove();
				// handlerIndex++;
			}
			listUsers(apiUrl + userName());
		});
		handlerIndex2++;
	}
};

export { deleteButton };
