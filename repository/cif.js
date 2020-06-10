export default cif={
    viewProfile:(id)=>{
        return `SELECT email,name,age,identiferid FROM cif WHERE id=${id}`;
    },
    spendInfo:(cid)=>{
        return `SELECT id,balance,limitd FROM spend where id = (SELECT spendid FROM CARDS WHERE cid = ${cid})`;
    },
    savingInfo:(cid)=>{
        return `SELECT id,balance,rate FROM saving where id = (SELECT savingid FROM CARDS WHERE cid = ${cid})`;
    },
    updateInfo:(id,name,age,identifer,identiferid)=>{
        return `UPDATE cif SET "name" = ${name}, "age" = ${age}, "identifer" = ${identifer}, "identiferid" = ${identiferid}, "frontid" = 'null', "backid" = 'null' WHERE "id" = ${id};`
    },
    viewCif: `SELECT * FROM cif WHERE "active" = false `,
    
    activeCif: (id)=>{
        return `UPDATE cif SET "active" = true WHERE "id"=${id};`;
    },
    viewAll: "SELECT * FROM cif"
}


