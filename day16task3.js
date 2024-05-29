//3.

let arr=["google","helloworld","bsnl" ]
vowels="aeiouAEIOU"

    
for(str of arr)
{
    vStr=[]
    ind=0
    res=""
    c=false
    for(i of str)
    {
       
        if(vowels.includes(i)){
            vStr.push(i)
            c=true
        }
    }

    vStr=vStr.reverse().join("")
    for(a of str){
        if(vowels.includes(a)){
            res+=vStr[ind]
            ind++
        }
        else{
            res+=a
        }

    };
    if(c==false){
        res=str.split("").sort().join("")

    }
    console.log(res)
}
