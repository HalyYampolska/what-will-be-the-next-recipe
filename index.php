<?php 

/*
    Plugin Name: What Will Be The Next Recipe
    Description: Give your customers a multiple-choice a next recipe publish
    Version 1.0 
    Author: Halyna Yampolska
    Author URI: https://halynayampolska.com/
*/

if ( !defined ( 'ABSPATH' ) ) exit; // Exit if accessed directly 

class WhatWillBeTheNextRecipe {
    function __construct() {
        add_action('init', array($this, 'adminAssets'));
    }

    function adminAssets() {
        // Registration 
        wp_register_style('quizeditcss', plugin_dir_url(__FILE__) . 'build/index.css');
        wp_register_script('nextrecipeblocktype', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
        // Command use it 
        register_block_type('myplugin/what-will-be-the-next-recipe', array(
            'editor_script' => 'nextrecipeblocktype',
            'editor_style' => 'quizeditcss', 
            'render_callback' => array($this, 'theHTML')
        ));
    }

    function theHTML($attributes) {
        /* This code change on ob_start 
        return '<p>Today the sky is ' .  $attributes['skyColor'] . ' and the grass is ' . $attributes['grassColor'] . '!!!</p>';*/
        if (!is_admin()) {
            wp_enqueue_script('nextRecipeFrontend', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
            wp_enqueue_style('nextRecipeFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
        }

        ob_start(); ?>
        <div class="next-recipe-update-me"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
        <?php return ob_get_clean();
    }
}


$whatWillBeTheNextRecipe = new WhatWillBeTheNextRecipe();