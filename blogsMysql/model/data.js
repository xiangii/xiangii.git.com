exports.time  = function(times){
    let d = new Date(times*1000);
    let time = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()+' '+d.getHours()+':'+d.getMinutes();
    return time;
}