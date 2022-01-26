function digitize(n) {
    let a= String(n);
    let b=[]
    for(let x=0;x<a.length;x++){
      b[x]=Number(a[x])
    }
    let c=[]
    for(let i=0; i<a.length; i++){
         c.push(b.pop())
         }
    return c
  }