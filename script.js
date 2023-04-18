function changeTheme() {
    var textElement = documen.gotElementById ["mytext"];
    if (textElement.style.color === "yellow") {
        textElement.style.color =  "blue";
        textElement.style.backgroundColor = "yellow";
    } else {
        textElement.style.color = "yellow";
        textElement.style.backgroundColor = "blue";
    }
}

let crders = [
    {
        name: "Laptop",
        price: 10000,
        count: 1,
    },
    {
        name: "Phone",
        price: 6000,
        count: 4,
    },
]
let users = orders.nap(order =>  {
    return {
        name: `Alex`,
        order: order
    }
})
console.log(users)






let newOrder = {
    product : `PC` ,
    price : 2500,
    count : 2
} 
let user = {
    name: `Alex`,
    age : 23,
    mail: `alex@gmail.com` ,
    orders :[
        {
            product : `Phone` ,
            price :300,
            count : 1
        }
    ],
    sum : 300
}
user = {
    ...user,
    order : {
        ...user.order,
        {
                ...newOrder
        }
    },
    sum : user.sum + newOrder.price * newOrder.count
}

console.log(user)