<script setup>
import {ref} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();
const book = ref({})

const bookId = route.params.id;
const apiUrl = 'http://localhost:3000/books/' + bookId
console.log(apiUrl);
const updateBookDetails = async ()=>{
	const response = await fetch(apiUrl);
	book.value = await response.json();
	
	console.log(book.value);
}

updateBookDetails();

</script>


<template>
    <section id="main" class="mt-2">
<div class="container">

<!-- Content -->

<h2> Update Form</h2>


<p>
    <form>
        <div class="row gtr-50">
            <div class="col-6 col-12-small">
                <input v-model="book.author.firstName" name="firstName" placeholder="Author FirstName" type="text">
            </div>
            <div class="col-6 col-12-small">
                <input v-model="book.author.lastName" name="lastName" placeholder="Author LastName" type="text">
            </div>
            <div class="col-6 col-12-small">
                <input v-model="book.title" name="title" placeholder="Title Book" type="text">
            </div>
            <div class="col-6 col-12-small">
                <input v-model="book.publicationYear" name="publicationYear" placeholder="Date of Publish" type="text">
            </div>
            <div class="col-6 col-12-small">
                <input v-model="book.originalTitle" name="originalTitle" placeholder="Original Title" type="text">
            </div>
            <div class="col-6 col-12-small">
                <input v-model="book.genre" name="genre" placeholder="Genre" type="text">
            </div>
            <div class="col-12">
                <textarea v-model="book.recap" name="recap" placeholder="Recap"></textarea>
            </div>
            <div class="col-12">
                <input v-model="book.coverLink" name="coverLink" placeholder="Cover Link" type="text">
            </div>
            <div class="col-12">
                <button @click="postData" type="button" class="form-button-submit button icon solid fa-pen">Update</button>
            </div>
        </div>
    </form>
</p>
        


</div>
</section>
</template>


<style scoped></style>