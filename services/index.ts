interface IUser{
    id:string,
    name:string,
    mail:string
}

async function getUserById(id:string):Promise <IUser|false> {
    const data:IUser={
        id:"3e332",
        name:"damain",
        mail:"Qdefe"
    }
    if (!data) return Promise.resolve(false)
    else return Promise.resolve(data)
}

export {getUserById}