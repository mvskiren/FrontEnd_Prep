//For Each (Limitations - You can't use break or continue and awaits statements here)

const arr = [2,4,53,4,4,7,26,3];
arr.forEach((item)=> {
    console.log(item);
})

//Polyfill 
Array.prototype.myForEach = function(callback){
    if(callback!=function && this==null) return new throw Error("arr shouldn't be null");
    for(int i=0;i<this.length;i++){
        callback(this[i],i,this);
    }
}

