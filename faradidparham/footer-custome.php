<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package storefront
 */

?>
<div id="loading">
    <p class="text-center"> 
    <img src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/images/loading.gif" alt="loading">
    <br>
    لطفا منتظر بمانید...
    </p>
</div>
<div class="full-menu-container d-none">

</div>
<div id="mobileMenuContainer" class="d-none">


</div>
<script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/jquery-3.6.0.min.js"></script>
    <script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/mdb.min.js"></script>
    <script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/all.min.js"></script>
    <script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/swiper-bundle.min.js"></script>
    <script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/sweetalert2.all.min.js"></script>
    <script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/script.js"></script>
</body>
<?php wp_footer(); ?>
</html>
