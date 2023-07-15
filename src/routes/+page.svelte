<script>
	import '../app.css';
</script>

<div>
	<div class="hero">
		<h1 class="title">
			&#60; BLOG &#62;
			<img src="/images/line.svg" alt="line" class="decoration line" />
		</h1>
		<img src="/images/circle.svg" alt="circle" class="decoration circle" />
		<img src="/images/cross.svg" alt="triangle" class="decoration cross" />
		<img src="/images/triangle-up.svg" alt="triangle up" class="decoration triangle-up" />
		<img
			src="/images/triangle-bottom.svg"
			alt="triangle bottom"
			class="decoration triangle-bottom"
		/>
	</div>
</div>

<!-- markup (zero or more items) goes here -->

<style>
	.hero {
		background-color: var(--color-primary);
		position: relative;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: 300px;
	}
	.title {
		color: var(--color-white);
		position: relative;
		font-size: 52px;
    padding-bottom: 40px;
	}
	.decoration {
		position: absolute;
	}
	.circle {
		bottom: -100px;
		left: 30px;
	}
	.line {
		bottom: -50px;
		left: calc(50% - 150px);
	}
	.cross {
		top: -20px;
		left: 100px;
		transform: scale(50%);
	}
	.triangle-up {
		top: -120px;
		right: -50px;
	}
	.triangle-bottom {
		bottom: -120px;
		right: 60px;
	}

	@media (max-width: 768px) {
		.decoration {
			transform: scale(75%);
		}
		.cross {
			transform: scale(25%);
			left: -40px;
			top: -40px;
		}
		.triangle-up {
			right: -100px;
		}
		.triangle-bottom {
			right: -70px;
		}
		.line {
			bottom: -30px;
		}
	}
</style>
