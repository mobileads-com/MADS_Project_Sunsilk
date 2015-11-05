var path = 'https://rmarepo.richmediaads.com/2754/custom/sunsilk/smartphone/1.0.2/';

var photoTracker1 = 0, photoTracker2 = 0, confirmhijabTracker1 = 0, confirmhijabTracker2 = 0, facebookTracker1 = 0, facebookTracker2 =0, twitterTracker1 = 0, twitterTracker2 = 0, siteTracker1 = 0, siteTracker2 = 0, morehijabTracker1 = 0, morehijabTracker2 =0, photoClickTracker1 = 0, photoClickTracker2 = 0;

if (typeof custTracker == 'undefined' && typeof rma != 'undefined') {
    custTracker = rma.customize.custTracker;
}

var callback = function () {
    
    var c2 = function () {
        var script1 = document.createElement('script');
        script1.src = path+'js/jquery.ui.touch-punch.min.js';
        document.getElementsByTagName('head')[0].appendChild(script1);
    }
    
    var script1 = document.createElement('script');
    script1.src = 'https://code.jquery.com/ui/1.11.4/jquery-ui.js';
    script1.onload = c2;
    document.getElementsByTagName('head')[0].appendChild(script1);

    var script1 = document.createElement('script');
    script1.src = path+'js/jquery.waterwheelCarousel.js';
    document.getElementsByTagName('head')[0].appendChild(script1);

    

    var script1 = document.createElement('script');
    script1.src = path+'js/transit.js';
    document.getElementsByTagName('head')[0].appendChild(script1);

    var script1 = document.createElement('script');
    script1.src = path+'js/jquery-animate-css-rotate-scale.js';
    document.getElementsByTagName('head')[0].appendChild(script1);

    var script1 = document.createElement('script');
    script1.src = 'https://cburgmer.github.io/rasterizeHTML.js/rasterizeHTML.allinone.js';
    document.getElementsByTagName('head')[0].appendChild(script1);

    var script1 = document.createElement('script');
    script1.src = 'https://hammerjs.github.io/dist/hammer.js';
    document.getElementsByTagName('head')[0].appendChild(script1);

    var script1 = document.createElement('script');
    script1.src = path+'js/animeted.js';
    document.getElementsByTagName('head')[0].appendChild(script1);
    
    var script1 = document.createElement('script');
    script1.src = path+'js/exif.js';
    document.getElementsByTagName('head')[0].appendChild(script1);
}
 
var link = document.createElement('link');
link.href = path+'css/style.css';
link.setAttribute('type', 'text/css');
link.setAttribute('rel', 'stylesheet');
document.getElementsByTagName('head')[0].appendChild(link);

var link = document.createElement('link');
link.href = 'https://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css';
link.setAttribute('type', 'text/css');
link.setAttribute('rel', 'stylesheet');
document.getElementsByTagName('head')[0].appendChild(link);
    
var script1 = document.createElement('script');
script1.src = 'https://code.jquery.com/jquery-1.9.1.min.js';
script1.onload = callback;
document.getElementsByTagName('head')[0].appendChild(script1);