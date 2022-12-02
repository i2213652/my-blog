<script setup>
import Navbar from "@/views/components/nav-bar.vue";
import Header from "@/views/components/header.vue";
import Footer from "@/views/components/footer.vue";

document.title = "Mi Blog";

window.addEventListener("DOMContentLoaded", (event) => {
	// Navbar shrink function
	var navbarShrink = function () {
		const navbarCollapsible = document.body.querySelector("#mainNav");
		if (!navbarCollapsible) {
			return;
		}
		if (window.scrollY === 0) {
			navbarCollapsible.classList.remove("navbar-shrink");
		} else {
			navbarCollapsible.classList.add("navbar-shrink");
		}
	};

	// Shrink the navbar
	navbarShrink();

	// Shrink the navbar when page is scrolled
	document.addEventListener("scroll", navbarShrink);

	// Activate Bootstrap scrollspy on the main nav element
	const mainNav = document.body.querySelector("#mainNav");
	if (mainNav) {
		new bootstrap.ScrollSpy(document.body, {
			target: "#mainNav",
			offset: 74,
		});
	}

	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector(".navbar-toggler");
	const responsiveNavItems = [].slice.call(
		document.querySelectorAll("#navbarResponsive .nav-link")
	);
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener("click", () => {
			if (window.getComputedStyle(navbarToggler).display !== "none") {
				navbarToggler.click();
			}
		});
	});
});
</script>

