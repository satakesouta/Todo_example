const $todoMake = document.getElementsByClassName("todoMake")[0];

import { makeNode } from "./makenode.js";
import { editButton } from "./editbutton.js";

// 関数 データのやり取り
async function getUsers() {
	const res = await fetch("http://localhost:5000/api");
	const users = await res.json();
	return users;
}

const listUsers = async () => {
	// JSONデータのやり取り
	const users = await getUsers();
	document.getElementById("style").style.display = "block";
	$todoMake.style.display = "none";
	//  DOM操作
	let handlerIndex = 0;
	if (!(users == null)) {
		while (handlerIndex < users.length) {
			makeNode(users[handlerIndex], handlerIndex);
			handlerIndex++;
		}
	}

	editButton(users);
};

export { listUsers };
