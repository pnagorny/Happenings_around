<!-- eslint-disable vue/no-deprecated-v-on-native-modifier -->
<template>
  <body>
    <section id="home">
      <HeaderLoggedIn v-if="isLoggedIn" />
    <HeaderNotLoggedIn v-else />
    </section>
    
<section class="w-full px-32 pt-20 bg-gradient-to-b from-2_color to-1_color mb-24">
  <div class="grid lg:grid-cols-2 gap-6 xl:gap-12 items-center">
        <div class="mb-6 lg:mb-0">
          <h2 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-violet-600">
            Are you ready <br />
            <span class="text-white">for an adventure?</span>
          </h2>
        </div>
        <div class="mb-6 lg:mb-0">
          <p class=" text-white font-bold mb-4 text-xl">SPRAWDŹ NADCHODZĄCE WYDARZENIA</p>
          <p class="text-gray-700 text-lg font-bold">
            Czekają na Ciebie setki możliwości, by zrobić coś dobrego! Niezależnie od tego, czy chcesz pomóc, nauczyć się czegoś nowego, czy spotkać ludzi z podobnymi pasjami, HappeningsAround jest miejscem, które przekształca Twoje intencje w działanie.
          </p>
        </div>
      </div>
</section>

<section class="flex flex-col md:flex-row bg-gradient-to-b from-1_color to-2_color">
  <div class="md:w-1/2  flex justify-center items-center ">
    <div class="container eventList md:ml-20">
      <EventList @zoomToEvent="handleZoomToEvent"/>
    </div>
</div>

      <div class="container md:w-1/2 mt-0 flex justify-center">
        <GoogleMap ref="googleMap"/>
      </div>
    </section>

    <section
      class="w-full bg-gradient-to-b from-2_color to-1_color mx-auto px-8 pt-36 text-center sm:px-12"
    >
      <h1
        class="mb-12 text-5xl font-extrabold leading-tight dark:text-slate-50 sm:text-6xl"
      >
        Chcesz dodać swoje wydarzenie?
      </h1>
      <p class=" mb-12 leading-relaxed text-slate-700 dark:text-slate-50 px-20" >
        Dołącz do HappeningsAround gdzie pasje spotykają potrzeby naszych społeczności. 
        Nasza platforma oferuje miejsce do tworzenia, dzielenia się i angażowania w wydarzenia, które nie tylko inspirują, ale też wywołują realną zmianę. Odkryj możliwości, jakie daje aktywne uczestnictwo w lokalnych inicjatywach i bądź siłą napędową dla dobra wspólnego. 
        Czekają na Ciebie narzędzia, które pomogą przekształcić Twoje idee w działanie.
      </p>
      <div
        class="mx-auto flex w-fit flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
      >
        
        <ModalComponentParentLogged v-if="isLoggedIn" />
    <RegisterParent v-else />
        
        <router-link
                class="rounded-md border-0 bg-slate-100 px-12 py-2 text-base text-dark-900 shadow-lg shadow-slate-100 transition hover:bg-white hover:shadow-slate-200 dark:shadow-slate-600"
                to="/about"
                @click.native="navigateToAboutSection"
              >
                Zobacz więcej
              </router-link>
      </div>
    </section>
    <section class="bg-gradient-to-b from-1_color to-2_color">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
	<div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
	  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
		<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
	  </div>
	  <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-200 text-black  relative z-10 title-font font-medium text-sm">1</div>
	  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
		<div class="flex-shrink-0 w-24 h-24 bg-slate-200 text-indigo-500 rounded-full inline-flex items-center justify-center">
		  <svg class="w-[48px] h-[48px] text-2_color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clip-rule="evenodd"/>
</svg>

		</div>
		<div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
		  <h2 class="font-medium title-font text-white mb-1 text-xl">Zarejestruj się</h2>
		  <p class="leading-relaxed text-slate-200">Stwórz darmowe konto korzystając z forumlarza rejestracji</p>
		</div>
	  </div>
	</div>
	<div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
	  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
		<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
	  </div>
	  <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-200 text-black relative z-10 title-font font-medium text-sm">2</div>
	  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
		<div class="flex-shrink-0 w-24 h-24 bg-slate-200 text-indigo-500 rounded-full inline-flex items-center justify-center">
      <svg class="w-[48px] h-[48px] text-2_color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
</svg>

		</div>
		<div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
		  <h2 class="font-medium title-font text-white mb-1 text-xl">Szukaj wydarzeń</h2>
		  <p class="leading-relaxed text-slate-200 text-">Znajdź interesujące cię wydarzenia w przeznaczonej do tego zakładce korzystając z wygodnych filtrów</p>
		</div>
	  </div>
	</div>
	<div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
	  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
		<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
	  </div>
	  <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-200 text-black relative z-10 title-font font-medium text-sm">3</div>
	  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
		<div class="flex-shrink-0 w-24 h-24 bg-slate-200 rounded-full inline-flex items-center justify-center">
      <svg class="w-[48px] h-[48px] text-2_color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
