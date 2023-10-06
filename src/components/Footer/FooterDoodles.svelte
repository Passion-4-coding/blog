<script lang="ts">
  // your script goes here
</script>

<img class="doodle-4 doodle" src="/images/doodle-4.svg" alt="doodle">
<img class="doodle-5 doodle" src="/images/doodle-5.svg" alt="doodle">
<img class="doodle-6 doodle" src="/images/doodle-6.svg" alt="doodle">
<img class="doodle-8 doodle" src="/images/doodle-8.svg" alt="doodle">

<style>
  .doodle {
    transform: scale(0.5);
  }
  .doodle-4 {
    position: absolute;
    bottom: 10%;
    left: -40px;
    z-index: 1;
  }
  .doodle-5 {
    position: absolute;
    top: 20%;
    right: 20px;
    z-index: 1;
  }
  .doodle-6 {
    position: absolute;
    top: 30%;
    left: 80px;
    z-index: 1;
  }
  .doodle-8 {
    position: absolute;
    bottom: 10%;
    right: 60px;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    .doodle-4, .doodle-5, .doodle-6, .doodle-8 {
      transform: scale(0.5);
    }
    .doodle-4 {
      bottom: 5px;
    }
    .doodle-6 {
      top: 80px;
      left: 20px;
    }
    .doodle-8 {
      bottom: -75px;
      right: -75px;
    }
	}
</style>

<!-- markup (zero or more items) goes here -->