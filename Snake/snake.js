function Snake()
{
    this.x = 4 * scale;
    this.y = 4 * scale;

    this.score = 0;
    this.tail = [];

    this.xSpeed = 0;
    this.ySpeed = 0;

    this.draw = function() 
    {
        ctx.fillStyle = ("orange");

        for(let i = 0; i < this.tail.length; i++)
        {
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        ctx.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function()
    {
        for(let i = 0; i < this.tail.length - 1; i++)
        {
            this.tail[i] = this.tail[i + 1];
        }

        scr.textContent = "Score: " + this.score;

        this.tail[this.score - 1] = {x: this.x, y: this.y };

        this.x += this.xSpeed;
        this.y += this.ySpeed;

        for(let i = 0; i < this.tail.length; i++)
        {
            if(this.tail[i].x == this.x && this.tail[i].y == this.y)
            {
                this.endGame();
                break;
            }
        }

        if(this.x > canvas.width - scale)
        {
            this.endGame();
        }
        else if(this.x < 0)
        {
            this.endGame();
        }
        else if(this.y > canvas.height)
        {
            this.endGame();
        }
        else if(this.y < 0)
        {
            this.endGame();
        }
    }

    this.changeDirection = function(direction)
    {
        switch(direction)
        {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale;
                break;

            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale;
                break;

            case 'Left':
                this.xSpeed = -scale;
                this.ySpeed = 0;
                break;

            case 'Right':
                this.xSpeed = scale;
                this.ySpeed = 0;
                break;

            case 'w':
                this.xSpeed = 0;
                this.ySpeed = -scale;
                break;
            
            case 's':
                this.xSpeed = 0;
                this.ySpeed = scale;
                break;

            case 'a':
                this.xSpeed = -scale;
                this.ySpeed = 0;
                break;

            case 'd':
                this.xSpeed = scale;
                this.ySpeed = 0;
                break;
        }
    }

    this.eat = function(fruit)
    {
        if(this.x == fruit.x && this.y == fruit.y)
        {
            this.score++;
            return true;
        }
        return false;
    }

    this.endGame = function()
    {
        alert("You died with a score of: " + this.score);

        this.tail.length = 0;
        this.score = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.x = scale * 4;
        this.y = scale * 4;

        fruit.pickLocation(this.tail);
    }
}