</svg>
		</div>
		<div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
		  <h2 class="font-medium title-font text-white mb-1 text-xl">Bierz w nich udział</h2>
		  <p class="leading-relaxed text-slate-200">Kliknij serce przy interesującym cię wydarzeniu a automatycznie zostanie ono zapisane w twoim profilu</p>
		</div>
	  </div>
	</div>
	<div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto">
	  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
		<div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
	  </div>
	  <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-slate-200 text-black relative z-10 title-font font-medium text-sm">4</div>
	  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
		<div class="flex-shrink-0 w-24 h-24 bg-slate-200 text-indigo-500 rounded-full inline-flex items-center justify-center">
		  <svg class="w-[48px] h-[48px] text-2_color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path fill="currentColor" d="M4 9.05H3v2h1v-2Zm16 2h1v-2h-1v2ZM10 14a1 1 0 1 0 0 2v-2Zm4 2a1 1 0 1 0 0-2v2Zm-3 1a1 1 0 1 0 2 0h-2Zm2-4a1 1 0 1 0-2 0h2Zm-2-5.95a1 1 0 1 0 2 0h-2Zm2-3a1 1 0 1 0-2 0h2Zm-7 3a1 1 0 0 0 2 0H6Zm2-3a1 1 0 1 0-2 0h2Zm8 3a1 1 0 1 0 2 0h-2Zm2-3a1 1 0 1 0-2 0h2Zm-13 3h14v-2H5v2Zm14 0v12h2v-12h-2Zm0 12H5v2h14v-2Zm-14 0v-12H3v12h2Zm0 0H3a2 2 0 0 0 2 2v-2Zm14 0v2a2 2 0 0 0 2-2h-2Zm0-12h2a2 2 0 0 0-2-2v2Zm-14-2a2 2 0 0 0-2 2h2v-2Zm-1 6h16v-2H4v2ZM10 16h4v-2h-4v2Zm3 1v-4h-2v4h2Zm0-9.95v-3h-2v3h2Zm-5 0v-3H6v3h2Zm10 0v-3h-2v3h2Z"/>
</svg>



		</div>
		<div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
		  <h2 class="font-medium title-font text-white mb-1 text-xl">Twórz je</h2>
		  <p class="leading-relaxed text-slate-200">Daj znać wszystkim o swoim wydarzeniu korzystając z formularza i śledź jego statystyki</p>
		</div>
	  </div>
	</div>
  </div>
</section>
    <section class="  bg-gradient-to-b from-2_color to-1_color">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
	<div class="flex w-full mb-20 flex-wrap">
	  <h1 class="leading-tigh text-4xl  font-sans font-bold text-white lg:w-2/3 lg:mb-0 mb-4">Twórz, obserwuj, działaj – każde wydarzenie ma znaczenie</h1>
	</div>
	<div class="flex flex-wrap md:-m-2 -m-1">
	  <div class="flex flex-wrap w-1/2">
		<div class="md:p-2 p-1 w-1/2">
		  <img alt="gallery" class="w-full object-cover h-full object-center block hover:shadow-2xl hover:-translate-y-1 duration-300" src="../assets/images/1_resized.jpg">
		</div>
		<div class="md:p-2 p-1 w-1/2">
		  <img alt="gallery" class="w-full object-cover h-full object-center block hover:shadow-2xl hover:-translate-y-1 duration-300" src="../assets/images/3.jpg">
		</div>
		<div class="md:p-2 p-1 w-full">
		  <img alt="gallery" class="w-full h-full object-cover object-center block hover:shadow-2xl hover:-translate-y-1 duration-300" src="../assets/images/6.jpg">
		</div>
	  </div>
	  <div class="flex flex-wrap w-1/2">
		<div class="md:p-2 p-1 w-full">
		  <img alt="gallery" class="w-full h-full object-cover object-center block hover:shadow-2xl hover:-translate-y-1 duration-300" src="../assets/images/2.jpg">
		</div>
		<div class="md:p-2 p-1 w-1/2">
		  <img alt="gallery" class="w-full object-cover h-full object-center block hover:shadow-2xl hover:-translate-y-1 duration-300" src="../assets/images/5.jpg">
		</div>
		<div class="md:p-2 p-1 w-1/2">
		  <img alt="gallery" class="w-full object-cover h-full object-center block hover:shadow-2xl hover:-translate-y-1 duration-300" src="../assets/images/4.jpg">
		</div>
	  </div>
	</div>
  </div>
