var box = document.querySelectorAll(".square");
var disp = document.querySelector(".disp");
var disp2 = document.querySelector(".disp2");
var gameOver = false;

for (var i = 0; i < box.length; i++) {
                box[i].style.backgroundColor = randomColor();
                box[i].winner = false;
}

var choice = Math.floor(Math.random() * box.length);
box[choice].winner = true;
console.log(choice);

disp.textContent = disp.textContent + ". Can you guess which box is " + box[choice].style.backgroundColor;

for (var i = 0; i < box.length; i++) {
                /*box[i].addEventListener("click", function() {
                                disp.textContent = this.style.backgroundColor;
                })*/
                box[i].addEventListener("click", function() {
                                if (this.winner) {
                                                disp2.textContent = "You won!";
                                                gameOver = true;
                                } else if (!gameOver) {
                                                this.classList.add("inactive");
                                                this.classList.remove("square");
                                                this.style.backgroundColor = "#242424";
                                                this.style.border = "0px";
                                                disp2.textContent = "Wrong!";
                                }
                })             
}

function randomColor() {
                return "rgb(" + Math.floor(Math.random() *256) + "," + 
                                Math.floor(Math.random() *256) + "," + Math.floor(Math.random() *256) + ")";
}
