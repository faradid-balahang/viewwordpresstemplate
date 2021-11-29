<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/css/mdb.rtl.min.css">
    <link rel="stylesheet" href="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/css/mdb.dark.rtl.min.css">
    <link rel="stylesheet" href="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/css/all.min.css">
    <link rel="stylesheet" href="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/css/fonts.css">
    <link rel="stylesheet" href="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/css/swiper-bundle.min.css">
    <link rel="stylesheet" href="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/css/animate.css">
    <link rel="stylesheet" href="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/css/sweetalert2.min.css">
    <link rel="stylesheet" href="<?php echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/css/style.css">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <?php wp_head(); ?>
    <style>
    /* .myslider-content{
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: center !important;
        align-items: center !important;
        background: url("<?php //echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/images/slider.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        color:white;
    }
    .myslider-content h1{
        color:white;
    } */
    </style>
    <?php
        $post_id = get_the_ID();
        $post = get_post($post_id);
        $blocks = parse_blocks($post->post_content);
        $i = 0;
    ?>
</head>
<body <?php body_class("rtl iransance"); ?>>
    <section id="slider">

        <div class="myslider-content">
             <?php  echo do_shortcode(render_block($blocks[0]));?>
             <?php // do_shortcode(render_block($blocks[2]));?>
        </div>
    </section>
    <header class="sec-bg-color">
        <section class="superheader px-3">
            <section id="menu">
                <div class="d-block d-md-none mobileMenu">
                    <ul>
                        <li>
                        <div class="row cf">
                          <div class="threeHamburger menuCol">
                              <div class="hamburger" id="hamburger-5">
                              <span class="line"></span>
                              <span class="line"></span>
                              <span class="line"></span>
                              </div>
                          </div>
                        </div>
                        </li>
                    </ul>
                </div>
                <div class="d-none d-md-flex justify-content-between align-items-center desktop">
                    <?php
                        $args = array(
                                'theme_location' => 'primary',
                                'menu_id' => 'primary-menu',
                                'container' => false,
                                'items_wrap' => '<ul>%3$s</ul>',
                            );
                            wp_nav_menu($args);
                    ?>
                        <!-- <ul>
                            <li>
                                <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                                <img src="<?php // echo esc_url( home_url( '/' ) ); ?>wp-content/themes/faradidparham/assets/images/logo.png" alt="logo">
                                </a>
                            </li>    
                        </ul> -->
                        <?php
                        $args = array(
                                'theme_location' => 'secondary',
                                'menu_id' => 'secondary-menu',
                                'container' => false,
                                'items_wrap' => '<ul>%3$s</ul>',
                            );
                            wp_nav_menu($args);
                    ?>
                </div>
            </section>
            <h1 class="text-center m-auto iransance">
               <?= get_the_title() ?>
            </h1>
            <section id="cat-icon" class="d-block d-md-none mobileMenu  cursor-pointer">
                <ul>
                    <li>
                 <img src="http://cafezeitoon.ir/wp-content/themes/faradidparham/assets/images/menu.png" alt="menu-cat">           
                 </li>
                </ul>
            </section>
        </section>
        <section class="main-header">
            <!-- <p class="all-cat-title">
                <span>
                   همه دسته بندی ها در یک نگاه
                </span>
            </p> -->
            <section class="swiper-container mySwipercenter">
                <div class="swiper-wrapper">
                    <?php
                        $args = array(
                            'taxonomy' => 'product_cat',
                            // 'orderby' => 'name',
                            // 'order' => 'ASC',
                            'hide_empty' => true
                        );
                        $categorizes = get_categories($args);
                        // die(var_dump($categorizes[0]->name));
                        // die(var_dump($categorizes[0]->term_id));
                        foreach( get_categories($args) as $category ){
                            $termId = $category->term_id ; 
                            $thumbnail_id = get_term_meta( $termId, 'thumbnail_id', true ); 
                            $image = wp_get_attachment_url( $thumbnail_id );                         
                           
                    ?>
                    <div class="swiper-slide">
                        <div class="product-cat-container">
                            <p class="product-icon">
                                <img src="<?=$image?>" alt="<?= $category->name; ?>">
                            </p>
                            <p class="product-icon-txt">
                                <?= $category->name; ?>
                            </p>
                        </div>
                    </div>
                    <?php
                        }
                        wp_reset_postdata();
                    ?>
                </div>
           </section>
        </section>
</header>