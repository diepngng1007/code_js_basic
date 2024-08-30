const theList = ['Lauren','Kevin',true,35,null,undefined,['one','two']];
theList.shift();
theList.pop();
theList.unshift("FIRST");
theList.splice(3,0,"hello world");
theList.splice(3,0,"middle");
theList.push("LAST");
console.log(theList);
