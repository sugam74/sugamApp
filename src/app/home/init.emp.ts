export class Init{
    load(){
        if(localStorage.getItem('employees') === null || localStorage.getItem('employees')===undefined ){
            console.log("No records found");

                var employees = [
                    {
                        name : "Sugam1",
                        email : "sugam@gmail.com",
                        phone : "909090909"
                    },
                    {
                        name : "Sugam2",
                        email : "sugam2@gmail.com",
                        phone : "909090909"
                    },
                    {
                        name : "Sugam3",
                        email : "sugam3@gmail.com",
                        phone : "909090909"
                    }
                ];

                localStorage.setItem("employees",JSON.stringify(employees));
        }else{
            console.log("Loading...");
        }
    }
}