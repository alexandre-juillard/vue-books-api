<script setup>

import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();

const authorFirstName = ref("");
const authorLastName = ref("");
const title = ref("");
const publicationYear = ref("");
const originalTitle = ref("");
const genre = ref("");
const recap = ref("");
const coverLink = ref("");

const postData = async ()=>{
    const url = 'http://localhost:3000/books';
    const data = {
        author:{
            firstName:authorFirstName.value,
            lastName:authorLastName.value
        },
        title:title.value,
        originalTitle:originalTitle.value,
        publicationYear:publicationYear.value,
        genre:genre.value,
        coverUri:coverLink.value,
        recap:recap.value
    };
    console.log(data);

    const response = await fetch(url, {
        method:'POST',
        headers: {
        "Content-Type": "application/json",
      },
        body:JSON.stringify(data)
    })
    console.log(response);

    if(response.ok){
        alert('Le livre a été ajouté avec succès');
        router.push('/admin/books');
    }
}



</script>

<template>
<section id="main" class="mt-2">
<div class="container">

<!-- Content -->

<h2> Create Form</h2>


<p>
    <form>
        <div class="row gtr-50">
            <div class="col-6 col-12-small">
                <input v-model="authorFirstName" name="firstName" placeholder="Author FirstName" type="text">
            </div>
            <div class="col-6 col-12-small">
                <input v-model="authorLastName" name="lastName" placeholder="Author LastName" type="text">
            </div>
            <div class="col-6 col-12-small">
                <input v-model="title" name="title" placeholder="Title Book" type="text">
            </div>
            <div class="col-6 col-12-small">
                <input v-model="publicationYear" name="publicationYear" placeholder="Date of Publish" type="text">
            </div>
            <div class="col-6 col-12-small">
                <input v-model="originalTitle" name="originalTitle" placeholder="Original Title" type="text">
            </div>
            <div class="col-6 col-12-small">
                <input v-model="genre" name="genre" placeholder="Genre" type="text">
            </div>
            <div class="col-12">
                <textarea v-model="recap" name="recap" placeholder="Recap"></textarea>
            </div>
            <div class="col-12">
                <input v-model="coverLink" name="coverLink" placeholder="Cover Link" type="text">
            </div>
            <div class="col-12">
                <button @click="postData" type="button" class="form-button-submit button icon solid fa-pen">Create</button>
            </div>
        </div>
    </form>
</p>
        


</div>
</section>
</template>
<style scoped></style>