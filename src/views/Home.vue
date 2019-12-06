<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter justify-center items-center">
                        <div class="vx-col hidden lg:block lg:w-1/2">
                            <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                            <div class="p-8">
								<div>
									<vx-card slot="no-body" class="text-center bg-primary-gradient greet-user">
												<img src="../assets/images/elements/decore-left.png" class="decore-left" alt="Decore Left" width="200" >
												<img src="../assets/images/elements/decore-right.png" class="decore-right" alt="Decore Right" width="175">
									<feather-icon icon="AwardIcon" class="p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow" svgClasses="h-8 w-8"></feather-icon>
									<h1 class="mb-6 text-white">Leachate Modelling - Web Version</h1>
									<p class="xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white">This is the web version of the popular HELP3 model, for checking and modelling the performance and evaluation of landfills</p>
									<vs-button @click="moveToDashboard" color="danger" type="filled">Start Modelling</vs-button>
									</vx-card>
								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: '',
            password: '',
            checkbox_remember_me: false
        }
	},
	methods: {
		moveToDashboard () {
			this.$router.push('/dashboard');
		}
	}
}
</script>

<style lang="scss">
#page-login {
    .social-login {
        .bg-facebook {
          background-color: #1551b1;
        }
        .bg-twitter {
          background-color: #00aaff;
        }
        .bg-google {
          background-color: #4285F4;
        }
        .bg-github {
          background-color: #333;
        }
    }
}

.home-card-holder {
	max-height: 70px;
}
</style>
