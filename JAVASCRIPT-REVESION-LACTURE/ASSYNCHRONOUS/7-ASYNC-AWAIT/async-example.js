// const api = fetch("https://jsonplaceholder.typicode.com/users");

// const users= new Promise((resolve, reject)=>{
//     if(api.length === 0){
//         reject("no data found")
//     }else{
//         setTimeout(()=>{
//               resolve(api)
//         },5000);
      
//     }
// });

// users
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.log(err));



// console.log("it will print immediately")

// <------------------------------------------->

// async function fetchData() {
//     try{
//         const res = await api;

//         const data = await res.json();

//         console.log(data);

//         console.log("it will wait")
//     }catch (error){
//         console.log(error.message)
//     }
// }

// fetchData()

// <-------------------------------------------->

// revesion async await example

const CheckPayment = () => {
    return new Promise ((resolve, reject)=>{
        let payment = true;

        setTimeout(()=>{
            if(payment){
                console.log("payment done")
                resolve();
            }else{
                reject("payment failed")
            }
        },3000);
    })
}


const CheckBalance = () => {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            console.log("1,100,000 amount available")
            resolve();
        },4000)
    })
}

const payment = async() =>{
    try{
        await CheckPayment();
        console.log("fetching account balance")
        await CheckBalance();
    }catch(error){
        console.log(error);
    }finally{
        console.log("do you want to explore more....!")
    }
};



payment();