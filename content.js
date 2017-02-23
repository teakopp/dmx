if($("select[name='admin']").find(":selected").text().split('unassigned')[1] == 'dx'){
  console.log('x gonna give it to you');
  var audio = new Audio('http://www.seanplusplus.com/data/dmx.m4a');
  audio.play();
  setTimeout(function(){
    console.log('done')
    audio.pause();
    return;
  },2100);
}
