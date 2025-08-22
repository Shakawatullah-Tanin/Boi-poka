const storedBook=()=>{

    const storedBookSTK=localStorage.getItem('readlist');
    if(storedBookSTK){
        return JSON.parse(storedBookSTK)  
    
    }
    else{
        return [];
    }

}

const addToDB =(id)=>{
    const storedBookdata=storedBook();
    if(storedBookdata.includes(id)){
        alert('Items is AllReady Added.')
    }
    else{
        storedBookdata.push(id);
        localStorage.setItem("readlist",JSON.stringify(storedBookdata))
        return storedBookdata;
    }
}
export {addToDB,storedBook};
