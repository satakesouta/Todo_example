const $todolist = document.getElementsByClassName("list");
const $todoMake = document.getElementsByClassName("todoMake")[0];
const $addTaskbutton = document.getElementById("addTaskbutton");
const $form = document.getElementsByClassName("form");
const $todoEdit = document.getElementsByClassName("todoEdit")[0];

import { listUsers } from "./listusers.js";
import { apiUrl } from "./api-url.js";
import { userName } from "./username.js";

const remakeList = () => {
	let handlerIndex = 0;
	while (handlerIndex < $todolist.length) {
		$todolist[0].remove();
		// handlerIndex++;
	}
	listUsers(apiUrl + userName());
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
			// putメソッド
			remakeList();
			break;

		case 400:
			alert(resJson.error);
			break;
	}
};

export { handleError };
