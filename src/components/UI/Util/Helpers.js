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


export const validate = (element) => {
    let error = [true,''];

    if(element.validation.email){
        const valid = /\S+@\S+\.\S+/.test(element.value);
        const message = `${!valid ? 'Must be a valid email':''}`;
        error = !valid ? [valid,message]: error;
    }

    if(element.validation.required){
        const valid = element.value.trim() !== '';
        const message = `${!valid ? 'This field is required':''}`;
        error = !valid ? [valid,message]: error;
    }

    return error;
}
