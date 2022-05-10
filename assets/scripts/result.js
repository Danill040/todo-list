const resultSelector = ".js-result";
const cardSelector = ".js-card";
const removeSelector = ".js-remove";
const statusSelector = ".js-status";

const messages = [];
let count = 0;

const cardHtml = `
  <div class="card js-card" data-id="{{id}}">
    <button class="status js-status">
      <span class="radio"></span>
    </button>
    <div class="item">{{message}}</div>
    <button class="action js-remove">
      <span class="remove">X</span>
    </button>
  </div>
`;

const removeItem = ({ target }) => {
  const cardElement = target.closest(cardSelector);
  const cardId = cardElement.getAttribute("data-id");

  messages.splice(
    messages.findIndex((obj) => obj.id === Number(cardId)),
    1
  );

  renderCards();
};

const setStatus = ({ target }) => {
  const cardElement = target.closest(cardSelector);

  cardElement.classList.add("is-done");
};

const getHtml = (item) => {
  return cardHtml.replace("{{id}}", item.id).replace("{{message}}", item.text);
};

const cardBindings = () => {
  const removeEls = document.querySelectorAll(removeSelector);

  removeEls.forEach((el) => {
    el.addEventListener("click", removeItem);
  });

  const statusEls = document.querySelectorAll(statusSelector);

  statusEls.forEach((el) => {
    el.addEventListener("click", setStatus);
  });
};

const renderCards = () => {
  const resultEl = document.querySelector(resultSelector);
  let resultString = "";

  messages.forEach((msg) => {
    const html = getHtml(msg);

    resultString += html;
  });

  resultEl.innerHTML = resultString;

  cardBindings();
};

export const render = (message) => {
  messages.push({
    id: count,
    text: message,
    status: "open",
  });

  count++;

  renderCards();
};
