<script lang="ts">
	import Title from "./Title.svelte";
</script>

<div class="container">
  <div class="content">
    <Title>Наші цілі</Title>
    <div class="goals">
      <div class="goal">
        <div class="number">01</div>
        <p class="text">Допомагати розробникам ставати кращими. Наші статті будуть корисними як новачкам, так і досвідченим спеціалістам.</p>
      </div>
      <div class="goal">
        <div class="number">02</div>
        <p class="text">Поширювати та розвивати україномовний контент. Вся інформація на нашому сайті доступна українською мовою.</p>
      </div>
      <div class="goal">
        <div class="number">03</div>
        <p class="text">Розповідати про фріланс, його переваги та недоліки. Засновник спільноти - досвідчений фрілансер.</p>
      </div>
      <div class="goal">
        <div class="number">04</div>
        <p class="text">Створити затишне місце, де тобі буде цікаво проводити час. І ми впевнені що тобі тут сподобається.</p>
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    padding: 40px;
  }
  .goals {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 60px;
    grid-row-gap: 60px;
  }

  .goal {
    border: 5px solid var(--color-secondary);
    border-radius: var(--border-radius);
    padding: 45px;
  }

  .number {
    font-size: 128px;
    line-height: 96px;
    font-weight: 500;
    color: #DBDAFA;
  }

  .text {
    font-size: 24px;
    font-weight: 700;
    padding-top: 25px;
  }

  @media screen and (max-width: 768px) {
    .container {
      padding: 30px;
    }
    .goals {
      grid-column-gap: 30px;
      grid-row-gap: 30px;
    }
    .goal {
      border: 3px solid var(--color-secondary);
      border-radius: var(--border-radius);
      padding: 30px;
    }
    .number {
      font-size: 92px;
      line-height: 68px;
    }
    .text {
      font-size: 18px;
    }
	}

  @media screen and (max-width: 500px) {
    .container {
      padding: 20px 0px;
    }
    .goals {
      grid-row-gap: 20px;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
    }
    .goal {
      border: 2px solid var(--color-secondary);
      border-radius: var(--border-radius);
      padding: 20px;
      display: flex;
      align-items: flex-start;
      gap: 10px;
    }
    .number {
      font-size: 64px;
      line-height: 54px;
    }
    .text {
      font-size: 18px;
      line-height: 18px;
      padding-top: 0px;
    }
	}
</style>

<!-- markup (zero or more items) goes here -->