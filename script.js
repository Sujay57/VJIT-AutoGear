const products = [
  {
    id: 1,
    name: "Car Seat Cover",
    price: 2500,
    category: "interior",
    img: "https://images.jdmagicbox.com/quickquotes/images_main/car-seat-cover-black-luxury-leather-seat-with-head-rest-2217451260-2djovvlr.jpg"
  },
  {
    id: 2,
    name: "Steering Cover",
    price: 800,
    category: "interior",
    img: "https://dukaan.b-cdn.net/700x700/webp/media/f082f3b5-574f-4e74-a506-1acf88eba85d.jpeg"
  },
  {
    id: 3,
    name: "LED Headlights",
    price: 5000,
    category: "exterior",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Rf41-uThSkh8VVSyFzmmdFOyGMILbo3xGg&s"
  },
  {
    id: 4,
    name: "Spoiler",
    price: 2700,
    category: "exterior",
    img: "https://static-cdn.cars24.com/prod/auto-news24-cms/CARS24-Blog-Images/2025/05/23/8c1e1fb9-bca3-4ed2-a7c2-fd3d2915c3af-spoiler--01.webp"
  },
  {
    id: 5,
    name: "Bumper",
    price: 3000,
    category: "exterior",
    img: "https://autobacsindia.com/wp-content/uploads/2024/10/Fire4X4-Front-Bumper-for-Toyota-Hilux1-1-600x600.jpg"
  },
  {
    id: 6,
    name: "Door Protector",
    price: 600,
    category: "exterior",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9DniiZ2Duew1FRzCALIzkW9pWY1a-vEerg&s"
  },
  {
    id: 7,
    name: "Rain Visor",
    price: 1500,
    category: "exterior",
    img: "https://carhatke.com/image/cache/catalog/doorvisor/car-window-visor-with-chrome-line-1-350x350.jpg"
  },
  {
    id: 8,
    name: "Side Step",
    price: 6000,
    category: "exterior",
    img: "https://api.hyundaimobisin.com/service/asset/accessory/2495-K3F37IH101_Side-Step_Silver_720x400.jpg"
  },
  {
    id: 9,
    name: "Gear Knob",
    price:1000,
    category: "interior",
    img: "https://media.istockphoto.com/id/480522940/photo/6-speed-gearstick-of-a-car.jpg?s=612x612&w=0&k=20&c=smdWZrsKhzPjUhpAZ3iTo2fn4r3q8GF3SqzW0NX9jY8="
  },
  {
    id:10,
    name: "Dashcam",
    price:2000,
    category:"interior",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg4Q_V_EI9Hc1_GpT4dCpgc7OwkLZTx62ZEw&s"
  },
  {
    id:11,
    name: "Phone Mount",
    price:500,
    category:"interior",
    img: "https://deanauto.in/wp-content/uploads/2025/08/Daps-8-inch-Basstube-1.png"
  },
  {
    id:12,
    name: "Freshner",
    price:430,
    category:"interior",
    img:"https://m.media-amazon.com/images/I/51CKTUUwGtL.jpg"
  },
  {
    id:13,
    name: "Action Figure",
    price:700,
    category:"interior",
    img:"https://rukminim2.flixcart.com/image/480/480/ksyz8280/action-figure/x/i/a/6-bobblehead-toys-action-figure-car-dashboard-interior-original-imag6f6mbchyngkw.jpeg?q=90"
  },
  {
    id:14,
    name:"Car Body Cover",
    price: 1500,
    category:"exterior",
    img:"https://www.sasxtra.com/cdn/shop/files/3514-BODY-COVER-PREMIUM-BVF26IH001-TITAN-GREY.jpg?v=1718776433&width=1445"
  },
  {
    id:15,
    name: "Luggage carrier",
    category:"exterior",
    price: 5000,
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuXcZAL7XJDzQ2VFKTXbT5OgUY9jRsSi7mrw&s"
  }
];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayProducts(category="all"){
const list=document.getElementById("productList");
list.innerHTML="";
const filtered = category==="all" ? products : products.filter(p=>p.category===category);
filtered.forEach(p=>{

list.innerHTML+=`
<div class="card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p>₹${p.price}</p>
<button onclick="addToCart(${p.id})">Add to Cart</button>
</div>
`;

});

}

function addToCart(id){
const product=products.find(p=>p.id===id);
cart.push(product);
localStorage.setItem("cart",JSON.stringify(cart));
updateCart();

}

function updateCart(){

document.getElementById("cartCount").innerText=cart.length;
const items=document.getElementById("cartItems");
const total=document.getElementById("cartTotal");
items.innerHTML="";
let sum=0;
cart.forEach((item,index)=>{
sum+=item.price;
items.innerHTML+=`
<li>
${item.name} - ₹${item.price}
<button onclick="removeFromCart(${index})">Remove</button>
</li>
`;

});

total.innerText=sum;

}

function removeFromCart(index){
cart.splice(index,1);
localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

}

function toggleCart(){
const cartSection=document.getElementById("cartSection");
cartSection.style.display = cartSection.style.display==="none" ? "block":"none";

}

function openModal(type){
const modal=document.getElementById("modal");
const content=document.getElementById("modalContent");
modal.style.display="flex";

if(type==="login"){

content.innerHTML=`
<h3>Login</h3>
<input type="email" id="loginEmail" placeholder="Email">
<input type="password" id="loginPassword" placeholder="Password">
<button onclick="login()">Login</button>
`;

}

else{

content.innerHTML=`
<h3>Register</h3>
<input type="text" id="regName" placeholder="Full Name">
<input type="email" id="regEmail" placeholder="Email">
<input type="text" id="regPhone" placeholder="Phone Number">
<input type="password" id="regPassword" placeholder="Password">
<input type="password" id="regConfirmPassword" placeholder="Confirm Password">
<button onclick="register()">Register</button>
`;

}

}

function register(){

const name=document.getElementById("regName").value;
const email=document.getElementById("regEmail").value;
const phone=document.getElementById("regPhone").value;
const password=document.getElementById("regPassword").value;
const confirmPassword=document.getElementById("regConfirmPassword").value;

if(password!==confirmPassword){
alert("Passwords do not match");

return;

}

const user={name,email,phone,password};
localStorage.setItem("user",JSON.stringify(user));
alert("Registration Successful");

closeModal();

}

function login(){
const email=document.getElementById("loginEmail").value;
const password=document.getElementById("loginPassword").value;
const user=JSON.parse(localStorage.getItem("user"));

if(user && user.email===email && user.password===password){
alert("Login Successful");

closeModal();

}
else{

alert("Invalid Credentials");

}

}

function closeModal(){

document.getElementById("modal").style.display="none";
}

window.onclick=function(e){

if(e.target.id==="modal"){
closeModal();

}
}
displayProducts();
updateCart();
