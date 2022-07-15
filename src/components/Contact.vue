<script>
export default {
    data() {
        return {
            name: '',
            email: '',
        }
    }
}
</script>

<!-- Contact form. Will require external modules in Firebase. More than Likely TriggerEmail. Reuse the one from MonkeSend -->

<template>

    <div className="content-center text-white place-items-center flex flex-col">
        <label className="inline-block text-color-slate-600 p-5">Name</label>
        <input type="name" required v-model="name">

        <label className="inline-block text-color-slate-600 p-5">Email</label>
        <input type="email" required v-model="email">
        <div className="p-5">
            <button className="bg-orange-500 hover:bg-gray-700 text-white font-bold px-4 py-3 rounded-full"> Contact Me </button>
        </div>
    </div>
    <div className="content-center text-white place-items-center flex flex-col p-5">
    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <span>Resume</span>
    </button>
    </div>
</template>