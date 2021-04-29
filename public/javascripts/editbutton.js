// 編集ボタンのイベント

const listIndex = document.getElementsByName("edit2");
const $addTaskbutton = document.getElementById("addTaskbutton");
const $todoEdit = document.getElementsByClassName("todoEdit")[0];
const $editNumber = document.getElementsByName("edit")[0];
const $form2 = document.getElementsByClassName("form2");
const $todoMake = document.getElementsByClassName("todoMake")[0];

let handlerIndex2 = 0;
const editButton = (users) => {
	while (handlerIndex2 < listIndex.length) {
		listIndex[handlerIndex2].addEventListener("click", (e) => {
			window.scrollTo({
				top: 0,
				behavior: "auto",
			});
			let fff = e.target.value;
			$addTaskbutton.style.display = "none";
			$todoEdit.style.display = "block";
			$todoMake.style.display = "none";
			$editNumber.value = fff;
			for (let i = 0; i < $form2.length; i++) {
				const users2 = [
					users[fff].What,
					users[fff].Untilwhen,
					users[fff].Where,
				];
				$form2[i].value = users2[i];
			}
		});
		handlerIndex2++;
	}
};

export { editButton };
