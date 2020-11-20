function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function(tail) {
        let occupied = true;

        while(occupied)
        {
            occupied = false;

            this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
            this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;

            for(let i = 0; i < tail.length; i++)
            {
                if(this.x == tail[i].x && this.y == tail[i].y)
                {
                    occupied = true;
                    break;
                }
            }
        }

        
    }

    this.draw = function() 
    {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}