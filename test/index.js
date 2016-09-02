;(function ($,window,document,undefined) {//分号是好习惯
    var methods={
        init: function () {
            return this.each(function () {
                //相应方法
            })
        },
        otherfunc: function () {

        }
    }
    $.fn.myPlugin = function(param) {
        //this是被选中的jq对象元素
        console.log(this.text());
        //if ( methods[method] ) {
        //    return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        //} else if ( typeof method === 'object' || ! method ) {
        //    return methods.init.apply( this, arguments );
        //} else {
        //    $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        //}
        return this.each(function () {
            //this被选中的dom对象元素
            var $this=$(this);
            $this.text(param);
        });


    }
})(jQuery,window,document)