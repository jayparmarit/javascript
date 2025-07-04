class big {

        constructor(name, age, role){
            this.name = name
            this.age = age
            this.role = role
        }

        updateprofile(name){
            this.name = name
        }


    getprofile(){
        console.log("name: "+ this.name)
        console.log("age: "+ this.age)
        console.log("role: "+ this.role)
    }   
}

class small extends big{
    
    constructor(){
        super()
        this.cource = "fsd"
        this.duration = 15
    }

    getalldetails(){
        console.log("course: " + this.course)
        console.log("duration: " + this.duration)
    }

      updateprofile(cource){
            this.cource = cource
        }

    getalldetails(time, batch){
        console.log(time, batch)
    }
        
}

let b1 = new big ("yash", 19, "graphics")
let b2 = new big ("jay", 20, "full stack")

b1.updateprofile("amit")
b1.getprofile()

console.log("--------------")

b2.getprofile()
console.log("--------------")


let s1 = new small()
s1.getalldetails()

s1.getalldetails(20, "fsd2")

console.log(b1)