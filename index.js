const search = document.getElementById('search');
const searchbtn = document.getElementById('search-btn');
const results = document.getElementById("results");

const apiURL = "https://api.lyrics.ovh";



searchbtn.addEventListener('click', e => {
    e.preventDefault();

    let searchvalue = search.value.trim();
    if(!searchvalue){
        console.log("search is empty");
    }
    else{
       getResults(searchvalue);
    }
});

async function getResults(val){
    const searchResult = await fetch(`${apiURL}/suggest/${val}`);
    const data = await searchResult.json();
    
    //console.log(data.data);
    showData(data);
}

// Display Search Result
/*
Alternate method instead of using Audio with controls
<span data-preview="${song.preview}" data-songtitle="${song.title}"> Preview (30 sec.)</span>
*/
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

const options = {
	method: 'GET',
	headers: {
		'key': '28300ea403734ad1ae59ba44cd501266'
	}
};

/*
fetch('https://511ga.org/api/v2/get/cameras', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
*/
/* 
Alternate Audio method
*/
/*
results.addEventListener('click', e=>{
    const element = e.target;

    if (element.tagName === 'SPAN'){
        //const artist = element.getAttribute('data-artist');
        const songPreview = element.getAttribute('data-preview');
        const audioURL = songPreview;
        const a = new Audio(audioURL);
        
        playSong(a, audioURL, element);
    }
});
*/

/*
function playSong(a, url, element){

    let isPlaying = false;

        if(isPlaying == true)
        {
            a.pause();
            isPlaying = false;
        }
        else{
            a.play(url);
            isPlaying = true;
        }
        a.addEventListener('pause', function(ev){
            isPlaying = false;
            console.log(isPlaying);
        });

        a.addEventListener('play', function(ev){
            isPlaying = true;
            console.log(isPlaying);
        });

        a.addEventListener('timeupdate', function(ev){

            element.innerHTML = `Preview (${Math.round(30 - this.currentTime)} sec.)`;
            if(this.currentTime < 0 || a.ended)
            {
                element.innerHTML = `Preview (30 sec.)`;
                isPlaying = false;
            }
        });
}
*/





