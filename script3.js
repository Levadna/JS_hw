const menu = document.getElementById("menu");
const startBtn = document.getElementById("startBtn");
let gameStarted = false;

startBtn.addEventListener("click", () => {
    menu.style.display = "none";
    gameStarted = true;
    animate();
});


const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext("2d");


const brickRowCount = 8;
const brickColumnCount = 10;
const brickWidth = 55;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 40;
const brickOffsetLeft = 35;
let lives = 3;
let score = 0;
let gameOver = false;
let paused = false;
 
const bricks = [];

const levelMap = [
[0,1,1,0,0,0,0,1,1,0],
[1,1,1,1,0,0,1,1,1,1],
[2,-1,-1,1,1,1,1,-1,1,2],
[0,1,-1,1,1,1,1,-1,1,0],
[0,0,1,1,-1,-1,1,1,0,0],
[0,0,0,1,3,3,1,0,0,0],
[0,0,0,0,3,3,0,0,0,0],
[0,-1,1,1,-1,1,1,1,-1,0]
];

for(let c = 0; c < brickColumnCount; c++)
{
    bricks[c] = [];

    for(let r = 0; r < brickRowCount; r++)
    {
        bricks[c][r] = {
            x: 0,
            y: 0,
            status: levelMap[r][c]
        };
    }
}
// ================= РИСОВАНИЕ БЛОКОВ =================
function drawBricks()
{
    for(let r = 0; r < brickRowCount; r++)
    {
        const bricksInRow = brickColumnCount;
        const startX = (r % 2 === 0) ? 0 : 40;

        for(let c = 0; c < bricksInRow; c++)
        {
            const brickX =
                c * (brickWidth + brickPadding) + startX;

            const brickY =
                r * (brickHeight + brickPadding) + brickOffsetTop;

            // СОХРАНЯЕМ КООРДИНАТЫ
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;

            if(bricks[c][r].status !== 0)
            {
                if(bricks[c][r].status === -1)
                {
                    ctx.fillStyle = "gray";
                }
                else if(bricks[c][r].status === 3)
                {
                    ctx.fillStyle = "red";
                }
                else if(bricks[c][r].status === 2)
                {
                    ctx.fillStyle = "orange";
                }
                else
                {
                    ctx.fillStyle = "green";
                }

                ctx.fillRect(
                    brickX,
                    brickY,
                    brickWidth,
                    brickHeight
                );

                if(bricks[c][r].status > 1)
                {
                    ctx.fillStyle = "white";
                    ctx.font = "16px Arial";

                    ctx.fillText(
                        bricks[c][r].status,
                        brickX + 30,
                        brickY + 15
                    );
                }
            }
        }
    }
}

// ================= ПЛАТФОРМА =================
const paddle = {
    width: 120,
    height: 15,
    x: canvas.width / 2 - 60,
    y: canvas.height - 30,
    speed: 7,
    color: "blue",
    moveLeft: false,
    moveRight: false
};

function drawPaddle()
{
    ctx.fillStyle = paddle.color;
    ctx.fillRect(
        paddle.x,
        paddle.y,
        paddle.width,
        paddle.height
    );
}

drawPaddle();

drawBricks();
//Кулька
  const ball = {
    x: 400,
    y: 400,
    radius: 20,
    dx: -4,   // швидкість по X
    dy: -3,   // швидкість по Y
    color: "orange"
  };

function drawBall()
{
    ctx.beginPath();
    ctx.fillStyle = ball.color;
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

//LIVES
function drawLives()
{
    ctx.font = "24px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Lives: " + lives, 20, 30);
}

//SCORE
function drawScore()
{
    ctx.font = "24px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score, 650, 30);
}

//PAUSE
function drawPause()
{
    ctx.font = "48px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(
        "PAUSE",
        canvas.width / 2 - 80,
        canvas.height / 2
    );
}
function drawControls()
{
    ctx.font = "18px Arial";
    ctx.fillStyle = "gray";
    ctx.fillText("Space - Pause", 300, 30);
}

//Керування
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);
document.addEventListener("keydown", pauseHandler);
function keyDownHandler(event)
{
    if(event.key === "Right" || event.key === "ArrowRight")
    {
        paddle.moveRight = true;
    }
    if(event.key === "Left" || event.key === "ArrowLeft")
    {
        paddle.moveLeft = true;
    }
}
function keyUpHandler(event)
{
    if(event.key === "Right" || event.key === "ArrowRight")
    {
        paddle.moveRight = false;
    }
    if(event.key === "Left" || event.key === "ArrowLeft")
    {
        paddle.moveLeft = false;
    }
}
function pauseHandler(event)
{
    if(event.code === "Space")
    {
        paused = !paused;
    }
}

// колізія
function collisionDetection() // зіткнення
{
    for(let c = 0; c < brickColumnCount; c++)
    {
        for(let r = 0; r < brickRowCount; r++)
        {
            const b = bricks[c][r];
            if( ball.x > b.x && ball.x < b.x + brickWidth && ball.y > b.y && ball.y < b.y + brickHeight )
            {
                // сірий блок
                if(b.status === -1)
                {
                    ball.dy *= -1;
                    return;
                }
                // звичайні блоки
                if(b.status > 0)
                {
                    b.status--;

                    if(b.status === 0)
                    {
                        score += 10;
                    }

                    ball.dy *= -1;
                }
            }
        }
    }
}

function checkWin()
{
    for(let c = 0; c < brickColumnCount; c++)
    {
        for(let r = 0; r < brickRowCount; r++)
        {
            if(bricks[c][r].status > 0)
            {
                return false;
            }
        }
    }
    return true;
}


function animate()
{
    if(gameOver)
    {
        return;
    }
    if(paused)
    {
        drawPause();
        requestAnimationFrame(animate);
        return;
    }
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawBricks();
    drawLives();
    drawScore();
    drawControls();

    collisionDetection();
    if(checkWin())
    {
        alert("Рівень 3 пройдено!");
        window.location.href = "level4.html";
        return;
    }
    //рух кульки
    ball.x += ball.dx;
    ball.y += ball.dy;
    // Відбивання від стін
    //ball.dx *= -1; // зміна напрямку по х 
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0)
    {
        ball.dx *= -1;
    }
    if(ball.y - ball.radius < 0)
    {
        ball.dy *= -1;
    }
    
    // Нижня границя + платформа
    if(
        ball.dy > 0 &&
        ball.y + ball.radius >= paddle.y &&
        ball.x > paddle.x &&
        ball.x < paddle.x + paddle.width
    )
    {
        ball.dy *= -1;
        ball.y = paddle.y - ball.radius;
    }

    if(ball.y - ball.radius > canvas.height)
    {
        lives--;
        if(lives > 0)
        {
            ball.x = canvas.width / 2;
            ball.y = canvas.height - 100;

            ball.dx = 4;
            ball.dy = -4;

            paddle.x = canvas.width / 2 - paddle.width / 2;
        }
        else
        {
            gameOver = true;
            alert("Game Over!");
            document.location.reload();
            return;
        }
    }

    //рух платформи
    if(paddle.moveRight && paddle.x + paddle.width < canvas.width)
    {
        paddle.x += paddle.speed
    }
    if(paddle.moveLeft && paddle.x > 0)
    {
        paddle.x -= paddle.speed
    }
    requestAnimationFrame(animate)
}
// drawBall()
//animate()
