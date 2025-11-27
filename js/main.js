let car = {
    name: "BYD",
    yili: "2025",
    price: "11589$",
    familyasi: "byd seal",
    xod: "0km",
    img: "../images/download.jpg",
};

function getCard() {
    let result = `
        <div class="card">
            <img src="${car.img}" alt="Car">
            <h3>${car.name}</h3>
            <p>Yili: ${car.yili}</p>
            <p>Narxi: ${car.price}</p>
            <p>Familasi: ${car.familyasi}</p>
            <p>Xod: ${car.xod}</p>
        </div>
    `;

    document.getElementById("card").innerHTML = result;
}

getCard();
