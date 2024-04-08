<script setup>
import {ref} from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();
// const route = useRoute();

const books = ref([]);
const howManyBooks = ref("");

//query url, si existe pas met par défaut page 1 
// const initPage = route?.query.page || 1;
// console.log(initPage);

//pagination

// const pageSize = 20;
const currentPage = ref(1);
const totalPages = ref(2);

const getAllBooks = async ()=>{
	const response = await fetch(`http://localhost:3000/books?page=${currentPage.value}`);
	books.value = await response.json();
	howManyBooks.value = books.value.length;
	router.push({ query: { page: currentPage.value } }); 
	console.log(books.value);
}
getAllBooks();

// //calcul index debut et fin
// const startIndex = computed(() => (currentPage.value - 1) * pageSize);
// const endIndex = computed(() => currentPage.value * pageSize);
// console.log()

// //methode changement de page
// const changePage = (pageNumber) => {
//   currentPage.value = pageNumber;
//   router.push({
//   query:{page:currentPage.value}
// })
// };


//methode pour calcul dynamique du nbr de pages nécessaire selon taille du tableau books
// const totalPages = computed(() => {
//   return Math.ceil(books.value.length / pageSize);
// });


//persistence de la query dans url
// changePage(initPage);

// Fonction pour passer à la page précédente
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    getAllBooks(); // Récupérer les données de la nouvelle page
  }
}

// Fonction pour passer à la page suivante
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    getAllBooks(); // Récupérer les données de la nouvelle page
  }
}

//suppression d'un livre
const deleteBook = async(id) =>{
	const deleteConfirm = confirm('Etes vous sur de vouloir supprimer ce livre?');
	if(deleteConfirm){
		const response = await fetch(`http://localhost:3000/books/${id}`, {
		method: 'DELETE'
	});

	if(response.ok){
		alert('Livre supprimé');
		getAllBooks();
	}
	}
	

}

</script>
<template>
					<div class="container">

						<!-- Content -->
							<article class="box post">
								
								<header>
									<h2>Liste Books</h2>
									
									<p>Sur cette page : {{howManyBooks}} livres</p>
								</header>
								<RouterLink to="/admin/books/create"><button>Create New Book</button></RouterLink>
								<p>
									<table>
										<tr>
										  <th>Title</th>
										  <th>Author</th>
										  <th>Year</th>
										  <th>Genre</th>
										  <th></th>
										</tr>
										<tr v-for="book in books">
										  <td>{{book.title}}</td>
										  <td>{{book.author.firstName}} {{book.author.lastName}}</td>
										  <td>{{book.publicationYear}}</td>
										  <td>{{book.genre}}</td>
										  <td><RouterLink :to="{name: 'update', params: {id : book._id}}"><button>Modifier</button></RouterLink>
											<button @click="deleteBook(book._id)">Supprimer</button></td>
										</tr>
									  </table>
								</p>
								<button>{{ currentPage }}</button>
							</article>

							<nav class="tm-gallery-nav">
	 <!-- Pagination -->
	 <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
    
    <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
  </nav>

					</div>
				

</template>
<style scoped></style>