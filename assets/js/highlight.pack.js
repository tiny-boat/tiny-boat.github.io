/*! highlight.js v9.12.0 | BSD3 License | git.io/hljslicense */

$(function() {
    $('pre code').each(function() {
        var lines = $(this).text().split('\n').length;
        //if (lines < 4) return;  // 当行数小于4时不显示行号
        var $numbering = $('<ol/>').addClass('pre-numbering');
        $(this)
            .addClass('has-numbering')
            .parent()
            .append($numbering);
        for(i=1;i<=lines;i++) {
            $numbering.append($('<li/>').text(i));
        }
    });
});