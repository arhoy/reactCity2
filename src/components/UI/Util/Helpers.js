export const reverseArray = (a)=>{
    let reversedArray = [];
    for(let i = a.length -1; i >= 0; i --){
        reversedArray.push(a[i])
    }
    return reversedArray;
}

export const firebaseLooper = (snapshot) =>{
    const data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}

export const validate = () =>{
    console.log('fuck a massive fucking dick');
}
