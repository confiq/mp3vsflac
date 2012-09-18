$(document).ready(function(){
   $('#cp_container_1').click(function(){
       var player = null;
      //ok, lets check the status...
       if (player) player.stop(); //TODO: Change to own method so we can change CSS as well...

       //player = Player.fromFile('./music/file0');
       player = Player.fromURL('./music/file0.flac');
       player.on('error', function(e) { console.log(e) });

       console.log(player)

       player.on('metadata', function(data) {
           console.log(data);
           var buf = data['Cover Art'];
           if (!buf) return;

           // Show the album art
           if (buf)
               document.querySelector("img").src = buf.toBlobURL();
       });

       player.play();
   });
});

