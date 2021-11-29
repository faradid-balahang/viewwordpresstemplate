<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package storefront
 */

?>
<footer>
<div id="loading">
    <p class="text-center"> 
    <img src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/images/loading.gif" alt="loading">
    <br>
    لطفا منتظر بمانید...
    </p>
</div>
<div class="full-menu-container d-none">
        <i class="fas fa-arrow-circle-right"></i>
</div>
<div id="mobileMenuContainer" class="d-none">


</div>
<div id="all-pruduct-cat" class="all-pruduct-cat sec-bg-color d-none">
 <div class="d-flex justify-content-center align-items-center close-container">
     <i class="fas fa-times close" id="close"></i>
 </div>   
    <div class="row w-100 m-auto">
<?php
    $args = array(
       'taxonomy'    => 'product_cat',
    //    'orderby'     => 'name',
    //    'order'       => 'ASC',
       'hide_empty'  => true
    );
    $categorizes = get_categories($args);
    $number = 1;
    foreach( get_categories($args) as $category ){
        $termId = $category->term_id ; 
        $thumbnail_id = get_term_meta( $termId, 'thumbnail_id', true ); 
        $image = wp_get_attachment_url( $thumbnail_id );     
    ?>
    <div id="cat-number-<?=$number?>" class="border border-dark rounded cursor-pointer col-4 d-flex flex-column justify-contenet-center align-items-center">
        <p class="product-icon">
            <img src="<?=$image?>" alt="<?= $category->name; ?>">
        </p>
        <p class="product-icon-txt">
            <?= $category->name; ?>
        </p>
    </div>  
    <?php
    $number++;
    }
      wp_reset_postdata();
    ?>
    </div>
</div>
<div id="headChef">
    <div class="cart-number-container">
        <span>
        <?php
            global $woocommerce;
            echo $woocommerce->cart->cart_contents_count;
        ?>
    </div>
    <img src="http://cafezeitoon.ir/wp-content/themes/faradidparham/assets/images/tray.png" alt="گارسون رستوران زیتون">
    <p class="end-order">
        پایان سفارش
    </p>
</div> 
<div id="swipHand">
    <img src="http://cafezeitoon.ir/wp-content/themes/faradidparham/assets/images/hand-swipe.gif" alt="اسلایدر کافه زیتون">

</div>  
</footer>
<script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/jquery-3.6.0.min.js"></script>
    <script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/mdb.min.js"></script>
    <script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/all.min.js"></script>
    <script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/swiper-bundle.min.js"></script>
    <script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/sweetalert2.all.min.js"></script>
    <script src="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/js/script.js"></script>
</body>
<?php wp_footer(); ?>
</html>
