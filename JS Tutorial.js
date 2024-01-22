//OOPS in JS - Function Constructor
/*function student (studentName,studentDob){
    this.name=studentName;
    this.dob=studentDob;
}

const stu1=new student("John","12-09-1998");
console.log(stu1);
const stu2=new student("Harry","1-11-2002");
console.log(stu2);*/

/*function student (studentName,studentDob){
    this.name=studentName;
    this.dob=studentDob;
    this.greet=()=>{
           console.log(`Hello ${this.name}`); 
    }
    this.getAge=()=>{
        const dob=new Date(this.dob);  //converted string into date format
        const difference=Math.abs(new Date()-dob)/(1000*60*60*24);
        console.log(Math.floor(difference/365));
    }
}

const stu1=new student("Akhilesh","12-9-1998");
stu1.greet();
stu1.getAge();

const stu2=new student("Harry","2-11-2002");
stu2.greet();
stu2.getAge();
*/

/*const addStudent=(evt)=> {     //bu using OnClick() on button
    console.log(evt);
    const btn=evt.target;  //button element is returned
    const name=document.querySelector(".name").value;
    const age=document.querySelector(".age").value;
    const std=document.querySelector(".std").value;
    console.log(name,age,std);
    btn.innerText="Clicked";
}*/

const btn=document.querySelector("button");

btn.addEventListener("click",(evt)=>{             //By using addEventListener()
    const name=document.querySelector("#name").value;
    const age=document.querySelector("#age").value;
    const std=document.querySelector("#std").value;
    console.log(name,age,std);
    //btn.innerText="Clicked";
    const studList=document.querySelector(".studList");
    studList.innerHTML +=`
      <div style="border:solid red 1px; width:50%"><b>Name:</b> ${name} <b> Age:</b> ${age} <b> Standard:</b> ${std}</div>  
    `;
    // Added html code in JS file and used Compounding Operator(+=) to add new div in the existing div.
    
    const inputelementList=document.querySelectorAll("input");
    console.log(inputelementList);
    inputelementList.forEach(item=>{
        item.value="";
    });
})
