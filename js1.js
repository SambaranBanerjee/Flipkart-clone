let categories =[
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/790b539a57f7b8cd.png?q=100",
        title:"Top Offers",
        href: "",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/444802d58a814f57.png?q=100",
        title:"Mobiles & Tablets",
        href: "",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/ce3744f59fadb72e.png?q=100",
        title:"Electronics",
        href: "",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/5b8ad952a656b015.png?q=100",
        title:"TVs & Appliances",
        href: "",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/e4b01f3d783c49a1.png?q=100",
        title:"Fashion",
        href: "./Product.html",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/9e4acc1d8929bcc6.png?q=100",
        title:"Beauty",
        href: "",
    },
    {
        img_src:"https://rukminim1.flixcart.com/fk-p-flap/80/80/image/9ba7be5608413886.png?q=100",
        title:"Home & Kitchen",
        href: "",
    },
];

categories.map((element)=>{
    let image = document.createElement('img');
    image.src = element.img_src;

    let title = document.createElement("p");
    title.innerHTML=element.title;

    let box = document.createElement("div");

    box.append(image,title);

    document.getElementById("categories").append(box);
})

