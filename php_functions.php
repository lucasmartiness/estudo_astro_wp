<?php 

// para funcionar no wordpress

add_theme_support( 'post-thumbnails' );



function get_post_by_slug($slug){

    // echo $slug;

    $posts = get_posts(array(
            'name' => $slug,
            'posts_per_page' => 1,
            'post_type' => 'posts',
            'post_status' => 'publish'
    ));



    return $post[0];
    }

    function wpse_141896_shortcode_atts_gallery( $out )
    {
        remove_filter( current_filter(), __FUNCTION__ );
        $out['size'] = 'full';
        return $out;
    }

    function rest_get_post_gallery( $data ) {


    remove_all_filters( 'the_content' );
    remove_all_filters( 'post_gallery' );

    add_filter( 'shortcode_atts_gallery', 'wpse_141896_shortcode_atts_gallery' );

    wp_reset_query();

    $posts  = get_posts( [
        'name' => $data[ 'post_id' ],
        'post_type'   => 'post',
        'post_status' => 'publish',
        'numberposts' => 1

    ] ); 
    
    $gallery = get_post_gallery( $posts[0]->ID , FALSE );

    if ( empty( $gallery ) ) {
        return NULL;
    }

    //comma separated list of ids
    return   $gallery[ 'src' ] ;
}



add_action( 'rest_api_init', function () {
    register_rest_route( 'gallery_plugin/v1', '/post/(?P<post_id>[a-zA-Z0-9-]+)', array(
        'methods' => 'GET',
        'callback' => 'rest_get_post_gallery',
    ) );
} );