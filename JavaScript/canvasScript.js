var c = document.getElementById("c");
var ctx = c.getContext("2d");
var cw = c.width = 200;
var ch = c.height = 200;
var cx = cw / 3,  cy = ch / 3;
var rad = Math.PI / 400;
var howMany = 200;
var p = [];
var colors = ["175,205,231", "57,18,66", "50,45,66", "204,216,224", "158,152,176"];
ctx.globalAlpha = .5;

function particles()
{
    this.r = randomIntFromInterval(4, 8);
    var innerR = Math.round(Math.random() * 60) + 1;
    var innerA = Math.round(Math.random() * 150) + 1;
    this.x = cx + innerR * Math.cos(innerA * rad);
    this.y = cy + 20 + innerR * Math.sin(innerA * rad);
    this.ix = (Math.random()) * (Math.random() < 0.5 ? -1 : 1);
    this.iy = (Math.random()) * (Math.random() < 0.5 ? -1 : 1);
    this.alpha = Math.random();
    this.c = "rgba(" + colors[Math.round(Math.random() * colors.length) + 1] + "," + this.alpha + ")";
}

for (var i = 0; i < howMany; i++)
{
    p[i] = new particles();
}

function Draw()
{
    ctx.fillStyle = "rgba(234,234,218,0)";
    ctx.fillRect(0, 0, cw, ch);
    for (var i = 0; i < p.length; i++)
    {
        ctx.fillStyle = p[i].c;
        //Поточний шлях для isPointInPath
        thePath(p[i].r);

        if (ctx.isPointInPath(p[i].x, p[i].y))
        {
            p[i].x += p[i].ix;
            p[i].y += p[i].iy;
            ctx.beginPath();
            ctx.arc(p[i].x, p[i].y, p[i].r, 0, 2 * Math.PI);
            ctx.fill();

        } else {
            p[i].ix = -1 * p[i].ix;
            p[i].iy = -1 * p[i].iy;
            p[i].x += p[i].ix;
            p[i].y += p[i].iy;
        }
    }
    window.requestAnimationFrame(Draw);
}
window.requestAnimationFrame(Draw);

function thePath(r)
{
    //Малюємо наше сердечко
    ctx.beginPath();
    ctx.moveTo(220, 100);
    ctx.arc(140, 80, 50 - r, Math.PI, Math.PI * 0.25);
    ctx.lineTo(100, 180);
    ctx.arc(60, 80, 50 - r, Math.PI * 0.77, 0);
}

function randomIntFromInterval(mn, mx)
{
    return ~~(Math.random() * (mx - mn + 1) + mn);
}