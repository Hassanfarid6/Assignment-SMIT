function getProductDetails() {
    let title = prompt("Enter Product Title:");
    let description = prompt("Enter Product Description:");
    let buttonTitle = prompt("Enter Button Title:");
    let buttonLink = prompt("Enter Button Link (absolute URL):");
    let imageLink = prompt("Enter Image Link (absolute URL):");

    document.getElementById("title").innerText = title;
    document.getElementById("description").innerText = description;
    document.getElementById("button").innerText = buttonTitle;
    document.getElementById("button").href = buttonLink;
    document.getElementById("productImage").src = imageLink;
}

getProductDetails();