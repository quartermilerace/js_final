const images = [
    "bg1.jpg","bg2.jpg","bg3.jpg","bg4.jpg"
];

const image = images[Math.floor(Math.random()*images.length)];

document.body.style.background = `url('image/${image}') no-repeat 0 0`;
document.body.style.backgroundSize = "cover";