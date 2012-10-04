$(document).ready(function(){
    var player = null;
   $('#cp_container_1').click(function(){
      //ok, lets check the status...
       console.log(player);
       if (player) player.stop(); //TODO: Change to own method so we can change CSS as well...

       //player = Player.fromFile('./music/file0');
       player = Player.fromURL('./music/file0.flac');
       player.on('error', function(e) { console.log(e) });
        my_player.isPlaying();
       /*player.on('metadata', function(data) {
           var buf = data['Cover Art'];
           if (!buf) return;

           // Show the album art
           if (buf)
               document.querySelector("img").src = buf.toBlobURL();
       });

       */
       player.play();
   });
});


var my_player = {
    isPlaying: function () {
        alert('hi');
    }
}