<template>
    <div class="carg-small-wrap"
        @click="handleClick" 
        :id="id">
        <div class="card-image-small-wrap">
            <img class="card-image-small"
                :src="img" alt="image">
            
        </div>
        <p class="card-small-title">
            {{ nameRu }}
        </p>
        <div class="card-small-rating">
            <span class="card-rating">{{ rating }}</span>
            <span class="card-year">{{ year }}</span>
        </div>
    </div>  
</template>

<script>
    export default {
        name: 'movie-small-card',
        props: {
            img: {
                type: String,
                required: true
            },
            nameRu: String,
            rating: Number,
            year: Number,
            id: Number
        },
    }    
</script>

<style>
.movie-small-card {
    width: 300px;
    height: 400px;
    margin: 10px;
    display: flex;
    justify-content: center;
    background-color: #ada7a6;
    border-radius: 10px;
    cursor: pointer;
}

.movie-small-card:hover {
    width: 350px;
    height: 450px;
    transition: 1s;
}

.carg-small-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-image-small-wrap {
    display: flex;
    justify-content: center;
}

.card-image-small {
    height: 280px;
    margin-top: 10px;
}

.card-small-title {
    margin: 10px 20px;
}

.card-small-rating {
    display: flex;
    justify-content: space-between;
    margin: 10px 25px;
}

</style>

