<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package storefront
 */

?>

		</div><!-- .col-full -->
	</div><!-- #content -->

	<?php do_action( 'storefront_before_footer' ); ?>

	<footer id="colophon" class="site-footer" role="contentinfo">
		<div class="my-custome-footer">

			<?php
			/**
			 * Functions hooked in to storefront_footer action
			 *
			 * @hooked storefront_footer_widgets - 10
			 * @hooked storefront_credit         - 20
			 */
			do_action( 'custome_footer_widgets' );
			?>

		</div><!-- .col-full -->
	</footer><!-- #colophon -->

	<?php do_action( 'storefront_after_footer' ); ?>

</div><!-- #page -->
<div class="full-menu-container d-none">

</div>
<div id="mobileMenuContainer" class="d-none">


</div>
<?php wp_footer(); ?>
<script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/jquery-3.6.0.min.js"></script>
    <script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/mdb.min.js"></script>
    <script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/all.min.js"></script>
    <script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/custome.js"></script>
    <script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/mahallo.js" id="mahallo"></script>

</body>
</html>
