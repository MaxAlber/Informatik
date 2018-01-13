function start()
{
    var playTime = new Date();
    var actualTime = new Date();
    alert("Schiffsglocke gestartet");
    
        {
            if(playTime.getMinutes() <= 30)
            {
                playTime.setMinutes(30);
                alert(playTime);
            }
            else
            {
                playTime.setMinutes(0);
                playTime.setHours(actualTime.getHours() + 1);
                alert(playTime);
            }
            
            setTimeout(playBell, playTime - actualTime);
            
        }
}

function getBells()
{
    var bellTime = new Date();
    var hrs = bellTime.getHours() % 4;
    var min = Math.floor(bellTime.getMinutes() / 30);
    if (hrs == 0 && min == 0)
    {
        return 8;
    }
    return hrs * 2 + min;
}

function playSound(count)
{
    var pause = 2000;
    var i = 0;
    
    
    function ring()
    {
        new Audio("sound/bell.mp3").play();
        
    snd.play();
    }
    function doubleRing()
    {
        ring();
        setTimeout(ring, 400);
    }
    
    while (num > 1)
    {
        pause *= ++i;
        setTimeout(doubleRing, pause);
        num -= 2;
    }
    
    if (num == 1)
    {
        setTimeout(ring, pause * i);
    }
    
    
}

function writeBell(num)
{
  var msg = "";
  while (num > 1)
  {
    msg = msg + "dingding";
    num = num - 2;
  }
  if (num == 1)
  {
      msg += "ding";
      
  }
      alert(msg);

}  


function playBell()
{
    alert("läuten");
    var bellCount = getBells();
    playSound(bellCount);
    writeBell(bellCount);
    setTimeout(playBell, 30 * 60 * 1000);
}

