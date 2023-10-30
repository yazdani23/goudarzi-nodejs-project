

// database:

// sql ---> int, bigint -- , int, bigint --
// sql(relational):   mySql, msSqlServer, postgresql, oracle, sqlight  ---> (table, column)

// no-sql(no-relational): mongodb (document , field)






student={
    coures:[
        id2,
        id3,

    ]
}

course={


    students:[
      id_std1,
      id_std2,
      id_std3,
    ]
}


//// MERN


// const http= require("http")

// const app= http.createServer((req, res)=>{
//     if (req.url=="/") {
        
//        return res.end("<h1>I am in Root route </h1>");
//     }else if (req.url=="/login") {
//         return res.end("<h1>I am in Login route </h1>");
//     }else if (req.url=="/products") {
//         const products= [
//             {
//                 id:"1",
//                 title:"Moblie",
//                 price: 5000,
//             },
//             {
//                 id:"2",
//                 title:"Laptop",
//                 price: 2000,
//             },
//             {
//                 id:"1",
//                 title:"Tablet",
//                 price: 1000,
//             },
//         ]
//         return res.end(JSON.stringify(products));
//     }else if (req.url=="/products" && req.method=="post") {
//         const products= [
//             {
//                 id:"1",
//                 title:"Moblie",
//                 price: 5000,
//             },
//             {
//                 id:"2",
//                 title:"Laptop",
//                 price: 2000,
//             },
//             {
//                 id:"1",
//                 title:"Tablet",
//                 price: 1000,
//             },
//         ]
//         return res.end(JSON.stringify(products));
//     }
// })