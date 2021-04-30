const $todoMake = document.getElementsByClassName("todoMake")[0];
const $addTaskbutton = document.getElementById("addTaskbutton");

import "./component/style.css";
import { backButton } from "./component/backbutton.js";
import { listUsers } from "./component/listusers.js";

listUsers();

// todo追加ボタン
$addTaskbutton.addEventListener("click", () => {
	$todoMake.style.display = "block";
	$addTaskbutton.style.display = "none";
	window.scrollTo({
		top: 0,
		behavior: "auto",
	});
});

backButton();
