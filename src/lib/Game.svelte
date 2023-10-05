<script>
  import p5 from 'p5'
  import {onMount} from 'svelte'
  let containerElement
  let width
  let height

  onMount(() => {
    const p5Instance = new p5(sketch, 'game-canvas-container')
    return () => {
      p5Instance.remove() // remove p5.js on component destroy
    }
  })

  function sketch(p) {
    p.setup = () => {
      containerElement = document.getElementById('gameContainer')
      width = containerElement.clientWidth
      height = containerElement.clientHeight
      p.createCanvas(width, height)
      p.background(200)
    }

    p.draw = () => {
      p.fill(255, 0, 0)
      p.ellipse(50, 50, 50, 50)
    }
  }
</script>

<div id="game-canvas-container" />
