const $todoLists = document.getElementsByClassName("todoList")[0];
const $template = document.getElementById("template");

const dt = new Date();
const month = dt.getMonth() + 1;
const mmonth = "0" + month;
const date = "0" + dt.getDate();
const today = dt.getFullYear() + "-" + mmonth.slice(-2) + "-" + date.slice(-2);

function addList(user, i) {
	// 入力欄作成
	const $list = document.createElement("div");
	$list.className = "oneList";
	const $Untilwhen = document.createElement("span");
	$Untilwhen.textContent = "Until when:" + user.Untilwhen;
	const $Where = document.createElement("span");
	$Where.id = "span";
	$Where.textContent = "Where:" + user.Where;
	const $What = document.createElement("div");
	$What.textContent = "What:" + user.What;
	$list.appendChild($Untilwhen);
	$list.appendChild($Where);
	$list.appendChild($What);
	if (user.Untilwhen < today) {
		console.log(today);
		$list.style.color = "red";
	}

	// ボタン作成
	const clone = $template.content.cloneNode(true);
	const inputButton = clone.querySelectorAll("div.button")[0].childNodes;
	const formButton = inputButton[3].childNodes;
	inputButton[1].value = i;
	formButton[1].value = i;
	formButton[3].value = i;
	$list.appendChild(clone);

	// 水平線作成
	const $hr = document.createElement("hr");
	$list.appendChild($hr);
	$list.className = "list";

	// $todoListsノードに子ノードとして追加
	$todoLists.appendChild($list);
}

export { addList };
