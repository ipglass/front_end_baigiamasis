const toolsWrapper = document.getElementById("tools-wrapper");

const toolOptionCreation = (tool) => {
    console.log(tool);
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "tool");
    const image = document.createElement("img");
    image.setAttribute("src", tool.photo_url);

    const titleWrapper = document.createElement("div");

    titleWrapper.setAttribute("class", "title-wrapper");

    const title = document.createElement("span");
    const price = document.createElement("span");


    const sortWrapper = document.createElement("div");

    sortWrapper.setAttribute("class", "sort-wrapper");

    const sort = document.createElement("span");
    const producer = document.createElement("span");

    const link = document.createElement("a");
    link.setAttribute("class", "tool-link")
    link.href = "./tool.html";

    link.addEventListener("click", () => {
        localStorage.setItem("id", tool.id);
    });



    


    title.innerHTML = tool.name;
    sort.innerHTML =`sort: ${tool.sort}`;
    price.innerHTML = `${tool.price} €`;

    titleWrapper.append(title);
    sortWrapper.append(sort);
    titleWrapper.append(price);


    wrapper.append(image);
    wrapper.append(titleWrapper);
    wrapper.append(sortWrapper);

    link.append(wrapper);



    toolsWrapper.append(link);
};

fetch("https://6434a335537112453fc42b14.mockapi.io/tool")
    
.then((res) => {
    return res.json();
  })
  .then((data) => {
    data
      .sort((a, b) => Number(a.price) - Number(b.price))
      .forEach((tool) => {
        toolOptionCreation(tool);
      });
  }); 
