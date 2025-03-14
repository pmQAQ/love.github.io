let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "对不起，我知道错了", 
    "零花钱都给你", 
    "欲擒故纵，我懂！", 
    "能不能给个台阶嘛", 
    "大脸蛋给你捏，好不好",
    "每天都超级爱你哟",
    "想带你到处流浪",
    "再不原谅要哭了哟",
    "带你乘风破浪",
    "最听宝宝的话了",
    "又要哭了哟",
    "宝宝不要走",
    "不敢了，再也不敢了"
    

];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 15) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "rencuo.png"; // 震惊
    if (clickCount === 2) mainImage.src = "geiqian.png";   // 思考
    if (clickCount === 3) mainImage.src = "duoqilai.png";   // 生气
    if (clickCount === 4) mainImage.src = "c37ebed378293d9d7451b47f9522c3db.gif";  // 哭
    if (clickCount === 5) mainImage.src = "oc9qQ0NxAyqPADD9AAgFmcH4IfeYm6EC5AhyhA.gif";  // 哭
    if (clickCount === 6) mainImage.src = "aff54f775f453f95a762c645f80ebf2d.gif";  // 哭
    if (clickCount === 7) mainImage.src = "a450d3407943b9d491318744a8263160.gif";  // 哭
    if (clickCount === 8) mainImage.src = "a5f3bcde6e7c9787745abcf1be813290.gif";  // 哭
    if (clickCount === 9) mainImage.src = "387b5dcff08da4afeb59577c33710548.gif";  // 哭
    if (clickCount === 10) mainImage.src = "71d31d62d46b457191fd56842a2a888d.gif";  // 哭
    if (clickCount === 11) mainImage.src = "6e5da1dccd1f4db31fce5fb1ecaddb3e.gif";  // 哭
    if (clickCount === 12) mainImage.src = "05aaa9092d823d4781aa1688650b4b1e.gif";  // 哭
    if (clickCount === 13) mainImage.src = "2ec1a976c26c472cbf7d760d68d0692f.gif";  // 哭
    if (clickCount === 14) mainImage.src = "c37ebed378293d9d7451b47f9522c3db.gif";  // 哭
    if (clickCount >= 15) mainImage.src = "c37ebed378293d9d7451b47f9522c3db.gif";  // 哭
    



    


});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!喜欢你!! ( >᎑<)♡︎ᐝ</h1>
            <img src="oglADKxzmC9EMAfxEAMIkU0AAeyig7tD6ajzhL.gif" alt="拥抱" class="yes-image">
        </div>
    `;

    document.body.style.overflow = "hidden";
});