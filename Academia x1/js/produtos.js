

var produto_template;
var list;





let products_list = []

let search_locked = false

function add_to_cart(product) {
    let clone = produto_template.cloneNode(true)
    clone.querySelector("#name").textContent = product.name
    clone.querySelector("#price").textContent = product.price
    clone.querySelector("#image").src = product.image
    clone.style.display = "block"
    list.appendChild(clone)
    products_list.push(product)
    product.element = clone
}






function search_input_key(event) {
    if (event.key == "Enter") {
        const text = event.target.value
        event.target.blur()
        update_filter(text)
    }
}


function search_icon_click() {
    const input = document.getElementById("search-input")
    let text = input.value
    input.blur();
    update_filter(text)
}


function update_filter(name) {
    if (search_locked) return
    search_locked = true
    this.value = ""
    let loading_element = document.getElementById("laoding-icon")
    loading_element.style.display = "flex"

    document.getElementById("results-for-text").style.display = "none"

    for (let index = 0; index < products_list.length; index++) {
        const element = products_list[index]
        element.element.style.display = "none"
    }

    setTimeout(function () {
        loading_element.style.display = "none"
        let len = 0;
        for (let index = 0; index < products_list.length; index++) {
            const element = products_list[index];
            if (element.name.toLowerCase().includes(name.toLowerCase())){
                len++;
                
                element.element.style.display = "block"
            }else
                element.element.style.display = "none"
            search_locked = false
            if ( name != "")
            document.getElementById("results-for-text").style.display = "block"
            let texto = len+" Resultados para: "+name
            if (len == 0) {
                texto = "Sem resultados para: "+name
            }else if ( len == 1) {
                texto = "Foi encontrado 1 resultado para: "+name
            }
            document.getElementById("results-for-text").innerText = texto

        }
    }, 2000)

}







function domLoaded() {
    produto_template = document.getElementById("product-template")
    produto_template.style.display = "none"
    list = document.getElementById("product-list")
    document.getElementById("results-for-text").style.display = "none"
    const products = [
        {
            "price": "5400,00 R$",
            "name": "INTEGRITY+ ESTEIRA",
            "image": "https://www.lifefitness.com/resource/image/2323806/portrait_ratio1x1/400/400/7dd2288b7752d5c03eb03fe195226832/ER/life-fitness-integrity-series-treadmill-with-24-inch-se4-in-matte-black.png"
        },
        {
            "price": "5000,00 R$",
            "name": "CADEIRA EXTENSORA+FLEXORA",
            "image": "https://www.fiqueinforma.com/wp-content/uploads/2013/04/Insignia-LegExtension-Titanium-hero.png"
        },
        {
            "price": "3000,00 R$",
            "name": "ESTEIRA ASPIRE",
            "image": "https://www.lifefitness.com/resource/image/2272264/portrait_ratio1x1/400/400/a0fa251b9651a66222cef00343427707/DZ/aspire-treadmill-sl-console-smooth-charcoal.png"
        },
        {
            "price": "35000,00 R$",
            "name": "SIMULADOR ESCADA",
            "image": "https://www.ecompletocdn.com.br/i/fp/23/1209061_1_1624476710.jpg"
        },
        {
            "price": "2520,00 R$",
            "name": "IC7 CICLISMO INDOOR",
            "image": "https://www.lifefitness.com/resource/image/2304864/portrait_ratio1x1/400/400/f4ec30b7055c253347c16892323ed587/ST/icg-ic7-bg-free.png"
        },
        {
            "price": "2000,00 R$",
            "name": "BICICLETA VERTICAL INTEGRITY+ LIFECYCLE",
            "image": "https://www.lifefitness.com/resource/image/2323830/portrait_ratio1x1/400/400/2f9c8d4451fe2ddd27e741575c725fb4/CB/life-fitness-integrity-series-upright-bike-with-24-inch-se4-in-black-onyx.png"
        },
        {
            "price": "12000,00 R$",
            "name": "CROSS",
            "image": "https://i2.wp.com/primofitnessusa.com/wp-content/uploads/2019/03/Life-Fitness-SYNRGY90-Cable-Machine.jpg?fit=1000%2C1000&ssl=1"
        }, 
        {
            "price": "1000,00 R$",
            "name": "CADEIRA LIVRE",
            "image": "https://i.pinimg.com/originals/b7/1a/c1/b71ac1b8255971011da9f04b6dc2fa72.png"
        }, 
        {
            "price": "5500,00 R$",
            "name": "PUXADOR COSTAS ARTICULADO",
            "image": "https://i.pinimg.com/originals/8c/05/56/8c055622fa040148277843aea65672dc.jpg"
        },
        {
            "price": "7999,00 R$",
            "name": "AGACHAMENTO SQUAT",
            "image": "https://i.pinimg.com/originals/d1/af/90/d1af90caa934838d25a5438d077d3f33.png"
        }
        
    ]


    for (let index = 0; index < products.length; index++) {
        const element = products[index];
        add_to_cart(element)
    }
    

    console.table(products)


}



