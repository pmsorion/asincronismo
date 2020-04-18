const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('hey!!');
        } else {
            reject('whoooop!!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));