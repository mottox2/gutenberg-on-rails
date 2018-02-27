// require gutenberg/vendor/react.min.ca6e2421.js
//= require gutenberg/vendor/react.0406e355.js
// require gutenberg/vendor/react-dom.min.3583f8be.js
//= require gutenberg/vendor/react-dom.d3299c8d.js
//= require gutenberg/vendor/react-dom-server.browser.min.9b78570b.js
//= require gutenberg/element/build/index.js
//= require gutenberg/i18n/build/index.js
//= require gutenberg/utils/build/index.js
//= require gutenberg/hooks/build/index.js
//= require gutenberg/vendor/moment.min.0fc04ee9.js

//= require gutenberg/components/build/index.js

//= require gutenberg/routes.js

//= require gutenberg/data/build/index.js
//= require gutenberg/date/build/index.js

//= require gutenberg/vendor/tinymce.min.a3a2e6f1.js
//= require gutenberg/vendor/tinymce-plugin-lists.min.2e16e680.js
//= require gutenberg/vendor/tinymce-plugin-paste.min.f7e3725b.js
//= require gutenberg/vendor/tinymce-plugin-table.min.8a2159f6.js

//= require gutenberg/blocks/build/index.js
//= require gutenberg/editor/build/index.js
//= require gutenberg/edit-post/build/index.js

