<script>
  import svelteLogo from './assets/svelte.svg'
  import Game from './lib/Game.svelte'

  let score = 122
</script>

<main>
  <div class="uiBox scoreContainer">
    Score: {score}
  </div>

  <div id="gameContainer" class="uiBox"><Game /></div>
</main>

<style src="./app.css"></style>
