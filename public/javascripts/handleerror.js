const $todolist = document.getElementsByClassName("list");
const $todoMake = document.getElementsByClassName("todoMake")[0];
const $addTaskbutton = document.getElementById("addTaskbutton");
const $form = document.getElementsByClassName("form");
const $todoEdit = document.getElementsByClassName("todoEdit")[0];

import { listUsers } from "./listusers.js";
import { apiUrl } from "./api-url.js";

const remakeList = () => {
	let handlerIndex = 0;
	while (handlerIndex < $todolist.length) {
		$todolist[0].remove();
		// handlerIndex++;
	}
	listUsers(apiUrl);
};

const handleError = async (res) => {
	const resJson = await res.json();

	switch (res.status) {
		case 201:
			// postメソッド
			remakeList();
			$todoMake.style.display = "none";
			$addTaskbutton.style.display = "block";
			Array.prototype.forEach.call($form, (element) => {
				element.value = "";
			});
			break;

		case 202:
			// putメソッド
			remakeList();
			$todoEdit.style.display = "none";
			$addTaskbutton.style.display = "block";
			break;

		case 203:
			// deleteメソッド
			remakeList();
			break;

		case (400, 500):
			alert(resJson.error);
			break;
	}
};

export { handleError };
