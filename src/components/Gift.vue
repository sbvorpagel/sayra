<template>
  <div class="location">
    <h1>Presentes</h1>
    <p>Ficariamos felizes caso queiram nos presentear, temos algumas sugestões logo abaixo. 
      Para facilitar, adicionamos uma opção de colocar o seu nome no presente, assim, evitamos 
      coisas repetidas. Caso queiram saber preferências de modelos etc, ou ainda preferir mudar
      a sua escolha de presente, entrem em contato conosco.</p>
    <p>A enrega dos presente, poderá ser feita tanto no dia e local do casamento, quanto no 
      endereço dos noivos, Rua das Flores, 1170, Bairro Jardim Guarujá, CEP 85804-500.</p>
    <ul id="gifts" class="ul-list">
      <li v-for="(gift, index) in this.gifts">
        <div>
          <p v-if="gift.person">{{ gift.person }}, obrigado por nos presentear com {{ gift.name }}</p>
          <p v-if="!gift.person" class="list">{{ gift.name }}</p>
          <input v-if="!gift.person && !gift.stateGetPerson" type="button" value="Presentear" class="mdl-button mdl-js-button mdl-button--flat mdl-button--colored" @click.prevent="() => setModeGetName(index)"/>
          <input v-if="!gift.person && gift.stateGetPerson" v-model="person" id="input_name" this.v-model="title" type="text" placeholder="Nome" class="mdl-textfield__input no-block-no-width" />
          <input v-if="!gift.person && gift.stateGetPerson" type="button" value="Ok" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" @click.prevent="() => setName(index)"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Gift',
  data() {
    return {
      person: '',
      gifts: [],
      originalGift: [],
    };
  },
  methods: {
    getGifts() {
      this.$root.$firebaseRefs.gifts.on('value', (gifts) => {
        this.originalGift = gifts;
        this.gifts = gifts.val()
          .sort((a, b) => +(a.rank > b.rank) - (a.rank < b.rank));
      });
    },
    setModeGetName(index) {
      const newGifts = this.gifts.map(g => Object.assign(g, { stateGetPerson: false }));
      newGifts[index].stateGetPerson = true;
      this.gifts = [].concat(newGifts);
    },
    setName(index) {
      const modificationGift = this.gifts[index];
      let gift = null;
      let reff = null;
      this.originalGift.forEach((g) => {
        const test = g.val();
        if (test.name === modificationGift.name) {
          gift = test;
          reff = g;
        }
      });
      gift.personx = this.person;
      reff.ref.set(gift).then(this.$router.push('/gift'));
    },
  },
  mounted() {
    this.getGifts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .ul-list {
    padding-left: 0px;
  }
  .list {
    display: inline-block;
    width: 40%;
    max-width: 300px;
    text-align: start;
  }
  .no-block-no-width {
    display: inline-block;
    width: inherit;
  }
</style>
