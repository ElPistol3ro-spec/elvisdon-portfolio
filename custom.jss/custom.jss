function FizBaz(num){
    for (let i = 0; i <= num; i = i++) {
    if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizBaz");
        } else if (i % 3 === 0) {
            console.log("Fiz");
        } else if (i % 5 === 0) {
            console.log("Baz");
        } else {
            console.log(i);
        }
    }
}

  FizBaz(20);