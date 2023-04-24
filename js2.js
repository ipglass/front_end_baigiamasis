const toolId = localStorage.getItem("id");

const addElementsToScreen = (data) => {
    const toolPhoto = document.getElementById("photo");
    toolPhoto.style.backgroundImage = `url(${data.photo_url})`;
    console.log(data);

    const title = document.getElementById("tool-title");
    title.innerHTML = data.name;

    const sort = document.getElementById("tool-sort");
    sort.innerHTML = `sort: ${data.sort}`;

    const price = document.getElementById("tool-price");
    price.innerHTML = `${data.price}€`;

    const description = document.getElementById("tool-description");
    description.innerHTML = `description: ${data.description}`;


    const producer = document.getElementById("tool-producer");
    producer.innerHTML = `sales reference: ${data.producer}`;
};



fetch(`https://6434a335537112453fc42b14.mockapi.io/tool/${toolId}`)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        addElementsToScreen(data);
    });




    deleteButton.addEventListener("click", () => {
    fetch(
        `https://6434a335537112453fc42b14.mockapi.io/tool/${toolId}`,
        {
            method: "DELETE",
        }
    )
            .then((res) => {
            return res.json();
        })
        .then((data) => {
            
            console.log("Data deleted:", data);
            container.innerHTML = `
            <div class="after-delete-wrapper">
            <h3 class="after-delete">Tool was deleted successfully<h3>
        </div>
            `;
            
        });
});







