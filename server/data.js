import bcrypt from'bcryptjs'
const data = {
    admins:[
        {
            adminId: "1993",
            adminName:"Kevin",
            adminPassword: bcrypt.hashSync('kevin'),
            isAdmin: true 
        },
        {
            adminId: "2000",
            adminName:"keith",
            adminPassword: bcrypt.hashSync('keith'),
            isAdmin: true 
        }
    ]
}