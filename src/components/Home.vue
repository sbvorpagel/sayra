<template>
  <div class="Home">
    <h1>
        Faltam exatos 
        {{ days ? days === 1 ? `${days*-1} dia,` : `${days*-1} dias,` : ''}}
        {{ hours ? hours === 1 ? `${hours} hora,` : `${hours} horas,` : ''}}
        {{ minutes ? horas === 1 ? `${minutes} minuto,` : `${minutes} minutos,` : ''}}
        {{ seconds ? seconds === 1 ? `${seconds} segundo,` : `${seconds} segundos,` : ''}}
        para o começo de uma nova vida de Mayara e Samuel. Uma vida guiada por Deus, familia
        muito amor.
    </h1>
    <h2></h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  methods: {
    time() {
      const day = new Date('2017', '00', '20', '20');
      const today = new Date();
      this.seconds = Math.floor((day - (today)) / 1000);
      this.minutes = Math.floor(this.seconds / 60);
      this.hours = Math.floor(this.minutes / 60);
      this.days = Math.floor(this.hours / 24);
      this.hours = this.hours - (this.days * 24);
      this.minutes = this.minutes - (this.days * 24 * 60) - (this.hours * 60);
      this.seconds = this.seconds - (this.days * 24 * 60 * 60) -
          (this.hours * 60 * 60) - (this.minutes * 60);
      setInterval(this.time, 1000);
    },
  },
  mounted() {
    this.time();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1 {
    text-align: center;
    padding: 10%;
}
</style>
