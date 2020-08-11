
import axios from "axios";

// Deezer API Documentation
// Deezer is the No. 1 site for listening to music on demand. Discover more than 30 million tracks, create your own playlists, and share your favourite tracks.

export const fetchDeezer = async(e, progress) => {
    
    // progress(2)
    const Deezer = await axios({
        "method":"GET",
        "url":"https://deezerdevs-deezer.p.rapidapi.com/search",
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com",
            "x-rapidapi-key":"1030f32ad3mshd6595aa1fc97cd5p1f921djsn1fb9290534e7",
            "useQueryString":true
            },
            "params":{
                "q":`${e}`
            },
            onUploadProgress (progressEvent) {
                console.log({ progressEvent });
            }
        })
        .then((response)=>{
            return response
        })
        .catch((error)=>{
            console.log(error)
        })
    

    return Deezer

}