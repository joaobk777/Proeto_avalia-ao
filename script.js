*{
margin:0;
padding:0;
box-sizing:border-box;
}

html{
scroll-behavior:smooth;
}

body{
font-family:'Inter',sans-serif;
background:#040510;
color:#fff;
overflow-x:hidden;
}

.container{
width:min(1200px,90%);
margin:auto;
}

header{
position:fixed;
top:0;
width:100%;
z-index:1000;
background:rgba(4,5,16,.9);
backdrop-filter:blur(10px);
border-bottom:1px solid #15192d;
}

.nav{
height:80px;
display:flex;
align-items:center;
justify-content:space-between;
}

.logo{
font-size:28px;
font-weight:800;
}

.logo span{
color:#2f6cff;
}

nav{
display:flex;
gap:40px;
}

nav a{
color:#9ba4c9;
text-decoration:none;
}

.btn-primary{
background:#2f6cff;
padding:14px 28px;
border-radius:14px;
color:white;
text-decoration:none;
font-weight:600;
transition:.3s;
}

.btn-primary:hover{
transform:translateY(-3px);
}

.btn-secondary{
padding:14px 28px;
border-radius:14px;
border:1px solid #1e2847;
color:white;
text-decoration:none;
transition:.3s;
}

.btn-secondary:hover{
transform:translateY(-3px);
border-color:#2f6cff;
}

.hero{
height:100vh;
display:flex;
align-items:center;
justify-content:center;
position:relative;
text-align:center;
}

.hero-content{
position:relative;
z-index:2;
}

.glow{
width:500px;
height:500px;
background:#2f6cff;
filter:blur(180px);
opacity:.2;
position:absolute;
z-index:1;
}

.hero h1{
font-size:clamp(48px,8vw,90px);
line-height:1;
font-weight:800;
}

.hero h1 span{
color:#2196ff;
}

.hero p{
margin-top:30px;
font-size:24px;
color:#7f8cb3;
}

.hero-buttons{
margin-top:40px;
display:flex;
gap:20px;
justify-content:center;
}

.section{
padding:120px 8%;
}

.section-label{
display:block;
text-align:center;
color:#00d0ff;
font-size:13px;
letter-spacing:3px;
margin-bottom:15px;
}

.section h2{
text-align:center;
font-size:56px;
margin-bottom:60px;
}

.services-grid{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:25px;
}

.card{
background:#0a0d1f;
border:1px solid #1b2140;
padding:40px;
border-radius:24px;
}

.icon{
font-size:30px;
margin-bottom:20px;
}

.card p{
color:#8791b5;
}

.pricing{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:25px;
}

.price-card{
background:#0a0d1f;
border:1px solid #1b2140;
padding:40px;
border-radius:24px;
position:relative;
}

.featured{
border:2px solid #2f6cff;
}

.badge{
position:absolute;
top:-15px;
left:50%;
transform:translateX(-50%);
background:#2f6cff;
padding:8px 18px;
border-radius:999px;
}

.price-card h3{
font-size:52px;
margin:20px 0;
}

.price-card ul{
list-style:none;
}

.price-card li{
margin-bottom:15px;
color:#aab2cf;
}

.testimonials{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:25px;
}

.testimonial{
background:#0a0d1f;
border:1px solid #1b2140;
padding:35px;
border-radius:24px;
}

.testimonial p{
margin:20px 0;
color:#aab2cf;
}

.testimonial span{
display:block;
color:#7f8cb3;
margin-top:6px;
}

.cta{
margin:100px auto;
max-width:900px;
padding:100px;
text-align:center;
border-radius:30px;
border:1px solid #2f6cff;
background:radial-gradient(circle,#0f1c4a,#070914);
}

.cta h2{
font-size:72px;
margin-bottom:20px;
}

.cta p{
margin-bottom:40px;
color:#9ba4c9;
}

@media(max-width:992px){

.services-grid,
.pricing,
.testimonials{
grid-template-columns:1fr;
}

nav{
display:none;
}

.cta h2{
font-size:42px;
}
}
