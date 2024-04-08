<script setup>
import {ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';

const route = useRoute();
const router = useRouter();

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

const updateData = async ()=>{
    const data = {
        author:{
            firstName:book.value.author.firstName,
            lastName:book.value.author.lastName
        },
        title:book.value.title,
        originalTitle:book.value.originalTitle,
        publicationYear:book.value.publicationYear,
        genre:book.value.genre,
        coverUri:book.value.coverLink,
        recap:book.value.recap
    };
    console.log(data);

    const response = await fetch(apiUrl, {
        method:'PUT',
        headers: {
        "Content-Type": "application/json",
      },
        body:JSON.stringify(data)
    })
    console.log(response);

    if(response.ok){
        alert('Le livre a été modifié avec succès');
        router.push('/admin/books');
    }
}

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
                <button @click="updateData" type="button" class="form-button-submit button icon solid fa-pen">Update</button>
            </div>
        </div>
    </form>
</p>
        


</div>
</section>
</template>


<style scoped></style>