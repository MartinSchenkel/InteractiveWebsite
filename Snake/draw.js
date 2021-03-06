const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scr = document.querySelector(".snake-score");

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;

(function setup() {
    snake = new Snake();
    fruit = new Fruit();
    
    fruit.pickLocation(snake.tail);

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        fruit.draw();
        snake.draw();

        if(snake.eat(fruit))
        {
            fruit.pickLocation(snake.tail);
        }

    },125);
}());

window.addEventListener('keydown', ((evt) => 
{
    const direction = evt.key.replace('Arrow', '');
    snake.changeDirection(direction);
}))
