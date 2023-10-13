<h2><span>
  <slot />
</span></h2>

<style>
  h2 {
    font-size: 36px;
    font-weight: 600;
    margin: 0px;
    text-align: center;
    margin-bottom: 40px;
  }
  span {
    border-bottom: 5px solid var(--color-secondary);
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 28px;
      margin-bottom: 30px;
    }
    span {
      border-bottom: 3px solid var(--color-secondary);
    }
	}

  @media screen and (max-width: 500px) {
    h2 {
      font-size: 24px;
      margin-bottom: 20px;
    }
    span {
      border-bottom: 2px solid var(--color-secondary);
    }
	}
</style>
