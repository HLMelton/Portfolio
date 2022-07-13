<script>

</script>

<!-- Contact form. Will require external modules in Firebase. More than Likely TriggerEmail. Reuse the one from MonkeSend -->

<template>
    <div className="content-center">
        <label className="inline-block text-color-slate-600">Email:</label>
        <input type="email" required v-model="email">
        <!-- Might at Captcha here to prove its a real person. Further research required. -->
        <button className="bg-orange-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"> Send </button>
    </div>
</template>