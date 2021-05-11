const $back = document.getElementById("back");
const $form = document.getElementsByClassName("form");
const $todoEdit = document.getElementsByClassName("todoEdit")[0];
const $back2 = document.getElementById("back2");
const $todoMake = document.getElementsByClassName("todoMake")[0];
const $addTaskbutton = document.getElementById("addTaskbutton");

const backButton = () => {
	// 戻るボタン（Todo作成欄）
	$back.addEventListener("click", () => {
		$todoMake.style.display = "none";
		$addTaskbutton.style.display = "block";
		Array.prototype.forEach.call($form, (element) => {
			element.value = "";
		});
		// $form.value = "";
	});

	// 戻るボタン2（Todo編集欄）
	$back2.addEventListener("click", () => {
		$todoEdit.style.display = "none";
		$addTaskbutton.style.display = "block";
	});
};

export { backButton };