</section>
<section class="bg-gradient-to-b from-1_color to-2_color">
  <div class="container px-5 py-24 mx-auto">
    <h1 class=" text-5xl font-bold font-sans text-center text-white mb-20">Odkryj lokalne inicjatywy.
      <br class="hidden sm:block">Wspieraj ważne sprawy.
    </h1>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-slate-200 text-2_color mb-4 flex-shrink-0">
          <svg class="w-[30px] h-[30px] text-2_color dark:2_color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H6Zm7.25-2.095c.478-.86.75-1.85.75-2.905a5.973 5.973 0 0 0-.75-2.906 4 4 0 1 1 0 5.811ZM15.466 20c.34-.588.535-1.271.535-2v-1a5.978 5.978 0 0 0-1.528-4H18a4 4 0 0 1 4 4v1a2 2 0 0 1-2 2h-4.535Z" clip-rule="evenodd"/>
</svg>

        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-white text-2xl mt-2 title-font font-medium mb-2">Razem tworzymy zmianę!</h2>
          <p class="leading-relaxed  text-base font-medium text-gray-900">Witaj na HappeningsAround, Twoim centrum lokalnych inicjatyw społecznych! Znajdziesz tu platformę do tworzenia, obserwowania i angażowania się w wydarzenia, które naprawdę mają znaczenie. Razem możemy osiągnąć więcej!</p>
          
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-slate-200 text-indigo-400 mb-4 flex-shrink-0">
          <svg class="w-[30px] h-[30px] text-2_color dark:text-2_color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z" clip-rule="evenodd"/>
</svg>

        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-white text-2xl mt-2 title-font font-medium mb-2">Małe kroki, wielka zmiana</h2>
          <p class="leading-relaxed  text-base font-medium text-gray-900">Odkrywaj. Wspieraj. Engażuj. Nasza strona pozwala na łatwe znajdowanie, organizowanie i promowanie wydarzeń społecznych, które przyczyniają się do lepszej przyszłości. Przyłącz się do naszej społeczności aktywnych obywateli już dziś!</p>
          
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex">
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-slate-200 text-indigo-400 mb-4 flex-shrink-0">
          <svg class="w-[30px] h-[30px] text-2_color dark:text-2_color" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 8v8m0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm6-2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 0h-1a5 5 0 0 1-5-5v-.5"/>
</svg>

        </div>
        <div class="flex-grow pl-6">
          <h2 class="text-white text-2xl mt-2 title-font font-medium mb-2">Kształtuj przyszłość naszej społeczności</h2>
          <p class="leading-relaxed  text-base font-medium text-gray-900">Dzięki HappeningsAround każdy może stać się zmianą, którą chce zobaczyć w świecie. Organizuj wydarzenia, dziel się nimi i uczestnicz w inicjatywach, które pomagają budować silniejsze i bardziej zintegrowane społeczności.</p>
          
            
          
        </div>
      </div>
    </div>
  </div>
</section>
    <FooterLoggedIn v-if="isLoggedIn" />
    <FooterNotLoggedIn v-else />
  </body>
</template>

<script>
import { ref, onMounted } from 'vue';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import GoogleMap from '../components/GoogleMap.vue';
import EventList from '../components/EventList.vue';
import RegisterParent from '../components/RegisterParent.vue';
import HeaderNotLoggedIn from '../components/HeaderNotLoggedIn.vue';
import HeaderLoggedIn from '@/components/HeaderLoggedIn.vue';
import FooterNotLoggedIn from '@/components/FooterNotLoggedIn.vue';
import FooterLoggedIn from '@/components/FooterLoggedIn.vue';
import ModalComponentParentLogged from '../components/ModalComponentParentForLoggedIn.vue';
import "../assets/tailwind.css";

export default {
  components: {
GoogleMap, EventList, HeaderLoggedIn, HeaderNotLoggedIn, FooterLoggedIn, FooterNotLoggedIn, RegisterParent,ModalComponentParentLogged
  },
  methods: {
    handleZoomToEvent(geoPoint) {
   console.log(this.$refs); // Check what refs are available
  if (this.$refs.googleMap) {
    this.$refs.googleMap.zoomToLocation(geoPoint);
  } else {
    console.error('GoogleMap component is not properly referenced.');
  }
},
navigateToAboutSection() {
        this.$router.push({ name: 'about' }).then(() => {
          this.$nextTick(() => {
            const aboutSection = document.getElementById('about-section');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          });
        });
      },
navigateToFullEvent() {
        this.$router.push({ name: 'events' }).then(() => {
          this.$nextTick(() => {
            const eventSection = document.getElementById('event-list-main');
            if (eventSection) {
              eventSection.scrollIntoView({ behavior: 'smooth' });
            }
          });
        });
      },

  },
  setup() {
    const name = ref("");
    const isLoggedIn = ref(false);

    let auth;
    onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        isLoggedIn.value = !!user;
      })
    });
    return {
      name,
      isLoggedIn
    }
  }
}

</script>
