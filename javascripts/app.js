var main = function () {
	"use strict";

	$(".reviews-input button").on("click", function (event) {
		var $new_comment = $("<p>"),
		comment_text = $(".reviews-input input").val();

		$new_comment.text(comment_text);

		$(".comments").append($new_comment);
	});
};

$(document).ready(main);