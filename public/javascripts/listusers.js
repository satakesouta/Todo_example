const $todoMake = document.getElementsByClassName("todoMake")[0];

import { makeNode } from "./makenode.js";
import { editButton } from "./editbutton.js";
import { deleteButton } from "./deletebutton.js";

// 関数 データのやり取り
async function getUsers(x) {
	const res = await fetch(x);
	const users = await res.json();
	return users;
}

const listUsers = async (x) => {
	// JSONデータのやり取り
	const users = await getUsers(x);
	document.getElementById("style").style.display = "block";
	$todoMake.style.display = "none";
	//  DOM操作
	let handlerIndex = 0;
	if (!(users == null)) {
		while (handlerIndex < users.length) {
			makeNode(users[handlerIndex]);
			handlerIndex++;
		}
	}

	editButton(users);

	deleteButton();
};

export { listUsers, getUsers };
