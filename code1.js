let Product = new Array();
let Price = new Array();
let Description = new Array();
Product.push("Iphone 15");
Product.push("Samsung j15");
Product.push("Nokia E69");
Price.push("30.000.000 ");
Price.push("25.000.000");
Price.push("10.000.000");
Description.push("Đẳng cấp")
Description.push("Sang trọng")
Description.push("Hàng siêu bền")

//=== show sản phẩm
// function showProduct() {
//     let textTable = "";
//     textTable = "<table >";
//     //====================Tạo tiêu đề bảng ===============================
//     textTable += "<tr>";
//     textTable += "<th border-spacing: 5px>" + "Product" + "</th>";
//     textTable += "<th border-spacing: 5px>" + "Price" + "</th>";
//     textTable += "<th border-spacing: 5px>" + "Description" + "</th>";
//     textTable += "<th border-spacing: 5px>" + Product.length + "_" + "Product" + "</th>";
//     textTable += "</tr>";
//     //====================Tạo row(hàng) show Product ===============================
//     for (let i = 0; i < Product.length; i++) {
//         textTable += "<tr>";
//         textTable += "<td>" + Product[i] + "</td>";
//         textTable += "<td>" + Price[i] + "</td>";
//         textTable += "<td>" + Description[i] + "</td>";
//         textTable += "<td>" + "<button onclick='checkProduct(this.value)' value=" + i + ">Edit</button>" + "<button onclick='deleteProduct(this.value)' value=" + i + ">Delete</button>" + "</td>";
//         textTable += "</td>";
//         textTable += "</tr>";
//     }
//     //====================Tạo tiêu đề bảng ===============================
//     textTable += "</table>";
//     document.getElementById("Result").innerHTML = textTable;
// }

// Minh viết lại cái bảng này luôn theo cách của Minh
function showProduct() {
    const container = document.getElementById("Result");
    const existingTable = container.childNodes[0];
    const table = document.createElement("table");
    const tableHeadings = document.createElement("tr");
    //====================Tạo tiêu đề bảng ===============================
    for (const headingContent of ["Product", "Price", "Description", "Image", `${Product.length}_Product`]) {
        const productHeading = document.createElement("th");
        const productText = document.createTextNode(headingContent);
        productHeading.appendChild(productText);
        productHeading.style.borderSpacing = "5px";
        tableHeadings.appendChild(productHeading);
    }
    table.appendChild(tableHeadings);

    //====================Tạo row(hàng) show Product ===============================
    for (let i = 0; i < Product.length; i++) {
        const row = document.createElement("tr");
        const productCol = document.createElement("td");
        productCol.innerHTML = Product[i];
        
        const priceCol = document.createElement("td");
        priceCol.innerHTML = Price[i];

        const descriptionCol = document.createElement("td");
        descriptionCol.innerHTML = Description[i];

        // Cột ảnh
        const imageCol = document.createElement("td");
        const image = document.createElement("img");
        image.src = `images/${Product[i]}.jpg`;
        image.width = 50;
        imageCol.appendChild(image);

        // Append columns to row
        row.appendChild(productCol);
        row.appendChild(priceCol);
        row.appendChild(descriptionCol);
        row.appendChild(imageCol);

        // Button column
        const buttonCol = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.onclick = function () {
            checkProduct(i)
        };

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.onclick = function () {
            deleteProduct(i)
        };
        buttonCol.appendChild(editButton);
        buttonCol.appendChild(deleteButton);

        row.appendChild(buttonCol);
        
        table.appendChild(row);
    }
    //====================Tạo tiêu đề bảng ===============================
    if (existingTable) {
        container.replaceChild(table, existingTable);
    } else {
        container.appendChild(table);
    }
}
showProduct()

function deleteProduct(id) {
    // Product[0] ===> id = 0;
    for (let i = 0; i < Product.length; i++) {
        if (Product[i] == Product[id]) {
            Product.splice(i, 1);
        }
    }
    showProduct();
}

// Chuyền vị trí và giá trị của mảng vào ô Edit
function checkProduct(id) {
    document.getElementById("editProduct").value = Product[id];
    document.getElementById("editDescription").value = Description[id]
    document.getElementById("editPrice").value = Price[id];
    document.getElementById("btn-Edit").value = id;
}

//============ Chỉnh sửa sản phẩm theo vị trí của mảng và showProduct
function editProduct(id) {
    Product[id] = document.getElementById("editProduct").value;
    Description[id] = document.getElementById("editDescription").value;
    Price[id] = document.getElementById("editPrice").value;
    showProduct();
}

//============== Thêm sản phẩm ===============
function addProduct() {
    let productName = document.getElementById("addProduct").value;
    let productDescription = document.getElementById("addDescription").value;
    let productPrice = document.getElementById("addPrice").value;
    Product.push(productName);
    Description.push(productDescription);
    Price.push(productPrice);
    showProduct();
}