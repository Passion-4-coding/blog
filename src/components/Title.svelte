<h3><span>
  <slot />
</span></h3>

<style>
  h3 {
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
    h3 {
      font-size: 28px;
    }
    span {
      border-bottom: 3px solid var(--color-secondary);
    }
	}

  @media screen and (max-width: 500px) {
    h3 {
      font-size: 24px;
    }
    span {
      border-bottom: 2px solid var(--color-secondary);
    }
	}
</style>
