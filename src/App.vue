<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title"><b>Mayara & Samuel</b></span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title"><b>Mayara & Samuel</b></span>
      <nav class="mdl-navigation">
        <router-link class="mdl-navigation__link" to="/" @click.native="hideMenu">Home</router-link>
        <router-link class="mdl-navigation__link" to="/location" @click.native="hideMenu">Locais</router-link>
        <router-link class="mdl-navigation__link" to="/confirm" @click.native="hideMenu">Confirmar a presença</router-link>
        <router-link class="mdl-navigation__link" to="/gift" @click.native="hideMenu">Presentes</router-link>
        <router-link class="mdl-navigation__link" to="/information" @click.native="hideMenu">Mais informações</router-link>
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content parallax">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
require('material-design-lite');

export default {
  name: 'app',
  methods: {
    hideMenu() {
      document.getElementsByClassName('mdl-layout__drawer')[0].classList.remove('is-visible');
      document.getElementsByClassName('mdl-layout__obfuscator')[0].classList.remove('is-visible');
    },
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Tangerine');
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.3.0/material.brown-amber.min.css');

  h1 {
    font-family: 'Tangerine', cursive;
    padding: 16px;
    margin: 0px;
    color: #795548;
  }

  h2 {
    font-family: 'Tangerine', cursive;
    font-size: 35px;
    margin: 0px;
    padding-left: 16px;
    padding-right: 16px;
    text-align: center;
    color: #795548;    
  }

  p {
    padding: 16px;
    font-size: 18px;
    text-align: justify;
    color: #795548;    
  }

  li {
    padding-left: 16px;
    padding-right: 16px;
    color: #795548;
  }

  .mdl-layout-title {
    font-family: 'Tangerine', cursive;
    font-size: 35px;    
  }
</style>