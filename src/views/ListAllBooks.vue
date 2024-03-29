<script setup></script>
<template>


					<div class="container">

						<!-- Content -->
							<article class="box post">
								
								<header>
									<h2>Liste Books</h2>
									
									<p>Combien</p>
								</header>
								<RouterLink to="/admin/books/create"><button>Create New Book</button></RouterLink>
								<p>
									<table>
										<tr>
										  <th>Name</th>
										  <th>Type</th>
										  <th>Action</th>
										</tr>
										<tr>
										  <td>Alfreds Futterkiste</td>
										  <td>Maria Anders</td>
										  <td><RouterLink to="/admin/books/"><button>voir</button></RouterLink></td>
										</tr>
										<tr>
										  <td>Centro comercial Moctezuma</td>
										  <td>Francisco Chang</td>
										  <td><button>voir</button></td>
										</tr>
									  </table>
								</p>
								
							</article>

					</div>
				

</template>
<style scoped></style>