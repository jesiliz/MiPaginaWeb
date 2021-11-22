window.addEventListener("DOMContentLoaded",() =>{
    const orderbuttons= document.querySelectorAll("button[data-order]");
    orderbuttons.forEach(item =>{
        item.addEventListener('click',(event) =>{
            const button = event.currentTarget;
            const container = button.parentNode;
            let order ={ 
                title: container.querySelector('.title').innerText,
                price:container.querySelector('.price').innerText,
                description:container.querySelector('p').innerText,
                id: button.getAttribute("data-order")
            }
            localStorage.setItem("order",JSON.stringify(order));
            const url = window.location.href.replace("productos.html","order.html");      
            window.location.href = url;
        });
    });
});