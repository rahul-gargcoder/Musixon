let trackDetail = {
  trackImage:'',
  trackUrl:'',
  trackTitle:'',
  trackArtists:[],
  trackDuration:'',
  trackLink:''
}

export async function allDetail(songname){

  let searchResult;

  await axios.get(`https://apimusic-xbv1.onrender.com/result/?query=${songname}`).then(function (response) {
    console.log(response.data);
    searchResult=response.data;
  }).catch(function (error) {
    console.error(error);
  });

  trackDetail.trackTitle=searchResult.song;
  trackDetail.trackArtists=searchResult.primary_artists;
  trackDetail.trackImage=searchResult.image;
  trackDetail.trackUrl=searchResult.media_url;
  trackDetail.trackDuration=searchResult.duration;
  trackDetail.trackId=searchResult.Id;
  trackDetail.trackLink=searchResult.perma_url;
  return trackDetail;
}
export async function allDetail1(songname){

  let searchResult;
  console.log("searched song "+songname);
  

  await axios.get(`https://saavnapi-nine.vercel.app/song/?query=${songname}`).then(function (response) {
    console.log(response.data);
    searchResult=response.data;
  }).catch(function (error) {
    console.log(error);
  });

  // trackDetail.trackTitle=searchResult.name;
  // trackDetail.trackArtists=searchResult.primaryArtists;
  // trackDetail.trackImage=searchResult.image[2].link;
  // trackDetail.trackUrl=searchResult.downloadUrl[2].link;
  // trackDetail.trackDuration=searchResult.duration;
  // trackDetail.trackId=searchResult.primaryArtistsId;
  // trackDetail.trackLink=searchResult.url;

  trackDetail.trackTitle=searchResult.song;
  trackDetail.trackArtists=searchResult.primary_artists;
  trackDetail.trackImage=searchResult.image;
  trackDetail.trackUrl=searchResult.media_url;
  trackDetail.trackDuration=searchResult.duration;
  trackDetail.trackId=searchResult.primary_artists_id;
  trackDetail.trackLink=searchResult.perma_url;
  await axios.post('https://musixon-aisy.onrender.com/savesong',{
    url:trackDetail.trackLink
  })
  return trackDetail;
}