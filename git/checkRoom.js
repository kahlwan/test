var arr = [{Rno:504,isEmpty:true},{Rno:505,isEmpty:false},{Rno:506,isEmpty:false}];

module.exports = {
    checkForEmptyRoom : function(roomNo){
        var x = arr.find(x => x.rno === roomNo)
        if(x!== false){
            if(arr[].isEmpty==true){
                return true;
            }else{
                return false;
            }
        }
    } 
} 
