<script>

</script>

<!-- Contact form. Will require external modules in Firebase. More than Likely TriggerEmail. Reuse the one from MonkeSend -->

<template>

    <div className="content-center bg-blue-500 text-white place-items-center flex flex-col">
        <label className="inline-block text-color-slate-600 p-5">Name</label>
        <input type="name" required v-model="name">

        <label className="inline-block text-color-slate-600 p-5">Email</label>
        <input type="email" required v-model="email">

        <!-- Might at Captcha here to prove its a real person. Further research required. -->
        <button className="bg-orange-500 hover:bg-gray-700 text-white font-bold px-4 py-3 rounded-full"> Contact Me </button>
    </div>

</template>