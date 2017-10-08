<template>
  <div class="confirm">
    <h1>Contato</h1>
    <p>Confirme a sua presença e de seus familiares</p>
    <form>
      <div class="mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label is-upgraded is-dirty">
          <input id="confirm" v-model="title" type="text" placeholder="Nomes" class="mdl-textfield__input"/>
        </div>
        <div class="actions">
          <a @click.prevent="postConfirm" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            Confirmar
          </a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Confirm',
  data() {
    return {
      title: '',
    };
  },
  methods: {
    postConfirm() {
      this.$root.$firebaseRefs.confirm.push(
        {
          text: this.title,
          created_at: -1 * new Date().getTime(),
        })
      .then(this.$router.push('/'));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .actions {
    text-align: center;
  }

  .confirm {
    align-items: center;
  }
</style>
