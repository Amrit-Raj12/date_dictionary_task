function getPrev(ans,day,i){
    var k=i
    while(ans[day[k]]===0){
      if(k===0) k=6
      else k-=1
    }
    return ans[day[k]];
  }
  function getNext(ans,day,i){
     var k=i
    while(ans[day[k]]===0){
      if(k===6) k=0
      else k+=1
    }
    return ans[day[k]];
  }
  function myFunction(D) {
    var day = {0:"Sun",1:"Mon",2:"Tue",3:"Wed",4:"Thu",5:"Fri",6:"Sat"};
    let ans = {"Mon":0,"Tue":0,"Wed":0,"Thu":0,"Fri":0,"Sat":0,"Sun":0}
    for(var key in D) {
      let date = new Date(key);
      let dayOfWeekNumber = date.getDay();
      ans[day[dayOfWeekNumber]]+=D[key]
    }
    var tmp=0;
    for(let i=0;i<7;i++){
      if(ans[day[i]]!==0) continue;
      ans[day[i]]=parseInt((getPrev(ans,day,i)+getNext(ans,day,i))/2);
    }
    console.log(ans)
  }
  
  var D = { "2020-01-01":4,"2020-01-02":4,"2020-01-03":6,"2020-01-04":8,"2020-01-05":2,"2020-01-06":-6,"2020-01-07":2,"2020-01-08":-2};
  myFunction(D);