<template>
	<main>
		<Navbar></Navbar>
		<!-- Masthead-->
		<Header></Header>
		<!-- About-->
		<section class="about-section text-center" id="about">
			<div class="container px-4 px-lg-5">
				<div class="row gx-4 gx-lg-5 justify-content-center">
					<div class="col-lg-8">
						<h2 class="text-white mb-4">¿Quién soy?</h2>
						<p class="text-white-50">
							Soy un apasionado de la informática, con vocación a la creación de
							soluciones innovadoras. Actualmente curso el tercer ciclo de la
							carrera de
							<span class="text-white"
								>Desarrollo de Sistemas de Información</span
							>
							en el <span class="text-white">Instituto Continental</span> y mi
							aspiración principal es crear un centro de formación en TICS para
							niños, jóvenes y adultos.
						</p>
					</div>
				</div>
				<img class="img-fluid" src="@/assets/img/ipad.png" alt="..." />
			</div>
		</section>
		<!-- Projects-->
		<section class="projects-section bg-light" id="projects">
			<div class="container px-4 px-lg-5">
				<!-- Featured Project Row-->
				<div class="row gx-0 mb-4 mb-lg-5 align-items-center">
					<div class="col-xl-8 col-lg-7">
						<img
							class="img-fluid mb-3 mb-lg-0"
							src="@/assets/img/code.jpg"
							alt="..."
						/>
					</div>
					<div class="col-xl-4 col-lg-5">
						<div class="featured-text text-center text-lg-left">
							<h4>Programar</h4>
							<p class="text-black-50 mb-0">
								Es una de las actividades que más disfruto hacer, porque me
								permite crear soluciones nuevas para problemas rutinarios.
							</p>
						</div>
					</div>
				</div>
				<!-- Project One Row-->
				<div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
					<div class="col-lg-6">
						<img
							class="img-fluid"
							src="@/assets/img/demo-image-01.jpg"
							alt="..."
						/>
					</div>
					<div class="col-lg-6">
						<div class="bg-success text-center h-100 project">
							<div class="d-flex h-100">
								<div
									class="project-text w-100 my-auto text-center text-lg-left"
								>
									<h4 class="text-white">VUE JS</h4>
									<p class="mb-0">
										Es una de las tecnologías del lado del cliente que más he
										aprendido debido a su corta ruta de aprendizaje, pero
										potentes funcionalidades, que permite crear aplicaciones de
										forma rápida, agradable, sencilla y práctica.
									</p>
									<hr class="d-none d-lg-block mb-0 ms-0" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- Project Two Row-->
				<div class="row gx-0 justify-content-center">
					<div class="col-lg-6">
						<img
							class="img-fluid"
							src="@/assets/img/demo-image-02.jpg"
							alt="..."
						/>
					</div>
					<div class="col-lg-6 order-lg-first">
						<div class="bg-danger text-center h-100 project">
							<div class="d-flex h-100">
								<div
									class="project-text w-100 my-auto text-center text-lg-right"
								>
									<h4 class="text-white">LARAVEL</h4>
									<p class="mb-0 text-white">
										Por el lado del servidor, este framework tiene una robustes
										que durante los últimos años sigue liderando los tops de
										tecnologías en backend, y debido a que está construido con
										uno de los leguajes iniciadores del desarrollo web, hace que
										sea una de mis herramientas favoritas
									</p>
									<hr class="d-none d-lg-block mb-0 me-0" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Signup-->
		<section class="signup-section" id="signup">
			<div class="container px-4 px-lg-5">
				<div class="row gx-4 gx-lg-5">
					<div class="col-md-10 col-lg-8 mx-auto text-center">
						<i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
						<h2 class="text-white mb-5">Únete y compartamos ideas...</h2>

						<form class="form-signup" id="contactForm">
							<!-- Email address input-->
							<div class="row input-group-newsletter">
								<div class="col">
									<input
										class="form-control"
										id="emailAddress"
										type="email"
										placeholder="Ingresa tu correo"
										aria-label="Enter email address..."
										data-sb-validations="required,email"
									/>
								</div>
								<div class="col-auto">
									<button
										class="btn btn-primary"
										id="submitButton"
										type="button"
									>
										Unirme
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
		<!-- Contact-->
		<section class="contact-section bg-black">
			<div class="container px-4 px-lg-5">
				<div class="row gx-4 gx-lg-5">
					<div class="col-md-4 mb-3 mb-md-0">
						<div class="card py-4 h-100">
							<div class="card-body text-center">
								<i class="fas fa-map-marked-alt text-primary mb-2"></i>
								<h4 class="text-uppercase m-0">Dirección</h4>
								<hr class="my-4 mx-auto" />
								<div class="small text-black-50">
									Casa: Jr. Jose Olaya 450 - El Tambo
								</div>
								<div class="small text-black-50">
									Trabajo: Jr. Cuarzo 125 (Urb. Millotingo) - El Tambo
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4 mb-3 mb-md-0">
						<div class="card py-4 h-100">
							<div class="card-body text-center">
								<i class="fas fa-envelope text-primary mb-2"></i>
								<h4 class="text-uppercase m-0">Email</h4>
								<hr class="my-4 mx-auto" />
								<div class="small text-black-50">
									<a href="#!">richter9721@gmail.com</a>
								</div>
								<div class="small text-black-50">
									<a href="#!">richter9721@outlook.com</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-4 mb-3 mb-md-0">
						<div class="card py-4 h-100">
							<div class="card-body text-center">
								<i class="fas fa-mobile-alt text-primary mb-2"></i>
								<h4 class="text-uppercase m-0">Celular</h4>
								<hr class="my-4 mx-auto" />
								<div class="small text-black-50">+51 955547121</div>
							</div>
						</div>
					</div>
				</div>
				<div class="social d-flex justify-content-center">
					<a
						class="mx-2"
						href="https://www.facebook.com/people/Richter-Rojas/100004274118603/"
						target="blank"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="feather feather-facebook"
						>
							<path
								d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
							/>
						</svg>
					</a>
					<a
						class="mx-2"
						href="https://github.com/i2213652/my-blog"
						target="blank"
						><svg
							viewBox="0 0 24 24"
							width="24"
							height="24"
							stroke="currentColor"
							stroke-width="2"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="css-i6dzq1"
						>
							<path
								d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
							></path>
						</svg>
					</a>
				</div>
			</div>
		</section>
		<!-- Footer-->
		<Footer></Footer>
	</main>
</template>