window.wp.editor.getDefaultSettings = function() {
  return {
    tinymce: {theme:"modern",skin:"lightgray",language:"ja",formats:{alignleft: [{selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li", styles: {textAlign:"left"}},{selector: "img,table,dl.wp-caption", classes: "alignleft"}],aligncenter: [{selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li", styles: {textAlign:"center"}},{selector: "img,table,dl.wp-caption", classes: "aligncenter"}],alignright: [{selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li", styles: {textAlign:"right"}},{selector: "img,table,dl.wp-caption", classes: "alignright"}],strikethrough: {inline: "del"}},relative_urls:false,remove_script_host:false,convert_urls:false,browser_spellcheck:true,fix_list_elements:true,entities:"38,amp,60,lt,62,gt",entity_encoding:"raw",keep_styles:false,cache_suffix:"wp-mce-4607-20180123",resize:"vertical",menubar:false,branding:false,preview_styles:"font-family font-size font-weight font-style text-decoration text-transform",end_container_on_empty_block:true,wpeditimage_html5_captions:true,wp_lang_attr:"ja",wp_keep_scroll_position:false,wp_shortcut_labels:{"Heading 1":"access1","Heading 2":"access2","Heading 3":"access3","Heading 4":"access4","Heading 5":"access5","Heading 6":"access6","Paragraph":"access7","Blockquote":"accessQ","Underline":"metaU","Strikethrough":"accessD","Bold":"metaB","Italic":"metaI","Code":"accessX","Align center":"accessC","Align right":"accessR","Align left":"accessL","Justify":"accessJ","Cut":"metaX","Copy":"metaC","Paste":"metaV","Select all":"metaA","Undo":"metaZ","Redo":"metaY","Bullet list":"accessU","Numbered list":"accessO","Insert\/edit image":"accessM","Remove link":"accessS","Toolbar Toggle":"accessZ","Insert Read More tag":"accessT","Insert Page Break tag":"accessP","Distraction-free writing mode":"accessW","Keyboard Shortcuts":"accessH"},content_css:"http://localhost:9004/wp-includes/css/dashicons.min.css?ver=4.9.4,http://localhost:9004/wp-includes/js/tinymce/skins/wordpress/wp-content.css?ver=4.9.4",toolbar1:"bold,italic,bullist,numlist,link",wpautop:false,indent:true,elementpath:false,plugins:"charmap,colorpicker,hr,lists,paste,tabfocus,textcolor,fullscreen,wordpress,wpautoresize,wpeditimage,wpemoji,wpgallery,wplink,wptextpattern"},
    quicktags: {
      buttons: 'strong,em,link,ul,ol,li,code'
    }
  };
};

      var tinyMCEPreInit = {
    baseURL: "http://localhost:9004/wp-includes/js/tinymce",
    suffix: ".min",
    mceInit: {},
    qtInit: {},
    load_ext: function(url,lang){var sl=tinymce.ScriptLoader;sl.markDone(url+'/langs/'+lang+'.js');sl.markDone(url+'/langs/'+lang+'_dlg.js');}
  };


window._wpGutenbergPost = {"id":1,"date":"2018-02-11T02:23:44","date_gmt":"2018-02-10T17:23:44","guid":{"rendered":"http:\/\/localhost:9004\/?p=1","raw":"http:\/\/localhost:9004\/?p=1"},"modified":"2018-02-25T02:06:07","modified_gmt":"2018-02-24T17:06:07","password":"","slug":"hello-world","status":"draft","type":"post","link":"http:\/\/localhost:9004\/?p=1","title":{"raw":"Hello world!","rendered":"Hello world!"},"content":{"raw":"<p><strong>WordPress<\/strong> \u3078\u3088\u3046\u3053\u305d\u3002\u3053\u308c\u306f\u6700\u521d\u306e\u6295\u7a3f\u3067\u3059\u3002\u7de8\u96c6\u3082\u3057\u304f\u306f\u524a\u9664\u3057\u3066\u30d6\u30ed\u30b0\u3092\u59cb\u3081\u3066\u304f\u3060\u3055\u3044 !<\/p>\n\n<!-- wp:paragraph -->\n<p>New Text is Here<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>aaaaaa<\/p>\n<!-- \/wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>bbbbbb<\/p>\n<!-- \/wp:paragraph -->","rendered":"<p><strong>WordPress<\/strong> \u3078\u3088\u3046\u3053\u305d\u3002\u3053\u308c\u306f\u6700\u521d\u306e\u6295\u7a3f\u3067\u3059\u3002\u7de8\u96c6\u3082\u3057\u304f\u306f\u524a\u9664\u3057\u3066\u30d6\u30ed\u30b0\u3092\u59cb\u3081\u3066\u304f\u3060\u3055\u3044 !<\/p>\n\n<p>New Text is Here<\/p>\n\n<p>aaaaaa<\/p>\n\n<p>bbbbbb<\/p>\n","protected":false},"excerpt":{"raw":"","rendered":"<p>WordPress \u3078\u3088\u3046\u3053\u305d\u3002\u3053\u308c\u306f\u6700\u521d\u306e\u6295\u7a3f\u3067\u3059\u3002\u7de8\u96c6\u3082\u3057\u304f\u306f\u524a\u9664\u3057\u3066\u30d6\u30ed\u30b0\u3092\u59cb\u3081\u3066\u304f\u3060\u3055\u3044 ! New  [&hellip;]<\/p>\n","protected":false},"author":1,"featured_media":0,"comment_status":"closed","ping_status":"closed","sticky":false,"template":"","format":"standard","meta":[],"categories":[1],"tags":[],"revisions":{"count":23,"last_id":29},"_links":{"self":[{"href":"http:\/\/localhost:9004\/index.php?rest_route=\/wp\/v2\/posts\/1"}],"collection":[{"href":"http:\/\/localhost:9004\/index.php?rest_route=\/wp\/v2\/posts"}],"about":[{"href":"http:\/\/localhost:9004\/index.php?rest_route=\/wp\/v2\/types\/post"}],"author":[{"embeddable":true,"href":"http:\/\/localhost:9004\/index.php?rest_route=\/wp\/v2\/users\/1"}],"replies":[{"embeddable":true,"href":"http:\/\/localhost:9004\/index.php?rest_route=%2Fwp%2Fv2%2Fcomments&post=1"}],"version-history":[{"href":"http:\/\/localhost:9004\/index.php?rest_route=\/wp\/v2\/posts\/1\/revisions"}],"wp:attachment":[{"href":"http:\/\/localhost:9004\/index.php?rest_route=%2Fwp%2Fv2%2Fmedia&parent=1"}],"wp:term":[{"taxonomy":"category","embeddable":true,"href":"http:\/\/localhost:9004\/index.php?rest_route=%2Fwp%2Fv2%2Fcategories&post=1"},{"taxonomy":"post_tag","embeddable":true,"href":"http:\/\/localhost:9004\/index.php?rest_route=%2Fwp%2Fv2%2Ftags&post=1"}],"curies":[{"name":"wp","href":"https:\/\/api.w.org\/{rel}","templated":true}]}};

var editorSettings = {"alignWide":false,"colors":["#f78da7","#cf2e2e","#ff6900","#fcb900","#7bdcb5","#00d084","#8ed1fc","#0693e3","#eee","#abb8c3","#313131"],"blockTypes":true,"titlePlaceholder":"Add title"};

// window._wpLoadGutenbergEditor = wp.api.init().then( function() {
// // window._wpLoadGutenbergEditor = new Promise((resolve, reject) => resolve()).then( function() {
//   wp.blocks.registerCoreBlocks();
//   return wp.editPost.initializeEditor( 'editor', window._wpGutenbergPost, editorSettings );
// })

// // window._wpLoadGutenbergEditor.then( function( editor ) {
// //   editor.initializeMetaBoxes( {"normal":false,"advanced":false,"side":false} )
// // } );

// window._wpLoadGutenbergEditor.then( function( editor ) { console.log(editor);editor.initializeMetaBoxes( {"normal":false,"advanced":false,"side":false} ) } );

