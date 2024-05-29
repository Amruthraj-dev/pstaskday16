
//1.
const prompt=require("prompt-sync")()
rows=+prompt("Enter no of rows: ")
for(i=1;i<=rows;i++)
{
    s=""
    for(j=1;j<=i;j++){
        if(j%2!=0){
            s+=1+" "
        }
        else{
            s+=0+" "
        }
    }
    console.log(s)
}








