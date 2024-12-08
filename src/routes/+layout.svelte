<script lang="ts">
	import '../app.css';
</script>

<slot />
<footer class="footer footer-center bg-base-300 text-base-content p-4 sticky top-[100vh]">
	<aside>
		<p>
			<a href="https://purelight.net">Pure-Light Status Page</a> | Created 
			by <a href="https://invisesolutions.com">Invise Solutions</a>
		</p>
	</aside>
</footer>

<style lang="postcss">
	a {
		@apply text-primary link hover:text-secondary;
	}
</style>
