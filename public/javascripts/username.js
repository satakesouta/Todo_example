const $userName = document.getElementById("username").textContent;

const userName = () => {
	const result = $userName.substr(0, $userName.length - 9);
	return result;
};

export { userName };
