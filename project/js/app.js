const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

c.beginPath();
c.arc(500, 400, 50, 0, Math.PI * 2, false)
c.strokeStyle = 'bleu'
c.stroke();
