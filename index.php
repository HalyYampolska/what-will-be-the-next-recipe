<?php 

/*
    Plugin Name: What Will Be The Next Recipe
    Description: Give your customers a multiple-choice a next recipe publish
    Version 1.0 
    Author: Halyna Yampolska
    Author URI: https://halynayampolska.com/
*/

if (!defined ('ABSPATH')) exit; // Exit if accessed directly 

class WhatWillBeTheNextRecipe {
    function __construct() {
        add_action('enqueue_block_editor_assets', array($this, 'adminAssets'));
    }

    function adminAssets() {
        wp_enqueue_script('nextrecipeblocktype', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
    }
}


$whatWillBeTheNextRecipe = new WhatWillBeTheNextRecipe();