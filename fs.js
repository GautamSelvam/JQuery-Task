$(document).ready(function () {
    $('#category').change(function () {
        var filter = $(this).val();
        if (filter === 'all') {
            $('.image-container').show();
        } else {
            $('.image-container').hide();
            $('.image-container[data-category="' + filter + '"]').show();
        }
    });
});

 $(document).ready(function () {
      let dragged = false;
      let startX;
      let x;
      const slider = $(".slider-wrapper");
      const innerSlider = $(".slider-inner");

      slider.on("mouseenter", function () {
        slider.css("cursor", "grab");
      });

      slider.on("mousemove", function (e) {
        if (!dragged) return;
        e.preventDefault();

        x = e.offsetX;
        innerSlider.css("left", x - startX + "px");

        checkProbs();
      });

      slider.on("mouseup", function () {
        slider.css("cursor", "grab");
        dragged = false;
      });

      slider.on("mousedown", function (e) {
        dragged = true;
        startX = e.offsetX - parseInt(innerSlider.css("left"));
        slider.css("cursor", "grabbing");
      });

      $(".prev").on("click", function () {
        let innerSliderLeft = parseInt(innerSlider.css("left"));
        innerSlider.css("left", innerSliderLeft + 265 + "px");

        checkProbs();
      });

      $(".next").on("click", function () {
        let innerSliderLeft = parseInt(innerSlider.css("left"));
        innerSlider.css("left", innerSliderLeft - 265 + "px");

        checkProbs();
      });

      const checkProbs = () => {
        let outer = slider[0].getBoundingClientRect();
        let inner = innerSlider[0].getBoundingClientRect();

        if (parseInt(innerSlider.css("left")) > 0)
          innerSlider.css("left", "-10px");

        if (inner.right < outer.right)
          innerSlider.css(
            "left",
            -inner.width + outer.width + 10 + "px"
          );
      };
    });

$(document).ready(function() {
    animateText();
});

function animateText() {
    $(".footerContent h3").animate(
        { left: '-100%' },
        20000,
        'linear',
        function() {
            $(this).css('left', '100%');
            animateText();
        }
    );
}
