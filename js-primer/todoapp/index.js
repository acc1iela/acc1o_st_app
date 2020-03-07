import {
  App
} from "./src/App.js";
const app = new App();
app.mount();

const inputElement = document.querySelector("#js-form-input");
console.log(inputElement.value); // input要素の入力内容
