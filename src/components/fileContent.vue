<template>
    <div class="content">
        <audio
        class="music"
        controls="controls" 
        v-for="song in songs"
        :src="song.url"
        :key='song.id'
        type='audio/mp3'></audio>
    </div>
</template>
<script>
export default {
    name:'fileContent',
    data(){
        return {
            songs:[
                {
                    url:require('../../public/musics/one.mp3'),
                    id:1
                },
                {
                    url:require('../../public/musics/two.mp3'),
                    id:2
                }
            ]
        }
    }
}
</script>
