// 編集ボタンのイベント

const $listIndex = document.getElementsByName("edit2");
const $addTaskbutton = document.getElementById("addTaskbutton");
const $todoEdit = document.getElementsByClassName("todoEdit")[0];
const $rescheduleNumber = document.getElementsByName("reschedule")[0];
const $form2 = document.getElementsByClassName("form2");
const $todoMake = document.getElementsByClassName("todoMake")[0];

const editButton = (users) => {
	let handlerIndex2 = 0;
	while (handlerIndex2 < $listIndex.length) {
		$listIndex[handlerIndex2].addEventListener("click", (e) => {
			window.scrollTo({
				top: 0,
				behavior: "auto",
			});
			let fff = e.target.value;
			$addTaskbutton.style.display = "none";
			$todoEdit.style.display = "block";
			$todoMake.style.display = "none";
			$rescheduleNumber.value = fff;
			// console.log(fff);
			const target = users.find((number) => {
				return `${number.id}` === fff;
			});
			// console.log(target);
			for (let i = 0; i < $form2.length; i++) {
				const users2 = [target.What, target.Untilwhen, target.Place];
				$form2[i].value = users2[i];
			}
		});
		handlerIndex2++;
	}
};

export { editButton };
