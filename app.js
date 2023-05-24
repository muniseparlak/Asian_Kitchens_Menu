
const menu = [
    {
        id: 1,
        title: "Tteokbokki",
        category: "Korea",
        price: 10.99,
        img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
        desc: "Spice rice cakes, serving with fish cake"
    },
    {
        id: 2,
        title: "Bibimbap",
        category: "Korea",
        price: 8.99,
        img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
        desc: "Boiling vegetables, serving with special hot sauce"
    },
    {
        id: 3,
        title: "Jajangmyeon",
        category: "Korea",
        price: 15.99,
        img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
        desc: "Black bean sauce noodle, serving with green onion"
    },
    {
        id: 4,
        title: "Chicken Ramen",
        category: "Japan",
        price: 7.99,
        img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
        desc: "Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg"
    },
    {
        id: 5,
        title: "Onigiri",
        category: "Japan",
        price: 9.99,
        img:  "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
        desc: " Rice sandwich, serving with soy sauce"
    },
    {
        id: 6,
        title: "Doroyaki",
        category: "Japan",
        price: 3.99,
        img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
        desc: "Red bean paste dessert, serving with honey"
    },
    {
        id: 7,
        title: "Dan Dan Mian",
        category: "China",
        price: 5.99,
        img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
        desc: "Dan dan noodle, serving with green onion"
    },
    {
        id: 8,
        title: "Yangzhou Fried Rice",
        category: "China",
        price: 12.99,
        img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
        desc: "Yangzhou style fried rice, serving with bean and pickles"
    },
    {
        id: 9,
        title: "Ma Yi Shang Shu",
        category: "China",
        price: 12.99,
        img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
        desc: "Hot pepper sauce noodle, serving with soy bean and onion"
    }
] // menü dizi içerisinde obje şeklinde tanımlandı



let btnContainer = document.querySelector('.btn-container')
document.addEventListener('DOMContentLoaded', allItems(menu))


let buttonAll = document.createElement('button');
buttonAll.textContent = 'All';
buttonAll.classList.add(  'btn-item', 'btn-outline-dark');
btnContainer.appendChild(buttonAll);
buttonAll.type = "button"


let buttonKorea = document.createElement('button');
buttonKorea.textContent = 'Korea';
buttonKorea.classList.add('btn-item','btn-outline-dark');
btnContainer.appendChild(buttonKorea);
buttonKorea.setAttribute('type','button');


let buttonJapan = document.createElement('button');
buttonJapan.textContent = 'Japan';
buttonJapan.classList.add('btn-item', 'btn-outline-dark');
btnContainer.appendChild(buttonJapan);
buttonAll.type = "button"


let buttonChina = document.createElement('button');
buttonChina.textContent = 'China';
buttonChina.classList.add('btn-item', 'btn-outline-dark');
btnContainer.appendChild(buttonChina);
buttonChina.setAttribute('type','button')
// butonlar hazırlandı



const filterCategories = (category) => {
  if (category == 'All') return menu;
  return menu.filter((item) => item.category == category)
}



// bütün menüyü oluşturuyoruz
function allItems(menu) {
  let Section = document.querySelector('.section-center')
    Section.innerHTML = menu.map((item) => {
       
return ` 
<div class=" flex" style= "width: 18rem" >
<article class = "menu-items">
<img class="photo" src="${item.img}" alt="Card image cap">
<div class="menu-info">
  <h4 class="menu-title">${item.title}</h4>
  <p class="menu-text">${item.desc}</p>
  <h4 class="price">${item.price}</h4>
</div>
</article>
</div>`
      
    }
    )
}



 
const eventHandler = (category) => {
    allItems(filterCategories(category))

  }


buttonAll.addEventListener("click", ()=> eventHandler ("All"))
buttonKorea.addEventListener("click", ()=> eventHandler ("Korea"))
buttonJapan.addEventListener("click", ()=> eventHandler ("Japan"))
buttonChina.addEventListener("click", ()=> eventHandler ("China"))


window.addEventListener("DOMContentLoaded", () => {
  eventHandler("All")
})


