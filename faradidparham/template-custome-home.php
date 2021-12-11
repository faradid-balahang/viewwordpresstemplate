<?php
/**
 * The template for displaying the homepage.
 *
 * This page template will display any functions hooked into the `homepage` action.
 * By default this includes a variety of product displays and the page content itself. To change the order or toggle these components
 * use the Homepage Control plugin.
 * https://wordpress.org/plugins/homepage-control/
 *
 * Template name: CustomHomepage
 *
 * @package storefront
 */

get_header('custome'); ?>



<main>
    <div class="container">
    <?php
    $counter = 1;
    $siteTitle  = get_the_title();
    $fargs = array(
        'taxonomy' => 'product_cat',
        // 'orderby' => 'name',
        // 'order' => 'ASC',
        'hide_empty' => false
    );
    $categorizes = get_categories($fargs);
    foreach( get_categories($fargs) as $category ){
       $product_cat_id = strval($category->term_id);
       $firstProductCat =strval($category->name);
       echo "
                <section id=\"esperso-milk{$counter}\" class=\"main-product-cat-section\">
                 <section class=\"main-title\">
                    <img src=\"". esc_url( home_url( '/' ) ) ."wp-content/themes/faradidparham/assets/images/back-cat-{$counter}.png\" class=\"w-100\" alt=\"{$firstProductCat}\">
                 <!-- <h2>
                            <span>".
                            $siteTitle ." - ". 
                            $firstProductCat . 
                            "
                        </span>
                        </h2>-->
                    </section>
                <div class=\"xs-px-0 md-px-3\">
                    <section class=\"container\">
                        <div class=\"row\">";
        $args = array(
            'post_type' => 'product',
            'product_cat_id'=>$product_cat_id,
            'orderby'   => 'meta_value_num',
            'meta_key'  => '_price',
            'order' => 'desc',
            'posts_per_page' => -1,
            'tax_query'             => array(
                array(
                    'taxonomy'      => 'product_cat',
                    'field'         => 'name', //This is optional, as it defaults to 'term_id'
                    'terms'         => $firstProductCat,
                ),
            )
        );
        $productsLoop = new WP_Query($args);
        if ($productsLoop->have_posts()) {
              while ($productsLoop->have_posts()) : $productsLoop->the_post();
              $productId    =  get_the_ID();    
              $price         =strval(wc_get_product(get_the_ID())->get_regular_price());
              $pricelength   =intval(strlen($price));
              $toman         =$pricelength - 4;
              $Thosendtoman  = substr( $price  ,0, $toman );     
                echo "
                    <div class=\"col-12 col-md-6 mb-3\">
                                <div class=\"card main-page-foodcard\">
                                    <div class=\"row\">
                                        <div class=\"col-6 col-md-3 mb-p-0\">
                                            <div class=\"card-img rounded\">
                                                <img src=\"" . get_the_post_thumbnail_url() . "\" alt=\"" . get_the_title() . "\">
                                            </div>
                                        </div>
                                        <div class=\"col-6 col-md-9 mb-p-0\">
                                            <div class=\"product-content-container\">
                                                <section class=\"topcontent\">
                                                    <h3>".
                                                        get_the_title()
                                                    ."</h3>
                                                    <p>".
                                                       get_the_excerpt() 
                                                    ."</p>
                                                </section>
                                                <section class=\"product-price\">
                                                    <p class=\"price-container\">
                                                        {$Thosendtoman}<br/> تومان
                                                    </p>
                                                  
                                                </section>
                                            </div>
                                            <div class=\"add-minu-container\">
                                                <section class=\"add-remove-basket-main\">
                                                    <div class=\"input-group\">
                                                    <div class=\"input-group-text plus-minus-btn-product\" readonly>
                                                        <a id=\"addToEsperso-milk{$counter}\" class=\"btn plus-btn\">
                                                        +
                                                        </a>
                                                    </div>
                                                    <input type=\"number\" class=\"form-control\" value=\"0\"  readonly
                                                    placeholder=\"تعداد\"
                                                    aria-label=\"Input group example\"
                                                    aria-describedby=\"btnGroupAddon2\" min=\"0\" max=\"300\"
                                                    />
                                                    <input type=\"hidden\" value=\"{$productId}\">
                                                    <div class=\"input-group-text plus-minus-btn-product\">
                                                    <a  id=\"addToEsperso-milk{$counter}\" class=\"btn minus-btn\">
                                                    -
                                                    </a>
                                                
                                                    </div>
                                                </div>
                                            </section>
                                          </div>
                                        </div>
                                    </div>
                                </div>
                            </div>";
            endwhile;               
        }
		 echo "
            </div>
            </section>
            </div>
            </section>
            ";
        $counter++;
     }
     wp_reset_postdata();
         ?>

</div>
</main>
<footer class="site-info text-center p-0 main-page-footer">
    <a href="https://faradidparham.com/" target="_blank" id="siteInfo" class="text-center text-white font-1">طراحی و توسعه شرکت فرادید پرهام</a>
</footer>
<?php
get_footer('custome');
