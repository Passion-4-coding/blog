<nav>
  <a href="#about">Про нас</a>
  <a href="#socials">Соц мережі</a>
  <a href="#articles">Статті</a>
</nav>

<style>
  nav {
    display: flex;
    gap: 40px;
  }
  a {
    text-decoration: none;
    color: var(--color-white);
    border-bottom: 3px solid transparent;
    font-size: 24px;
    font-weight: 600;
  }
  a:hover {
    border-bottom: 3px solid var(--color-secondary);
  }
  @media screen and (max-width: 768px) {
		nav {
      gap: 15px;
		}
    a {
      font-size: 18px;
    }
	}
  @media screen and (max-width: 500px) {
		nav {
      gap: 8px;
		}
    a {
      font-size: 12px;
    }
    a:hover {
      border-bottom: 1px solid var(--color-secondary);
    }
	}
</style>