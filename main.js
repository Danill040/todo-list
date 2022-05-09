import { render } from "./result";

const selectors = {
  input: ".js-input",
  submit: ".js-submit",
};

const onSubmit = () => {
  const inputEl = document.querySelector(selectors.input);

  if (inputEl.value === "") {
    return;
  }

  render(inputEl.value);

  inputEl.value = "";
};

const bindings = () => {
  const submitEl = document.querySelector(selectors.submit);

  submitEl.addEventListener("click", onSubmit);
};

const init = () => {
  bindings();
};

init();
