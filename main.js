const imgList = [
    'paella.jpeg',
    'oso.jpeg',
    'berra.jpeg',
    'big.jpeg',
    'bigger.jpeg',
    'huge.jpeg'
];

const images = [];

const loadingStep = (100 / imgList.length);

const loading = document.querySelector("#loading-bar");
const loadingBar = document.querySelector(".loading-bar__progress");

function startLoading(cb) {
    imgList.forEach(name => {
        const img = new Image();

        img.addEventListener("load", e => {
            images.push(img);
            loadingBar.style.width = `${images.length * loadingStep}%`;

            if(images.length >=imgList.length){
                cb();
            }
        setTimeout(e=> 2+2, 1000)
        });
        img.src = name;

        if (img.complete){
            img.dispatchEvent(new Event("load"));
        }
    })
}
startLoading(function(){
    alert("koniec!")
})