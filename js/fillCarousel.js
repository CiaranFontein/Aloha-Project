class Product {
    constructor(category, name, price, imageSource) {
        this.category = category;
        this.name = name;
        this.price = price;
        this.imageSource = imageSource;
    }
}

const mainCarousel = document.getElementsByClassName("main-carousel")[0];

products = [
    new Product("Dresses", "Stretch Knit Dress", "$169.00", "images/stretch-knit-dress.jpg"),
    new Product("Shirts","Cotton Blue Shirt","$89.00","images/cotton-blue-shirt.jpg"),
    new Product("Dresses","Checked Stretch Dress","$129.00","images/checked-stretch-dress.jpg"),
    new Product("Bags","Blue Hipster Backpack","$69.00","images/blue-hipster-backpack.jpg"),
    new Product("Denim","Denim Overall Shorts","$89.00","images/demin-overall-shorts.jpg"),
    new Product("Dresses","Pink Dotted Dress","$99.00","images/pink-dotted-dress.jpg"),
    new Product("Dresses","Blue Silk Dress","$119.00","images/blue-silk-dress.jpg"),
    new Product("Shirts","Cotton Yellow Tshirt","$39.00","images/cotton-yellow-tshirt.jpg")
];
products.forEach(function (product, index){
    let newCarouselCell = document.createElement('div');
    newCarouselCell.setAttribute("class", "carousel-cell");
    newCarouselCell.append(document.createElement('img').setAttribute("src", products[index].imageSource));
    mainCarousel.append(newCarouselCell);
});
/*
<div class="carousel-cell">
                <img src="images/pink-dotted-dress.jpg">
                <p>Dresses</p>
                <p>Pink Dotted Dress</p>
                <p>$99.00</p>
            </div>
            */
