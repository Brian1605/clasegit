let arr1 = ["a",1,{},false,[1,2,3]]
//let arr2= arr1[4]
//console.log(arr1)
arr1.push(6)
arr1.push(5)
arr1.push("6")
arr1.push(false)

for(let i=0; i<arr1.length; i++){
    console.log(arr1[1])
    if(i==4){
        for(let j=0;jarr1[4].length;j++){
            console.log(arr1[4][j])
        }
    }
}