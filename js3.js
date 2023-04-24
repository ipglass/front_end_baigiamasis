const button = document.getElementById("submit_button");

const fetchTools = (newTool) => {
    fetch(`https://6434a335537112453fc42b14.mockapi.io/tool`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTool),
  })
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      const successMessage = document.getElementById("success_message");
      successMessage.innerHTML = "Tool added";

      setTimeout(() => {
        window.location.replace("./index.html");
      }, 1000);
    });
};

button.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const sort = document.getElementById("sort").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const photo_url = document.getElementById("photo_url").value;
  const producer = document.getElementById("producer").value;

  const newTool = {
    name: name,
    sort: sort,
    price: price,
    description: description,
    photo_url: photo_url,
    producer: producer,
  };

  fetchTools(newTool);
});









