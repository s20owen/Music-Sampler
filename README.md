# Music Sampler
Music Sampling web app.

## Leverages Deezer API & OVH Lyrics to sample (30 sec.) music from Deezer's library.
### Retrieves Artist name, Song, Album cover and 30 sec. audio track preview.

#### Powered by: Deezer API (https://developers.deezer.com/) & OVH Lyrics API (https://lyricsovh.docs.apiary.io/#).

### Example OVH use
```
 const apiURL = "https://api.lyrics.ovh";
 
 async function getResults(val){
    const searchResult = await fetch(`${apiURL}/suggest/${val}`);
    const data = await searchResult.json();
    
    showData(data);
}

/* Display Search Result in the DOM */
function showData(data) {
    results.innerHTML = `
    <ul class="list">
      ${data.data
        .map(song=> `<li class="list-items">

                    <h2>Artist: <strong>${song.artist.name}</strong></h2>
                    <p><strong>Song: </strong>${song.title}</p>
                    <img src="${song.album.cover_medium}">
                    <audio id="Audi" src="${song.preview}" controls></audio>

                </li>`
        )
        .join('')}
    </ul>
  `;
    
}
```
## Inital Screen | Search/Results Screen
<img src="/screenshots/initial screen.png" width="300" height="500">  <img src="/screenshots/Search.png" width="300" height="500">





