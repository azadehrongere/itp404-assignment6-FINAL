import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createArtist: function(n){
      n.preventDefault();
      var artistName = this.get('artistName');

      var promise = $.ajax({
        type: 'post',
        url: 'http://itp-api.herokuapp.com/api/artists',
        data: {
          name: artistName
        }
      });

      promise.then((response)=> {
        this.set('artistName', null);
        var artist = this.get('model.artists');
        var newArtists = artist.concat(response.artist);
        this.set('model.artists', newArtists);

        this.transitionToRoute('artists');
        alert('Artist Added!');
      }, function(){
        alert('This artist already exists');
      });
    }
  }
});
