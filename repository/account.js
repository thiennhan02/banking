export default account={
    createAccount = (id,email,password,token) =>{
        return `INSERT INTO account ("id", "email", "password", "types","token") VALUES(${id}, ${email}, ${password},'c', ${token});
        INSERT INTO cif ("id", "email", "name", "status", "age", "identifer", "identiferid", "frontid", "backid") VALUES
        (${id}, ${email}, 'null', 'c', 'null', 'null', 'null', 'null', 'null');`;
    },
    active = (id)=>{
        return `UPDATE account SET "token" = 'null' WHERE "id" = ${id}`
    }
}