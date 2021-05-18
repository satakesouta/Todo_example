import "./component/style.css";
import { backButton } from "./component/backbutton.js";
import { listUsers } from "./component/listusers.js";
import { apiUrl } from "./component/api-url.js";
import { addButton, addTaskButton } from "./component/addbutton.js";
import { rescheduleButton } from "./component/reschedulebutton.js";

listUsers(apiUrl);

addButton();
addTaskButton();
rescheduleButton();

backButton();
