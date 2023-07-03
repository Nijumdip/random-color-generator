const getColor = () => {
    const getRandomNumber = Math.floor(Math.random() * 16777215);
    // console.log("#"+ getRandomNumber);
    const getRandomCode = "#" + getRandomNumber.toString(16);
    // console.log( getRandomNumber, getRandomCode);
    document.body.style.backgroundColor = getRandomCode;
    document.getElementById("color-code").innerHTML = getRandomCode;

    navigator.clipboard.writeText(getRandomCode);
};

document.getElementById("btn").addEventListener(
    "click",
    getColor
)
getColor();